
<template>
    <main>
        <div class="banner">
            <div class="secondBanner">
                <div class="logoArea">
                    <logo
                    image="./imgs/Img-Logo-Footer.png"
                    alt-image="Senhora Pizza"
                    />
                    <h1>desde 1963</h1>
                </div>
                <img src="/imgs/Img-Senhora.png" alt="" class="imgSenhora">
            </div>
        </div>
        <div class="card">
            <img src="/imgs/Img-Card-Sobre.jpeg" alt="">
            <h1>A mais tradicional pizzaria do ABC</h1>
            <p>A Senhora Pizza é uma pizzaria renomada localizada na região do ABC,
            que está no mercado desde 1963 oferecendo as melhores pizzas da região.
            Com ingredientes frescos e selecionados, massa artesanal e um atendimento de excelência,
            a Senhora Pizza é o lugar perfeito para quem busca uma experiência
            gastronômica única e saborosa.</p>
        </div>
        <banner-end
        image-url="/imgs/Img-BannerEnd.png"
        title="SENHORA MATILDE"
        title-color="#FC9D0E"
        subtitle="A nona que deu origem a toda nossa história"
        subtitle-color="#000000"
        description="Nona Matilde veio da Itália com suas receitas exclusivas de pizzas e
        abriu a pizzaria Senhora Pizza em 1963. Ela amava cozinhar e ficava feliz em ver seus
        clientes fiéis e satisfeitos. Todos os dias, ela acordava cedo para preparar a massa fresca
        e os ingredientes, garantindo que cada pizza fosse única e deliciosa. Sua paixão pela culinária
        italiana era evidente em cada mordida. A pizzaria prosperou graças ao seu amor
        pela cozinha e à qualidade de suas pizzas."
        description-color="#5f5f5f"
        />

        <timeline />

        <slider
        title="O que vai ser hoje?"
        :productItems="productItems"
        action-url="/#/pizzas-salgadas"
        action-label="VER CARDÁPIO COMPLETO"
        />

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

    </main>
</template>

<script>
import Logo from '../../components/Logo/Logo.vue'
import BannerEnd from '../../components/BannerEnd/BannerEnd.vue'
import Timeline from '../../components/Timeline/Timeline.vue'
import Slider from '../../components/Slider/Slider.vue'
import Revenue from '../../components/Revenue/Revenue.vue'

export default {
  name: 'About',
  components: {
    Logo,
    BannerEnd,
    Timeline,
    Slider,
    Revenue
  },
  data() {
    return {
      productItems: [
        {
          productName: 'Muzzarela de Búfala',
          price: '65',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Super Premium',
          price: '75.5',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Super Premium',
          price: '75.69',
          image: './imgs/Img-Pizza-Card3.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Caprici',
          price: '49.99',
          image: './imgs/Img-Pizza-Card4.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          productName: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        }
      ]
    }
  }
}
</script>

<style src="./About.scss" lang="scss" scoped />
