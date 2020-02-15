---
layout: page
title: Transhumance
header: Transhumance
permalink: /transhumance
section: transhumance
description: |
  TODO: SEO-friendly description
---

## Praise for Transhumance

> Transhumance manages to be both a deeply personal story of self-identification and a universal experience of gender paradigms. We can all find something to relate to in the clown’s journey, and the play’s simplicity allows us to fill in the blanks with our own specific experiences, while the clown’s innocent and joyful nature will make any audience member feel welcome.

— [Theatre Scenes Auckland](http://www.theatrescenes.co.nz/review-transhumance-auckland-pride/)

## About the show

_Transhumance_ is Ania’s solo genderqueer clown show, going on an international tour in 2020. The show was born through the Undiscovered Countries Blast Off Incubator program in Spring 2019, after Ania realized that all of their clowning actually concerned gender. Specifically, the experience of being genderqueer.

_Transhumance_ follows one clown’s magical journey across the landscape of gender in search of a place to call home. The show asks,  What does it mean to exist between two locations? To travel in between? To find your place in the middle? To embrace a joyful revolution? The audience are invited to come laugh at a clown’s playful exploration of what it means to be a trans human.

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
