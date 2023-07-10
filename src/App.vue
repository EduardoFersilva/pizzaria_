<script setup>
import Header from './components/Header/Header.vue';
import Home from './pages/Home/Home.vue';
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
    
</template>

<script>
export default {
    name:'App',
    components:{
        Header,
        Home
    }
}
</script>

<style scoped>

</style>
