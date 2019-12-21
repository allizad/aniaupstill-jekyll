---
layout: page
title: Ania Upstill - Work
permalink: /work
section: work
description: >
  TODO: SEO-friendly description
---

## Select Performance Credits

<table>
  <tbody>
    {% for item in site.data.work.performance_credits %}
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.role }}</td>
        <td>{% if item.company %}{{ item.company }}{% else %}&nbsp;{% endif %}</td>
      </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">
        <stack-l>
          {% for note in site.data.work.performance_notes %}
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
    {% for item in site.data.work.production_credits %}
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
        {% for note in site.data.work.production_notes %}
          <p><small>{{note}}</small></p>
        {% endfor %}
      </td>
    </tr>
  </tfoot>
</table>

## Training & Education

<table>
  <tbody>
    {% for item in site.data.work.trainings %}
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
          {% for note in site.data.work.training_notes %}
            <p><small>{{note}}</small></p>
          {% endfor %}
      </td>
    </tr>
  </tfoot>
</table>

## Special Skills

Basic Acrobatics, Violin and viola, Basic mandolin, Cello and banjo, Basic French, Shakespeare, Sewing
