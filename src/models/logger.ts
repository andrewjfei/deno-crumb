import { LoggerConfig } from "../configs/mod.ts";
import { LogLevel } from "../enums/mod.ts";
import { LogLevelUtil } from "../utils/mod.ts";
import { ConsoleHandler, FileHandler, Timestamp } from "./mod.ts";

class Logger {
    private _defaultText = "\x1b[0m";
    private _lightRedText = "\x1b[91m";
    private _yellowText = "\x1b[33m";
    private _lightBlueText = "\x1b[94m";
    private _whiteText = "\x1b[37m";

    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    debug(msg: string) {
        this._handleLogging(msg, LogLevel.DEBUG);
    }

    info(msg: string) {
        this._handleLogging(msg, LogLevel.INFO);
    }

    warn(msg: string) {
        this._handleLogging(msg, LogLevel.WARN);
    }

    error(msg: string) {
        this._handleLogging(msg, LogLevel.ERROR);
    }

    // helper methods

    private _getTimestamp(): string {
        return new Timestamp().toUtcTimestamp();
    }

    private _logToFile(filePath: string, log: string) {
        Deno.writeTextFileSync(filePath, log, { append: true, create: true });
    }

    private _handleLogging(msg: string, logLevel: LogLevel): void {
        let textColour: string | null;

        switch (logLevel) {
            case LogLevel.DEBUG:
                textColour = this._whiteText;
                break;
            case LogLevel.INFO:
                textColour = this._lightBlueText;
                break;
            case LogLevel.WARN:
                textColour = this._yellowText;
                break;
            case LogLevel.ERROR:
                textColour = this._lightRedText;
                break;
            default:
                textColour = this._defaultText;
        }

        if (LogLevelUtil.compare(LoggerConfig.level, logLevel)) {
            LoggerConfig.handlers.forEach((handler) => {
                if (handler instanceof ConsoleHandler) {
                    const log =
                        `${this._yellowText}[${LoggerConfig.appName}]${this._defaultText} ${textColour}${logLevel}${this._defaultText}\t${this._getTimestamp()} ${this._yellowText}[${this._name}]${this._defaultText} ${textColour}${msg}${this._defaultText}`;
                    console.log(log);
                } else if (handler instanceof FileHandler) {
                    const log =
                        `[${LoggerConfig.appName}] ${logLevel}\t${this._getTimestamp()} [${this._name}] ${msg}\n`;
                    this._logToFile(handler.filePath, log);
                }
            });
        }
    }
}

export { Logger };
