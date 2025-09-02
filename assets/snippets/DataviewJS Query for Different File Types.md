---
banner_icon: 
feature: obsidian discord dataview.png
cssclasses:
  - "-"
  - cards
---


![[obsidian discord dataview.png]]

### To query for .png files

dataviewjs
const pngFiles = dv.array(app.vault.getFiles().filter(file => file.extension === 'png')).sort((f) => f.path);
dv.list(pngFiles.map(file => dv.fileLink(file.path)));


### To query for .pdf file
dataviewjs
const pdfFiles = app.vault.getFiles().filter(file => file.extension === 'pdf'); // Get all .pdf files in the vault
pdfFiles.sort((a, b) => a.path.localeCompare(b.path)); // Sort by file path alphabetically

if (pdfFiles.length > 0) {
    dv.list(pdfFiles.map(file => dv.fileLink(file.path))); // Display as clickable file links
} else {
    dv.paragraph("No PDF files found in the vault.");
}


### To query for .gif file
dataviewjs
const gifFiles = app.vault.getFiles().filter(file => file.extension === 'gif'); // Get all .gif files in the vault
gifFiles.sort((a, b) => a.path.localeCompare(b.path)); // Sort by file path alphabetically

if (gifFiles.length > 0) {
    dv.list(gifFiles.map(file => dv.fileLink(file.path))); // Display as clickable file links
} else {
    dv.paragraph("No GIF files found in the vault.");
}

