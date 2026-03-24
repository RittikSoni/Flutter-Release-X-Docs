---
sidebar_position: 5
title: QR Code Generation
description: How to generate QR codes for your Flutter app release links using Flutter Release X. Scan and share builds instantly with testers.
keywords: [frx qr code, flutter release qr, app distribution qr code, frx qr generation]
---

# QR Code Generation

FRX automatically generates a QR code after each successful build and upload — so testers can download your app instantly by scanning their phone camera.

---

## How It Works

After `frx build` completes:
1. The release artifact (APK, IPA, etc.) is uploaded to your configured cloud provider
2. A download URL is generated
3. FRX encodes that URL into a QR code
4. The QR code is displayed in the terminal and/or saved as an image file

---

## Step 1: Configure QR Code Settings

Add or update the `qr_code` section in your `config.yaml`:

```yaml
qr_code:
  enabled: true               # Enable or disable QR code generation
  save_file: true             # Save the QR code as an image file
  show_in_command: true       # Display the QR code directly in the terminal
  size: 256                   # QR code image size in pixels
  error_correction_level: low # Options: low, medium, quartile, high
  save_path: "./release-qr-code.png"  # Output file path for the saved image
```

### Error Correction Levels

| Level | Recovery Capacity | Use Case |
|---|---|---|
| `low` | ~7% | Clean, high-quality print/screen |
| `medium` | ~15% | General use |
| `quartile` | ~25% | Slightly degraded environments |
| `high` | ~30% | Stickers, outdoor signage |

For app distribution, `low` is usually sufficient.

---

## Step 2: Run the Build

```bash
frx build
```

After the build and upload complete:

- **Terminal display**: The QR code is printed directly if `show_in_command: true`
- **Saved image**: The QR code is saved to `save_path` if `save_file: true`

---

## Sharing in Slack

To automatically share the QR code in your Slack channel, enable `share_QR` in the Slack config:

```yaml
upload_options:
  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN
    default_channel_id: CHANNEL_ID
    share_QR: true   # 👈 This sends the QR code image to Slack
    share_link: true
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| QR code not showing in terminal | Ensure your terminal supports ANSI escape codes |
| QR code image not saved | Check the `save_path` directory exists and is writable |
| QR code points to invalid link | Ensure the upload step succeeded before the QR is generated |

---

## What's Next?

- Share QR codes automatically in **Slack** → [Slack Cookbook](./slack-cookbook)
- Upload builds to **GitHub Releases** → [GitHub Cookbook](./github-cookbook)
