const queries = [
  'ALPHA-II, Greater Noida, Uttar Pradesh',
  'Sector Alpha 2, Greater Noida',
  'Sector Alpha II, Greater Noida',
  'Sector Alpha-2, Greater Noida',
  'Alpha 2, Greater Noida',
  'Sector Alpha 2 Greater Noida',
  'Sector Alpha II Greater Noida Uttar Pradesh',
  '28.4808184,77.5177682',
  'loc: 28.4808184,77.5177682'
];

async function run() {
  for (const q of queries) {
    const url = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    const text = await res.text();
    // Search for pin or marker or gcid
    const gcid = text.match(/"gcid:[^"]+"/);
    const hasPin = text.includes('pin') || text.includes('marker');
    const spotlit = text.includes('"spotlit"');
    const coords = text.match(/\[(28\.\d+,\s*7[67]\.\d+)\]/);
    console.log(q, '->', {
      gcid: gcid ? gcid[0] : null,
      spotlit,
      coords: coords ? coords[1] : null
    });
  }
}

run();
