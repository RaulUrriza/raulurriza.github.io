---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# About me

I am **Raúl Urriza Arpal**, a PhD researcher in Biophysics at the [Nicolaus Copernicus University](https://www.umk.pl/en/) in Toruń, Poland, where I am expected to complete my doctorate in 2027. My work sits at the intersection of optical engineering, biomedical imaging, and artificial intelligence, with a focus on developing novel diagnostic tools for eye health.

I hold an M.Sc. in Biomedical Engineering and a B.S. in Optics and Optometry, both from the University of Zaragoza (Spain). This interdisciplinary background allows me to bridge fundamental optics with clinical and biomedical applications, from optical system design to AI-driven image analysis.

---

# Current research

I am currently a **Marie Skłodowska-Curie PhD Fellow** within the [BE-LIGHT](https://belightproject.eu/) project, working under the supervision of [Dr. Ireneusz Grulkowski](https://pl.linkedin.com/in/ireneusz-grulkowski-99125a27). My research focuses on tomographic microvibrography of ocular structures - combining **Optical Coherence Tomography (OCT)** with an optical lock-in detection scheme to map the biomechanical properties of the cornea, lens, and sclera at high frequency. The goal is to produce high-resolution mechanical maps of ocular tissues, opening new avenues for early detection and personalized treatment of eye diseases.

---

# Research groups

I am a member of the **[Bio-Optics & Optical Engineering Lab (BOEL)](https://boelab.org/)** at the Institute of Physics of NCU, founded by Dr. Ireneusz Grulkowski in 2017. BOEL specializes in innovative eye imaging techniques applied to visual optics and ophthalmic diagnostics, translating knowledge from physical optics, biophotonics, and data processing into real clinical tools.

I also belong to **[BRIDGE](https://idub.umk.pl/en/teams/priority-research-teams/discovery-diagnostics-therapy-for-healthcare-d2th/bridge/)**, a priority research team within NCU's Excellence Initiative focused on discovery, diagnostics, and therapy for healthcare. BRIDGE brings together researchers from multiple disciplines to accelerate translational science in the biomedical field.

<figure>
  <img src="/images/bridge_team.jpg" alt="BRIDGE research team at NCU" style="width:100%; border-radius:6px;">
  <figcaption style="font-size:0.85em; color:#666; margin-top:6px;">
    BRIDGE research team - Nicolaus Copernicus University, Toruń.
  </figcaption>
</figure>

---

# Background & expertise

With a foundation in Physics, Biomedical Engineering, and Optometry, my expertise covers:

- **Optical interferometry** - design and implementation of OCT and related interferometric systems for tissue analysis
- **Biomedical device development** - building imaging instruments for ocular diagnostics
- **AI & machine learning** - integration of intelligent algorithms for medical image analysis and biomechanical profiling
- **Software & tools** - Python, MATLAB, Zemax, SolidWorks, and frontend/backend development

Before joining academia full-time, I worked as an Optician and Optometrist at AFFLELOU (Zaragoza, Spain), gaining hands-on clinical experience in vision correction, eye health prevention, and patient care. I also completed a research internship at Fundació de Recerca Sant Joan de Déu (Barcelona), contributing to projects on Collagen VI and Retinoblastoma using confocal microscopy, STED, and Raman spectroscopy.

---

# Contact

I am always open to scientific collaborations, discussions, or simply connecting with fellow researchers. Feel free to reach out through the [contact page](/contact/) or find me on [LinkedIn](https://www.linkedin.com/in/ra%C3%BAlurrizaarpal/).

# My journey

<div class="tl-wrap">
  <ul class="tl-wheel">

    <li style="--i:0;">
      <input type="radio" id="tl-0" name="tl" checked>
      <label for="tl-0">2017&#8211;21</label>
      <div class="tl-body">
        <div class="tl-text">
          <p>During this period, I completed my Bachelor's degree in Optics and Optometry at the University of Zaragoza, where I built a strong foundation in optical physics, visual science, and clinical practice.</p>
        </div>
      </div>
    </li>

    <li style="--i:1;">
      <input type="radio" id="tl-1" name="tl">
      <label for="tl-1">2022</label>
      <div class="tl-body">
        <div class="tl-text">
          <p>During my final bachelor's project, I was working in the TOL lab at the Faculty of Zaragoza. There, I studied the viability of digital holography to measure the topography of the cornea. This investigation gave me the opportunity to speak at the OPTOM 2022 conference.</p>
          <p><img src="/images/timeline/OPTOM2022.jpg" alt="OPTOM 2022 Conference"></p>
        </div>
      </div>
    </li>

    <li style="--i:2;">
      <input type="radio" id="tl-2" name="tl">
      <label for="tl-2">2023&#8211;24</label>
      <div class="tl-body">
        <div class="tl-text">
          <p>During my MSc in Biomedical Engineering, I won the Afflelou Challenge, a competition about excellence at the bachelor's level where I received first prize thanks to my work on the development of a telematic system for visual health in rural areas. I worked at this company until 2024.</p>
          <p><img src="/images/timeline/Afflelouchallenge.jpg" alt="Afflelou Challenge"></p>
        </div>
      </div>
    </li>

    <li style="--i:3;">
      <input type="radio" id="tl-3" name="tl">
      <label for="tl-3">2024&#8211;27</label>
      <div class="tl-body">
        <div class="tl-text">
          <p>In 2024, I received the prestigious MSCA grant at Nicolaus Copernicus University for the <a href="https://belightproject.eu/">BELIGHT project</a>. During this time, I am working on my PhD, focused on the measurement of biomechanical properties of the cornea using optical coherence elastography.</p>
          <p><img src="/images/timeline/MSCA.jpg" alt="Marie Skłodowska-Curie Fellowship"></p>
        </div>
      </div>
    </li>

    <li style="--i:4;">
      <input type="radio" id="tl-4" name="tl">
      <label for="tl-4">2027&#8211;</label>
      <div class="tl-body">
        <div class="tl-text">
          <p>I am always open to hearing about new opportunities for the future. If you would like to connect or collaborate, feel free to <a href="mailto:raul.urriza@umk.pl">get in touch</a>.</p>
        </div>
      </div>
    </li>

  </ul>
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var wheel = document.querySelector('.tl-wheel');
  if (!wheel) return;

  var radios = Array.from(wheel.querySelectorAll('input[type="radio"]'));
  var step   = 360 / radios.length;   // 72° for 5 items
  var current = 0;

  function shortestDiff(from, to) {
    var d = ((to - from) % 360 + 360) % 360;
    return d > 180 ? d - 360 : d;
  }

  // Set initial rotation via inline style so JS owns the transform from now on
  radios.forEach(function (r, i) { if (r.checked) current = -(i * step); });
  wheel.style.transform = 'rotate(' + current + 'deg)';

  radios.forEach(function (radio, idx) {
    radio.addEventListener('change', function () {
      if (!this.checked) return;
      var target = -(idx * step);
      current += shortestDiff(current, target);
      wheel.style.transform = 'rotate(' + current + 'deg)';
    });
  });
});
</script>
