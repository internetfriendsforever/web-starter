import winston from 'winston'

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [],
  exitOnError: true
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }))
}

export default logger
