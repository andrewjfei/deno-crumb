import { LogLevel } from "../enums/mod.ts";

class LogLevelUtil {
    constructor() {
    }

    static compare(baseLogLevel: LogLevel, logLevel: LogLevel): boolean {
        return this._getValue(logLevel) >= this._getValue(baseLogLevel);
    }

    private static _getValue(logLevel: LogLevel): number {
        switch (logLevel) {
            case LogLevel.DEBUG:
                return 0;
            case LogLevel.INFO:
                return 1;
            case LogLevel.WARN:
                return 2;
            case LogLevel.ERROR:
                return 4;
            default:
                return 0;
        }
    }
}

export { LogLevelUtil };
