# CodeCamp

A demonstration of AngularJS and exploration of the Web Audio API.  Runs on a simple node.js server serving static content.

## Install the dependencies:

>npm install

## Run the application server:

>npm install connect serve-static
>node server.js

## Open your browser:

>http://localhost:8080/codeCamp.html

## Vendor Javascript Dependencies Managed Outside of node

*audioSynth.js from https://github.com/keithwhor/audiosynth
*musicPlayer.js from https://github.com/coatsnmore/MusicPlayerJS.git

# Testing

## Jasmine thats runs in two ways:

* Directly from grunt in the headless PhantomJS browser.  This will generate a summary file and run a static complexity analysis.

>grunt watch
>grunt jasmine

* Through karma in Chrome.  Currently watches Jasmine and source for changes.

>grunt karma

# Tool Chain List

*node
*grunt
*jasmine
*grunt
*uglify
*jshint
*karma

