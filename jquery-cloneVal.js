/*
 * jquery-cloneVal
 * Target Select inputs in a form and copy their value to select number of targets using event delegation
 * @author Jesse Baird - jebaird.com
 *
 * 
 * <form>
 * <input type="text" name="a"><br>
        destination<br>
    <input type="text" name="b"><br>
    <input type="text" name="c"><br>
 * 
 * </form>
 * 
 * 
 *  $('form').cloneVal({
            targets:[
                [
                    ".select",
                    ".target"
                ],
                [
                	//copy a input to b and c
                    "[name=a]",
                    "[name=b]",
                    "[name=c]"
                ]
            ]
        });
 * 
 * 
 */
(function( $ ) {

	$.fn.cloneVal = function( options ) {
		var defaults = {
			// copy the values from source to destination on init of plugin
			cloneOnInit: false,
			
			eventNS: "cloneVal",
			/*
			 * if you dont need full support for ie9 try 
			 * setting this option to [ "input" ]
			 * https://developer.mozilla.org/en-US/docs/Web/Reference/Events/input
			 */
			events: [ "change", "blur", "keyup" ],
			targets: [
			/*
			 [
			 ["source","target"]
			 ]
			 */
			]
		}, 
		settings = $.extend( {}, defaults, options ), 
		//create a string like event.ns event2.ns
		eventString = settings.events.join( "." + settings.eventNS + " " ) + "." + settings.eventNS;

		return this.each( function(){
			
			var targets = settings.targets, 
				i = targets.length, 
				$this = $( this );
			
			while( i-- ) {
				
				var set = targets[ i ],
					source = set[ 0 ],
					dest = set.slice( 1 ).join( "," );

				$this.on( eventString, source, dest, function( e ) {
					
					$this.find( e.data )
						.val( $( this ).val() )
						//match up the values
						.trigger( e.type );
				})
				if( settings.cloneOnInit ){

					$this.find( source ).trigger( settings.events[ 0 ] );
				}
			}

		});

	}


})( jQuery );