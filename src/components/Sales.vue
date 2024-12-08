<template>
    <div class="dates">
        <div class="row">
    <label for="" class="fs-5" >From </label>
    <input type="date" @change="handleDateChange" name="startDate"  value="2023-02-26">
</div>
        <div class="row">
    <label for="" class="fs-5">To </label>
    <input type="date" @change="handleDateChange" name="endDate" :value="todayDate">
</div>
<div class="d-flex justify-content-center align-items-end">
    <button class=" btn btn-dark fs-5 bttn " @click="getTotalSales"> ok </button>
</div>
    </div>
    <div class="d-flex justify-content-center my-5 gap-3">
        <div class="fs-3">
            Total Sales :
        </div>
        <div class="fs-3 text-info">
          $   {{ totalSales }}  
        </div>

    </div>
    <div class="text-danger fs-5 text-center">
    {{ errorAlert }}
</div>


  </template>

  
  <script setup>
  import axios from "axios";
  import Pagination from "./Pagination.vue";
  import { ref } from "vue";
  const todayDate = ref(new Date().toISOString().split('T')[0]);
  const dates = ref({startDate:"2023-02-26",endDate:"2024-02-26"})
  const totalSales = ref(0)
const errorAlert = ref("")
const handleDateChange = (e)=>{
dates.value = {
...dates.value,
[e.target.name]: e.target.value
}
console.log(dates.value);

}
const getTotalSales = async ()=>{
   try {
   const   { data } =  await axios.get(`http://localhost:3000/api/analytics/total_sales?mind=${dates.value.startDate}&maxd=${dates.value.endDate}`) ;
   const {results} = data;
   errorAlert.value = "";
   if (results.length > 0){
     totalSales.value = results[0].TotalAmount;
   }else{
    totalSales.value = 0
   }


   
   } catch (error) {
    errorAlert.value = " ⚠ something went wrong try again later pls !"
  console.log(error);
    
   }

}




  </script>
  
  <style scoped>
.bttn{
    width: 100px;
}
  input{
    width: 260px;
    padding: 0.5rem
  }
.dates {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    gap: 50px;

}
.row {
    flex-direction: column;
}
  </style>
  