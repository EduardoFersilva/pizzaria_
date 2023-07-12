<script setup>
defineProps({
  menu1: {
    type: String,
    required: false
  },
  subMenu1: {
    type: String,
    required: false
  },
  subMenu2: {
    type: String,
    required: false
  },
  subMenu3: {
    type: String,
    required: false
  },
  menu2: {
    type: String,
    required: false
  },
  menu3: {
    type: String,
    required: false
  },
  menu4: {
    type: String,
    required: false
  }
})
</script>

<template>
<div class="sidebar">
    <ul class="menu">
      <details class="menuAll">
        <summary class="pMenu">Cardápio</summary>
        <details>
          <summary class="summaryPizzas">Pizzas</summary>
            <li><a href="/#/pizzas-salgadas" @click="$emit('close')">{{subMenu1}}</a></li>
            <li><a href="/#/pizzas-doces" @click="$emit('close')">{{subMenu2}}</a></li>
        </details>
        <details class="ulBebidas">
          <summary class="summaryDrink">Bebidas</summary>
              <li><router-link to="/refrigerantes" @click="$emit('close')">Refrigerantes</router-link></li>
              <li><router-link to="/cervejas" @click="$emit('close')">Cervejas</router-link></li>
              <li><router-link to="/sucos" @click="$emit('close')">Sucos</router-link></li>
              <li><router-link to="/vinhos" @click="$emit('close')">Vinhos</router-link></li>
              <li><router-link to="/drinks" @click="$emit('close')">Drinks</router-link></li>
        </details>
      </details>

        <li><router-link to="/promoções" @click="$emit('close')">{{menu2}}</router-link></li>
        <li><router-link to="/sobre-nós" @click="$emit('close')">{{menu3}} </router-link></li>
        <li><router-link to="/fale-conosco" @click="$emit('close')">{{menu4}}</router-link></li>
    </ul>
  </div>

      <div
        class="overlay overlay-visible"
        @click="$emit('overlay:click')">
      </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style src="./Sidebar.scss" lang="scss" scoped />
