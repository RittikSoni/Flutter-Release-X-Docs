---
sidebar_position: 4
title: Slack Release Notifications
description: How to send automated Slack notifications with QR codes and download links when you release your Flutter app using FRX.
keywords: [frx slack notification, flutter slack bot, release notification slack, frx notify]
---

# Slack Release Notifications

Send automatic notifications to a Slack channel — including the download link and QR code — every time you run `frx build`.

:::info Slack Setup
Need to create a Slack Bot and get a token? See the [Slack Setup Guide](/docs/slack-setup).
:::

---

## Prerequisites

- A Slack workspace with a channel for build notifications
- A Slack Bot with `chat:write` and `files:write` scopes
- Your Bot's OAuth Token (`xoxb-...`) and the target Channel ID

---

## Step 1: Configure `config.yaml`

```yaml
upload_options:
  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN   # xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
    default_channel_id: CHANNEL_ID         # e.g., C0XXXXXXXXX
    share_QR: true             # Share QR code image in the message
    share_link: true           # Share the build download link
    custom_message: "🚀 New build is ready! Download and test now."
    mention_users:             # Optional: Slack Member IDs to @mention (not usernames)
      - "U0XXXXXXX"
      - "U08XXXXXXXX"
```

:::important
`share_link` requires at least one cloud upload (e.g., `github` or `google_drive`) to be enabled. Without an upload, FRX will share a local path instead.
:::

---

## Step 2: Build and Notify

```bash
frx build
```

After a successful build and upload, FRX will post a Slack message with:
- ✅ Your custom message
- 📎 QR code image (if `share_QR: true`)
- 🔗 Download link (if `share_link: true`)
- 👋 @mentions for listed user IDs

---

## Send a Standalone Notification

You can also send notifications without triggering a build:

```bash
frx notify --platform slack --message "🚀 v1.0.0 is live!"
# Shorthand:
frx notify -p slack -m "🚀 v1.0.0 is live!"
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Bot doesn't post to channel | Ensure the bot is **invited** to the channel |
| Users not mentioned | Use **Member IDs** (e.g., `U0XXXXXXX`), not display names |
| Link not shared | Enable at least one upload option (`github`, `google_drive`, etc.) |

---

:::warning Security
Never commit your `bot_user_oauth_token` to a public repo. Add `config.yaml` to your `.gitignore`.
:::

---

## What's Next?

- Use Slack notifications **inside a pipeline step** → [Advanced Pipeline Cookbook](./advance-cookbook)
- Set up **Microsoft Teams** notifications → [Teams Setup Guide](/docs/teams-setup)
