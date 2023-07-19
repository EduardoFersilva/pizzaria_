<script setup>
defineProps({
  whatsNumber: {
    type: Number,
    required: true
  },
  whatsLabel: {
    type: String,
    required: true
  },
  menu1: {
    type: String,
    required: false
  },
  menu2: {
    type: String,
    required: false
  },
  menu3: {
    type: String,
    required: false
  },
  menu4: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  }
})
</script>

<template>
    <main>
      <div class="cont">

        <div class="logoButton">
          <logo
          image="./imgs/Img-Logo-Footer.png"
          alt-image="Senhora Pizza"
          />
          <a
          type="button"
          class="btn btn-outline-light  btnContact"
          :href="`https://api.whatsapp.com/send/?phone=${whatsNumber}`" target="_blank">
          <i class="bi bi-whatsapp" style="font-size: 25px; margin-right: 10px;"></i>
          <div>
          <p>Faça seu pedido</p>
          {{ whatsLabel }}
          </div>
          </a>
        </div>

      <ul>
        <li><router-link to="/promocoes">{{menu1}}</router-link></li>
        <li><router-link to="/sobre-nos">{{menu2}}</router-link></li>
        <li><router-link to="/fale-conosco">{{menu3}}</router-link></li>
        <li><router-link to="/meus-pedidos">{{menu4}}</router-link></li>
      </ul>

        <div>
          <div class="address">
            <h1>Endereço</h1>
            <h2>{{address}}</h2>
            <i>(ver mapa)</i>
          </div>
          <div class="service">
            <h1>Atendimento</h1>
            <h2>{{service}}</h2>
          </div>
        </div>
        <div class="socialMedia">
          <h1>Siga nas redes</h1>
            <div class="icons">
              <i class="bi bi-instagram" style="color: white; font-size:30px; margin:10px;"></i>
              <i class="bi bi-facebook"  style="color: white; font-size:30px; margin:10px;"></i>
              <i class="bi bi-linkedin"  style="color: white; font-size:30px; margin:10px;"></i>
          </div>
        </div>

        <div class="textEndMobile">
          <div class="line"></div>
        <p class="textCopyright">Copyright 2023. Senhora Pizza. Todos os direitos reservados. Desenvolvido por GLMR</p>
          <router-link to="/politica-e-peivacidade">
            <p class="textPolicy" >Política de privacidade e cookies</p>
        </router-link>
        </div>
      </div>
      <div class="textEndDesktop">
        <div class="line"></div>
        <div class="text">
        <p  class="textCopyright">Copyright 2023. Senhora Pizza. Todos os direitos reservados. Desenvolvido por GLMR</p>
        <router-link to="/politica-e-peivacidade">
            <p class="textPolicy" >Política de privacidade e cookies</p>
        </router-link>
        </div>
      </div>
    </main>

</template>

<script>
import Logo from '../Logo/Logo.vue'

export default {
  name: 'Footer',
  components: {
    Logo
  }
}
</script>

<style src="./Footer.scss" lang="scss" scoped />
