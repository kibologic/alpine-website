# Alpine Website

This repository contains the source code for the public marketing website of [Alpine ERP](https://alpine.co), designed and developed by [Kibologic](https://kibologic.com).

Alpine is the operating system for modern retail, unifying Point of Sale, inventory, and team management into a single platform built for high reliability.

## Architecture

This frontend is built entirely using **SwissJS**, a modern, lightweight, template-first component framework. By open-sourcing this website, we hope to serve as an example of how to build rapid, beautiful interfaces utilizing the SwissJS component architecture.

### Pages

The site uses a client-side router (`app/main.ui`) that renders different page components based on the current URL path:

| Path | Component |
|------|-----------|
| `/` | `LandingPage` |
| `/features` | `FeaturesPage` |
| `/pricing` | `PricingPage` |
| `/integrations` | `IntegrationsPage` |
| `/about` | `AboutPage` |
| `/changelog` | `ChangelogPage` |

Page components live in `app/pages/`. Shared components (Navbar, Footer, WaitlistModal) are in `app/components/`. Landing-specific sections are in `app/components/landing/`.

### Component pattern

All components follow the `component Name { }` syntax with `_methodName()` helpers as component methods.

## Getting Started

To run the site locally for development or to preview changes:

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the `swite` dev server:
   ```bash
   pnpm dev
   ```
4. Build the project for production:
   ```bash
   pnpm start
   ```

## Contributing & Community

While the core team actively maintains the marketing site, we welcome community feedback!
- **Found a typo or a broken layout?** Please open a [Bug Report](https://github.com/kibologic/alpine-website/issues/new).
- **Have ideas for the product or the site?** Start a thread in our [Discussions](https://github.com/kibologic/alpine-website/discussions).

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full contribution guidelines.

## License & Usage

The underlying source code, HTML structures, and CSS utilities are available under the **MIT License**.

> **Important**: All Kibologic and Alpine ERP logos, brand names, visual assets, and verbatim marketing copy remain copyrighted and proprietary. If you use this repository as a template for your own site, you **must completely remove and replace our brand assets**. See the `LICENSE` file for full details.
