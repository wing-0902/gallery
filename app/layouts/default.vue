<template>
  <header class="root" w-full flex justify-between items-end m-0>
    <h1 m-0 class="title">
      <NuxtLink href="/" class="link">
        <Icon />
        <span class="titleTxt">Gallery</span>
      </NuxtLink>
    </h1>
    <div flex m-x-0 m-y-2 gap-x-2>
      <NuxtLink i-hugeicons-computer to="/screensaver"> </NuxtLink>
      <a
        i-hugeicons-source-code
        href="https://github.com/wing-0902/gallery"
        target="_blank"
      ></a>
      <a
        i-hugeicons-github-01
        href="https://github.com/wing-0902"
        target="_blank"
      ></a>
      <a i-hugeicons-home-02 href="https://wing.osaka" target="_blank"></a>
      <a
        i-hugeicons-bluesky
        href="https://bsky.app/profile/wing.osaka"
        target="_blank"
      ></a>
      <a
        i-hugeicons-mastodon
        href="https://mastodon.social/@wing_osaka"
        target="_blank"
      ></a>
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
  .title {
    .link {
      text-decoration: none;
      .titleTxt {
        color: white;
        @media (max-width: 400px) {
          display: none;
        }
      }
    }
  }
}
</style>
