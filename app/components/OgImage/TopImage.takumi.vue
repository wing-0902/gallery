<script setup lang="ts">
// Propsの定義
defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center p-[60px] relative"
    :style="{
      backgroundColor: '#fff',
      backgroundImage: 'url(/bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'Kiwi Maru'
    }"
  >
    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-[72px] m-0 leading-tight text-center font-medium"
        style="text-wrap: balance; color: white"
      >
        {{ title || 'My Page' }}
      </h1>

      <p
        v-if="description"
        class="text-[32px] mt-4 text-center max-w-[900px]"
        style="color: white"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
