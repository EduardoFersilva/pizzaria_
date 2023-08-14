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
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  border: {
    type: Number,
    required: false
  },
  comments: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  textCount: {
    type: String,
    required: false
  },
  icons: {
    type: String,
    required: false
  }

})
</script>

<template>
    <div class="mainRequests">
        <div class="card ">
          <div class="card-body">
            <div class="icons" v-if="icons !== undefined">
                <i class="bi bi-pencil-square" style="font-size: 25px; margin-left: 10px;"></i>
                <i class="bi bi-trash3" style="font-size: 25px; margin-left: 10px;"></i>
            </div>
              <div class="contImg"><img :src="imageUrl" :alt="title"></div>
            <div class="inf">
              <h1>{{ title }}</h1>
              <div class="infosProduct">
                  <div class="size">
                      <h1>Tamanho</h1>
                      <p>{{ size }}</p>
                  </div>
                  <div class="borde" v-if="border !== undefined">
                      <h1>Borda</h1>
                      <p>{{ border }}</p>
                  </div>
              </div>
            </div>
            <div class="obs">
                <h1>Observações</h1>
                <p>{{ comments }}</p>
            </div>
            <div class="amount" v-if="textCount !== undefined">
                    <h1>{{ textCount }}</h1>
                    <count />
            </div>
                <div class="iconsPrice">
                  <div class="iconsDesk" v-if="icons !== undefined">
                    <i class="bi bi-pencil-square" style="font-size: 25px; margin-left: 10px;"></i>
                    <i class="bi bi-trash3" style="font-size: 25px; margin-left: 10px;"></i>
                  </div>
                <h2 class="h2Mobile">R$ {{ price }}</h2>
              </div>

              <div class="amountDesk">
                <div>
                  <h1 v-if="textCount !== undefined" >{{ textCount }}</h1>
                  <count v-if="textCount !== undefined" />
                </div>
                <h2>R$ {{ price }}</h2>
              </div>

          </div>
        </div>
    </div>
</template>

<script>
import Count from '../../components/Count/Count.vue'

export default {
  name: 'CardRequests',
  components: {
    Count
  }

}
</script>

<style src="./CardRequests.scss" lang="scss" scoped />
