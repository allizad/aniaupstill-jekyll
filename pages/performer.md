---
layout: page
title: Performer
header: Performer
permalink: /performer
section: performer
description: |
  TODO: SEO-friendly description
cta:
  text: Download Performance CV
  url: /assets/CV.pdf
  download: true
---

Ania is a theatre, circus and cabaret performer. They specialize in clown, devised work and Shakespeare. They have performed at venues around New York City, and are taking their solo show, Transhumance, on tour internationally in 2020.

> Ania Upstill’s tragicomic Mercutio, whose “Queen Mab” monologue was as haunting as the rest of their performance was mercurial, was especially fun to watch.

— [Into More](https://www.intomore.com/culture/rj-is-an-all-women-and-genderqueer-feminist-retelling-of-romeo-juliet)


## Theatre

<table>
  <tbody>
    {% for item in site.data.performer.theatre %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{% if item.company %}{{ item.company }}{% else %}&nbsp;{% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

## Clown & Cabaret

<table>
  <tbody>
    {% for item in site.data.performer.clown_cab %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{% if item.company %}{{ item.company }}{% else %}&nbsp;{% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<small> \*New York Premieres</small>

## Production Roles

<table>
  <tbody>
    {% for item in site.data.performer.production %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{% if item.company %}{{ item.company }}{% else %}&nbsp;{% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<small>** Nominee, Most Promising Director, Wellington Theatre Awards 2015 </small>

## Training & Education


<table>
  <tbody>
    {% for item in site.data.performer.training %}
      <tr>
        <td>{{ item.school }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.year }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

<small>Clown: Lauren Wilson (Dell’Arte), Stephanie Thompson (Ten Thousand Things)</small>    
<small>Butoh: Anastazia Aranaga (Bad Unkl Sista), Lynne Bradley (Zen Zen Zo)</small>    
<small>Viewpoints/Suzuki: Lynne Bradley (Zen Zen Zo)</small>


### Special skills

Basic acrobatics; Volin and viola; Basic mandolin, cello and banjo; Shakespeare; Basic French; Sewing
