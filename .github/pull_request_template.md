## Summary

<!-- What changed and why -->

## Review checklist

- [ ] CI checks pass (compliance, lint, build)
- [ ] Vercel preview looks correct in light mode
- [ ] Vercel preview looks correct in dark mode
- [ ] No visual regressions in existing components

## Token update?

If this PR updates `tokens.json`:
- [ ] Exported from Figma using Variable Visualizer
- [ ] Checked the rendered colors on the preview, not just the JSON diff

`tokens.css` and `theme.css` are generated at build time and are not tracked in
git, so there is nothing to commit alongside `tokens.json`.
