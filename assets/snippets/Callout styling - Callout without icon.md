---
feature: 05 - Extras/Thumbnails/external/e7b5dc3fce3b9ddcabdf8c564d3e51e8.png
---
↪[collection](collection.md)

# Callout styling - Callout without icon

---

- author:: rushi
- source::

---

cover:: ![](https://i.imgur.com/qVSE6Vp.png)

```css
.callout:is([data-callout-metadata="noicon"]) .callout-icon {
  display: none;
}
```

---

## How to use

```md
> [!done|noicon] Title
> Lorem, ipsum dolor sit amet consectetur, adipisicing elit.
```
