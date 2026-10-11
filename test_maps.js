async function test() {
  const tests = [
    'https://maps.google.com/maps?q=Alpha+1,+Greater+Noida&output=embed',
    'https://maps.google.com/maps?q=Alpha+2,+Greater+Noida&output=embed',
    'https://maps.google.com/maps?q=Sector+127,+Noida&output=embed',
    'https://maps.google.com/maps?q=Sector+62,+Noida&output=embed',
    'https://maps.google.com/maps?q=Sector+20,+Yamuna+Expressway,+Greater+Noida&output=embed',
  ];

  for (const u of tests) {
    const res = await fetch(u);
    const html = await res.text();
    const hasSpotlit = html.includes('spotlit');
    const coordsMatch = html.match(/\[(28\.\d+,\s*7[67]\.\d+)\]/);
    console.log(u.split('?')[1].split('&')[0], '-> spotlit:', hasSpotlit, 'coords:', coordsMatch ? coordsMatch[1] : 'none');
  }
}
test();
