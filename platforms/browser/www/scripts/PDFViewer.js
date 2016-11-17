(function() {

  var pdfv= $("#PDFViewer");
  pdfv.hide();

  $("#PDFTrigger").on("click", function() {
    pdfv.fadeIn();
  });

  $("#PDFCloser").on("click", function() {
    pdfv.fadeOut();
  });

  document.addEventListener("deviceready", function() {
    navigator.notification.alert("ready", null, "alert", "ok");
    cordova.InAppBrowser.open("res/IPP PLEGRIDY 2808.pdf", "_self", "location=yes");
  }, false);


})();
