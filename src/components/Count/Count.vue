<template>
    <div class="counter">
        <i class="bi bi-chevron-left" style="font-size:20px; cursor:pointer;" @click="decrement"></i>
        <span>{{ count }}</span>
        <i class="bi bi-chevron-right" style="font-size:20px; cursor:pointer;" @click="increment"></i>
    </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      this.count++
      this.$emit('count-changed', this.count)
    },
    decrement() {
      if (this.count > 1) {
        this.count--
      }
    }
  }
}
</script>

<style src="./Count.scss" lang="scss" scoped />
