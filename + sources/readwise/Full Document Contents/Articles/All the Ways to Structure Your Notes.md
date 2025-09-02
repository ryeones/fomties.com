---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
All the Ways to Structure Your Notes by Denis Volkov

![rw-book-cover](https://miro.medium.com/v2/resize:fit:1200/1*uQLGSbbB2TWNX7hNYpWYgg.png)

## Metadata
- Author: [[Denis Volkov]]
- Real Title: All the Ways to Structure Your Notes
- Category: #Source/articles
- Document Tags:  #apple notes  #file management  #notetaking  #notion  #obsidian  #personal knowledge management  #productivity  #second brain 
- Summary: Organizing and structuring notes in a personal knowledge management (PKM) system is essential for efficient information retrieval. This article explores various methods, including folders, tags, backlinks, and note properties, for organizing notes in applications like Obsidian. Folders provide a simple and focused way to categorize notes, but may limit flexibility and exploration. Tags offer fast filtering and the ability to assign multiple categories to a note, but can become inconsistent or subjective if not managed properly. Backlinks create connections between related notes and allow for easy navigation, while note properties offer the potential to create a database-like structure but require more effort to maintain. Ultimately, the best approach depends on individual preferences and needs.
- URL: https://medium.com/@paralloid/all-the-ways-to-structure-your-notes-cf809b411b13
- Author: [[Denis Volkov]]
- Imported: [[2025-08-25]] from reader
- Link: https://medium.com/@paralloid/all-the-ways-to-structure-your-notes-cf809b411b13

## Full Document
#### Exploring Sorting Methods in Your Personal Knowledge Management System

![](https://miro.medium.com/v2/resize:fit:700/1*7zDZlKbIRuHx8U3DHksLHA.png)
#### **Introduction**

In a personal knowledge management (PKM) system, organizing and sorting your notes is crucial for efficient information retrieval and discovery. Various applications offer various methods to structure and categorize your notes, including tags, folders, backlinks, and even YAML metadata.

To me, these represent the “technical basis,” on top of which one would be building all the logical structures for his workflows as required.

But *when* to use which of these — I am yet to find out…

I hope to explore these sorting methods in this article and outline their benefits, use cases, and differences in simple examples. By understanding these methods, we can optimize our PKM systems to suit the best workflows for us.

#### Setup

Let’s take Obsidian, 3 notes — Apples, Oranges, Pears — and 4 ways to categorize them — Folders, Tags, Backlinks, YAML. As simple as that.

#### Folders

Alright, let’s start with something basic. Let’s put all our fruits in the folder “Fruits”:

![](https://miro.medium.com/v2/resize:fit:700/1*mM0LEiWUIOvA8ZHHhaESBw.png)
What can we say about this way of sorting our records?

1. First, all fruits now reside in *one place* and nowhere else.
2. This structure is *Mutually Exclusive & Collectively Exhaustive*. It means that none of the Apples are Oranges or Pears, and collectively, they represent ALL the fruits I have in my collection. There are no more fruits left outside. [Read here](https://medium.com/@paralloid/types-of-information-and-mece-principle-ccc33f823809) for why it is important, and what’s special about it.
3. This setup allows *focus*. When I open the folder Fruits, I see only Fruits and nothing else.
4. Also, Folders are universal containers — they are widely used across *thousands of tools*. The structure I have here can easily be repeated almost anywhere else — on the filesystem, in my mailbox, in the cloud, and external storage, etc.
5. On the other hand, this structure is simple and shows only *1 criterion* at a time. Fruits are fruits, y’know.
6. It is *not flexible* — I may not adequately capture the complex relationships and connections between different fruits or their qualities. It may limit the ability to explore cross-cutting themes or overlapping categories (e.g., color of fruits).
7. The only way to expand — new levels of hierarchy. Which may make the whole system very heavy and hard to navigate.

#### **Tags**

Ok, now, what if we put a tag #fruits on our notes instead:

![](https://miro.medium.com/v2/resize:fit:700/1*Tz-0Wm_tglRH1ugScRyMEA.png)
Immediately I am able to get all the Fruits just by clicking on the relevant tag (from within the note “Oranges”, btw).

Very fast!

And it works this way in almost any application that supports tags. Lightning-fast filtering.

1. I would name the *speed* of filtering as a first advantage.
2. Next, *flexible* categorization. With the help of tags, a note may easily belong to multiple concepts simultaneously. For example, Oranges may have #fruits, #round, #orange, and #citrus assigned at the same time!
3. Unlike folders, tags do not have a strict hierarchical structure. This allows for more *fluid and dynamic organization*, as notes can be associated with different tags based on various criteria or perspectives.
4. Granular categorization: Tags enable you to create more *specific and granular categories*. You can create tags based on different *attributes* of fruits, such as taste, color, origin, allowing for more detailed organization and exploration. Folders would just not fit here.
5. However, without careful management, tags can become *inconsistent or redundant*, leading to confusion or difficulty finding relevant notes. Sometimes, this begs for clear guidelines for tag usage, periodical reviews, and refining your tag system.
6. While tags make it easier to retrieve notes, heavily relying on search can sometimes lead to *information overload* or *missed connections*. In the case of folders, you just drag the note from one place to another — and you’ll be sure you’ll get the result you want.
7. It’s not specific to tags and is not a “weakness” per se, but I have to mention that tags are *subjective*. They may depend on individual interpretation. And if everything is more or less simple and clear in our case of Fruits, sometimes things may get really weird — you may even find out that *your* notes from 2–3 years ago are tagged differently! Now, imagine you’re trying to use tags in collaborative work…

In my view, tags’ biggest strength is their **ability to be combined**. And folks at Apple have figured this out — immediately after rolling out tags to Apple Notes, they introduced *Smart Folders*. This is where the synergy is.

#### **Linking**

What else can we do? Let’s see if we link *Apples*, *Oranges*, and *Pears* to the *Fruits* note:

![](https://miro.medium.com/v2/resize:fit:700/1*NJlkGAlCeOUZb1vO3iQ1jA.png)
Awesome — this is how backlinks work! I see all the fruits in one place (“Linked mentions”) AND I still can put text about the Fruits themselves! Why would I ever need folders again?.. But wait, if it works both ways — maybe I should have listed *Apples*, *Oranges* and *Pears* in the body of the *Fruits* note??.. What should I do, doctor?

There’s no answer to it. It will always be a matter of personal preference.

Personally, I follow the principle of linking *smaller items* to *bigger concepts*, and not the other way around. Logically, you’ll be creating smaller items more often than the bigger ones. It would be easier to create a note “Italy” and link it to “Europe” to see it there (in Europe), rather than creating a note “Italy”, then going to note “Europe”, and typing “Italy” again to make a connection. It’s weird...

It is not that critical in the same-level concepts, though, as I understand.

Anyways:

1. Backlinks create *connections between related notes*, allowing for easy navigation and exploring interconnected ideas.
2. They provide a more dynamic and non-hierarchical way of organizing information, as notes can be linked in *multiple directions*. They allow one-to-many and many-to-one connections.
3. Backlinks enable you to trace the *evolution of thoughts* and see the relationships between different concepts over time. For example, they can work well if you have a note “Today” and put a link to a note “Tomorrow” from it. This way, from the inside of the note “Tomorrow,” you can quickly see how it differs from “Today.” …Which would be “Yesterday” by this moment, but you got me… you got me, right?..
4. Backlinks offer flexibility in organizing and structuring your knowledge base, as notes can be linked based on *various criteria* or perspectives.
5. They can also help uncover *hidden connections and associations* between notes that may not be immediately apparent. This will be especially visible in the long run.
6. However, *what* to link and *when* — is a verrrrrrrry complex question. Nowadays, there are even full-time coaching jobs out there! People are doing training courses devoted *to exactly that* — teaching people how to link their notes most effectively — either to spark new ideas or reach productivity zen.

In terms of backlinks, one hidden gem you may see in the applications that support it — ***un****linked mentions*. There might be cases when you look for some particular partner company name and then realize you have a whole conversation history or a meeting notes archive related to it — all through the “unlinked mentions” section in Obsidian or Bear Notes. True gold.

#### Properties

Ok, now, let’s move to the most interesting, complex and nerdy part - *Note Properties.* This is how it looks like in Obsidian:

![](https://miro.medium.com/v2/resize:fit:700/1*VSoF-ZHyDA6DsU0bn2iZmA.png)
This property alone is almost useless. But what we’ve done here is something really important — we have just made a significant step towards making our note collection…

> **a Database**.
> 
> 

But to get full value out of properties in apps like Obsidian, we need to be able to extract this information in various shapes and forms. And more often than not, this is not something you get out of the box.

In Obsidian, there is a plugin called Dataview that allows you to do exactly that — query your whole notes mess based on specific criteria in notes’ *Properties* (and not only in them).

Let’s do some entry level Dataview select:

![](https://miro.medium.com/v2/resize:fit:700/1*vFgjc9uJGsHi8Yh51P9VeA.png)
…which results in:

![](https://miro.medium.com/v2/resize:fit:700/1*g8h2N3tCKG15H1TspgdVQg.png)
So, we’ve just listed all the notes of Type = Fruits *within the body* of our note (in this case — Fruits, but that’s totally optional) in the form of a *Table*.

Are you excited?! Probably not.

But wait a sec — let’s add stuff in there. Let’s add a new property, **Color,** to all of our Fruits:

![](https://miro.medium.com/v2/resize:fit:700/1*EZJsP5_mWGgtJ6VMrOi5nQ.png)
And then adjust the select on the Fruits page to include it:

![](https://miro.medium.com/v2/resize:fit:700/1*bM7xvanEFFHX5iPu-vvGRw.png)
Now we have a bit more information about our Fruits:

![](https://miro.medium.com/v2/resize:fit:700/1*XFeQDdd3lnH0UgmKZ4t8yQ.png)
So, as you can see, Properties stand far-far away from tags both in terms of the efforts needed to make something meaningful out of them, and the quality of the results you achieve.

If you can get the properties right (and you have enough time for their further maintenance), you can manage your information at literally any level of complexity and any number of perspectives. This is truly awesome functionality, especially for massive collections.

But you probably have to do it as a full-time job.

> **The challenge is — obviously — to keep the balance.**
> 
> 

#### Surprise

While the idea of properties is very tempting for me, I have to admit I consistently fail to maintain this whole metadata story at a level that would allow me to continuously get value out of my PKM system. To me, it is a way to build fancy dashboards and summarizing hub pages, but…I am probably not in a big need of those. Tags, folders, and backlinks are basically everything I use.

But if we’re completely honest, the most used feature of them all is…

> Search!
> 
> 

That’s still the best thing for me. I’d rather put some extra keywords right in the note body, which will make it pop up in the search results, than fiddle around with the dataview requests. Surprisingly, we often forget that CMD+O, CMD+SPACE, or CTRL+F are the fastest ways to get us where we want to be.

![](https://miro.medium.com/v2/resize:fit:700/0*QLAeNweKSfI4f3eh)I think that’s where this meme is coming from. Make your info extractable . 
#### Summary

Anyways, jokes aside, the whole purpose of *all* those categorizing methods is exactly to make the information you need **extractable**.

And if the Grandpa’s Search is a well-known (and still effective) character, it doesn’t mean the World’s stuck in 1957. Let’s still look at the table summarizing the differences between the modern methods of sorting the information:

![](https://miro.medium.com/v2/resize:fit:700/1*eomRjylSJ3-MRUn14AWLFA.png)
Obviously, this is only a general overview of the sorting methods. Specific implementation and effectiveness of these methods may vary depending on your PKM system or software. I strongly suggest experimenting and finding the best approach for your needs and preferences.

It’s also worth noting that these methods are not mutually exclusive and can be combined to create a more comprehensive and personalized organization system.

One of the ideas might worth trying — go all-in with *one* method and see where you reach its limits. If you choose backlinks — do backlinks, and nothing else. You’ll see where the need in folders appear in your particular case. The same goes for tags.

> Stick to one method for as long as possible to see its limits for your particular case.
> 
> 

And for a full-blown-properties-based setup — just make sure you have enough time, I’d say ;)

I’d love to discuss your experience — what works best for your use case? Do you prefer completely flat structure fully relying on search, or do you use a fancy combination of methods in your workflows?
