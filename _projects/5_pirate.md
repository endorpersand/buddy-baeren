---
layout: page
title: Next
img: assets/img/5.jpg
importance: 5
category: five
display_categories: [six]
---

{% capture you-1 %}
  Pirate Bear, I presume?
{% endcapture %}
{% capture pirate-1 %}
  Aye, that be me. And who might ye be, wanderin' into me haven uninvited?
{% endcapture %}
{% capture you-2 %}
  I'm a detective. I've been looking for your friend, Lord Kudamm. Quadriga told me you might know where he is.
{% endcapture %}
{% capture pirate-2 %}
  (quizzically tilts his head) Arr, so ye be the one pokin' around Ku'damm. What business do ye have with Lord Ku'damm?
{% endcapture %}
{% capture you-3 %}
  I need to understand what he's planning. The whispers of a revolution have been growing louder, and I believe it's about to reach a tipping point.
{% endcapture %}
{% capture pirate-3 %}
  (smirking) Aye, the winds of change be blowin'. But what makes ye think I'd betray me friend's trust? What's in it for old Pirate Bear?
{% endcapture %}
{% capture you-4 %}
  Maybe nothing. But if this revolution escalates, it could put everyone in danger, including you. Lord Ku'damm might be going too far. Do you really want to be part of something that could lead to chaos?
{% endcapture %}
{% capture pirate-4 %}
  (pauses, looking thoughtful) Arr, ye be right. The lad's got a fiery spirit, but sometimes the fire burns too hot. He's been actin' strange ever since he got that shiny new iPhone. Talkin' about overthrowin' the system and bringin' down the fat cats of Ku'damm.
{% endcapture %}
{% capture you-5 %}
  Do you know where he is now?
{% endcapture %}
{% capture pirate-5 %}
  (sighs) Aye, last I saw him, he was headin' towards the Gucci Store. Said somethin' about makin' his first move there. I tried to talk sense into him, but his mind's set on this revolution.
{% endcapture %}
{% capture you-6 %}
  Thank you, Pirate Bear. I need to find him before it's too late.
{% endcapture %}
{% capture pirate-6 %}
  (sternly) Listen, matey. If ye be goin' after Lord Ku'damm, ye better watch yer back. But if ye can, talk him down. Remind him what Ku'damm used to be before all the glitter and gold. There's still a chance to steer this ship back on course.
{% endcapture %}
{% capture you-7 %}
  I'll do my best. Thank you, Pirate Bear.
{% endcapture %}
{% capture pirate-7 %}
  (nods) Fair winds and following seas, detective. Ye might need it.
{% endcapture %}

<div class="baer-dialogue-group">
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-1 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-2 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-3 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-3 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-4 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-4 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-5 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-5 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-6 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-6 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-7 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/pirate.png" title="bear-1" text=pirate-7 %}
</div>

{% include baer/next.liquid %}
