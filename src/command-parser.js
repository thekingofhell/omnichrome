/**
 * CommandParser is the beating heart of OmniChrome and its
 * command framework. It has access to a collection of registered
 * commands and parses a command line to dispatch it to the correct
 * command handler.
 * @constructor
 */
CommandParser = function ()
{
	this.className = "CommandParser";
	
	/**
	 * Sets the builtin command handlers and, in the future,
	 * it will grab external commands out in the wild.
	 */
	this.initializeCommands = function ()
	{
		return [{"name" : "help"},
		        {"name" : "removeme"}];
	};

	this.commands = this.initializeCommands();
	
	/**
	 * Iterprets the command line to understand which command is being
	 * invoked, or a set of possible commands that match with
	 *  the typed input
	 */
	this.hint = function (commandLine)
	{
		var firstWord = commandLine.split (" ", 1)[0];
		
		console.log ("firstWord", firstWord);
		
		var result = new Array();
		
		for (var i in this.commands)
		{
			var truncatedCmd = this.commands[i].name.substring (0, firstWord.length);
			if (truncatedCmd == firstWord)
			{
				result.push (this.commands[i]);
			}
		}
		
		return result;
	};
};