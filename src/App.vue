<script setup>
import Header from './components/Header/Header.vue'
import Home from './pages/Home/Home.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
    <Header
    menu1="Cardápio"
    menu2="Promoções"
    menu3="Sobre nós"
    menu4="Fale conosco"
    action-url="/#/meus-pedidos"
    action-label="Meus Pedidos"
    :whats-number="5511912154278"
    whats-label="(11) 91215-4278 "
    />

    <main>
        <router-view></router-view>
    </main>

    <Footer
      :whats-number="5511912154278"
      whats-label="(11) 91215-4278"
      menu1="Promoções"
      menu2="Sobre nós"
      menu3="Fale conosco"
      menu4="Meus pedidos"
      address="Rua Sete de Setembro, 182 Vila Alzira - Santo André - SP"
      service="Segunda a Quinta das 18h às 23h Sexta a Domingo das 18h às 0h"
    />
</template>

<script>

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style scoped>

</style>
