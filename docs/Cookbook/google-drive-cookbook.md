---
sidebar_position: 3
---

# Upload Release to Google Drive

## Prerequisites

Before uploading releases to Google Drive, ensure that you have:

- A Google Drive API setup with credentials.
- A valid config.yaml file with Google Drive upload enabled.
- The frx package installed.

:::info
You can find Google Drive Setup [here](/docs/cloud-integration#google-drive-configuration)
:::

## Step-by-Step Guide

### 1. Enable Google Drive Upload

Update your config.yaml file:

#### Sample Config file

```yaml
# Path to Flutter binary
# Example for Windows: C:/dev/flutter/bin/flutter.bat
# Example for macOS: /Users/USER_NAME/development/flutter/bin/flutter
flutter_path: FLUTTER/BINARY/PATH

upload_options:
  github:
    enabled: false

 google_drive:
   enabled: true
   client_id: YOUR_CLIENT_ID # Required: Google API Client ID
   client_secret: YOUR_CLIENT_SECRET # Required: Google API Client Secret

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

Your credentials must be obtained from Google Cloud Console after enabling the Google Drive API.

### 2. Build & Release with FRX

After creating the config.yaml, run the following command to build your Flutter app and trigger the release process:

```bash
frx build
```

### 3. Verify the Upload

- Open Google Drive.
- Navigate to the folder/home.
- Check if the release file is uploaded successfully.
