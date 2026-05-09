<script setup lang="ts">
defineOgImage('ScreenSaver', { title: 'Screensaver - Gallery by Wing' });

import { useIntervalFn } from '@vueuse/core';

definePageMeta({
  layout: false
});

import photoList from '~/assets/list.json';

const len = photoList.length;

const count = ref(0);
useIntervalFn(() => {
  if (count.value < len - 1) {
    count.value++;
  } else {
    count.value = 0;
  }
}, 15000);

const fileName = computed(() => photoList[count.value]);

const currentTime = ref(new Date());
useIntervalFn(() => {
  currentTime.value = new Date();
}, 1000);

const formatDate = (date: Date) => date.toLocaleDateString();
const formatTime = (date: Date) =>
  date.toLocaleTimeString(undefined, {
    timeStyle: 'short'
  });
</script>

<template>
  <img class="imgSlot" :src="`/gallery/${fileName}`" />
  <div class="txtSlot">
    <div>
      <h2>{{ formatDate(currentTime) }}</h2>
      <h1>{{ formatTime(currentTime) }}</h1>
    </div>
    <div>
      <p>{{ count + 1 }} / {{ len }}</p>
      <NuxtLink to="/" class="vh">
        <span class="vg">Visit Gallery</span>
        <div class="homebar"></div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.imgSlot {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  object-fit: cover;
  z-index: 11;
}

.txtSlot {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Kiwi Maru', sans-serif;

  div {
    margin: 50px;
    h2 {
      margin: 0;
      font-size: 40px;
    }
    h1 {
      margin: 0;
      font-size: 100px;
    }
    .vh {
      color: white;
      text-decoration: none;
      .vg {
        font-size: 22px;
        margin-bottom: 20px;
      }
      .homebar {
        border: 2px solid white;
        width: 250px;
        border-radius: 2px;
        margin: 0;
      }
    }
  }
}

h1,
h2,
p,
.vg {
  color: white;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(0, 0, 0, 0.2);
}
</style>
