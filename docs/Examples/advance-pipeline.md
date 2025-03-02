---
sidebar_position: 2
---

# Advance Pipeline Example

Create a `config.yaml` file in the root directory of your project to specify your upload options, QR code generation settings & Advance pipeline steps:

## Advance Pipeline Config file

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
  - name: "Build APK"
    command: "flutter build apk --release"
    customExitCondition: "error: some specific error message" # Stop if this error appears in the output
    upload_output: true # Enable upload for this step
    output_path: "./build/app/outputs/flutter-apk/app-release.apk" # APK path
    notify_slack: false # Do not notify Slack after this step

  - name: "Run Tests"
    command: "flutter test"
    customExitCondition: "Test failed" # Stop if tests fail
    upload_output: false # No upload for this step
    notify_slack: true # Notify Slack after tests complete

  - name: "Lint"
    command: "flutter analyze"
    customExitCondition: "issues found" # Stop if issues found

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

Once `config` file created in your root project directory, run below command:

```bash
frx build
```
