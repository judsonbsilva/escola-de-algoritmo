SyntaxHighlighter.brushes.Portugol = function(){
  var funcs       = 'var';
  var keywords    = 'caractere inteiro real';
  var operators   = 'e ou';

  this.regexList = [
    { regex: /--(.*)$/gm,                                               css: 'comments' },
    { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },
    { regex: new RegExp(this.getKeywords(funcs), 'gmi'),                css: 'color2' },
    { regex: new RegExp(this.getKeywords(operators), 'gmi'),            css: 'color1' },
    { regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' }
  ];

};

SyntaxHighlighter.brushes.Portugol.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Portugol.aliases  = ['portugol', 'ptgol'];
