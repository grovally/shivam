const testQueries = [
  'ALPHA-I, Greater Noida, Uttar Pradesh',
  'ALPHA-II, Greater Noida, Uttar Pradesh',
  'Alpha 1, Greater Noida',
  'Alpha 2, Greater Noida',
  'Sector Alpha 1, Greater Noida',
  'Sector Alpha 2, Greater Noida',
  'Sector Alpha II, Greater Noida',
  'Sector 62, Noida',
  'Sector 128, Noida',
  'Sector 20, Yamuna Expressway, Greater Noida'
];

async function checkQueries() {
  for (const q of testQueries) {
    const url = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const text = await res.text();
    const initMatch = text.match(/initEmbed\(([\s\S]*?)\);\s*\}/);
    if (!initMatch) {
      console.log(q, '-> NO initEmbed');
      continue;
    }
    const raw = initMatch[1];
    const isSpotlit = raw.includes('"spotlit"');
    const placeMatch = raw.match(/\["0x[0-9a-f:]+","([^"]+)",\[([0-9.,]+)\]\]/);
    console.log(q, '->', {
      spotlit: isSpotlit,
      entity: placeMatch ? placeMatch[1] : 'none',
      coords: placeMatch ? placeMatch[2] : 'none'
    });
  }
}

checkQueries();
