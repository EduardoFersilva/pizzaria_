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
  titleColor: {
    type: String,
    default: 'black'
  },
  subtitle: {
    type: String,
    required: true
  },
  subtitleColor: {
    type: String,
    default: 'black'
  },
  description: {
    type: String,
    required: true
  },
  descriptionColor: {
    type: String,
    default: 'black'
  },
  actionUrl: {
    type: String,
    required: false
  },
  actionLabel: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div class="mainn">
        <img :src="imageUrl" :alt="title">

        <div class="cont">
            <h1 :style="{ color: titleColor }">{{ title }}</h1>
            <h2 :style="{ color: subtitleColor }">{{ subtitle }}</h2>
            <p :style="{ color: descriptionColor }">{{ description }}</p>
            <a
            class="btnAction"
            v-if="actionUrl !== undefined"
            :href="actionUrl">
            {{ actionLabel }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BannerEnd'
}
</script>

<style src="./BannerEnd.scss" lang="scss" scoped />
