<template>
  <main>
    <div class="intoduction">
      <div>
        <h1>Cardápio</h1>
        <h2>Refrigerantes</h2>
      </div>

      <div class="searchArea">
          <input type="text" name="text" class="input" placeholder="Pesquisar produto">
          <button
              type="button"
              class="btn btnSearch">
              <i class="bi bi-search"
              style="margin-right: 5px;">
              </i>
              Buscar
          </button>
      </div>
    </div>
    <div class="cards">
        <product-card
        v-for="(card, index) in cards"
        :key="index"
        :image-url="card.image"
        :title="card.title"
        :price="card.price"
        action-url="/#/cardápio-unico"
        action-label="FAZER PEDIDO!"
        />
    </div>
  </main>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard.vue'

export default {
  name: 'SoftDrinks',
  components: {
    ProductCard
  },
  data() {
    return {
      cards: [
        {
          title: 'Pepsi',
          price: '12',
          image: './imgs/Img-Bebida1.png'
        },
        {
          title: 'H2OH!',
          price: '8',
          image: './imgs/Img-Bebida2.png'
        },
        {
          title: 'Pepsi Twist',
          price: '12',
          image: './imgs/Img-Bebida3.png'
        },
        {
          title: 'Coca-Cola',
          price: '8',
          image: './imgs/Img-Bebida4.png'
        },
        {
          title: 'Sukita',
          price: '8',
          image: './imgs/Img-Bebida5.png'
        },
        {
          title: 'Guaraná Antartica',
          price: '10',
          image: './imgs/Img-Bebida6.png'
        },
        {
          title: 'Pepsi',
          price: '12',
          image: './imgs/Img-Bebida1.png'
        },
        {
          title: 'H2OH!',
          price: '8',
          image: './imgs/Img-Bebida2.png'
        }
      ]
    }
  }
}
</script>

<style src="./SoftDrinks.scss" lang="scss" scoped />
