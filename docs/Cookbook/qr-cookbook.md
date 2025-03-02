---
sidebar_position: 5
---

# Generate QR Code for App Releases

## Prerequisites

Before enabling QR code generation, ensure that:

- The QR code feature is enabled in your config.yaml.
- You have frx installed and configured correctly.

## Step-by-Step Guide

### 1. Enable QR Code Generation

      Update your config.yaml file to enable QR code support:

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
            enabled: true
            bot_user_oauth_token: YOUR_BOT_TOKEN # Required: Slack Bot OAuth Token, e.g., xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
            default_channel_id: CHANNEL_ID # Required: Slack channel ID, e.g., CXXXXXXXXX
            share_QR: true # Optional: Share QR code in Slack (default: true)
            share_link: true # Optional: Share build download link in Slack (default: true)
            custom_message: "🚀 Check out the latest build! Download your app now!" # [OPTIONAL] Custom message to accompany the link
            mention_users: ["U0XXXXXXX", "U08XXXXXXXX"] # [OPTIONAL] List of Slack user/member IDs to mention. Note: not username or display name.

         # QR Code generation settings
         qr_code:
         enabled: true # Whether to generate QR codes (true/false)
         save_file: true # Save the QR code image to the file system (true/false)
         show_in_command: true # Display QR code in the command line output (true/false)
         size: 256 # Size of the generated QR code (pixels)
         error_correction_level: low # Error correction level: low, medium, quartile, high
         save_path: "./release-qr-code.png" # File path to save the QR code image
         ```

         :::info
         If save_file is enabled, the QR code will be saved as an image.
         If show_in_command is enabled, the QR code will be displayed in the terminal.
         :::

### 2. Build & Generate QR Code

      Once the config is set, run the build command:

      ```bash
      frx build
      ```

### 3. Scan the QR Code

         After the build process, you can:

         - View the QR Code in the terminal (if show_in_command is true).
         - Find the saved QR Code image at ./release-qr-code.png.
         - Scan the QR Code using any mobile device to access the release link.

## Troubleshooting

- If the QR code does not display in the terminal, ensure your terminal supports ANSI escape codes.
- If the QR code file is not saved, check the save_path location and permissions.
- Ensure the release upload is successful, or the QR code may point to an invalid link.
