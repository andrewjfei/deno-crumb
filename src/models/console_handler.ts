import { Handler } from "./handler.ts";

class ConsoleHandler extends Handler {
    constructor(logFormat?: string) {
        super(logFormat);
    }
}

export { ConsoleHandler };
