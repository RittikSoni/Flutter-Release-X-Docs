---
id: usage
title: Usage
sidebar_position: 3
---

:::tip Did you know...
**Flutter Release X** not only streamlines your Flutter & Non-Flutter app deployment but also give you power to run custom pipeline or workflow by offering a powerful and intuitive command-line interface.
:::

The documentation below is divided into two sections: primary commands and configurable CLI options.

---

## **Primary Commands**

These commands execute the core functions of Flutter Release X. Each command is designed to simplify your workflow.

| Command                                           | Description                                                                                                                                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `frx build`                                       | Initiates the build process. If an advanced pipeline is configured, it executes that sequence; otherwise, it builds the release APK, uploads it to the cloud, and generates a QR code & download link (if enabled). |
| `frx build -s`                                    | Outputs the current configuration file path, allowing you to quickly verify your environment setup.                                                                                                                 |
| `frx build -c <path_to_config>`                   | Overrides the default `config.yaml` with a custom configuration file. This setting persists for subsequent builds until changed.                                                                                    |
| `frx build --target all`                          | Compiles release versions for all supported platforms.                                                                                                                                                              |
| `frx notify --platform slack --message 'message'` | Dispatches a notification to Slack with a custom message.                                                                                                                                                           |

---

## **CLI Options & Flags**

Customize command behavior using the options below. Each entry includes the long form, its shorthand alias, acceptable values, and a clear description.

| Option          | Alias | Possible Values                                             | Description                                                             |
| --------------- | ----- | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| `--target`      | `-t`  | `all`, `android`, `ios`, `macos`, `windows`, `web`, `linux` | Defines the target platform(s) for the build command.                   |
| `--platform`    | `-p`  | `slack` (more options forthcoming)                          | Specifies the notification platform for the notify command.             |
| `--message`     | `-m`  | Custom message string                                       | Sets a custom notification message.                                     |
| `--config`      | `-c`  | File path                                                   | Specifies a custom configuration file to override the default settings. |
| `--show-config` | `-s`  | -                                                           | Displays the current configuration file path for verification purposes. |

---

:::tip Tip
For additional details on any command or option, run `frx <command> --help`.
:::

---
