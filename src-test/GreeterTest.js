GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
  jstestdriver.console.log("JsTestDriver", greeter.greet("World"));
  console.log(greeter.greet("Browser", "World"));
};

GreeterTest.prototype.testJSClass = function ()
{
	var Animal = new JS.Class({
        initialize: function(name) {
            this.name = name;
        },

        speak: function(things) {
            return 'My name is ' + this.name + ' and I like ' + things;
        }
    });
	
	var nemo = new Animal('Nemo');    // nemo.name == "Nemo" 
    var says = nemo.speak('swimming')
    
    assertEquals (says, "My name is Nemo and I like swimming");
    jstestdriver.console.log("JsTestDriver", "Nemo says: " + says);
}

