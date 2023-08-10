<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  selected: {
    type: Boolean,
    defaut: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="card">

        <input class="radio" type="radio" :checked="selected">

        <div class="iconImg">
            <img :src="imageUrl"
            class="img" :alt="title">
        </div>

        <div>
            <p class="subtitle">{{ title }}</p>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CardSelect',
  data() {
    return {
    }
  }

}
</script>

<style src="./CardSelect.scss" lang="scss" scoped />
