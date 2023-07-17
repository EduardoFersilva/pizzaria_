<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  altImage: {
    type: String,
    required: true
  }
})
</script>

<template>
        <img :src="image" :alt="altImage">
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
img{
    height: 50px;
}
</style>
