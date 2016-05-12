'use strict';

try {
  if( window.hasOwnProperty('$') ){
    window.$(window).ready(function(){
      window.$('.sortable').sortable();
    });
  }
} catch(e){
  console.log(e);
}
