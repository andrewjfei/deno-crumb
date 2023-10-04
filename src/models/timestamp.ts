class Timestamp {
    private _date: Date;

    constructor() {
        this._date = new Date();
    }

    toUtcTimestamp(withOffset = true): string {
        return this._formatTimestamp(false, withOffset);
    }

    // helper methods

    private _formatTimestamp(
        toLocal = false,
        withOffset?: boolean,
    ): string {
        if (toLocal) {
            return "";
        } else {
            const utcTimestampWithoutOffset = this._date.toISOString()
                .split("T")
                .map((section, index) => {
                    if (index === 0) {
                        return section;
                    }

                    return section.split(".")[0];
                })
                .join(" ");

            if (!withOffset) {
                return utcTimestampWithoutOffset;
            }

            const localOffset = this._getLocalOffset();

            return `${utcTimestampWithoutOffset} ${localOffset}`;
        }
    }

    private _getLocalOffset(): string {
        const utcOffset = this._date.getTimezoneOffset();
        const offsetHours = Math.abs(Math.floor(utcOffset / 60)).toString()
            .padStart(2, "0");
        const offsetMinutes = Math.abs(utcOffset % 60).toString().padStart(
            2,
            "0",
        );
        const offsetSign = utcOffset >= 0 ? "-" : "+";

        return `${offsetSign}${offsetHours}:${offsetMinutes}`;
    }

    toString(): string {
        return this.toUtcTimestamp();
    }
}

export { Timestamp };
