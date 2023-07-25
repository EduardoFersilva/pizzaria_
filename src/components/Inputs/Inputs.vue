<script setup>
import {defineEmits, defineProps} from 'vue'

defineEmits(['update:modelValue'])
defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: 'white'
  },
  width: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="inputGroup">
    <label>{{ label }}</label>
    <input
      :style="{ background: background, width: width }"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      @input="onInput"
    />
  </div>
</template>

<style src="./Inputs.scss" lang="scss" scoped />
