<template>
  <div class="contt">
  <main>
    <h2>{{ title }}</h2>
    <div ref="container" class="keen-slider">
      <div v-for="(item, index) in productItems" :key="index" class="keen-slider__slide number-slide1">
        <img :src="item.image" :alt="item.productName">
        <h1>{{ item.productName }}</h1>
        <p>{{ priceFormatted(item.price) }}</p>
        <a class="btnAction" :href="item.actionUrl">{{ item.actionLabel }}</a>
      </div>
    </div>
  </main>
    <button class="btnSeeMenu">
    <span>VER CARDÁPIO COMPLETO</span>
    <i class="bi bi-arrow-right"></i>
    </button>
    <p class="pSeeMenu">São mais de 80 sabores!</p>
    </div>
</template>

<script>
import {useKeenSlider} from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

export default {
  props: {
    productItems: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    priceFormatted() {
      return (price) => {
        const value = parseFloat(price)
        if (isNaN(value)) {
          return price
        }
        const formatter = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
        return formatter.format(value)
      }
    }
  },

  setup() {
    const [container] = useKeenSlider({
      breakpoints: {
        '(min-width: 320px)': {
          slides: {perView: 1, spacing: 25}
        },
        '(min-width: 600px)': {
          slides: {perView: 2, spacing: 20}
        },
        '(min-width: 890px)': {
          slides: {perView: 3, spacing: 20}
        },
        '(min-width: 1200px)': {
          slides: {perView: 4, spacing: 20}
        }
      },
      slides: {perView: 1}
    })
    return {container}
  }
}
</script>

<style src="./Slider.scss" lang="scss" scoped />
