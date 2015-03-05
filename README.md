# CodeCamp

A demonstration of AngularJS and exploration of the Web Audio API.  Runs on a simple node.js server serving static content.

# To Install

Run the following to install node modules:

npm install

# To Run Locally

Run the following:

npm install connect serve-static

node server.js

# Vendor Javascript Dependencies Managed Outside of node

audioSynth.js from https://github.com/keithwhor/audiosynth

musicPlayer.js from https://github.com/coatsnmore/MusicPlayerJS.git

# Testing

Jasmine thats runs in two ways:

1) Directly from grunt in the headless PhantomJS browser.  This will generate a summary file and run a static complexity analysis.

'grunt watch' and 'grunt jasmine'

2) Through karma in Chrome.  Currently watches Jasmine and source for changes.

# Tool Chain List

node
grunt
jasmine
grunt
uglify
jshint
karma

