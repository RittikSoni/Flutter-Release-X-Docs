---
sidebar_position: 7
title: Git Hooks Cookbook
description: Real-world FRX git hooks recipes for Flutter, React.js, Next.js, Python, Node.js, and DevOps workflows. Pre-commit, pre-push, commit-msg examples.
keywords: [frx hooks cookbook, flutter pre-commit hook, react git hooks, python pre-commit, nodejs hooks, husky alternative]
---

# 🍳 Git Hooks Cookbook

Ready-to-use hook recipes for every stack. Copy, paste, customize.

:::tip Before you start
Run `frx hooks install` after adding any hook to `config.yaml` to write the scripts to `.git/hooks/`.
:::

---

## 🐦 Flutter Recipes

### Standard Flutter Quality Gate

The most common setup — analyze, format check, and tests on every commit:

```yaml
hooks:
  pre-commit:
    enabled: true
    description: "Flutter quality gate"
    stop_on_failure: true
    steps:
      - name: "Analyze"
        command: "flutter analyze"
        description: "Static analysis — catches errors before they ship"

      - name: "Format Check"
        command: "dart format --set-exit-if-changed ."
        description: "Ensure consistent code formatting"
        allow_failure: true   # warn, don't block commit

      - name: "Unit Tests"
        command: "flutter test"
        timeout: 180
```

### Flutter with Coverage Threshold

Enforce a minimum test coverage before each push:

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Enforce test coverage ≥ 80%"
    steps:
      - name: "Tests with Coverage"
        command: "flutter test --coverage"
        timeout: 300

      - name: "Check Coverage Threshold"
        command: "lcov --summary coverage/lcov.info | grep -E 'lines.*: ([89][0-9]|100)\\.'"
        description: "Fails if line coverage is below 80%"
```

### Conventional Commits for Flutter Projects

```yaml
hooks:
  commit-msg:
    enabled: true
    description: "Enforce Conventional Commits"
    steps:
      - name: "Validate Commit Message"
        command: "grep -qE '^(feat|fix|docs|style|refactor|test|chore|build|ci|perf|revert)(\\(.+\\))?(!)?: .{1,100}' $1 || (echo '\\n❌ Invalid commit message format.\\n   Expected: feat(scope): description\\n   See: https://www.conventionalcommits.org' && exit 1)"
```

### Auto Flutter Pub Get After Pull

Never forget to update dependencies after pulling:

```yaml
hooks:
  post-merge:
    enabled: true
    description: "Sync dependencies after pull"
    steps:
      - name: "Flutter Pub Get"
        command: "flutter pub get"
        allow_failure: true   # don't fail if pubspec didn't change

      - name: "Generate Code"
        command: "dart run build_runner build --delete-conflicting-outputs"
        allow_failure: true
```

### Flutter + FRX Pipeline on Push

Run your full release pipeline on `git push` to main:

```yaml
pipelines:
  release:
    description: "Full release pipeline"
    steps:
      - name: "Build APK"
        command: "flutter build apk --release"
        upload_output: true
        output_path: "./build/app/outputs/flutter-apk/app-release.apk"
      - name: "Notify Team"
        command: "frx notify --platform slack --message '🚀 New build ready!'"

hooks:
  pre-push:
    enabled: false   # enable when you want auto-release on push
    run_pipeline: release
```

---

## ⚛️ React / Next.js Recipes

### ESLint + Prettier Before Every Commit

```yaml
hooks:
  pre-commit:
    enabled: true
    description: "Lint and format React code"
    steps:
      - name: "ESLint"
        command: "npx eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 0"
        timeout: 60

      - name: "Prettier"
        command: "npx prettier --check ."
        allow_failure: true   # warn only — auto-fix with: prettier --write .
```

### Jest Tests on Pre-Push

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Run Jest test suite"
    steps:
      - name: "Unit Tests"
        command: "npm test -- --watchAll=false --passWithNoTests"
        timeout: 120
        env:
          CI: "true"
```

### TypeScript Type Check

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "TypeScript Check"
        command: "npx tsc --noEmit"
        timeout: 60
```

### Next.js Build Check

Catch build errors before they hit production:

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Verify Next.js build succeeds"
    steps:
      - name: "Next.js Build"
        command: "npm run build"
        timeout: 300
        env:
          NODE_ENV: "production"
```

### Auto-Install Dependencies After Pull

```yaml
hooks:
  post-merge:
    enabled: true
    description: "Sync node_modules after pull"
    steps:
      - name: "npm install"
        command: "npm install"
        allow_failure: true
```

---

## 🐍 Python Recipes

### Ruff Lint + Black Format Check

