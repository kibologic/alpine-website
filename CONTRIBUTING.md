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
3. Test your changes locally to ensure no layout regressions across all pages.
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request!

## Development Guidelines

### Framework & Syntax
- **Framework**: All components use **SwissJS** with the `component Name { }` syntax. Do not use `export class X extends SwissComponent`.
- **Helper methods**: All helper functions must be component methods (`_methodName()`), not module-level function declarations.
- **Events**: Use `onclick={() => this._method()}` — not string-interpolated event handlers.
- **Conditionals**: Use `{condition ? <el/> : null}` — not `*if` directives.

### File & Page Structure
- **Pages**: Each URL route has a dedicated page component in `app/pages/`. Each page imports `Navbar`, `Footer`, and `WaitlistModal` directly.
- **Landing sections**: Section components for the landing page live in `app/components/landing/`.
- **Router**: The router lives in `app/main.ui` and maps URL paths to page components via a `Signal`.
- **File length**: Files must not exceed **700 lines**. Plan splits into subdirectory sub-modules at 650 lines.

### Styling
- Stick to the pre-defined CSS global utilities (`.container`, `.grid`, `.btn`, `.section-padding`) and semantic theme tokens (`--brand-text-primary`, `--brand-bg-surface`, etc.).
- Avoid inline hex colors where a CSS variable exists.
- All newly added elements must visibly respect the global `[data-theme="dark"]` overrides.

### Routing
- Internal links must use relative href values (`/features`, `/pricing`, etc.) so the global link interceptor in `main.ui` can intercept them for client-side navigation.
- Do not use anchor hash links (`#section`) for cross-page navigation.

### Dark Mode
- Test all new UI against both light and dark themes before submitting.
- Use `var(--brand-*)` tokens exclusively — never hardcode colors that don't adapt.
