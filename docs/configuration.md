---
id: configuration
title: Configuration
sidebar_position: 4
---

To configure **Flutter Release X**, create a `config.yaml` file in the root directory of your project. This file defines **how builds are processed, uploaded, and shared**.

### 🔹 **Configuration Options**

You have **three ways** to configure Flutter Release X:

## **0️. Quick Setup with `frx init` (Recommended for New Users 🎯)**

The easiest way to get started is to use the `frx init` command:

```bash
frx init
```

This command automatically creates a `config.yaml` file with:

- ✅ All available upload options (commented out, ready to enable)
- ✅ QR code settings with sensible defaults
- ✅ Helpful comments marking Required vs Optional fields
- ✅ Multi-framework pipeline examples (Flutter, React, Python, .NET, Go, etc.)
- ✅ Links to setup documentation

**Options:**

- `--config` / `-c`: Specify a custom config filename (default: `config.yaml`)
- `--force` / `-f`: Overwrite existing config file if it exists

**Example:**

```bash
# Create default config.yaml
frx init

# Create custom config file
frx init --config my-config.yaml

# Overwrite existing config
frx init --force
```

After running `frx init`, simply:

1. Open the generated `config.yaml` file
2. Uncomment and configure the services you want to use
3. Add your API keys and tokens
4. Run `frx build` to start building and releasing!

---

## **1. Default Configuration (Quick & Easy 🚀)**

- **Ideal for most users** who want an **automated build & upload process** without extra setup.
- Supports **.apk builds**, QR code generation, and cloud uploads to multiple platforms:
  - **Cloud Storage**: GitHub, Google Drive, AWS S3, GitLab, Diawi
  - **App Stores**: Google Play Store, Apple App Store
  - **Notifications**: Slack, Microsoft Teams

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
    tag: v0.0.1 # Optional: Release tag (default: v0.0.1)

  google_drive:
    enabled: true
    client_id: YOUR_CLIENT_ID # Required: Google API Client ID
    client_secret: YOUR_CLIENT_SECRET # Required: Google API Client Secret

  diawi:
    enabled: false
    token: YOUR_DIAWI_TOKEN # Required: Diawi API Token
    wall_of_apps: false # Optional: Display on Diawi wall of apps (default: false)
    find_by_udid: false # Optional: Allow finding by UDID (default: false)
    callback_url: "" # Optional: URL to notify when upload completes
    installation_notifications: false # Optional: Enable installation notifications (default: false)
    password: "" # Optional: Password protection for download link
    comment: "" # Optional: Comment/description for upload

  aws:
    enabled: false
    access_key_id: YOUR_AWS_ACCESS_KEY_ID # Required: AWS Access Key ID
    secret_access_key: YOUR_AWS_SECRET_ACCESS_KEY # Required: AWS Secret Access Key
    region: us-east-1 # Optional: AWS region (default: us-east-1)
    bucket_name: your-bucket-name # Required: S3 bucket name
    key_prefix: flutter-release-x # Optional: Prefix for uploaded files (default: empty)

  gitlab:
    enabled: false
    token: YOUR_GITLAB_TOKEN # Required: GitLab Personal Access Token
    project_id: "12345678" # Required: GitLab Project ID (found in project settings)
    tag: v0.0.1 # Optional: Release tag (default: v0.0.1)
    ref: main # Optional: Branch or commit SHA (default: main)
    host: https://gitlab.com # Optional: GitLab host URL (default: https://gitlab.com)

  play_store:
    enabled: false
    service_account_json_path: ./path/to/service-account.json # Required: Path to Google Play Service Account JSON file
    package_name: com.example.app # Required: Android app package name
    track: internal # Optional: Release track - internal, alpha, beta, or production (default: internal)
    release_name: "Release v1.0.0" # Optional: Custom release name

  app_store:
    enabled: false
    api_key_path: ./path/to/AuthKey_XXXXXXXXXX.p8 # Required: Path to App Store Connect API Key (.p8 file)
    api_issuer: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx # Required: App Store Connect API Key Issuer ID (UUID format)
    app_id: "1234567890" # Required: App Store Connect App ID
    bundle_id: com.example.app # Optional: iOS app bundle identifier

  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN # Required: Slack Bot OAuth Token, e.g., xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
    default_channel_id: CHANNEL_ID # Required: Slack channel ID, e.g., CXXXXXXXXX
    share_QR: true # Optional: Share QR code in Slack (default: true)
    share_link: true # Optional: Share build download link in Slack (default: true)
    custom_message: "🚀 Check out the latest build! Download your app now!" # Optional: Custom message
    mention_users: ["U0XXXXXXX", "U08XXXXXXXX"] # Optional: List of Slack user/member IDs to mention

  teams:
    enabled: false
    webhook_url: YOUR_WEBHOOK_URL # Required: Microsoft Teams Incoming Webhook URL
    share_QR: true # Optional: Share QR code in Teams (default: true)
    share_link: true # Optional: Share build download link in Teams (default: true)
    custom_message: "🚀 Check out the latest build! Download your app now!" # Optional: Custom message
    mention_users: ["John Doe", "Jane Smith"] # Optional: List of Teams user names (webhooks don't support @mentions)

