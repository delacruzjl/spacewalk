Spacewalk
=========

I work at NASA creating procedures for spacewalks (EVAs). Typically these procedures include 2 astronauts working outside the space station (called EV1 and EV2), plus a robotics operator inside, and other actions taken by Mission Control on the ground. All of this is happening in parallel. Sometimes EV1 may be working on a task where all the steps can be done independent of what EV2 is doing, while other times their steps are heavily intertwined. The same goes for robotic and mission control steps.

Currently we write these procedures in Microsoft Word. A procedure is basically a big table, with each column of the table being the steps for each entity. So EV1's steps are in one column, EV2's in another, and so on. If EV2 has a step that has to come after one of EV1's steps, then we make sure that the later step is lower on the page than the earlier step. All of this requires a lot of formatting in Word, and we spend too much time dealing with the formatting aspect. Most of these procedures are text with ordered and unordered lists, but there are also images and diagrams.

So we need a better method for writing procedures with multiple people working in parallel. I have a general concept for what I think could work, but have not had time to create a prototype. My general concept goes something like:

1. Users write source procedures (probably in YAML or some other simple syntax)
2. Users run a command to convert these into final product:
    1. YAML looped over to generate an HTML table
    2. HTML is converted into PDF or DOCX (or both/either)

The key here is that the source procedures would not require formatting; they're just text files which have all the pretty formatting added to PDF/DOCX files in the build process. Furthermore, this would allow for options like variables and subroutines.

Example YAML files
------------------

See [`main.yml`](main.yml) for how the main file may look. `main.yml` references [`pma3-shields-and-connections.yml`](pma3-shields-and-connections.yml) as an included task (set of steps).

Possible requirements
---------------------

- Subroutines: Allow both snippets and multi-page procedures to be reused
- Variables
- Images (inline, separate page, linked)
- Include pre-built PDF and/or DOCX pages (cue cards and such)
- Linking with MediaWiki pages
- Library projects + NPM-like thing
- Tool tracking: Bonus if it can also help manage the location of hardware and tools as they're used throughout the spacewalk
- Build PDF
- Build DOCX
- Build HTML?

Real examples
-------------

Space Shuttle procedures are now public record, so you can see any of the "EVA Checklist" links on this page:

https://www.nasa.gov/centers/johnson/news/flightdatafiles/foia_archive.html

If you go to the first one, STS-134 EVA Checklist, you'll see these relevant parts:

* pg 7-3: Summary of all EVAs
* pg 7-5: more detailed summary of first EVA
* pg 7-6: configuration of hardware used during the EVA. The first checkbox for each item indicates its starting location, the second indicates the end location. If a box is grayed out it means it doesn't start or end in that spot.
* pg 7-20: The start of the procedure for EVA #1, starting at the point where the Airlock has been depressed down to vacuum and the hatch has been opened
* pg 7-24: note that this page is a single-crewmember task. Preceding pages had crewmembers working in parallel. There's not a strong technical reason preventing us from writing all procedures in series with prefixes like I indicated in the last email (e.g. EV1: do this, EV2: do that, EV1: do something else), but there's a strong cultural preference to sticking with the multi-column parallel format. The multiple columns also help the person talking to the crewmembers read ahead and see what things they can preemptively tell each crewmember about (e.g. "EV2 you need to hold here while EV1 completes XYZ, but when he's done you'll be going back to the airlock to get the ABC Bag, so have your tools and tethers prepped for translation")
