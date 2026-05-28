const https = require('https');

https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/_data/simple-icons.json', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const searchWords = ['java', 'css', 'framer', 'visual studio'];
      const results = json.icons.filter(icon => searchWords.some(word => icon.title.toLowerCase().includes(word) || (icon.slug && icon.slug.toLowerCase().includes(word))));
      results.forEach(icon => console.log(`${icon.title}: ${icon.slug || icon.title.toLowerCase().replace(/ /g, '')}`));
    } catch(e) {
      console.log('Error parsing JSON');
    }
  });
});
