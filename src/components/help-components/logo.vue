<template>
<div class="circle" @mouseover="isHovered = true" @mouseleave="isHovered = false">
  <img src="../../assets/logo.png" alt=""> 
  <span v-for="(e, i) in 'CIneVerse' " :style="[isHovered ? rotate(i):'', { '--rot': (i - 3.98) * 39 + 'deg' }]" >{{ e }}</span>
</div>
</template>

<style>
img {
  margin-bottom: 20px;
}
.circle {
  margin-top: 18px;
  margin-left: 50px;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(silver, #F0FFFF);
  border: 10px solid #F0FFFF;
  text-align: center;
  line-height: 165px;
  font-size: 19px;
}

span {
  display: inline-block;
  width: 25px;
  position: absolute;
  transform: translate(-36.5px,-32px) rotate(var(--rot)) translate(0,-70px);
}

span:nth-child(odd) {
  color: silver;
}

span:nth-child(4) {
  color: #cfaab6;
}

span:nth-child(8) {
  color: #cfaab6;
}

@keyframes run {
  0% {
    transform: translate(-36.5px,-32px) rotate(var(--rot1)) translate(0,-70px);
  }

  50% {
    transform: translate(-36.5px,-32px) rotate(var(--rot2)) translate(0,-70px);
  }

  100% {
    transform: translate(-36.5px,-32px) rotate(var(--rot3)) translate(0,-70px);
  }
}

</style>


<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
const rotate = (i) => {
  return {
    '--rot1': (i - 3.98) * 39 + 'deg',
    '--rot2': (i - 9.9) * 39 + 'deg',
    '--rot3': (i - 3.98) * 39 + 'deg',
    'animation': 'run 3s ease-in-out infinite'
  }
}
</script>