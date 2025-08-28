# Git Commands Comprehensive Reference

## Repository Setup and Configuration

### Initial Setup
```bash
# Configure user information globally
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Configure editor
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "vim"          # Vim

# Configure default branch name
git config --global init.defaultBranch main

# View all configurations
git config --list
git config --global --list
git config --local --list

# View specific configuration
git config user.name
git config user.email
```

### Repository Initialization
```bash
# Initialize new repository
git init
git init project-name
git init --bare  # Create bare repository (for servers)

# Clone existing repository
git clone https://github.com/user/repo.git
git clone https://github.com/user/repo.git local-folder-name
git clone --depth 1 https://github.com/user/repo.git  # Shallow clone
git clone --branch branch-name https://github.com/user/repo.git  # Clone specific branch
```

## Basic File Operations

### Staging and Committing
```bash
# Check repository status
git status
git status -s  # Short format
git status --porcelain  # Machine-readable format

# Add files to staging area
git add filename.txt
git add .                    # Add all files in current directory
git add -A                   # Add all files including deleted
git add *.js                 # Add all JavaScript files
git add src/                 # Add entire directory
git add -p                   # Interactive staging (patch mode)

# Remove files from staging area
git reset filename.txt       # Unstage file
git reset                    # Unstage all files
git restore --staged filename.txt  # Modern way to unstage

# Commit changes
git commit -m "Commit message"
git commit -am "Add and commit"  # Add modified files and commit
git commit --amend              # Modify last commit
git commit --amend -m "New message"  # Change last commit message
git commit --no-edit --amend    # Amend without changing message
```

### File Management
```bash
# Remove files
git rm filename.txt          # Remove file from working directory and staging
git rm --cached filename.txt # Remove from staging but keep in working directory
git rm -r directory/         # Remove directory recursively

# Move/rename files
git mv oldname.txt newname.txt
git mv file.txt directory/

# Restore files
git restore filename.txt     # Restore file from last commit
git restore --staged file.txt  # Unstage file
git restore --source=HEAD~1 file.txt  # Restore from specific commit
```

## Viewing History and Changes

### Commit History
```bash
# View commit history
git log
git log --oneline           # Compact view
git log --graph             # Show branch graph
git log --graph --oneline --all  # Graph with all branches
git log -n 5                # Show last 5 commits
git log --since="2 weeks ago"
git log --until="2023-12-31"
git log --author="John Doe"
git log --grep="fix bug"    # Search commit messages

# Advanced log formatting
git log --pretty=format:"%h - %an, %ar : %s"
git log --stat              # Show file changes statistics
git log --patch             # Show actual changes
git log --follow filename.txt  # Follow file history through renames
```

### Viewing Changes
```bash
# Show differences
git diff                    # Working directory vs staging area
git diff --staged           # Staging area vs last commit
git diff HEAD               # Working directory vs last commit
git diff commit1 commit2    # Between two commits
git diff branch1..branch2   # Between two branches
git diff --name-only        # Show only file names
git diff --stat             # Show statistics

# Show specific commit
git show commit-hash
git show HEAD~1             # Show previous commit
git show --stat commit-hash # Show commit with stats
```

### Blame and Annotation
```bash
# Show line-by-line history
git blame filename.txt
git blame -L 10,20 filename.txt  # Lines 10-20 only
git blame -w filename.txt        # Ignore whitespace changes

# Show file at specific commit
git show commit-hash:filename.txt
```

## Branch Management

### Creating and Switching Branches
```bash
# List branches
git branch                  # Local branches
git branch -r               # Remote branches
git branch -a               # All branches
git branch -v               # Show last commit on each branch

# Create branches
git branch new-branch       # Create branch
git checkout -b new-branch  # Create and switch to branch
git switch -c new-branch    # Modern way to create and switch

# Switch branches
git checkout branch-name
git switch branch-name      # Modern way to switch

# Delete branches
git branch -d branch-name   # Delete merged branch
git branch -D branch-name   # Force delete branch
git push origin --delete branch-name  # Delete remote branch
```

### Branch Information
```bash
# Show current branch
git branch --show-current
git rev-parse --abbrev-ref HEAD

# Show branch relationships
git show-branch
git log --graph --oneline --all

# List branches with last commit
git for-each-ref --format='%(refname:short) %(committerdate) %(authorname)' --sort=committerdate refs/heads/
```

## Remote Repository Operations

### Remote Management
```bash
# List remotes
git remote
git remote -v               # Show URLs
git remote show origin      # Detailed remote info

# Add/remove remotes
git remote add origin https://github.com/user/repo.git
git remote add upstream https://github.com/original/repo.git
git remote remove origin
git remote rename origin new-name

# Change remote URL
git remote set-url origin https://github.com/user/new-repo.git
```

