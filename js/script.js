// フォント

// garamand
(function(d) {
  var config = {
    kitId: 'nxs4fnb',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// セザンヌ
(function(d) {
  var config = {
    kitId: 'nxs4fnb',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// zen old mincho
(function(d) {
  var config = {
    kitId: 'nxs4fnb',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);


// ローディング
//logoの表示
$(window).on('load',function(){
  $("#loading").delay(1000).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
  $("#loading_logo").delay(1000).fadeOut('slow');//ロゴを1秒（1000ms）待機してからフェードアウト
});

$(window).on('load',function(){
  $("#hari").delay(1000).fadeOut('slow');//ローディング画面を1秒（1000ms）待機してからフェードアウト
  $("#hari").delay(1000).fadeOut('slow');//ロゴを1秒（1000ms）待機してからフェードアウト
});

// top

jQuery(function() {
  var pagetop = $('.page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {  //1000pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});




















