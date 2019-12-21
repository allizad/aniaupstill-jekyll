---
layout: page
title: Transhumance
header: Transhumance
permalink: /transhumance
section: transhumance
description: |
  TODO: SEO-friendly description
cta:
  text: Buy Tickets
  url: /work.html
---

Transhumance is Ania’s solo genderqueer clown show, going on an international tour in 2020.

Come dive into the absurd as we follow one clown’s magical journey across the landscape of gender in search of a place to call home. Join NYC-based circus artist Ania Upstill in this playful, heartfelt exploration of gender as they dare to imagine a world in-between. What does it mean to exist between two locations? To travel in between? To find your place in the middle? To embrace a joyful revolution? Come laugh at a clown’s playful exploration of what it means to be a trans human.

## Tour Dates 2020

<table>
  <tbody>
    {% for item in site.data.transhumance.tour_dates %}
      <tr>
        <td>{{ item.festival }}</td>
        <td>{{ item.location }}</td>
        <td>{{ item.dates }}</td>
        <td><a href="{{ item.link.url }}">{{ item.link.text }}</a></td>
      </tr>
    {% endfor %}
  </tbody>
</table>

> As we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our fear, our presence automatically liberates others

—  Marianne Williamson

![transhumance](/assets/img/transhumance.png)
