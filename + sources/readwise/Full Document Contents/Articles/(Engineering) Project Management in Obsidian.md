---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
(Engineering) Project Management in Obsidian by Lukas Trojansky

![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*jRlyQ74o75gsJBdH9goZvg.png)

## Metadata
- Author: [[Lukas Trojansky]]
- Real Title: (Engineering) Project Management in Obsidian
- Category: #Source/articles
- Summary: How to use your 2nd brain to get the work done
- URL: https://ltroj.medium.com/engineering-project-management-in-obsidian-e6aade82dfff
- Author: [[Lukas Trojansky]]
- Imported: [[2025-08-25]] from reader
- Link: https://ltroj.medium.com/engineering-project-management-in-obsidian-e6aade82dfff

## Full Document
![](https://miro.medium.com/v2/resize:fit:1400/1*jRlyQ74o75gsJBdH9goZvg.png)
### Table of contents

* [Introduction (you can skip this part)](https://medium.com/p/e6aade82dfff#b587)
* [❓ Prevent *analysis paralysis*](https://medium.com/p/e6aade82dfff#0b79)
* [🏗️ Structuring projects in the vault](https://medium.com/p/e6aade82dfff#8a5b)
* [📁 Folders vs #️⃣ Tags vs 🔎Dataview queries?](https://medium.com/p/e6aade82dfff#4b7e)
* [🛬 Adding a *Landing page*](https://medium.com/p/e6aade82dfff#9cab)
* [🧱 Project blocks and milestones *Kanban style*](https://medium.com/p/e6aade82dfff#5630)
* [📅 Using the *Projects* plugin](https://medium.com/p/e6aade82dfff#43e6)
* [📅 Using the *Kanban* plugin](https://medium.com/p/e6aade82dfff#f137)
* [🗒️ Project notes and metadata](https://medium.com/p/e6aade82dfff#5a43)
* [💬 Meeting notes](https://medium.com/p/e6aade82dfff#9da7)
* [👥 Referring people (and resources)](https://medium.com/p/e6aade82dfff#d7a4)
* [✅ Task Management](https://medium.com/p/e6aade82dfff#616e)
* [☑️ Task lists using Dataview](https://medium.com/p/e6aade82dfff#ac32)
* [🔌 Checklist items on steroids — the Obsidian *Tasks* plugin](https://medium.com/p/e6aade82dfff#7bbf)
* [Final thoughts](https://medium.com/p/e6aade82dfff#5c0e)

### Introduction (you can skip this part)

Obsidian¹ is known as a powerful and flexible piece of software which can be perfectly customized to fit individual workflows and needs. Use cases range from simple note taking to building a personal knowledge management system with thousand of notes and for me it evolves along with different tasks and topics I‘m involved with. That‘s mainly possible due to a big number of available plugins and a very active user base with many developers working on plugins even for niche applications.

So when I was challenged with managing multiple engineering projects at once, I naturally immediately asked myself if Obsidian wouldn’t also work as a project management tool, so that I could seamlessly integrate my notes and files into project management.

I quickly found a setup that works very well for me — even though Obsidian is of course not a complete replacement for a specialized commercial project management software, it gets you very far and enjoys the two big advantages:

* Maximum flexibility to customize the software to your needs
* and the fact that all data is in plain-text markdown, so we are not trapped in a proprietary format and have full sovereignty over our data.

### ❓ Prevent analysis paralysis

An important takeaway for me was that it’s important to just get started. Obsidian sometimes tempts you to spend way too much time on a preliminary setup before you’ve spent even one productive minute. My recommendation is: hang along the following ideas, decide on a basic structure, and do the fine tuning as you go along. It is usually not a problem to rearrange or develop structures in Obsidian afterwards — because it‘s all text files in the end.

### 🏗️ Structuring projects in the vault

If you want to set up a project in an existing vault, it is a good idea to stay in your existing organization system. Whatever you decide on, you will need some way to denote which notes belong to the project.

### 📁 Folders vs #️⃣ Tags vs 🔎 Dataview queries?

The obvious way to do this is to place all project notes in a specific project folder. This method is very compatible with the *Projects plugin*² (more about this later) and using *Templater*³ it is easy to make sure that new notes in the project folder are created with a previously defined template specifically for your project notes.

Another very feasible method is the use of a project specific tag. The advantage is that tags can be easily restructured afterwards using the *Tag Wrangler plugin*.⁴ In addition, you can use them to “collect” notes that, for whatever reason, should not be located in a special project folder, but are distributed throughout the vault.

Folders and tags can be used both at the same time of course.

On a side note: If you have the special case that you want to collect many already existing notes in a project without adding tags to them all you can also help yourself by writing a matching *Dataview*⁵ query. This is also supported by the Projects plugin, but with limitations.

![](https://miro.medium.com/v2/resize:fit:1400/1*8uoSr3CtbHxf9-NdfKuAyA.png)This project uses tags as well as a dedicated folder structure to bundle project notes 
### 🛬 Adding a Landing page

Another thing I like to do in order to structure my projects is creating a note which acts as an overview or landing page for my project. Usually it contains a short project overview (regarding goals, cost, timeline and so on) and a map of content (MOC) which can be automatically created and updated with plugins such as *Waypoint*.⁶ The resulting map of content is simply a dynamic list of backlinks to the notes in my project folder.

Design the landing page to include everything you need to get a quick overview and include appropriate links to easily get to your important project notes.

Some ideas for inspiration:

* An overview of upcoming tasks (using the Tasks plugin or Dataview — see *Task Management* below)
* An overview of meeting notes (using Dataview — see *Meeting notes* below)
* An overview of the project team and project resources
* Links to external project resources in other programs or portals
* A graph with the project timeline

If you organize projects in folders it‘s a good idea to set the landing page as a *Folder Note*.⁷

![](https://miro.medium.com/v2/resize:fit:1400/1*EOZd_QuNBUGNJyHq805-Tg.png)Example for a simple landing page 
### 🧱 Project blocks and milestones Kanban style

Let‘s move away from Obsidian‘s plain note view and have a look at some options to organize the project blocks (aka *macro tasks*) in a more convenient way.

A rightly very popular method are Kanban boards. Here you define columns that represent the status of the block (those blocks are called *cards* in the Kanban system). In the course of processing, the cards move from left to right until they receive the status *Done* (or whatever you want to name it). The order of the cards within the columns usually represents the priority of the cards.

Especially useful for this are the Obisidian plugins *Projects* and *Kanban*.⁸ It can be hard to decide which tool fits your need — therefore, here is a little help on this.

### 📅 Using the Projects plugin

![](https://miro.medium.com/v2/resize:fit:1400/1*CQhFqNyGTuMPhsfVUNwvlQ.png)Screenshots of the Projects plugin’s Board and Gallery view 
**Projects** is for you if

* it‘s OK to have a note for each Kanban card: In Projects each card *is* a corresponding note, while in Kanban cards can be *linked* to notes, but can also be created and managed completely independently of notes.
* you want to have additional views to the Kanban board (table, calendar, gallery).
* you‘d like to make use of metadata fields (like status, priority, due date,…) in your notes and be able to edit metadata right from the project view: For example, moving a card within the Kanban board from *Backlog* to *In progress* directly changes the *status* field in the notes frontmatter. Projects gives you complete freedom as to which fields you want to create and how they are named.
* you‘re OK with managing markdown style tasks (- [ x ]) outside of your project view (currently there is no way to show tasks within your project notes within the Projects plugin)

### 📅 Using the Kanban plugin

![](https://miro.medium.com/v2/resize:fit:1400/1*wF-ANdrga1MZSZaFf1ECiw.png)Screenshot of the Kanban plugin’s Board view and Markdown mode 
Choose the **Kanban** plugin if

* it‘s important that your project is fully self-contained as the Kanban Board is a regular markdown file which can be toggled between the markdown and Kanban view.
* you don‘t like to clutter your vault with notes for every single kanban card (you are still able to link a kanban card to a note by using regular [[backlinks]]).
* all you need is a Kanban board and nothing else.
* it‘s useful for you to manage markdown style tasks (- [ x ]) directly in the Kanban board (cards in the Kanban board are represented as tasks in the markdown file and can be addressed as such by plugins like Dataview or obsidian-tasks.)

In summary, Projects is more suitable for larger projects where you want to manage larger work packages (I call them *macro tasks* or *project blocks*) and Kanban is suitable if you want to create smaller projects where you rather manage *micro tasks* for which it is not worth to create individual notes.

Side note: If you simply want to display tasks from different notes in your vault in a Kanban board, it is worth to have a look at the Cardboard plugin⁹, which solves this task well and is a simple alternative to agenda notes with obsidian-tasks or Dataview queries.

### 🗒️ Project notes and metadata

When using the Projects plugin, it is useful to create a template for project notes in which the metadata fields used in your project are already laid out in the YAML frontmatter. The fields can be freely chosen, a minimal template typically looks like this:

```
---  
tags:  
  - Type/Project-Note   
status: Triage  
done: false    
priority: 0  
cover: [[default-cover.jpg]]  
due-date: {{date}}  
exclude-from-project: false  
---  
  
# My content
```

The usage of metadata in both plugins is summarized in the following table.

![](https://miro.medium.com/v2/resize:fit:1400/1*Wfnod9DB7UZV5MILKTJjZg.png)
### 💬 Meeting notes

It is obvious to use a template for meeting notes as well. I also integrate my project meeting notes into the Kanban board and give them the status *Triage* by default. This means that after the meeting I derive tasks and if necessary work packages (micro tasks and macro tasks). After that the meeting note is archived in the Kanban board under *Done*.

A typical meeting note template may look similar to this:

```
---  
tags:  
  - Project/P01  
  - Type/Project-Meeting  
status: Triage  
done: false    
priority: 0  
cover: [[meet-cover.jpg]]  
due-date: {{date}}  
project-exclude: false  
---  
**[Meeting date:: {{date:YYYY-MM-DD}}T{{time:HH:mm}}]**  
  
**Participants**:: #👤/Doe-Jane  
  
---  
  
## Agenda  
1.  
  
## Meeting Notes  
-  
  
## To Do  
- [ ] Triage/follow-up #Project/P01
```

![](https://miro.medium.com/v2/resize:fit:1400/1*sE5nEzDm8s4AuG2IKAo3hw.png)Use meeting notes to extract tasks and keep track of the project progress 
The meeting date and participants are included in the form of dataview inline fields (using the `field:: value` syntax) which allows to query these information for example in our project landing page using a dataview query:

![](https://miro.medium.com/v2/resize:fit:1400/1*RIDSCCon4XEBON53pPAsiQ.png)Dataview makes it easy to summarize your meeting notes 
### 👥 Referring people (and resources)

If you‘re working on a project which includes more people than just yourself it‘s useful to have a method to refer to them for example in meeting notes or when assigning tags.

Basically there are two major ways to do that, using #Tags or [[backlinks]]. You can spend hours over hours digging through Obsidian community discussions about the pros and cons of tags vs links, so I try to keep it short and simple:

* Use tags if you do not see the need to create individual notes for each person you‘d like to refer to in your notes.
* Use backlinks if you like to jot down notes regarding those people or if you make heavy use of the graph view to see connections between your project members and your project notes.

The same principle can be applied to many other resources in a project. In the example shown here we have notes for the (physical) prototypes Prototype-1 and Prototype-2 which can be used to keep testing and status logs for these.

As always you can also choose a midway: start with tags and if you see the need to create an individual note for someone you can still do so.

Personally I like to make use of nested tags. If you use unicode emojis in your tags I‘d recommend to use the *Various Complements plugin*[¹⁰] which makes it easier to add these tags by suggesting existing tags using fuzzy search.

And again — if you need to restructure your tags, *Tag Wrangler* is the way to go!

![](https://miro.medium.com/v2/resize:fit:1400/1*_wWz85cSBtsVko4fsQXyKQ.png)Tags and links can both be used to refer to your project members 
### ✅ Task Management

After implementing the *big blocks*, *work packages* or *macro tasks*, whatever you may call them, we still need to get some work done to make progress in our projects. Therefore it makes sense to implement some kind of task management where we get specific about the next steps to go (let‘s call these steps *micro tasks*).

Markdown already offers a native syntax for checklists (`- [ ] This is a task`) but it‘s somewhat impractical to maintain one big checklist for a full project.

Fortunately there are elegant ways to collect tasks from your project notes and show them where you want them to appear. The big advantage is that you don‘t have to worry where to jot down tasks. Instead just write it down where it comes up — in meeting notes, daily notes, project notes, it really doesn’t matter.

### ☑️ Task lists using Dataview

Dataview offers the query type `TASK` which renders an interactive list of matching tasks. You can also check these checklist items in the rendered view and Dataview modifies the original note accordingly.

A very basic query in our project may look like this:

![](https://miro.medium.com/v2/resize:fit:1400/1*E0O8X0EwlyDTuFSx-W8D2g.png)Create a task list using the Dataview plugin 
### 🔌 Checklist items on steroids — the Obsidian Tasks plugin

As you can see some of the tasks listed here are followed by additional symbols and dates. This syntax is used by the Obsidian *Tasks plugin*.¹¹

Tasks makes working with checklist items in Obsidian really useful as you can conveniently modify the checklist items to set

* priority (⏫)
* due date (📅 2099–03–11)
* scheduled date (⏳ 2099–03–10)
* start date (🛫 2099–03–08) and
* recurring tasks (🔁 every 2 weeks on Thursday)

It also allows to set a custom checklist item status. While vanilla markdown only knows about *unchecked* `- [ ]` and *checked* `- [ x ]` items, Tasks allows to set a status like *In progress* `- [ / ]` or *Cancelled* `- [-]` by default plus you can define your own status like *needs clarification* `- [ ? ]`.

Note that your theme needs to support these custom status symbols in order to work properly. To give you an impression here is an overview of custom statuses that are currently supported in the Minimal theme.¹²

![](https://miro.medium.com/v2/resize:fit:1400/1*xxN7uqDU8u4-M2rrhuuEoQ.png)Custom checklist item statuses using the Minimal Theme 
The Tasks plugin also brings it‘s own query syntax which you can use to create custom Task listings (for example [here is a Daily Agenda template for you Daily Notes](https://obsidian-tasks-group.github.io/obsidian-tasks/advanced/daily-agenda/)) so you don‘t have to rely on Dataview queries if you don‘t want to.

### Final thoughts

The unique thing about using Obsidian as a project management tool is really that you can develop it over time to suit your needs and tailor it to *your* exact workflow. This can be a curse and a blessing, because of course a project management tool that enforces a certain workflow also provides a framework to follow. In Obsidian, on the other hand, you have to develop your own clear idea of what you need and don’t need for project management.

In my view it is evident that it can be a good solution for people who already use Obsidian on a daily basis and want or need to build a customized project management quickly. When it comes to set up a project management for an entire team without significant Obsidian experience, I would rather explore the market and look for alternatives. However, one thing is clear — such a flexible tool will be hard to find.

Good luck with your projects and happy note-taking!

### References

[1] [Obsidian](https://obsidian.md/) (A second brain, for you, forever.)↩︎

[2] [Projects Plugin](https://github.com/marcusolsson/obsidian-projects)↩︎

[3] [Templater Plugin](https://github.com/SilentVoid13/Templater) | [Templater documentation](https://silentvoid13.github.io/Templater/)↩︎

[4] [Tag Wrangler Plugin](https://github.com/pjeby/tag-wrangler)↩︎

[5] [Dataview Plugin](https://github.com/blacksmithgu/obsidian-dataview) | [Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/)↩︎

[6] [Waypoint Plugin](https://github.com/IdreesInc/Waypoint)↩︎

[7] [Folder Note Plugin](https://github.com/xpgo/obsidian-folder-note-plugin)↩︎

[8] [Kanban Plugin](https://github.com/mgmeyers/obsidian-kanban)↩︎

[9] [CardBoard Plugin](https://github.com/roovo/obsidian-card-board)↩︎

[10] [Various Complements Plugin](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin)↩︎

[11] [Tasks Plugin](https://github.com/obsidian-tasks-group/obsidian-tasks) | [Tasks documentation](https://obsidian-tasks-group.github.io/obsidian-tasks/)↩︎

[12] [Minimal Theme](https://github.com/kepano/obsidian-minimal) | [Minimal Theme documentation](https://minimal.guide/Home)↩︎
