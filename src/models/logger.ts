import { LoggerConfig } from "../configs/mod.ts";
import { LogLevel } from "../enums/mod.ts";
import { LogLevelUtil } from "../utils/mod.ts";
import { Timestamp } from "./mod.ts";

class Logger {
    private _defaultText = "\x1b[0m";
    private _lightRedText = "\x1b[91m";
    private _yellowText = "\x1b[33m";
    private _lightBlueText = "\x1b[94m";
    private _whiteText = "\x1b[37m";

    private _appName: string;
    private _name: string;

    constructor(_name: string) {
        this._appName = LoggerConfig.appName;
        this._name = _name;
    }

    debug(msg: string) {
        if (LogLevelUtil.compare(LoggerConfig.level, LogLevel.DEBUG)) {
            console.log(
                `${this._yellowText}[${this._appName}]${this._defaultText} ${this._whiteText}${LogLevel.DEBUG}${this._defaultText}\t${this._getTimestamp()} ${this._yellowText}[${this._name}]${this._defaultText} ${this._whiteText}${msg}${this._defaultText}`,
            );
        }
    }

    info(msg: string) {
        if (LogLevelUtil.compare(LoggerConfig.level, LogLevel.INFO)) {
            console.log(
                `${this._yellowText}[${this._appName}]${this._defaultText} ${this._lightBlueText}${LogLevel.INFO}${this._defaultText}\t${this._getTimestamp()} ${this._yellowText}[${this._name}]${this._defaultText} ${this._lightBlueText}${msg}${this._defaultText}`,
            );
        }
    }

    warn(msg: string) {
        if (LogLevelUtil.compare(LoggerConfig.level, LogLevel.WARN)) {
            console.log(
                `${this._yellowText}[${this._appName}]${this._defaultText} ${this._yellowText}${LogLevel.WARN}${this._defaultText}\t${this._getTimestamp()} ${this._yellowText}[${this._name}]${this._defaultText} ${this._yellowText}${msg}${this._defaultText}`,
            );
        }
    }

    error(msg: string) {
        if (LogLevelUtil.compare(LoggerConfig.level, LogLevel.ERROR)) {
            console.log(
                `${this._yellowText}[${this._appName}]${this._defaultText} ${this._lightRedText}${LogLevel.ERROR}${this._defaultText}\t${this._getTimestamp()} ${this._yellowText}[${this._name}]${this._defaultText} ${this._lightRedText}${msg}${this._defaultText}`,
            );
        }
    }

    // helper methods

    private _getTimestamp(): string {
        return new Timestamp().toUtcTimestamp();
    }
}

export { Logger };
