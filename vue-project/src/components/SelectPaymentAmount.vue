<template>
  <section>
    <p>Укажите сумму платежа</p>
    <Input v-model="value"/>
    <div class="flex gap-4">
      <button
          :class="{
            'bg-gradient-to-r to-gold-dark from-gold-light': value === chip
          }"
          class="chip-container border-2 border-transparent rounded-full" @click="() => setAmount(chip)" v-for="chip in chips">
        <div class="w-full h-full bg-white rounded-3xl py-2 px-3">
          {{ chip }}
        </div>
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import Input from "@/shared/ui/Input.vue";
import {ref} from "vue";

const value = ref('');

const chips = [
  '1.000₽',
  '2.000₽',
  '5.000₽',
  '10.000₽',
  '20.000₽',
  '50.000₽',
]

const setAmount = (chip: string) => {
  value.value = chip;
}

</script>
<style lang="scss" scoped>
.chip-container {
  background-size: 108%;
  background-position-x: -2px;
}

</style>