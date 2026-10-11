async function run() {
  const res = await fetch('https://www.shivaassociates.com/alpha-1');
  const html = await res.text();
  // Find GreaterNoidaMaps in appsWarmupData
  const idx = html.indexOf('"location":');
  const latIdx = html.indexOf('"latitude":');
  const lat2 = html.indexOf('"lat":');
  console.log({ idx, latIdx, lat2 });
  if (latIdx !== -1) {
    console.log(html.substring(latIdx - 100, latIdx + 200));
  }
  if (lat2 !== -1) {
    console.log(html.substring(lat2 - 100, lat2 + 200));
  }
  // Let's also look for coordinates or place
  const markers = html.indexOf('markers');
  console.log({ markers });
  if (markers !== -1) {
    console.log(html.substring(markers - 50, markers + 300));
  }
}
run();
