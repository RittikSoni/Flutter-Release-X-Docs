---
sidebar_position: 4
---

# Send Release Notifications to Slack

## Prerequisites

Before enabling Slack notifications, ensure you have:

- A Slack workspace and a channel where you want to send notifications.
- A Slack Bot User OAuth Token (`bot_user_oauth_token`).
- A valid config.yaml file with Slack notifications enabled.

:::info
You can find the Slack setup guide [here.](/docs/slack-setup)
:::

## Step-by-Step Guide

### 1. Enable Slack Notifications

Update your config.yaml file with the Slack Bot Token and Channel ID:

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

:::warning
Do not commit your bot_user_oauth_token to a public repository. Use environment variables instead.
& for Best Practice follow [.gitignore](/docs/gitignore)
:::

:::important
`share_link` requires at least one cloud upload option (`google_drive` or `github`) to be enabled.
If no upload option is enabled, FRX will return a default local link instead.
:::

### 2. Build & Release with FRX

After creating the config.yaml, run the following command to build your Flutter app and trigger the release process:

```bash
frx build
```

### 3. Verify Slack Notification

After running the command:

- The Slack bot will send a message in the configured channel (default_channel_id).
- If share_QR is enabled, a QR code will be attached to the message.
- If share_link is enabled, the download link for the release will be included.

## Troubleshooting

- Ensure your Slack Bot Token has permissions to send messages to the specified channel.
- If users are not mentioned, verify that the provided user IDs are correct (Slack requires IDs, not usernames).
