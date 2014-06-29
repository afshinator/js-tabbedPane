/*
 * tabbed.js  - by Afshin Mokhtari
 *
 */

$(function() {

    // Initially the welcome tab is active
    var $currentlyActiveTab = $( '#welcome' ),
        $oldTab;

    var whichClicked = 'welcome',
        newClick = '';
    
    $oldTab = $('nav a:first-of-type');

    // Handle click on menu items which activate the different panes/tabs.
    $( '.tab' ).on( 'click', function( event ) {
        event.preventDefault();                                     // Prevent link being followed
        newClick = $( this ).text().toLowerCase();

        if ( newClick !== whichClicked ) {
            $oldTab.removeClass( 'pressed' );
            $oldTab = $( this );

            $currentlyActiveTab.css( 'display', 'none' );           // Hide the last active pane

            $currentlyActiveTab = $( '#' + newClick );              // Set variable that indicates what the currently active pane is
            $currentlyActiveTab.css( 'display', 'block' );          // Display the new currently active pane
            whichClicked = newClick;

            $( this ).addClass( 'pressed' );
        }
    });

});
