const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.info("Tercer log")
try {
  division();
}
catch (e) {
  logger.error("No se puede dividir por cero");
}

function divporCero(a, b) {
  if (b === 0) {
    logger.info("Variable B es ifgual a cero");
  }
  return a / b;
}
const division = divporCero(100 , 0);