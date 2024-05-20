<template>
    <div class="header">
        <div class="wrapper">
            <Logo class="logotip" @click = '$router.push("/")'></Logo>
            <div class="lists">
                <p class="films">Фильмы</p>
                <p class="actors">Актёры</p>
                <p class="directors">Режиссёры</p>
            </div>
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
    cursor: pointer;
}

.lists {
    display: flex;
    gap: 25px;
    margin-top: 42px;
    font-size: large;
    color: antiquewhite;
}
.lists :nth-child(2) {
    color: rgb(202, 143, 94);
    cursor: pointer;
}
.lists :nth-child(odd) {
    cursor: pointer;
}
.search {
    margin-top: 52.5px;
    margin-right: 150px;
    cursor: pointer;
}
</style>

<script setup>
import Logo from "./logo.vue"
import Input from "./Input.vue"
</script>