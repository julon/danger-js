---
title: FAQ
subtitle: Frequently Asked Questions
layout: guide_js
order: 3
blurb: Common questions that come up in our GitHub issues.
---

## Can Danger comment inside a file on an PR?

Not yet, but there is a lot of discussion on [danger-js#77][77].

## Can I use the same Dangerfile across many repos?

Ish, it's currently quite complex to set up, but work is on-going on [Danger/Peril][peril]. This is a hosted version of Danger which does not need to run on CI. Using Peril you can use Dangerfiles to reply to basically any GitHub webhook type.

## I only want to run Danger for internal contributors

Let's say you run Danger on the same CI service that deploys your code. If that's open source, you don't want to be letting anyone pull out your private env vars. The work around for this is to not simply call Danger on every test run:

```sh
'[ ! -z $DANGER_GITHUB_API_TOKEN ] && yarn danger ci || echo "Skipping Danger for External Contributor"'
```

This ensures that Danger only runs when you have the environment variables set up to run. This is how Danger works for a lot of the open source mobile projects in Artsy.

## I want to help influence Danger's direction

We'd recommend first becoming acquainted with the [VISION.md][] inside Danger, this is the long-term plan. Then there are two ways to start contributing today:

* Opinions are extra welcome on issues marked as [Open For Discussion][open].

* Well defined work items like features or fixes are marked as [You Can Do This][you-can-do-this].

We keep comments in the public domain, there is a Slack, but it's very rarely used. If you're interested in joining, you can DM [orta][].

[77]: https://github.com/danger/danger-js/issues/77
[vision.md]: https://github.com/danger/danger-js/blob/master/VISION.md
[open]: https://github.com/danger/danger-js/issues?q=is%3Aissue+is%3Aopen+label%3A%22Open+for+Discussion%22
[you-can-do-this]: https://github.com/danger/danger-js/issues?q=is%3Aissue+is%3Aopen+label%3A%22You+Can+Do+This%22
[orta]: https://twitter.com/orta/
[peril]: https://github.com/danger/peril
