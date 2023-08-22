<template>
  <main>
    <banner
      imageUrl="./imgs/Img-Pizza-Banner.png"
      title="Novidade"
      subtitle="BACK BACON"
      description="Generosas fatias de back bacon defumado e queijo derretido sobre a massa crocante,
       uma delícia para os amantes de bacon e pizza."
      action-url="/#/cardápio-unico"
      action-label="FAZER PEDIDO!"
      video-url="http://www.google.com"
      video-label="ASSISTIR VÍDEO"
    />

    <slider-vuetify
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

    <slider-circle
    title="Bebidas"
    :productItemsCircle="productItemsCircle"
    />

    <banner-end
    image-url="/imgs/Img-BannerEnd.png"
    title="CONHEÇA NOSSA HISTÓRIA"
    title-color="#FC9D0E"
    subtitle="Uma Senhora Pizza desde 1963"
    subtitle-color="#FFFFFF"
    description="A Senhora Pizza é uma pizzaria renomada localizada na região do ABC,
    que está no mercado desde 1963 oferecendo as melhores pizzas da região.
    Com ingredientes frescos e selecionados, massa artesanal e um atendimento de excelência,
    a Senhora Pizza é o lugar perfeito para quem busca uma experiência gastronômica única e saborosa."
    description-color="#FFFFFF"
    action-url="/#/sobre-nós"
    action-label="SAIBA MAIS"
    />

  <slider-reviews
  :assessments="assessments"
  />

  </main>
</template>

<script>
import Banner from '../../components/Banner/Banner.vue'
import Slider from '../../components/Slider/Slider.vue'
import Revenue from '../../components/Revenue/Revenue.vue'
import SliderCircle from '../../components/SliderCircle/SliderCircle.vue'
import BannerEnd from '../../components/BannerEnd/BannerEnd.vue'
import SliderReviews from '../../components/SliderReviews/SliderReviews.vue'
import SliderVuetify from '../../components/SliderVuetify/SliderVuetify.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Slider,
    Revenue,
    SliderCircle,
    BannerEnd,
    SliderReviews,
    SliderVuetify
  },
  data() {
    return {
      productItems: [
        {
          title: 'Muzzarela de Búfala',
          price: '65',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Super Premium',
          price: '75.5',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Super Premium',
          price: '75.69',
          image: './imgs/Img-Pizza-Card3.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Caprici',
          price: '49.99',
          image: './imgs/Img-Pizza-Card4.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card1.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        },
        {
          title: 'Muzzarela de Búfala',
          price: '65.15',
          image: './imgs/Img-Pizza-Card2.png',
          actionUrl: '/#/cardápio-unico',
          actionLabel: 'FAZER PEDIDO!'
        }
      ],
      productItemsCircle: [
        {
          title: 'Refrigerantes',
          image: './imgs/Img-Refrigerantes-Slider.jpeg',
          actionUrl: '/#/refrigerantes'
        },
        {
          title: 'Cervejas',
          image: './imgs/Img-Cervejas-Slider.jpeg',
          actionUrl: '/#/cervejas'
        },
        {
          title: 'Sucos',
          image: './imgs/Img-Sucos-Slider.jpeg',
          actionUrl: '/#/sucos'
        },
        {
          title: 'Vinhos',
          image: './imgs/Img-Vinhos-Slider.jpeg',
          actionUrl: '/#/vinhos'
        },
        {
          title: 'Drinks',
          image: './imgs/Img-Drinks-Slider.jpeg',
          actionUrl: '/#/drinks'
        }
      ],
      assessments: [
        {
          image: './imgs/Img-Cliente1-SliderReviews.jpg',
          score: 3.5,
          comment: '“A massa é preparada de forma artesanal, resultando em uma textura leve e crocante, e os ingredientes são selecionados com cuidado”',
          name: 'Prof. Gilmar'
        },
        {
          image: './imgs/Img-Cliente2-SliderReviews.jpg',
          score: 4.7,
          comment: '“Uma das melhores pizzas que já comi. Muito boa mesmo. PALMEIRAS!!”',
          name: 'Gustavo Nunes'
        },
        {
          image: './imgs/Img-Cliente3-SliderReviews.jpg',
          score: 2.5,
          comment: '“Já comi melhores.”',
          name: 'Eduardo Fernandes'
        }
      ]
    }
  }
}
</script>
