// render hive
// 7 lines
var hex_arrangement = [
'3333',
'32223',
'321123',
'3210123'
]
var hexval = {
  0: [['profile', 'http://tecnologiacolmeia.com.br/']],
  1: [
    ['behance', 'http://tecnologiacolmeia.com.br/'],
    ['github', 'http://tecnologiacolmeia.com.br/'],
    ['twitter', 'http://tecnologiacolmeia.com.br/'],
    ['medium', 'http://tecnologiacolmeia.com.br/'],
    ['mail', 'mailto:contato@tecnologiacolmeia.com.br'],
    ['flickr', 'http://tecnologiacolmeia.com.br/']
  ],
  2: [
    ['deviantart', 'http://tecnologiacolmeia.com.br/'],
    ['codepen', 'http://tecnologiacolmeia.com.br/'],
    ['stackoverflow', 'http://tecnologiacolmeia.com.br/'],
    ['steam', 'http://tecnologiacolmeia.com.br/'],
    ['tumblr', 'http://tecnologiacolmeia.com.br/'],
    // ^ OR
    // 
    ['facebook', 'http://tecnologiacolmeia.com.br/'],
    ['reddit', 'http://tecnologiacolmeia.com.br/'],
    ['skype', 'skype:colmeiaWeb?chat'],
    ['youtube', 'http://tecnologiacolmeia.com.br/'],
    ['linkedin', 'http://tecnologiacolmeia.com.br/'],
    ['vine', 'http://tecnologiacolmeia.com.br/'],
    ['instagram', 'http://tecnologiacolmeia.com.br/']
  ],
  count: { 0: 0, 1: 0, 2: 0 },
}
$('.hive').html((new Array(8)).join(1).split('').reduce(function(mem, x, ind) {
  // console.log('-------L', ind, line_count)
  var line_count = ind < 4 ? ind + 4 : 3 + 7 - ind
  return mem + '\
    <div class="line">\
    ' +
      (new Array(line_count + 1)).join(1).split('').reduce(function(mem2, y, ind2) {
        var level = hex_arrangement[line_count - 4][ind2]
        var val = hexval[level] ? hexval[level][hexval.count[level]++] : ''
        // console.log(level)
        return mem2 + '\
          <'+(val ? 'a' : 'div')+' class="hex-container level-'+ level +' '+ (val ? 'icon ' + val[0] : '') +'" target="_blank" '+(val ? 'href="' + val[1] + '"' : '')+'>\
            <div class="hex-border"><div class="hex"><span></span></div></div>\
          </'+(val ? 'a' : 'div')+'>\
        '
      }, '')
    + '\
    </div>\
  '
}, ''))

 
let animation = function(){ $('.hive').removeClass('first-animate loaded-animate'); setTimeout(function(){ $('.hive').addClass('loaded-animate') }, 10) }
$('.hive').removeClass('loaded-animate first-animate');
setTimeout(function(){ $('.hive').addClass('first-animate') }, 10)
setTimeout(function(){ $('.hive').addClass('loaded loaded-animate') }, 2500)
window.setInterval(animation, 7000)