---
sidebar_position: 7
title: Git Hooks
description: Automate flutter analyze, tests, and pipelines on every git commit and push with FRX Git Hooks. Husky-like workflow, zero config bloat.
keywords: [frx git hooks, pre-commit flutter, flutter analyze pre-commit, husky flutter, git hooks cli]
---

# 🪝 Git Hooks

> Run `flutter analyze`, tests, or any FRX pipeline automatically — triggered by git itself.

FRX ships a **Husky-like git hooks system** powered by its own pipeline engine. Define hooks in `config.yaml`, install them once, and git does the rest. Fully opt-in, per hook.

---

## How It Works

```
git commit
   └─▶ .git/hooks/pre-commit     ← written by frx hooks install
           └─▶ frx hooks run pre-commit
                   └─▶ Reads config.yaml → hooks.pre-commit
                           └─▶ Runs your steps sequentially
                                   └─▶ exit 0 → git proceeds ✅
                                       exit 1 → git ABORTS  ❌
```

No daemons. No extra processes. Just a tiny shell script that calls back into FRX.

---

## Quick Start

```bash
# 1. Generate a starter config (includes hooks template)
frx init

# 2. Edit config.yaml — enable a hook
# hooks:
#   pre-commit:
#     enabled: true
#     steps:
#       - name: "Analyze"
#         command: "flutter analyze"

# 3. Install hooks into .git/hooks/
frx hooks install

# 4. Verify
frx hooks list
```

That's it. Every `git commit` now runs your steps automatically.

---

## Commands Reference

| Command | Description |
|---|---|
| `frx hooks install` | Install all enabled hooks into `.git/hooks/` |
| `frx hooks install --dry-run` | Preview what would be installed (no files written) |
| `frx hooks install --dir <path>` | Target a specific project directory |
| `frx hooks uninstall` | Remove **all** FRX-managed hooks |
| `frx hooks uninstall --hook <name>` | Remove a single hook by name |
| `frx hooks list` | Status table: config vs disk state |
| `frx hooks run <name>` | Manually trigger a hook (great for testing) |
| `frx hooks validate` | Validate config and show actionable warnings |

:::tip
All commands accept `--config <path>` to point at a custom config file.
:::

---

## Configuration Schema

```yaml
hooks:
  pre-commit:                        # git hook name (any standard hook)
    enabled: true                    # opt-in (default: false)
    description: "Quality gates"     # shown in frx hooks list
    stop_on_failure: true            # abort git op on any step failure
    steps:
      - name: "Analyze"              # required — shown in output
        command: "flutter analyze"   # required — shell command to run
        description: "Static analysis"
        timeout: 60                  # kill after 60s
        allow_failure: false         # true = warn only, don't abort
        env:                         # per-step environment variables
          CI: "true"
        working_directory: "./app"   # override cwd for this step

  pre-push:
    enabled: true
    run_pipeline: ci                 # delegate to a named pipeline
```

### Hook Fields

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `enabled` | bool | Yes | `false` | Whether this hook is active |
| `description` | string | No | — | Shown in `frx hooks list` |
| `stop_on_failure` | bool | No | `true` | Abort git operation if any step fails |
| `steps` | list | No* | `[]` | Inline steps to run |
| `run_pipeline` | string | No* | — | Delegate to a named FRX pipeline |

*At least one of `steps` or `run_pipeline` is required.

### Step Fields

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `name` | string | Yes | — | Label shown in terminal output |
| `command` | string | Yes | — | Shell command to execute |
| `description` | string | No | — | Human-readable description |
| `allow_failure` | bool | No | `false` | If true, failure is a warning — hook continues |
| `timeout` | int | No | — | Kill step after N seconds |
| `env` | map | No | `{}` | Extra environment variables for this step |
| `working_directory` | string | No | current dir | Override working directory |

---

## Supported Hook Names

Any standard git hook name works as a key. Most commonly used:

| Hook | When It Fires | Best Used For |
|---|---|---|
| `pre-commit` | Before commit is created | Lint, format, unit tests |
| `commit-msg` | After you write the message | Validate commit format |
| `prepare-commit-msg` | Before message editor opens | Auto-fill templates |
| `post-commit` | After commit completes (can't abort) | Notifications, logging |
| `pre-merge-commit` | Before merge commit | Merge-specific checks |
| `pre-push` | Before `git push` | Integration tests, final checks |
| `post-merge` | After `git merge` or `git pull` | `flutter pub get`, dependency sync |
| `post-checkout` | After `git checkout`/`git switch` | Environment setup |

---

## Safety Guarantees

- **Never clobbers custom hooks** — if `.git/hooks/pre-commit` already exists and wasn't written by FRX, FRX skips it and tells you exactly what to do.
- **FRX-marker identification** — every FRX hook script contains a unique header. `frx hooks uninstall` only removes files it created.
- **Graceful degradation** — if `frx` isn't in PATH when git triggers the hook, the hook exits `0` (safe) and prints installation instructions.
- **Idempotent installs** — running `frx hooks install` multiple times is safe. It safely replaces its own scripts.

---

## FAQ

### Can I use hooks with a monorepo?

Yes. FRX walks up the directory tree to find `.git/`, so you can run `frx hooks install` from any subdirectory.

### What happens if a step times out?

The step is killed and treated as a failure. If `stop_on_failure: true`, the hook exits 1 and git aborts.

### Can I delegate to an existing FRX pipeline?

Yes — use `run_pipeline: <name>` instead of `steps:`. The pipeline must be defined in the `pipelines:` section of the same config.

```yaml
hooks:
  pre-push:
    enabled: true
    run_pipeline: ci   # runs your "ci" pipeline
```

### How do I temporarily disable a hook without uninstalling?

Set `enabled: false` in config.yaml. The script stays in `.git/hooks/` but FRX skips execution.

### Can I use this for non-Flutter projects?

Absolutely. Every `command` is a plain shell command. Use it with React, Python, Node, or any project that uses git.

---

## See Also

- [🍳 Git Hooks Cookbook](/docs/Cookbook/hooks-cookbook) — Real-world recipes for Flutter, React, Python, and more
- [⚙️ Advanced Pipeline](/docs/configuration#advance-pipeline) — Define reusable named pipelines
- [📖 Configuration](/docs/configuration) — Full config.yaml reference
