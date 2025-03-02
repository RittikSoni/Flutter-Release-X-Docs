---
id: configuration
title: Configuration
sidebar_position: 4
---

To configure **Flutter Release X**, create a `config.yaml` file in the root directory of your project. This file defines **how builds are processed, uploaded, and shared**.

### 🔹 **Configuration Options**

You have **two ways** to configure Flutter Release X:

## **1️. Default Configuration (Quick & Easy 🚀)**

- **Ideal for most users** who want an **automated build & upload process** without extra setup.
- Supports **.apk builds**, QR code generation, and cloud uploads (GitHub, Google Drive, Slack).

### Default Config file Sample

```yaml
# Path to Flutter binary
# Example for Windows: C:/dev/flutter/bin/flutter.bat
# Example for macOS: /Users/USER_NAME/development/flutter/bin/flutter
flutter_path: FLUTTER/BINARY/PATH

upload_options:
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN # Required: Personal Access Token for GitHub
    repo: REPO/PATH # Required: GitHub repository path, e.g., RittikSoni/Flutter-Release-X
    tag: v0.0.1 # Release tag (e.g., version number)

  google_drive:
    enabled: true
    client_id: YOUR_CLIENT_ID # Required: Google API Client ID
    client_secret: YOUR_CLIENT_SECRET # Required: Google API Client Secret

  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN # Required: Slack Bot OAuth Token, e.g., xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
    default_channel_id: CHANNEL_ID # Required: Slack channel ID, e.g., CXXXXXXXXX
    share_QR: true # Optional: Share QR code in Slack (default: true)
    share_link: true # Optional: Share build download link in Slack (default: true)
    custom_message: "🚀 Check out the latest build! Download your app now!" # Custom message to accompany the link
    mention_users: ["U0XXXXXXX", "U08XXXXXXXX"] # List of Slack user/member IDs to mention. Note: not username or display name.

# QR Code generation settings
qr_code:
  enabled: true # Whether to generate QR codes (true/false)
  save_file: true # Save the QR code image to the file system (true/false)
  show_in_command: true # Display QR code in the command line output (true/false)
  size: 256 # Size of the generated QR code (pixels)
  error_correction_level: low # Error correction level: low, medium, quartile, high
  save_path: "./release-qr-code.png" # File path to save the QR code image
```

## **2. Advanced Pipeline (Full Customization 🔥)**

- For users who need complete control over build steps, dependencies, and automation.
- Supports custom commands, multiple platforms (iOS, Web, Desktop), and external scripts.
- Overrides default configuration when enabled.

### Advance Pipeline Config file Sample

```yaml
upload_options:
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN # Required: Personal Access Token for GitHub
    repo: REPO/PATH # Required: GitHub repository path, e.g., RittikSoni/Flutter-Release-X
    tag: v0.0.1 # Release tag (e.g., version number)

  google_drive:
    enabled: true
    client_id: YOUR_CLIENT_ID # Required: Google API Client ID
    client_secret: YOUR_CLIENT_SECRET # Required: Google API Client Secret

  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN # Required: Slack Bot OAuth Token, e.g., xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
    default_channel_id: CHANNEL_ID # Required: Slack channel ID, e.g., CXXXXXXXXX
    share_QR: true # Optional: Share QR code in Slack (default: true)
    share_link: true # Optional: Share build download link in Slack (default: true)
    custom_message: "🚀 Check out the latest build! Download your app now!" # Custom message to accompany the link
    mention_users: ["U0XXXXXXX", "U08XXXXXXXX"] # List of Slack user/member IDs to mention. Note: not username or display name.

# QR Code generation settings
qr_code:
  enabled: true # Whether to generate QR codes (true/false)
  save_file: true # Save the QR code image to the file system (true/false)
  show_in_command: true # Display QR code in the command line output (true/false)
  size: 256 # Size of the generated QR code (pixels)
  error_correction_level: low # Error correction level: low, medium, quartile, high
  save_path: "./release-qr-code.png" # File path to save the QR code image

# Advanced Pipeline Configuration [OPTIONAL]
# This section allows you to define multiple pipeline steps that can be executed in sequence. Each step can have its own commands, dependencies, and upload options.

# If a custom pipeline is provided, it will override the default flow and behavior.
# Ensure that the pipeline steps are properly defined to reflect the intended execution order.

# e.g.,
pipeline_steps:
  - name: "Build APK"
    command: "flutter build apk --release"
    customExitCondition: "error: some specific error message" # Stop if this error appears in the output
    upload_output: true # Enable upload for this step
    output_path: "./build/app/outputs/flutter-apk/app-release.apk" # APK path
    notify_slack: false # Do not notify Slack after this step

  - name: "Run Tests"
    command: "flutter test"
    customExitCondition: "Test failed" # Stop if tests fail
    upload_output: false # No upload for this step
    notify_slack: true # Notify Slack after tests complete

  - name: "Lint"
    command: "flutter analyze"
    customExitCondition: "issues found" # Stop if issues found

  - name: "Package Release"
    command: "node --version"
    customExitCondition: "version mismatch" # Stop if version mismatch is found
    upload_output: true # Upload to cloud on success
    output_path: "./release-package.zip" # Path to release package
    notify_slack: true # Notify on Slack on success

  - name: "Deploy to Cloud"
    command: "./deploy_to_cloud.sh"
    customExitCondition: "deployment failed" # Stop if deployment fails
    upload_output: false # No upload as deployment is handled separately
    notify_slack: true # Notify on Slack on success

# Note: The order of steps in the pipeline is crucial!
# Each step depends on the successful completion of the previous step.
# If a step fails due to a custom exit condition, the pipeline will halt immediately,
# and subsequent steps will not be executed. Ensure that custom exit conditions are properly defined
# to avoid unwanted interruptions in the pipeline flow.
```

