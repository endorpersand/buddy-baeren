---
layout: page
title: START HERE!

img: assets/img/baer/greenandblue.jpg
importance: 1
category: start
display_categories: [two]
horizontal: false
---

---

<!-- Dialogue box 1 -->
{% capture d1 %}
  <!-- you can put HTML in here -->
  
  Hello! I'm Beary McBearFace and I love being a bear! Are you a bear?
  <br>
  <br>
 
  {% include audio.liquid path="assets/audio/bear-sample-1.mp3" controls=true %}


{% endcapture %}

{% include baer/dialogue.liquid path="assets/img/baer/sample.png" title="bear-1" text=d1 %}

<!-- choose your own dialogue -->
{% include baer/button_array.liquid key="dialogue-2" names="Yes,No,Eww no" separator="," %}

<div class="d-none" baer-content="dialogue-2">
  <!-- Dialogue box 2 -->
  {% capture d2 %}
    <span baer-content="dialogue-2" baer-option="0">That's okay! Here's a puzzle.</span>
    <span baer-content="dialogue-2" baer-option="1">That sucks! Here's a puzzle.</span>
    <span baer-content="dialogue-2" baer-option="2">Okay, rude. Here's a puzzle.</span>

    <br>
    <br>
  
    {% include audio.liquid path="assets/audio/bear-sample-2.mp3" controls=true %}

  {% endcapture %}
  {% include baer/dialogue.liquid path="assets/img/baer/sample.png" title="bear-1" text=d2 %}

  <div class="centerhorizontal row">
    <h2><b>Puzzle</b></h2>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1c-NVS8Yufc045DR5Pyh072xz5m2k9iA&ehbc=2E312F" width="384" height="288"></iframe>
  <br>

  <h2> What is the marker color on the map? </h2>
    <form baer-key="hotel-palace-puzzle">
      <input placeholder="Enter your answer...">
    </form>
  </div>
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
  <div class="container centerhorizontal">
    <div class="row row-cols-1 row-cols-md-2">
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
</div>
