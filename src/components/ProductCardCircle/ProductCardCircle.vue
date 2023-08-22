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
  <div class="cont">
    <img :href=actionUrl :src="imageUrl" :alt="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductCardCircle'
}
</script>

<style src="./ProductCardCircle.scss" lang="scss" scoped />
