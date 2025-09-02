---
Author: 
Tags:
Note Created: <%8 tp.date.now("dddd Do MMMN YY HH:mm") %>
---
Learning in public with Personal Knowledge Management by Nicole van der Hoeven

![rw-book-cover](https://i.ytimg.com/vi/i-uNtkre1aE/maxresdefault.jpg)

## Metadata
- Author: [[Nicole van der Hoeven]]
- Real Title: Learning in public with Personal Knowledge Management
- Category: #Source/videos
- Summary: Nicole van der Hoeven discusses the importance of making learning observable through Personal Knowledge Management. She emphasizes that sharing notes and processes can motivate both personal growth and collaboration with others. By documenting and publishing what you learn, you can refine your knowledge and engage with a larger community.
- URL: https://www.youtube.com/watch?v=i-uNtkre1aE
- Author: [[Nicole van der Hoeven]]
- Imported: [[2025-08-25]] from reader
- Link: https://www.youtube.com/watch?v=i-uNtkre1aE

## Full Document
- A couple of weeks ago, I was
in Utrecht in the Netherlands for the first ever PKM Summit. I have so much more to say on the topic because it was an amazing time, but in this video, I'm going to be re-giving one of two talks that I gave at that conference. The first talk I gave was about Excalidraw for tabletop role-playing games. I did that one with my
friend Zsolt Viczian. He had a video a few
days ago that came out and he talks a little bit about what we talked about
in that presentation. 

So I thought I would give
my one that I did on my own. This one is called Doing It in Public: Observability for PKM. Now, I wanted to do this because this is going to be something that relates what I do for a
living to what I do for fun, which is this YouTube channel and just general note-taking
that I love to do. When I went to the PKM Summit, I had just come, like literally just gotten
off the train from Paris, 

a conference there was being held just before the PKM Summit. This conference is called CubeCon and it's a conference about
Kubernetes and observability and a bunch of other awesome things. So here I am with some of my coworkers at my company's booth. Now, I'm telling you this because in this presentation
I kind of talked about what I do for a living and how it's related, I think, to PKM personal knowledge
management systems. 

Now, what I do is that I am a little bit of kind of like an ethical hacker. I am a performance engineer, which means it is my job to make software systems more reliable, performant, scalable, basically just to increase their quality, and a lot of that involves
trying to break it. I am the kind of person that
is hired to break a system 

for ethical reasons. What I do is kind of similar to hacking, except that there is a fine line and that line is called consent. Companies hire me or people like me to find out all the ways that a system is going to fail and then try and fix it
before it actually happens. So a lot of that is trying to find out the limits of a system. Now, you might think
that when I'm contracted and I start with a new job, 

I might just start with
increasing all of the things. Making a machine twice as powerful, give it more storage,
more CPU, more memory, and all of the things. That is sometimes part of it, but actually what I usually start with is making the system observable. So observability in this context is being able to see what's
going on inside a system. 

Usually when I come into a new project, it looks kind of like this, it's a black box. This is a problem and it is more of a problem when you're trying to improve it. 'Cause how can you improve something when you don't even know what's in it? Often a lot of the teams
that I am involved in only know their own
little piece of the puzzle and then it goes into the black box, as far as they're concerned. They might roughly know what
team is going to be handling 

that request or that transaction next, but they don't know the full story. So before I can even start to make something like this more resilient or more performant, I really have to remove
the lid of that box, I really have to find a way to make its contents
observable to everybody. Now, the weird thing about this is that I've found that
sometimes the sheer act 

of making something observable is enough to cause some real changes. It's kind of like this idea from Seinfeld of not breaking the chain, it's a very simplistic
way to track a habit. You pick a habit, and every time that you do it, you cross physically
something off of a calendar, you cross that day off. And the idea is that you
don't wanna break the chain, so you keep doing that habit. What initially was just for
tracking or for observing 

becomes a sort of reward in itself because you don't wanna break the chain, so you just keep doing the habit. So what was supposed to be
just kind of a third party looking at whether or
not you did the habit now becomes a source of
motivation in itself. And this is also what I found to be true when I am working on making
something observable. Sometimes just by saying like, hey, this is the state
of the system right now, 

people already start to
change their behaviors or work on different things
just to make those things that are made observable
a little bit better. So this could be like a number, it could be the amount of
the percentage of the CPU that is being used by an application. Making that number observable
has this cool effect in the rest of the team where they now have a number to look at and almost unconsciously
they start to change 

how they behave to optimize that number. This is the magic of observability. So, how can we apply it to PKM? Well, we're gonna get
into that in a second, but first I wanna talk about why you'd want to make
your PKM system observable. The first part is accountability. Now, when I talk about learning in public, 

that can mean so many different things, but it really is fundamentally
making things observable. This has the benefit of
increasing accountability. One of my favorite
reasons to learn in public is that now if I say that
I wanna learn something, then people hold me to it, or not in a mean way, but they do tend to ask a little bit more, like why I haven't done this, or they just give me
a lot more interaction 

that motivates me to keep learning or keep doing whatever it is. The second part is feedback. Putting something out there means that there's a lot more of a chance that you're going to
get something back out. So lots of people might comment on it, but even if they don't, one good comment or
one person saying like, hey, did you consider this, or this didn't really resonate with me, 

that's already more information that you would've gotten if
you had not made it observable. So I love this idea of putting
something out into the world because that increases the chances of you actually improving what
it is that you're working on based on the signals that
people give back to you. Another reason is visibility. Now, I have been in this
industry for over 12 years 

and I haven't had to apply
for a job from scratch for like the last decade, and that's because when you have a history of learning in public and
making observable what you know, then people find you. And having a visible portfolio
of the things that you like, the things that you're interested in, is really a compelling reason for people to want to work with you. I have about 10,000 notes
that are in my vault, 

maybe about 7,000 of
them or so are public. And they're not all correct, right? I wouldn't say that they're
masterpieces or anything, but there is one thing
that people can't deny when they see that I
have thousands of notes, especially around a certain topic, like performance engineering
or software development, and that is that I'm very,
very interested in this topic and have spent a lot of
time learning in this area. 

And that type of visibility
is really difficult to deny. There's also clarity. Making something observable is also about getting clear on what it is, what it's about. You might think that you
have a handle on a topic, but then you start to think it through and you start to try to
explain it to someone and you're like, oh, I actually don't know 

why this is important. And for someone like me who does tend to get stuck
in these rabbit holes and then I sometimes
lose sight of the reason that I was even interested in
this topic in the first place, it is very good to have
that sort of North Star. When I make a video on something, it does force me to kind of think about what is actually the most
important thing to say, and that's usually not every
single detail about it. 

What's usually most important is, why should I do this? Why does it matter? And what is the thing in the
simplest language possible? And observability really
helps me with that because it holds me to the standard that other people are going
to be holding me to as well. I also think that making things observable is just the most scalable way to do it. So just like in a system, 

whenever you build an application that is going to be publicly facing, like publicly accessible online, you have to think about scalability. You have to be able to adapt if suddenly something goes
viral or there's a sale and more people turn up and buy stuff or try to buy stuff
than what you expected, you have to be able to
increase the scale of it and meet that demand. Now, in the context of a PKM system, 

this could be just putting
what most people call content. Now, I like to think of it
more as learning in public, and that's because if I thought
of it as making content, I think I would just fall
into impostor syndrome a lot. I know when I brought
this up at the PKM Summit, lots of people resonated with us and the reality is that
it never goes away. And I think that more people
would be making stuff online 

if we stopped thinking
about having these polished, beautiful pieces of work that
we send out into the world after years of toil and just thought of it as
making learning observable. I think that there's a lot to be said for iterating on something, but why can't that be in public? Why can't the entire thing be observable, rather than you just slaving
away in a basement or something 

and not already getting feedback by working with a garage door
up, as Andy Matuschak says? So, okay, let's talk about how you would even make
your PKM system observable. Now, there are four main things and I'm relating this to how I would make a system observable. And I'm gonna go over each one, so don't worry if you don't understand all of these right now. But in general you would
first make the thing because you can't make
anything observable. 

If there's nothing to be made observable, you can instrument the thing
by making it easy to find. You monitor the thing, this is how you get feedback. And also you refactor the thing. This is what you do with the feedback, you have to adapt it and
change it and make it better. So making the thing. Now, a lot of people have a lot to say, but they don't know
exactly how to express it. I think this is kind of, 

the way that you can rephrase this or reframe it in your
head is don't think about what other people want to get from you, just start documenting. Gary Vaynerchuk has an awesome
kind of theme to his work, which is document, not create. And his idea is that, kind of along the same lines
of the impostor syndrome, when people think of creating a video or writing a blog post, it just feels really daunting. But actually everybody has a story 

and everyone has an
interesting spin on things, and if they just documented
what they're already doing, then they would find that lots of people already
get value out of it. And in much the same way, the way that I would start
with any sort of note-taking or creating a PKM is by doing daily notes. So that's this first one here. I really love daily notes because everyone knows how to
create a log about our day. It is just, this could just mean writing
stuff down that you've done. 

It could be bullet points, it doesn't need to be a paragraph form. Then you can start to think about things that resonate with you. Now, this is sometimes referred to as having a resonance calendar, but what that means is when
you see something cool, put it in your daily note or put it in some sort of
note in your PKM system. This could be a video that you watched. Sometimes you might not even
have to put a comment on it, maybe you just put in the link 

and some sort of description
of what it was about. It could be something that came up in
conversation with somebody. So you could also talk
about people you've met or meeting notes, and then really you can
just follow your passion. I think most people
think that it has to be, you have to predetermine what
you're going to talk about before you actually figure
out what you're interested in, 

but I think that's the other way around. You start with what you're already doing, you start with what you're
already passionate about, because if you try to force it, I think it's gonna be really obvious and it's also not gonna
be very sustainable. So I tried to do this. I actually started this YouTube channel thinking it was gonna be something else, happened to mention Obsidian and my passion for it came through. And so I pivoted entirely
to talk about Obsidian, 'cause it turns out when you're
passionate about something, it shows and people like that. 

And then the other thing
about, well, making the thing is that you need to
make a habit out of it. Now, I know daily notes are daily, but you don't really have
to be that strict about it, as long as you are building this habit of doing it kind of on an ongoing basis. And then I put a nice little helm here because in software
development there is a point where you've built something
and you've put it out there 

and you've tried to make
it as good as you can, but you're just gonna have to ship it. You really aren't going to get feedback until you decide, okay, code freeze now, which means you're not going
to be working on it anymore. You are just gonna have to cut and run and just put it out there, and that is referred to as shipping it. So after making the thing, you're going to have to release it. Sometimes, though, even though you've made the thing, 

you might need a little bit more of a push to actually ship it or to hold yourself to the
things that you wanted to make. In this situation, what works for me is
using pre-commitments. So this is a post that
I put up on Mastodon, which is my social network of choice. I wanted to learn about facilitation. Now, I could have just
learned it on my own and that would've been fine, but I really like the accountability 

of making a pre-commitment, and making a pre-commitment
means saying publicly what your learning process
is going to look like and really saying, this is my intent. Now, I think that doing this in public increases the accountability
factor for me. I totally understand if
it's not for everybody, but it works for me, and here's how, here's one of the ways
that I like to do it. So in this post I talked 

about wanting to get
better at facilitation. So these are the commitments that I made. In April, which actually is next week, like in a few days, so this is gonna be happening, I signed up to, I volunteered for my company's conference. I'm going to run the unconference part, so I wanted to learn facilitation by then. And I kind of charted
out a learning journey to get me to that point. So before then, I invited
my friend Steve Upton 

who's pretty good at facilitation. He came and talked to me on a live stream, which is already up. So I got to pick his
brain about facilitation. And I also signed up for my other friend Andy Polaine's course. So Andy is like really
good at facilitation, this is such a big part of his job. And he has years of
experience in doing this and leading workshops. So I signed up for his course, 

and I've done that and I also actually
published my notes on it. And at the time of this post, this was like two months ago, I also read a book called
"Open Space Technology". What's cool about this is
that as soon as I posted it, people commented on it, saying like, hey, did you think about this, or here's a resource that you
might not have considered, and this is why it's so awesome
to make pre-commitments. I was just tossing this
thing out into the void, 

saying this is what I'm gonna do, but what I got back, because I made this observable, was a lot of really good information that was sort of incidental
to my learning process, but which ended up really informing it in a really positive way. So the second part is
instrumenting the thing. Instrumentation means
making something findable. So think of it in terms of that black box of a software system, instrumenting it would be
putting something in the box 

that is recording what's happening. So in the context of a PKM system, I like to think of this as two things, one is making it findable for me, and then the other part is
making it findable for others. Now, on the finding it for me part, there are a few ways
that I like to do this, and here are some of those methods. One is by searching for it, this is still the most
common way that I do things. I use a quick switcher a lot in Obsidian. 

I also use properties, I have videos on using Dataview, still one of the most important plugins in my Obsidian workflow. I use links a lot. And by the way, this is in order of how
much I use these things, but there's no right way. You kind of should just gravitate to whatever you think
would work best for you. So I tend to make things
that are link heavy. I like maps of content. 

I like having these hub notes that are links to other notes, and I really like to see that fleshed out, depending on my interest in that topic. Folders are also something that I, okay, I admittedly don't do it that much, but other people like to organize and find things in this way. And then also tagging can be a great way to both search for and kind
of have some sort of status. 

Actually, I had a friend, Jorge Arango, come on a live stream on this channel, I'm gonna link that up there, where he had some really great
ideas about when to use tags and when actually you should
use these different forms of finding things. And then there's also bookmarks. Bookmarks are a relatively new feature, the newest of all of
these features, actually. And they are, for me, what I like to use them for is as a kind of current workspace. 

The things that I'm working on right now, all of those notes are in my
bookmarks just for easy access. I think the golden standard in making something findable for myself is some sort of visual
representation of it. Now, Obsidian does come with
its own native graph view. I kind of prefer ExcaliBrain just because it is a
little bit more customized, well, not a little bit, it's a lot more customizable. Zsolt Viczian also makes that one 

and he based it on this other app that I didn't actually use, but it's called The Brain, which is almost entirely visual
if I understand it right. And a visual graph of your
notes is really important because you start to take into account the spatial element of your notes. Is this idea spatially
close to another idea? Are they in opposition to each other? Does one strengthen the other? Those sort of ideas I think are, 

or those sort of relationships
are best explored visually. So I really like it from that perspective. Now we go to the external
findability part of it, making something observable. So in software, if this would be like putting
something inside the box or putting something inside a machine that is measuring some sort of output, then making it externally observable would be like putting it on a dashboard 

for other people to see. It would be like sending it
to other teams and saying, hey, this is what my team is doing. And in the context of a PKM system, I think one of the easiest ways to do it, especially if you're using Obsidian, is by publishing your notes. This is my public Obsidian Vault. I use Obsidian Publish, and I have a lot of my notes that you can just freely browse. I don't know why you would want to, but sometimes people do. 

Now, one of the key things for me is that I don't have a purpose for it, I don't say like, this
is my vault for work or this is my vault for Obsidian, I just follow my interests
and I post whatever. So you can kind of see from the
things that are posted here, like you see this is a Dutch tax note alongside a tabletop role-playing one. I mean, these are the river of blood, these are all gaming terms. 

And 1.5 billion tests per day at Meta, that's a work note. But I don't really classify
these notes as that, I do have some folders here, but for the most part they're just kind of higgledy-piggledy. And I just rely on those
other ways that I mentioned to find it, to find different notes. This is kind of like my stake
in the ground in the internet 

and this is my way to expose
what I've been thinking about. And especially when I'm
talking about things that I might be
particularly interested in, I really like the concept
in software development of having a changelog when there's a new version
of a bit of software. They release a changelog with
everything that has changed. I kind of borrow this and I create my own changelog 

using the vault changelog plugin, which I have modified and forked. And this is just a list
of the last 500 notes that I've touched that I am publishing. This is useful for telling people like, these are the things that I've been doing, that I've been researching, and if nothing else, it is a record of my interests. If that is all a little bit too daunting and maybe you don't have
notes to publish yet, then I would suggest thinking 

of this awesome micro-learning
concept called TIL, #TIL stands for today I learned. It's a lot less intimidating to do it because it's not really a full note, like you can see here, this is a two-sentence post on Mastodon, on a social media network. And what it is is just me saying, hey, I've been using Obsidian for like three years now or something. I just learned that you
can actually use Plausible 

with Obsidian not too long ago. And this has a benefit actually of making the place that you're posting in seem like a safer place
for people to be like, oh, actually I didn't know everything. That's an unintended benefit of it. The real cool thing is that
this is such a small way to expose a little bit of your process. So if you don't want to
go through the effort of publishing your notes, 

even publishing or
making a small part of it exposed and observable and findable already creates like a ripple effect throughout the rest of your work. The third part is monitoring the thing. Now, I talked about making
things externally observable. Monitoring it is not just
making it observable, but having the systems in place for it to be continuously observable. 

So this is actually what my company does. I work for a company called Grafana Labs, and one of the major open-source projects that we create is
something called Grafana, which is a visualization
and dashboarding tool. It can pretty much take any sort of data and then visualize it. The visualization part
is really important, kind of like how I was talking about the visual graph for PKM earlier, in software, there's a
tendency to just focus so much 

on the data, and there's a lot of it. Everything in tech is
always producing data, so you can get really lost in it. Monitoring it is not
just exposing the data, it's also expressing it to people in a way that can actually
be understandable, and a lot of times, that is visually. So this is something that can also be done with our PKM systems by
literally pulling in numbers and putting it in some sort of graph, 

but I also like to think
of it in other ways. For example, you can think of monitoring as getting other people to
do the monitoring for you. And this can be kind of tricky, right? Because maybe, especially
if you're just starting, how do you get people to actually respond? Maybe you're putting something out there, but how do you get something back? I have a few tricks for that. Here's an example, this is another Mastodon post. You'll see that Mastodon is one of my favorite social
networks for a reason, 

and it's because I can have
these rich interactions with people that I use
for my learning process. Now, in this post I'm talking
about somebody else's video. My friend Andy Polaine
made an awesome video on defensive calendaring, link to it up there. And I thought that it
was a great opportunity to sort of highlight somebody else's work. I created a note on it. I actually updated two notes, this defensive calendaring
one and productivity one, 

which I also put out there. And then I link to the original video, and this is also a #TIL, today I learned. So this is one great way to
get others to observe you, observe them, use your platform to
shine a light on ideas that are worth sharing, and participating in
their learning process. And naturally I've found
that that comes back as well, because when you participate
in what they're doing, 

they're much more likely to participate in what you are doing, and then you create this
kind of virtuous cycle where you're both
learning from each other. Another cool way of how this
can work, but in reverse, is this awesome sketch note that someone named Elaine created based on one of the videos that I made. Isn't this awesome? This is something that I never
would've done for myself. I'm not great at drawing. I mean, this is not just drawing, 

but it's also, the way that she visually
represents everything, I don't know, that's just
not one of my strengths. And this is me being the one that someone else is interacting with. And because she made this effort to participate in what I was doing, I also promoted this and got to know her, and she's an awesome person, and now I'm promoting her
stuff to all of you as well. 

Because when you create
good work like this and add value to the community, it's kind of impossible for
that not to lead anywhere. And then another thing that
I've been talking about is using social networks. Now, I think that, I mean, unless you have like
a full team or something or you just have a lot of time, maybe this is your full-time job, is gonna be really
difficult to do them all, there's so many social networks. I do not do this as a full-time job, actually I do this at nights and weekends, 

so I don't have the luxury of
choosing all of the platforms. So instead I've chosen two, my two favorite ones, the two ones that I feel
like give me personally the most value, and that's Mastodon and Discord. The post and the interactions
that I was talking about don't exist in a vacuum, so you really have to go out of your way to join and participate in communities that are worth participating in. And I found that there weren't
really enough communities 

that I felt were inclusive enough or talked about the things
that I want to talk about in my specific overlap of interests, so I made my own, and you can as well. So I chose Mastodon and Discord and I have free communities in both. Another way to get others to observe is by inviting them on your platforms and asking them all of the questions that you actually wanted to ask them under the guise of creating content, which is really just making
your learning observable, 

remember. So I've been doing this for
a few years now at work. Almost every week I do a
live stream or a recording, a recorded interview with some
of the industries experts, like really people who know way more than I do about a particular topic. Here's an example of me wanting to learn about a project called Pyroscope. I really knew almost nothing about it, and despite having done some research, 

I still didn't quite get it. So instead of trying to
push through it on my own or trying to ask people about something that was very, very niche, I went straight to the founder. Ryan Perry is the original
lead developer of this project. And I used my platform and my work to be able to invite him onto the channel and talk to him about
everything that he's doing. 

So I actually got a lot
of really good information straight from the horse's mouth, and I came away with
that from that experience with a lot more nuanced
information about Pyroscope, stuff that you really only
get when you can sit down with a person who's responsible for it all and you can say like, okay,
really level with me here. What is this thing? Why did you make it? The funny thing is that because it's like
under the guise of content, 

I don't know, it feels
less like me saying, hey, I'm such a noob at this, and it's just like, oh,
I'm asking questions for the audience in case they don't know. So let's talk about Edward
Bono's "Six Thinking Hats". This is a great book, I really recommend it. His idea is that there are different hats that everyone on a team
can wear at any given time. 

I like the idea that it is a hat because it's like a role that you put on. It is not you, it's not your personality, it's the role that
you're taking right now. So you can think of this, in my context, I think of this as the
performance testing hats. So when I am trying to make an
application more performant, these are the different
hats that I might wear. I want to particularly
focus on the black hat, the hat of ritual dissent. 

I find that dissent is something that is very difficult actually
to maintain in our culture. It can be really, really
difficult for people to receive disagreements or
criticism about their work, but it is also really difficult to give constructive feedback, and yet you need that, right? All of this, making things observable, is not worth its salt if you're not getting some
constructive feedback. 

If everything that you
got was like, great job, that is useful from a
motivation point of view, but actually the most useful
comments that I've gotten are ones where people have said, you could have explained this better, or you didn't even mention this part. And this is why I think it's important when we're talking about
building communities to also think about giving out more freely these hats of ritual dissent, making those communities a safe space for people to reach out and say, 

this could have been done better. Now, the tricky part is that you should still encourage people to do this kindly and
with compassion, right? But if you don't, if you aren't encouraging
dissent in your communities or in your interactions with people, even if you don't own a community or if you're not part of a community yet, then I think you're
missing out on a big part, a big reason for making things observable. 

Now, the last part is
refactoring the thing, and refactoring really means
in software development updating and iterating code, but it specifically means not
changing what the code does, not changing the core
functionality of the code, but maybe changing things around it, like how it's structured or
how exactly it's implemented. So I like to think of it as Lego. When you're making something with Lego, never in that process do
you think about changing 

what the Lego is made of or
changing the shape of the block, you are just thinking of
how to put things together using that block, and that still opens up
a lot of possibilities. And I think it's the
same with a PKM system. Our goal should be to create
these modular bits of notes and thoughts and ideas and then remix them in interesting ways. Sometimes those other Lego blocks are gonna be your own notes 

and sometimes they're gonna
be other people's ideas. But the point is that after
you get all of this feedback, after you've cultivated ritual dissent, you need to be able to swallow your pride and actually modify the
way that you're thinking and your notes and the stuff
that you're putting out there to reflect the learning that you've had as a result of making
your notes observable. In software development, this graphic is called the CI/CD pipeline. 

This infinity symbol stands
for continuous improvement and continuous deployment. Now, the idea really of this graphic is that software is never done. If you get to the point where you feel like something is done, then you're probably doing it wrong, because it's not just, your job doesn't end when you put something
out into production, when people are actually using it, you are supposed to stay there and listen to that feedback, 

incorporate that feedback. And so here, even after it's deployed, you're still monitoring that, and that should feed back
into your next cycle, and that should feed back into the next thing that you're making. And I think that we should also
think of notes in this way. They're never done,
they're not blog posts, they're not like books that you've printed that are never going to update again. Part of the cool thing of
having a digital PKM system is that you can afford to
keep growing those ideas. 

So you can kind of think of this as a continuous note-taking process. Another thing to consider when you are refactoring
the thing that you've made is that you should also
be continually adding to what you've made. So for example, this
Obsidian for Beginners video that I made a couple of
years ago did pretty well. And at that point, I wasn't sure, I thought maybe more
advanced Obsidian videos 

were necessary, but it was actually the
beginner part that did well. And so I released a few
other videos on that, but I also wanted to distill my learnings and also expand on them. So this one was a less
than 14-minute video that eventually turned into my course, Obsidian for Everyone. And this is a four-hour course now. So you can see that I went from what started as
like posts on Mastodon, 

or I think I was using
Twitter at the time, and then it turned into videos, which turned into more videos, which facilitated more conversation about how to use Obsidian, what it was, and I used all of that and
funneled it into this course. So I like this idea of getting deeper into a topic as you go, rather than if I had started
with a course right away, maybe I wouldn't have done too good a job 

because I would've made a
completely different course, I would've made an advanced
Obsidian user course because I didn't know that most people actually want the basics. That's really useful information to know and only information that I got because I tried things out, I tested the waters
with also an easier lift of a 14-minute video. And when we were talking about continuous note-taking earlier, another thing that I try to exploit when I'm refactoring my
notes is the overlaps 

between different interests. So I talked about continuous note-taking in the context of PKM, but I said that that is originally a software development concept. I mean, that is already
a concept that I know, so I thought it was cool to
be able to apply that to PKM. And then this one actually
went the opposite way. I first heard about or I first got into
researching "Emergence" when I joined Zsolt Viczian's
Visual Thinking Workshop. 

That whole workshop was based on us processing the book "Emergence". And then even though I was thinking of it in the context of PKM at the time, I then related it back to my work. And I have actually done talks based on emergent load
testing, for example. This is also about making
things sustainable. If I didn't exploit overlaps between different aspects of my life, 

then I would not be able to make as many things as I can now and I would also not
be having as much fun. And this is also a bit of a meta thing because this presentation
is in itself an exploitation of an overlap that I saw between the observability in
the software development sense and what that might mean for a PKM system. I think that this is also a great way 

to express your personality because only someone who
has a foot in both worlds could have come up with
this concept, right? So to summarize what I talked about here, here are a few ways to make
your PKM system observable. First you have to make the thing, and maybe that means just reducing your own
standards for quality until you can actually
consistently make something, whether that's a daily note
that you later build upon 

and start creating other notes out of, or maybe that also just means
following your passions, rather than following a script. So I really like this
bottom-up emergent approach of creating things. The second is instrumenting the thing, making it findable for yourself
from a PKM perspective. That could be like
using the right keywords or naming a note the way that you would actually search for it, and it also means making
it findable for others 

by publishing it online. I showed you my Obsidian Publish site, but there are lots of
different ways to do it, lots of static site generators. And even if you're not using Obsidian, there's probably a way to make
what you're writing public. The third way is to monitor the thing. So it's not enough to just
put something out there, you also have to listen
to what comes back. Part of that is cultivating
a ritual dissent atmosphere 

and really becoming a safe place, a safe person to give criticism to. And then after you get that feedback, whether it's criticism
or whether it's praise, then number four is to refactor the thing. You have to adapt your notes and allow them to evolve as your ideas and your
knowledge evolves as well. So part of this is all
feeding back into my book. So you can see I'm trying out
some of the same concepts, 

because I mentioned in
one of my videos, I think, how I feel about learning in public, which turned into more videos, which turned into Mastodon
posts and discussions, turned into this presentation, but it's also, hopefully soon, I'm not sure, gonna be a book, it's gonna be called "Doing It in Public". You can check out the book here. I already have an outline, but that's likely to change, 

it still changes very frequently. And you can also read some
of the chapters already. And this is in addition
to many of these topics already actually being in my public notes. That's also one of the cool things, once you've made those Lego blocks, that it's just a matter
of putting them together. So even though it looks like
I have a long way to go, I've actually already
written a lot of this stuff that I want to talk about, or if not written, then I made videos on it or
I've discussed it with people 

or they're in my personal notes. The whole point of being
able to do it in public and making things observable is that you never start from scratch, and that makes it an easier lift to make stuff in the first place. So here are some links to
various things I've mentioned. You can feel free to pause the video here, and you can also go to this
link to see these slides 'cause I've also made this
slide deck observable. 

The PKM Summit was really
an amazing experience. I got to meet a lot of really cool people, some of whom I've been
corresponding with online for years. And I also was exposed to a
lot of different ways to think about PKM and note-taking in general. I would really recommend that
anyone who's at all interested in anything that I've mentioned here or in anything that I
talk about in my channel check out the PKM Summit site. I'm not actually affiliated at all, 

other than that I spoke there, but you can check out the link here. They are going to have
another one next year also in Utrecht in March, but they're also gonna have
another one in April in the US. So if you're at all interested in that, go buy tickets or apply to speak when they're ready for that. I really recommend it. Thanks for watching. I hope that this has encouraged you to make some of your learning
a little bit more observable.
