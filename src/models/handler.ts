class Handler {
    private _logFormat =
        "[{appName}] {level}\t{utcTimestamp} [{fileName}] {msg}";

    constructor(logFormat?: string) {
        if (logFormat) {
            this._logFormat = logFormat;
        }
    }

    get logFormat() {
        return this._logFormat;
    }
}

export { Handler };
