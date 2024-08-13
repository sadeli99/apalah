{
  "name": "generative-ai-api",
  "version": "1.0.0",
  "description": "API untuk menghasilkan deskripsi dan roast menggunakan Google Generative AI.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "build": "echo 'No build step required'"
  },
  "dependencies": {
    "@google/generative-ai": "^1.0.0", // Gantilah dengan versi yang sesuai
    "@google/generative-ai/server": "^1.0.0", // Gantilah dengan versi yang sesuai
    "dotenv": "^16.0.0",
    "node-fetch": "^3.3.0" // Pastikan versi sesuai
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