# QR Code generation settings
qr_code:
  enabled: true # Optional: Whether to generate QR codes (default: true)
  save_file: true # Optional: Save the QR code image to the file system (default: true)
  show_in_command: true # Optional: Display QR code in the command line output (default: true)
  size: 256 # Optional: Size of the generated QR code in pixels (default: 256)
  error_correction_level: low # Optional: Error correction level - low, medium, quartile, high (default: low)
  save_path: "./release-qr-code.png" # Optional: File path to save the QR code image (default: ./release-qr-code.png)
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
  - name: "Run Tests"
    command: "flutter test"
    customExitCondition: "Test failed" # Stop if tests fail
    upload_output: false # No upload for this step
    notify_slack: true # Notify Slack after tests complete

  - name: "Lint"
    command: "flutter analyze"
    customExitCondition: "issues found" # Stop if issues found

  - name: "Build APK"
    command: "flutter build apk --release"
    customExitCondition: "error: some specific error message" # Stop if this error appears in the output
    upload_output: true # Enable upload for this step
    output_path: "./build/app/outputs/flutter-apk/app-release.apk" # APK path
    notify_slack: false # Do not notify Slack after this step

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
| **Multi-Platform**   | 🌍 Any platform       | 🌍 Any platform           |
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

### `Diawi`

