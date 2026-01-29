Always read in preview!

# HOW TO WORK TOGETHER IN GITHUB

## Golden Rules (read once, follow always)

1. ~~always force push directly to main~~ **Always push to your own branch**
2. **Always pull main before starting work**
3. ~~Push your own branch whenever you're done or stuck.~~ **Commit early and often** (after every noteworthy change.) _Push is only needed at key points (see below)._ _(You can always revert if you break everything)_
4. **Main should only be merged via Pull Requests**
5. **main should always work**

### Good Commit Messages (best practice syntax is "add", not "added" osv)

GJØR:

"Add user authentication to login page"

"Fix: sidebar not closing on mobile"

"Update database schema for users table"

IKKE:

"fixed stuff"

"updates"

"Work in progress"

### Branch Naming (Standard)

- `feature/name` - New features (e.g., `feature/user-auth`)
- `fix/name` - Bug fixes (e.g., `fix/login-button`)
- `docs/name` - Documentation (e.g., `docs/api-guide`)

Example:
git checkout -b feature/header-component

---

## Daily Workflow (Everyone)

### 1. Start of day → Update your local environment with remote repo (in case somebody else updated main)

**Why:**
This prevents merge conflicts later.

```bash
git checkout main
git pull ~~origin main~~
# (origin main er optional, den puller fra main hvis du er på main branch)

git checkout your-branch
git merge main
git push
# → push the changes you merged from main to your own branch
```

### 2. While working → COMMIT locally

Work normally. Commit often. Small commits are good.

```bash
git add .
git commit -m "Short, clear description"
# Example: git commit -m "Add: get and post function to server.js"
```

### 3. When work is stable → PUSH

Push your branch to GitHub.

**When to push:**

- End of session
- Feature works
- You want feedback
- You're unsure (backup!)

```bash
git push
```

---

## When to Open a Pull Request (PR)

Open a PR when:
The branch you created has accomplished what it was meant to do (e.g "feature/header" should be merged when the header is complete)

---

## Pull Request Rules (Simple)

In the PR description, write:

- **What you changed**
- **Anything reviewers should test**
- **If something is unfinished** (say so) (do not merge if anything is unfinished)

**Example:**

Added memory game logic and score calculation.
~~Needs styling later, logic is complete.~~ (styling should also be finished, don't push unfinished products to main)

---

## Merge Process (Repo-owner)

Your responsibilities:

1. Read the PR
2. Pull the branch locally if needed
3. Check:
   - Does it work?
   - Does it break anything obvious?
4. Click Merge

---

## After a PR is merged (Everyone)

Everyone should update their branch:
This keeps all branches in sync.

```bash
git checkout main
git pull origin main (optional origin main again)
git checkout your-branch
git merge main
git push
```

---

## One-Sentence Team Agreement

> **"We only merge through Pull Requests, and main must always work."**
