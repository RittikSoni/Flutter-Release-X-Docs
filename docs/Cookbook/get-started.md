---
title: Getting Started
sidebar_position: 1
description: Start using Flutter Release X in under 5 minutes. Install, initialize, and run your first automated release.
keywords: [frx install, flutter release x getting started, frx setup, flutter ci/cd setup]
---

# Getting Started with FRX

Welcome to the **Flutter Release X (FRX) Cookbook** — a collection of practical recipes to help you automate your app release process quickly and effectively.

---

## Prerequisites

Make sure you have FRX installed before following any recipe:

```bash
dart pub global activate flutter_release_x
```

> Need help? See the full [Installation Guide](/docs/installation).

---

## 🚀 Initialize Your Project

The fastest way to set up FRX is with the `frx init` command:

```bash
frx init
```

This generates a `config.yaml` file in your current directory with:
- ✅ All available upload options (commented out, ready to enable)
- ✅ Sensible QR code defaults
- ✅ Helpful inline comments for every option
- ✅ Multi-framework pipeline examples (Flutter, React, Python, .NET, etc.)
- ✅ Links to the relevant setup documentation

**Then follow these 3 steps:**
1. Open `config.yaml` — uncomment the services you want
2. Add your API keys and tokens
3. Run `frx build` to build, upload, and share your app automatically

---

## Custom Config File

Use a different filename with the `--config` flag:

```bash
frx init --config my-settings.yaml
```

Force-overwrite an existing config:

```bash
frx init --force
```

---

## What's Next?

| I want to... | Go to |
|---|---|
| Upload to GitHub / Google Drive | [Cloud Integration](/docs/cloud-integration) |
| Run a multi-step pipeline | [Advanced Pipeline Cookbook](./advance-cookbook) |
| Share builds on Slack | [Slack Cookbook](./slack-cookbook) |
| Generate QR codes | [QR Code Cookbook](./qr-cookbook) |
