{
  "version": 2,
  "builds": [
    {
      "src": "api/promt.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/promt",
      "dest": "/api/promt.js"
    }
  ],
  "env": {
    "API_KEY": "@api_key"
  }
}
