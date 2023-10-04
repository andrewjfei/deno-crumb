import { LogLevel } from "../enums/mod.ts";

type LoggerConfigOptions = {
    appName?: string;
    level?: LogLevel;
};

class LoggerConfig {
    private static _instance: LoggerConfig | null = null;
    private _appName = "crumb";
    private _level = LogLevel.INFO;

    private constructor(appName?: string) {
        if (appName) {
            this._appName = appName;
        }
    }

    private static _getInstance(): LoggerConfig {
        if (this._instance === null) {
            this._instance = new LoggerConfig();
        }

        return this._instance;
    }

    static setUp(options: LoggerConfigOptions): void {
        const loggerConfig: LoggerConfig = this._getInstance();

        const { appName, level }: LoggerConfigOptions = options;

        if (appName) {
            loggerConfig._appName = appName;
        }

        if (level) {
            loggerConfig._level = level;
        }
    }

    static get appName(): string {
        return this._getInstance()._appName;
    }

    static get level(): LogLevel {
        return this._getInstance()._level;
    }
}

export { LoggerConfig };
