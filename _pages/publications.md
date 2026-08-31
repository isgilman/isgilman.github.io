---
layout: page
permalink: /publications/
title: publications
description: peer-reviewed articles and dissertations, in reverse chronological order.
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

{% if site.data.socials.scholar_userid %}
<p class="mt-2 mb-4">
  <a
    href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"
    target="_blank"
    rel="noopener noreferrer"
    class="btn btn-sm btn-outline-primary"
  >
    <i class="ai ai-google-scholar"></i>
    View full profile on Google Scholar
  </a>
</p>
{% endif %}

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
