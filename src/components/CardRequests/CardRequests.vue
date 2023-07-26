<script setup>
defineProps({
    imageUrl:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    }, 
    border:{
        type: Number,
        required: false
    },
    comments:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    
})
</script>

<template>
    <div class="mainRequests">
        <div class="cardPedido">
            <div class="icons">
                <i class="bi bi-pencil-square" style="font-size: 25px; margin-left: 10px;"></i>
                <i class="bi bi-trash3" style="font-size: 25px; margin-left: 10px;"></i>
            </div>
            <img :src="imageUrl" :alt="title">
            <h1>{{title}}</h1>

            <div class="infosProduct">
                <div class="size">
                    <h1>Tamanho</h1>
                    <p>{{size}}</p>
                </div>
                <div class="borde">
                    <h1>Borda</h1>
                    <p>{{border}}</p>
                </div>
            </div>
            <div class="obs">
                <h1>Observações</h1>
                <p>{{comments}}</p>
            </div>
            <div class="amount">
                <div>
                    <h1>Quantidade</h1>
                    <count />
                </div>
                <h2>R$ {{price}}</h2>
            </div>
        </div>

        <div class="cardPedidoDesktop">
            <img :src="imageUrl" :alt="title">
            <div>
                <h1>{{title}}</h1>

                <div class="infosProduct">
                    <div class="size">
                        <h1>Tamanho</h1>
                        <p>{{size}} pedaços</p>
                    </div>
                    <div class="borde">
                        <h1>Borda</h1>
                        <p>{{border}}</p>
                    </div>
                </div>
                <div class="obs">
                    <h1>Observações</h1>
                    <p>{{comments}}</p>
                </div>
            </div>
            <div class="divPrice">
                <div class="icons">
                    <i class="bi bi-pencil-square" style="font-size: 25px; margin-left: 10px;"></i>
                    <i class="bi bi-trash3" style="font-size: 25px; margin-left: 10px;"></i>
                </div>
                <div class="amount">
                    <div class="count">
                        <h1>Quantidade</h1>
                        <count />
                    </div>
                    <h2>R$ {{price}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Count from '../../components/Count/Count.vue';

export default {
    name:'CardRequests',
    components:{
        Count
    }
}
</script>

<style src="./CardRequests.scss" lang="scss" scoped />