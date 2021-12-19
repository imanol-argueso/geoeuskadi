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


