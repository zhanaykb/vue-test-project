<template>
  <section>
    <p class="typography-title2">Выберите валюту оплаты</p>
    <div class="mt-3.7">
      <div class="flex flex-wrap gap-4">
        <button class="card rounded-lg">
          <div class="flex items-center p-5">
            <icon-crypto class="mr-2.5 size-6" />
            <span class="typography-body3 text-primary font-medium">Криптовалюты</span>
          </div>
        </button>
        <button class="card rounded-lg items-stretch flex divide-x divide-black/10 py-2 px-1">
          <div class="flex items-center py-3 pr-5 pl-4">
            <icon-r-u-b class="mr-3 size-7" />
            <span class="font-medium typography-body1 text-primary">RUB</span>
          </div>
          <div class="flex items-center py-3 pr-4 pl-3">
            <icon-exchange class="mr-2.5 size-6" />
            <span class="mr-2.5 font-medium typography-body1 text-primary">Другие валюты</span>
            <icon-dropdown class="size-3" />

          </div>

        </button>
      </div>
      <div class="mt-7.5 grid lg:grid-cols-5 gap-4 md:grid-cols-4 2sm:grid-cols-3 grid-cols-2">
        <button @click="selectedCurrency = currency" v-for="currency in currencies" class="card rounded-lg p-0.5 transition" :class="{
          'bg-gradient-to-r to-gold-dark from-gold-light': currency === selectedCurrency
        }">
          <div class="flex items-center py-3.7 pl-5 pr-6 bg-white rounded-md">
            <icon-r-u-b class="mr-2.5 size-7" />
            <span class="typography-body3 text-primary font-medium">{{ currency }}</span>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import IconCrypto from "@/shared/icons/IconCrypto.vue";
import IconRUB from "@/shared/icons/IconRUB.vue";
import IconExchange from "@/shared/icons/IconExchange.vue";
import IconDropdown from "@/shared/icons/IconDropdown.vue";
import {ref} from "vue";

const currencies = [
    'RUB',
    'KZT',
    'USD',
    'EUR',
    'INR',
    'UAH',
    'KRW',
    'IDR',
]
const selectedCurrency = ref();
</script>
<style lang="scss" scoped>
  .card {
    &:hover {
      box-shadow: 0px 0px 20px 0px #0000001A;
    }
    box-shadow: 0px 0px 15px 0px #0000000F;

    &.active {
      border: 2px solid;
    }
  }
</style>