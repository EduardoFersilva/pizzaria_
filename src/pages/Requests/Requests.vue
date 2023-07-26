<template>
    <main>
        <h2>Meus pedidos</h2>
        <card-requests
        image-url="/imgs/Img-Pizza-Card4.png"
        title="Pizza Caprici"
        size="8 pedaços"
        border="Sem borda"
        comments="--"
        price="120,00"
        />

        <card-requests
        image-url="/imgs/Img-Bebida4.png"
        title="Coca-Cola"
        size="600 ml"
        comments="--"
        price="20,00"
        />
    </main>
</template>

<script>
import CardRequests from '../../components/CardRequests/CardRequests.vue'

export default {
    name:'Requests',
    components:{
        CardRequests
    }
}
</script>

<style src="./Requests.scss" lang="scss" scoped />