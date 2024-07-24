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
  <div class="d-flex flex-column gap-5">
    <span>You are a world famous detective who has just gotten off a big case!</span>
    <span>With your newfound wealth, you decide to splurge at Ku’damm, one of the highest end shopping streets in Berlin.</span>
    <span>You're not exactly sure where the street is, but there's a bear outside you can ask for directions!</span>
  </div>


  <div class="d-flex flex-column gap-5">
    <h2 style="color: red">IMPORTANT!</h2>
    <div style="color: red">
      You are allowed to use Google Maps to find directions to specific stores, but not the locations of bears.
    </div>
    <div style="color: red">
      Best of luck, detective!
    </div>
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

