hijs
====

> hijs is a dead-simple syntax highlighter for JavaScript code on the browser.

By default, it highlights everything inside `<code>` blocks.

If you have command-line snippets, such as:

    $ ls -l > /dev/null

it will skip those, cause they ain't no JavaScript.

usage
-----

Put this at the end of your `<body>`:

    <script src="hijs.js"></script>

If you would like to specify what gets highlighted, set the global `hijs` variable before you include the script:

    window.hijs = '.highlight';

example
-------

Code extract from http-console, highlighted by `hijs`:

![screenshot](http://dl.dropbox.com/u/251849/hijs-example.png)

philosophy
----------

hijs is a simple solution to a potentially complicated problem. It won't
fit all your needs, but if what you're trying to achieve is simple enough,
hijs might be the tool for you.

styling
-------

hijs wraps tokens in `<span>` tags. You can style them like so:

    code .keyword              { font-weight: bold }
    code .string, code .regexp { color: green }
    code .class, code .special { color: blue }
    code .number               { color: pink }
    code .comment              { color: grey }

more info
---------

**RTFC**

