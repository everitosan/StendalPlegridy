(function() {
  var pdfHwlper;
  var pdfv= $("#PDFViewer");
  pdfv.hide();

  $("#PDFTrigger").on("click", function() {
    pdfHwlper = cordova.InAppBrowser.open("res/IPP PLEGRIDY 2808.pdf", "_blank", "location=yes, hidden=yes, presentationstyle=pagesheet");
    pdfHwlper.show();
  });

  $("#PDFCloser").on("click", function() {
    pdfHwlper.close();
  });

  document.addEventListener("deviceready", function() {
  }, false);


})();
