---
title: Protected Page Title
description: Visible in metadata but content is encrypted.
tags:
  - private
protected: true
# password: MY_CUSTOM_ENV_VAR   # omit to use the default PROTECTED_CONTENT_PASSWORD env var
---

This content is encrypted with AES-GCM. Visitors see a password prompt before anything is revealed.

To set the password:
- Default: set env var `PROTECTED_CONTENT_PASSWORD` in your Netlify/deploy settings
- Custom: set any env var name and reference it in `password:` above

Content works normally — wikilinks, embeds, everything.
