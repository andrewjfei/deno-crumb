import { LogLevel } from "../enums/mod.ts";
import { ConsoleHandler, Handler } from "../models/mod.ts";

type LoggerConfigOptions = {
    appName?: string;
    level?: LogLevel;
    handlers?: Handler[];
};

class LoggerConfig {
    private static _instance: LoggerConfig | null = null;
    private _appName = "crumb";
    private _level = LogLevel.INFO;
    private _handlers: Handler[] = [];

    private constructor() {}

    private static get instance(): LoggerConfig {
        if (this._instance === null) {
            this._instance = new LoggerConfig();
        }

        return this._instance;
    }

    static setUp(options: LoggerConfigOptions): void {
        const loggerConfig: LoggerConfig = this.instance;

        const { appName, level, handlers }: LoggerConfigOptions = options;

        if (appName) {
            loggerConfig._appName = appName;
        }

        if (level) {
            loggerConfig._level = level;
        }

        if (handlers) {
            loggerConfig._handlers = handlers;
        }
    }

    static get appName(): string {
        return this.instance._appName;
    }

    static get level(): LogLevel {
        return this.instance._level;
    }

    static get handlers(): Handler[] {
        return this.instance._handlers;
    }
}

export { LoggerConfig };
