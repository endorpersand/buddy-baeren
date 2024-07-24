---
layout: page
title: START HERE!

img: assets/img/1.png
importance: 1
category: start
display_categories: [two]
horizontal: false
---

---

<!-- Dialogue -->
{% capture you-1 %}
  Hello, do you know how I can get to Ku'damm?
{% endcapture %}
{% capture hp-1 %}
  Yes, huhu~. Just take a right, past the church and past Levi's, hehe. My friend <b>Pablo</b> is along the way, it would be in your best interest to greet him while you’re here, uhuhu~.
{% endcapture %}
{% capture you-2c %}
  I'll be sure to!,What do you mean by that?
{% endcapture %}
{% capture you-2 %}
  <span baer-content="hp-dialogue-2" baer-option="0">Thanks! I'll be sure to.</span>
  <span baer-content="hp-dialogue-2" baer-option="1">Thanks for the directions, but uh, what you mean by "it would be in my best interest" to meet him?</span>
{% endcapture %}
{% capture hp-2 %}
  Uhuhu~. <span baer-content="hp-dialogue-2" baer-option="1">I shan't tell.</span> Enjoy your shopping spree in Ku'damm, my friend. The harmony here might not last forever. The streets you stroll down now might soon echo with more than just the sound of footsteps and cash registers &#x2728;.
{% endcapture %}

<div class="baer-dialogue-group">
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/hotel-palace.png" title="bear-1" text=hp-1 %}
  {% include baer/button_array.liquid key="hp-dialogue-2" names=you-2c %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true after="hp-dialogue-2" %}
  {% include baer/dialogue.liquid path="assets/img/baer/hotel-palace.png" title="bear-1" text=hp-2 after="hp-dialogue-2" %}
</div>

{% include baer/next.liquid baer-content="hp-dialogue-2" %}
