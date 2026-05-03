<template>
  <Fixed>
  <div class="page-container">
    <NuxtLink to="/" class="backdrop-link" aria-label="Close" />

    <div class="image-wrapper">
      <NuxtPicture
        :src="`/gallery/${$route.params.slug}`"
      />
    </div>
  </div>
  </Fixed>
</template>

<style lang='scss' scoped>
.page-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.backdrop-link {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}

.image-wrapper {
  position: relative;
  z-index: 2;
  pointer-events: none; /* 画像越しにクリック可能 */
}
</style>