<script setup>
import Sidebar from '../components/Sidebar.vue';
import HeaderSection from '../components/HeaderSection.vue';
import Dashboard from '../components/main/dashboard/Dashboard.vue';
// import MainContent from '../components/main/MainContent.vue';
</script>

<template>
  <div class="container">
    <Sidebar/>
    <div class="main">
      <HeaderSection/>
      <!-- dynamic content -->
      <Dashboard/>
      <!-- dynamic content -->
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.main{
        margin-top: 1.4rem;
    }
</style>
