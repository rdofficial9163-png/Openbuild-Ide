(function(){
  document.documentElement.classList.add('js');
  var c=window.OPENBUILD_CONFIG||{}, note=document.getElementById('cta-note');
  function ok(u){return typeof u==='string'&&/^https:\/\//i.test(u)}
  document.querySelectorAll('[data-cfg]').forEach(function(a){
    var k=a.getAttribute('data-cfg'), u=c[k];
    if(ok(u)){a.href=u;a.target='_blank';a.rel='noopener noreferrer';a.hidden=false;}
    else if(a.hasAttribute('data-hide-empty')){a.hidden=true;}
    else{a.addEventListener('click',function(e){e.preventDefault();
      if(note){note.textContent=(k==='downloadUrl'?'Download':'Source')+' link not configured yet — '+(c.releaseLabel||'coming soon')+'. Set it in site-config.js.';}});}
  });
  var b=document.getElementById('menu-btn'),n=document.getElementById('nav');
  function set(o){b.setAttribute('aria-expanded',o);n.classList.toggle('open',o);}
  b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
  n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  }else document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});
  document.getElementById('yr').textContent=new Date().getFullYear();
})();
