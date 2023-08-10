<template>
    <main>
      <h2>Meus pedidos</h2>
      <card-requests
        v-for="(card, index) in cards"
        :key="index"
        :image-url="card.imageUrl"
        :title="card.title"
        :size="card.size"
        :border="card.border"
        :comments="card.comments"
        :price="card.price"
      />

      <div class="card">
        <div class="price">
          <h1>Total</h1>
          <h2 id="total">R$ {{ total }}</h2>
        </div>
        <router-link to="/finalizacao-do-pedido"><button class="btnAdvance">AVANÇAR</button></router-link>
      </div>
    </main>
  </template>

<script>
import CardRequests from '../../components/CardRequests/CardRequests.vue'

export default {
  name: 'Requests',
  components: {
    CardRequests
  },
  data() {
    return {
      cards: [
        {
          imageUrl: '/imgs/Img-Pizza-Card4.png',
          title: 'Pizza Caprici',
          size: '8 pedaços',
          border: 'Sem borda',
          comments: '--',
          price: '60,00'
        },
        {
          imageUrl: '/imgs/Img-Bebida4.png',
          title: 'Coca-Cola',
          size: '600 ml',
          comments: '--',
          price: '10,00'
        }
      ],
      total: 0
    }
  },
  methods: {
    calculateTotal() {
      this.total = this.cards.reduce((acc, card) => {
        const price = parseFloat(card.price.replace(',', '.'))
        return acc + price
      }, 0).toFixed(2)
    }
  },
  created() {
    this.calculateTotal()
  }
}
</script>

  <style src="./Requests.scss" lang="scss" scoped />
