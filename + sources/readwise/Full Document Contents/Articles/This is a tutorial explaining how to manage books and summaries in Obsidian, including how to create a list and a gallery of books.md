---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
This is a tutorial explaining how to manage books and summaries in Obsidian, including how to create a list and a gallery of books by https://www.facebook.com/trankill

![rw-book-cover](https://www.dsebastien.net/content/images/size/w1200/2024/07/How-I-manage-books-and-summaries-in-Obsidian---final-books-gallery.png)

## Metadata
- Author: [[https://www.facebook.com/trankill]]
- Real Title: This is a tutorial explaining how to manage books and summaries in Obsidian, including how to create a list and a gallery of books
- Category: #Source/articles
- Document Tags:  #personal knowledge management 
- Summary: This tutorial explains how to manage books and summaries in Obsidian, offering a method to track reading progress and organize notes. The author shares their experience of switching from Goodreads to Obsidian for better knowledge management and provides steps to create a book list and gallery using specific plugins. With this system, users can centralize their book notes, connect ideas, and even publish their summaries.
- URL: https://www.dsebastien.net/how-i-manage-books-and-summaries-in-obsidian/
- Author: [[https://www.facebook.com/trankill]]
- Imported: [[2025-08-25]] from reader
- Link: https://www.dsebastien.net/how-i-manage-books-and-summaries-in-obsidian/

## Full Document
This is a tutorial explaining how to manage books and summaries in Obsidian, including how to create a list and a gallery of books

[![Sebastien Dubois](https://www.dsebastien.net/content/images/size/w160/2022/09/Seb-2022.jpg)](https://www.dsebastien.net/author/dsebastien/)
###### [Sebastien Dubois](https://www.dsebastien.net/author/dsebastien/)

Jul 6, 2024 — 24 min read

![How I manage books and summaries in Obsidian](https://www.dsebastien.net/content/images/size/w2000/2024/07/How-I-manage-books-and-summaries-in-Obsidian---final-books-gallery.png)My gallery of books in Obsidian
[Develop and launch modern apps with MongoDB Atlas, a resilient data platform.](https://server.ethicalads.io/proxy/click/7413/1cacf42d-edd3-4c85-9e50-45dc8b04f361/)

[Ads by EthicalAds](https://www.ethicalads.io/advertisers/?ref=ea-text)

In this article, I explain how I now manage books and summaries in Obsidian. I discuss why I've switched from Goodreads to Obsidian, and why it's a great improvement to my Knowledge Management system.

#### Introduction

I've been a frustrated user of [Goodreads](https://www.goodreads.com/?ref=dsebastien.net) for many years. Since they were acquired by Amazon, they've stopped evolving, and what once was an innovative web app became a dark corner of the Web.

Meanwhile, I've been using Obsidian more and more. It has already replaced many apps I was using previously. I've also started centralizing my book notes and summaries in Obsidian, and kept thinking about using metadata to track the books I want to read, those I'm busy reading, and those I've finished reading. Combining the library side with the summaries felt like a winning move.

I've now achieved my goal, and designed a cool system in Obsidian to track all my books and summaries. I've combined properties, plugins, and created a cool dashboard I can use to track my progress, and choose what to read next. I'll cover the implementation details in this post.

Now that it's there, all that I have left to do is to actually migrate my book library from Goodreads to Obsidian. And that [might take a while...](https://www.goodreads.com/review/list/1464327?ref=nav_mybooks) ;-)

PS: This system will soon be part of the [Obsidian Starter Kit](https://developassion.gumroad.com/l/obsidian-starter-kit?layout=profile&ref=dsebastien.net)

[![](https://public-files.gumroad.com/39uqrcaxowvpvf4srzeq97jpcecb)![](https://public-files.gumroad.com/zdjaf5bt0gfgsyljxmc3hoeaxv8l)](https://developassion.gumroad.com/l/obsidian-starter-kit?layout=profile&ref=dsebastien.net)[Gumroad](https://developassion.gumroad.com/l/obsidian-starter-kit?layout=profile&ref=dsebastien.net) 
#### Why leave Goodreads and similar apps?

There are multiple reasons why I wanted to get away from Goodreads. Some of those apply to other tools as well. First of all, as I said, Goodreads hasn't improved in many years. It's just one more channel for Amazon to sell books. Yes, it has some use, such as discovering new books, reading user reviews, etc. But those advantages come at a price: one more information silo to maintain. And in practice, I can get those benefits without having to centralize my book library over there.

Second, there's a lot of value in centralizing knowledge in a single tool such as Obsidian: the ability to connect ideas. Having book notes and book summaries in Obsidian, I can connect the ideas in my summaries with other notes in my system, enabling me to actually build upon and leverage the knowledge I have acquired.

Third, it means I have one less app to care about, and as I've [argued before](https://www.dsebastien.net/in-defense-of-using-fewer-tools/), fewer apps means fewer worries, and fewer integration issues.

Last but not least, Goodreads and other similar apps could disappear anytime, and I would either lose my data, or be forced to find ways to migrate it. Now that I have full control over my data, nothing/noone can take it away from me.

#### Overview

Here's a quick overview of the solution:

![](https://www.dsebastien.net/content/images/2024/08/image.png)Books gallery in Obsidian
The same information can also be seen as a data table:

![](https://www.dsebastien.net/content/images/2024/08/image-1.png)Books list in Obsidian
To achieve this, I've combined:

* The Book Search plugin for Obsidian: [https://github.com/anpigon/obsidian-book-search-plugin](https://github.com/anpigon/obsidian-book-search-plugin?ref=dsebastien.net)
* The Projects plugin for Obsidian: [https://github.com/marcusolsson/obsidian-projects](https://github.com/marcusolsson/obsidian-projects?ref=dsebastien.net)
* The Templater plugin for Obsidian: [https://github.com/SilentVoid13/Templater](https://github.com/SilentVoid13/Templater?ref=dsebastien.net)
* A custom book template

The Book Search plugin is the one responsible for fetching all the metadata about books (it uses an API of Google to do so), and for creating book notes containing all the information (including the book cover when available).

The Projects plugin makes it a breeze to create dashboards and galleries.

Finally, the Templater plugin enables creating very powerful and versatile templates.

#### Pre-requisites

Simply install, and enable all the plugins I've listed in the previous section.

#### Create the book template

The Book Search plugin relies on a Templater template to create new notes and insert the metadata it has fetched.

Go ahead, and create a new template file. I've called mine "TPL Book Note". Add the following content to it:

```
<%"---"%>
<%*" <!-- Statuses: To Read, Reading, Read, To Read Again, References --> "%>
status: To Read
title: "{{title}}"
subtitle: "{{subtitle}}"
description: "{{description}}"
categories: [{{category}}]
authors: [{{author}}]
published_on: {{publishDate}}
publisher: {{publisher}}
pages: {{totalPage}}
isbn: {{isbn10}}
cover: {{coverUrl}}
local_cover: {{localCoverImage}}
link: 
tags:
- book_notes
- books
- summaries
<%"---"%>

# <% tp.file.title %>
- Author(s): {{author}}
- Link: 

![[{{localCoverImage}}|200]]

# Brief description

# Key quotes
> ...

# Key ideas
...

# Chapter 1: ...
...

## References
- 

```

You can of course customize it as you wish. Note that all the `{{...}}` blocks are specific to the Book Search plugin. You can find the full list of supported variables [here](https://github.com/anpigon/obsidian-book-search-plugin?tab=readme-ov-file&ref=dsebastien.net#template-variables-definitions).

Also, notice that I have decided to use the following values for the `status` property:

* To Read
* Reading
* Read
* To Read Again
* References

Again, don't hesitate to use something else if you want.

Note that this template is one of the many that are included in the Obsidian Starter Kit:

[![](https://public-files.gumroad.com/39uqrcaxowvpvf4srzeq97jpcecb)![](https://public-files.gumroad.com/zdjaf5bt0gfgsyljxmc3hoeaxv8l)](https://developassion.gumroad.com/l/obsidian-starter-kit?layout=profile&ref=dsebastien.net)[Gumroad](https://developassion.gumroad.com/l/obsidian-starter-kit?layout=profile&ref=dsebastien.net) 
#### How to configure the Book Note plugin

Now that your template is created, go to the settings of the Book Note plugin, and configure the following parameters. I've listed my own values, but adapt those based on your own needs:

* New file location: 30 Areas/32 Literature notes/32.03 Book notes
	+ That's where new book notes will be created
* New file name: {{title}} (book)
	+ That's how the book notes will be named. For example: "Essentialism (book)"
	+ You can find the list of possible parameters [here](https://github.com/anpigon/obsidian-book-search-plugin?tab=readme-ov-file&ref=dsebastien.net#new-file-name)
* Template file: 50 Resources/54 Templates/TPL Book Note.md
	+ Where the template to use is located
* Locale: English
* Disabled "Ask for locale"
	+ I only want English book notes, but if you want, you can also select the locale each time
* Enabled "Cover Image Save"
	+ I want the plugin to save a copy of the book cover in my vault
* Cover image path: 50 Resources/51 Attachments
	+ Where the cover image should be saved in your vault

#### How to create a new book note

To add a new book note to your vault, you can click on the book icon in the left toolbar, or invoke the "Book Search: Create new book note" command:

![](https://www.dsebastien.net/content/images/2024/08/image-2.png)Command used to create a new book note
After that, just type in the name of the book and select the one you want from the list of suggestions:

![](https://www.dsebastien.net/content/images/2024/08/image-3.png)Book selection using the plugin
If you don't find the right book, search again, and add the author's name.

Once you confirm, the Book plugin will fetch the necessary information, create the new note, and use the template. The new book note should look like this:

![](https://www.dsebastien.net/content/images/2024/08/image-4.png)Book note created using the plugin
Now, you have an easy way to add new books to your vault. You can write your summaries in those book notes, and connect the ideas with the rest of your knowledge base. Cool!

The awesome part is that you can also easily [publish those book notes and summaries](https://notes.dsebastien.net/30+Areas/32+Literature+notes/32.03+Book+notes/Arr%C3%AAtez+d'Oublier+ce+que+vous+Lisez+(book)?ref=dsebastien.net) using Obsidian Publish.

#### How to create a book list

Now that you have book notes, you can create a book list. I've chosen to create mine using the Projects plugin for Obsidian. That plugin makes it a breeze to create data tables and galleries based on the metadata present in your notes. I use that plugin for my books, but also for the articles and videos I'm preparing, my ongoing projects (e.g., the [Knowledge Management course](https://developassion.gumroad.com/l/knowledge-management-for-beginners?layout=profile&ref=dsebastien.net)), etc.

[![](https://public-files.gumroad.com/39uqrcaxowvpvf4srzeq97jpcecb)![](https://public-files.gumroad.com/a3ugnkk3iovmofjtn2m2syk7qukm)](https://developassion.gumroad.com/l/knowledge-management-for-beginners?layout=profile&ref=dsebastien.net)Creating a new project for books 
Assuming you have installed the Projects plugin, you should now be able to open it using the "Open Projects" button in the left sidebar, or using the "Projects Show projects" command (CTRL/CMD + P):

![](https://www.dsebastien.net/content/images/2024/08/image-5.png)Creating a new project for books 
Once you're in Projects, you can click on the "Create new project" button in the top left corner. This will open the following dialog:

![](https://www.dsebastien.net/content/images/2024/08/image-6.png)Creating a new project for books
You can see how I've configured mine above. Note that I've used a "Folder" as data source, and set the path to the folder where I store my book notes.

After hitting the "Create project" button, I got this table:

![](https://www.dsebastien.net/content/images/2024/08/image-7.png)Book table (raw)
Quite cool already, but a bit too crowded. Luckily, you can easily customize that table.

First, you can hide some fields using the "Hide fields" drop-down in the top right corner. I've decided to hide the following fields:

* Path
* Categories
* Cover
* Created
* ISBN
* Local Cover
* Public note
* Published on
* Publisher
* Subtitle
* Tags
* Title
* Updated

Second, you can modify the sort order. I've decided to sort by "Status", from Z to A, in order to have the books I have yet to read displayed first.

This is what the end result looks like:

![](https://www.dsebastien.net/content/images/2024/08/image-8.png)Books table, refined
That's much better!

#### How to create a book gallery

A table view is quite nice, but a gallery is way better. Using the Projects plugin, you can also create one. To do so, click on the "+" on top, next to the Table drop-down, in order to create a new view of the same information:

![](https://www.dsebastien.net/content/images/2024/08/image-9.png)Adding the book gallery view 
This will open the "Add new view" dialog:

![](https://www.dsebastien.net/content/images/2024/08/image-10.png)Book gallery view creation screen
Then, customize that view to make it look better, and show the right information.

First, set the cover (top right) to `local_cover` (assuming you also save the book covers locally):

![](https://www.dsebastien.net/content/images/2024/08/image-11.png)Gallery cover property
Second, configure the cover to "Fit Image":

![](https://www.dsebastien.net/content/images/2024/08/image-12.png)Cover image configuration 
Third, include the fields you want on the gallery cards. I have decided to include the following ones:

* Authors
* Description
* Pages
* Status
* Tags

Finally, you can also set the sort order. Once again, I have sorted the results by "Status", from Z to A.

And tadaaaa, a beautiful books gallery:

![](https://www.dsebastien.net/content/images/2024/08/image-13.png)Book gallery once fully configured
I don't know about you, but I just love this gallery.

#### Conclusion

There you have it, a simple way to add book notes to your Obsidian vault, with all the metadata, cover images, etc. And a project with a data table view and a beautiful gallery view.

Now, you can also get rid of Goodreads and similar apps.

If you liked this article, then you might also want to take a look at the [Obsidian Starter Kit](https://developassion.gumroad.com/l/obsidian-starter-kit?ref=dsebastien.net), which is a powerful Obsidian vault, full of plugins, templates, automation, and accompanied by a detailed user guide. That system is a 1:1 copy of mine. It has stood the test of time, scales really well, and is used by hundreds of happy customers.

#### References

While exploring this, I've taken inspiration from various sources:

* [https://www.reddit.com/r/ObsidianMD/comments/13yf4ss/obsidian\_library\_how\_to\_keep\_track\_of\_your\_books/](https://www.reddit.com/r/ObsidianMD/comments/13yf4ss/obsidian_library_how_to_keep_track_of_your_books/?ref=dsebastien.net)
* [https://www.youtube.com/watch?v=7PFFJlyiv28](https://www.youtube.com/watch?v=7PFFJlyiv28&ref=dsebastien.net)
* [https://thebuccaneersbounty.wordpress.com/2021/08/21/tutorial-how-to-create-a-bookshelf-in-obsidian/](https://thebuccaneersbounty.wordpress.com/2021/08/21/tutorial-how-to-create-a-bookshelf-in-obsidian/?ref=dsebastien.net)
* [https://forum.obsidian.md/t/bookshelf-by-dataview-with-conditional-clause-for-images-from-two-sources-is-it-possible/67785](https://forum.obsidian.md/t/bookshelf-by-dataview-with-conditional-clause-for-images-from-two-sources-is-it-possible/67785?ref=dsebastien.net)
* [https://www.youtube.com/watch?v=\_3MSwW51BhU](https://www.youtube.com/watch?v=_3MSwW51BhU&ref=dsebastien.net)
* [https://medium.com/obsidian-observer/obsidian-library-how-to-keep-track-of-your-books-with-book-search-and-projects-plugins-716599633715](https://medium.com/obsidian-observer/obsidian-library-how-to-keep-track-of-your-books-with-book-search-and-projects-plugins-716599633715?ref=dsebastien.net)

#### About Sébastien

I am [Sébastien Dubois](https://www.dsebastien.net/about/). You can [follow me on X](https://x.com/dSebastien)) 🐦

I am an author, founder, and coach. I write books and articles about [Knowledge Work](https://www.dsebastien.net/tag/knowledge-work/), [Personal Knowledge Management](https://www.dsebastien.net/tag/personal-knowledge-management/), [Note-taking](https://www.dsebastien.net/tag/note-taking/), Lifelong Learning, [Personal Organization](https://www.dsebastien.net/tag/personal-organization/), and Zen [Productivity](https://www.dsebastien.net/tag/productivity/). I also craft lovely digital products . You can learn more about my projects [here](https://www.dsebastien.net/projects/).

If you want to follow my work, then [become a member](https://www.dsebastien.net/how-i-manage-books-and-summaries-in-obsidian/#/portal/signup).

#### Ready to get to the next level?

To embark on your Knowledge Management journey, consider investing in resources that will equip you with the tools and strategies you need. You can start by exploring the concepts and best practices with my [Knowledge Management course](https://developassion.gumroad.com/l/knowledge-management-for-beginners) 🔥.

Then, check out the [Obsidian Starter Kit](https://developassion.gumroad.com/l/obsidian-starter-kit) and the [accompanying video course](https://developassion.gumroad.com/l/obsidian-starter-course). It will give you a rock-solid starting point for your note-taking and Knowledge Management efforts.

If you want to take a more holistic approach, then the [Knowledge Worker Kit](https://developassion.gumroad.com/l/knowledge-worker-kit) is for you. It covers PKM, but expands into productivity, personal organization, project/task management, and more:

[![](https://public-files.gumroad.com/39uqrcaxowvpvf4srzeq97jpcecb)![](https://public-files.gumroad.com/soezrho2f78afs46f7n148mfah2n)](https://developassion.gumroad.com/l/knowledge-worker-kit)[Gumroad](https://developassion.gumroad.com/l/knowledge-worker-kit) 
If you are in a hurry, then do not hesitate to [book a coaching session with me](https://developassion.gumroad.com/l/pkm-coaching):

[![](https://public-files.gumroad.com/39uqrcaxowvpvf4srzeq97jpcecb)![](https://public-files.gumroad.com/zx5o75oood282lidm5a0ze0nb7zb)](https://developassion.gumroad.com/l/pkm-coaching)[Gumroad](https://developassion.gumroad.com/l/pkm-coaching) 
Do not forget to [join the Personal Knowledge Management community](https://www.dsebastien.net/2021-11-12-personal-knowledge-management-community/).

#### Sign up for Sébastien Dubois

Explore Knowledge Work and Knowledge Management with me ❤️

Email sent! Check your inbox to complete your signup.

No spam. Unsubscribe anytime.

  [![DeveloPassion's Newsletter #175 - FLUX.1](https://www.dsebastien.net/content/images/size/w2000/format/webp/2024/08/DeveloPassion-s-Newsletter-cover-@-Ghost-2.png)  ##### DeveloPassion's Newsletter #175 - FLUX.1

 Edition 175 of my newsletter, discussing Knowledge Management, Knowledge Work, Zen Productivity, Personal Organization, and more!

 Aug 25, 2024](https://www.dsebastien.net/developassions-newsletter-175-flux-1/)   [![Pick a tool, and stick with it](https://www.dsebastien.net/content/images/size/w2000/format/webp/2024/08/001.jpg)  ##### Pick a tool, and stick with it

 Stop chasing the perfect tool—embrace the one that works well enough, use it for long enough, and focus on mastering it

 Aug 23, 2024](https://www.dsebastien.net/pick-a-tool-and-stick-with-it/)   [![Advice for people getting started with Knowledge Management and Writing](https://www.dsebastien.net/content/images/size/w2000/format/webp/2024/08/Advice-for-people-getting-started-with-PKM---writing-is-thinking.png)  ##### Advice for people getting started with Knowledge Management and Writing

 Many people quickly become overwhelmed when they get started with note-taking and knowledge management. Here's how to avoid that.

 Aug 20, 2024](https://www.dsebastien.net/advice-for-people-getting-started-with-knowledge-management-and-writing/)   [![DeveloPassion's Newsletter #174 - Aftermath](https://www.dsebastien.net/content/images/size/w2000/format/webp/2024/08/DeveloPassion-s-Newsletter-cover-@-Ghost-1.png)  ##### DeveloPassion's Newsletter #174 - Aftermath

 Edition 174 of my newsletter, discussing Knowledge Management, Knowledge Work, Zen Productivity, Personal Organization, and more!

 Aug 17, 2024](https://www.dsebastien.net/developassions-newsletter-174-aftermath/)
