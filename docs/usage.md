---
id: usage
title: Usage & Commands
sidebar_position: 3
description: Complete reference for all Flutter Release X (frx) commands and CLI options. Learn how to build, release, notify, and manage pipelines.
keywords: [frx commands, flutter release x cli, frx build, frx pipeline, frx notify, frx usage]
---

# Usage & Commands

Flutter Release X provides a focused set of commands to build, release, notify, and manage your application pipelines — all from your terminal.

:::tip
For help on any command, run `frx <command> --help`.
:::

---

## Core Commands

| Command | Description |
|---|---|
| `frx init` | Generate a starter `config.yaml` with all options, comments, and pipeline examples. |
| `frx build` | Build the release app, upload to cloud, generate QR code & download link. |
| `frx build -s` | Display the current config file path for quick verification. |
| `frx build -c <path>` | Use a custom config file instead of the default `config.yaml`. |
| `frx build --target all` | Build for all supported platforms (Android, iOS, Web, macOS, Windows, Linux). |
| `frx build --pipeline <name>` | Run a specific named pipeline via the build command. |
| `frx pipeline list` | List all configured pipelines with their descriptions and step counts. |
| `frx pipeline validate` | Validate your pipeline config and show detailed, actionable errors. |
| `frx pipeline run <name>` | Run a specific named pipeline. |
| `frx pipeline help-all` | Show a complete feature reference for pipeline configuration. |
| `frx notify -p slack -m 'msg'` | Send a custom notification to Slack. |
| `frx notify -p teams -m 'msg'` | Send a custom notification to Microsoft Teams. |
| `frx check-update` | Manually check if a new version of FRX is available. |
| `frx version` | Display the currently installed version. |

---

## CLI Flags & Options

| Option | Alias | Values | Description |
|---|---|---|---|
| `--target` | `-t` | `all`, `android`, `ios`, `macos`, `windows`, `web`, `linux` | Target platform(s) for the build command. |
| `--platform` | `-p` | `slack`, `teams` | Notification platform for the notify command. |
| `--message` | `-m` | `"your message"` | Custom notification message text. |
| `--config` | `-c` | `path/to/config.yaml` | Path to a custom configuration file. |
| `--show-config` | `-s` | — | Show the current config file path. |
| `--pipeline` | — | `pipeline-name` | Run a specific named pipeline. |

---

## Pipeline Commands

FRX `v0.6.0` introduces a dedicated `pipeline` command group for managing multi-step workflows:

```bash
# List all pipelines
frx pipeline list

# Check for errors before running
frx pipeline validate

# Run a specific pipeline by name
frx pipeline run my-pipeline

# Full pipeline feature reference
frx pipeline help-all
```

---

## 🔄 Automatic Update Checking

FRX silently checks for new versions in the background whenever you run a command (results cached for 24 hours).

- **Non-blocking**: Update checks run asynchronously — your commands run at full speed.
- **Smart caching**: Only checks once every 24 hours to avoid excessive network calls.
- **In-place notifications**: If an update is found, a friendly prompt appears after your command completes.

### Manual Check

Force a fresh update check at any time:

```bash
frx check-update
```

### Update FRX

```bash
dart pub global activate flutter_release_x
```

Or visit the [pub.dev package page](https://pub.dev/packages/flutter_release_x) for release notes.
