// Filter Area
$(document).on('keyup', ".filterInput", function(){
     var data  =   $(".filterInput").val();
     $(".ulStyled>li:not(:contains('"+data+"'))").hide();
	 $(".ulStyled>li:contains('"+data+"')").show();
});

// Force uppercase for input
$(document).on("keyup", ".autoCompBox", function(){
    this.value = this.value.toUpperCase();
});



// Add in commas for a value
String.prototype.format = function(){
	return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};


formatVal.format();