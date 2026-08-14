# gilmanlab.com

Source for Ian Gilman's personal/lab site, hosted free on GitHub Pages.

## How this site works

Plain HTML files, no build step. Each page (`index.html`, `publications.html`,
`projects.html`, `people.html`, `courses.html`, `about.html`) repeats the same
header/nav and footer &mdash; there's no templating, so what you see in the file
is exactly what appears on the page. One shared stylesheet at
`assets/css/style.css` controls all the visual styling.

## Common edits

- **Add a news item**: edit `index.html`, add a new `<li>` to the top of the
  `<ul class="news-list">` list.
- **Add a publication**: edit `publications.html`, copy one `<li class="pub-entry">...</li>`
  block and edit the text/links. Drop the PDF into `/papers/`.
- **Add a project**: edit `projects.html`, copy one `<div class="project-card">...</div>` block.
- **Add a person/course**: edit `people.html` or `courses.html`, add a `<li>`.
- **Change the nav bar**: the same `<nav>...</nav>` block appears at the top of
  every page &mdash; edit it in each file (there are 6).

## Publishing changes

Any push to the `main` branch of this repo automatically updates the live site
within a minute or two (GitHub Pages rebuilds on every push).
