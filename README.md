# noiseeboi.github.io

Personal academic website of Qingchuan (Tony) Yang — https://noiseeboi.github.io

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Content

- **Bio / homepage:** `_pages/about.md`, photo at `assets/img/prof_pic.jpg`
- **Publications:** `_bibliography/papers.bib`
- **News:** `_news/*.md`
- **CV:** `_data/cv.yml` (rendered) and `assets/pdf/Qingchuan_Tony_Yang_CV.pdf` (download)
- **Site config / links:** `_config.yml`, `_data/socials.yml`

## Local development

```bash
docker compose up        # serves at http://localhost:8080
# or, with a local Ruby 3.x toolchain:
bundle install && bundle exec jekyll serve
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to the `gh-pages` branch. One-time setup: Settings → Pages →
**Deploy from a branch** → `gh-pages` / `(root)`.
