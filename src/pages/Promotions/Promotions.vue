<template>
    <main class="contCards">
      <promotions-card
      image-url="/imgs/Img-Banner-Promoção1.png"
      title="Segunda fora da dieta"
      subtitle="BROTINHO + REFRI"
      description="Aproveite a segunda-feira para pedir a sua pizza brotinho mais refrigerante 600ml.
      Afinal, quem disse que a segunda precisa ser triste?"
      price="40"
      action-url="/#/cardápio-unico"
      action-label="FAZER PEDIDO!"
      :backgroundGradient="'linear-gradient(to left, #a326109e 10%, #060404af 90%)'"
      />

      <promotions-card
      image-url="/imgs/Img-Banner-Promoção2.png"
      title="Combo completinho"
      subtitle="SALGADA + DOCE"
      description="Nem só do salgado vive o homem,
      faça seu pedido do nosso combo completinho e aproveite o melhor dos dois mundos"
      price="90"
      action-url="/#/cardápio-unico"
      action-label="FAZER PEDIDO!"
      :backgroundGradient="'linear-gradient(to left, #00924761 10%, #070101 90%)'"
      />
    </main>
</template>

<script>
import PromotionsCard from '../../components/PromotionsCard/PromotionsCard.vue'

export default {
  name: 'Promotions',
  components: {
    PromotionsCard
  }
}
</script>

<style src="./Promotions.scss" lang="scss" scoped />
