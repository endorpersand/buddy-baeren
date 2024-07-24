---
layout: page
title: Next
img: assets/img/thumbnails/5.png
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
  Chaos, ye say? Arr, chaos be the heart of revolution, and revolutions bring true change. Ye think I fear a bit of turmoil?
{% endcapture %}
{% capture you-5 %}
  I'm not saying you fear it, but there's a difference between necessary change and reckless destruction. Innocent lives could be at stake.
{% endcapture %}
{% capture pirate-5 %}
  And what makes ye think ye understand the stakes better than us? Lord Ku'damm knows what he's doin'.
{% endcapture %}
{% capture you-6 %}
  I've seen unchecked revolutions lead to anarchy and suffering. I'm here to ensure your movement doesn't destroy itself.
{% endcapture %}
{% capture pirate-6 %}
  Ye've got nerve, but ye'll find no traitor in Pirate Bear. Loyalty to Lord Ku'damm is unshakable.
{% endcapture %}
{% capture you-7 %}
  Even if it means the dream you're fighting for is consumed by chaos?
{% endcapture %}
{% capture pirate-7 %}
  A revolution ain't no garden party, detective. We be willin' to take risks for somethin' greater. If ye want to understand him, ask why ye fear change.
{% endcapture %}
{% capture you-8 %}
  It's not fear of change, Pirate Bear. It's fear of losing sight of the goal. If you won't help me find Lord Ku'damm, I'll find him myself!
{% endcapture %}

<div class="baer-dialogue-group">
  <div class="d-flex flex-column align-items-center gap-5">
    <!-- TODO: handle this text -->
    <i>When you arrive, you observe the name of the restaurant this bear stands by. What is it?</i>
    <form baer-key="pirate-unlock">
      <input placeholder="Enter your answer...">
    </form>
  </div>

  <div class="baer-dialogue-group" baer-content="pirate-unlock">
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
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-8 right=true %}
  </div>
</div>

{% include baer/next.liquid baer-content="pirate-unlock" %}
