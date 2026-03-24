---
sidebar_position: 1
title: Basic Example
description: Learn how to set up Flutter Release X with a basic config.yaml for building, uploading, and sharing your app in minutes.
keywords: [frx basic setup, flutter release config, frx config.yaml, flutter deploy]
---

# Basic Example

Get up and running with Flutter Release X in under 5 minutes. This guide walks you through creating a minimal `config.yaml` to build your app and distribute it automatically.

---

## Step 1: Initialize Your Project

The fastest way to get a valid config file is to run:

```bash
frx init
```

This generates a `config.yaml` in your current directory with all available options, helpful comments, and examples pre-filled — ready for you to customize.

---

## Step 2: Your `config.yaml`

Here's what a minimal config looks like. You only need to fill in the services you want to use:

```yaml
# Optional: Path to Flutter binary (only needed if `flutter` isn't in your PATH)
# Windows: C:/dev/flutter/bin/flutter.bat
# macOS:   /Users/USERNAME/development/flutter/bin/flutter
flutter_path: FLUTTER/BINARY/PATH

upload_options:
  # --- GitHub Releases ---
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN       # Personal Access Token with `repo` scope
    repo: OWNER/REPO_NAME          # e.g., RittikSoni/Flutter-Release-X
    tag: v1.0.0                    # Release tag

  # --- Google Drive ---
  google_drive:
    enabled: true
    client_id: YOUR_CLIENT_ID         # From Google Cloud Console
    client_secret: YOUR_CLIENT_SECRET

  # --- Slack Notifications ---
  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN   # xoxb-...
    default_channel_id: CHANNEL_ID         # e.g., C0XXXXXXXX
    share_QR: true
    share_link: true
    custom_message: "🚀 New build is ready!"
    mention_users: ["U0XXXXXXX"]  # Slack Member IDs (not usernames)

# QR Code Settings
qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  error_correction_level: low
  save_path: "./release-qr-code.png"
```

---

## Step 3: Build and Release

Once your `config.yaml` is set up, run:

```bash
frx build
```

FRX will:
1. **Build** your release APK
2. **Upload** it to all enabled cloud services (GitHub, Google Drive, etc.)
3. **Generate** a QR code and download link for instant sharing
4. **Notify** your Slack channel with the link

---

## ✅ What's Next?

- **Target multiple platforms**: `frx build --target android,ios,web`
- **Use pipelines** for multi-step workflows: [Advanced Pipeline Examples](./advance-pipeline)
- **Set up Slack notifications**: [Slack Setup Guide](/docs/slack-setup)
- **Upload to Play Store or App Store**: [Cloud Integration](/docs/cloud-integration)
