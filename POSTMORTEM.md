# Yay for problems!
It's how we learn. Or... _relearn_ in my case. I got locked up for 3 hours on this, spent a chunk of my weekend trying to figure it out. Also wrote a post about it if you're interested.

## Vuetify and Nuxt are Powerful
I can be snarky, especially when I'm frustrated. That's not fair to these powerful tools!

 - With great power comes great frustration, especially when things change so often
 - These tools do a lot for you, sometimes it's just not obvious
 - I need to be more patient

## I'm Human
I am editing things out - but _only_ to keep a good pace and also remove redundancy.

 - I make ridiculous errors (spelling, omissions, etc) just like anyone
 - I get distracted trying to code and speak at the same time
 - I'm doing this on nights and weekends

## The Solution
Vuetify was trying to be helpful as I was completely overwriting the state object, `course`. This quote from someone responding to my post hit it right on the head:

> Interesting read, I’m not a Vue developer but from what I can tell this boils down to essentially a value/reference type issue? You wholesale replaced the thing be monitored rather than updating the thing being monitored? 

The solution was to use `Object.assign`, which I'll show you...

## How did I actually solve this?
I'm adding this bit after I recorded the wrapup as it might be interesting to some folks. Basically it was a process of _thrashing_, which means I tried all kinds of changes to see what broke and how. I _did_ start with a step-wise process, but threw that out the window when things didn't change.

I went on a walk after a few hours and I kept coming back to the thought: "why are only two buttons duplicated?" It seemed too coincidental that they were also the ones with dynamic links (aka `course.discussion`). I replaced the code with a hard-coded value and the problem went away (`href='test'`).

That's when I knew it had something to do with state and then the sky fell in and I realized it was a problem I had solved a few times before: using `Object.assign`.