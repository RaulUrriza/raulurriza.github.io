---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A complete overview of all pages and content on this site. Looking for the machine-readable version? An [XML sitemap]({{ base_path }}/sitemap.xml) is also available.

---

## Main Pages

General pages such as About, CV, Contact, and more.

{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

---

## Posts

Blog posts and updates, listed in reverse chronological order.

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

---

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
  {% unless collection.output == false or collection.label == "posts" %}
    {% capture label %}{{ collection.label }}{% endcapture %}
    {% if label != written_label %}

---

## {{ label | replace: "_", " " | capitalize }}

      {% capture written_label %}{{ label }}{% endcapture %}
    {% endif %}
  {% endunless %}
  {% for post in collection.docs %}
    {% unless collection.output == false or collection.label == "posts" %}
      {% include archive-single.html %}
    {% endunless %}
  {% endfor %}
{% endfor %}
