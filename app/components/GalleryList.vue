<script setup lang="ts">
import photoList from '~/assets/list.json';
</script>

<template>
  <div class="grid-layout">
    <NuxtLink v-for="photo in photoList" :key="photo" :to="`/photo/${photo}`">
      <NuxtImg
        :src="`/gallery/${photo}`"
        width="512"
        height="512"
        format="avif,webp"
        fit="cover"
        alt="Gallery Image"
      />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(calc(50% - 16px), 250px), 1fr)
  );
  gap: 16px;
}
</style>
