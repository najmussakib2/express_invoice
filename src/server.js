const mongoose = require ("mongoose")
const app = require ("./app");
const config = require ("./config");

async function main() {
  await mongoose.connect(config.database_url);
  console.log("Connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
  });
}
main();