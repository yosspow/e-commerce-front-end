<template>
  <div>
    <h1>ventes par catégorie</h1>
    <b-table
      striped
      :items="items"
      :fields="fields"
      class="custom-table"
    ></b-table>
  </div>
  <div class="placeholders" v-if="isLoading === true">
    <p class="placeholder-glow" v-for="number in 10" :key="number">
      <span class="placeholder col-12"></span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import 'charts.css';
export default {
  data() {
    return {
      fields: [
        { key: "Category", label: "Category", sortable: true },
        { key: "totalSalesCount", label: "total sales", sortable: true },
        {
          key: "categoryPercentage",
          label: "pourcentage des ventes (%)",
          sortable: true,
        },
      ],
      items: [],
      error: null,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchCategorySales();
  },
  methods: {
    async fetchCategorySales() {
      try {
        axios
          .get("http://localhost:3000/api/analytics/category_sales")
          .then((response) => {
            this.items = response.data.results;
            this.isLoading = false;
          });
      } catch (error) {
        (this.error = "error fetcing category sales"), console.log(error);
      }
    },
  },
};
</script>

<style scoped>
#my-chart {
  width: 100%;
  max-width: 600px;
  margin: 200px auto;
}
h1 {
  margin: 20px 20px;
}

.custom-table {
  width: 80%;
  margin: 0 auto;
}
</style>
