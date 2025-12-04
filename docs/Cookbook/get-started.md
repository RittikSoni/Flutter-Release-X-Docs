---
title: Getting Started
sidebar_position: 1
---

## FRX Cookbook

Welcome to the Flutter Release X (FRX) Cookbook! This guide provides practical recipes and best practices to help you streamline your Flutter release process.

## 📌 Getting Started

Before using these recipes, make sure you have FRX(Flutter Release X) installed:

```bash
dart pub global activate flutter_release_x
```

For more details, follow [Installation](/docs/installation)

## 🚀 Quick Setup with `frx init`

The easiest way to get started is to initialize a new FRX project:

```bash
frx init
```

This command creates a `config.yaml` file in your current directory with:
- ✅ All available upload options (commented out, ready to enable)
- ✅ QR code settings with sensible defaults
- ✅ Helpful comments and examples
- ✅ Multi-framework pipeline examples (Flutter, React, Python, .NET, etc.)
- ✅ Links to setup documentation

Then simply:
1. Open `config.yaml` and configure the services you want to use
2. Add your API keys and tokens
3. Run `frx build` to start building and releasing!

You can also specify a custom config filename:

```bash
frx init --config my-config.yaml
```

Or force overwrite an existing config:

```bash
frx init --force
```
