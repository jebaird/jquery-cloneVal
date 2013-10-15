jquery-cloneVal
===============
@author Jesse Baird

Target :inputs in a form and copy their value to select number of targets using event delegation. 

A practical use case for this plugin would be an e-commerce form with billing and shipping fields containing a checkbox labeled "My billing and shipping addresses are the same" When that's checked copy / clone the values to the shipping address fields.

Take this sample markup into consideration

	<form>
		<input type="text" name="a">
		destination<br>
		<input type="text" name="b">
		<input type="text" name="c">
	</form>

If we wanted to copy a's value to b and c, we would setup the plugin like this

	$('form').cloneVal({
            targets:[
                [
                	//copy a input to b and c
                    "[name=a]",
                    "[name=b]",
                    "[name=c]"
                ]
            ]
        });

This sets up event delegation on form in the event namespace "cloneVal"(by default)

If you want to disable this event handlers just call

`$("form").off(".cloneVal")`
