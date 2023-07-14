<template>
  <main>
    <h2>{{ title }}</h2>
    <div ref="container" class="keen-slider">
      <div v-for="(item, index) in productItemsCircle" :key="index" class="keen-slider__slide number-slide1">
        <img :src="item.image" :alt="item.productName">
        <a :href="item.actionUrl"></a>
        <h1>{{ item.productName }}</h1>
      </div>
    </div>
  </main>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

export default {
  name: 'SliderCircle',
  props: {
    productItemsCircle: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const [container] = useKeenSlider({
      breakpoints: {
        '(min-width: 320px)': {
          slides: {perView: 1, spacing: 0}
        },
        '(min-width: 600px)': {
          slides: {perView: 3, spacing: 10}
        },
        '(min-width: 890px)': {
          slides: {perView: 4, spacing: 10}
        },
        '(min-width: 1201px)': {
          slides: {perView: 5, spacing: 0}
        }
      },
      slides: {perView: 1}
    })
    return {container}
  }
}
</script>

<style src="./SliderCircle.scss" lang="scss" scoped />
