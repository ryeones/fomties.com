---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
Automating Backups with Notions API by notionbackups.com

![rw-book-cover](https://notionbackups.com/assets/images/printing-press-papers.png)

## Metadata
- Author: [[notionbackups.com]]
- Real Title: Automating Backups with Notion's API
- Category: #Source/articles
- Document Tags:  #bookmarks 
- Summary: Automating backups with Notion's API is crucial for ensuring data security, especially as Notion is increasingly used for knowledge management. Before the official API release, manual exports or using a private API were the only backup options. With the Notion API now available, creating an internal integration, sharing pages, querying data, and storing it in JSON files are the necessary steps for automating backups. Setting up a cron job to run the backup script periodically ensures data is consistently backed up, with the potential to expand backup options to include media files and comments using Notion Backups.
- URL: https://notionbackups.com/guides/automated-notion-backup-api
- Author: [[notionbackups.com]]
- Imported: [[2025-08-25]] from reader
- Link: https://notionbackups.com/guides/automated-notion-backup-api

## Full Document
Backing up your data on a consistent schedule is like buying insurance: you think you don't need it until you need it. With [Notion](https://www.notion.so) becoming a second brain and knowledge management for many folks and organizations alike, it's paramount to have consistent backups if things go south.

Before an official [Notion API](https://developers.notion.com/) became publicly available, you had two options when it came to backing up your Notion data:

* [Exporting Notion data manually](https://www.notion.so/help/back-up-your-data) (which is easy to forget about)
* Using a CI service with Notion's private API (the private API is subject to change at any time without notice)

Now that Notion's API is available, there's a more robust way of backing up your data.

#### Step 1: Create an internal integration

Head over to [My integrations](https://www.notion.so/my-integrations) page to create an internal integration. [Notion's docs](https://developers.notion.com/docs/getting-started) give a good overview of the process.

![Creating internal integration in Notion](https://notionbackups.com/assets/images/notion-internal-integration.png)Creating internal integration in Notion
Once you're done, grab your Internal Integration Secret (make sure you're the admin of that workspace). You will need it later to authenticate your API requests.

#### Step 2: Share pages you want to back up

By default, your integration doesn't have access to any pages or databases. You have to manually add it to pages and databases you want to back up. You can grant access from the three-dot ··· menu in the upper-right corner of the page.

![Giving our connection access to the page](https://notionbackups.com/assets/images/add-connections-menu.png)Giving our connection access to the page
By granting your integration access to a specific page, you also gain access to its child pages and databases.

[Notion's docs](https://developers.notion.com/docs/create-a-notion-integration) cover this topic in more detail.

#### Step 3: Query data

Unless you intend to back up a specific page only, you'd want to grab all pages and databases. The Notion API exposes a [search](https://developers.notion.com/reference/post-search) endpoint that returns the top-level pages and databases your integration has access to.

```
import requests

# replace INTERNAL_INTEGRATION_SECRET with your own secret token!
headers = {
  'Authorization': 'Bearer INTERNAL_INTEGRATION_SECRET',
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
}

response = requests.post(
  'https://api.notion.com/v1/search',
  headers=headers,
)

```

Keep in mind that the [search](https://developers.notion.com/reference/post-search) endpoint doesn't return child pages. To grab them, you'll have to query for pages using the [retrieve block children](https://developers.notion.com/reference/get-block-children) endpoint.

```
for block in response.json()['results']:
  child_blocks = requests.get(
    f'https://api.notion.com/v1/blocks/{block["id"]}/children',
    headers=headers,
  )

```

In large workspaces, results are more likely to be paginated. To obtain all items, you will have to recursively query the [search](https://developers.notion.com/reference/post-search) endpoint until the `has_more` parameter returns `false`.

#### Step 4: Store data

One way of storing your Notion workspace data is to write top-level pages and databases to separate JSON files and write child pages under a directory named after their parent files.

Here's how the final script looks like:

```
import requests
import os
import datetime
import json

timestamp = datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S')
folder = 'notionbackup_' + timestamp

os.mkdir(folder)

# replace INTERNAL_INTEGRATION_SECRET with your own secret token!
headers = {
  'Authorization': 'Bearer INTERNAL_INTEGRATION_SECRET',
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
}

response = requests.post('https://api.notion.com/v1/search', headers=headers)

for block in response.json()['results']:
  with open(f'{folder}/{block["id"]}.json', 'w') as file:
    file.write(json.dumps(block))

  child_blocks = requests.get(
    f'https://api.notion.com/v1/blocks/{block["id"]}/children',
    headers=headers,
  )
  if child_blocks.json()['results']:
    os.mkdir(folder + f'/{block["id"]}')

    for child in child_blocks.json()['results']:
      with open(f'{folder}/{block["id"]}/{child["id"]}.json', 'w') as file:
        file.write(json.dumps(child))

```

#### Step 5: Set up a cron job

Ideally, backups should be *set and forget*. Otherwise, you will probably forget about them.

On UNIX-like systems (macOS, Linux, BSD), you can set up a cron job that will run a script at a specified interval.

Before setting up a cron job, save this Python script on your machine. Then, create a cron entry:

```
crontab -e
```

Crontab has a specific syntax, and there's plenty of material [on the Internets](https://crontab.guru/) about it. Let's say you want to run this script once every 6 hours. In the editor, opened by the previous command, paste the following:

```
0 */6 * * * /usr/local/bin/python3 /full/path/to/notionbackup.py
```

This assumes that the Python script is called notionbackup.py and the Python interpreter is located in `/usr/local/bin/python3`. If unsure, you can locate the full path to the Python 3 interpreter:

```
which python3
```

#### Further improvements

While the above code covers most of your data, there are additional items you might want to back up, namely:

* [Media files](https://developers.notion.com/docs/working-with-files-and-media) This includes images, audio, video, and PDF files.
* [Comments](https://developers.notion.com/docs/working-with-comments) Before fetching comments, you must first grant your integration the [read comments](https://developers.notion.com/reference/capabilities#comment-capabilities) capability. As of this writing, Notion's API only returns the unresolved comments.

That's all, folks! You can find the full code [on Github](https://github.com/NotionBackups/notion-backup-python).

You can also use [Notion Backups](https://notionbackups.com/) to easily back up your Notion data to a cloud storage provider of your choice. That way, you don't have to worry about your Notion data being lost.

Back up your Notion workspaces today
