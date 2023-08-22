<template>
  <main>
    <h2>{{ title }}</h2>
    <v-sheet class="mx-auto container" max-width="1000">
      <v-slide-group :show-arrows="!isMobile" v-model="model">
        <v-slide-group-item v-for="(item, index) in productItemsCircle" :key="index">
          <v-card class="card" style="margin: 10px;">
            <product-card-circle
              :image-url="item.image"
              :title="item.title"
              :action-url="item.actionUrl"
            />
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </main>
</template>

<script>
import ProductCardCircle from '../ProductCardCircle/ProductCardCircle.vue'

export default {
  name: 'SliderCircle',
  components: {
    ProductCardCircle
  },
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
  data: () => ({
    model: null,
    isMobile: false
  }),
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 610
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

<style src="./SliderCircle.scss" lang="scss" scoped />
