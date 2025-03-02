---
id: faq
title: FAQs ❓
sidebar_position: 11
---

Below are the most common questions about **Flutter Release X**.

---

## 🔹 General Questions

### **How does Flutter Release X work?**

Flutter Release X automates your **Flutter app release process**, handling builds, uploads, and sharing with just one command.

### **Can I use Flutter Release X for non-Flutter projects?**

Yes! **Only the Advanced Pipeline feature** is supported for **non-Flutter projects** like React, Node.js, or other technologies.

---

## 🔧 **Troubleshooting Issues**

### **Why is my build failing?**

Possible reasons:

1. **Incorrect Flutter path** – Ensure `flutter_path` is correctly set in `config.yaml`.
2. **Invalid API keys** – Double-check GitHub, Google Drive, or Slack tokens.
3. **Missing dependencies** – Run `flutter pub get` before building.

### **How do I fix "command not found" when running `frx build`?**

- Ensure **Dart’s bin directory** is added to your system’s `$PATH`:

  ```bash
  export PATH="$HOME/.pub-cache/bin:$PATH"
  ```

---

## ☁️ **Cloud Integration**

### **How to enable GitHub uploads?**

1. **Generate a GitHub Token** from [GitHub Settings](https://github.com/settings/tokens).
2. Add it to your `config.yaml`:

   ```yaml
   upload_options:
     github:
       enabled: true
       token: YOUR_GITHUB_TOKEN
   ```

3. Run `frx build` to upload automatically.

### **Can I upload builds to Google Drive?**

Yes! Follow [Cloud Integration](cloud-integration) to set up Google Drive uploads.

---

## 📱 **QR Codes & Sharing**

### **How do I generate QR codes for my app?**

Ensure the following settings are enabled in `config.yaml`:

```yaml
qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  save_path: "./release-qr-code.png"
```

### **Can I share the download link on Slack?**

Yes! Enable Slack integration in your config:

```yaml
upload_options:
  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN
    default_channel_id: CXXXXXXXXX
    share_QR: true
    share_link: true
```

---

## ⚙️ **Customization & Advanced Features**

### **How do I use a custom configuration file?**

Run:

```bash
frx build -c path/to/custom_config.yaml
```

**🔹 Note:** This persists for future builds.

### **How do I create an Advanced Pipeline?**

Define your pipeline in `config.yaml`:

```yaml
pipeline_steps:
  - name: "Build APK"
    command: "flutter build apk --release"
    upload_output: true
    notify_slack: true
```

For full customization, check the **[Advanced Pipeline Guide](configuration)**.

---

## 🎯 **Still Have Questions?**

If you didn’t find an answer here, feel free to:

- Open an **issue** on [GitHub](https://github.com/RittikSoni/Flutter-Release-X/issues).
- Join the **community discussions**.
- Contact us via **Email or GitHub Discussions**.
