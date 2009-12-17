OmnichromeTest = TestCase("OmnichromeTest");

OmnichromeTest.prototype.testLocalStorage = function ()
{
	assertNotNull ("Local storage does not exist", localStorage);
	
	var savedCommands = localStorage["commands"];
	if (savedCommands == null)
	{
		console.log ("Storage was found empty");
		localStorage["commands"] = "test";
	}
	else
	{
		console.log ("Storage was found not empty");
	}
	
	var savedCommands = localStorage["commands"];
	assertEquals (savedCommands, "test");
};

OmnichromeTest.prototype.testStringMatch = function ()
{
	var one = "pretty long string that contains everything I need";
	var two = "pre";
	
	var firstWord = two.split (" ", 1)[0];
	var truncOne = one.substring(0, firstWord.length);
	
	assertTrue (truncOne == firstWord);
};

OmnichromeTest.prototype.testCommandParser = function ()
{
	var parser = new CommandParser ();
	
	assertEquals ("CommandParser", parser.className);
	
	var commands = parser.commands;
	assertEquals (2, commands.length);
	
	var testCommand = "help";
	var hints = parser.hint(testCommand);
	
	assertEquals (1, hints.length);
	
	testCommand = "ncduaocdlas";
	var hints = parser.hint(testCommand);
	
	console.log (hints);
	
	assertEquals (0, hints.length);
};