---
id: installation
title: 🚀 Installation
sidebar_position: 2
---

Flutter Release X can be installed globally using `dart pub`:

```bash
dart pub global activate flutter_release_x
```

Or, add it as a dependency in your pubspec.yaml:

```bash
dart pub add flutter_release_x
```

This will add a line like this to your package's pubspec.yaml (and run an implicit dart pub get):

```yaml
dependencies:
  flutter_release_x: <LATEST_VERSION>
```

Alternatively, your editor might support dart pub get or flutter pub get. Check the docs for your editor to learn more.

:::tip 💡 Pro Tip
For maximum flexibility, install **Flutter Release X** globally! This allows you to use it across **any project**, whether it's **Flutter, React, or other non-Flutter projects**.

However, note that **only the Advanced Pipeline feature** is supported for non-Flutter projects.

```bash
dart pub global activate flutter_release_x
```

By installing it globally, you can run `frx` commands from anywhere on your system!

:::

## 🎯 Quick Start After Installation

Once installed, the easiest way to get started is to initialize a new FRX project:

```bash
frx init
```

This creates a `config.yaml` file with all available options, helpful comments, and examples for multiple frameworks. Then simply:

1. Open `config.yaml` and configure your settings
2. Add your API keys and tokens
3. Run `frx build` to start building and releasing!

For more details, see the [Getting Started Guide](/docs/Cookbook/get-started) or [Configuration Guide](/docs/configuration).
