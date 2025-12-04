---
sidebar_position: 2
---

# Advanced Pipeline Examples

The Advanced Pipeline feature allows you to create custom automation workflows for any type of project - not just Flutter! This guide provides examples for multiple frameworks and use cases.

## 🚀 Quick Start

The easiest way to get started is to use `frx init` which generates a config file with examples for multiple frameworks:

```bash
frx init
```

This creates a `config.yaml` with comprehensive pipeline examples. You can then uncomment and customize the examples that match your project.

---

## 📋 Pipeline Step Fields

| Field                     | Description                                                                                                                                    | Required | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `name`                    | Name of the pipeline step                                                                                                                      | Yes      | -       |
| `command`                 | Command to execute                                                                                                                             | Yes      | -       |
| `upload_output`           | Upload artifact after step completes                                                                                                           | No       | `false` |
| `output_path`             | Path to artifact to upload                                                                                                                      | No       | -       |
| `notify_slack`            | Send Slack notification after step completes                                                                                                    | No       | `false` |
| `custom_exit_condition`  | Stop pipeline if this text appears in command output                                                                                           | No       | -       |
| `stop_on_failure`         | Stop pipeline on failure                                                                                                                       | No       | `true`  |
| `depends_on`              | List of step names this step depends on                                                                                                         | No       | `[]`    |

---

## 🎯 Framework-Specific Examples

### Flutter / Dart Pipeline

```yaml
pipeline_steps:
  - name: "Install Dependencies"
    command: "flutter pub get"
    stop_on_failure: true

  - name: "Run Tests"
    command: "flutter test"
    custom_exit_condition: "Test failed"
    upload_output: false

  - name: "Analyze Code"
    command: "flutter analyze"
    custom_exit_condition: "issues found"

  - name: "Build APK"
    command: "flutter build apk --release"
    upload_output: true
    output_path: "./build/app/outputs/flutter-apk/app-release.apk"
    notify_slack: true
```

### React / Next.js / Vite Pipeline

```yaml
pipeline_steps:
  - name: "Install Dependencies"
    command: "npm install"
    # or: "yarn install" or "pnpm install"

  - name: "Run Tests"
    command: "npm test"
    custom_exit_condition: "Tests failed"

  - name: "Lint Code"
    command: "npm run lint"

  - name: "Build Production"
    command: "npm run build"
    upload_output: true
    output_path: "./dist"
    notify_slack: true
```

### Python / Django / FastAPI Pipeline

```yaml
pipeline_steps:
  - name: "Install Dependencies"
    command: "pip install -r requirements.txt"
    # or: "poetry install" or "pipenv install"

  - name: "Run Tests"
    command: "pytest"
    # or: "python -m pytest" or "python manage.py test"
    custom_exit_condition: "FAILED"

  - name: "Lint Code"
    command: "flake8 ."
    # or: "pylint ." or "black --check ."

  - name: "Build Package"
    command: "python setup.py sdist bdist_wheel"
    upload_output: true
    output_path: "./dist"
    notify_slack: true
```

### .NET / C# Pipeline

```yaml
pipeline_steps:
  - name: "Restore Packages"
    command: "dotnet restore"

  - name: "Run Tests"
    command: "dotnet test"
    custom_exit_condition: "Test Run Failed"

  - name: "Build Solution"
    command: "dotnet build --configuration Release"

  - name: "Publish Application"
    command: "dotnet publish -c Release -o ./publish"
    upload_output: true
    output_path: "./publish"
    notify_slack: true
```

### Node.js / Express Pipeline

```yaml
pipeline_steps:
  - name: "Install Dependencies"
    command: "npm ci"

  - name: "Run Tests"
    command: "npm test"

  - name: "Build Application"
    command: "npm run build"
    upload_output: true
    output_path: "./build"
```

### Vue.js / Angular Pipeline

```yaml
pipeline_steps:
  - name: "Install Dependencies"
    command: "npm install"

  - name: "Run Tests"
    command: "npm run test:unit"

  - name: "Build Production"
    command: "npm run build"
    upload_output: true
    output_path: "./dist"
    notify_slack: true
```

### Go / Golang Pipeline

```yaml
pipeline_steps:
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

### Docker / Container Pipeline

```yaml
pipeline_steps:
  - name: "Build Docker Image"
    command: "docker build -t myapp:latest ."

  - name: "Run Container Tests"
    command: "docker run --rm myapp:latest npm test"

  - name: "Save Docker Image"
    command: "docker save myapp:latest -o myapp.tar"
    upload_output: true
    output_path: "./myapp.tar"
```

### Mixed / Custom Pipeline

```yaml
pipeline_steps:
  - name: "Check Environment"
    command: "node --version && python --version"

  - name: "Run Script"
    command: "./scripts/build.sh"
    custom_exit_condition: "build failed"

  - name: "Package Artifacts"
    command: "tar -czf release.tar.gz ./dist"
    upload_output: true
    output_path: "./release.tar.gz"
    notify_slack: true
```

---

## 📝 Complete Config Example

Here's a complete `config.yaml` example with pipeline steps:

```yaml
upload_options:
  github:
    enabled: true
    token: YOUR_GITHUB_TOKEN
    repo: OWNER/REPO_NAME
    tag: v0.0.1

  slack:
    enabled: true
    bot_user_oauth_token: YOUR_BOT_TOKEN
    default_channel_id: CHANNEL_ID

qr_code:
  enabled: true
  save_file: true
  show_in_command: true
  size: 256
  error_correction_level: low
  save_path: "./release-qr-code.png"

pipeline_steps:
  - name: "Install Dependencies"
    command: "npm install"
    stop_on_failure: true

  - name: "Run Tests"
    command: "npm test"
    custom_exit_condition: "Tests failed"

  - name: "Build Production"
    command: "npm run build"
    upload_output: true
    output_path: "./dist"
    notify_slack: true
```

---

## ⚠️ Important Notes

- **Order Matters**: Steps execute sequentially. Each step depends on the successful completion of the previous step.
- **Exit Conditions**: If a `custom_exit_condition` is matched in the output, the pipeline stops immediately.
- **Upload Artifacts**: Set `upload_output: true` and provide `output_path` to upload build artifacts.
- **Notifications**: Enable `notify_slack: true` to send notifications after step completion.

---

## 🚀 Running Your Pipeline

Once your `config.yaml` is set up, run:

```bash
frx build
```

The pipeline will execute all steps in order, upload artifacts, and send notifications as configured.
