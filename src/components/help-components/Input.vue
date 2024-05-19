<template>
    <div class="search-input">
        <input type="text"> <img class="icon" src="../../assets/search.svg" alt="">
    </div>
</template>

<style scoped>
.search-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f0ffff;
    width: 400px;
    height: 43px;
    border-radius: 10px;
    padding: 1px;
}

input {
    width: 375px;
    height: 33px;
    border: none;
    outline: none;
    padding: 4px;
    border-radius: 10px;
    background-color: #f0ffff;
}

.icon {
    width: 25px;
    border-radius: 50%;
    background-color: rgb(116, 43, 43);
    margin-top: 20px;
    
}
</style>

<script setup>

</script>