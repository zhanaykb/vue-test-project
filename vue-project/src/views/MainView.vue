<script setup lang="ts">
import useFetchData from '@/api/fetch'
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
  <main>
    <span class="typography-title1 text-primary">
      Hello world!
    </span>
    <button @click="handle">
      get it
    </button>
  </main>
</template>
