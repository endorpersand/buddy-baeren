---
layout: page
title: Buddy Bear Hunt
permalink: /
description: Welcome to the buddy bear hunt!
nav: true
nav_order: 1
display_categories: [start, reset]
horizontal: false
---

<div class="baer-dialogue-group centerhorizontal">
You are a world famous detective who has just gotten off a big case!
<br>
<br>
With your newfound wealth, you decide to splurge at Ku’damm, a high end shopping street. 
<br>
<br>
After staying at a nearby hotel, you notice something amiss about the bears standing outside… 
<br>
<br>


<h2 style="color:red">IMPORTANT!</h2>
<div style="color: red">
You are allowed to search up websites on google and use google maps to find directions to specific stores.
<br>
However, you may not google the locations of specific bears!
</div>
</div>



<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}

  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 centerhorizontal">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3 centerhorizontal">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}  
{% endif %}

