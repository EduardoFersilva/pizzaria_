<script setup>
defineProps({
  actionUrl: {
    type: String,
    required: true
  },
  actionLabel: {
    type: String,
    required: true
  },
    whatsNumber: {
    type: Number,
    required: true
  },
    whatsLabel: {
    type: String,
    required: true
  },
  menu1: {
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
    <div class="line"></div>
    <header>
        <router-link to="/">
            <logo
            image="../src/assets/images/logo.png"
            alt-image="Senhora Pizza"
            />
        </router-link>

    <div class="menu">
      
      <ul>
        <details>
          <summary>{{menu1}}</summary>
          <div class="detailsItems">
            <li><router-link to="/pizzas-salgadas">Pizzas Salgadas</router-link></li>
            <li><router-link to="/pizzas-doces">Pizzas Doces</router-link></li>
            <details class="drinkItems">
              <summary>Bebidas</summary>
              <li><router-link to="/refrigerantes">Refrigerantes</router-link></li>
              <li><router-link to="/cervejas">Cervejas</router-link></li>
              <li><router-link to="/sucos">Sucos</router-link></li>
              <li><router-link to="/vinhos">Vinhos</router-link></li>
              <li><router-link to="/drinks">Drinks</router-link></li>
            </details>
          </div>
        </details>
        <li><router-link to="/promoções">{{menu2}}</router-link></li>
        <li><router-link to="/sobre-nós">{{menu3}}</router-link></li>
        <li><router-link to="/fale-conosco">{{menu4}}</router-link></li>
      </ul>
    </div>

    <div class="buttons">
      <a 
      type="button" 
      class="btn btn-outline-dark btn-sm btnRequests"
      :href="actionUrl">
      {{ actionLabel }}
      <i class="bi bi-cart2" style="font-size: 25px; margin-left: 10px;"></i>
      </a>

      <a 
      type="button" 
      class="btn btn-danger btn-sm btnContact"
      :href="`https://api.whatsapp.com/send/?phone=${whatsNumber}`" target="_blank">
      <i class="bi bi-whatsapp" style="font-size: 25px; margin-right: 10px;"></i>
      <div>
        <p>Faça seu pedido</p>
        {{ whatsLabel }}
      </div>
    </a>
    </div>
        


    <div class="icon-menu">
        <a class="bi bi-cart2" :href="actionUrl" style="font-size: 35px; cursor:pointer;"></a>
        <div class="hamburger" :class="{ active: isSidebarOpen }" @click="toggleSidebar">
            <div :class="{ green: !isSidebarOpen, red: isSidebarOpen }"></div>
            <div class="white"></div>
            <div class="red"></div>
        </div>
      </div>
    </header>


    <sidebar
    v-if="isSidebarOpen"
    menu1="Cardápio"
    sub-menu1="Pizzas salgadas"
    sub-menu2="Pizzas doces"
    sub-menu3="Bebidas"
    menu2="Promoções"
    menu3="Sobre nós"
    menu4="Fale conosco"
    @overlay:click="isSidebarOpen = false"
    @close="isSidebarOpen = false"
    />


    <div class="menuoverlay"></div>
</template>

<script>
import Logo from '../Logo/Logo.vue';
import Sidebar from '../Sidebar/Sidebar.vue';

export default {
    name:'Header',
    components:{
        Logo,
        Sidebar
    },
    data() {
    return {
      isSidebarOpen: false,
    }
  },
methods: {
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
}
</script>

<style src="./Header.scss" lang="scss" scoped />