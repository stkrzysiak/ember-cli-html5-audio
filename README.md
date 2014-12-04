# Ember-cli-html5-audio

This is a basic ember-cli addon for creating an html5 element.  It serves more
as an example of how it can be done.  It is just as easy as adding audio tags to
your template.hbs file, but this was created for a page with many audio elements, 
so this was cleaner.

One interesting issue the author had was that the audio tag would not work with
a nested `<source>` tag, therefor this was used: 
`<audio controls preload="none" {{bind-attr src=src}}></audio>`

## Installation

* npm install ember-cli-html5-audio

## Usage

In a template file, you can do something like 
`{{html5-audio-basic url=track.url}}` 
where track.url points to a song url.


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
