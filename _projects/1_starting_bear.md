---
layout: page
title: START HERE!

img: assets/img/12.jpg
importance: 1
category: start
display_categories: [two]
horizontal: false
---

---

<div class="d-flex flex-row" style="gap: 10px">
  {% include figure.liquid path="assets/img/baer/sample.png" title="bear-1" class="img-fluid rounded" width="100vw" %}
  <div>Hello! I'm Beary McBearFace and I love being a bear! Are you a bear?</div>
</div>

<div class="d-flex flex-row justify-content-center" style="gap: 10px">
  <button>Yes</button>
  <button>No</button>
  <button>Eww no</button>
</div>

<div class="d-flex flex-row" style="gap: 10px">
  {% include figure.liquid path="assets/img/baer/sample.png" title="bear-1" class="img-fluid rounded" width="100vw" %}
  <div>Well, fine. Here's a puzzle.</div>
</div>

<br>
<div class="centerthat row">
  <h2><b>Puzzle</b></h2>
  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1c-NVS8Yufc045DR5Pyh072xz5m2k9iA&ehbc=2E312F" width="384" height="288"></iframe>
<br>

<h2> What is the marker color on the map? </h2>
  <form baer-key="hotel-palace-puzzle">
    <input placeholder="Enter your answer...">
  </form>
</div>

<!-- pages/projects.md -->
<div class="projects d-none" baer-content="hotel-palace-puzzle">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
 <!-- <a id="{{ category }}" href=".#{{ category }}">-->
  {% if project.importance == 1 %}
      <h2 class="category">start</h2>
  {% else %}
    <h2 class="category">next</h2>
  {% endif %}
 <!-- </a>-->
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
  
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container centerthat">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3 centerthat">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}
{% endif %}
</div>
