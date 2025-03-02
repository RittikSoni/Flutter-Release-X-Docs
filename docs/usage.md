---
id: usage
title: Usage
sidebar_position: 3
---

Flutter Release X simplifies your **Flutter app release process** with powerful yet easy-to-use commands. Below are the primary commands to **build, upload, and manage your releases** efficiently.

---

## **🔹 Basic Commands**

| Command                         | Description                                                                                                                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `frx build`                     | Runs the package. If an Advanced Pipeline is defined, it executes the custom pipeline; otherwise, it follows the default behavior (Builds the release APK, uploads it to the cloud, and generates a QR code & download link, if enabled.) |
| `frx build -s`                  | Displays the current configuration settings, allowing you to verify if your setup is correct.                                                                                                                                             |
| `frx build -c <path_to_config>` | Uses a custom configuration file instead of the default `config.yaml`. **Note:** This change persists, so future `frx build` commands will use your custom config automatically.                                                          |

---