## 📌 Which One Should You Choose?

| Feature              | Default Configuration | Advanced Pipeline         |
| -------------------- | --------------------- | ------------------------- |
| **Ease of Use**      | ✅ Simple setup       | ⚡ Requires custom steps  |
| **Custom Commands**  | ❌ Not supported      | ✅ Fully customizable     |
| **Multi-Platform**   | 🚀 Android only       | 🌍 Any platform           |
| **External Scripts** | ❌ No                 | ✅ Yes                    |
| **Error Handling**   | 🔧 Standard logs      | ⚠️ Custom exit conditions |

:::tip 💡 **Tip:**
If you're just getting started, go with **Default Configuration**. If you need full flexibility, switch to **Advanced Pipeline**.
:::

## `Flutter Path`

| Key            | Description                | Example                                                                                                |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ |
| `flutter_path` | Path to the Flutter binary | `C:/dev/flutter/bin/flutter.bat` (Windows), `/Users/USER_NAME/development/flutter/bin/flutter` (macOS) |

---

## Upload Options

### `GitHub`

| Key       | Description                        | Required | Example                         |
| --------- | ---------------------------------- | -------- | ------------------------------- |
| `enabled` | Enable GitHub upload               | Yes      | `true`                          |
| `token`   | Personal Access Token for GitHub   | Yes      | `YOUR_GITHUB_TOKEN`             |
| `repo`    | GitHub repository path             | Yes      | `RittikSoni/Flutter-Release-X`  |
| `tag`     | Release tag (e.g., version number) | No       | `v0.0.1` (Defaults to `v0.0.1`) |

### `Google Drive`

| Key             | Description                | Required | Example              |
| --------------- | -------------------------- | -------- | -------------------- |
| `enabled`       | Enable Google Drive upload | Yes      | `true`               |
| `client_id`     | Google API Client ID       | Yes      | `YOUR_CLIENT_ID`     |
| `client_secret` | Google API Client Secret   | Yes      | `YOUR_CLIENT_SECRET` |

### `Slack`

| Key                    | Description                                   | Required | Example                                                   |
| ---------------------- | --------------------------------------------- | -------- | --------------------------------------------------------- |
| `enabled`              | Enable Slack upload                           | Yes      | `true`                                                    |
| `bot_user_oauth_token` | Slack Bot OAuth Token                         | Yes      | `YOUR_BOT_TOKEN`                                          |
| `default_channel_id`   | Slack channel ID                              | Yes      | `CXXXXXXXXX`                                              |
| `share_QR`             | Whether to share QR code on Slack             | No       | `true` (default)                                          |
| `share_link`           | Whether to share build download link on Slack | No       | `true` (default)                                          |
| `custom_message`       | Custom message to share with the build link   | No       | `"🚀 Check out the latest build! Download your app now!"` |
| `mention_users`        | List of Slack user/member IDs to mention      | No       | `["U0XXXXXXX", "U08XXXXXXXX"]`                            |

---

## `QR Code Generation Settings`

| Key                      | Description                                          | Default                 | Example                                      |
| ------------------------ | ---------------------------------------------------- | ----------------------- | -------------------------------------------- |
| `enabled`                | Whether to generate QR codes                         | `true`                  | `true`                                       |
| `save_file`              | Whether to save the QR code image to the file system | `true`                  | `true`                                       |
| `show_in_command`        | Whether to display the QR code in the command line   | `true`                  | `true`                                       |
| `size`                   | Size of the generated QR code (in pixels)            | `256`                   | `256`                                        |
| `error_correction_level` | Error correction level for the QR code               | `low`                   | `low` (Options: low, medium, quartile, high) |
| `save_path`              | File path to save the QR code image                  | `./release-qr-code.png` | `./release-qr-code.png`                      |

## `Advance Pipeline`

| Field                     | Description                                                                                                                                                                                  | Example Value                                                                          | Required | Default Value |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------- | ------------- |
| **name**                  | The name of the pipeline step.                                                                                                                                                               | "Build APK"                                                                            | Yes      | N/A           |
| **command**               | The command to run for this pipeline step.                                                                                                                                                   | `flutter build apk --release`                                                          | Yes      | N/A           |
| **upload_output**         | Whether to upload the output from this step.                                                                                                                                                 | `true` or `false`                                                                      | No       | `false`       |
| **output_path**           | The file path where the output is stored (if applicable).                                                                                                                                    | `./build/app/outputs/flutter-apk/app-release.apk`                                      | No       | N/A           |
| **notify_slack**          | Whether to notify Slack after this step completes.                                                                                                                                           | `true` or `false`                                                                      | No       | `false`       |
| **custom_exit_condition** | Custom condition for when to **stop** the pipeline step. It checks for a specific match in the `stdout` or `stderr`. If matched, the pipeline stops. If not matched, the pipeline continues. | `"error: some specific error message"` (Stop if a specific error occurs in the output) | No       | N/A           |
