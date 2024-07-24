---
layout: page
title: Next
img: assets/img/thumbnails/2.png
importance: 2
category: two
display_categories: [three]
---

<!-- Dialogue pt. 1 -->
{% capture pablo-1 %}
<div style="font-size: 3em">
  &#x2049;&#xfe0f;
</div>
{% endcapture %}
{% capture you-1 %}
  Hello there, Pablo, is it? You are looking rather confused. Is there anything I can do to help?
{% endcapture %}
{% capture pablo-2 %}
  urm.... yea.... i was supposed to meet up with my buddy like a while ago, but he hasn't shown up...
  i've been trying to check the time, but all i've got is these weird flashing rectangles over there...
  i don't know what time it is....
{% endcapture %}

<!-- Dialogue pt. 2 -->
{% capture pablo-3 %}
  really?? oh jeez... he's been gone for like 17 hours then! i wonder where he's at D:
{% endcapture %}
{% capture you-2 %}
  What's he look like?
{% endcapture %}
{% capture pablo-4 %}
  well, i don't know to be honest....... he's like bright yellow and loves ku'damm...
  i've been trying to text him, but he hasn't been picking up........
  maybe his phone broke??................... idk..........
{% endcapture %}

{% capture you-3 %}
  You had your phone? Couldn’t you have just checked your phone for the time?
{% endcapture %}
{% capture pablo-5 %}
  ...
{% endcapture %}
{% capture pablo-6 %}
  man….. just help me find my friend…… &#x1f61e;
{% endcapture %}
{% capture you-4 %}
  OK. I hear there’s a Deutsche Telekom nearby. I’ll check there for you!
{% endcapture %}

<div class="baer-dialogue-group">
  <div class="d-flex flex-column align-items-center gap-5">
    <!-- TODO: handle this text -->
    <i>When you arrive, you observe Pablo's sponsor. What is it?</i>
    <form baer-key="pablo-unlock">
      <input placeholder="Enter your answer...">
    </form>
  </div>

  <div class="baer-dialogue-group" baer-content="pablo-unlock">
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-1 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-2 %}
  </div>

  <div class="d-flex flex-column align-items-center gap-5" baer-content="pablo-unlock">
    <i>You feel like you have seen a clock like this before. But, then, what time is it?</i>
    <form baer-key="pablo-clock">
      <input placeholder="(Answer in 24-hour time)">
    </form>

    <div baer-content="pablo-clock" baer-invert>
      <i>
        Note: The clock is prone to breaking. <br>
        If you cannot figure out the answer, <br>
        we have provided a fallback <a href="#" onclick="pabloFallback()">here</a>.
      </i>

      <div id="pablo-fallback" class="d-none">
        <img src="{{"assets/img/baer/fallback-clock.png" | relative_url }}" width=300>
      </div>
    </div>    
  </div>

  <div class="baer-dialogue-group" baer-content="pablo-clock">
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-3 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-4 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-3 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-5 %}
    {% include baer/dialogue.liquid path="assets/img/baer/pablo.png" title="bear-1" text=pablo-6 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-4 right=true %}

    <div class="centerhorizontal">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1CIKzqwWpmIkAEvv_qEVBFNABhhb18u0&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
    
  </div>
</div>

{% include baer/next.liquid baer-content="pablo-clock" %}
