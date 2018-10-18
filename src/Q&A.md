Q & A
=====

Below is a list of questions asked by a group of students from UMUC who are going to be working on this project. This project is is not being done in connection with NASA, and all statements and other contributions by James Montalvo are his own and may not reflect the position of NASA. All reference material is in the public domain.


Project Plan/Deliverables
-------------------------

### Besides a final piece of software what deliverables are expected throughout the course of the project (Project Plan, SRS, etc.)?

I'd like to have access to the code repository (gitlab, github, whatever) throughout the process, not just a final product. Beyond that, I think the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) is a good starting point.

### Are there standard document templates used by NASA that you would like us to follow?

For source code? No

### Do you have a preference on what development methodology we use (Agile/Waterfall)? Do you want us to deliver the product incrementally or is one final software deliverable adequate?

Incrementally.

### These sounds a lot like the military (Navy) version of 3M (maintenance and material management) are these checklist planned maintenance cards?

I'm not sure. I'm not familiar with 3M.


System
------

### Any preferred programming languages?

I think there would be a lot of benefit to writing at least portions in Node.js, since you may want to parse documents on the server or within a browser without API calls. That's not a requirement, though. If I was going to start working on it right now I'd probably pick Python if I didn't use Node, but am happy with any open source language. Please don't use .NET.

### What browsers need to be supported? What is the preferred web browser, for the HTML purposes?

Chrome and Firefox seem to be the most commonly used within my organization. Internet Explorer is also used by a good number of people to access legacy systems, but this project need not support IE. Failing gracefully in IE or any unsupported browser would be preferable to ungracefully, but is not a requirement for minimum viable product.

### What dependency managers does NASA use now?

That seems highly language dependent.

### How does the current product ensure quality control? Steps mislabeled in serialization would produce an invalid product.

James' response: I don't understand.

### Is the customer aware that the task will not generate/correct spelling errors?
(This is beyond scope of the current project (especially for their naming of systems))

James' response: That's fine.

### Will procedures be written by multiple entities in parallel, such that data could be overridden and lost during simultaneous saves by the user without some sort of version control put in place?

Realtime collaboration (i.e. Google Docs) is not required. If projects were a group of YAML or other text files, they could easily be stored in a Git repo and branched/merged for collaboration purposes.

### Will there ever be a need to implement more server-side applications, such that Python and the Pyyaml libraries might be a better choice for the YAML to HTML parser?

You can use whatever libraries you want.

### How is the process to generate the tasks done to date?

Are you asking how MS Word files are generated? If so, basically the process is: grab the previous EVA's (spacewalk's) procedure, copy it, delete the contents but keep the structure, and fill in with your own contents.

### When building the word document, how do you know the relationship and dependencies of the tasks? or the order?

I don't understand. We'll talk this over the phone.

### Do you have infrastructure available to install a web application or a container-based application?

Yes. Either.

### Is that the limitation why you believe a command application is better suited to run a conversion to the document?

I think being able to run the build process without requiring access to a server is an important feature.

### You mentioned NPM; Do you have node available in your infrastructure?

Yes.


Design
------

### Assigned to field (Column) should be able to take more than one assignee or only one?

Each column of the a procedure like the one starting on page 7-20 of [this document](https://www.nasa.gov/centers/johnson/pdf/539922main_EVA_134_F_A.pdf) can be a single actor, for the purposes of this project. I _think_ it would be possible to write it in such a way that you could assign multiple actors to appear in a single column, but I don't think that's required in the initial version.

### Will images be attached or inserted on the task form?


### Assignee take any action or make any change on the table when they completed their task? Or the columns should be disabled once the task is assigned?


### Are the cue cards always included in the same document? Is there a possibility that certain cue cards (ingress/egress) are not in the file because they have not changed?


### When writing an alert or warning, is that normally generated by the user in Word? Or is the warning/caution added in Adobe Acrobat?


### Are images inline with an IV/EV task column (to keep with convention/culture)?


### Do all users (EV1, EV2, Robotics Operator, Mission Control) need to see all parties’ tasks/columns? (Can EV1 and EV2 share columns with the Robotics Operator? Does EV1 and EV2 need to be aware of Mission Control’s tasks?)


### Are the MediaWiki pages an internal wiki containing images or diagrams that would otherwise be displayed in a task column?


### Is the formatting currently used in the Word document important? If generating a new format, would that have an impact?


### Why you believe a YAML file would be useful? Can a program just give you a screen to input the tasks and dependencies and build a task database that the user can choose from existing tasks or create new ones?


Input
-----

### Will YAML be the only input type?


### Is YAML the only data structure we need to support? Can something else be used instead?


### Where are the tasks coming form?


### What variables and sub-routines are necessary to run against the YAML texts (assuming those are the texts you referred to in the readme)


### What are multi-page procedures?
  ### The tasks with dependencies?


### You mention both snippets and multi-page procedures to be reused – are these separate YAML files or are they stored in a database? Git is mentioned later, so that is another possible source of input.


### What data items are coming into the system? Some preliminary data items identified below:
- EVA Title
- EVA Duration
- Actors (1, 2, or 3 – will there ever be 4 or more?)
  - Role
  - Name
  - Bag (?)
  - Equipment (?)
- Common Warning(s) (applies to EV1 and EV2)
- Common Caution(s) (applies to EV1 and EV2)
- Tasks
  - Actor performing task
  - Task name
  - Task time
  - Task warning
  - Task caution
  - Task tools? equipment?
  - Task steps
    - Action text
    - Check text
    - Check verification text
    - Task/step/Actor that must be performed before this step can execute
  - Task image
- Task filenames?
  - Local file
  - File from Git repo
- Columns – Will there be more than 3 at any given time?
  - Steps
  - Checks
  - Comments
- Images

### When tasks are written/generated, do the users submit separate document files? Are separate task files combined by another user for finalizing the EVA checklist?

Output
------

### Is there an automated email or message that need to be sent to the assignee when they are assigned a task?

I don't understand. What do you mean "assigned a task"?

### Is the docx extension a need or a desire? Acrobat would be capable of converting the PDF's if Word is not needed.

Being able to output to a file that could be editable by MS Word (whether docx, properly formatted HTML, ODT, etc) is necessary in case any manual post-processing is required.

### What do you want the output to look like? I.e. STS-134 EVA Checklist – page 7-5, page 7-6, page 7-20, or all of the above?

The procedure portion is pages 7-20 to 7-40. 

###  Is there a difference (other than document format) between the PDF, DOCX, and/or HTML?


### Is there a preference for PDF/DOCX, or are both needed for the output.
