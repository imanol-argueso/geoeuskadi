import { search, bottonUp, submitBilaketa, submitBilaketa_mugik } from './search';
import { langSelect } from './langSelect';
import { responsiveMenu } from './responsiveMenu';
import { stickyHeader } from './stickyHeader';
import { scrollUp } from './scrollUp';
import { wacagCorrections } from './wacagCorrections';
import { tabs } from './tabs';
import SlimSelect from 'slim-select';

$(document).ready(function(){

  let r01gLang = 'es';
  search();
  langSelect();
  responsiveMenu();
  stickyHeader();
  scrollUp();
  wacagCorrections();
  tabs();
});

new SlimSelect({
  select: '#multiple-topics',
  placeholder: 'Selecciona tema',
  deselectLabel: '<i class="fas fa-times"></i>',
  searchPlaceholder: 'Buscar tema'
})

new SlimSelect({
  select: '#multiple-formats',
  placeholder: 'Selecciona formato',
  deselectLabel: '<i class="fas fa-times"></i>',
  searchPlaceholder: 'Buscar formato'
})

  $(".col-3 input").val("");
  
  $(".input-effect input").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  })


//*********** Bilatzaile orokorra *************//

/*
$(document).ready(function(){
	var submitIcon = $('.searchbox-icon');
	var inputBox = $('.searchbox-input');
	var searchBox = $('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
	if(isOpen == false){
	searchBox.addClass('searchbox-open');
	inputBox.focus();
	isOpen = true;
	} else {
	searchBox.removeClass('searchbox-open');
	inputBox.focusout();
	isOpen = false;
	}
	});
	submitIcon.mouseup(function(){
	return false;
	});
	searchBox.mouseup(function(){
	return false;
	});
	$(document).mouseup(function(){
	if(isOpen == true){
	$('.searchbox-icon').css('display','block');
	submitIcon.click();
	}
	});
});
function buttonUp(){
	var inputVal = $('.searchbox-input').val();
	inputVal = $.trim(inputVal).length;
	if( inputVal !== 0){
	$('.searchbox-icon').css('display','none');
	} else {
	$('.searchbox-input').val('');
	$('.searchbox-icon').css('display','block');
	}
}
*/
//*********** ARLOEN AZPIMENUA A3 ORRIETAN *************//
/*
$(document).ready(function() {
    $(".menu_webgune_bi a").each(function(){
               if ($(this).attr("href") == window.location.pathname){
                       $(this).addClass("testu_lodia_700");
               }
       });
});

*/

//*********** CONTENTLISTAK: FITXAK ANTZEMATEN ETA CSS ZUZENTZEN *************//
/*
$(document).ready(function () {
	$('section.cl_fitxak').each(
		function(){
			if ($(this).find('ul.tabs-list').hasClass('tabamount0')){
				$(this).removeClass('cl_fitxak');
						}
		 });
});
*/

//*****************************ARIALABEL****************************//
/*
$("section").each(function () {
  var arialabel = $(this).find("h1").text();
  //$(this).attr("aria-label",arialabel);
  //SECTION GUZTIEN H1 H2RA PASATZEN
	$(this).find("h1").replaceWith("<h2 class='section_izenburuzar'>" + arialabel + "</h2>");
});   
                                                           
$(".scontainer").each(function () {
    var arialabel2 = $(this).find("label").text();
    $(this).attr("aria-label",arialabel2); 
});

$(".menu_webgune_02").each(function () {
    var arialabel3 = $(this).find("h2").text();
    $(this).attr("aria-label",arialabel3);
});                                        

$(document).ready(function(){
  $(".r01ClaimPersonas").remove();             
});
*/
//*********************Tabindex gehitzen tolesgarriei*********************************//
/*
$(document).ready(function(){
  $(".accordian").attr('tabindex', 0); 
  $(".flex-control-paging li a").attr('tabindex', 0);          
});
$(document).ready(function(){
  $("font").replaceWith(function() { return $(this).contents(); });
});
*/

// JavaScript Document
//****************STYLE ETAB KENTZEN BILAKETATIK**************************//
/*
$(document).ready(function(){
  $("div.r01SourceSearchResults ul li *").removeAttr("style");
});
*/
//*********** MUGIKORRAK: FITXEN EDUKIAK ZABALTZEKO *************//
/*
$(document).ready(function () {
	if ($(window).width() < 768) {
    $("#r01gFichaCompleta>a.r01gVerFicha").trigger('click');
    $("#x88gFichaCompleta>a").trigger('click');
    $("#r01gFichaCompleta>a").trigger('click');
    $("#r01FichaCompleta>a").trigger('click');
    $("div.r01anuncio_contratacion div.r01TabsBody > div").addClass('mgk_on');
    $("div.r01anuncio_contratacion div.r01Tabs").addClass('mgk_off');
    if ( $("div.r01gContainer" ).hasClass( "r01evento" )) {
    map=null;
    x46h_fichaCompleta();
    verTodo = 0;
    }
    if ( $("div.r01gContainer" ).hasClass( "r01anuncio_contratacion" )) {
    fichaCompleta();
    }
	}
});
*/
