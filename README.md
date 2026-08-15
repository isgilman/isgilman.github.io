# gilmanlab.com

Source for Ian Gilman's personal/lab site, hosted free on GitHub Pages using the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## How this site works

Every push to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site with Jekyll and publishes it &mdash; there's nothing to build or run
locally to make a change go live. The live site updates within a minute or two of pushing.

Content lives in plain text/YAML files, not code:

- **News** (`_news/`) &mdash; one file per item, shown on the home page. Copy an existing
  file, change the date and text.
- **Publications** (`_bibliography/papers.bib`) &mdash; one BibTeX entry per paper. Add a
  new entry, drop the PDF into `assets/pdf/`, and reference it with `pdf = {filename.pdf}`.
- **Projects** (`_projects/`) &mdash; one file per project tile. Copy an existing file and
  edit the title/description/image; `{% cite key %}` pulls in a formatted citation from
  `papers.bib`.
- **CV** (`_data/cv.yml`) &mdash; structured data for the on-page CV summary. The
  downloadable PDF is `assets/pdf/gilman-cv.pdf`.
- **People** (`_pages/people.md`) and **Courses** (`_pages/courses.md`) &mdash; currently
  simple placeholder pages; edit the text directly.
- **About/contact** (`_pages/about.md`) &mdash; bio, address, profile photo
  (`assets/img/prof_pic.jpg`). Email/GitHub/CV links are in `_data/socials.yml`.

Site-wide settings (name, description, domain) are in `_config.yml`.

## Local preview (optional)

Not required to publish &mdash; only useful if you want to see a change before pushing it.

```bash
bundle install
bundle exec jekyll serve
```

Then open the URL it prints (usually `http://localhost:4000`).
