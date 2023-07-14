<template>
  <main>
    <div ref="container" class="keen-slider">
        <div v-for="(item, index) in assessments" :key="index" class="keen-slider__slide number-slide1">
        <img :src="item.image" alt="">
        <div class="iconStar">
            <i class="bi bi-star-fill" style="font-size: 30px;color: #FC9D0E;"
            v-for="i in 5" :key="i"
            :class="getIcon(i)"></i>
        </div>
        <h1>{{item.comment}}</h1>
        <h2>{{item.name}}</h2>
      </div>
    </div>
  </main>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

export default {
  name: 'SliderReviews',
  props: {
    assessments: {
      type: Array,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  setup() {
    const [container] = useKeenSlider({
      breakpoints: {
        '(min-width: 300px)': {
          slides: {perView: 1, spacing: 0}
        }
      },
      slides: {perView: 1}
    })
    return {container}
  },
  methods: {
    getIcon(i) {
      let icon = 'bi bi-star'
      const currentStarNumber = i + 1
      const prevStarNumber = i

      if (this.score >= currentStarNumber) {
        icon += '-fill'
      }

      if (this.score > prevStarNumber && this.score < currentStarNumber) {
        icon += '-half'
      }
      return icon
    }
  }
}
</script>

<style src="./SliderReviews.scss" lang="scss" scoped />
