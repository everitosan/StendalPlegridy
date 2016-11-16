(function() {

  var pdfv= $("#PDFViewer");
  pdfv.hide();

  $("#PDFTrigger").on("click", function() {
    pdfv.fadeIn();
  });

  $("#PDFCloser").on("click", function() {
    pdfv.fadeOut();
  });

})();
