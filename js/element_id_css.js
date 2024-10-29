jQuery(document).ready(function(){

  // receive the markup array from a WordPress localize function and store it in a variable
  var classes = element.elementClass;

  // If the array is empty return early - stops a console error
  if ( ! classes ) {
    return;
  }

  // Loop through the markup array and add css styles
  for( var i = 0;  i < classes.length; i++) {

    var elementClass = classes[i];

    if ( elementClass === 'beans_html' ) {
      document.getElementsByClassName( elementClass )[0].setAttribute("style", "border:solid 1px orange; margin: 39px 8px 8px !important;");
    } else if ( elementClass === 'beans_search_form_input_icon' ) {
      document.getElementsByClassName( elementClass )[0].setAttribute("style", "border:solid 1px orange; margin: 5px !important; position: inherit; width: auto;");
    } else {
      document.getElementsByClassName( elementClass )[0].setAttribute("style", "border:solid 1px orange; margin: 5px !important;");
    }

    document.getElementById("wp-admin-bar-bvhg_html_" + elementClass +"hook" ).getElementsByClassName("ab-item")[0].style.color = "yellow";
  }
});




