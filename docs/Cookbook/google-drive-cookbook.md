---
sidebar_position: 3
title: Upload to Google Drive
description: How to automatically upload your Flutter app release builds to Google Drive using Flutter Release X.
keywords: [frx google drive upload, flutter release google drive, frx cloud upload, automated drive upload]
---

# Upload to Google Drive

Automatically upload your Flutter app builds to Google Drive after each release, then share the download link and QR code — all with a single command.

:::info Setup Required
You'll need OAuth 2.0 credentials from Google Cloud Console. See the [Google Drive Setup Guide](/docs/cloud-integration#google-drive-configuration) for step-by-step instructions.
:::

---

## Prerequisites

- Google Cloud project with the **Google Drive API** enabled
- OAuth 2.0 credentials (`client_id` and `client_secret`)
- FRX installed (`dart pub global activate flutter_release_x`)

---

## Step 1: Configure `config.yaml`

```yaml
# Optional: Path to Flutter binary (if flutter isn't in your system PATH)
flutter_path: FLUTTER/BINARY/PATH

upload_options:
  google_drive:
    enabled: true
    client_id: YOUR_CLIENT_ID         # From Google Cloud Console
    client_secret: YOUR_CLIENT_SECRET # From Google Cloud Console

qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  error_correction_level: low
  save_path: "./release-qr-code.png"
```

> On first run, FRX will open a browser window to authenticate your Google account. After that, credentials are cached locally in `gdcredentials.json`.

---

## Step 2: Build and Upload

```bash
frx build
```

FRX will:
1. Build the release APK
2. Authenticate with Google Drive (browser prompt on first run)
3. Upload the APK to your Google Drive
4. Generate a sharable download link and QR code

---

## Step 3: Verify the Upload

1. Open [Google Drive](https://drive.google.com)
2. Find the uploaded file in your root or a designated folder
3. Confirm the file is accessible and the link is shareable

---

:::warning Security
Add both `config.yaml` and `gdcredentials.json` to your `.gitignore` to prevent leaking credentials.

```
config.yaml
gdcredentials.json
```

See the [gitignore Guide](/docs/gitignore).
:::

---

## What's Next?

- Combine Drive uploads with **Slack notifications** → [Slack Cookbook](./slack-cookbook)
- Upload to **GitHub Releases** as well → [GitHub Cookbook](./github-cookbook)
- Build a full CI/CD pipeline → [Advanced Pipeline Cookbook](./advance-cookbook)
