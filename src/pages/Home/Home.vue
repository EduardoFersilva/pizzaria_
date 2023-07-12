<template>
  <main>
    <banner
      imageUrl="./imgs/Img-Pizza-Banner.png"
      title="Novidade"
      subtitle="BACK BACON"
      description="Generosas fatias de back bacon defumado e queijo derretido sobre a massa crocante,
       uma delícia para os amantes de bacon e pizza."
      actionUrl="/#/menu-unico"
      actionLabel="FAZER PEDIDO!"
      videoUrl="http://www.google.com"
      videoLabel="ASSISTIR VÍDEO"
    />
    <slider
    title="O que vai ser hoje?"
    :productItems="productItems"
     />
  </main>
</template>

<script>
import Banner from '../../components/Banner/Banner.vue'
import Slider from '../../components/Slider/Slider.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Slider
  },
  data() {
    return {
      productItems: [
        {
          productName: 'Muzzarela de Búfala',
          price: '65',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Super Premium',
          price: '75.5',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Super Premium',
          price: '75.69',
          image: './imgs/Img-Pizza-Card3.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Caprici',
          price: '49.99',
          image: './imgs/Img-Pizza-Card4.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardapio-unico',
          actionLabel: 'FAZER PEDIDO!'
        }
      ]
    }
  }
}
</script>
