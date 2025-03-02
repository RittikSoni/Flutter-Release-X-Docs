---
sidebar_position: 1
---

# Basic Example

Create a `config.yaml` file in the root directory of your project to specify your upload options and QR code generation settings:

## Default Config file

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

Once `config` file created in your root project directory, run below command:

```bash
frx build
```
