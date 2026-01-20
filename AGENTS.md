# Repository Guidelines

## Project Structure & Module Organization

This repo is intended to host a static site published to GitHub Pages. Keep the layout simple and content-driven:

- `index.html` for the entry page.
- `assets/` for styles, scripts, images, and fonts.
- `data/` for structured content (JSON/CSV) used to render learning tracks.
- `scripts/` for build or publish helpers if you add them later.

If you introduce a framework, keep framework-specific files grouped (e.g., `src/web/`, `src/components/`) and document the new layout here.

## Build, Test, and Development Commands

No build or test tooling is defined yet. Until a toolchain exists, verify the site locally with a static server:

- `python -m http.server 8000` – serve the site at `http://localhost:8000`.

If you add a build system, list the exact commands here (for example, `npm run dev`, `npm run build`, `npm test`) and briefly describe what each does.

## Coding Style & Naming Conventions

Keep HTML semantic and minimal. Use clear class names and consistent naming patterns:

- Indentation: 2 spaces for HTML, CSS, and JavaScript.
- File naming: `kebab-case` for directories and assets.
- Components or sections: `PascalCase` only if a component system is introduced.

When adding linting or formatting tools, include configs at the repo root and keep them enforced in CI.

## Content Rules & Learning Tracks

The site should present the learning rules and tracks clearly:

- Rule: every learner writes a 100-character daily AI study note, or contributes 5 RMB.
- Learning tracks: keep curated resources in `data/learning-tracks.json` (or a documented alternative).

Update link lists and titles carefully; prefer official course pages and stable references.

## Testing Guidelines

No test framework is defined. If you add tests, state the framework, where tests live, and how to run them. Use descriptive test names (e.g., `renders learning tracks list`).

## Commit & Pull Request Guidelines

There is no commit history yet. Use concise messages and a consistent prefix (e.g., `feat:`, `fix:`, `chore:`). Pull requests should include:

- A brief summary and linked issues.
- Verification steps or screenshots for UI changes.
