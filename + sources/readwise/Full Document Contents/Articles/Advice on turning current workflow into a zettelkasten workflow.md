---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
Advice on turning current workflow into a zettelkasten workflow? by reddit.com

![rw-book-cover](https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png)

## Metadata
- Author: [[reddit.com]]
- Real Title: Advice on turning current workflow into a zettelkasten workflow?
- Category: #Source/articles
- Summary: The Zettelkasten system's original concept of using multiple boxes for notes is less necessary in digital formats, where search capabilities are fast and efficient. To avoid confusion and duplication, it's better to use fewer folders and adopt clear naming conventions for notes. For finding notes easily, utilize features like quick switcher and aliases, and consider writing out full names instead of abbreviations.
- URL: https://www.reddit.com/r/ObsidianMD/comments/16h7ul3/comment/k0colig/
- Author: [[reddit.com]]
- Imported: [[2025-08-25]] from reader
- Link: https://www.reddit.com/r/ObsidianMD/comments/16h7ul3/comment/k0colig/

## Full Document
Another example of how the Zettelkasten system verbatim is obsolete digitally would be using multiple kasten. Luhmann had 2 types of kasten, but there were multiple "boxes" of these 2 types, because notes on paper had to take up physical space. This was also the reason notes in the original were more atomic (smaller) because they to be highly indexed both by zettel ID's and by kasten to facilitate search / retrieval.

But as mentioned above, computers are fast enough with search anyway, able to do billions of operations (Ghz) a second and so, there's no need split things into multiple boxes (vaults / folders). In fact doing so could be considered a disadvantage. Why? Because different folders allow you to have files with the same name, and even the same content... that's just how the file system is. But *duplication is bad* in the context of personal knowledge management, and should be avoided. As stated quick switcher and links will fuzzy search, but as a second measure, the less folders you use, the less chance there is of this happening.

My own workflow uses that concept, 2 folders (💲Bank , ⚗️Lab) you can read more about it here:

<https://www.reddit.com/r/ObsidianMD/comments/16g4f37/new_user_q_multiple_vaults_or_one_vault/k07zxpo/>

>   **How do you set it up so that you can find notes again? I already can’t find old notes in my vault without using the search feature, and it drives me crazy.** 
> 
>  

Quick switcher and aliases, are the method to find notes. Because Obsidian does something with them internally (probably a hash table) so regardless how a vault grows, even if there's thousands of notes, this feature should always be speedy.

Catch is, you actually need to know in advance what to type to trigger and fuzzy match, that is, it's not as advanced as google search. Maybe in future it'll get "smarter", but right now it can't ask `did you mean?`.

Therefore it might be worth looking into some human readable naming conventions you can use for consistency and make things easier. One rule i use myself:

If a note title can be an acronym (SCUBA, NASA) or initialism (CIA, NSA) *don't* use it as the file name or H1 heading. Write the full name out (National Security Agency) and *alias* the abbreviation.

This means if for whatever reason i can't use Obsidian, even if i'm just in the file browser, i can look at a note and know what it refers to, without having to look up what an abbreviation means.

Here are some doc styleguides that can give you ideas

* Adobe : [Grammar and mechanics](https://spectrum.adobe.com/page/grammar-and-mechanics/)
* Google : [dev docs styleguide](https://developers.google.com/style)
* Digital Ocean : [Technical Writing Guidelines](https://www.digitalocean.com/community/tutorials/digitalocean-s-technical-writing-guidelines) (markdown specific)

>   **I want to journal using a zettelkasten system, I think it would be a really great idea. Does anyone do this? What does this kind of journaling look like for you?** 
> 
>  

Can't really help you on this one, because i don't really use it in that way. I just rely on the metadata in files to infer things e.g. the created, last modified dates, released (date i published the note) + whatever dataview properties are in a note.
