# 📜 DIRECTIVE.md — ALPINE-WEBSITE / KIBOLOGIC AI OPERATING CONTRACT

**Version:** 1.0  
**Applies To:** All AI-assisted development in this repository

---

# 🧭 1. SYSTEM CONTEXT

## Project Identity

* **Project:** Alpine Website (Developer Portal)
* **Type:** Developer-first documentation and reference site for Alpine ERP
* **Runtime:** SwissJS UI (`.ui` / `.uix`) served by Swite dev server

## Stack

* **UI framework:** SwissJS (`@kibologic/core`)
* **Dev server / compiler host:** Swite (`@kibologic/swite`)
* **Package manager:** pnpm

## Port + Registry Rule

Local ports are allocated by the workspace registry:

* **Source of truth:** `kibologic/registry/services.json`
* `alpine-website` → `frontend_port` (development)

Do not randomly change ports. If a port is in use: kill the running process and restart.

---

# 🌳 2. GIT OPERATING CONTRACT (STRICT)

## Branch Model

This repository MUST maintain 3 long-lived branches:

* `main` → production
* `staging` → pre-release validation
* `development` → active development base (branch is named `development`, NOT `develop`)

## Feature Development Rule

All work MUST follow:

```bash
development → feature/<task-name> → development → staging → main
```

## PR + Branch Cleanup Rule (MANDATORY)

After a feature is merged:

1. PR the feature branch into `development`
2. Merge PR
3. Delete the feature branch (remote + local) before starting the next task
4. Log the outcome in this file

---

# ✅ 3. TASK LOG (MANDATORY)

## 2026-04-24

**Task:** Create `development` + `staging` branches on remote (baseline).  
**Status:** Completed.

**Task:** Revamp site styling + replace generic/marketing copy with accurate developer-first Alpine ERP content.  
**Branch:** `feature/alpine-website-revamp`  
**Status:** In progress.