### Fetching and Pulling
```bash
# Fetch changes
git fetch                   # Fetch from default remote
git fetch origin            # Fetch from specific remote
git fetch --all             # Fetch from all remotes
git fetch --prune           # Remove local references to deleted remote branches

# Pull changes
git pull                    # Fetch and merge
git pull origin main        # Pull specific branch
git pull --rebase           # Fetch and rebase instead of merge
git pull --no-commit        # Pull without auto-commit
git pull --ff-only          # Only fast-forward pulls
```

### Pushing Changes
```bash
# Push changes
git push                    # Push current branch to default remote
git push origin main        # Push to specific branch
git push -u origin feature-branch  # Push and set upstream
git push --all              # Push all branches
git push --tags             # Push all tags
git push --force            # Force push (dangerous!)
git push --force-with-lease # Safer force push
```

## Merging and Rebasing

### Merging
```bash
# Merge branches
git merge feature-branch    # Merge into current branch
git merge --no-ff feature-branch  # Force merge commit
git merge --squash feature-branch # Squash commits before merge
git merge --abort           # Abort merge in progress

# Merge strategies
git merge -X ours feature-branch    # Prefer current branch in conflicts
git merge -X theirs feature-branch  # Prefer merging branch in conflicts
```

### Rebasing
```bash
# Rebase current branch
git rebase main             # Rebase current branch onto main
git rebase --interactive HEAD~3  # Interactive rebase last 3 commits
git rebase --abort          # Abort rebase
git rebase --continue       # Continue after resolving conflicts
git rebase --skip           # Skip current commit during rebase

# Interactive rebase commands (in editor):
# pick = use commit
# reword = use commit, but edit message
# edit = use commit, but stop for amending
# squash = use commit, but meld into previous commit
# fixup = like squash, but discard commit message
# drop = remove commit
```

### Conflict Resolution
```bash
# During merge/rebase conflicts
git status                  # See conflicted files
git add resolved-file.txt   # Mark conflict as resolved
git commit                  # Complete merge (if merging)
git rebase --continue       # Continue rebase

# Merge tools
git mergetool               # Open configured merge tool
git config --global merge.tool vimdiff  # Set merge tool
```

## Stashing

### Basic Stashing
```bash
# Stash changes
git stash                   # Stash working directory changes
git stash -u                # Include untracked files
git stash -a                # Include untracked and ignored files
git stash push -m "Work in progress"  # Stash with message

# Apply stashes
git stash pop               # Apply most recent stash and remove it
git stash apply             # Apply stash but keep it
git stash apply stash@{2}   # Apply specific stash

# Manage stashes
git stash list              # List all stashes
git stash show              # Show stash contents
git stash show -p           # Show stash diff
git stash drop stash@{1}    # Delete specific stash
git stash clear             # Delete all stashes
```

### Advanced Stashing
```bash
# Partial stashing
git stash -p                # Interactive stashing
git stash push filename.txt # Stash specific file
git stash push -m "message" -- file1 file2  # Stash specific files with message

# Branch from stash
git stash branch new-branch-name  # Create branch from stash
```

## Tags

### Creating and Managing Tags
```bash
# Create tags
git tag v1.0.0              # Lightweight tag
git tag -a v1.0.0 -m "Version 1.0.0"  # Annotated tag
git tag -a v1.0.0 commit-hash  # Tag specific commit

# List tags
git tag                     # List all tags
git tag -l "v1.*"          # List tags matching pattern
git show v1.0.0            # Show tag information

# Push tags
git push origin v1.0.0     # Push specific tag
git push origin --tags     # Push all tags
git push --follow-tags     # Push commits and associated tags

# Delete tags
git tag -d v1.0.0          # Delete local tag
git push origin --delete v1.0.0  # Delete remote tag
```

## Advanced Operations

### Cherry-picking
```bash
# Cherry-pick commits
git cherry-pick commit-hash
git cherry-pick commit1 commit2 commit3  # Multiple commits
git cherry-pick --no-commit commit-hash  # Cherry-pick without committing
git cherry-pick --abort     # Abort cherry-pick
git cherry-pick --continue  # Continue after resolving conflicts
```

### Reset and Revert
```bash
# Reset (moves HEAD and branch pointer)
git reset --soft HEAD~1     # Keep changes staged
git reset --mixed HEAD~1    # Keep changes unstaged (default)
git reset --hard HEAD~1     # Discard all changes

# Reset to specific commit
git reset --hard commit-hash

# Revert (creates new commit that undoes changes)
git revert HEAD             # Revert last commit
git revert commit-hash      # Revert specific commit
git revert --no-commit HEAD~3..HEAD  # Revert range without committing
```

