<script setup>
import HeaderSection from '../HeaderSection.vue';
import Dashboard from './dashboard/Dashboard.vue';

</script>

<template>
    <div>
        <div class="main">
            <HeaderSection/>
            <Dashboard/>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .main{
        margin-top: 1.4rem;
    }
</style>