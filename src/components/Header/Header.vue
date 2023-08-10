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
            image="./imgs/logo.png"
            alt-image="Senhora Pizza"
            @click="closeSidebar"
            />
        </router-link>

    <div class="menu">

      <ul>
        <li :class="{ active: isSidebarOpen }" @click="toogleisExpandableMenu">{{ menu1 }}</li>
        <expandable-menu
        v-if="isExpandableMenuOpen"
        menu1="Pizzas"
        subMenu1="Pizzas Salgadas"
        subMenu2="Pizzas doces"
        menu2="Bebidas"
        subMenu3="Refrigerantes"
        subMenu4="Cervejas"
        subMenu5="Sucos"
        subMenu6="Vinhos"
        subMenu7="Drinks"
        @overlay:click="isExpandableMenuOpen = false"
        @close="isExpandableMenuOpen = false"
        />
        <li><router-link to="/promocoes"    @click="closeExpandableMenu">{{menu2}}</router-link></li>
        <li><router-link to="/sobre-nos"    @click="closeExpandableMenu">{{menu3}}</router-link></li>
        <li><router-link to="/fale-conosco" @click="closeExpandableMenu">{{menu4}}</router-link></li>
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
        <a class="bi bi-cart2" :href="actionUrl" style="font-size: 35px; cursor:pointer;" @click="closeSidebar"></a>
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
import Logo from '../Logo/Logo.vue'
import Sidebar from '../../components/Sidebar/Sidebar.vue'
import ExpandableMenu from '../ExpandableMenu/ExpandableMenu.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Sidebar,
    ExpandableMenu
  },
  data() {
    return {
      isSidebarOpen: false,
      isExpandableMenuOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      if (this.isSidebarOpen) {
        this.toggleSidebar()
      }
    },
    toogleisExpandableMenu() {
      this.isExpandableMenuOpen = !this.isExpandableMenuOpen
    },
    closeExpandableMenu() {
      if (this.isExpandableMenuOpen) {
        this.toogleisExpandableMenu()
      }
    }
  }
}
</script>

<style src="./Header.scss" lang="scss" scoped />
