<template>
  <header w-full flex justify-between items-end m-0>
    <h1 m-0>Photo by Wing</h1>
    <div flex m-x-0 m-y-2 gap-x-2>
      <a i-hugeicons-home-02 href='https://wing.osaka' target='_blank'>Wing</a>
      <a i-hugeicons-bluesky href='https://bsky.app/profile/wing.osaka' target='_blank'>bsky</a>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>
