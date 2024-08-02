<template>
  <div
      class="rounded-lg
        relative
        focus-within:border-transparent
        border-[2px]
        input-container
      "
     :class="{
      'focus-within:bg-gradient-to-r from-gold-light to-gold-dark border-black/30': !isError,
      'bg-red border-transparent': isError,
     }"
  >
    <div id="input-container-focus" @click="redirectFocus"
       class="rounded-md bg-white h-full w-full flex items-center pl-5 pr-6 py-4 focus-within:outline-none"
       :class="{
        'outline outline-1 outline-white': !isError,
       }"
    >
      <input
          v-model="value"
          @focusin="resetError" @focusout="checkError" v-money3="moneyConfig" ref="inputEl" class="font-medium placeholder:font-normal typography-input1 placeholder-primary/60 outline-none flex-1 focus:placeholder-primary" placeholder="Минимальная сумма платежа: 1.000₽" type="text" >
      <icon-close class="cursor-pointer" @click="clearInput"/>
    </div>
    <span v-if="isError" class="absolute -bottom-5 typography-sub1 text-red px-[3px] h-4">
      Внимание, минимальная сумма 1.000₽
    </span>
  </div>
</template>
<script setup lang="ts">

import IconClose from "@/shared/icons/IconClose.vue";
import {computed, ref} from "vue";
import {parseCurrency} from "@/utils/parseCurrency";

const inputEl = ref<HTMLInputElement | null>(null);
const isError = ref(false);
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  }
})
const redirectFocus = (e: MouseEvent) => {
  if (inputEl.value && (e.target as HTMLDivElement).id === 'input-container-focus') {
    inputEl.value.focus();
  }
}

const checkError = () => {
  isError.value = parseCurrency(value.value) > 0 && parseCurrency(value.value) < 1000;
}
const resetError = () => {
  isError.value = false;
}

const clearInput = () => {
  value.value = '';
  isError.value = false;
}
const moneyConfig = {
  prefix: '',
  suffix: '₽',
  thousands: '.',
  decimal: ',',
  precision: 0,
  disableNegative: true,
  disabled: false,
  min: null,
  max: null,
  allowBlank: true,
  minimumNumberOfCharacters: 0,
  shouldRound: true,
  focusOnRight: false,
  masked: false
}
</script>
<style scoped lang="scss">
.input-container {
  background-size: 101%;
  background-position-x: -2px;
}

</style>