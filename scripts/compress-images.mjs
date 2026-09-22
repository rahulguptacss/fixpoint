import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.resolve("public");
const targets = [
  "hero/herocover.png",
  "about/a1.png",
  "about/a2.png",
  "about/a3.png",
  "services/s1.png",
  "services/s2.png",
  "services/s3.png",
  "team/t1.png",
  "team/t2.png",
  "team/t3.png",
  "team/t4.png",
  "blog/b1.png",
  "blog/b2.png",
  "blog/b3.png",
  "img/footerbg.png",
  "logo/logo.png",
  "logo/ftr.png",
];

async function compress(rel) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) {
    console.log("skip missing", rel);
    return;
  }
  const before = fs.statSync(file).size;
  const isLogo = rel.includes("logo");
  const pipeline = sharp(file).resize({
    width: isLogo ? 480 : 1400,
    withoutEnlargement: true,
  });
  const buf = isLogo
    ? await pipeline.png({ compressionLevel: 9, quality: 80 }).toBuffer()
    : await pipeline.jpeg({ quality: 72, mozjpeg: true }).toBuffer();
  const out = isLogo ? file : file.replace(/\.png$/i, ".jpg");
  fs.writeFileSync(out, buf);
  const after = fs.statSync(out).size;
  console.log(
    `${rel}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
  );
}

for (const t of targets) {
  await compress(t);
}
