---
layout: page
title: Next
img: assets/img/thumbnails/4.png
importance: 4
category: four
display_categories: [five]
---

{% capture you-1 %}
  I'm looking for a missing bear, and my investigation has led me here.
{% endcapture %}
{% capture quad-1 %}
  ...
{% endcapture %}
{% capture you-2 %}
  There were reports of an "I &#x2764;&#xfe0f; Ku'damm" Bear riding with you all today. Is this true?
{% endcapture %}
{% capture quad-2 %}
  ...
{% endcapture %}

{% capture you-3 %}
  <b style="font-size: 1.1rem">HEY! I said i'm looking for—</b>
{% endcapture %}
{% capture quad-3 %}
  <b style="font-size: 2rem">ROOOOOOOOOOOOOOAAAAAAAAAAAAAAAAAAAAAAAAAAAARRRR!</b>
{% endcapture %}
{% capture quad-4 %}
  We do not speak with those we don't trust. Prove to us that you are worthy. Answer us this riddle:
  <div style="margin-left: 2em">
  Amidst the lavish halls where travelers rest,<br>
  In a grand Berlin haven where guests are the best,<br>
  My creator's art is displayed with pride,<br>
  Its title a secret you must now decide.<br>
  Glimpse through the gallery, let curiosity steer,<br>
  What name holds the artwork my maker holds dear?
  </div>
{% endcapture %}

{% capture quad-5 %}
  You, sir, are worthy. How may we assist you?
{% endcapture %}
{% capture you-4 %}
  I'm looking for a bear with "I &#x2764;&#xfe0f; Ku'damm" written on his stomach. I heard he was riding with you earlier today. Do you know where I can find him?
{% endcapture %}
{% capture quad-6 %}
  I &#x2764;&#xfe0f; Ku'damm Bear…? OH! Do you mean <b>Lord Ku'damm</b>? Yeah, we were just helping him get to his friend <b>Pirate Bear</b> after he got his new phone. He told us "iT wIlL hElp SpReAd ThE rEvOlUtIoN," but he also told us technology is the tool of capitalist oppression. I digress...
{% endcapture %}
{% capture you-5 %}
  Woah… What is the revolution you speak of?
{% endcapture %}
{% capture quad-7 %}
  Hasn't <b>Lord Ku'damm</b> told you? He's reached his tipping point with the capitalist-driven state of Ku'damm. After buying his phone today, he totally exploded. He said that today was the day to commence the revolution!
{% endcapture %}
{% capture you-6 %}
  WHAT!? What does he plan on doing?
{% endcapture %}
{% capture quad-8 %}
  Wait a minute… you should definitely know about this revolution by now. Are you not a true follower of <b>Lord Ku'damm</b>?
{% endcapture %}
{% capture you-7c %}
  I'm just a detective.;Definitely...
{% endcapture %}
{% capture you-7 %}
  <span baer-content="quad-dialogue-7" baer-option="0">Listen, I'm just a detective trying to get to the bottom of this case. I don't mean any harm, but this sounds crazy! </span>
<span baer-content="quad-dialogue-7" baer-option="1">Ummm... yeah, yeah, definitely. I love Ku'damm, as they say...</span>
{% endcapture %}
{% capture quad-9 %}
  Okay well, normally we aren't supposed to help the enemies stop <b>Lord Ku'damm</b>, but even we think he is going too far! Sometimes it feels like there's a more peaceful way to handle this disagreement, but we are too scared to suggest anything to His Majesty. If you want to try to stop him yourself, be our guest.
{% endcapture %}
{% capture you-8 %}
  Well, yeah! Where can I find him?
{% endcapture %}
{% capture quad-10 %}
  Like I told you before, he was planning on meeting with his accomplice <b>Pirate Bear</b> by the <b>restaurant down the road</b> to go over the final plan. If you wanna catch him, you better hurry...
{% endcapture %}
{% capture you-9 %}
  Thank you! I must get to the bottom of this!
{% endcapture %}

<div class="baer-dialogue-group">
  <div class="d-flex flex-column align-items-center gap-5">
    <i>You observe the grand name written front and center. What is it?</i>
    <form baer-key="quadriga-unlock">
      <input placeholder="Enter your answer...">
    </form>
  </div>

  <div class="baer-dialogue-group" baer-content="quadriga-unlock">
    <div class="d-flex flex-column align-center gap-5">
      <i>After heading down and through the alley near Arket, you feel a powerful presence.</i>
      <i>5 stoic bears look down upon you, all of which are gold, yet none match the "I &#x2764;&#xfe0f; Ku'damm" profile that Magentinho mentioned.</i>
    </div>
  
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-1 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-2 %}
    
    <div class="d-flex flex-row justify-content-center">
      <i>Dang, these bears are the real deal.</i>
    </div>

    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-3 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-3 %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-4 %}
  </div>

  <div class="d-flex flex-column align-items-center gap-5" baer-content="quadriga-unlock">
    <i>Creator? Who could be his creator? How would I even find information on a "creator"? A portfolio? A website? I guess I'll look around to find some hints.</i>
    <form baer-key="quadriga-riddle">
        <input placeholder="Enter your answer...">
    </form>
  </div>

  <div class="baer-dialogue-group" baer-content="quadriga-riddle">
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-5 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-4 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-6 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-5 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-7 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-6 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-8 %}
    {% include baer/button_array.liquid key="quad-dialogue-7" names=you-7c separator=";" %}
  </div>

  <div class="baer-dialogue-group" baer-content="quad-dialogue-7">
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-7 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-9 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-8 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/quadriga.png" title="bear-1" text=quad-10 %}

    <div class="centerhorizontal gap-5" baer-content="quad-dialogue-7">
      <h3>New Task: Find Pirate Bear</h3>
      <div>You may move on upon reaching the next location.</div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=10K2ey0skiIeybq425PCJ33v26jQQuRA&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  </div>
</div>

{% include baer/next.liquid baer-content="quad-dialogue-7" %}
