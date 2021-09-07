//***************************LANGUAGE SELECTION**********************************************//

export var langSelect = function(){
    //Disable down language selection area with styles
    $('.r01g-lang-selector').removeAttr('id');
	  $(".r01g-lang-selector").css("display", "none");  
  
        var hizkuntza_ul = $(".r01g-lang-selector");
        hizkuntza_ul.clone().css("display","block").appendTo(".goib-hizkuntza");
        hizkuntza_ul.clone().css("display","inline-block").appendTo(".language");
  
    //If it is a search
  	if (window.location.href.indexOf("r01kQry") > -1){
  		$('.goib-hizkuntza a.r01gLangUnSelected').click(function(event) {
        var langtarget = $(this).attr('lang');
		var hizkuntzaURL = $(this).attr("href");
		var bilaketaurl = location.search.replace('documentLanguage.EQ.'+r01gLang,'documentLanguage.EQ.'+langtarget).replace('r01kLang='+r01gLang,'r01kLang='+langtarget);
		$(this).attr("href", hizkuntzaURL+bilaketaurl);      
		});
	}
};