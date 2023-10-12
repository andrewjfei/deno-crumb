import { ConsoleHandler, Logger, LoggerConfig, LogLevel } from "../mod.ts";

LoggerConfig.setUp({
    level: LogLevel.DEBUG,
    handlers: [
        new ConsoleHandler(),
    ],
    interceptors: [
        (_msg: string, _logLevel: LogLevel, _loggerName: string) => {
            console.log("console log from an interceptor function");
        },
    ]
});

const logger: Logger = new Logger("interceptor");

logger.debug("debug log message");
logger.info("info log message");
logger.warn("warn log message");
logger.error("error log message");
