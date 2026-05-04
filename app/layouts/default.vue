<template>
  <header class="root" w-full flex justify-between items-end m-0>
    <h1 m-0>Photos</h1>
    <div flex m-x-0 m-y-2 gap-x-2>
      <a
        i-hugeicons-source-code
        href="https://github.com/wing-0902/gallery"
        target="_blank"
      ></a>
      <a
        i-hugeicons-github-01
        href="https://github.com/wing-0902"
        target="_blank"
        >GitHub</a
      >
      <a i-hugeicons-home-02 href="https://wing.osaka" target="_blank"
        >Homepage</a
      >
      <a
        i-hugeicons-bluesky
        href="https://bsky.app/profile/wing.osaka"
        target="_blank"
        >Bluesky Social</a
      >
      <a
        i-hugeicons-mastodon
        href="https://mastodon.social/@wing_osaka"
        target="_blank"
        >Mastodon Social</a
      >
    </div>
  </header>

  <!-- 写真いちらん -->
  <GalleryList />

  <slot />

  <!-- なんか表示する場合 -->
  <!--
    次のようにする
    <Fixed>
      <Something />
    </Fixed>
  -->
</template>

<style lang="scss" scoped>
.root {
  font-family: 'Kiwi Maru', sans-serif;
}
</style>
