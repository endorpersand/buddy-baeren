---
layout: page
title: Next
img: assets/img/6.jpg
category: six
---

{% capture kudamm-1 %}
  We've endured enough! Today, we reclaim Ku'damm from the clutches of greed and corruption! Together, we will rise and bring justice to our land!
{% endcapture %}
{% capture you-1 %}
  (stepping forward) Lord Ku'damm! We need to talk.
{% endcapture %}
{% capture kudamm-2 %}
  (turning sharply) And you are?
{% endcapture %}
{% capture you-2 %}
  Detective Longbottom. I want to stop you from making a mistake. This path you're on will only lead to destruction and pain. There's a better way to fight this battle.
{% endcapture %}
{% capture kudamm-3 %}
  (angrily) A better way? The only language these capitalist tyrants understand is force! We've tried talking, and it's gotten us nowhere.
{% endcapture %}
{% capture you-3 %}
  (pleading) But this isn't the answer. Think of what you're risking. The lives that will be affected. kudamm Bear told me about your plans. He's worried about you.
{% endcapture %}
{% capture kudamm-4 %}
  (surprised) kudamm Bear? He… spoke to you?
{% endcapture %}
{% capture you-4 %}
  Yes. He's concerned that you're losing sight of what truly matters. He believes in your cause but not in your methods. There's still time to change course.
{% endcapture %}
{% capture kudamm-5 %}
  (conflicted) I… I don't know. The anger, the frustration… it's hard to see clearly through it all.
{% endcapture %}
{% capture you-5 %}
  (softly) Take a step back. Remember why you started this. Not to destroy, but to build a better future. You have the power to inspire, to lead a peaceful change. Don't let the fire consume you.
{% endcapture %}
{% capture kudamm-6 %}
  (sighing deeply) Perhaps… Perhaps you're right. This rage has blinded me. I don't want to be the cause of more suffering.
{% endcapture %}
{% capture you-6 %}
  (reassuringly) We can work together to find a solution. One that doesn't involve violence. The people of Ku'damm need hope, not fear.
{% endcapture %}
{% capture kudamm-7 %}
  (nodding slowly) Alright, detective. I'll call off the revolution. But there's something I should tell you. I've already starting a ticking bomb in that Gucci store right there…
{% endcapture %}
{% capture you-7 %}
  WHAT?
{% endcapture %}
{% capture kudamm-8 %}
  Annnndddd, I don't know the disarm code.
{% endcapture %}
{% capture you-8 %}
  WHAAAATTTT??? Then who does!?
{% endcapture %}
{% capture kudamm-9 %}
  Actually, my buddy Pablo made it for me, but it is set to detonate in 5 minutes. It was supposed to be the grand finale for my speech!
{% endcapture %}
{% capture you-9 %}
  Pablo has been looking for you for 16 hours! Nevermind that… there's no time to run back to him. Think. THINK! What would Pablo have made of the password…
{% endcapture %}



<div class="d-flex flex-column align-items-center gap-5">
  <!-- TODO: handle this text -->
  <i>When you arrive, you observe the number on the top-right corner of Lord Ku'damm's plaque. What is it?</i>
  <form baer-key="kudamm-unlock">
    <input placeholder="Enter your answer...">
  </form>
</div>

<div class="baer-dialogue-group" baer-content="kudamm-unlock">
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-1 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-2 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-3 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-3 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-4 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-4 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-5 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-5 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-6 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-6 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-7 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-7 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-8 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-8 %}
  {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-9 right=true %}
  {% include baer/dialogue.liquid path="assets/img/baer/kudamm.png" title="bear-1" text=kudamm-9 %}
</div>

<div baer-content="kudamm-unlock">
    {% include baer/countdown_timer.liquid %}
</div>