| Key                          | Description                               | Required | Example                                                           |
| ---------------------------- | ----------------------------------------- | -------- | ----------------------------------------------------------------- |
| `enabled`                    | Enable Diawi upload                       | Yes      | `true`                                                            |
| `token`                      | Diawi API Token                           | Yes      | Get from [Diawi Profile](https://dashboard.diawi.com/profile/api) |
| `wall_of_apps`               | Display on Diawi wall of apps             | No       | `false` (default)                                                 |
| `find_by_udid`               | Allow finding by UDID                     | No       | `false` (default)                                                 |
| `callback_url`               | URL to notify when upload completes       | No       | `""`                                                              |
| `installation_notifications` | Enable installation notifications         | No       | `false` (default)                                                 |
| `password`                   | Password protection for the download link | No       | `""`                                                              |
| `comment`                    | Comment/description for the upload        | No       | `""`                                                              |

### `AWS S3`

| Key                 | Description                                 | Required | Example                      |
| ------------------- | ------------------------------------------- | -------- | ---------------------------- |
| `enabled`           | Enable AWS S3 upload                        | Yes      | `true`                       |
| `access_key_id`     | AWS Access Key ID                           | Yes      | `YOUR_AWS_ACCESS_KEY_ID`     |
| `secret_access_key` | AWS Secret Access Key                       | Yes      | `YOUR_AWS_SECRET_ACCESS_KEY` |
| `region`            | AWS region                                  | No       | `us-east-1` (default)        |
| `bucket_name`       | S3 bucket name                              | Yes      | `your-bucket-name`           |
| `key_prefix`        | Prefix for uploaded files (organizes files) | No       | `flutter-release-x`          |

> **Note:** The S3 bucket must have public read permissions for direct URL access, or you'll need to use presigned URLs. Check your bucket's public access settings in the AWS Console.

### `GitLab`

| Key          | Description                                       | Required | Example                          |
| ------------ | ------------------------------------------------- | -------- | -------------------------------- |
| `enabled`    | Enable GitLab upload                              | Yes      | `true`                           |
| `token`      | GitLab Personal Access Token                      | Yes      | Get from GitLab profile settings |
| `project_id` | GitLab Project ID (found in project settings)     | Yes      | `"12345678"`                     |
| `tag`        | Release tag (e.g., version number)                | No       | `v0.0.1` (default)               |
| `ref`        | Branch or commit SHA from which to create the tag | No       | `main` (default)                 |
| `host`       | GitLab host URL (for self-hosted instances)       | No       | `https://gitlab.com` (default)   |

> **Note:** For self-hosted GitLab instances, update the `host` field with your GitLab URL.

### `Google Play Store`

| Key                         | Description                                   | Required | Example                                                 |
| --------------------------- | --------------------------------------------- | -------- | ------------------------------------------------------- |
| `enabled`                   | Enable Google Play Store upload               | Yes      | `true`                                                  |
| `service_account_json_path` | Path to Google Play Service Account JSON file | Yes      | `./path/to/service-account.json`                        |
| `package_name`              | Android app package name                      | Yes      | `com.example.app`                                       |
| `track`                     | Release track                                 | No       | `internal` (Options: internal, alpha, beta, production) |
| `release_name`              | Custom release name                           | No       | `"Release v1.0.0"`                                      |

> **Note:** Requires a Google Play Service Account with appropriate permissions. The service account must have access to your app in the Play Console.

### `Apple App Store`

| Key            | Description                                  | Required | Example                                |
| -------------- | -------------------------------------------- | -------- | -------------------------------------- |
| `enabled`      | Enable App Store upload                      | Yes      | `true`                                 |
| `api_key_path` | Path to App Store Connect API Key (.p8 file) | Yes      | `./path/to/AuthKey_XXXXXXXXXX.p8`      |
| `api_issuer`   | App Store Connect API Key Issuer ID (UUID)   | Yes      | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| `app_id`       | App Store Connect App ID                     | Yes      | `"1234567890"`                         |
| `bundle_id`    | iOS app bundle identifier                    | No       | `com.example.app`                      |

> **Note:** Full IPA upload via App Store Connect API requires proper JWT signing. For production uploads, consider using Transporter, Fastlane, or Xcode Organizer for more reliable uploads.

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

### `Microsoft Teams`

| Key              | Description                                    | Required | Example                                                                                                  |
| ---------------- | ---------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `enabled`        | Enable Microsoft Teams notifications           | Yes      | `true`                                                                                                   |
| `webhook_url`    | Microsoft Teams Incoming Webhook URL           | Yes      | Get from Teams channel connectors                                                                        |
| `share_QR`       | Whether to share QR code in Teams              | No       | `true` (default)                                                                                         |
| `share_link`     | Whether to share build download link in Teams  | No       | `true` (default)                                                                                         |
| `custom_message` | Custom message to share with the build link    | No       | `"🚀 Check out the latest build! Download your app now!"`                                                |
| `mention_users`  | List of Teams user names to include in message | No       | `["John Doe", "Jane Smith"]` (Note: Webhooks don't support @mentions, names will be shown as plain text) |

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
