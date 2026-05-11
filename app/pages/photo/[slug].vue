<script setup lang="ts">
const handleNavigate = async () => {
  await navigateTo('/');
};

const handleDownload = async (url: string, filename: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('ダウンロードに失敗しました：', error);
  }
};

const handleShare = async (url: string) => {
  const shareData = {
    title: 'Gallery by Wing',
    description: "Wing's Photo Gallery",
    url: url
  };

  if (!navigator.share) {
    try {
      await navigator.clipboard.writeText(shareData.url);
      alert('URLをクリップボードにコピーしました．');
    } catch (err) {
      console.error('コピー失敗：', err);
      alert(
        '申し訳ありませんが，この機能は現在の環境ではご利用いただけません．'
      );
    }
  } else {
    try {
      await navigator.share(shareData);
      console.log('共有成功');
    } catch (err) {
      console.error('共有エラー：', err);
    }
  }
};
</script>

<template>
  <Fixed>
    <div class="page-container">
      <div class="menuSlot">
        <button @click="handleNavigate">
          <span i-hugeicons-cancel-01>閉じる</span>
        </button>
        <button
          @click="
            handleDownload(
              `/gallery/${$route.params.slug}`,
              `wing_gallery_${$route.params.slug}`
            )
          "
        >
          <span i-hugeicons-download-01>ダウンロード</span>
        </button>
        <button @click="handleShare(`/photo/${$route.params.slug}`)">
          <span i-hugeicons-share-03>共有</span>
        </button>
      </div>

      <NuxtLink to="/" class="backdrop-link" aria-label="Close" />

      <div class="image-wrapper">
        <img
          :src="`/gallery/${$route.params.slug}`"
          width="1024"
          height="1024"
          alt="Gallery Image"
        />
      </div>
    </div>
  </Fixed>
</template>

<style lang="scss" scoped>
.page-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .menuSlot {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 3;
    button {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: 1px solid white;
      background-color: rgba(255, 255, 255, 0.6);
      color: black;
      font-size: 14px;
      z-index: 4;
      pointer-events: auto;
      margin: 0 4px;
    }
  }
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
  img {
    width: 100vw;
    height: 100dvh;
    object-fit: contain;
  }
}
</style>
