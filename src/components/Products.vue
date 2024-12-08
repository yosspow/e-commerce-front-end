<template>
  <div>
    <h1>Les Produits</h1>
    <b-table
      striped
      :items="items"
      :fields="fields"
      class="custom-table"
    ></b-table>
   
  </div>
  <pagination v-if="isLoading=== false" @updateValue="handleChangePage" />
  <div class="placeholders" v-if="isLoading === true">
    <p class="placeholder-glow" v-for="number in 10" :key="number">
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
      ],
      items: [],
      error: null,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchProducts(1);
  },
  methods: {
    handleChangePage (p) {
this.fetchProducts(p)
    },
    async fetchProducts(page) {
      try {
        axios.get(`http://localhost:3000/api/products?page=${page}`).then((response) => {
          this.items = response.data.results;
          this.isLoading = false;
        });
      } catch (error) {
        (this.error = "error fetcing products"), console.log(error);
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
