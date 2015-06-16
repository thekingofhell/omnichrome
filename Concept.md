# The Concept™ #

The whole idea is to have an extensible popping-up console in Chrome that allows developers to publish on the web their commands and users to install them and start scripting. Since the nature of this project, users will most likely be developers as well, so everyone that uses Omnichrome is encouraged to pay visit here from time to time to suggest improvements or propose patches.

# User stories #

This section collects all the stories that Omnichrome should support. Nothing has been developed at the moment, so it's mostly a wish list.

## Basic usage ##

At the very basic step, Omnichrome should be able to run at least one command. The PoC stage demands at least the existence of one builtin command, let's say "help", which displays back the usage guide to the user.

  * Omnichrome will present a [browser action](http://code.google.com/chrome/extensions/browserAction.html) that when clicked will show up the Omnicrome console (call it [popup](http://code.google.com/chrome/extensions/browserAction.html#popup), if you like). Alternatively, whenever it will be implementedin Chrome, the popup could be triggered via a keyboard shortcut. 'Cos mice are not fast enough.

  * The console will contain a prompt area ready to receive some user input and the output area, which will be blank until a command is typed in the prompt area.

  * The user will type in the builtin "help" command in the prompt area.

  * Omnichrome includes a command parser that will process the prompt area content, with the resulting usage information will show up in the output area.

## External Commands ##

Commands will be "built in" at the first stage. Nonetheless, the target is to enable configurable commands to be hosted in the wild and configured to be part of the available commands in Omnichrome.

  * The user opens the configuration page for Omnichrome

  * The user is presented a list of remotely hosted commands, which will be empty at the beginning

  * The user is able to add a new remote command specifying an URL

  * The configuration page will try to fetch the remote command and will display if/which commands became available

  * Commands will still be hosted on the remote machine, nothing gets in the user box

  * Commands can be uninstalled by clearing out / removing the corresponding URL