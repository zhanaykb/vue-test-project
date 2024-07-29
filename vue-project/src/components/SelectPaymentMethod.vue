<template>
  <section>
    <p class="typography-title2">Выберите способ оплаты</p>
    <div
        class="md:mt-3.7 grid lg:grid-cols-5 gap-4 md:grid-cols-3
          grid-cols-2 md:h-[214px] overflow-y-scroll md:-m-2.5 md:p-2.5
          h-[155px] -m-3.7 p-3.7 mt-2.5"
    >
      <button
          @click="selectedMethod = pMethod.name"
          v-for="pMethod in paymentMethodsRecord"
          class="card rounded-lg p-0.5 transition"
          :class="{
            'bg-gradient-to-r to-gold-dark from-gold-light': pMethod.name === selectedMethod
          }"
      >
        <div class="flex items-center py-3.7 pl-5 pr-6 bg-white rounded-md h-full">
          <div class="w-12 flex justify-center items-center mr-3">
            <component :is="pMethod.icon" class="mr-2.5 size-7" />
          </div>
          <div class="flex flex-col items-start">
            <span class="typography-body3 text-primary font-medium">{{ pMethod.name }}</span>
            <span class="typography-body2 text-primary/60 font-normal whitespace-nowrap">
              Комиссия: <span class="text-primary font-medium">{{ pMethod.percent }}%</span>
            </span>
          </div>
        </div>
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import {ref} from "vue";
import IconSpb from "@/shared/icons/IconSpb.vue";
import {paymentMethodsRecord} from "@/utils/paymentMethods";
const selectedMethod = ref();

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