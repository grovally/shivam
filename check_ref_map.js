async function main() {
  const res = await fetch('https://www.shivaassociates.com/alpha-1');
  const html = await res.text();
  
  // Find all iframes
  const iframes = html.match(/<iframe[^>]+>/gi) || [];
  console.log('Iframes count:', iframes.length);
  iframes.forEach(f => console.log('Iframe:', f));

  // Search for Google map URLs or coordinates or wix Google map widget
  const pos = html.indexOf('Sector Location');
  if (pos !== -1) {
    console.log('--- Context around Sector Location ---');
    console.log(html.substring(pos, pos + 4000));
  }
}
main().catch(console.error);
