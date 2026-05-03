<script setup lang="ts">
import photoList from '~/assets/list.json';
</script>

<template>
  <div class="grid-layout">
    <NuxtLink v-for="photo in photoList" :key="photo" :to="`/photo/${photo}`">
      <NuxtPicture
        :src="`/gallery/${photo}`"
        width="512"
        height="512"
        fit="cover"
        alt="Gallery Image"
      />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
}
</style>
