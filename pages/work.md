---
layout: page
title: Ania Upstill - Work
permalink: /work
section: work
intro_paragraph: >
  [Jekyll Netlify Boilerplate](https://github.com/danurbanowicz/jekyll-netlify-boilerplate)
  provides the basics to get a fast, static website deployed on Netlify.
  Features [Netlify CMS](https://www.netlifycms.org), responsive
  CSS Grid layout, sample
  pages and posts, and a continuous deployment workflow.
---

## Select Performance Credits

<table>
  <tbody>
    {% for item in site.data.performance.credits %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.company }}</td>
      </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">
        <stack-l>
          {% for note in site.data.performance.notes %}
            <p><small>{{note}}</small></p>
          {% endfor %}
        </stack-l>
      </td>
    </tr>
  </tfoot>
</table>

## Select Production Roles

<table>
  <tbody>
    {% for item in site.data.production.credits %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{{ item.company }}</td>
      </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">
        {% for note in site.data.production.notes %}
          <p><small>{{note}}</small></p>
        {% endfor %}
      </td>
    </tr>
  </tfoot>
</table>

## Training & Education

<table>
  <tbody>
    {% for item in site.data.training.trainings %}
      <tr>
        <td>{{ item.school }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.year }}</td>
      </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">
          {% for note in site.data.training.notes %}
            <p><small>{{note}}</small></p>
          {% endfor %}
      </td>
    </tr>
  </tfoot>
</table>

## Special Skills

Basic Acrobatics, Violin and viola, Basic mandolin, Cello and banjo, Basic French, Shakespeare, Sewing

<a href="/work" class="btn btn-primary">DOWNLOAD CV</a>
