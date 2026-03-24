---
sidebar_position: 2
title: Advanced Pipeline Examples
description: Real-world examples for using the FRX Advanced Pipeline with Flutter, React, Python, Go, Docker, and more.
keywords: [frx pipeline, flutter ci/cd, automated pipeline, mobile app deployment, frx examples]
---

# Advanced Pipeline Examples

The **Advanced Pipeline** is the most powerful feature of Flutter Release X. It lets you define a series of custom automation steps in a single `config.yaml`, supporting any framework — not just Flutter.

:::tip Quick Start
Run `frx init` to auto-generate a starter `config.yaml` with pipeline examples for multiple frameworks.
:::

---

## 🗂 New Pipeline Format (Recommended)

FRX `v0.6.0` introduces **named pipelines**, letting you define multiple workflows and run them individually.

```yaml
pipelines:
  build:
    description: "Build and distribute the Flutter app"
    steps:
      - name: "Install Dependencies"
        command: "flutter pub get"

      - name: "Run Tests"
        command: "flutter test"
        retry: 2
        timeout: 300

      - name: "Build APK"
        command: "flutter build apk --release"
        timeout: 600
        upload_output: true
        output_path: "./build/app/outputs/flutter-apk/app-release.apk"
        notify_slack: true

  lint:
    description: "Lint and analyze code"
    steps:
      - name: "Analyze"
        command: "flutter analyze"
        allow_failure: true
```

**Run a specific pipeline:**

```bash
frx pipeline run build
# or via build command:
frx build --pipeline build
```

**List all configured pipelines:**

```bash
frx pipeline list
```

**Validate your configuration before running:**

```bash
frx pipeline validate
```

---

## 📋 Step Configuration Reference

Every pipeline step supports the following fields:

| Field | Description | Required | Default |
|---|---|---|---|
| `name` | Unique name for this step | ✅ Yes | — |
| `command` | Shell command to execute | ✅ Yes | — |
| `description` | Human-readable description shown in logs | No | — |
| `working_directory` | Run the command in a specific directory | No | Current dir |
| `env` | Map of environment variables for this step | No | `{}` |
| `timeout` | Max execution time in seconds | No | No limit |
| `retry` | Number of retry attempts on failure | No | `0` |
| `retry_delay` | Seconds to wait between retries | No | `5` |
| `condition` | Only run if this shell command exits `0` | No | — |
| `continue_on_error` | Continue pipeline even if this step fails | No | `false` |
| `allow_failure` | Treat failure as a warning, not an error | No | `false` |
| `stop_on_failure` | Halt the pipeline on failure | No | `true` |
| `upload_output` | Upload the artifact after step completes | No | `false` |
| `output_path` | Path to the artifact to upload | No | — |
| `notify_slack` | Send a Slack notification after this step | No | `false` |
| `notify_teams` | Send a Teams notification after this step | No | `false` |
| `custom_exit_condition` | Stop if this text appears in the output | No | — |
| `depends_on` | List of step names this step requires first | No | `[]` |

---

## 🎯 Framework Examples

### Flutter / Dart

```yaml
pipelines:
  flutter-ci:
    description: "Full Flutter CI pipeline"
    steps:
      - name: "Get Dependencies"
        command: "flutter pub get"
        stop_on_failure: true

      - name: "Analyze Code"
        command: "flutter analyze"
        custom_exit_condition: "issues found"
        allow_failure: true

      - name: "Run Tests"
        command: "flutter test"
        retry: 2
        retry_delay: 5
        timeout: 300

      - name: "Build APK"
        command: "flutter build apk --release"
        timeout: 600
        upload_output: true
        output_path: "./build/app/outputs/flutter-apk/app-release.apk"
        notify_slack: true
        env:
          BUILD_ENV: production
```

---

### React / Next.js / Vite

