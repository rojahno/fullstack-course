<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1 class="green">{{ msg }}</h1>
</template>

<style scoped>
.green {
  display: flex;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}
</style>
