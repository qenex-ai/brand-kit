/* QENEX Wordmark — billion-dollar tech identity.
   Renders one canonical, premium mark across the system.
   Usage: <span data-qenex-mark="primary|knockout|inverse|mono|cosmos" data-size="80"></span>
*/
(function(){
  function uid(){ return 'qx-' + Math.random().toString(36).slice(2,8); }

  function mark(variant, h){
    h = h || 80;
    variant = variant || 'primary';
    var W = 360, H = 88;
    var id = uid();

    var palettes = {
      primary:  { ring: 'url(#'+id+'-g)',  tail: 'url(#'+id+'-g)',  orbit: '#22D3EE', orbitOp: .85, nuc: '#22D3EE', text: '#F4F4F8' },
      cosmos:   { ring: 'url(#'+id+'-g)',  tail: 'url(#'+id+'-g)',  orbit: '#22D3EE', orbitOp: .9,  nuc: '#22D3EE', text: '#FFFFFF' },
      knockout: { ring: '#FFFFFF',         tail: '#FFFFFF',         orbit: '#FFFFFF', orbitOp: .55, nuc: '#FFFFFF', text: '#FFFFFF' },
      inverse:  { ring: 'url(#'+id+'-g)',  tail: 'url(#'+id+'-g)',  orbit: '#6D28D9', orbitOp: .55, nuc: '#6D28D9', text: '#0A0E27' },
      mono:     { ring: '#0A0E27',         tail: '#0A0E27',         orbit: '#0A0E27', orbitOp: .5,  nuc: '#0A0E27', text: '#0A0E27' }
    };
    var p = palettes[variant] || palettes.primary;

    var cx = 44, cy = 44;
    var rOuter = 30, rInner = 23;
    var tailStart = { x: cx + rOuter * 0.78, y: cy + rOuter * 0.78 };
    var textX = cx + rOuter + 12;

    var svg = ''+
      '<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="height:'+h+'px; display:block;">'+
        '<defs>'+
          '<linearGradient id="'+id+'-g" x1="0" y1="0" x2="1" y2="1">'+
            '<stop offset="0"   stop-color="#1E1B4B"/>'+
            '<stop offset=".35" stop-color="#4C1D95"/>'+
            '<stop offset=".7"  stop-color="#7C3AED"/>'+
            '<stop offset="1"   stop-color="#D946EF"/>'+
          '</linearGradient>'+
          '<mask id="'+id+'-m">'+
            '<rect width="'+W+'" height="'+H+'" fill="black"/>'+
            '<circle cx="'+cx+'" cy="'+cy+'" r="'+rOuter+'" fill="white"/>'+
            '<circle cx="'+cx+'" cy="'+cy+'" r="'+rInner+'" fill="black"/>'+
            '<rect x="'+(tailStart.x-3.2)+'" y="'+(tailStart.y-3.2)+'" width="22" height="6.4" rx="1.2" fill="white" transform="rotate(45 '+tailStart.x+' '+tailStart.y+')"/>'+
          '</mask>'+
        '</defs>'+

        '<rect width="'+W+'" height="'+H+'" fill="'+p.ring+'" mask="url(#'+id+'-m)"/>'+

        '<g opacity="'+p.orbitOp+'" fill="none" stroke="'+p.orbit+'" stroke-width=".9">'+
          '<ellipse cx="'+cx+'" cy="'+cy+'" rx="18" ry="6" transform="rotate(28 '+cx+' '+cy+')"/>'+
          '<ellipse cx="'+cx+'" cy="'+cy+'" rx="18" ry="6" transform="rotate(-28 '+cx+' '+cy+')"/>'+
          '<ellipse cx="'+cx+'" cy="'+cy+'" rx="18" ry="6" transform="rotate(90 '+cx+' '+cy+')"/>'+
        '</g>'+

        '<circle cx="'+cx+'" cy="'+cy+'" r="2.4" fill="'+p.nuc+'"/>'+

        renderWordmark(textX, cy, p.text)+
      '</svg>';

    return svg;
  }

  function renderWordmark(x, cy, fill){
    var H = 32;
    var top = cy - H/2;
    var bot = cy + H/2;
    var w = 22;
    var s = 4.6;
    var gap = 6;

    function E(ox){
      return ''+
        '<rect x="'+ox+'" y="'+top+'" width="'+s+'" height="'+H+'" fill="'+fill+'"/>'+
        '<rect x="'+ox+'" y="'+top+'" width="'+w+'" height="'+s+'" fill="'+fill+'"/>'+
        '<rect x="'+ox+'" y="'+(cy - s/2)+'" width="'+(w*0.78)+'" height="'+s+'" fill="'+fill+'"/>'+
        '<rect x="'+ox+'" y="'+(bot-s)+'" width="'+w+'" height="'+s+'" fill="'+fill+'"/>';
    }
    function N(ox){
      return ''+
        '<rect x="'+ox+'" y="'+top+'" width="'+s+'" height="'+H+'" fill="'+fill+'"/>'+
        '<rect x="'+(ox+w-s)+'" y="'+top+'" width="'+s+'" height="'+H+'" fill="'+fill+'"/>'+
        '<polygon fill="'+fill+'" points="'+
          ox+','+top+' '+
          (ox+s*1.3)+','+top+' '+
          (ox+w)+','+(bot-s*0.4)+' '+
          (ox+w)+','+bot+' '+
          (ox+w-s*1.3)+','+bot+' '+
          ox+','+(top+s*0.4)+
        '"/>';
    }
    function X(ox){
      var w2 = w + 2;
      return ''+
        '<polygon fill="'+fill+'" points="'+
          ox+','+top+' '+
          (ox+s*1.3)+','+top+' '+
          (ox+w2)+','+bot+' '+
          (ox+w2-s*1.3)+','+bot+
        '"/>'+
        '<polygon fill="'+fill+'" points="'+
          (ox+w2)+','+top+' '+
          (ox+w2-s*1.3)+','+top+' '+
          ox+','+bot+' '+
          (ox+s*1.3)+','+bot+
        '"/>';
    }

    var out = '';
    out += E(x);
    out += N(x + w + gap);
    out += E(x + (w + gap)*2);
    out += X(x + (w + gap)*3);
    return out;
  }

  function render(){
    document.querySelectorAll('[data-qenex-mark]').forEach(function(el){
      var v = el.getAttribute('data-qenex-mark');
      var s = parseInt(el.getAttribute('data-size') || '80', 10);
      el.innerHTML = mark(v, s);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
  window.QENEXMark = { render: render, html: mark };
})();
