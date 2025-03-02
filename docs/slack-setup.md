---
id: slack-setup
title: Slack Integration
sidebar_position: 6
---

To configure Slack, follow these simple steps:

### 1. **Create a Slack App**

- Go to the [Slack API: Your Apps](https://api.slack.com/apps) page.
- Click on **Create New App**.
- Choose **From Scratch** and give your app a name (e.g., "Build Notifier Bot") and select your workspace.
- Click **Create App**.

### 2. **Add Scopes for the App**

Scopes define the permissions your app will have. To upload QR code and Share Flutter build Download link, you'll need to add the following scopes:

#### **For Uploading Files**

- Go to the **OAuth & Permissions** page in your Slack App's settings.
- Under **Scopes**, find the section called **Bot Token Scopes**.
- Add the following scope:
  - `files:write` — Allows your app to upload files.

#### **For Sending Chat Messages**

- Under the same **Bot Token Scopes** section, add:
  - `chat:write` — Allows your app to send messages to channels.

### 3. **Install the App to Your Workspace**

- Once you've added the required scopes, scroll to the **OAuth & Permissions** page.
- Click the **Install App to Workspace** button.
- You'll be prompted to authorize the app with the selected permissions. Click **Allow** to proceed.

### 4. **Get the Bot User OAuth Token**

After installing the app, you will receive a **Bot User OAuth Token**. This token is required for your Slack configuration to upload files and send messages.

- In the **OAuth & Permissions** page, under **OAuth Tokens & Redirect URLs**, copy the **Bot User OAuth Token** (it should look like `xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX`).
- This is your `YOUR_BOT_TOKEN` in the configuration.

### 5. **Find Your Channel ID**

The `CHANNEL_ID` is the unique identifier for the Slack channel where the bot will send messages and share files.

#### **To Find the Channel ID**

- Go to the desired channel in your Slack workspace.
- Click on the **channel name** at the top to open the channel details.
- In the URL of the channel, you will see something like `https://app.slack.com/client/TXXXXXXXX/CXXXXXXXXX`.
- The part after the last `/` (e.g., `CXXXXXXXXX`) is your `CHANNEL_ID`.

### 6. **Get Member/User IDs to Mention**

If you want to mention specific users in the Slack message, you will need their **Slack User IDs**.

#### **To Find a User's ID**

- Open the user's profile by clicking on their name in Slack.
- Click on three dots and Copy Member Id (e.g., `UXXXXXXXX`) is the user's **User ID**.
- Repeat this for each user you want to mention and collect their **User IDs**.

### 7. **Set Up Your Project**

Now, you can use the `YOUR_BOT_TOKEN`, `CHANNEL_ID`, and `member_ids` in your configuration to automate Slack file uploads and download link sending.

````yaml
  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN # Required: Slack Bot OAuth Token, e.g., xoxb-XXXXXXXXX-XXXXXXXXX-XXXXXXXXXXXXX
    default_channel_id: CHANNEL_ID # Required: Slack channel ID, e.g., CXXXXXXXXX
    share_QR: true # Optional: Share QR code in Slack (default: true)
    share_link: true # Optional: Share build download link in Slack (default: true)
    custom_message: "🚀 Check out the latest build! Download your app now!" # Custom message to accompany the link
    mention_users: ["U0XXXXXXX", "U08XXXXXXXX"]
    ```
````
