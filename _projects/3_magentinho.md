---
layout: page
title: Next
img: assets/img/3.jpg
importance: 3
category: three
display_categories: [four]
---
{% capture mg-1 %}
  Did you know that here at Telekom, you can get 4 lines unlimited with international calling included for JUST €30/line?????
  As the official partner of the UEFA Euro 2024, we're dedicated to keeping all the stadiums in top technical shape!
{% endcapture %}
{% capture mg-2 %}
  Ugh, I hate my job…
{% endcapture %}
{% capture you-1c %}
  Such great prices!;Kinda expensive, no?
{% endcapture %}
{% capture you-1 %}
  <span baer-content="mg-dialogue-1" baer-option="0">Wow, those are such great prices!</span>
  <span baer-content="mg-dialogue-1" baer-option="1">Isn't that a bit... expensive, though?</span>
{% endcapture %}
{% capture mg-3 %}
  <span baer-content="mg-dialogue-1" baer-option="0">I know right? Y'know, some</span>
  <span baer-content="mg-dialogue-1" baer-option="1">Hey, don't blame me! I don't get to choose the prices! Some</span>
  customers just don't get it! Not too long ago,
  there was this yellow bear that yelled at me after walking out of the store with a new phone!
  I can't believe the nerve of this bear country…
{% endcapture %}
{% capture you-2 %}
  Yellow bear? Did you see where he went?
{% endcapture %}
{% capture mg-4 %}
  I don't know! He left on some sort of chariot before I could give him a piece of my mind.
  Can you believe the nerve of this guy? He had "I &#x2764;&#xfe0f; Ku'damm" written on him!
  If you love Ku'damm, why don't you treat its bears with respect? Sheesh.
  Anyway, why do you ask?
{% endcapture %}
{% capture you-3 %}
  I'm a detective investigating a case of a missing yellow bear. It seems like you have at least seen him?
{% endcapture %}
{% capture mg-5 %}
  ..........................
{% endcapture %}
{% capture you-4 %}
  Uh, hello?
{% endcapture %}
{% capture mg-6 %}
  Well, unfortunately, I don't have any other information, haha!
{% endcapture %}
{% capture you-5 %}
  Are you sure?
{% endcapture %}
{% capture mg-7 %}
  Positive!
{% endcapture %}
{% capture you-6 %}
  Any information would be great for the case!
{% endcapture %}
{% capture mg-8 %}
  Listen, I can't say too much on the job, my boss will hear.
  <br>
  <i>*scribbles*</i>
{% endcapture %}
{% capture you-7c %}
  What do you mean?;I can talk to them!
{% endcapture %}
{% capture you-7 %}
  <span baer-content="mg-dialogue-7" baer-option="0">What do you mean by that? Your boss will hear what?</span>
  <span baer-content="mg-dialogue-7" baer-option="1">That's fine, I can ask your boss as well!</span>
{% endcapture %}
{% capture mg-9 %}
  Here. Take this packet and go.
{% endcapture %}
{% capture you-8 %}
  If you have any other information at all, that would be gre-
{% endcapture %}
{% capture mg-10 %}
  DID YOU KNOW THAT HERE AT TELEKOM WE OFFER PHISHING PROTECTION!
{% endcapture %}

<div class="baer-dialogue-group">
  <div class="d-flex flex-column align-items-center gap-5">
    <i>You don't see Pablo, but you see another bear in front of the store! I wonder who his artist (Künstler) is.</i>
    <form baer-key="magentinho-unlock">
      <input placeholder="Enter your answer...">
    </form>
  </div>

  <div class="baer-dialogue-group" baer-content="magentinho-unlock">
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-1 %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-2 %}
    {% include baer/button_array.liquid key="mg-dialogue-1" names=you-1c separator=";" %}
  </div>

  <div class="baer-dialogue-group" baer-content="mg-dialogue-1">
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-1 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-3 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-2 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-4 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-3 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-5 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-4 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-6 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-5 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-7 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-6 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-8 %}
    {% include baer/button_array.liquid key="mg-dialogue-7" names=you-7c separator=";" %}
  </div>

  <div class="baer-dialogue-group" baer-content="mg-dialogue-7">
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-7 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-9 %}
    {% include baer/dialogue.liquid path="assets/img/baer/detective.png" title="you" text=you-8 right=true %}
    {% include baer/dialogue.liquid path="assets/img/baer/magentinho.png" title="bear-1" text=mg-10 %}
  </div>

  <div baer-content="mg-dialogue-7">
    <i>You suspect you will not be able to get more out of him. It's time to look at the <b>Deutsche Telekom</b> packet that he gave you. Maybe, it will tell you where to go next.</i>
  </div>

  <div class="centerhorizontal" baer-content="mg-dialogue-7">
    <h3>New Task: Decrypt Magentinho's message!</h3>
    <div>You may move on upon reaching the next location.</div>
  </div>
</div>

{% include baer/next.liquid baer-content="mg-dialogue-7" %}
