# CSV to JSON Conversion

This directory contains `convert.js`, a simple Node.js script that reads `input.csv` and writes `output.json` using the [`csv-parser`](https://www.npmjs.com/package/csv-parser) library.

## Usage

1. Install dependencies:

   ```bash
   npm install csv-parser
   ```

2. Place your `input.csv` file in this directory.

3. Run the conversion:

   ```bash
   node convert.js
   ```

The script will create `output.json` in the same directory containing the parsed CSV data.