```yaml
hooks:
  pre-commit:
    enabled: true
    description: "Python lint and format"
    steps:
      - name: "Ruff Lint"
        command: "ruff check ."
        timeout: 30

      - name: "Black Format Check"
        command: "black --check ."
        allow_failure: true
```

### pytest Before Push

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Run pytest"
    steps:
      - name: "Tests"
        command: "pytest -x -q"
        timeout: 180
        env:
          PYTHONPATH: "."
          ENV: "test"
```

### MyPy Type Check

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Ruff"
        command: "ruff check ."

      - name: "MyPy"
        command: "mypy src/ --ignore-missing-imports"
        allow_failure: true   # warn until type coverage is complete
```

### Django / FastAPI Pre-Push

```yaml
hooks:
  pre-push:
    enabled: true
    description: "API quality checks"
    steps:
      - name: "Run Tests"
        command: "pytest"
        timeout: 120

      - name: "Check Migrations"
        command: "python manage.py migrate --check"
        allow_failure: true
```

---

## 🟢 Node.js / Backend Recipes

### npm Audit + Tests

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Security and test check"
    steps:
      - name: "Security Audit"
        command: "npm audit --audit-level=high"
        allow_failure: true

      - name: "Tests"
        command: "npm test"
        timeout: 120
        env:
          NODE_ENV: "test"
```

### Prisma Schema Check

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Prisma Validate"
        command: "npx prisma validate"

      - name: "Prisma Format"
        command: "npx prisma format"
        allow_failure: true
```

---

## 🐳 Docker / DevOps Recipes

### Dockerfile Lint

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Hadolint"
        command: "hadolint Dockerfile"
        allow_failure: true
```

### Docker Build Test Before Push

```yaml
hooks:
  pre-push:
    enabled: true
    description: "Verify Docker image builds"
    steps:
      - name: "Docker Build"
        command: "docker build -t myapp:test . --no-cache"
        timeout: 300
```

---

## 🌍 Universal Recipes (Any Stack)

### Validate Secrets Are Not Committed

Prevent accidentally committing API keys:

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Detect Secrets"
        command: "grep -rn --include='*.dart' --include='*.js' --include='*.py' --include='*.ts' -E '(api_key|secret|password|token)\\s*=\\s*[\"'\''][^\"'\'']{8,}' . | grep -v '.example' | grep -v 'test' && echo 'Potential secrets found!' && exit 1 || exit 0"
        allow_failure: false
```

### Check for TODO/FIXME Before Push

Remind yourself (or your team) to clean up before shipping:

```yaml
hooks:
  pre-push:
    enabled: true
    steps:
      - name: "Check TODOs"
        command: "grep -rn 'TODO\\|FIXME\\|HACK\\|XXX' --include='*.dart' --include='*.js' --include='*.py' . | head -20"
        allow_failure: true   # warn only
```

### Validate YAML Config Files

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Validate config.yaml"
        command: "frx hooks validate"

      - name: "Validate Pipeline"
        command: "frx pipeline validate"
        allow_failure: true
```

---

## Tips & Tricks

### Combining Multiple Hooks

```yaml
hooks:
  pre-commit:
    enabled: true
    stop_on_failure: true
    steps:
      - name: "Fast Checks"
        command: "flutter analyze --no-pub"   # skip pub resolution for speed
      - name: "Format"
        command: "dart format --set-exit-if-changed lib/"

  pre-push:
    enabled: true
    steps:
      - name: "Full Tests"
        command: "flutter test"    # slow tests only on push, not every commit
        timeout: 300
```

### Using Environment Variables

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Tests"
        command: "flutter test"
        env:
          FLUTTER_TEST_MODE: "ci"
          MOCK_API: "true"          # use mocks in hook, not real API
```

### Isolate Heavy Steps to Pre-Push

Keep `pre-commit` fast (< 5s) so it's never annoying:

```yaml
hooks:
  pre-commit:
    enabled: true
    steps:
      - name: "Analyze (fast)"
        command: "flutter analyze --no-pub"   # fastest check

  pre-push:
    enabled: true
    steps:
      - name: "Full Test Suite"
        command: "flutter test --coverage"
        timeout: 300
      - name: "Build Check"
        command: "flutter build apk --release"
        timeout: 600
```

---

## See Also

- [🪝 Git Hooks Reference](/docs/git-hooks) — Full schema, commands, and hook names
- [⚙️ Advanced Pipeline Cookbook](/docs/Cookbook/advance-cookbook) — Full CI/CD pipeline recipes
- [📖 Configuration](/docs/configuration) — Complete `config.yaml` reference
