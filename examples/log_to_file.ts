import { FileHandler, Logger, LoggerConfig, LogLevel } from "../mod.ts";

LoggerConfig.setUp({
    level: LogLevel.DEBUG,
    handlers: [
        new FileHandler("./logs.txt"),
    ],
});

const logger: Logger = new Logger("log_to_file");

logger.debug("debug log message");
logger.info("info log message");
logger.warn("warn log message");
logger.error("error log message");
