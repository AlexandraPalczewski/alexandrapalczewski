$(document).ready(function () {
    $(document).click(function (event) {
    	// alert("test");
        var clickover = $(event.target);
        var _opened = $(".collapse").hasClass("collapse show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});