<template>
    <div class="header">
        <div class="wrapper">
            <Logo class="logotip"></Logo>
            <Input class="search"></Input>
        </div>
    </div>
</template>

<style scoped>
.header {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 10px;
}
.wrapper {
    background: linear-gradient(to right, rgb(116, 43, 43), black);
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
    display: flex;
    justify-content: space-between;
}

.logotip {
    transform: scale(0.8);
    margin-bottom: 10px;
}

.search {
    margin-top: 52.5px;
    margin-right: 150px;
}
</style>

<script setup>
import Logo from "./logo.vue"
import Input from "./Input.vue"
</script>