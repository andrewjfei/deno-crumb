# CRUMB

A logging library focused on providing an easy to read logging output.

## Usage

Before you can start logging anything, a new `Logger` object will need to be
created.

Usually, it is good practice to instantiate a new `Logger` for each

```typescript
import { Logger } from "https://deno.land/x/crumb/mod.ts";

const logger = new Logger("example_logger");

logger.debug("debug message");
logger.info("info message");
logger.warn("warn message");
logger.error("error message");
```

## Configuration

All configuration changes to the `Logger` can be configured via the `LoggerConfig.setUp()` method.

### Application Name

The application name is first piece of data that is displayed within a log. This can be used to easily identify what application the log refers to if multiple applications are writing to the same log file.

#### Exmaple

```typescript
import { LoggerConfig } from "https://deno.land/x/crumb/mod.ts";

LoggerConfig.setUp({
    appName: "application-name",
});
```

### Log Level

Logging output can be configured to only log messages that meet a certain log level threshold. For example, if the log level is set to `WARN`, then only logs which greater or equal to the `WARN` log level will be logged (i.e. `WARN` and `ERROR` logs).

By default, the log level is set to `INFO`. This means that only `INFO`, `WARN`, and `ERROR` logs will be logged.

Below shows how different log levels compare with each other:

`DEBUG` < `INFO` < `WARN` < `ERROR`

#### Example

```typescript
import { LoggerConfig, LogLevel } from "https://deno.land/x/crumb/mod.ts";

LoggerConfig.setUp({
    level: LogLevel.ERROR,
});
```

## License

Apache License 2.0
