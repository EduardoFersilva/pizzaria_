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
  },
  actionLabel: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img :src="imageUrl" :alt="title">
    <h1>{{ title }}</h1>
    <p>{{ priceFormatted }}</p>
    <a type="button" class="btn btnRequests" v-if="actionUrl !== undefined" :href="actionUrl">
      {{ actionLabel }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  computed: {
    priceFormatted() {
      const value = parseFloat(this.price)
      if (isNaN(value)) {
        return this.price
      }
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return formatter.format(value)
    }
  }
}
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
