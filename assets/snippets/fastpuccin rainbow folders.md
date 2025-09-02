
```/*===============================================================
                Rainbow Folders  for FastPuccin
                        -----------
                Extracted from AnuPpuccin theme

This snippet is extracted from the AnuPpuccin theme by AnubisNekhet.
Support the original author's "Custom rainbow folder colors snippet"
by downloading it through the link provided in the settings.

This snippet is licensed under the GPL-3.0 (as is the original).
I would recommend supporting the original author (AnubisNekhet).

LostViking09
---

The following is the licence of the original AnuPpuccin theme:

AnuPpuccin is licensed under the GPL-3.0 license which allows you
to modify the code freely, however the Copyright and license
notices must be preserved in your CSS. If you redistribute a part
of my code, please credit my theme in your CSS file, and specify
which code you are using. Please keep my Buy Me a Coffee link
                in your README if you do so.

            https://www.buymeacoffee.com/anubisnekhet
*===============================================================*/


/* @settings
name: Rainbow Folders for FastPuccin
id: fastppuccin-rainbow-folders-settings
settings:
-
    id: anuppuccin-url-custom-rainbow-colors
    title: Custom rainbow folder colors snippet
    description: "Download the snippet from AnuPpuccin through [this link](https://github.com/AnubisNekhet/AnuPpuccin/blob/main/snippets/custom-rainbow-colors.css)."
    type: info-text
    markdown: true
-
    id: anp-alt-rainbow-style
    title: Rainbow style
    type: class-select
    allowEmpty: false
    default: anp-default-rainbow
    options:
    -
        label: None
        value: anp-default-rainbow
    -
        label: Full
        value: anp-full-rainbow-color-toggle
    -
        label: Simple
        value: anp-simple-rainbow-color-toggle

# Workspace :: Rainbow Folders :: Full Folder Settings

-
    id: anp-full-rainbow-folder-settings
    title: Full Folder Settings
    description: 
    type: heading
    level: 3
    collapsed: true
-
    id: anp-rainbow-file-toggle
    title: File recolor toggle
    desc: Recolors files to match the folders
    type: class-toggle
-
    id: anp-full-rainbow-text-color-toggle-light
    title: Invert title colors (Light Mode)
    type: class-toggle
-
    id: anp-full-rainbow-text-color-toggle-dark
    title: Invert title colors (Dark Mode)
    type: class-toggle
-
    id: anp-rainbow-folder-bg-opacity
    title: Folder background color opacity
    type: variable-number
    default: 0.7

# Workspace :: Rainbow Folders :: Simple Folder Settings

-
    id: anp-simple-rainbow-folder-settings
    title: Simple Folder Settings
    description: 
    type: heading
    level: 3
    collapsed: true
-
    id: anp-simple-rainbow-title-toggle
    title: Enable title recolor
    type: class-toggle
-
    id: anp-simple-rainbow-collapse-icon-toggle
    title: Enable collapse icon recolor
    type: class-toggle
-
    id: anp-simple-rainbow-indentation-toggle
    title: Enable collapse indent recolor
    type: class-toggle
-
    id: anp-simple-rainbow-icon-toggle
    title: Enable circular file
    type: class-toggle
-
    id: anp-rainbow-subfolder-color-toggle
    title: Enable subfolder color inheritance
    type: class-toggle
*/

/*===============================================================
* RAINBOW FOLDERS
* Author: AnubisNekhet
* https://www.buymeacoffee.com/anubisnekhet
*===============================================================*/
/*---------------------------------------------------------------
* RAIBOW FOLDER VARIABLE

* --rainbow-folder-color is a raw rgb variable whose value
* is cycled per child folder in a folder tree.
* Applying "inherit" to every child folder excluding first-order
* child folders results in folders "inheriting" their parent
* folder colors.
*---------------------------------------------------------------*/
.nav-folder-children > .nav-folder:nth-child(11n+2),
.nav-files-container > div > .nav-folder:nth-child(11n+2),
[data-type=bookmarks] .tree-item:nth-child(11n+2) {
  --rainbow-folder-color: var(--ctp-red);
}
.nav-folder-children > .nav-folder:nth-child(11n+3),
.nav-files-container > div > .nav-folder:nth-child(11n+3),
[data-type=bookmarks] .tree-item:nth-child(11n+3) {
  --rainbow-folder-color: var(--ctp-maroon);
}
.nav-folder-children > .nav-folder:nth-child(11n+4),
.nav-files-container > div > .nav-folder:nth-child(11n+4),
[data-type=bookmarks] .tree-item:nth-child(11n+4) {
  --rainbow-folder-color: var(--ctp-peach);
}
.nav-folder-children > .nav-folder:nth-child(11n+5),
.nav-files-container > div > .nav-folder:nth-child(11n+5),
[data-type=bookmarks] .tree-item:nth-child(11n+5) {
  --rainbow-folder-color: var(--ctp-yellow);
}
.nav-folder-children > .nav-folder:nth-child(11n+6),
.nav-files-container > div > .nav-folder:nth-child(11n+6),
[data-type=bookmarks] .tree-item:nth-child(11n+6) {
  --rainbow-folder-color: var(--ctp-green);
}
.nav-folder-children > .nav-folder:nth-child(11n+7),
.nav-files-container > div > .nav-folder:nth-child(11n+7),
[data-type=bookmarks] .tree-item:nth-child(11n+7) {
  --rainbow-folder-color: var(--ctp-teal);
}
.nav-folder-children > .nav-folder:nth-child(11n+8),
.nav-files-container > div > .nav-folder:nth-child(11n+8),
[data-type=bookmarks] .tree-item:nth-child(11n+8) {
  --rainbow-folder-color: var(--ctp-sky);
}
.nav-folder-children > .nav-folder:nth-child(11n+9),
.nav-files-container > div > .nav-folder:nth-child(11n+9),
[data-type=bookmarks] .tree-item:nth-child(11n+9) {
  --rainbow-folder-color: var(--ctp-sapphire);
}
.nav-folder-children > .nav-folder:nth-child(11n+10),
.nav-files-container > div > .nav-folder:nth-child(11n+10),
[data-type=bookmarks] .tree-item:nth-child(11n+10) {
  --rainbow-folder-color: var(--ctp-blue);
}
.nav-folder-children > .nav-folder:nth-child(11n+11),
.nav-files-container > div > .nav-folder:nth-child(11n+11),
[data-type=bookmarks] .tree-item:nth-child(11n+11) {
  --rainbow-folder-color: var(--ctp-lavender);
}
.nav-folder-children > .nav-folder:nth-child(11n+12),
.nav-files-container > div > .nav-folder:nth-child(11n+12),
[data-type=bookmarks] .tree-item:nth-child(11n+12) {
  --rainbow-folder-color: var(--ctp-mauve);
}

.anp-rainbow-subfolder-color-toggle .nav-files-container .nav-folder.nav-folder .nav-folder,
.anp-rainbow-subfolder-color-toggle [data-type=bookmarks] .tree-item .tree-item {
  --rainbow-folder-color: inherit;
}

/*---------------------------------------------------------------
* FULL RAINBOW STYLE
*---------------------------------------------------------------*/
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-folder-title,
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-file-title,
.anp-full-rainbow-color-toggle .nav-files-container .collapse-icon svg.svg-icon,
.anp-full-rainbow-color-toggle .tree-item-self .tree-item-icon {
  color: var(--anp-full-rainbow-text-inverted, var(--background-primary));
  --icon-color: var(--anp-full-rainbow-text-inverted,
          var(--background-primary));
}
.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle .nav-files-container > div > .nav-folder-children > .nav-file .nav-file-title {
  color: var(--anp-full-rainbow-text-inverted, var(--background-primary));
}
.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle.theme-dark .nav-files-container > .nav-folder-children > .nav-file {
  background-color: rgba(var(--ctp-text), var(--anp-rainbow-folder-bg-opacity));
}
.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle.theme-light .nav-files-container > div > .nav-file {
  background-color: rgba(var(--ctp-overlay1), var(--anp-rainbow-folder-bg-opacity));
}
.anp-full-rainbow-color-toggle.anp-rainbow-file-toggle .nav-files-container > div > .nav-file {
  border-radius: 5px;
  margin-bottom: 2px;
}
.anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div > .nav-folder .nav-folder-title:hover,
.anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div .nav-file .nav-file-title:hover {
  background-color: rgba(var(--ctp-base), 0.1);
}
.anp-full-rainbow-color-toggle:not(.is-grabbing) .nav-files-container > div > .nav-folder .nav-file-title.is-active {
  border-color: rgba(var(--ctp-base), 0.2);
  background-color: rgba(var(--ctp-base), 0.2);
}
.anp-full-rainbow-color-toggle .nav-file {
  overflow-y: hidden;
}
.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed,
.anp-full-rainbow-color-toggle .nav-folder-title-content.is-being-renamed {
  cursor: text;
  border-color: var(--interactive-accent);
  background-color: rgba(var(--ctp-crust), 0.2);
}
.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed::selection,
.anp-full-rainbow-color-toggle .nav-folder-title-content.is-being-renamed::selection {
  background-color: hsla(var(--color-accent-hsl), 0.2);
}
.anp-full-rainbow-color-toggle .nav-file-title-content.is-being-renamed::selection {
  background-color: rgba(var(--ctp-accent), 0.2);
}
.anp-full-rainbow-color-toggle .nav-files-container .nav-folder > .nav-folder-children {
  padding: 0 5px 0 5px;
}
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder {
  transition: background-color 0.4s;
  background-color: rgba(var(--rainbow-folder-color), var(--anp-rainbow-folder-bg-opacity));
  margin-bottom: 2px;
  border-radius: 5px;
}
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-folder .nav-folder-children {
  border-color: rgba(var(--ctp-crust), 0.4);
}
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file.has-focus {
  background-color: rgba(var(--ctp-text), var(--anp-rainbow-folder-bg-opacity));
  border-left: none;
  border-color: rgb(var(--ctp-accent));
}
.anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file > .nav-file-title, .anp-full-rainbow-color-toggle .nav-files-container > div > .nav-file.has-focus > .nav-file-title {
  margin-bottom: 0;
}
.anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-file-title, .anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-file-title:focus-within,
.anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-folder-title,
.anp-full-rainbow-color-toggle .workspace-leaf.mod-active .nav-folder.has-focus > .nav-folder-title:focus-within {
  box-shadow: none;
}

.anp-full-rainbow-text-color-toggle-dark.theme-dark,
.anp-full-rainbow-text-color-toggle-light.theme-light {
  --anp-full-rainbow-text-inverted: rgb(var(--ctp-text));
}

/*---------------------------------------------------------------
* SIMPLE RAINBOW STYLE
*---------------------------------------------------------------*/
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle .nav-files-container > div > .nav-folder .nav-folder-title,
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
  transition: color 0.4s;
  color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
  --nav-item-background-hover: rgba(var(--rainbow-folder-color), 0.1);
  --nav-item-background-active: rgba(var(--rainbow-folder-color), 0.1);
}
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-title-toggle .nav-folder.is-being-dragged-over {
  background-color: rgba(var(--rainbow-folder-color), 0.1);
}
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle .nav-files-container > div > .nav-folder .nav-folder-title:after,
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner:after {
  transition: color 0.4s;
  color: rgba(var(--rainbow-folder-color), var(--anp-simple-rainbow-opacity, 1));
  content: "⬤";
  font-size: 10px;
  position: relative;
  margin-left: 4px;
  opacity: 0.5;
  top: -0.5px;
}
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-icon-toggle [data-type=bookmarks] .tree-item .tree-item-inner {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-indentation-toggle .nav-files-container .nav-folder > .nav-folder-children,
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-indentation-toggle [data-type=bookmarks] .tree-item .tree-item-children {
  transition: color 0.4s;
  border-color: rgba(var(--rainbow-folder-color), 0.5);
}
.anp-simple-rainbow-color-toggle.anp-simple-rainbow-collapse-icon-toggle .tree-item-self .tree-item-icon {
  --icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
  --nav-collapse-icon-color: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
  --nav-collapse-icon-color-collapsed: rgba(var(--rainbow-folder-color),
          var(--anp-simple-rainbow-opacity, 1));
}
```