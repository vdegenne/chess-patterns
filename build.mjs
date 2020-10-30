import { readdirSync, readFileSync, writeFileSync } from 'fs';

function build() {
  const images = readdirSync('images');
  const model = readFileSync('model.html').toString();
  const index = model.replace(/%images%/, '[' + images.map(i => `'${i}'`) + ']');
  writeFileSync('index.html', index)
}

build()