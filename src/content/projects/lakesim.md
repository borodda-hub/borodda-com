---
title: "LakeSIM"
subtitle: "Lakeside Sustainable Infrastructure Model"
date: "2013-01-01"
dateDisplay: "2013–2015"
status: "completed"
themes: ["data-viz", "urban-computing", "design-research"]
partners:
  - "UrbanCCD / University of Chicago"
  - "Argonne National Laboratory"
  - "Skidmore Owings & Merrill"
  - "McCaffery Interests"
  - "Clean Energy Trust"
  - "U.S. Steel Corporation"
featured: true
heroImage: "./_assets/lakesim-hero.jpg"
heroImageAlt: "LakeSIM data visualization overlay on the Chicago Lakeside Development site plan"
excerpt: "A prototype workflow framework coupling urban design with computational modeling, developed for the 600-acre Chicago Lakeside Development."
credits:
  - role: "Co-Principal Investigator"
    name: "Charles Catlett"
    affiliation: "UrbanCCD / Argonne"
  - role: "Co-Principal Investigator"
    name: "Leah Guzowski"
    affiliation: "Argonne National Laboratory"
  - role: "Technical Lead and Principal Project Architect"
    name: "Bo Rodda"
    affiliation: "UrbanCCD"
  - role: "Project Team"
    name: "Joshua Bergerson"
    affiliation: "Argonne National Laboratory"
  - role: "Project Team"
    name: "Ralph T. Muehleisen"
    affiliation: "Argonne National Laboratory"
  - role: "Project Team"
    name: "Jonathan Ozik"
    affiliation: "Argonne National Laboratory"
  - role: "Project Team"
    name: "Joshua Auld"
    affiliation: "Argonne National Laboratory"
  - role: "Project Team"
    name: "Nicholson Collier"
    affiliation: "Argonne National Laboratory"
funding:
  - "Argonne National Laboratory"
  - "The University of Chicago"
  - "McCaffery Interests"
press:
  - citation: "Lasky, J. (2013). Going for the remix. The New York Times, D1, D6–D7."
  - citation: "Tuhus-Dubrow, R. (2014). What happens when developers, scientists, and supercomputers connect on urban design. Next City."
    url: "https://nextcity.org/daily/entry/chicago-lakesim-scientists-developers-urban-design"
  - citation: "Sisson, P. (2015). Using a real-life SimCity to design a massive development. Curbed Chicago."
---

**Cities are designed at scales their tools cannot model.**

A single building can be modeled with confidence. A neighborhood can be sketched. But the 600 acres of a master-planned community, unfolding over decades — that scale exceeds the working tools of architects, urban planners, and developers. The decisions that matter most at that scale — energy demand, transportation flow, water systems, microclimate, infrastructure investment — interact in ways that no individual professional discipline is equipped to forecast. So most of those decisions, on most large developments, are made on intuition.

LakeSIM was an attempt to change that.

Developed at the University of Chicago's Urban Center for Computation and Data (UrbanCCD) in partnership with Argonne National Laboratory, the architecture firm Skidmore Owings & Merrill, and the developer McCaffery Interests, LakeSIM was a prototype workflow framework that coupled industry-standard urban design tools with the high-performance scientific simulations of a national laboratory. The site of the work was the proposed Chicago Lakeside Development — a 600-acre master plan on Chicago's southeast lakefront, intended to eventually house 50,000 residents alongside millions of square feet of commercial and public space. Lakeside was the test case. The ambition was bigger: a generalizable platform for evidence-based decision-making at urban scale.

I served as Technical Lead and Principal Project Architect during the prototype phase, working under co-principal investigators Charles Catlett (UrbanCCD / Argonne) and Leah Guzowski (Argonne). My role was the design layer — the connective tissue between the language of urban designers (CityEngine, Rhino, plan drawings) and the language of computational science (POLARIS for transportation, ISOmodel and EECalc for building energy, agent-based models for occupancy and behavior). LakeSIM's promise depended entirely on whether those two languages could be made to speak. Most of the project was the slow work of finding out.

The deliverable was a prototype that allowed designers at SOM to import a master-plan site, define zoning envelopes, populate the site with proposed buildings and uses, and then receive simulation outputs back as visualizations layered over the same plan. Energy utilization indices by building, traffic flow under different network configurations, building envelope performance under future climate scenarios — all rendered in the same drawing the designer was working in. The technical achievement was integration; the design achievement was making the integration legible. A planner using LakeSIM did not need to understand the simulations underneath; they needed to be able to ask questions of them.

The intellectual stakes of the project, for me, were specifically about translation. Computational modeling is one of the most powerful tools we have for understanding cities, but its outputs are illegible to most of the people designing them. Urban design, conversely, has refined an extraordinary visual vocabulary for communicating spatial intent, but most of that vocabulary cannot be derived from data. LakeSIM was an early experiment in what a hybrid practice would look like — and what the design layer needed to do, semiotically, to make computational outputs actionable for the people who actually shape the built environment. That question continues to drive my research on data visualization as a humanistic medium.

The prototype was profiled in The New York Times, Next City, Curbed Chicago, and Geospatial World, and the work was published in the 2015 ISOCARP Review 11: Reinventing Planning (Bergerson, Muehleisen, Rodda, Guzowski, Ozik, Auld, & Collier, 2015). The Chicago Lakeside Development itself underwent significant changes in the years following — a reminder that simulation is not prophecy, and that the most useful urban modeling tools are the ones that help us think clearly about possibility, not the ones that promise certainty.

LakeSIM remains, for me, the project that taught me how to work at the seam between scientific computation and design practice. Most of what I have done since — the City of Big Data projection-mapping platform at the Chicago Architecture Foundation, the Array of Things public-engagement work, the IPRO studios on smart-city design at Illinois Tech, even the recent work on decision quality as an analytic frame — descends in some way from the questions LakeSIM asked.
