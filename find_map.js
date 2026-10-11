import fs from 'fs';
const html = fs.readFileSync('shiva_alpha1.html', 'utf8');

const idx = html.indexOf('28.4726255');
if (idx !== -1) {
  console.log(html.slice(Math.max(0, idx - 400), idx + 600));
} else {
  console.log('not found');
}
