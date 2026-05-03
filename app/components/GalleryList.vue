<script setup lang="ts">
import photoList from '~/assets/list.json';
</script>

<template>
  <div class="grid-layout">
    <NuxtPicture
      v-for="photo in photoList"
      :key="photo"
      :src="`/gallery/${photo}`"
      width="500"
      height="500"
      fit="cover"
      alt="Gallery Image"
    />
  </div>
</template>

<style scoped lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
</style>
