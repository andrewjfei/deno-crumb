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

Please refer to the `examples` directory for more examples on how to use the
CRUMB library.

## Configuration

All configuration changes to the `Logger` can be configured via the
`LoggerConfig.setUp()` method.

### Application Name

The application name is first piece of data that is displayed within a log. This
can be used to easily identify what application the log refers to if multiple
applications are writing to the same log file.

#### Exmaple

```typescript
import { LoggerConfig } from "https://deno.land/x/crumb/mod.ts";

LoggerConfig.setUp({
    appName: "application-name",
});
```

### Log Level

Logging output can be configured to only log messages that meet a certain log
level threshold. For example, if the log level is set to `WARN`, then only logs
which greater or equal to the `WARN` log level will be logged (i.e. `WARN` and
`ERROR` logs).

By default, the log level is set to `INFO`. This means that only `INFO`, `WARN`,
and `ERROR` logs will be logged.

Below shows how different log levels compare with each other:

`DEBUG` < `INFO` < `WARN` < `ERROR`

#### Example

```typescript
import { LoggerConfig, LogLevel } from "https://deno.land/x/crumb/mod.ts";

LoggerConfig.setUp({
    level: LogLevel.ERROR,
});
```

### Handlers

A handler is responsible for handling all of the log messages. There are two
types of handlers:

1. `ConsoleHandler`
2. `FileHandler`

A `ConsoleHandler` is responsible for logging all of the log messages to the
standard output (i.e. the console). While the `FileHandler` is responsible for
logging all of the log messages to a specified file.

You can have an many handlers as you want. This could be useful in situations
where you want to have a file consiting all all logs (i.e. `logs.txt`) and also
a file consisting of only errors (i.e. `errors.txt`).

By default, there is only a single `ConsoleHandler`.

#### Example

```typescript
import { FileHandler, LoggerConfig } from "https://deno.land/x/crumb/mod.ts";

LoggerConfig.setUp({
    handlers: [
        new FileHandler("./logs.txt"),
    ],
});
```

This is an example of configurting the logger to output all logs to a `logs.txt`
file in the root directory.

## License

Apache License 2.0
