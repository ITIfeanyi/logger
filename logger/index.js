const development = require("./development");
const productionLogger = require("./productionLogger");

let logger = null;

if (process.env.NODE_ENV === "development") {
  logger = development();
} else if (process.env.NODE_ENV === "production") {
  logger = productionLogger();
}

module.exports = logger;
