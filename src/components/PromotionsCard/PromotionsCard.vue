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
  price: {
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
  backgroundGradient: {
    type: Array,
    required: false,
    default: null
  }
})
</script>

<template>
    <main>
      <div class="primaryBanner">
        <div class="cont" :style="backgroundGradient ? { backgroundImage: backgroundGradient } : null">
          <img :src="imageUrl" :alt="subtitle">
          <div class="contArea">
            <h1>{{title}}</h1>
            <h2>{{subtitle}}</h2>
            <p>{{description}}</p>
            <div class="buttonArea">
              <h3>{{ priceFormatted(price) }}</h3>
              <a
              v-if="actionUrl !== undefined"
              :href="actionUrl"
              class="btnAction">
              {{actionLabel}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  name: 'PromotionsCard',
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
  }
}
</script>

<style src="./PromotionsCard.scss" lang="scss" scoped />
