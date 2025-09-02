---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
How I track tasks with Obsidian by hannibal

![rw-book-cover](https://skarlso.github.io/apple-touch-icon.png)

## Metadata
- Author: [[hannibal]]
- Real Title: How I track tasks with Obsidian
- Category: #Source/articles
- Summary: The author shares their method for tracking tasks in Obsidian using a queuing system to manage priorities and avoid overload. They break down tasks into smaller, actionable steps and organize them on a daily page with tags and automatic rollover features. While the system works well for them, they acknowledge areas for improvement, such as adding reminders for time-sensitive tasks.
- URL: https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/
- Author: [[hannibal]]
- Imported: [[2025-08-25]] from reader
- Link: https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/

## Full Document
Table of Contents  * [How I track tasks with Obsidian](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#how-i-track-tasks-with-obsidian)
	+ [Task tracking queue](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#task-tracking-queue)
	+ [What is a task?](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#what-is-a-task)
	+ [The Daily Page](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#the-daily-page)
	+ [The Task List](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#the-task-list)
		- [Tags](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#tags)
		- [Priorities](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#priorities)
		- [Automatic rollover](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#automatic-rollover)
	+ [Projects](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#projects)
	+ [The Routine](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#the-routine)
	+ [Plugins and Theme](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#plugins-and-theme)
	+ [Conclusion](https://skarlso.github.io/2024/09/17/how-i-track-tasks-with-obsidian/#conclusion)

 
### How I track tasks with Obsidian

Hello. This will be a run-down on how I track tasks and projects and long-term things, like reading a book, tracking a project or traveling using the [PARA](https://fortelabs.com/blog/para/) method.

Let’s get to it!

#### Task tracking queue

![task-list](https://skarlso.github.io/img/2024/09/19/task-list.png)
The way I track tasks is through a queuing system. To not get overloaded by tasks, I just simply put the next task into the queue and take out the top recent if I’m done. Unless something really urgent comes along I don’t disrupt this flow. Meaning, once I have a task out and `#active` that’s the task I’m going to be working on!

Sometimes this discipline is hard to follow. Sometimes there are interruptions all over the place and I need to switch to a new task that is way more urgent. But luckily those are the exceptions. And not the rule.

I can take those events as they occur the important thing is that the system allows for such distractions.

![task-list-urgent](https://skarlso.github.io/img/2024/09/19/task-list-urgent.png)
#### What is a task?

Let’s see the definitions of a good task:

* atomic
* actionable
* achievable

![task-anatomy](https://skarlso.github.io/img/2024/09/19/task-anatomy.png)
The third task in this list is anything but actionable at that stage. It should be further broken down like:

* go over the dapr getting started section
* read what dapr is and how could it help my project

Do the first two, then once we understand what DAPR is, we will add more:

* modify my project to use dapr pub-sub engine instead of NSQ

These are much better and much more actionable. But there are entire whitepapers about how to define a proper task, so I won’t go into much detail about them here.

As a general rule:

* anything that takes longer to complete is broken down into smaller ones and an epic is created that will track sub-tasks.
* if it cannot be broken down, it will get a Project page. More on that later.

![task-breakdown](https://skarlso.github.io/img/2024/09/19/task-breakdown.png)
That said, I used to not follow this too nicely…

#### The Daily Page

Where do I keep these things you might ask by now? Let’s take a look at my daily-page. This is the number 1 goto page in Obsidian. A new page is always created when I open the app. This is the best place to start at. I use the following template to generate my new daily page:

```
---
gym: false
selfCare: false
meditation: false
week:
month:
---
# Tasks
![[task-list]]
# 📝 Notes
### Notes created today
>[!EXAMPLE]+ New Today
>```dataview
>LIST WHERE file.cday = this.file.day SORT file.mtime desc
>```
### Notes last touched today
>[!EXAMPLE]+ Modified Today
>```dataview
>LIST  WHERE file.mday = this.file.day SORT file.mtime desc
>```
---
# Diary
---
# Dreams
---
# Rapid Notes
- 00:00
- This will be a nice way to record daily events.
---
# TODOs
\`\`\`button
name Open Previous Daily Note
type command
action Daily Notes: Open previous daily note
\`\`\`

```

And this the linked todos page:

```
## Over Due
> [!danger] Overdue
> ```tasks
> not done
> due before today
> group by function task.tags.sort()[0]
> ```
## Due Today
> [!todo] Due today
> ```tasks
> due today
> not done
> group by function task.tags.sort()[0]
> ```
## Not today
> [!check] Not Today
> ```tasks
> not done
> due after today
> group by function task.tags.sort()[0]
> ```
## No Due Date
> [!check] No Date
> ```tasks
> not done
> no due date
> sort by created
> sort by path
> group by function task.tags.sort()[0]
> ```

```

And this is how it looks like when rendered:

Okay, okay, I have a few tasks which I still didn’t get to…¯\_(ツ)\_/¯.

#### The Task List

The task list has a number of things going for it. I’m filtering a couple of things based on date and due dates. Those that I created in the past without any kind of date are listed as No date but they are still relevant.

##### Tags

Tags are the ways I’m tracking the current `#active` task and the rest of the tasks as well. It is how I’m grouping them too. It adds a nice organization view of the tasks. Also, the subtask `/something` will nicely show up and can be further used to group if needed by the tasks plugin. More on that at [grouping by tags](https://publish.obsidian.md/tasks/Queries/Grouping#Tags).

There is more to the grouping though. I’m sorting by tags and the reason for that is that when `#active` is present on a task it will automatically be in FRONT. So it will be the first item on this list and really be in my face.

Now, for the rest of the queue related things, I’m sorting by reversed creation date (which is why I really should start adding dates to every task but something I forget…) so the queue appears as old tasks at the top and new tasks at the bottom.

##### Priorities

Priorities are tracked only through the task’s icons. Could be improved to make it more visible when a task is really urgent.

##### Automatic rollover

The other thing I’m using is an automatic rollover to continuously track my tasks in a single file in the daily note. This is required so tasks aren’t duplicated. I did this by hand for a while, but got bored of coping over tasks and now I do it automatically.

#### Projects

Projects play a big part in my todo organization. Projects will track larger entities in my life, but mostly coding work I’m aiming to do. A project contains a lot more information and usually further notes and todos for said project.

This is, for example, the project page for the [external-secrets](https://external-secrets.io) that I’m a maintainer off: 

For example, the Bitwarden project page contains a LOT of information regarding the dev flow and information about Bitwarden and the things I found, etc… Basically it bundles todos and information as they come.

This way, it’s super easy to retrieve information later on if I would require to fix something or lookup something.

#### The Routine

The routine is pretty basic and it allows for lapses. For example, if I forget to track a task, I’ll just add it later to the daily. Or if I forget to tick a task, I’ll just tick it later. But it must be followed nevertheless, otherwise the system doesn’t add too many benefits. My flow is simply:

Sometimes, I will also check them during the day especially if I complete something, then I will check and take another task.

#### Plugins and Theme

I’m using the Theme [Primary](https://github.com/primary-theme/obsidian). And I’m trying to use as few plugins as possible:

* [auto rollover](https://github.com/lumoe/obsidian-rollover-daily-todos)
* [buttons](https://github.com/shabegom/buttons)
* [calendar](https://github.com/liamcain/obsidian-calendar-plugin)
* [dataview](https://github.com/blacksmithgu/obsidian-dataview)
* [iconize](https://github.com/FlorianWoelki/obsidian-iconize)
* [projects](https://github.com/marcusolsson/obsidian-projects)
* [tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)
* [excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)

There are some others but these are the relevant ones.

#### Conclusion

That’s about it. The system isn’t perfect but it works for me right now. It could be improved in places and it doesn’t have reminders which is a really important thing for some tasks that are time-sensitive.

Also could have a better representation of the QUEUE nature of tasks. Right now, it all lives in my head pretty much and the grouping could reflect this behaviour.

For now, this is it.

Thank you for reading!

 [comments powered by Disqus](https://disqus.com)
