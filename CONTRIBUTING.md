# Contributing to the Alpine Website

Thank you for your interest in improving Alpine! We welcome contributions to our website and documentation from the community.

## Ways to Contribute

### 1. Reporting Bugs
- If you notice a visual glitch, a broken link, or a typo on the site, please [open an issue](https://github.com/kibologic/alpine-website/issues).
- Provide device details (Desktop vs Mobile) and browser information when possible.

### 2. Suggesting Enhancements
- Have ideas for how we can improve the site or explain Alpine's features better? Head over to our [Discussions board](https://github.com/kibologic/alpine-website/discussions) and share your thoughts!

### 3. Submitting Pull Requests
If you are submitting a direct code change:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Test your changes locally to ensure no layout regressions.
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request!

## Development Guidelines

- **Framework**: Ensure all logic conforms to `SwissJS` components.
- **Styling**: Stick to the pre-defined CSS global grids (e.g. `.grid-3-to-1`) and semantic theme tokens (`--brand-text-primary`, `--brand-bg-surface`). Avoid inline hex colors or non-responsive definitions where possible.
- **Dark Mode**: All newly added elements must be tested to ensure they visibly respect the global `[data-theme="dark"]` overrides.
