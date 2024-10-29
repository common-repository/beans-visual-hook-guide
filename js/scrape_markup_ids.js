jQuery(document).ready(function(){

  // Scrape the elements with a data-markup-id values into a node list.
  var allDataMarkupIdValuesNodeList = document.querySelectorAll("[data-markup-id]");

  // Create an array to store the data-markup-id values.
  var markupIdArray = new Array();

  // Loop through the node list and store the markup id values in the array.
  for ( var i = 0; i < allDataMarkupIdValuesNodeList.length; i++) {

    var markupId = allDataMarkupIdValuesNodeList[i].dataset.markupId;
    var elementByMarkupId = document.querySelectorAll("[data-markup-id='" + markupId + "']");

    markupIdArray[i] = markupId;

    // Add the markup id as a class to it's element - to be used for making css changes later.
    elementByMarkupId[0].className += " " + markupId;
  }

  // Ajax call to send the array back to a callback.
  jQuery.ajax({
    type: 'POST',
    url: myAjax.ajaxurl,
    data: {
      action: "bvhg_pass_markup_id_array",
      security: myAjax.nonce,
      markup: markupIdArray,
    }
  });
});






