<template>
  <main>
    <div class="intoduction">
      <div>
        <h1>Cardápio</h1>
        <h2>Pizzas Salgadas</h2>
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

     <revenue
     image-url="/imgs/Img-Receita.png"
     title="PIZZA NAPOLITANA"
     subtitle="Receita original da Itália"
     description="A massa é preparada de forma artesanal, resultando em uma textura leve e crocante,
     e os ingredientes são selecionados com cuidado para garantir o melhor sabor e qualidade.
     Se você procura uma experiência gastronômica autêntica e saborosa,
     experimente a pizza napolitana da Senhora Pizza."
     action-url="/#/cardápio-unico"
     action-label="FAZER PEDIDO!"
     />

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
import Revenue from '../../components/Revenue/Revenue.vue'

export default {
  name: 'SavoryPizzas',
  components: {
    ProductCard,
    Revenue
  },
  data() {
    return {
      cards: [
        {
          title: 'Muzzarela de Búfala',
          price: '65',
          image: './imgs/Img-Pizza-Card1.png'
        },
        {
          title: 'Super Premium',
          price: '75.5',
          image: './imgs/Img-Pizza-Card2.png'
        },
        {
          title: 'Super Premium',
          price: '75.69',
          image: './imgs/Img-Pizza-Card3.png'
        },
        {
          title: 'Caprici',
          price: '49.99',
          image: './imgs/Img-Pizza-Card4.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card1.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card2.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card3.png'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card4.png'
        }
      ]
    }
  }
}
</script>

<style src="./SavoryPizzas.scss" lang="scss" scoped />
