import { createLogger, format, transports } from 'winston';
const { printf, combine, label, timestamp, colorize } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const loggerFactory = (logLabel: string) =>
  createLogger({
    format: combine(
      label({ label: logLabel }),
      timestamp(),
      colorize(),
      logFormat,
    ),
    transports: [new transports.Console()],
  });

export default loggerFactory;
