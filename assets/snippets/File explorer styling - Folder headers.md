---
feature: 05 - Extras/Thumbnails/external/b00005460a46f9534e4d67bf61beeb11.png
---
↪[collection](collection.md)

# File explorer styling - Folder headers

---

- author:: Corellan
- source:: https://discord.com/channels/686053708261228577/702656734631821413/1120163092752510976

---

> _You will need to change the order of headers depending on your folder structure._

cover:: ![](https://i.imgur.com/WA4nplM.png)

```css
/* modified version of Corellan's snippet for v1.6.5 */

.nav-files-container > div > .nav-folder::after {
  position: relative;
  left: var(--layout-margin);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-size: var(--font-adaptive-smallest);
}


.nav-files-container > div > .nav-folder:nth-child(3)::after {
  content: "Private";
}

.nav-files-container > div > .nav-folder:nth-child(7)::after {
  content: "Assets";
}

.nav-files-container > div > .nav-folder:nth-child(9)::after {
  content: "Sorting";
}
```



<details>
  <summary>For older versions of Obsidian</summary>

```css
/*
author: Corellan
source: https://discord.com/channels/686053708261228577/702656734631821413/1120163092752510976
*/

/* ╔════════════════════════════════════════════════════════════════════════════════════════════════════════[─]═[□]═[×]═╗ */
/* ║ Obsidian Add-On                                                                                                    ║ */
/* ╠══════════════════════════╦═════════════════════════════════════════════════════════════════════════════════════════╣ */
/* ║ Name:                    ║ CreArts Vault Header                                                                    ║ */
/* ║ Version:                 ║ 1.0.0                                                                                   ║ */
/* ║ Author:                  ║ Corellan                                                                                ║ */
/* ║ License:                 ║ MIT                                                                                     ║ */
/* ╚══════════════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝ */

/* ╔══════════════════════════╦═════════════════════════════════════════════════════════════════════════════[─]═[□]═[×]═╗ */
/* ║ Custom CSS               ║ General                                                                                 ║ */
/* ╚══════════════════════════╩═════════════════════════════════════════════════════════════════════════════════════════╝ */

.tree-item .nav-folder::after {
  position: relative;
  left: var(--layout-margin);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  font-size: var(--font-adaptive-smallest);
}

.tree-item .nav-folder .is-collapsed::after {
  display: none !important;
}

.tree-item .nav-folder:nth-child(3)::after {
  content: "Private";
}

.tree-item .nav-folder:nth-child(7)::after {
  content: "Assets";
}

.tree-item .nav-folder:nth-child(9)::after {
  content: "Sorting";
}
```

</details>
