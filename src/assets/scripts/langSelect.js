//***************************LANGUAGE SELECTION**********************************************//

export var langSelect = function(){
    //Disable down language selection area with styles
    $('.r01gLangSelector').removeAttr('id');
	  $(".r01gLangSelector").css("display", "none");  
  
        var hizkuntza_ul = $(".r01gLangSelector");
        hizkuntza_ul.clone().css("display","block").appendTo(".goib_hizkuntza");
        hizkuntza_ul.clone().css("display","inline-block").appendTo(".language");
  
    //If it is a search
  	if (window.location.href.indexOf("r01kQry") > -1){
  		$('.goib_hizkuntza a.r01gLangUnSelected').click(function(event) {
        var langtarget = $(this).attr('lang');
		var hizkuntzaURL = $(this).attr("href");
		var bilaketaurl = location.search.replace('documentLanguage.EQ.'+r01gLang,'documentLanguage.EQ.'+langtarget).replace('r01kLang='+r01gLang,'r01kLang='+langtarget);
		$(this).attr("href", hizkuntzaURL+bilaketaurl);      
		});
	}  
};