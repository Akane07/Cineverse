<template>
    <Header></Header>
</template>

<style scoped>



</style>

<script setup>
import Header from "../help-components/header.vue";
import { query } from '../../api/index.js';

query("/movie?lists[]=top100").then((res) => {
    console.log(res);
})

</script>