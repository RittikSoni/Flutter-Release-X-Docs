---
sidebar_position: 2
---

# Upload Release to GitHub

## Prerequisites

Make sure you have:

- A GitHub repository where you want to upload your release.
- A GitHub Personal Access Token (PAT) with the repo and workflow scopes.
- A valid config.yaml file in your project root.

:::info
You can find GitHub Setup [here](/docs/cloud-integration#github-configuration)
:::

## Step-by-Step Guide

### 1. Create a Configuration File

Create a config.yaml file in the root directory of your project to define your upload options and QR code generation settings.

#### Sample Config file

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
    enabled: false

  slack:
    enabled: false

# QR Code generation settings
qr_code:
  enabled: true # Whether to generate QR codes (true/false)
  save_file: true # Save the QR code image to the file system (true/false)
  show_in_command: true # Display QR code in the command line output (true/false)
  size: 256 # Size of the generated QR code (pixels)
  error_correction_level: low # Error correction level: low, medium, quartile, high
  save_path: "./release-qr-code.png" # File path to save the QR code image
```

### 2. Build & Release with FRX

After creating the config.yaml, run the following command to build your Flutter app and trigger the release process:

```bash
frx build
```

## Additional Tips

- **Authentication**: Ensure your GitHub token has the necessary permissions (repo, workflow, packages).
- **Optional Integrations**: You can enable google_drive or slack by updating the config.yaml file.

:::tip Best Practice
Use a **GitHub Personal Access Token** with the `repo` and `workflow` scopes to avoid authentication issues when uploading releases. You can find github setup [here](/docs/cloud-integration#github-configuration)
:::

:::important
Ensure that `frx` is installed globally or added to your `dev_dependencies` to avoid command not found errors.
:::

:::warning
Do **not** commit your `config.yaml` file with sensitive API tokens to a public repository.
:::

:::note
You can customize the QR code output path using the `save_path` option in `config.yaml`.
:::
