import fs from 'fs';
import path from 'path';

const GALLERY_DIR = './public/gallery';
const OUTPUT_JSON = './app/assets/list.json';

// 対応する拡張子
const EXTENSIONS = /\.(jpg|jpeg|png|webp|avif)$/i;

try {
  // ファイル一覧を取得
  const files = fs.readdirSync(GALLERY_DIR);

  // 画像ファイルだけに絞り込み，ファイル名でソート
  const photoList = files
    .filter((file) => EXTENSIONS.test(file))
    .sort((b, a) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );

  // JSONに書き出し
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(photoList, null, 2));

  console.log('書き出し成功！');
} catch (err) {
  console.error('エラーが発生：', err.message);
}
