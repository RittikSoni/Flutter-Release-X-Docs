---
id: teams-setup
title: Microsoft Teams Integration
sidebar_position: 7
---

To configure Microsoft Teams notifications, follow these simple steps:

## 1. **Create an Incoming Webhook**

Microsoft Teams uses incoming webhooks to receive messages from external services. Here's how to set one up:

- Go to your Microsoft Teams channel where you want to receive notifications.
- Click on the **three dots (⋯)** next to the channel name.
- Select **Connectors** from the menu.
- Search for **Incoming Webhook** and click **Configure**.
- Give your webhook a name (e.g., "Build Notifier") and optionally upload an image.
- Click **Create**.
- **Copy the webhook URL** that is generated (you won't be able to see it again).

:::tip Important
Make sure to copy the webhook URL immediately, as you won't be able to view it again after closing the dialog. If you lose it, you'll need to create a new webhook.
:::

> **Note:** Checkout [official Microsoft Teams documentation](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=newteams%2Cdotnet#create-an-incoming-webhook) for detailed walkthrough.

## 2. **Set Up Your Project**

Once you have your webhook URL, add it to your `config.yaml`:

```yaml
teams:
  enabled: true
  webhook_url: YOUR_WEBHOOK_URL # Required: Microsoft Teams Incoming Webhook URL
  share_QR: true # Optional: Share QR code in Teams (default: true)
  share_link: true # Optional: Share build download link in Teams (default: true)
  custom_message: "🚀 Check out the latest build! Download your app now!" # Optional: Custom message
  mention_users: ["John Doe", "Jane Smith"] # Optional: List of user names to include in message
```

## 3. **Get User Names for Mentions** (Optional)

If you want to include user names in your Teams notifications:

- In Microsoft Teams, you can include user display names in the message.
- **Important:** Teams webhooks don't support actual @mentions. User names will be included as plain text in the message.
- Add user display names to the `mention_users` list in your configuration.
- They will appear as "Mentioning: John Doe, Jane Smith" in the message.

:::warning Limitations
Microsoft Teams webhooks use Adaptive Cards for rich message formatting. The QR code will be embedded as a base64 image in the card. For actual @mentions, you would need to use the Microsoft Graph API or Bot Framework, which is beyond the scope of simple webhook integration.
:::

## 4. **Configuration Options**

| Key              | Description                                    | Required | Example                                                                                                  |
| ---------------- | ---------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `enabled`        | Enable Microsoft Teams notifications           | Yes      | `true`                                                                                                   |
| `webhook_url`    | Microsoft Teams Incoming Webhook URL           | Yes      | Get from Teams channel connectors                                                                        |
| `share_QR`       | Whether to share QR code in Teams              | No       | `true` (default)                                                                                         |
| `share_link`     | Whether to share build download link in Teams  | No       | `true` (default)                                                                                         |
| `custom_message` | Custom message to share with the build link    | No       | `"🚀 Check out the latest build! Download your app now!"`                                                |
| `mention_users`  | List of Teams user names to include in message | No       | `["John Doe", "Jane Smith"]` (Note: Webhooks don't support @mentions, names will be shown as plain text) |

## 5. **Testing Your Configuration**

After setting up your Teams webhook:

1. Make sure `enabled: true` is set in your config.
2. Run a build command:
   ```bash
   frx build
   ```
3. Check your Teams channel for the notification with the build link and QR code.

## Troubleshooting

### Webhook URL Not Working

- Verify the webhook URL is correct and hasn't been revoked.
- Check that the webhook is still active in your Teams channel connectors.
- Ensure the URL starts with `https://` and is complete.

### Messages Not Appearing

- Verify `enabled: true` is set in your configuration.
- Check that the webhook URL is valid and active.
- Ensure your build process completed successfully (Teams notifications are sent after successful builds).

### QR Code Not Displaying

- Teams webhooks support images via Adaptive Cards.
- The QR code is embedded as a base64 image.
- If the QR code doesn't appear, check that `share_QR: true` is set.

---

:::tip 💡 Pro Tip
You can use the same webhook URL for multiple channels by creating separate webhooks for each channel. Each webhook URL is unique to its channel.
:::

