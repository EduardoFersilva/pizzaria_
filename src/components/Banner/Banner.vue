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
  },
  videoUrl: {
    type: String,
    required: false
  },
  videoLabel: {
    type: String,
    required: false,
    default: 'ASSISTIR VIDEO'
  }
})
</script>

<template>
    <main>
        <div class="firstLayer">
        <div class="secondLayer">
            <div class="contBanner">
            <img :src="imageUrl" :alt="subtitle">
            <div class="contBannerSecondary">
                <h1>{{title}}</h1>
                <h2>{{subtitle}}</h2>
                <p>{{description}}</p>
                <div class="contVideo">
                    <a
                    class="btnAction"
                    v-if="actionUrl !== undefined"
                    :href="actionUrl">
                    {{actionLabel}}
                    </a>

                    <a
                    class="bi bi-play-circle-fill iconVideo"
                    style="font-size: 40px; color: #fff;"
                    v-if="videoUrl !== undefined"
                    :href="videoUrl"
                    target="_blank">
                    <p>{{videoLabel}}</p>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style src="./Banner.scss" lang="scss" scoped />
