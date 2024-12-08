<script setup>
import { ElButton } from 'element-plus'; // Import specific components
import 'element-plus/es/components/button/style/css';
defineOptions({
  name:"Pagination"
})
import { ref ,defineEmits } from 'vue';
const currentPage = ref(1)
const emit = defineEmits()

const handlePageChange = (page)=>{
emit("updateValue",page)
currentPage.value = page
}

</script>

<template>
 <div class="example-pagination-block d-flex  justify-content-end my-4">
    <el-pagination 
    background  
    layout="prev, pager, next" 
    :page-size="10" 
    v-model:current-page="currentPage"
    @current-change="handlePageChange"
    :total="100"  />
  </div>
</template>
<style scoped >

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>


