this is a snippet to use when making changes to my website

```
cd ~/my-digital-garden


bundle exec jekyll serve --livereload --port 4000
  

git add --all
  

git commit -m 'Update content'
  

git push -u origin main
```

1. the first line navigates to my vault folder on my computer
2. the second line creates a preview on my local host
	1. this allows me to make changes in obsidian or vscode without having to fully push to github for changes on my actual domain
	2. the changes will be made on a preview on that local host website
3. the next three lines are when i decide to push changes to the actual website

---

here is chatgpt's version in [[explain like i'm five]] terms

```
cd ~/my-digital-garden
```

➡️ _“go into my toy box.”_

this tells the computer: _“switch to the folder where my website lives.”_ without this, the computer doesn’t know which project you’re working on.

---

```
bundle exec jekyll serve --livereload --port 4000
```

➡️ _“build a lego castle on my desk before putting it outside.”_

this starts a mini copy of your website **only on your computer** (at http://localhost:4000).

- --livereload means _“if I change something, refresh the castle automatically.”_
    
- --port 4000 means _“show it at door number 4000 on my computer.”_
    

so you can play with changes safely before showing the world.

---

```
git add --all
```

➡️ _“gather all my toys into a basket.”_

this takes every change you made (new pages, edits, deleted stuff) and prepares them to be saved.

---

```
git commit -m 'update content'
```

➡️ _“write a note saying what’s in the basket.”_

this makes a snapshot of your changes and attaches a message ('update content') so future-you knows what changed.

---

```
git push -u origin main
```

➡️ _“send the basket to the cloud toy shelf.”_

this uploads your snapshot from your computer to github (your online storage).

- origin = the shelf name (your github repo).
    
- main = the main branch (your main shelf).
    

once here, netlify (your host) notices and updates your real website.