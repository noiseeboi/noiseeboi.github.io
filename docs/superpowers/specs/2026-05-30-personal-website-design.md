# Personal Website Design — noiseeboi.github.io

Date: 2026-05-30
Owner: Qingchuan (Tony) Yang

## Goal

A personal academic website for Qingchuan (Tony) Yang, in the style of
deqingfu.github.io. The reference site is built with the **al-folio** Jekyll
theme; this site uses the same theme, populated with Tony's content.

## Stack & Deployment

- **Theme:** al-folio (Jekyll), used directly. Minimal custom code; content lives
  in config, markdown, BibTeX, and structured data files.
- **Host:** GitHub Pages on the existing repo `noiseeboi/noiseeboi.github.io`
  (a user page → served at https://noiseeboi.github.io).
- **Build/deploy:** al-folio's bundled GitHub Actions workflow
  (`.github/workflows/deploy.yml`) builds on push to `main` and publishes to the
  `gh-pages` branch. GitHub Pages source must be set to **GitHub Actions** in repo
  settings (one-time manual step).
- The existing repo contains only a `README.md`; al-folio files are added on top.

## Pages (4 enabled; all other al-folio sections disabled)

| Page          | Source                                   | Notes |
|---------------|------------------------------------------|-------|
| About (home)  | `_pages/about.md`                        | Photo, bio, social links, latest news, selected papers. |
| Publications  | `_bibliography/papers.bib` + `_pages/publications.md` | Thumbnails + links, grouped by year. |
| News          | `_news/*.md` + `_pages/news.md`          | Full feed; preview shown on home. |
| CV            | `assets/json/resume.json` + `_pages/cv.md` | Rendered structured CV + "Download PDF" button. |

**Disabled:** blog/posts, projects, repositories, teaching, photo gallery,
giscus/disqus comments, newsletter.

## Content

### Identity / bio (`_config.yml`, `_pages/about.md`)
- Name: **Qingchuan (Tony) Yang**
- Role: 1st-year Ph.D. student in Computer Science, University of Southern
  California, advised by Prof. Sai Praneeth Karimireddy.
- Prior: M.S. Statistics (UChicago, 2025), B.S. Computer Science with Honors +
  Statistics (UChicago, 2024, Cum Laude).
- Research interests: a one-line sentence **drafted from the CV** (trustworthy AI,
  LLM agents, private synthetic data, calibration/alignment), marked for the owner
  to edit later.

### Links / social (`_config.yml`)
- Email: `qcyang@usc.edu`
- X/Twitter: `qcyang20xx`
- LinkedIn: `qingchuan-yang`
- Google Scholar: `U3SYJIEAAAAJ`
- GitHub: `noiseeboi`

### Publications (`_bibliography/papers.bib`)
Four entries, each with author list (Tony bolded, equal-contribution `*` noted),
venue, year, and links. Equal-contribution and "in submission" status preserved
from the CV.

1. **LLM-as-a-Prophet: Understanding Predictive Intelligence with Prophet Arena**
   — Q. Yang*, S. Mahns*, S. Li*, A. Gu*, J. Wu, H. Xu — **ICLR 2026** —
   arXiv:2510.17638. `selected: true`.
2. **EPSVec: Efficient and Private Synthetic Data Generation via Data Vectors**
   — A. Banayeeanzade*, Q. Yang*, D. Fu, S. Hong, E. Babinsky, A. Samuel, A. Kumar,
   R. Jia, S.P. Karimireddy — **ICML 2026** — arXiv:2602.21218. `selected: true`.
3. **Sampling More, Getting Less: Calibration is the Diversity Bottleneck in LLMs**
   — A. Banayeeanzade*, Q. Yang*, D. Tarsadiya, F. Bahrani, L. Blas, R. Jia,
   M. Razaviyayn, S.P. Karimireddy — **In submission** — arXiv:2605.11128.
4. **Psychological Steering via Calibrated Activation Injections**
   — L. Blas, Q. Yang, R. Jia, E. Ferrara — **In submission** — no link yet.

Publication preview thumbnails: optional. If no image is supplied, al-folio omits
the thumbnail cleanly. Thumbnails can be added later under
`assets/img/publication_preview/`.

### News (`_news/*.md`) — drafted, owner reviews
Approximately four entries derived from the CV:
- Aug 2025 — Started Ph.D. at USC.
- Jan 2026 — Prophet Arena (LLM-as-a-Prophet) accepted to ICLR 2026.
- 2026 — EPSVec accepted to ICML 2026.
- May 2026 — Research intern at Sooth Labs (hosted by Russ Salakhutdinov and
  Yaser Sheikh).
- (Optional) Prophet Arena press coverage (The Atlantic, Yahoo Finance, The Dispatch).

Exact dates and wording finalized during implementation; owner reviews before merge.

### CV (`assets/json/resume.json`, `_pages/cv.md`)
Converted from `qcyang_spr26.yaml` (rendercv source) into JSON Resume format:
- **basics** — name, label, email, location, profiles.
- **education** — USC Ph.D. (advisor Karimireddy), UChicago M.S. Stats
  (advisor Haifeng Xu, Advanced Scholars Program), UChicago B.S. CS Honors +
  Stats (Cum Laude).
- **work** — Graduate Research Assistant (USC), Research Intern (Sooth Labs),
  Undergraduate Research Assistant (UChicago, Prophet Arena), SDE Intern (AWS).
- **publications** — the four papers above.
- **awards** — USC Viterbi Fellowship (2025–2026); UChicago Dean's List.
- **services** — Reviewer, NeurIPS 2026.
- "Download PDF" links `assets/pdf/Qingchuan_Tony_Yang_CV.pdf` (copied from
  `/Users/qcyang/Documents/resume/rendercv_output/Qingchuan_(Tony)_Yang_CV.pdf`).

### Profile photo
Source: `IMG_7825 3.JPEG` (6960×4640) in the working dir. Center-crop to square,
resize to ~800×800, save as `assets/img/prof_pic.jpg`. al-folio renders it rounded
on the about page.

## Theme / appearance
- Light + dark mode toggle in the nav (al-folio default; matches the reference).
- Default al-folio typography and spacing (no custom restyle) to match the
  reference's clean, minimal aesthetic.

## Out of scope
- Custom domain (uses the default `noiseeboi.github.io`).
- Blog, projects, photo gallery, teaching pages.
- Custom theme/restyle beyond al-folio defaults.
- Google Scholar live citation counts (al-folio plugin) — can be enabled later.

## Success criteria
- Site builds locally (`bundle exec jekyll serve`) and via the GitHub Action.
- Home, Publications, News, CV pages render with the content above.
- All social/email/scholar links resolve correctly.
- Publications show correct venues, author order, equal-contribution marks, and
  working arXiv links.
- CV page renders structured data and the PDF download works.
- Light/dark toggle works.
