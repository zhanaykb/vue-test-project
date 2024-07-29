<script setup lang="ts">
import useFetchData from '@/api/fetch'
import SelectCurrency from "@/components/SelectCurrency.vue";
import SelectPaymentMethod from "@/components/SelectPaymentMethod.vue";
import SelectPaymentAmount from "@/components/SelectPaymentAmount.vue";
const { getPaymentsInfo, postPaymentsInfo } = useFetchData()

const handle = () => {
  getPaymentsInfo().then(async (res) => {
    const resp = await res.json();
    console.log(resp)
  })
  postPaymentsInfo().then(async (res) => {
    const resp = await res.json();
    console.log(resp)
  })
}
</script>

<template>
  <main class="mt-6.5 md:mt-8">
    <p class="typography-title1 font-bold text-primary">
      Пополните баланс, <span class="font-medium text-primary/60">чтобы получить номер для приема смс</span>
    </p>
    <div class="mt-3.7 md:mt-7.5">
      <SelectCurrency />
      <SelectPaymentMethod class="mt-5 md:mt-7.5" />
      <SelectPaymentAmount class="mt-5 md:mt-7.5" />
    </div>
  </main>
</template>
<style scoped>

</style>
