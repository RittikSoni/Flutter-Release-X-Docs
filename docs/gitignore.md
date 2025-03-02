---
id: gitignore
title: .gitignore
sidebar_position: 8
---

## Recommended .gitignore Configuration

To prevent exposing sensitive information or to safeguard your project from unintentionally committing sensitive information or unnecessary files, we strongly recommend adding the following entries to your .gitignore file to excluded from version control:

- `gdcredentials.json`: Contains credentials such as API keys and authentication tokens.
- `config.yaml`: Includes custom configuration or environment-specific data, which may contain sensitive information (e.g., database credentials).

If you're using a custom configuration file, replace `config.yaml` with the actual filename (e.g., `custom_config.yaml`).
