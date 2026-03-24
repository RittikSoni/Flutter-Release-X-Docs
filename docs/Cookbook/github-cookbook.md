---
sidebar_position: 2
title: Upload to GitHub Releases
description: Step-by-step guide to uploading your Flutter app build to GitHub Releases using Flutter Release X.
keywords: [frx github upload, flutter github release, automated github release, frx github token]
---

# Upload to GitHub Releases

Automatically upload your Flutter app builds to GitHub Releases with a download link and QR code — all with a single command.

:::info Setup Required
You'll need a GitHub Personal Access Token (PAT) with `repo` scope. See the [GitHub Setup Guide](/docs/cloud-integration#github-configuration) for detailed steps.
:::

---

## Prerequisites

- A GitHub repository where you want to publish releases
- A GitHub PAT with `repo` scope
- FRX installed (`dart pub global activate flutter_release_x`)

---

## Step 1: Configure `config.yaml`

```yaml
# Optional: Path to Flutter binary (if not in your system PATH)
flutter_path: FLUTTER/BINARY/PATH

upload_options:
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN  # Personal Access Token with `repo` scope
    repo: OWNER/REPO_NAME     # e.g., RittikSoni/Flutter-Release-X
    tag: v1.0.0               # Release tag

qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  error_correction_level: low
  save_path: "./release-qr-code.png"
```

---

## Step 2: Build and Release

```bash
frx build
```

FRX will:
1. Build the release APK
2. Upload it to your GitHub repository as a release asset under the specified tag
3. Generate a QR code pointing to the download link

---

## Best Practices

:::warning Security
**Never commit your `config.yaml` with tokens to a public repository.** Add it to `.gitignore`.

```
config.yaml
gdcredentials.json
```
See the full [`.gitignore` Guide](/docs/gitignore).
:::

:::tip
Use a **fine-grained Personal Access Token** scoped only to the target repository and with `Contents: Read and Write` permission for better security.
:::

:::note
You can customize the QR code output path using the `save_path` option in `config.yaml`.
:::

---

## What's Next?

- Combine with **Slack notifications** to alert your team after every release → [Slack Cookbook](./slack-cookbook)
- Set up a **full CI pipeline** with tests, build, and upload → [Advanced Pipeline Cookbook](./advance-cookbook)
