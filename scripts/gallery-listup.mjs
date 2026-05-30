import fs from 'fs';
import path from 'path';

const GALLERY_DIR = './public/gallery';
const OUTPUT_JSON = './app/assets/list.json';

const EXTENSIONS = /\.(jpg|jpeg|png|webp|avif)$/i;

try {
  const files = fs.readdirSync(GALLERY_DIR);

  const photoList = files
    .filter((file) => EXTENSIONS.test(file))
    .sort((b, a) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );

  // export JSON
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(photoList, null, 2));

  console.log('書き出し成功！');
} catch (err) {
  console.error('エラーが発生：', err.message);
}
