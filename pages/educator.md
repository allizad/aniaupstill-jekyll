---
layout: page
title: Educator
header: Educator
permalink: /educator
section: educator
description: |
  TODO: SEO-friendly description
cta:
  text: View Performance Work
  url: /performer.html
---

In the 2019/2020 school year Ania is a Teaching Artist with Lincoln Center Theater’s Open Stages Education Program and People’s Theatre Project in NYC. Past work includes work with the Pop Up Globe in Auckland, NZ, and with Shakespeare Globe Center New Zealand. They participated in SGCNZ’s inaugural Emerging Theatre Practitioners’ Program at Shakespeare’s Globe in London in 2015, interning with Shakespeare’s Globe’s Education Department.

Ania teaches clown classes and workshops in NYC and abroad. In NYC they teach weekly drop in clown classes at The Friend Ship in Williamsburg on Wednesday evenings from 6:30 - 8pm. They have also taught an intensive course for Clowns Without Borders in Palestine, upskilling local clowns.

In 2020 they will be teaching clown workshops and classes on tour internationally alongside their solo clown show Transhumance. Dates and times TBD.

Get updates for Ania's next clown workshops and classes by [signing up for the newsletter](signup)! To book workshops, [contact us](/contact.html).

<center-l>
  <a href="" class="btn">Sign Up</a>
  <a href="/contact.html" class="btn">Contact</a>
</center-l>

## Teaching Artist Work

<table>
  <tbody>
    {% for item in site.data.educator.teachings %}
      <tr>
        <td>{{ item.organization }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.year }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
