<template>
    <main>
        <div class="infos">
          <h1>Entrega e Pagamento</h1>
          <h2>Informações</h2>

          <inputs
          label="Nome"
          v-bind="name"
          type="text"
          placeholder=""
          :width="'100%'"
          />

          <inputs
          label="Telefone"
          v-bind="phone"
          type="number"
          placeholder=""
          :width="'100%'"
          />

          <h2>Retirada ou Entrega</h2>

          <card-select
          imageUrl="./imgs/Img-Icon-Retirada.png"
          title="Retirada no balcão"
          description="Rua Sete de Setembro, 182 Vila Alzira Santo André - SP"
          :selected="isPickUp"
          @click="selectCardDelivery('entrega')"
          :class="{ 'selected': isPickUp }"
          />

          <card-select
          imageUrl="./imgs/Img-Icon-Entrega.png"
          title="Entrega"
          description="R$ 5,00"
          :selected="isDelivery"
          @click="selectCardDelivery('retirada')"
          :class="{ 'selected': isDelivery }"
          />

          <inputs
          label="CEP"
          v-bind="cep"
          type="cep"
          placeholder=""
          :width="'100%'"
          @input="searchAddress"
          />
          <div
            v-if="loading"
            class="spinner-border text-danger spinner" role="status">
          </div>
          <p v-if="message.length > 0" class="error-message">{{message}}</p>

          <inputs
          label="Endereço"
          v-bind="address"
          type="text"
          placeholder=""
          :width="'100%'"
          />

          <div class="numberEnd">
          <inputs
          label="Número"
          v-bind="number"
          type="number"
          placeholder=""
          :width="'100%'"
          />

          <inputs
          label="Complemento"
          v-bind="complement"
          type="text"
          placeholder=""
          :width="'100%'"
          />
        </div>

          <h2>Forma de pagamento</h2>

          <card-select
          imageUrl="./imgs/Img-Icon-Cartão.png"
          title="Cartão de Crédito"
          description=""
          :v-model="opcaoSelecionada"
          :selected="isCard"
          @click="selectCardPay('cartao')"
          :class="{ 'selected': isCard }"
          />

          <card-select
          imageUrl="./imgs/Img-Icon-Dinheiro.png"
          title="Dinheiro"
          description=""
          :v-model="opcaoSelecionada"
          :selected="isMoney"
          @click="selectCardPay('dinheiro')"
          :class="{ 'selected': isMoney }"
          />

          <inputs
          v-if="isMoney"
          label="Levar troco para"
          v-bind="change"
          type="text"
          placeholder=""
          :width="'150px'"
          />
      </div>
      <div class="requests">

        <h2>Revisão do pedido</h2>

          <card-requests
          v-for="(card, index) in cards"
          class="card-requests"
          :key="index"
          :image-url="card.imageUrl"
          :title="card.title"
          :size="card.size"
          :border="card.border"
          :comments="card.comments"
          :price="card.price"
          />

          <div class="cardTotal">
            <div class="textDelivery" v-if="isDelivery">
              <h1>Entrega</h1>
              <h2>R$ 5,00</h2>
            </div>
            <div class="linha" v-if="isDelivery"></div>
            <div class="textTotal">
              <h1>Total</h1>
              <h2>R$ 20,00</h2>
            </div>
          </div>
          <div class="button">
            <router-link to="/pedido-finalizado"><button class="btnAdvance">FINALIZAR PEDIDO</button></router-link>
          </div>
      </div>
    </main>
</template>

<script>
import Inputs from '../../components/Inputs/Inputs.vue'
import CardSelect from '../../components/CardSelect/CardSelect.vue'
import CardRequests from '../../components/CardRequests/CardRequests.vue'
import axios from 'axios'

export default {
  name: 'Checkout',
  components: {
    Inputs,
    CardSelect,
    CardRequests
  },
  data() {
    return {
      name: '',
      email: '',
      opcaoSelecionada: '',
      selectedCardDelivery: '',
      selectedCardPay: '',
      address: '',
      neighborhood: '',
      loading: false,
      message: '',
      showModal: false,
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
      ]
    }
  },
  methods: {
    async searchAddress(cep) {
      cep = cep.toString().replace(/[^0-9]/g, '')
      if (cep.length !== 8) {
        return
      }

      this.loading=true
      this.message=''
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        this.address = response.data.logradouro
        this.neighborhood = response.data.bairro
        if (response.data.hasOwnProperty('erro')) {
          this.message='CEP Inválido!'
        }
      } catch (e) {
        this.message='Serviço Indisponível'
      }

      this.loading = false
    },
    selectCardDelivery(card) {
      this.selectedCardDelivery = card
    },
    selectCardPay(card) {
      this.selectedCardPay = card
    },
    openModal() {
      this.showModal = true
    }
  },
  computed: {
    isPickUp() {
      return this.selectedCardDelivery === 'entrega'
    },
    isDelivery() {
      return this.selectedCardDelivery === 'retirada'
    },
    isCard() {
      return this.selectedCardPay === 'cartao'
    },
    isMoney() {
      return this.selectedCardPay === 'dinheiro'
    }
  }
}
</script>

<style src="./Checkout.scss" lang="scss" scoped />
