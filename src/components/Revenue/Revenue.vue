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
  subtitle: {
    type: String,
    required: true
  },
  description: {
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
  }
})
</script>

<template>
    <main>
        <img :src="imageUrl" :alt="title">

        <div class="cont">
          <h1>{{title}}</h1>
          <h2>{{subtitle}}</h2>
          <p>{{description}}</p>
          <a
          v-if="actionUrl !== undefined"
          :href="actionUrl"
          class="btnAction">{{actionLabel}}
          </a>
        </div>
    </main>
</template>

<script>
export default {
  name: 'Revenue'
}
</script>

<style src="./Revenue.scss" lang="scss" scoped />
