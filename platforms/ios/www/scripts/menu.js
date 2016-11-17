(function() {
  var Loader = function(url) {
    this.url = url;
    this.append = function(data, container) {
      $(container).append(data);
    };
    this.load = function(callbackFn) {
      $.ajax({
        method:"GET",
        dataType: "xml",
        url: this.url,
        complete: function(data) {
          callbackFn(data)
        }
      });
    }
    this.setListener = function() {
      var menu = $("#alaMenu");
      var trigger = $("img[src='images/svg-pegado-1005x58.svg?crc=4171198256']");
      var closer =  $( menu.find(".closeMenu") );

      menu.hide();

      trigger.on("click", function() {
        menu.fadeIn();
      });
      closer.on("click", function() {
        menu.fadeOut();
      });

    }
  };

  var mLoader = new Loader("menu.html");

  mLoader.load( function (data) {
    mLoader.append(data.responseText, "body");
    mLoader.setListener();
  });

})();
