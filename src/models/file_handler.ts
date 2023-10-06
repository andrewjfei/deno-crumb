import { Handler } from "./handler.ts";

class FileHandler extends Handler {
    private _filePath: string;

    constructor(filePath: string, logFormat?: string) {
        super(logFormat);
        this._filePath = filePath;
    }

    get filePath(): string {
        return this._filePath;
    }
}

export { FileHandler };
