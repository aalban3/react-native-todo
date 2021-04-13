const { db } = require("./db");
const app = require("./api");
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const SSL_PORT = 8443;
const PORT = 8080;

const httpServer = http.createServer(app);
const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "./api/certificate/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "./api/certificate/cert.pem")),
  },
  app
);
db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log("db synced");
    sslServer.listen(SSL_PORT, () =>
      console.log(
        `Express SSL server running securely at https://localhost:${SSL_PORT}`
      )
    );
    httpServer.listen(PORT, () =>
      console.log(`Express HTTP server running at https://localhost:${PORT}`)
    );
  });
