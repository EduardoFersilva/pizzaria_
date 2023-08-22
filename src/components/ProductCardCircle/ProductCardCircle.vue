<script setup>

defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  actionUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
    <a :href="actionUrl" class="cont">
      <img :src="imageUrl" :alt="title">
      <h1>{{ title }}</h1>
    </a>
  </template>

<script>
export default {
  name: 'ProductCardCircle'
}
</script>

<style src="./ProductCardCircle.scss" lang="scss" scoped />
