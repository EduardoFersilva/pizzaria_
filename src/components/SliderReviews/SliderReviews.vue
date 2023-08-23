<template>
    <main>
      <v-carousel
      cycle max-height="500"
      hide-delimiter-background
      show-arrows="hover"
      style="color: #DF3D29;
      margin-bottom: 50px;"
      >
        <v-carousel-item v-for="(item, index) in assessments" :key="index">
          <v-sheet height="100%">
            <div class="d-flex fill-height justify-center align-center cont">
              <div class="cards">

                  <img :src="item.image" alt="">
                  <div class="iconStar">
                      <i class="bi bi-star-fill"
                      style="font-size: 25px; color: #FC9D0E;"
                      v-for="i in 5"
                      :key="i"
                      :class="getIcon(index, i)">
                      </i>
                  </div>
                  <h1>{{item.comment}}</h1>
                  <h2>{{item.name}}</h2>

              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </main>
  </template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    assessments: {
      type: Array,
      required: true
    }
  },
  methods: {
    getIcon(index, i) {
      let icon = 'bi bi-star'
      const currentStarNumber = i
      const score = this.assessments[index].score

      if (score >= currentStarNumber) {
        icon += '-fill'
      } else if (score >= currentStarNumber - 0.5) {
        icon += '-half'
      } else {
        icon = 'bi bi-star'
      }

      return icon
    }
  }
}
</script>

<style src="./SliderReviews.scss" lang="scss" scoped />
