'use strict';

if( window.hasOwnProperty('$') ){
  window.$(window).ready(function(){
    window.$('.sortable').sortable();
  });
}

if( window.hasOwnProperty('SyntaxHighlighter') ){
  window.SyntaxHighlighter.all();
}
