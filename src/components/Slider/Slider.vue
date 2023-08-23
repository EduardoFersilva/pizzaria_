<template>
  <main>
    <h2>{{ title }}</h2>
    <v-sheet class="mx-auto container" max-width="1290">
      <v-slide-group :show-arrows="!isMobile" v-model="model">
        <v-slide-group-item v-for="(item, index) in productItems" :key="index">
          <v-card class="card" style="margin: 10px;">
            <product-card
              :image-url="item.image"
              :title="item.title"
              :action-url="item.actionUrl"
              :action-label="item.actionLabel"
              :price="item.price"
            />
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
    <a class="btnSeeMenu"
    :href="actionUrl">
    <span>{{ actionLabel }}</span>
    <i class="bi bi-arrow-right"></i>
    </a>
    <p class="pSeeMenu">São mais de 80 sabores!</p>
  </main>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  props: {
    productItems: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    actionUrl: {
      type: String,
      required: false
    },
    actionLabel: {
      type: String,
      required: false
    }
  },
  data: () => ({
    model: null,
    isMobile: false
  }),
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 720
    }
  },
  mounted() {
    this.checkIsMobile()
    window.addEventListener('resize', this.checkIsMobile)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIsMobile)
  }
}
</script>

<style src="./Slider.scss" lang="scss" scoped />
