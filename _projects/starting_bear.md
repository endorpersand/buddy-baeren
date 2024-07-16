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

<div class="centerthat row">
  <span style="font-size:2em;"><b>Hello brave traveler, the bears welcome you.</b> </span>

  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1c-NVS8Yufc045DR5Pyh072xz5m2k9iA&ehbc=2E312F" width="384" height="288"></iframe>
<br>


<h2> What is the marker color on the map? </h2>
  <form class="hotel-palace-arrival" baer-tag="hotel_arrive" unlock-content="hotel_arrive_success">
    <input placeholder="Enter your answer...">
  </form>
</div>

<div class="projects d-none centerthat" baer-tag="hotel_arrive" id="hotel_arrive_success" >

<br>
<h3>[Insert audio, dialogue, and puzzle here]</h3>
<br>
<h3>Puzzle: the answer is answer</h3>


<h2> Solve the puzzle.  </h2><br>
  <form class="hotel-palace-pablo" baer-tag="hotel_leave" unlock-content="hotel_leave_success">
    <input placeholder="Enter your answer...">
  </form>
</div>

<!-- pages/projects.md -->
<div class="projects d-none" baer-tag= "hotel_leave"  id="hotel_leave_success">
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