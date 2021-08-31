//*********** GENERAL SEARCH *************//

export var search = function(){
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
};


export var bottonUp = function(){
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
	$('.searchbox-icon').css('display','none');
  } else {
    $('.searchbox-input').val('');
	$('.searchbox-icon').css('display','block');
  }
}

export var submitBilaketa = function(idiom, egitura, orriaBilaketa){
  var valBilaketa = $('input[name=fullTextBilaketa]').val();
  var urlBilaketa = orriaBilaketa+idiom+'?r01kQry=cA:'+egitura+';mA:documentLanguage.EQ.'+idiom+',fullText.LIKE.'+valBilaketa+';pp:r01PageSize.10;p:Inter,Inter_portal&fullText='+valBilaketa;
  location.href = urlBilaketa;
}
    
export var submitBilaketa_mugik = function(idiom2, egitura2, orriaBilaketa2){
  var valBilaketa_mugik = $('input[name=fullTextBilaketa_mugik]').val();
  var urlBilaketa_mugik = orriaBilaketa2+idiom2+'?r01kQry=cA:'+egitura2+';mA:documentLanguage.EQ.'+idiom2+',fullText.LIKE.'+valBilaketa_mugik+';pp:r01PageSize.10;p:Inter,Inter_portal&fullText='+valBilaketa_mugik;
  location.href = urlBilaketa_mugik;
}