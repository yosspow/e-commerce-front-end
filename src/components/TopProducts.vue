<template>
  <div>
    <h1>Les Produits le plus vendus (triés par quantité)</h1>
    <b-table
      striped
      :items="items"
      :fields="fields"
      class="custom-table"
    ></b-table>
  </div>
  <div class="placeholders" v-if="isLoading === true">
    <p class="placeholder-glow" v-for="number in 5" :key="number">
      <span class="placeholder col-12"></span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fields: [
        { key: "ProductID", label: "Product ID", sortable: true },
        { key: "ProductName", label: "Product Name", sortable: true },
        { key: "Price", label: "Price ($)", sortable: true },
        { key: "TotalQuantity", label: "Total Sales" },
        { key: "totalIncome", label: "Total Income ($)" },
      ],
      items: [],
      error: null,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchTopProducts();
  },
  methods: {
    async fetchTopProducts() {
      try {
        axios
          .get("http://localhost:3000/api/analytics/trending_products")
          .then((response) => {
            this.items = response.data.results;
            this.isLoading = false;
          });
      } catch (error) {
        (this.error = "error fetcing top products"), console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 20px 20px;
}

.custom-table {
  width: 80%;
  margin: 0 auto; 
}


</style>
