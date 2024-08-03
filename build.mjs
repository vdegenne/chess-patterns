import { readdirSync, readFileSync, writeFileSync } from "fs";

function build() {
  const images = readdirSync("images");
  console.log(images);
  const model = readFileSync("model.html").toString();
  const index = model.replace(
    /%images%/,
    "[" + images.map((i) => `'${escape(i)}'`) + "]",
  );
  writeFileSync("index.html", index);
}

build();

