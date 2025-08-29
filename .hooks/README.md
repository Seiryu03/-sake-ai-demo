# 🛡️ APrise Design Protection Hooks

This directory contains Git hooks that protect the **100-point premium design** from accidental modifications.

## Protected Files

- `public/index.html` - Enterprise landing page (100% English, customization-focused)
- `public/styles-v2.css` - Premium UI/UX framework (white/black/red theme)

## Hook Functions

### `pre-commit`
- **Purpose**: Prevents commits that modify protected design files
- **Trigger**: Before each commit
- **Action**: Blocks commit and shows protection warning
- **Override**: Use `git commit --no-verify` if absolutely necessary

### `post-merge`
- **Purpose**: Validates design integrity after merges
- **Trigger**: After git merge operations
- **Action**: Checks for missing files and structural integrity

## Design Status
- **Current Score**: 100/100 points
- **Background**: Enterprise grid system (white base, black grid, red accents)
- **Landing Page**: Fully customizable AI platform positioning
- **Chat UI**: Quantum-physics inspired animations
- **Responsiveness**: Perfect mobile/tablet optimization

## Installation

The hooks are automatically active in this repository. To install in other repositories:

```bash
cp -r .hooks/* .git/hooks/
chmod +x .git/hooks/*
```

## Emergency Recovery

If protected files are accidentally modified:

```bash
# Restore from last commit
git checkout HEAD -- public/index.html public/styles-v2.css

# Or restore from stash
git stash pop

# Verify design integrity
npm start
# Check http://localhost:3000
```

---
🎨 **Protecting Excellence Since 2025**  
*APrise 100-Point Design Protection System*