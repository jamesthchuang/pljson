const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const results = [];

fs.createReadStream(path.join(__dirname, 'input.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync(
      path.join(__dirname, 'output.json'),
      JSON.stringify(results, null, 2)
    );
    console.log('Conversion complete');
  });
