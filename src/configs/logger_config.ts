import { LogLevel } from "../enums/mod.ts";
import { Handler } from "../models/mod.ts";

type InterceptorFunction = (
    msg: string,
    logLevel: LogLevel,
    loggerName: string,
) => void;

type LoggerConfigOptions = {
    appName?: string;
    level?: LogLevel;
    handlers?: Handler[];
    interceptors?: InterceptorFunction[];
};

class LoggerConfig {
    private static _instance: LoggerConfig | null = null;
    private _appName = "crumb";
    private _level = LogLevel.INFO;
    private _handlers: Handler[] = [];
    private _interceptors: InterceptorFunction[] = [];

    private constructor() {}

    private static get instance(): LoggerConfig {
        if (this._instance === null) {
            this._instance = new LoggerConfig();
        }

        return this._instance;
    }

    static setUp(options: LoggerConfigOptions): void {
        const loggerConfig: LoggerConfig = this.instance;

        const { appName, level, handlers, interceptors }: LoggerConfigOptions =
            options;

        if (appName) {
            loggerConfig._appName = appName;
        }

        if (level) {
            loggerConfig._level = level;
        }

        if (handlers) {
            loggerConfig._handlers = handlers;
        }

        if (interceptors) {
            loggerConfig._interceptors = interceptors;
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

    static get interceptors(): InterceptorFunction[] {
        return this.instance._interceptors;
    }
}

export { LoggerConfig };
