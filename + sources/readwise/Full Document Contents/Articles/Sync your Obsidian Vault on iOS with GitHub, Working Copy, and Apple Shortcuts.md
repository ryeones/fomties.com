---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
Sync your Obsidian Vault on iOS with GitHub, Working Copy, and Apple Shortcuts by meganesulli.com

![rw-book-cover](https://meganesulli.com/images/meganesulli-default-social-card.png)

## Metadata
- Author: [[meganesulli.com]]
- Real Title: Sync your Obsidian Vault on iOS with GitHub, Working Copy, and Apple Shortcuts
- Category: #Source/articles
- Summary: Learn how to sync your Obsidian vault across Apple devices using GitHub, Working Copy, and Apple Shortcuts. Create shortcuts to pull and push changes between your local and remote vault repositories. Automate these shortcuts to run when you open and close the Obsidian app for seamless synchronization.
- URL: https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/
- Author: [[meganesulli.com]]
- Imported: [[2025-08-25]] from reader
- Link: https://meganesulli.com/blog/sync-obsidian-vault-iphone-ipad/

## Full Document
(24-minute read)

#### Introduction

[Obsidian](https://obsidian.md/) is my favorite note-taking app. Since I started using it in 2021, I've been stuffing my vault full of notes, ideas, and reminders.

At first, I was only using Obsidian on my MacBook. But I quickly realized that I needed a way to capture my thoughts while I was on the go and away from my computer. Luckily, there's an Obsidian app that works on both iOS and iPad. But Obsidian works with local Markdown files. How do you connect multiple devices to the same Obsidian vault?

The Obsidian team offers a product called [Obsidian Sync](https://obsidian.md/sync), which is a monthly or annual subscription that you can use to sync your vaults across devices. If you're not comfortable with [Git](https://git-scm.com/), Obsidian Sync is a great way to get the same functionality while also supporting the Obsidian creators!

But for developers (or folks who would rather avoid paying for another monthly subscription), you can achieve a similar result using a GitHub repo, an app called Working Copy, and the built-in Shortcuts app on your Apple device.

In this post, I'll show you how to synchronize your Obsidian vault across Apple devices so that you can easily take notes wherever you are.

#### Prerequisites

Before you begin this tutorial, you should have the following materials:

* ✅ An existing Obsidian vault, backed up to a [GitHub](https://github.com/) repository
	+ On my MacBook, I use the [obsidian-git](https://github.com/denolehov/obsidian-git) plugin, which I've configured to back up my vault every 30 minutes.
* ✅ An iPhone or iPad, with the following applications installed:
* ✅ [Obsidian](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)
* ✅ [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807): a Git client for working with repositories from a mobile device
	+ You'll need to upgrade to the Pro version, which you can do from within the app.
* ✅ [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334): an Apple app for creating automations on your device
	+ (As of iOS/iPadOS 13+, the Shortcuts app comes pre-installed as a default app on your device.)

#### The Big Picture

Let's take a step back to understand the overall setup you'll be building:

![A diagram of the systems involved in this architecture. On top, there's the GitHub logo, with a desktop computer and an iPhone/iPad below it. Bidirectional arrows connect the GitHub logo to each of the devices.](https://meganesulli.com/static/dca010034a10c596809a8a664b309320/2a472/architecture-systems.png)A diagram of the systems involved in this architecture. On top, there's the GitHub logo, with a desktop computer and an iPhone/iPad below it. Bidirectional arrows connect the GitHub logo to each of the devices.
Your GitHub repo will be the source of truth for your vault. You'll want to make sure any changes you make to your local Obsidian vault get pushed to GitHub so that they can be accessed from your other devices.

Now let's zoom in a bit and take a closer look at the tools we'll use to enable this setup:

![A diagram that builds on the one above, showing the different pieces in each system. Detailed description below.](https://meganesulli.com/static/a84e05fb8edb3559c581b191d314e171/6bde6/architecture-applications.png)A diagram that builds on the one above, showing the different pieces in each system. Detailed description below.
For the rest of this post, we'll focus on the iPhone/iPad setup.

#### Scenarios

In order to keep your Obsidian vault synchronized with your iPhone or iPad, you'll need to handle the two following scenarios:

1. **Pull** changes from the remote vault repo on GitHub into the local vault on your device.
	* This syncs any changes you've made to your notes from another device.
2. **Push** changes from the local vault on your device into the remote vault repo on GitHub.
	* This makes changes from your iPhone/iPad available on other devices.

![A pair of diagrams, illustrating the two scenarios. Scenario 1 shows an arrow pointing from the GitHub logo to the iPhone/iPad. Scenario 2 shows an arrow pointing from the iPhone/iPad to the GitHub logo.](https://meganesulli.com/static/ed578f10a3d35dc049f5cde4c7e0a458/20dd7/scenarios.png)Let's get started!
#### 1) Connect your local Obsidian vault to the GitHub repo

First things first, you'll need to create a new empty Obsidian vault on your iPhone/iPad.

1. Open the **Obsidian** app on your device. Select "Create new vault".
2. Give your vault a name. (I call mine "Second Brain".) Leave the "Store in iCloud" setting turned off. Then click "Create".
3. A new empty vault will be created on your device.

Next, use Working Copy to connect this new empty vault to your existing vault repo on GitHub.

1. Open the **Working Copy** app on your device. The first time you load Working Copy, it will look something like this:

2. Click the "+" icon in the sidebar, then select "Clone repository".
3. Open the "GitHub" tab, then click "Sign In".
4. Enter your GitHub credentials to give Working Copy access to your repositories.
5. Now, Working Copy should display a list of your GitHub repositories. Locate and click on the one for your existing Obsidian vault.
6. If you want, you can configure the settings for cloning the repo, but I kept the default settings. Then click "Clone". This will download a copy of your existing vault repo from GitHub to your device.
7. When you're done, you should see the contents of your vault repo in Working Copy.
8. Click the share icon (the up arrow coming out of a box) on the right, then select "Link Repository to Folder".

9. Under the "On My iPad" folder, open the "Obsidian" directory, and then select the folder for the new vault you created earlier. Then click "Done". This tells Working Copy to store the local copy of your repo in your Obsidian vault folder.
10. Back in Obsidian, validate that the files from your existing remote vault now appear in your new vault.

#### 2) Pull changes from GitHub into your local vault

Now that you've got your local vault set up, it's time to handle the first scenario from earlier: pulling changes from the remote vault repo into your local vault.

You'll do this work in two stages:

* Create a shortcut to pull changes.
* Automate the shortcut to run when the Obsidian app opens.

##### Create a shortcut to pull changes

1. Open the **Shortcuts** app, and navigate to the "All Shortcuts" page. Click the "+" icon to create a new shortcut.
2. Name your new shortcut "Pull Changes From Remote Obsidian Vault".
3. Use the search bar to find the Working Copy action to "Pull Repository". Tap the action to add it to your shortcut.
4. Checkpoint: So far, your shortcut should look like this:
5. Tap on the "Repository" placeholder to fill in a value. Choose your vault repo from the list of Working Copy repos.
6. Checkpoint: Your final shortcut should look like the one below. Click "Done" to save your changes.
7. Now you have a shortcut that you can trigger by tapping it in the Shortcuts menu. (To edit your shortcut, click on the three dots in the corner of the grid item.)

##### Automate the shortcut to run when the Obsidian app opens

Now that you can pull updates from GitHub into your local vault, it's time to set up an automation to run that shortcut automatically! To avoid merge conflicts, pull changes from the remote repo every time you open the Obsidian app on your device. Let's set that up:

1. In the **Shortcuts** app, open the Automation page, and create a new personal automation.
2. In the "New Automation" menu, choose the event that you want to trigger your automation. Scroll down and select "App".
3. Choose "Obsidian" for the App, and make sure "Is Opened" is checked. Then click "Next".
4. Now you'll set up the action you want to trigger when Obsidian is opened. Click the "Add Action" button.
5. Use the search bar to find the "Run Shortcut" action. Click it to add it to your automation.
6. Click the "Shortcut" placeholder to fill in a value. Select the "Pull Changes From Remote Obsidian Vault" shortcut you created earlier. Then click "Next".
7. Review your automation settings. Turn off the "Ask Before Running" setting, so that you won't need to confirm the automation every time it runs.
8. Turning off the "Ask Before Running" setting will require a second confirmation that you really don't want to ask before running the automation. Confirm by selecting "Don't Ask".
9. Now you should see an additional setting, "Notify When Run". Turn that setting on, so that you'll get a notification whenever your automation is run. (This will help you validate that the automation is working as expected. You can turn this setting off later if you'd prefer not to see a notification every time you open the app.)

 Click "Done" to save your changes.
10. Your new automation should appear under "Personal" on the Automation page.

And that should do it! Test out your automation by opening the Obsidian app. You should see a notification telling you that your "Opened Obsidian" shortcut was run.

#### 3) Push changes from your local vault to GitHub

Now you're ready to tackle the second scenario: pushing changes from your local vault into the remote repo on GitHub.

Like before, you'll do this work in two stages:

* Create a shortcut to push local changes.
* Automate the shortcut to run when the Obsidian app closes.

##### Create a shortcut to push local changes

1. In the **Shortcuts** app, navigate back to the "All Shortcuts" page. Click the "+" icon to create a new shortcut.
2. Name your shortcut "Back Up Obsidian Vault".
3. If you plan on running these shortcuts across multiple devices, it helps to specify in your commit message which device you're making changes from. (For example, I use the free iCloud tier to sync my Shortcuts across Apple devices, so this shortcut could run from either my iPad or my iPhone. Knowing which device a commit came from helps me troubleshoot if something goes wrong or I start getting merge conflicts.)

 To set that up, use the search bar to find the Scripting action called "Set Variable". Tap the action to add it to your shortcut.
4. Checkpoint: Now your shortcut should look like this:
5. Give your variable a name by tapping on "Variable Name". You can call this whatever you want; I called mine "Device".
6. Now set the value of your variable by tapping "Input" and choosing "Device Details".
7. Checkpoint: This is what your action should look like so far:
8. Tap on "Device Details", and scroll down to select "Device Type". When your shortcut runs, this value will be something like "iPhone" or "iPad", depending on what kind of device you're using.
9. Use the search bar to find the Working Copy action called "Commit Repository". Tap the action to add it to your shortcut.
10. Checkpoint: Now your shortcut should look like this:
11. Tap "Repository" to fill in a value for which Working Copy repo you want to commit to. Choose your vault repo from the menu.
12. Next, tap "Message" to fill in what you want your commit message to be.
13. You can use the menu at the bottom of the screen to add the Device variable into your commit message. I set my commit message to: **"Vault autocommit on <Device>"** (which will end up being either "Vault autocommit on iPad" or "Vault autocommit on iPhone", depending on which device I'm using).
14. Click the arrow icon in the commit action to expand the advanced options menu.

	* Set the "What to Commit" option to "modified".
	* Turn off the "Fail when nothing to Commit" toggle.
15. Use the search bar to find the Working Copy action called "Push Repository". Tap the action to add it to your shortcut.
16. Checkpoint: Now your shortcut should look like this:
17. Tap "Repository" to fill in a value for which Working Copy repo to push to its remote. Select your vault repo from the menu.
18. Your final "Back Up Obsidian Vault" shortcut should look like this:
19. Click "Done" to save your new shortcut. You should now see it appear on the "All Shortcuts" page. Tap the shortcut to run it. (To edit your shortcut, click on the three dots in the corner of the grid item.)

##### Automate the shortcut to run when the Obsidian app closes

Now that your shortcut is set up, it's time to automate it! To make sure your latest changes are always pushed up to the remote repo, run your shortcut every time you close the Obsidian app. Let's set that up next:

1. In the **Shortcuts** app, navigate to the "Automation" page. Click the "+" icon to create a new automation.
2. Choose "Create Personal Automation".
3. Next, choose which event you want to trigger your automation. Scroll down and select "App".
4. For "App", choose Obsidian. Uncheck the "Is Opened" toggle, and check "Is Closed" instead. Then click "Next".
5. Now it's time to specify what action you want to run when your automation is triggered. Click the "Add Action" button.
6. Use the search bar to find the "Run Shortcut" action. Tap the action to add it to your automation.
7. Tap the "Shortcut" placeholder to add in a value.
8. Select your "Back Up Obsidian Vault" shortcut from the menu.
9. Checkpoint: Your actions should look like this. Click "Next" to continue.
10. Review your automation settings. Turn off the "Ask Before Running" setting, so that you won't need to confirm the automation every time it runs.
11. Turning off the "Ask Before Running" setting will require a second confirmation that you really don't want to ask before running the automation. Confirm by selecting "Don't Ask".
12. Now you should see an additional setting, "Notify When Run". Turn that setting on, so that you'll get a notification whenever your automation is run. (This will help you validate that the automation is working as expected. You can turn this setting off later if you'd prefer not to see a notification every time you close Obsidian.)
13. Click "Done" to save your changes. Your new automation should appear under "Personal" on the Automation page.

And you're done!

Test out your new automation by opening the Obsidian app (which triggers a notification that your "Opened Obsidian" automation is running), making some changes, and then closing the Obsidian app (by going back to your home screen). You should see a notification that your "Closed Obsidian" automation ran.

#### Wrap It Up

Obsidian has become a huge part of my day-to-day workflow. By syncing my vault across all my devices, I have the flexibility to capture notes on whichever device I have on hand.

Want to learn how to make the most of your new note-taking freedom? I've learned a ton about Obsidian by watching Ben Hong's YouTube channel, [BenCodeZen](https://www.youtube.com/@BenCodeZen). You can also check out the [official Obsidian Community page](https://obsidian.md/community), which has links to a dedicated Discord server and online forum.

If you like this post, reach out on [Mastodon](https://hachyderm.io/@meganesulli) and let me know! You can also subscribe to my newsletter (below) to get updates when I post new content.

#### Resources

* [Obsidian on the App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)
* [Working Copy on the App Store](https://apps.apple.com/us/app/working-copy-git-client/id896694807)
	+ [Working Copy website](https://workingcopyapp.com/)
	+ [Working Copy User Guide](https://workingcopyapp.com/manual.html)
* [Shortcuts on the App Store](https://apps.apple.com/us/app/shortcuts/id915249334)
	+ Apple Support: [Shortcuts User Guide](https://support.apple.com/guide/shortcuts/welcome/ios)
	+ Apple Support: [Setting triggers in Shortcuts on iPhone or iPad](https://support.apple.com/guide/shortcuts/setting-triggers-apde31e9638b/5.0/ios/15.0)

This tutorial was inspired by the following resources:

* [Obsidian forum post by Richard Steele](https://forum.obsidian.md/t/mobile-setting-up-ios-git-based-syncing-with-mobile-app-using-working-copy/16499)
* [GitHub comment by Julian Gonggrijp](https://github.com/denolehov/obsidian-git/issues/57#issuecomment-952297086)