```yaml
pipelines:
  react-ci:
    description: "React production build pipeline"
    steps:
      - name: "Install Dependencies"
        command: "npm ci"

      - name: "Lint"
        command: "npm run lint"
        allow_failure: true

      - name: "Run Tests"
        command: "npm test"
        custom_exit_condition: "Tests failed"

      - name: "Build"
        command: "npm run build"
        upload_output: true
        output_path: "./dist"
        notify_slack: true
```

---

### Python / FastAPI / Django

```yaml
pipelines:
  python-ci:
    description: "Python app CI pipeline"
    steps:
      - name: "Install Dependencies"
        command: "pip install -r requirements.txt"

      - name: "Lint"
        command: "flake8 ."
        allow_failure: true

      - name: "Run Tests"
        command: "pytest"
        custom_exit_condition: "FAILED"
        retry: 2

      - name: "Build Package"
        command: "python setup.py sdist bdist_wheel"
        upload_output: true
        output_path: "./dist"
```

---

### .NET / C#

```yaml
pipelines:
  dotnet-ci:
    description: ".NET build and publish pipeline"
    steps:
      - name: "Restore Packages"
        command: "dotnet restore"

      - name: "Run Tests"
        command: "dotnet test"
        custom_exit_condition: "Test Run Failed"

      - name: "Publish"
        command: "dotnet publish -c Release -o ./publish"
        upload_output: true
        output_path: "./publish"
        notify_teams: true
```

---

### Go / Golang

```yaml
pipelines:
  go-ci:
    description: "Go build and test pipeline"
    steps:
      - name: "Download Dependencies"
        command: "go mod download"

      - name: "Run Tests"
        command: "go test ./..."
        custom_exit_condition: "FAIL"

      - name: "Build Binary"
        command: "go build -o app ./cmd/main.go"
        upload_output: true
        output_path: "./app"
        notify_slack: true
```

---

### Docker

```yaml
pipelines:
  docker-ci:
    description: "Docker build and test pipeline"
    steps:
      - name: "Build Image"
        command: "docker build -t myapp:latest ."

      - name: "Run Tests in Container"
        command: "docker run --rm myapp:latest npm test"

      - name: "Export Image"
        command: "docker save myapp:latest -o myapp.tar"
        upload_output: true
        output_path: "./myapp.tar"
```

---

### Node.js / Express

```yaml
pipelines:
  node-ci:
    description: "Node.js API build pipeline"
    steps:
      - name: "Install Dependencies"
        command: "npm ci"

      - name: "Run Tests"
        command: "npm test"

      - name: "Build"
        command: "npm run build"
        upload_output: true
        output_path: "./build"
```

---

## 🔧 Production-Ready Example

Here's a complete `config.yaml` showing a full setup with cloud integrations and an advanced pipeline:

```yaml
upload_options:
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN
    repo: OWNER/REPO_NAME
    tag: v1.0.0

  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN
    default_channel_id: CHANNEL_ID
    share_QR: true
    share_link: true

qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  error_correction_level: low
  save_path: "./release-qr-code.png"

pipelines:
  release:
    description: "Full release pipeline for Flutter app"
    steps:
      - name: "Install Dependencies"
        command: "flutter pub get"
        stop_on_failure: true

      - name: "Run Tests"
        command: "flutter test"
        retry: 2
        timeout: 300

      - name: "Build APK"
        command: "flutter build apk --release"
        timeout: 600
        upload_output: true
        output_path: "./build/app/outputs/flutter-apk/app-release.apk"
        notify_slack: true
```

**Run this pipeline:**

```bash
frx pipeline run release
```

---

## ⚠️ Key Notes

- **Sequential execution**: Steps run in the order defined, unless `depends_on` is used.
- **Step isolation**: Each step runs independently. A failed step stops the pipeline unless `continue_on_error: true` is set.
- **`custom_exit_condition`**: A regex or text pattern — if found in the command's output, the step is treated as failed.
- **Retries**: Use `retry` with `retry_delay` to handle flaky steps gracefully.
- **Legacy support**: The `pipeline_steps` format still works and is treated as a single default pipeline.
