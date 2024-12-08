<template>
  <div class="d-flex justify-content-center gap-5  mb-5">
    <div
      class="fs-3 cursor"
      :class="{ selected: selectedTheme === 'total-sales' }"
      @click="handleclick('total-sales')"
    >
      Ventes totales
    </div>
    <div
      class="fs-3 cursor"
      :class="{ selected: selectedTheme === 'top-products' }"
      @click="handleclick('top-products')"
    >
      top produits
    </div>
    <div
      class="fs-3 cursor"
      :class="{ selected: selectedTheme === 'category-sales' }"
      @click="handleclick('category-sales')"
    >
      ventes par catégorie
    </div>
    <div
      class="fs-3 cursor"
      :class="{ selected: selectedTheme === 'products' }"
      @click="handleclick('products')"
    >
      Produits
    </div>
  </div>
  <Products v-if="selectedTheme === 'products'" />
  <TopProducts v-if="selectedTheme === 'top-products'" />
  <CategorySales v-if="selectedTheme === 'category-sales'" />
  <Sales v-if="selectedTheme === 'total-sales'"/>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Products from "../components/Products.vue";
import TopProducts from "../components/TopProducts.vue";
import CategorySales from "../components/CategorySales.vue";
import Sales from "../components/Sales.vue";

const selectedTheme = ref<string>("products");
const handleclick = (selectedItem: string) => {
  selectedTheme.value = selectedItem;
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
  border: 2px solid #242629;
  border-radius: 12px;
  padding: 8px;
  transition: all 0.3s ease;
  font-family: "Karla", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

.selected {
  background-color: #242629;
  color: white;
}
</style>
