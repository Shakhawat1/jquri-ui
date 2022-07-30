
 $(document).ready(function(){
  // dragable
      $( "#draggable" ).draggable();
// droppable
$( "#drag" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // resigable start
    $( "#resizable" ).resizable();
// accourdin start
$( "#accordion" ).accordion();
// example accourdin
$( "#accor" ).accordion({
       collapsible: true
});

// example sortable
$( "#accordn" )
      .accordion({
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        
      });
      // auto-complet star
 var availableTags = ["html","css","bootstrap","js"];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    // date-picar start
    $( "#datepicker" ).datepicker();
   // menu start
   $( "#menu" ).menu();
   // proggrs start
   $( "#progressbar" ).progressbar({
      value: 37
    });
   // slider start
   $( "#slider" ).slider();
   // tooltip start
   $( document ).tooltip();
   // spinner start
     var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();
}); 
