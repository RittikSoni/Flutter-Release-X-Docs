---
sidebar_position: 6
title: Advanced Pipeline Cookbook
description: Real-world automation recipes using FRX Advanced Pipelines for Flutter, React, Node.js, Python, Docker, and DevOps workflows.
keywords: [frx pipeline cookbook, flutter automation, ci cd pipeline recipes, automated deployment]
---

# Advanced Pipeline Cookbook

This cookbook provides **ready-to-use pipeline recipes** for common automation scenarios. Whether you're building Flutter apps, deploying backends, or running DevOps tasks — there's a recipe for you.

:::tip New in v0.6.0
Use named pipelines to organize multiple workflows in one config file. Run them individually with `frx pipeline run <name>`.
:::

---

## 🛠 1. Custom Command Pipelines

Run any shell command as a pipeline step — great for quick sanity checks:

```yaml
pipelines:
  check-env:
    description: "Verify development environment"
    steps:
      - name: "Check Flutter Version"
        command: "flutter --version"

      - name: "Check Git Status"
        command: "git status"
```

```bash
frx pipeline run check-env
```

---

## 🚀 2. Flutter Recipes

### Multi-Platform Build

```yaml
pipelines:
  multi-platform:
    description: "Build and release for iOS and Android"
    steps:
      - name: "Build iOS & Android"
        command: "frx build --target ios,android"
```

Build for all supported platforms at once:

```yaml
      - name: "Build All Platforms"
        command: "frx build --target all"
```

### Send Slack Notification After Build

```yaml
pipelines:
  notify-release:
    description: "Notify Slack after release"
    steps:
      - name: "Build APK"
        command: "flutter build apk --release"
        upload_output: true
        output_path: "./build/app/outputs/flutter-apk/app-release.apk"
        notify_slack: true

      - name: "Notify Team"
        command: "frx notify --platform slack --message '🚀 New build is ready!'"
```

---

## 🌐 3. Web Development Recipes

### React / Next.js Build & Deploy

```yaml
pipelines:
  react-deploy:
    description: "Build and deploy React app"
    steps:
      - name: "Build"
        command: "npm run build"

      - name: "Deploy to Server"
        command: "scp -r build/ user@server:/var/www/html"
```

### Auto Git Commit & Push

```yaml
pipelines:
  auto-push:
    description: "Auto-commit and push changes"
    steps:
      - name: "Commit & Push"
        command: "git add . && git commit -m 'Auto release' && git push"
```

### Lint & Format

```yaml
pipelines:
  lint:
    description: "Lint and format code"
    steps:
      - name: "ESLint + Prettier"
        command: "eslint . --fix && prettier --write ."
        allow_failure: true
```

---

## 📱 4. Mobile Development Recipes

### React Native Build

```yaml
pipelines:
  rn-build:
    description: "Build React Native APK"
    steps:
      - name: "Build APK"
        command: "npx react-native run-android --variant=release"
```

### Upload to App Stores via Fastlane

```yaml
pipelines:
  store-upload:
    description: "Upload to Google Play Store"
    steps:
      - name: "Upload Android"
        command: "fastlane supply --track production --aab app-release.aab"
```

---

## ⚙️ 5. Node.js & Backend Recipes

### Build and Restart API

```yaml
pipelines:
  api-deploy:
    steps:
      - name: "Build & Restart"
        command: "npm run build && pm2 restart my-api"
```

### Run Tests with Coverage

```yaml
pipelines:
  test-coverage:
    steps:
      - name: "Jest Tests"
        command: "jest --coverage"
```

---

## 🐳 6. Docker & DevOps Recipes

### Docker Build & Deploy

```yaml
pipelines:
  docker-deploy:
    description: "Build and run Docker container"
    steps:
      - name: "Build & Start"
        command: "docker build -t my-app . && docker-compose up -d"
```

### Database Migrations

```yaml
pipelines:
  db-migrate:
    steps:
      - name: "Apply Migrations"
        command: "npx prisma migrate deploy"
```

### Deploy to Cloud Providers

```yaml
pipelines:
  cloud-deploy:
    steps:
      - name: "Deploy to Vercel"
        command: "vercel --prod"
```

---

## 🔐 7. Security Recipes

### Security Audit

```yaml
pipelines:
  security:
    steps:
      - name: "Audit Dependencies"
        command: "npm audit --fix"
        allow_failure: true
```

### Monitor App Logs

```yaml
pipelines:
  monitor:
    steps:
      - name: "Check Logs"
        command: "pm2 logs my-app"
```

---

## 📌 Summary

The Advanced Pipeline lets you automate any workflow — from Flutter builds to Docker deployments — without expensive CI/CD infrastructure. Define your pipelines in `config.yaml`, and run them with a single command.

```bash
frx pipeline list      # See all your pipelines
frx pipeline validate  # Validate before running
frx pipeline run <name> # Run a specific pipeline
```
