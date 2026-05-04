<script setup lang="ts">
useHead({
  title: 'Gallery by Wing',
  meta: [
    {
      name: 'theme-color',
      content: '#000000'
    }
  ]
});

useSeoMeta({
  ogTitle: 'Gallery by Wing',
  ogDescription: 'Wingのフォトギャラリー．'
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