### Reflog
```bash
# View reflog (local history)
git reflog                  # Show all ref updates
git reflog show HEAD        # Show HEAD history
git reflog show branch-name # Show branch history

# Recover lost commits
git reset --hard HEAD@{2}   # Reset to previous state
git cherry-pick commit-hash # Recover specific commit
```

### Bisect (Binary Search for Bugs)
```bash
# Start bisect session
git bisect start
git bisect bad              # Mark current commit as bad
git bisect good v1.0.0      # Mark known good commit

# During bisect
git bisect good             # Mark current commit as good
git bisect bad              # Mark current commit as bad
git bisect skip             # Skip current commit

# End bisect
git bisect reset            # Return to original state
git bisect log              # Show bisect log
```

### Worktrees
```bash
# Manage multiple working trees
git worktree add ../feature-branch feature-branch
git worktree add --detach ../temp-work commit-hash
git worktree list           # List all worktrees
git worktree remove ../feature-branch
git worktree prune          # Clean up worktree references
```

## Submodules

### Managing Submodules
```bash
# Add submodule
git submodule add https://github.com/user/library.git lib/library

# Initialize submodules
git submodule init
git submodule update
git submodule update --init --recursive  # Initialize and update recursively

# Clone repository with submodules
git clone --recursive https://github.com/user/repo.git

# Update submodules
git submodule update --remote    # Update to latest remote commit
git submodule foreach git pull origin main  # Pull latest in each submodule

# Remove submodule
git submodule deinit -f lib/library
git rm lib/library
rm -rf .git/modules/lib/library
```

## Hooks and Automation

### Git Hooks
```bash
# Hook locations (in .git/hooks/)
# pre-commit, post-commit, pre-push, post-receive, etc.

# Make hook executable
chmod +x .git/hooks/pre-commit

# Example pre-commit hook (#!/bin/bash)
#!/bin/bash
# Run tests before commit
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi
```

### Aliases
```bash
# Create aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Advanced aliases
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## Troubleshooting and Recovery

### Common Issues
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Fix commit message
git commit --amend -m "Corrected message"

# Remove file from last commit
git reset --soft HEAD~1
git reset HEAD filename.txt
git commit -c ORIG_HEAD

# Recover deleted branch
git reflog
git checkout -b recovered-branch commit-hash
```

### Cleaning Repository
```bash
# Clean untracked files
git clean -n                # Dry run (show what would be deleted)
git clean -f                # Remove untracked files
git clean -fd               # Remove untracked files and directories
git clean -fX               # Remove only ignored files
git clean -fx               # Remove untracked and ignored files

# Garbage collection
git gc                      # Cleanup and optimize repository
git gc --aggressive         # More thorough cleanup
```

### Repository Maintenance
```bash
# Check repository integrity
git fsck                    # Check for corruption
git fsck --full             # More thorough check

# Optimize repository
git repack -ad              # Repack objects
git prune                   # Remove unreachable objects

# Repository statistics
git count-objects -v        # Show object count and size
```

## Advanced Workflows

### Git Flow
```bash
# Initialize git flow
git flow init

# Feature branches
git flow feature start feature-name
git flow feature finish feature-name
git flow feature publish feature-name

# Release branches
git flow release start v1.2.0
git flow release finish v1.2.0

# Hotfix branches
git flow hotfix start hotfix-name
git flow hotfix finish hotfix-name
```

### GitHub Flow
```bash
# Simple workflow
git checkout -b feature-branch
# Make changes and commits
git push -u origin feature-branch
# Create pull request on GitHub
# After review and approval, merge via GitHub
git checkout main
git pull origin main
git branch -d feature-branch
```

## Tips and Best Practices

### Commit Best Practices
```bash
# Good commit message format
git commit -m "type(scope): short description

Longer explanation if needed

Fixes #123"

# Common types: feat, fix, docs, style, refactor, test, chore
```

### Useful Commands
```bash
# Show files in commit
git show --name-only commit-hash

# Count commits by author
git shortlog -sn

# Find when line was added
git log -S "search term" --source --all

# Show branch containing commit
git branch --contains commit-hash

# Show commits not yet pushed
git log @{u}..

# Show remote tracking branch
git branch -vv
```

### Configuration Tips
```bash
# Useful global configurations
git config --global push.default simple
git config --global pull.rebase true
git config --global rebase.autoStash true
git config --global rerere.enabled true  # Remember conflict resolutions
git config --global core.autocrlf input   # Line ending handling (Unix/Mac)
git config --global core.autocrlf true    # Line ending handling (Windows)
```

This comprehensive Git reference covers everything from basic operations to advanced workflows and troubleshooting. Use it as both a learning resource and a quick reference guide!