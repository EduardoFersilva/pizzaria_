<script setup>
defineProps({
  menu1: {
    type: String,
    required: false
  },
  subMenu1: {
    type: String,
    required: false
  },
  subMenu2: {
    type: String,
    required: false
  },
  menu2: {
    type: String,
    required: false
  },
  subMenu2: {
    type: String,
    required: false
  },
  subMenu3: {
    type: String,
    required: false
  },
  subMenu4: {
    type: String,
    required: false
  },
  subMenu5: {
    type: String,
    required: false
  },
  subMenu6: {
    type: String,
    required: false
  },
  subMenu7: {
    type: String,
    required: false
  }
})
</script>

<template>
<div class="expandableMenu">
    <ul class="menu">
        <details>
          <summary>{{ menu1 }}</summary>
            <li><a href="/#/pizzas-salgadas" @click="$emit('close')">{{subMenu1}}</a></li>
            <li><a href="/#/pizzas-doces" @click="$emit('close')">{{subMenu2}}</a></li>
        </details>
        <details>
          <summary>{{ menu2 }}</summary>
              <li><router-link to="/refrigerantes" @click="$emit('close')">{{ subMenu3 }}</router-link></li>
              <li><router-link to="/cervejas" @click="$emit('close')">{{ subMenu4 }}</router-link></li>
              <li><router-link to="/sucos" @click="$emit('close')">{{ subMenu5 }}</router-link></li>
              <li><router-link to="/vinhos" @click="$emit('close')">{{ subMenu6 }}</router-link></li>
              <li><router-link to="/drinks" @click="$emit('close')">{{ subMenu7 }}</router-link></li>
        </details>
    </ul>
  </div>

      <div
        class="overlay overlay-visible"
        @click="$emit('overlay:click')">
      </div>
</template>

<script>
export default {
  name: 'ExpandableMenu',
  emits: ['overlay:click', 'close'],
  data() {
    return {

    }
  }
}
</script>

<style src="./ExpandableMenu.scss" lang="scss" scoped />
