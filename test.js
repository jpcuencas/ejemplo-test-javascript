/**
module ('Temperature conversion')
 
test('conversion to F', function(){
    var actual1 = convertFromCelsiusToFahrenheit(20);
    equal(actual1, 68, ?Value not correct?);
     
    var actual2 = convertFromCelsiusToFahrenheit(30);
    equal(actual2, 86, ?Value not correct?);
})
 
test('conversion to C', function(){
    var actual1 = convertFromFahrenheitToCelsius(68);
    equal(actual1, 20, ?Value not correct?);
 
    var actual2 = convertFromFahrenheitToCelsius(86);
    equal(actual2, 30, ?Value not correct?);
})
/**/
/** 
console.render('#testLogger');
YUI().use('test', 'console', function (Y) {
     
     var suite = new Y.Test.Suite('Temperature conversion suite');
 
     //add a test case
     suite.add(new Y.Test.Case({
	 name: 'Temperature conversion'})); 
});
suite.add(new Y.Test.Case({
    name: 'Temperature conversion',
 
    setUp : function () {
        this.celsius1 = 20;
        this.celsius2 = 30;
         
        this.fahrenheit1 = 68;
        this.fahrenheit2 = 86;
    },
 
    testConversionCtoF: function () {
        Y.Assert.areEqual(this.fahrenheit1,         
convertFromCelsiusToFahrenheit(this.celsius1));
         
        Y.Assert.areEqual(this.fahrenheit2, 
convertFromCelsiusToFahrenheit(this.celsius2));
    },
         
    testConversionFtoC: function () {
        Y.Assert.areEqual(this.celsius1,
convertFromFahrenheitToCelsius(this.fahrenheit1));
             
        Y.Assert.areEqual(this.celsius2, 
convertFromFahrenheitToCelsius(this.fahrenheit2));
    }
}));
var console = new Y.Console({
    verbose: true,
    newestOnTop: false,
    width: '600px'
});
Y.Test.Runner.add(suite);
Y.Test.Runner.run();
/**/

var testCase = new YAHOO.tool.TestCase({
    name: "trim() Tests",

    testTrimWithLeadingWhiteSpace: function(){
        var result = trim("    Hello world!");
        YAHOO.util.Assert.areEqual("Hello world!", result);
    }
});

window.onload = function(){

    //create the logger
    var logger = new YAHOO.tool.TestLogger("testLogger");

    //run the tests
    YAHOO.tool.TestRunner.run();
};