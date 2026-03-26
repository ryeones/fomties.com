# fomties — site guide

This is the source repo for **fomties.com**, built with [Quartz v4](https://quartz.jzhao.xyz/) (specifically [Aaron's fork](https://github.com/aarnphm/aarnphm.github.io)).

Content lives in `content/`. Everything in `templates/` is ignored by the build.

---

## quick start

```bash
# install deps (first time only)
pnpm install

# dev server — leave this running in a terminal tab
node quartz/bootstrap-cli.mjs build --serve --watch --port 8080

# production build
node quartz/bootstrap-cli.mjs build
```

Site is at `localhost:8080`. It hot-reloads when you save files in `content/`.

---

## folder structure

```
fomties-quartz/
├── content/          ← everything here gets published
│   ├── index.md      ← home page
│   ├── about.md
│   ├── now.md
│   ├── stream.md     ← special timeline/stream page
│   ├── stories.md    ← hub page
│   ├── strategies.md ← hub page
│   ├── systems.md    ← hub page
│   └── objects/      ← sub-folder becomes a route
│       └── index.md  ← folder index page
├── templates/        ← ignored by build; copy from here
├── quartz.config.ts  ← site config (title, colors, fonts, plugins)
├── quartz.layout.ts  ← sidebar, header, body layout
├── public/           ← build output (gitignored)
└── README.md         ← this file
```

---

## creating content

### new note / essay

1. Copy `templates/note.md` into `content/` (or a subfolder)
2. Name the file in kebab-case: `my-note-title.md`
3. Fill in the frontmatter
4. Write

The URL will be `fomties.com/my-note-title`.

For a subfolder: `content/objects/my-object.md` → `fomties.com/objects/my-object`

### new hub page

Copy `templates/hub.md`. Hub pages are just index pages that link out to other notes. The `[[wikilinks]]` inside them don't need to exist yet — Quartz handles unresolved links gracefully (they show as greyed-out in the graph).

### home page style (letter / poem layout)

Copy `templates/letter.md`. Add `pageLayout: letter poem` to frontmatter. No sidebar, no TOC — just centred prose.

---

## frontmatter reference

```yaml
---
# --- REQUIRED ---
title: Note Title                    # shown in browser tab + og:title
description: One line for SEO.       # shown in link previews + og:description

# --- RECOMMENDED ---
tags:
  - strategies                       # used for tag pages + graph colouring
  - systems                          # use: strategies | systems | stories
created: 2026-03-26                  # ISO date

# --- OPTIONAL ---
modified: 2026-03-26                 # last edited date
authors:
  - ryan                             # shown in byline
aliases:
  - old-title                        # creates redirect from /old-title
noindex: true                        # hide from search + sitemap
cssclasses:
  - wide                             # extra CSS classes on the page

# --- LAYOUTS ---
pageLayout: letter poem              # 'default' (implicit) | 'letter poem' | 'masonry'

# --- SPECIAL ---
protected: true                      # encrypts content with password prompt
slides: true                         # turns note into slide deck (headings = slides)
---
```

### minimum viable frontmatter

```yaml
---
title: Note Title
description: One sentence.
tags:
  - strategies
---
```

---

## wikilinks

```markdown
[[note title]]                    link to another note
[[note title|display text]]       link with custom label
[[note title#Heading]]            link to a specific heading
[[folder/note title]]             link to note in a subfolder
![[note title]]                   embed full note content inline
![[image.png]]                    embed an image
![[file.canvas]]                  embed a canvas as a static preview
```

**Rules:**
- File name without `.md` extension
- Case-insensitive
- Spaces are fine inside `[[]]`
- Unresolved links are okay — they appear in the graph as orphan nodes
- `markdownLinkResolution` is set to `'absolute'` in this fork — if you're referencing notes in subfolders you may need the full path: `[[objects/my-object]]`

---

## embeds & media

### images

```markdown
![[image.png]]                    embed from content/ folder
![alt text](https://url.com/img)  external image
```

### canvas

```markdown
![[my-canvas.canvas]]             embed canvas as static preview in a note
```
Or visit `/my-canvas.canvas` directly for the interactive version.

### code files

```markdown
![[script.py]]                    embed entire file with syntax highlighting
![[script.py#L10-L20]]           embed specific lines only
```

### math / LaTeX

```markdown
Inline: $E = mc^2$
Block:
$$
\sum_{i=1}^{n} x_i
$$
```

---

## callouts

```markdown
> [!NOTE]
> Informational aside.

> [!WARNING]
> Something to watch out for.

> [!TIP]
> Helpful suggestion.

> [!IMPORTANT]
> Must-read caveat.
```

---

## sidenotes (margin notes)

Appear in the margin on desktop, inline on mobile.

```markdown
~~sidenote label~~ The actual sidenote text goes here.
~~[[linked note]]~~ Sidenote that links to another note.
```

---

## canvas files

Canvas files are `.canvas` JSON files (Obsidian Canvas format). They render as interactive node graphs on the site.

**To create one:**
1. Copy `templates/canvas.canvas` into `content/`
2. Rename it (e.g. `my-map.canvas`)
3. Edit the JSON to add your nodes and edges

**Node types:**

| type | what it is |
|---|---|
| `text` | freeform text, supports markdown + wikilinks |
| `file` | links to another note in content/ |
| `group` | visual grouping box with a label |
| `link` | external URL |

**Edge options:** `fromSide` / `toSide` can be `top`, `right`, `bottom`, `left`. Optional `label`.

**Visiting:** `fomties.com/my-map.canvas` — interactive, draggable, zoomable.
**Embedding:** `![[my-map.canvas]]` in a note — static preview only.

---

## stream page (`content/stream.md`)

The stream is a reverse-chronological log — short entries, automatically sorted newest-first.

**Adding an entry** — open `content/stream.md` and paste:

```markdown
## Entry Title

- [meta]
  - date: 2026-03-26 14:00
  - importance: 0.8
  - description: One-line context for what this is about.

Entry body. Short is fine. Can include [[wikilinks]].

---
```

**Importance scale:**
- `1.0` — major life moment or milestone
- `0.8` — significant insight or event
- `0.5` — regular update
- `0.3` — passing note

The stream lives at `fomties.com/stream`.

---

## protected pages

```yaml
---
title: Private Note
protected: true
---
```

Visitors see a password prompt. The password is set as an environment variable:
- Default env var: `PROTECTED_CONTENT_PASSWORD`
- Custom env var: add `password: MY_VAR_NAME` to frontmatter

In Netlify: Site Settings → Environment Variables → Add `PROTECTED_CONTENT_PASSWORD`.

---

## slide decks

```yaml
---
title: My Talk
slides: true
---

# Slide 1

Content...

---

# Slide 2

Content...
```

Each `---` separator + heading = new slide. Visit the page normally to see the deck.

---

## tags

Tags do two things:
1. Create tag index pages at `fomties.com/tags/tag-name`
2. Colour nodes in the graph view

Current tags in use:
- `strategies` — frameworks, systems for getting things done
- `systems` — tools, setups, workflows
- `stories` — essays, narratives, personal writing

Add new tags freely — Quartz auto-creates tag pages.

---

## aliases & redirects

```yaml
---
aliases:
  - old-name
  - another-old-url
---
```

Quartz creates redirect pages at each alias URL pointing to the canonical page. Useful when you rename a note.

---

## graph view

Triggered by pressing `Cmd+G` or clicking the graph icon in the header. Floating overlay — not a sidebar.

Nodes are coloured by tag. Edges are wikilinks. Orphan nodes = notes that exist but aren't linked to yet.

---

## plugins available (all enabled)

| Plugin | What it does |
|---|---|
| **JsonCanvas** | Processes `.canvas` files |
| **ObsidianBases** | Processes `.base` files (dynamic filtered views) |
| **Stream** | Processes `stream.md` into timeline |
| **Protected** | AES-GCM password protection |
| **Sidenotes** | `~~label~~ text` margin note syntax |
| **Slides** | `slides: true` turns note into deck |
| **Latex** | KaTeX math rendering |
| **Twitter** | Embeds tweets from URLs |
| **GitHub** | Embeds GitHub code/repo previews |
| **SemanticIndex** | Vector embeddings for semantic search |
| **TableOfContents** | Auto-generated TOC in sidebar |
| **SyntaxHighlighting** | Code block highlighting via Shiki |
| **ObsidianFlavoredMarkdown** | Callouts, task lists, tables, footnotes |

---

## deployment

The site deploys via **Netlify** connected to the GitHub repo.

```bash
# push to main → auto-deploys
git add content/my-new-note.md
git commit -m "add: my new note"
git push
```

Build command (already set in Netlify): `node quartz/bootstrap-cli.mjs build`
Publish directory: `public`

---

## config files

### `quartz.config.ts`

Change site title, colors, fonts, analytics, ignored patterns.

Key things you'd actually change:
```typescript
pageTitle: 'fomties™'              // site name
baseUrl: 'fomties.com'             // domain
ignorePatterns: ['private', ...]   // folders to exclude from build
analytics: { provider: 'plausible' }
```

### `quartz.layout.ts`

Change what appears in the header, sidebar, before/after body.

```typescript
// header components (shown on every page)
sharedPageComponents.header = [Graph(), Search(), Darkmode()]

// content page layout
defaultContentPageLayout = {
  beforeBody: [ArticleTitle(), Byline()],
  sidebar: [TableOfContents()],
  afterBody: [Backlinks()],
}
```

---

## templates

All templates are in `templates/` — ignored by the build.

| Template | Use for |
|---|---|
| `note.md` | Standard essay or note |
| `hub.md` | Index / hub page linking to sub-notes |
| `letter.md` | Letter or poem (centred layout, no sidebar) |
| `protected.md` | Password-protected page |
| `slides.md` | Slide deck presentation |
| `stream-entry.md` | Paste blocks into stream.md |
| `canvas.canvas` | Starting point for canvas/graph files |

---

## common issues

**Canvas shows "unable to load"**
→ Canvas file is not inside `content/`. Move it in.

**Wikilink not resolving**
→ Check the file exists in `content/`. Check spelling matches exactly. If in a subfolder, try the full path: `[[subfolder/filename]]`.

**Text repeating twice on page**
→ Don't put the same text in both `description:` frontmatter and as the first line of the body. The Byline component shows the description separately.

**Dev server not updating**
→ Server died. Restart: `node quartz/bootstrap-cli.mjs build --serve --watch --port 8080`

**Page not showing in graph**
→ Check `noindex: true` isn't set. Check the file isn't in an ignored folder (`private/`, `templates/`).
