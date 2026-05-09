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
      backgroundImage: 'url(/gallery/2024-03-10T14_22_15.JPG)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'Kiwi Maru'
    }"
  >
    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-[72px] m-0 leading-tight text-center font-medium"
        style="text-wrap: balance; color: burlywood;"
      >
        Screensaver
      </h1>
      
      <p
        class="text-[32px]  mt-4 text-center max-w-[900px]"
        style="color: burlywood;"
      >
        from Gallery by Wing
      </p>
    </div>
  </div>
</template>