<template>
    <main>
        <v-sheet
        class="mx-auto cont"
        elevation="8"
        width="1258"
        >
        <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        >
        <v-slide-group-item
        v-for="n in 8"
        :key="n"
        >
        <v-card
        color=""
        class='ma-4 card'
        height="410"
        width="260"
        >
        <div class="d-flex fill-height align-center justify-center card">
            <product-card
            image-url="./imgs/Img-Pizza-Card2.png"
            title="Super Premium"
            price="R$ 75.69"
            action-url="/#/cardápio-unico"
            action-label="FAZER PEDIDO!"
            />
            <v-scale-transition class="contIcon">
            <v-icon
            color="white"
            size="48"
            icon="mdi-close-circle-outline"
            ></v-icon>
            </v-scale-transition>
        </div>
        </v-card>
        </v-slide-group-item>
        </v-slide-group>
        </v-sheet>
  </main>
</template>
<script>
import ProductCard from '../ProductCard/ProductCard.vue';

  export default {
    data: () => ({
      model: null,
    }),
    components:{
        ProductCard
    }
  }
</script>

<style src="./SliderVuetify.scss" lang="scss" scoped />