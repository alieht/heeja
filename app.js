
/* ═══ FEST FOOD HEEJA - MAIN APP ═══ */
var SK="h_v2",CK="h_c1",OK="h_o1";
var DD={deals:[{id:"d1",n:"پیتزا پپرونی",d:30,op:180000,np:126000,img:"pizza-pepperoni.jpg",itemId:"p4"},{id:"d2",n:"چیزبیف برگر",d:25,op:150000,np:112500,img:"burger-cheese-beef.jpg",itemId:"b1"},{id:"d3",n:"پاستا آلفردو",d:20,op:130000,np:104000,img:"pasta-alfredo-classic.jpg",itemId:"t1"},{id:"d4",n:"ساندویچ استیک",d:35,op:200000,np:130000,img:"sandwich-steak-premium.jpg",itemId:"s1"},{id:"d5",n:"سالاد سزار",d:15,op:90000,np:76500,img:"salad-caesar-grilled.jpg",itemId:"l1"}],cats:{pizza:{n:"پیتزا",e:"🍕",c:"#c0392b",scs:{it:{n:"ایتالیایی",its:[{id:"p1",n:"کواترو",d:"چهارفصل",p:175000,r:4.5},{id:"p2",n:"تالیاتا",d:"فیله",p:220000,r:4.7},{id:"p3",n:"پولو",d:"مرغ",p:165000,r:4.3},{id:"p4",n:"پپرونی",d:"کلاسیک",p:160000,r:4.8},{id:"p5",n:"استرامبولی",d:"رول",p:190000,r:4.2},{id:"p6",n:"کالزونه",d:"ریکوتا",p:185000,r:4.4},{id:"p7",n:"دیابلو",d:"تند",p:170000,r:4.6},{id:"p8",n:"بیکن چوریزو",d:"بیکن",p:200000,r:4.5},{id:"p9",n:"مارگاریتا",d:"ریحان",p:120000,r:4.1}]},am:{n:"آمریکایی",its:[{id:"a1",n:"رست بیف",d:"BBQ",p:210000,r:4.3},{id:"a2",n:"چیکن BBQ",d:"مرغ",p:195000,r:4.5},{id:"a3",n:"استافد کراست",d:"پنیری",p:230000,r:4.7},{id:"a4",n:"تاکو",d:"سالسا",p:185000,r:4.2},{id:"a5",n:"میکس",d:"ترکیبی",p:220000,r:4.4},{id:"a6",n:"پپرونی آمریکایی",d:"بزرگ",p:175000,r:4.6},{id:"a7",n:"مخصوص سرآشپز",d:"ویژه",p:250000,r:4.9},{id:"a8",n:"آمریکن ساسج",d:"سوسیس",p:190000,r:4.3}]}}},burger:{n:"برگر",e:"🍔",c:"#e67e22",scs:{beef:{n:"بیف برگر",its:[{id:"b1",n:"چیزبیف",d:"چدار",p:150000,r:4.7},{id:"b2",n:"ماشروم",d:"قارچ",p:165000,r:4.5},{id:"b3",n:"رویال",d:"دوبل",p:195000,r:4.8}]},fried:{n:"سوخاری",its:[{id:"f1",n:"استریپس ۳",d:"مرغ",p:110000,r:4.3},{id:"f2",n:"استریپس ۵",d:"۵ تکه",p:155000,r:4.5},{id:"f3",n:"کراکت",d:"سیب زمینی",p:95000,r:4.1},{id:"f4",n:"قارچ سوخاری",d:"تارتار",p:80000,r:4.0},{id:"f5",n:"باکس مزه",d:"ترکیبی",p:180000,r:4.6},{id:"f6",n:"کورن داگ",d:"سوسیس",p:70000,r:4.2}]}}},sandwich:{n:"ساندویچ",e:"🥪",c:"#f39c12",scs:{all:{n:"همه",its:[{id:"s1",n:"استیک",d:"گوساله",p:200000,r:4.6},{id:"s2",n:"هات داگ",d:"تنوری",p:95000,r:4.3},{id:"s3",n:"رست بیف",d:"خردل",p:180000,r:4.5},{id:"s4",n:"چیکن گریل",d:"پستو",p:140000,r:4.4},{id:"s5",n:"ویژه",d:"مخصوص",p:220000,r:4.8}]}}},salad:{n:"سالاد",e:"🥗",c:"#27ae60",scs:{all:{n:"همه",its:[{id:"l1",n:"سزار گریل تک",d:"مرغ",p:90000,r:4.4},{id:"l2",n:"سزار گریل دو",d:"بزرگ",p:150000,r:4.5},{id:"l3",n:"سزار سوخاری تک",d:"سوخاری",p:95000,r:4.3},{id:"l4",n:"سزار سوخاری دو",d:"بزرگ",p:160000,r:4.4},{id:"l5",n:"سالاد مخصوص تک",d:"انار",p:85000,r:4.6},{id:"l6",n:"سالاد مخصوص دو",d:"بزرگ",p:140000,r:4.5},{id:"l7",n:"سالاد پاستا",d:"سرد",p:75000,r:4.2},{id:"l8",n:"سیب زمینی",d:"خلالی",p:60000,r:4.1},{id:"l9",n:"سیب پنیر",d:"پنیر",p:70000,r:4.0},{id:"l10",n:"گارلیک برد",d:"نان سیر",p:50000,r:4.3},{id:"l11",n:"سیب زمینی قارچ",d:"سس",p:75000,r:4.4}]}}},pasta:{n:"پاستا",e:"🍝",c:"#8e44ad",scs:{all:{n:"همه",its:[{id:"t1",n:"آلفردو",d:"خامه",p:130000,r:4.6},{id:"t2",n:"آلفردو مرغ",d:"سوخاری",p:165000,r:4.7},{id:"t3",n:"آون پاستا",d:"بشامل",p:150000,r:4.5}]}}}},sauces:[{id:"sc1",n:"کچاپ",p:0},{id:"sc2",n:"مایونز",p:0},{id:"sc3",n:"باربیکیو",p:5000},{id:"sc4",n:"خردل",p:5000},{id:"sc5",n:"تند",p:5000},{id:"sc6",n:"سیر",p:5000},{id:"sc7",n:"پستو",p:8000},{id:"sc8",n:"آلفردو",p:8000}],drinks:[{id:"dr1",n:"کوکاکولا",p:25000},{id:"dr2",n:"فانتا",p:25000},{id:"dr3",n:"اسپرایت",p:25000},{id:"dr4",n:"دوغ",p:20000},{id:"dr5",n:"زنجبیلی",p:30000},{id:"dr7",n:"ماءالشعیر",p:30000},{id:"dr8",n:"شیر موز",p:40000},{id:"dr9",n:"آبمیوه",p:45000}]};
// Promote fried to top-level category
(function(){var f=DD.cats.burger.scs.fried;delete DD.cats.burger.scs.fried;DD.cats.fried={n:"سوخاری",e:"🍗",c:"#e67e22",scs:{all:{n:"همه",its:f.its}}};})();
var SUPABASE_URL="https://bezjytpdcodrtkteywyk.supabase.co";
var SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlemp5dHBkY29kcnRrdGV5d3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzNzI3NDUsImV4cCI6MjA5OTk0ODc0NX0.gWRwIkorB6iwQkZdYadPIU80J27NEO8V9alenYcgejo";
function sbReq(m,u,b){var x=new XMLHttpRequest();x.open(m,u,true);x.setRequestHeader("apikey",SUPABASE_KEY);x.setRequestHeader("Authorization","Bearer "+SUPABASE_KEY);x.setRequestHeader("Content-Type","application/json");x.setRequestHeader("Prefer","return=minimal");x.send(b?JSON.stringify(b):null)}
function sbSync(){var x=new XMLHttpRequest();x.open("GET",SUPABASE_URL+"/rest/v1/orders?order=date.desc&limit=200",true);x.setRequestHeader("apikey",SUPABASE_KEY);x.setRequestHeader("Authorization","Bearer "+SUPABASE_KEY);x.onload=function(){if(x.status!==200)return;try{var r=JSON.parse(x.responseText);if(!Array.isArray(r))return;var l=gO(),s={},c=false;for(var i=0;i<l.length;i++)s[l[i].id]=true;for(var i=0;i<r.length;i++){if(!s[r[i].id]){l.push(r[i]);c=true}}if(c){l.sort(function(a,b){return(a.date||"")>(b.date||"")?-1:1});localStorage.setItem(OK,JSON.stringify(l))}}catch(e){}};x.send()}
var _rtSocket=null,_rtConnected=false;
function rtConnect(){
  if(_rtConnected)return;
  try{
    _rtSocket=new WebSocket("wss://bezjytpdcodrtkteywyk.supabase.co/realtime/v1/websocket?apikey="+encodeURIComponent(SUPABASE_KEY)+"&vsn=1.0.0");
    _rtSocket.onopen=function(){
      _rtConnected=true;
      _rtSocket.send(JSON.stringify({topic:"realtime:public:orders",event:"phx_join",payload:{},ref:"1"}));
      setTimeout(function(){
        if(_rtSocket&&_rtSocket.readyState===1){
          _rtSocket.send(JSON.stringify({topic:"realtime:public:orders",event:"postgres_changes",payload:{event:"INSERT",schema:"public",table:"orders"},ref:"3"}));
          _rtSocket.send(JSON.stringify({topic:"realtime:public:orders",event:"postgres_changes",payload:{event:"UPDATE",schema:"public",table:"orders"},ref:"4"}));
          _rtSocket.send(JSON.stringify({topic:"realtime:public:orders",event:"postgres_changes",payload:{event:"DELETE",schema:"public",table:"orders"},ref:"5"}));
        }
      },500);
    };
    _rtSocket.onmessage=function(e){
      try{var msg=JSON.parse(e.data);if(msg.event==="phx_reply"&&msg.payload&&msg.payload.status==="ok")return;
        if(msg.payload&&msg.payload.data&&msg.payload.data.record){
          var o=msg.payload.data.record;var local=gO();var found=false;
          for(var i=0;i<local.length;i++){if(local[i].id===o.id){found=true;break}}
          if(found){for(var i=0;i<local.length;i++){if(local[i].id===o.id){for(var k in o)local[i][k]=o[k];break}}}else{local.push(o);local.sort(function(a,b){return(a.date||"")>(b.date||"")?-1:1});localStorage.setItem(OK,JSON.stringify(local))}
          if(typeof admCurTab!=="undefined"&&(admCurTab==="dashboard"||admCurTab==="orders")){try{admTab(admCurTab)}catch(e2){}}
        }
      }catch(e2){}
    };
    _rtSocket.onclose=function(){_rtConnected=false;setTimeout(function(){rtConnect()},3000)};
  }catch(e){}
}
setTimeout(function(){rtConnect()},2000);


function L(){try{var r=localStorage.getItem(SK);if(r){var base=JSON.parse(JSON.stringify(DD)),over=JSON.parse(r);for(var k in over){if(over.hasOwnProperty(k))base[k]=over[k]};if(base.cats.burger&&base.cats.burger.scs&&base.cats.burger.scs.fried){var f=base.cats.burger.scs.fried;delete base.cats.burger.scs.fried;base.cats.fried={n:"سوخاری",e:"🍗",c:"#e67e22",scs:{all:{n:"همه",its:f.its}}}}return base}return JSON.parse(JSON.stringify(DD))}catch(e){return JSON.parse(JSON.stringify(DD))}}
function S(d){try{localStorage.setItem(SK,JSON.stringify(d))}catch(e){}}
function fp(p){var s=String(p||0),o="";for(var i=s.length-1,j=0;i>=0;i--,j++){if(j>0&&j%3==0)o=","+o;o=s[i]+o}return o+" تومان"}
function fi(id){var d=L();for(var ck in d.cats)for(var sk in d.cats[ck].scs){var its=d.cats[ck].scs[sk].its;for(var i=0;i<its.length;i++)if(its[i].id===id)return its[i]}return null}
function fc(id){var d=L();for(var ck in d.cats)for(var sk in d.cats[ck].scs){var its=d.cats[ck].scs[sk].its;for(var i=0;i<its.length;i++)if(its[i].id===id)return ck}return null}
function gp(n){var d=L(),a=[];for(var ck in d.cats)for(var sk in d.cats[ck].scs){var its=d.cats[ck].scs[sk].its;for(var i=0;i<its.length;i++)a.push(its[i])}a.sort(function(a,b){return(b.r||0)-(a.r||0)});return a.slice(0,n||8)}
function lc(){try{return JSON.parse(localStorage.getItem(CK)||"[]")}catch(e){return[]}}
function sc(c){try{localStorage.setItem(CK,JSON.stringify(c))}catch(e){}}
function sbSyncMenu(){
  var x=new XMLHttpRequest();
  x.open("POST",SUPABASE_URL+"/rest/v1/rpc/get_menu",true);
  x.setRequestHeader("apikey",SUPABASE_KEY);
  x.setRequestHeader("Authorization","Bearer "+SUPABASE_KEY);
  x.setRequestHeader("Content-Type","application/json");
  x.onload=function(){
    if(x.status!==200)return;
    try{var r=JSON.parse(x.responseText);if(r&&r.length&&r[0]&&r[0].data){var d=JSON.parse(r[0].data);localStorage.setItem(SK,JSON.stringify(d))}}catch(e){}
  };
  x.send();
}
function sbSaveMenu(){
  var x=new XMLHttpRequest();
  x.open("POST",SUPABASE_URL+"/rest/v1/rpc/save_menu",true);
  x.setRequestHeader("apikey",SUPABASE_KEY);
  x.setRequestHeader("Authorization","Bearer "+SUPABASE_KEY);
  x.setRequestHeader("Content-Type","application/json");
  var d=L();
  x.send(JSON.stringify({data:JSON.stringify(d)}));
}
function gO(){try{return JSON.parse(localStorage.getItem(OK)||"[]")}catch(e){return[]}}
function rn(o){if(!o._rnum){var td=new Date().toDateString();var ld=localStorage.getItem("h_rn_date")||"";var cnt=parseInt(localStorage.getItem("h_rn_cnt")||"0");if(ld!==td){cnt=199;localStorage.setItem("h_rn_date",td)}cnt++;localStorage.setItem("h_rn_cnt",String(cnt));o._rnum=cnt;var oh=gO();for(var i=0;i<oh.length;i++)if(oh[i].id===o.id){oh[i]._rnum=cnt;break}localStorage.setItem(OK,JSON.stringify(oh))}return o._rnum}
function rn(o){if(!o._rnum){var td=new Date().toDateString();var ld=localStorage.getItem("h_rn_date")||"";var cnt=parseInt(localStorage.getItem("h_rn_cnt")||"0");if(ld!==td){cnt=199;localStorage.setItem("h_rn_date",td)}cnt++;localStorage.setItem("h_rn_cnt",String(cnt));o._rnum=cnt;var oh=gO();for(var i=0;i<oh.length;i++)if(oh[i].id===o.id){oh[i]._rnum=cnt;break}localStorage.setItem(OK,JSON.stringify(oh))}return o._rnum}
function rn(o){if(!o._rnum){var td=new Date().toDateString(),ld=localStorage.getItem("h_rn_date")||"",cnt=parseInt(localStorage.getItem("h_rn_cnt")||"0");if(ld!==td){cnt=199;localStorage.setItem("h_rn_date",td)}cnt++;localStorage.setItem("h_rn_cnt",String(cnt));o._rnum=cnt;var oh=gO();for(var i=0;i<oh.length;i++)if(oh[i].id===o.id){oh[i]._rnum=cnt;break}localStorage.setItem(OK,JSON.stringify(oh))}return o._rnum}
function rn(o){if(!o._rnum){var td=new Date().toDateString(),ld=localStorage.getItem("h_rn_date")||"",cnt=parseInt(localStorage.getItem("h_rn_cnt")||"0");if(ld!==td){cnt=199;localStorage.setItem("h_rn_date",td)}cnt++;localStorage.setItem("h_rn_cnt",String(cnt));o._rnum=cnt;var oh=gO();for(var i=0;i<oh.length;i++)if(oh[i].id===o.id){oh[i]._rnum=cnt;break}localStorage.setItem(OK,JSON.stringify(oh))}return o._rnum}
function img(n){return "https://bezjytpdcodrtkteywyk.supabase.co/storage/v1/object/public/food-images/"+(n||"pizza-cat.jpg")}
var catImgs={pizza:"pizza-cat.jpg",burger:"burger-cat.jpg",fried:"fried-chicken-strips-3.jpg",sandwich:"sandwich-cat.jpg",salad:"salad-cat.jpg",pasta:"pasta-cat.jpg"};
function itemImg(it,ck){if(it&&it.img)return img(it.img);if(it&&it.id&&_itemImgMap[it.id])return img(_itemImgMap[it.id]);if(ck&&catImgs[ck])return img(catImgs[ck]);return img("pizza-cat.jpg")}
var _itemImgMap={p1:"pizza-quattro.jpg",p2:"pizza-tagliata.jpg",p3:"pizza-pollo.jpg",p4:"pizza-pepperoni.jpg",p5:"pizza-stromboli.jpg",p6:"pizza-calzone.jpg",p7:"pizza-diavolo.jpg",p8:"pizza-bacon-chorizo.jpg",p9:"pizza-margherita.jpg",a1:"pizza-roast-beef.jpg",a2:"pizza-bbq-chicken.jpg",a3:"pizza-stuffed-crust.jpg",a4:"pizza-taco.jpg",a5:"pizza-mix.jpg",a6:"pizza-pepperoni-american.jpg",a7:"pizza-chef-special.jpg",a8:"pizza-american-sausage.jpg",b1:"burger-cheese-beef.jpg",b2:"burger-mushroom.jpg",b3:"burger-royal-double.jpg",f1:"fried-chicken-strips-3.jpg",f2:"fried-chicken-strips-3.jpg",f3:"fried-chicken-croquette.jpg",f4:"fried-mushroom.jpg",f5:"fried-box-maze.jpg",f6:"fried-corndog-premium.jpg",s1:"sandwich-steak-premium.jpg",s2:"sandwich-hotdog-tanoori.jpg",s3:"sandwich-roast-beef.jpg",s4:"sandwich-chicken-grill.jpg",s5:"sandwich-special-heeja.jpg",l1:"salad-caesar-grilled.jpg",l2:"salad-caesar-grilled.jpg",l3:"salad-caesar-crispy.jpg",l4:"salad-caesar-crispy.jpg",l5:"salad-special.jpg",l6:"salad-special.jpg",l7:"salad-pasta-cold.jpg",l8:"salad-french-fries.jpg",l9:"salad-potato-cheese.jpg",l10:"salad-garlic-bread.jpg",l11:"salad-french-fries.jpg",t1:"pasta-alfredo-classic.jpg",t2:"pasta-alfredo-chicken.jpg",t3:"pasta-oven-baked.jpg"}
function gd(iid){var ds=L().deals||[];for(var i=0;i<ds.length;i++){if(ds[i].itemId===iid)return ds[i]}return null}
if(!localStorage.getItem(SK))S(DD);
function st(m,t){var el=document.createElement("div");el.className="toast toast-"+(t||"success");el.textContent=m;var c=document.getElementById("toastContainer");if(c)c.appendChild(el);setTimeout(function(){el.remove()},2500)}

// Fire sparks canvas
(function(){var c=document.getElementById("bgCanvas");if(!c)return;var ctx=c.getContext("2d"),w,h,s=[];function rs(){w=c.width=window.innerWidth;h=c.height=window.innerHeight}rs();window.addEventListener("resize",rs);for(var i=0;i<120;i++)spawn(Math.random()*w,Math.random()*h,true);function spawn(x,y,instant){var e={x:x,y:y,r:Math.random()*2+.4,vx:(Math.random()-.5)*.5,vy:(instant?-Math.random()*2.5-.8:-Math.random()*1.2-.4),life:1,decay:Math.random()*.006+.003,trail:[]};s.push(e)}function draw(){ctx.clearRect(0,0,w,h);if(Math.random()<.08)spawn(Math.random()*w*.8+w*.1,h+10,false);if(Math.random()<.02)spawn(Math.random()>.5?0:w,Math.random()*h*.5+h*.3,false);for(var i=s.length-1;i>=0;i--){var e=s[i];e.x+=e.vx;e.y+=e.vy;e.vy-=.012;e.life-=e.decay;e.vx*=.998;if(e.life<=0||e.y<-50||e.x<-50||e.x>w+50){spawn(e.x,e.y,true);s.splice(i,1);continue}ctx.save();ctx.globalAlpha=e.life*.4;var g=ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*2.5);g.addColorStop(0,"rgba(255,220,120,.5)");g.addColorStop(.3,"rgba(255,160,40,.1)");g.addColorStop(.7,"rgba(200,100,20,0)");g.addColorStop(1,"rgba(0,0,0,0)");ctx.fillStyle=g;ctx.beginPath();ctx.arc(e.x,e.y,e.r*2.5,0,Math.PI*2);ctx.fill();ctx.fillStyle=e.life>.5?"rgba(255,240,180,.8)":"rgba(255,180,60,.3)";ctx.beginPath();ctx.arc(e.x,e.y,e.r*.6,0,Math.PI*2);ctx.fill();ctx.restore();e.trail.push({x:e.x,y:e.y});if(e.trail.length>4)e.trail.shift();for(var t=0;t<e.trail.length;t++){var tr=e.trail[t],ta=(t/e.trail.length)*e.life*.2;ctx.fillStyle="rgba(255,180,40,"+ta+")";ctx.beginPath();ctx.arc(tr.x,tr.y,e.r*.3,0,Math.PI*2);ctx.fill()}}while(s.length<120)spawn(Math.random()*w,h+10,true);requestAnimationFrame(draw)}draw()})();

// 3D Deals
var dealActive=0,dealTimer=null;
function rdeals(){
  var d=L(),ds=d.deals,tr=document.getElementById("dealsTrack"),dots=document.getElementById("dealsDots");
  if(!tr)return;if(!ds.length){tr.innerHTML="";if(dots)dots.innerHTML="";return}
  var h="";for(var i=0;i<ds.length;i++){var dl=ds[i];
    h+='<div class="deal-card3d'+(i===dealActive?" active":"")+'" onclick="var ddo=L().deals||[];if(ddo['+i+']&&ddo['+i+'].itemId){window._dealPrice=ddo['+i+'].np;window._dealPct=ddo['+i+'].d;oe(ddo['+i+'].itemId)}event.stopPropagation()"><img src="'+(dl.itemId?itemImg(fi(dl.itemId),fc(dl.itemId)):img(dl.img||"pizza-cat.jpg"))+'" class="deal-card3d-img" loading="lazy"><div class="deal-card3d-info"><div class="deal-card3d-name">'+dl.n+'</div><div class="deal-card3d-badge">-%'+dl.d+'</div><div style="display:flex;align-items:center;gap:10px"><span class="deal-card3d-old">'+fp(dl.op)+'</span><span class="deal-card3d-new">'+fp(dl.np)+'</span></div></div></div>';
  }tr.innerHTML=h;
  if(dots){var dh="";for(var i=0;i<ds.length;i++)dh+='<div class="deals-dot'+(i===dealActive?" active":"")+'" onclick="dealGo('+i+')"></div>';dots.innerHTML=dh}
  pos3d();if(dealTimer)clearInterval(dealTimer);dealTimer=setInterval(dealNext,4500);
}
function pos3d(){var tr=document.getElementById("dealsTrack");if(!tr)return;var cards=tr.children,n=cards.length;if(!n)return;var cw=360,gap=24;if(window.innerWidth<768){cw=280;gap=18}if(window.innerWidth<480){cw=240;gap=14}for(var i=0;i<n;i++){var o=i-dealActive,tx=o*(cw+gap),tz=Math.abs(o)*-150,r=o*10;cards[i].style.transform="translateX(calc(-50% + "+tx+"px)) translateY(-50%) translateZ("+tz+"px) rotateY("+r+"deg)";cards[i].style.zIndex=n-Math.abs(o);cards[i].style.opacity=Math.abs(o)>2?"0":(i===dealActive?"1":"0.35");cards[i].classList.toggle("active",i===dealActive)}}
function dealGo(i){dealActive=i;pos3d();var dots=document.querySelectorAll(".deals-dot");for(var j=0;j<dots.length;j++)dots[j].classList.toggle("active",j===i)}
function dealNext(){var ds=L().deals||[];if(!ds.length)return;dealActive=(dealActive+1)%ds.length;dealGo(dealActive)}
function dealPrev(){var ds=L().deals||[];if(!ds.length)return;dealActive=(dealActive-1+ds.length)%ds.length;dealGo(dealActive)}
window.addEventListener("resize",function(){pos3d()});
// Touch swipe for deals carousel
(function(){
  var stage=null,startX=0,startY=0;
  function getStage(){if(!stage)stage=document.getElementById("dealsTrack");return stage?stage.parentNode:null}
  function onStart(e){var st=getStage();if(!st)return;startX=e.touches?e.touches[0].clientX:e.clientX;startY=e.touches?e.touches[0].clientY:e.clientY}
  function onEnd(e){var st=getStage();if(!st)return;var x=e.changedTouches?e.changedTouches[0].clientX:e.clientX;var y=e.changedTouches?e.changedTouches[0].clientY:e.clientY;var dx=x-startX,dy=y-startY;if(Math.abs(dx)>30&&Math.abs(dx)>Math.abs(dy)){if(dx<0)dealNext();else dealPrev()}}
  var s=document.getElementById("dealsTrack");if(s&&s.parentNode){s.parentNode.addEventListener("touchstart",onStart,{passive:true});s.parentNode.addEventListener("touchend",onEnd,{passive:true});s.parentNode.addEventListener("mousedown",onStart);s.parentNode.addEventListener("mouseup",onEnd)}
})();

// Deal card click handler
document.addEventListener('click',function(e){
  var el=e.target;while(el&&el.classList&&!el.classList.contains('deal-card3d'))el=el.parentNode;
  if(!el||!el.classList)return;var idx=Array.prototype.indexOf.call(el.parentNode.children,el);
  var d=L(),ds=d.deals||[];if(idx>=0&&idx<ds.length&&ds[idx].itemId){var dl=ds[idx];window._dealPrice=dl.np;window._dealPct=dl.d;oe(dl.itemId)}
});


// Home rendering
function rh(){
  var cb=document.getElementById("closedBanner");if(cb)cb.style.display=_orderingEnabled?"none":"block";
  rdeals();
  var d=L(),cg=document.getElementById("categories");
  if(cg){var ch="",cats=["pizza","burger","fried","sandwich","salad","pasta"];for(var ci=0;ci<cats.length;ci++){var ck=cats[ci],cat=d.cats[ck];if(!cat)continue;var cnt=0;for(var sk in cat.scs)cnt+=cat.scs[sk].its.length;ch+='<div class="cat-card" onclick="om(\x27'+ck+'\x27)"><img src="'+img(catImgs[ck]||"pizza-cat.jpg")+'" class="cat-card-img" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(0.48);transition:all .9s ease" loading="lazy"><div class="cat-card-info"><span class="cat-card-title">'+cat.e+" "+cat.n+'</span></div><span class="cat-card-count">'+cnt+' آیتم</span></div>'}cg.innerHTML=ch}
  rpopular();rc();
}
// Popular cinematic carousel
var popularPage=0,popularTimer=null,popularCardsPerPage=4;
function rpopular(){
  var p=gp(12),el=document.getElementById("popularShowcase");if(!el)return;
  if(p.length===0){el.innerHTML='<p style="text-align:center;color:var(--tm);padding:3rem;width:100%">آیتمی یافت نشد</p>';return}

  // Calculate visible cards based on viewport
  var w=window.innerWidth;
  if(w<=400)popularCardsPerPage=1;
  else if(w<=650)popularCardsPerPage=2;
  else if(w<=1000)popularCardsPerPage=3;
  else popularCardsPerPage=4;

  var h="";for(var idx=0;idx<p.length;idx++){var i=p[idx],ck=fc(i.id),cat=ck?L().cats[ck]:null,color=cat?cat.c:"#c9a96e";var stars="",rf=Math.floor(i.r||0);for(var s=0;s<rf;s++)stars+="★";for(var s=rf;s<5;s++)stars+="☆";h+='<div class="pop-card" onclick="oe(\x27'+i.id+'\x27)"><div class="pop-card-img-wrap"><img src="'+itemImg(i,ck)+'" alt="'+i.n+'" loading="lazy"></div><div class="pop-card-body"><span class="pop-card-rank">'+(idx+1)+'</span><div class="pop-card-name">'+i.n+'</div><div class="pop-card-stars">'+stars+" "+(i.r||0)+'</div><div class="pop-card-price">'+((function(){var d=gd(i.id);return d?fp(d.np)+' <s style="color:var(--tm);font-size:70%;margin-right:4px">'+fp(i.p)+'</s> <span style="color:var(--r);font-size:65%">-%'+d.d+'</span>':fp(i.p)})())+'</div></div></div>'}el.innerHTML=h;

  // Build dots
  var totalPages=Math.ceil(p.length/popularCardsPerPage);
  var dotsEl=document.getElementById("popularDots");if(dotsEl){var dh="";for(var dp=0;dp<totalPages;dp++)dh+='<div class="popular-dot'+(dp===0?' active':'')+'" onclick="popularGo('+dp+')"></div>';dotsEl.innerHTML=dh}

  popularPage=0;popularGo(0);
  // Auto-advance
  if(popularTimer)clearInterval(popularTimer);
  popularTimer=setInterval(function(){var tr=document.getElementById('popularShowcase');if(!tr)return;var ms=tr.scrollWidth-tr.offsetWidth;if(ms<=0)return;if(tr.scrollLeft>=ms-10){tr.scrollTo({left:0,behavior:'smooth'})}else{tr.scrollBy({left:tr.offsetWidth*.8,behavior:'smooth'})}},4000);
}

function popularGo(page){
  popularPage=page;
  var track=document.getElementById("popularShowcase");if(!track)return;
  track.scrollLeft=page*track.offsetWidth;
  
}

function popularNext(){
  var track=document.getElementById("popularShowcase");if(!track)return;
  var maxScroll=track.scrollWidth-track.offsetWidth;
  var newScroll=Math.min(track.scrollLeft+track.offsetWidth*.8,maxScroll);
  track.scrollTo({left:newScroll,behavior:"smooth"});
}

function popularPrev(){
  var track=document.getElementById("popularShowcase");if(!track)return;
  var newScroll=Math.max(track.scrollLeft-track.offsetWidth*.8,0);
  track.scrollTo({left:newScroll,behavior:"smooth"});
}

// Recalc on resize
window.addEventListener('resize',function(){
  var oldCpp=popularCardsPerPage,w=window.innerWidth;
  if(w<=400)popularCardsPerPage=1;else if(w<=650)popularCardsPerPage=2;else if(w<=1000)popularCardsPerPage=3;else popularCardsPerPage=4;
  if(oldCpp!==popularCardsPerPage&&cp==='home')rpopular();
});

// Cart
function tcart(){var s=document.getElementById("cartSidebar");if(s)s.classList.toggle("open");var o=document.getElementById("cartOverlay");if(o)o.classList.toggle("open");if(s&&s.classList.contains("open")){document.body.style.overflow="hidden"}else{document.body.style.overflow=""}}
function rc(){
  var c=lc(),ce=document.getElementById("cartCount");if(ce)ce.textContent=c.length;
  var ie=document.getElementById("cartItems");if(!ie)return;var fe=document.getElementById("cartFooter"),te=document.getElementById("cartTotal");
  if(c.length===0){ie.innerHTML='<p style="text-align:center;color:var(--tm);padding:3rem">🛒 سبد خرید خالی است<br><span style=\"color:var(--tm);font-size:.75rem\">افزودن آیتم را از منو شروع کنید</span></p>';if(fe)fe.style.display="none";return}
  if(fe)fe.style.display="block";var t=0,h="";
  for(var i=0;i<c.length;i++){var x=c[i];t+=x.tp;h+='<div style="display:flex;gap:.8rem;padding:.8rem 0;border-bottom:1px solid var(--b);align-items:center"><div style="flex:1"><div style="font-weight:600;font-size:.85rem">'+x.it.n+(x.sa?" + "+(typeof x.sa==='string'?x.sa:x.sa.n):"")+(x.dr?" + "+(typeof x.dr==='string'?x.dr:x.dr.n):"")+'</div><div style="color:var(--g);font-weight:700;font-size:.82rem">'+fp(x.tp)+'</div></div><button style="color:var(--r);font-size:1rem" onclick="rci(\x27'+x.id+'\x27)">✕</button></div>'}ie.innerHTML=h;if(te)te.textContent=fp(t);
}
function rci(id){sc(lc().filter(function(x){return x.id!==id}));rc()}
function atc2(it,sa,da){var c=lc();var et=0;var sn=[],dn=[];for(var i=0;i<sa.length;i++){et+=sa[i].item.p*sa[i].qty;sn.push(sa[i].item.n+' x'+sa[i].qty)}for(var i=0;i<da.length;i++){et+=da[i].item.p*da[i].qty;dn.push(da[i].item.n+' x'+da[i].qty)}c.push({id:Date.now().toString(),it:it,sa:sn.join('; '),dr:dn.join('; '),tp:it.p+et});sc(c);rc()}
function atc(it,sa,dr){var c=lc();c.push({id:Date.now().toString(),it:it,sa:sa||null,dr:dr||null,tp:it.p+(sa?sa.p:0)+(dr?dr.p:0)});sc(c);rc()}
function checkout(){var c=lc();if(!c.length)return;sCO(c)}
function sCO(cart){
  var total=0;for(var i=0;i<cart.length;i++)total+=cart[i].tp;var ih="";for(var i=0;i<cart.length;i++){var x=cart[i];ih+='<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--b);font-size:.8rem"><span>'+x.it.n+(x.sa?" + "+(typeof x.sa==='string'?x.sa:x.sa.n):"")+(x.dr?" + "+(typeof x.dr==='string'?x.dr:x.dr.n):"")+'</span><span style="color:var(--g);font-weight:700">'+fp(x.tp)+'</span></div>'}
  var ov=document.createElement("div");ov.id="coOv";ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);z-index:2500;display:flex;align-items:center;justify-content:center";
  ov.innerHTML='<div style="background:#0c0c0c;border:1px solid var(--bgd);border-radius:20px;padding:2rem;max-width:480px;width:94%;max-height:85vh;overflow-y:auto"><h3 style="color:var(--g);text-align:center;margin-bottom:1.5rem">📝 تکمیل سفارش</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem"><div id="coPick" onclick="sd(\x27pickup\x27)" style="background:var(--card);border:2px solid var(--b);border-radius:12px;padding:1.2rem;text-align:center;cursor:pointer"><span style="font-size:2rem;display:block">🏃</span><div style="font-weight:800;margin-top:4px">حضوری</div></div><div id="coDel" onclick="sd(\x27delivery\x27)" style="background:var(--card);border:2px solid var(--g);border-radius:12px;padding:1.2rem;text-align:center;cursor:pointer"><span style="font-size:2rem;display:block">🛵</span><div style="font-weight:800;margin-top:4px">پیک</div></div></div><div style="margin-bottom:1rem"><input id="coName" placeholder="نام و نام خانوادگی" style="width:100%;padding:12px;background:#1a1a1a;border:1px solid var(--b);border-radius:8px;color:var(--t);font-size:.9rem"></div><div style="margin-bottom:1rem"><input type="tel" id="coPhone" placeholder="شماره تماس" style="width:100%;padding:12px;background:#1a1a1a;border:1px solid var(--b);border-radius:8px;color:var(--t);font-size:.9rem"></div><div id="coAddr" style="margin-bottom:1rem"><textarea id="coAddress" placeholder="آدرس کامل..." style="width:100%;padding:12px;background:#1a1a1a;border:1px solid var(--b);border-radius:8px;color:var(--t);font-size:.9rem;min-height:60px;resize:none"></textarea></div><div style="background:var(--card);border:1px solid var(--b);border-radius:12px;padding:1rem;margin-bottom:1rem"><h4 style="color:var(--g);font-size:.85rem">🛒 خلاصه سفارش</h4>'+ih+'<div style="display:flex;justify-content:space-between;padding-top:8px;border-top:2px solid var(--bgd);font-weight:800;font-size:1rem;color:var(--g)"><span>💰 مبلغ</span><span>'+fp(total)+'</span></div></div><div id="coClosedMsg" style="display:none;text-align:center;padding:1rem;background:rgba(192,57,43,0.1);border:1px solid var(--r);border-radius:12px;margin-bottom:1rem"><span style="font-size:2rem;display:block;margin-bottom:.5rem">😴</span><span style="color:var(--r);font-weight:800">سفارش‌گیری به پایان رسید</span><br><span style="color:var(--t2);font-size:.8rem">لطفاً فردا مجدداً اقدام کنید</span></div><button onclick="so()" id="coSubmitBtn" style="width:100%;padding:15px;background:linear-gradient(135deg,var(--gd),var(--g));color:var(--bg);font-size:1.05rem;font-weight:900;border-radius:50px;cursor:pointer">✅ ثبت نهایی</button><button onclick="var x=document.getElementById(\x27coOv\x27);if(x)x.remove()" style="width:100%;padding:10px;background:transparent;color:var(--tm);margin-top:.5rem;cursor:pointer">انصراف</button></div>';
  document.body.style.overflow='hidden';document.body.appendChild(ov);window._cod="delivery";if(!_orderingEnabled){var cm=document.getElementById("coClosedMsg");if(cm)cm.style.display="block";var sb=document.getElementById("coSubmitBtn");if(sb){sb.style.display="none";sb.style.pointerEvents="none"}}if(!_orderingEnabled){var cm=document.getElementById('coClosedMsg');if(cm){cm.style.display='block';cm.style.textAlign='center'}var sb=document.getElementById('coSubmitBtn');if(sb){sb.style.display='none';sb.style.pointerEvents='none'}}setTimeout(function(){if(!_orderingEnabled){var cm=document.getElementById('coClosedMsg');if(cm)cm.style.display='block';var sb=document.getElementById('coSubmitBtn');if(sb){sb.style.display='none';sb.style.pointerEvents='none'}}},50);
}
function sd(t){window._cod=t;var pk=document.getElementById("coPick"),dl=document.getElementById("coDel");if(pk)pk.style.borderColor=t==="pickup"?"var(--g)":"var(--b)";if(dl)dl.style.borderColor=t==="delivery"?"var(--g)":"var(--b)";var ad=document.getElementById("coAddr");if(ad)ad.style.display=t==="delivery"?"block":"none"}
function so(){
  var na=document.getElementById("coName"),ph=document.getElementById("coPhone"),ad=document.getElementById("coAddress");
  var n=na?na.value.trim():"",p=ph?ph.value.trim():"",dt=window._cod||"delivery",a=ad?ad.value.trim():"";
  if(!_orderingEnabled){st("⛔ سفارش‌گیری موقتاً غیرفعال است","error");return}if(!n){st("نام را وارد کنید","error");return}if(!p){st("شماره را وارد کنید","error");return}if(dt==="delivery"&&!a){st("آدرس را وارد کنید","error");return}
  var c=lc();if(!c.length)return;var oh=gO();oh.push({id:"ORD-"+Date.now(),date:new Date().toISOString(),items:c.map(function(x){return{name:x.it.n,price:x.it.p,sauce:x.sa?x.sa.n:null,drink:x.dr?x.dr.n:null}}),total:c.reduce(function(s,x){return s+x.tp},0),cust:{name:n,phone:p,delivery:dt,addr:dt==="delivery"?a:null},status:"pending"});localStorage.setItem(OK,JSON.stringify(oh));sbReq("POST",SUPABASE_URL+"/rest/v1/orders",oh[oh.length-1]);setTimeout(function(){sbSync()},2000);var ov=document.getElementById("coOv");if(ov)ov.remove();sc([]);rc();tcart();document.body.style.overflow='';st("🎉 سفارش ثبت شد!","success");
}

// Order tracking
function trkOrd(){
  var phEl=document.getElementById("trackPhone"),ph=phEl?phEl.value.replace(/\s/g,""):"";if(!ph){st("شماره را وارد کنید","error");return}
  sbSync();var orders=gO().filter(function(o){return o.cust&&o.cust.phone.replace(/\s/g,"").includes(ph)}).reverse(),c=document.getElementById("trackResults");if(!c)return;
  if(orders.length===0){c.innerHTML='<div class="track-card"><p class="empty-state">❌ سفارشی با این شماره یافت نشد</p></div>';return}
  var h="";orders.forEach(function(o){
    var cs=o.status||"pending",isD=o.cust.delivery==="delivery",sts=isD?[{s:"pending",i:"📝",l:"ثبت"},{s:"preparing",i:"👨‍🍳",l:"آماده سازی"},{s:"ready",i:"📦",l:"بسته بندی"},{s:"shipped",i:"🛵",l:"ارسال"},{s:"delivered",i:"✅",l:"تحویل"}]:[{s:"pending",i:"📝",l:"ثبت"},{s:"preparing",i:"👨‍🍳",l:"آماده سازی"},{s:"ready",i:"✅",l:"آماده"},{s:"delivered",i:"🏁",l:"تحویل"}],si=["pending","preparing","ready","shipped","delivered"].indexOf(cs);if(si<0)si=0;
    h+='<div class="track-card"><div class="track-card-header"><h4 style="color:var(--gl);font-size:1rem">📋 '+o.id+'</h4></div><div style="display:flex;justify-content:space-between;position:relative;margin:1.2rem 0"><div style="position:absolute;top:15px;left:10%;right:10%;height:3px;background:var(--b);border-radius:2px;z-index:0"></div><div style="position:absolute;top:15px;left:10%;height:3px;background:linear-gradient(90deg,var(--gd),var(--g));border-radius:2px;z-index:1;width:'+(si/(sts.length-1)*80)+'%"></div>';
    sts.forEach(function(sd,idx){var cls=idx<si?"done":idx===si?"active":"";h+='<div style="display:flex;flex-direction:column;align-items:center;gap:4px;position:relative;z-index:2;flex:1"><div style="width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;'+(cls==="done"?"background:var(--gr);border:2px solid var(--gr)":cls==="active"?"background:linear-gradient(135deg,var(--gd),var(--g));border:2px solid var(--g)":"background:var(--b);border:2px solid var(--b)")+'">'+sd.i+'</div><span style="font-size:.6rem;color:'+(cls?"var(--g)":"var(--tm)")+';text-align:center;font-weight:600">'+sd.l+'</span></div>'});
    h+='</div><div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--b);font-size:.8rem"><span style="color:var(--tm)">نام</span><span style="font-weight:600">'+o.cust.name+'</span></div><div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--b);font-size:.8rem"><span style="color:var(--tm)">نوع</span><span style="font-weight:600">'+(isD?"🛵 پیک":"🏃 حضوری")+'</span></div>';if(isD)h+='<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--b);font-size:.8rem"><span style="color:var(--tm)">آدرس</span><span style="font-weight:600">'+o.cust.addr+'</span></div>';h+='<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--b);font-size:.8rem"><span style="color:var(--tm)">مبلغ</span><span style="font-weight:600;color:var(--g)">'+fp(o.total)+'</span></div><div style="display:flex;justify-content:space-between;padding:6px 0;font-size:.8rem"><span style="color:var(--tm)">اقلام</span><span style="font-weight:600">'+o.items.map(function(i){return i.name}).join("، ")+'</span></div></div>';
  });c.innerHTML=h;
}

// Navigation
var cp="home",cct=null,csc=null;
function nv(p){
  var pages=document.querySelectorAll(".page");for(var i=0;i<pages.length;i++)pages[i].classList.remove("active");
  var t=document.getElementById("pg-"+p);if(t)t.classList.add("active");
  var links=document.querySelectorAll(".nav-links a");for(var i=0;i<links.length;i++)links[i].classList.remove("active");
  var nl=document.getElementById("nv-"+p);if(nl)nl.classList.add("active");
  cp=p;window.scrollTo(0,0);if(p==="home"){rh();setTimeout(function(){if(!_orderingEnabled)window.scrollTo({top:0,behavior:"smooth"})},200)}if(p==="menu"){cct=null;sac();}if(p==="admin"){sbSync();if(admLogged){var al=document.getElementById("admLogin");if(al)al.style.display="none";var ap=document.getElementById("admPanel");if(ap)ap.style.display="block";admTab(admCurTab)}else{var al2=document.getElementById("admLogin");if(al2)al2.style.display="block";var ap2=document.getElementById("admPanel");if(ap2)ap2.style.display="none"}}
}

// Full menu page - redesigned
function sac(){
  var d=L(),cats=["pizza","burger","fried","sandwich","salad","pasta"];
  var tabs=document.getElementById("subcatTabs");if(tabs)tabs.style.display="none";
  var bc=document.getElementById("breadcrumb");if(bc)bc.innerHTML='<a onclick="nv(\x27home\x27)">خانه</a> / <span>منوی کامل</span>';
  var ig=document.getElementById("itemsGrid");if(!ig)return;

  // 1. Hero
  var h='<div class="menu-hero"><h2>🍽️ منوی کامل هیژا</h2><p>بیش از ۱۵ سال خدمت به شما افتخار ماست</p><div class="menu-hero-line"></div></div>';

  // 2. Quick-nav pills
  h+='<div class="menu-quicknav" id="menuQuicknav">';
  for(var ci=0;ci<cats.length;ci++){
    var ck=cats[ci],cat=d.cats[ck];if(!cat)continue;
    h+='<button class="menu-qpill'+(ci===0?' active':'')+'" onclick="scrollToCat(\x27'+ck+'\x27,this)">'+cat.e+' '+cat.n+'</button>';
  }
  h+='</div>';

  // 3. Category sections
  for(var ci=0;ci<cats.length;ci++){
    var ck=cats[ci],cat=d.cats[ck];if(!cat)continue;
    var all=[];for(var sk in cat.scs){var its=cat.scs[sk].its;for(var ai=0;ai<its.length;ai++)all.push(its[ai])}

    h+='<div class="menu-cat-section" id="menuCat-'+ck+'">';
    h+='<div class="menu-cat-hdr"><div class="menu-cat-hdr-icon">'+cat.e+'</div><div class="menu-cat-hdr-info"><h3>'+cat.n+'</h3><span>'+all.length+' آیتم</span></div></div>';
    h+='<div class="menu-cat-body"><div class="items-grid">';

    for(var ai=0;ai<all.length;ai++){
      var it=all[ai];
      var stars='',rf=Math.floor(it.r||0);
      for(var s=0;s<rf;s++)stars+='★';
      for(var s=rf;s<5;s++)stars+='☆';
      h+='<div class="item-card" onclick="oe(\x27'+it.id+'\x27)"><div class="item-card-img-wrap"><img src="'+itemImg(it,ck)+'" alt="'+it.n+'" loading="lazy"></div><div class="item-card-body"><div class="item-card-name">'+it.n+'</div><div class="item-card-stars">'+stars+' '+(it.r||0)+'</div><div class="item-card-desc">'+(it.d||'')+'</div><div class="item-card-bottom"><span class="item-card-price">'+((function(){var d=gd(it.id);return d?fp(d.np)+' <s style="color:var(--tm);font-size:70%;margin-right:4px">'+fp(it.p)+'</s> <span style="color:var(--r);font-size:65%">-%'+d.d+'</span>':fp(it.p)})())+'</span><span class="item-card-add">➕</span></div></div></div>';
    }

    h+='</div></div></div>';
  }

  ig.innerHTML=h;setTimeout(function(){splitPizzaSubcats()},200);
}

// Split pizza subcategories in full menu
function splitPizzaSubcats(){var ps=document.getElementById("menuCat-pizza");if(!ps)return;var body=ps.querySelector(".menu-cat-body");if(!body)return;var grid=body.querySelector(".items-grid");if(!grid)return;var cards=grid.querySelectorAll(".item-card");if(!cards.length)return;var d=L(),pcat=d.cats.pizza;if(!pcat)return;var sm={};for(var sk in pcat.scs){var its=pcat.scs[sk].its;for(var i=0;i<its.length;i++)sm[its[i].id]=sk}var sn={};for(var sk in pcat.scs)sn[sk]=pcat.scs[sk].n;var gr={},ord=[];for(var i=0;i<cards.length;i++){var oc=cards[i].getAttribute("onclick")||"";var p=oc.indexOf("oe(");if(p===-1)continue;var id=oc.substring(p+3,oc.indexOf(")",p+3));id=id.split("\x27").join("");var sk=sm[id]||"it";if(!gr[sk]){gr[sk]=[];ord.push(sk)}gr[sk].push(cards[i])}if(ord.length<2)return;grid.innerHTML="";for(var oi=0;oi<ord.length;oi++){var sk=ord[oi],gc=gr[sk];var hdr=document.createElement("h4");hdr.className="menu-sub-hdr";hdr.textContent=sn[sk];grid.appendChild(hdr);var sg=document.createElement("div");sg.className="items-grid";sg.style.marginBottom="1.5rem";for(var gi=0;gi<gc.length;gi++)sg.appendChild(gc[gi]);grid.appendChild(sg)}}

// Menu search
function searchMenu(){
  var q=(document.getElementById("menuSearch").value||"").trim();
  var qnav=document.getElementById("menuQuicknav");
  var allSections=document.querySelectorAll(".menu-cat-section");

  if(!q){
    // Show all - restore full menu view
    if(qnav)qnav.style.display="flex";
    for(var i=0;i<allSections.length;i++)allSections[i].style.display="";
    var hero=document.querySelector(".menu-hero");if(hero)hero.style.display="";
    return;
  }

  // Hide quicknav and hero, filter sections
  if(qnav)qnav.style.display="none";
  var hero=document.querySelector(".menu-hero");if(hero)hero.style.display="none";
  var ql=q.toLowerCase();
  var anyVisible=false;

  for(var i=0;i<allSections.length;i++){
    var sec=allSections[i];
    var cards=sec.querySelectorAll(".item-card");
    var secVisible=false;
    for(var j=0;j<cards.length;j++){
      var card=cards[j];
      var name=(card.querySelector(".item-card-name")||{}).textContent||"";
      var desc=(card.querySelector(".item-card-desc")||{}).textContent||"";
      if(name.toLowerCase().indexOf(ql)>-1 || desc.toLowerCase().indexOf(ql)>-1){
        card.style.display="";secVisible=true;
      }else{
        card.style.display="none";
      }
    }
    sec.style.display=secVisible?"":"none";
    if(secVisible)anyVisible=true;
  }

  // Show "no results" if nothing found
  var nr=document.getElementById("noResultsMsg");
  if(!anyVisible){
    if(!nr){nr=document.createElement("div");nr.id="noResultsMsg";nr.className="no-results";nr.textContent="❌ آیتمی با این نام یافت نشد";var ig=document.getElementById("itemsGrid");if(ig)ig.appendChild(nr);}
    nr.style.display="";
  }else{if(nr)nr.style.display="none";}
}

// Scroll to category from quick-nav
function scrollToCat(ck,btn){
  var el=document.getElementById('menuCat-'+ck);if(!el)return;
  el.scrollIntoView({behavior:'smooth',block:'start'});
  // Update active pill
  var pills=document.querySelectorAll('.menu-qpill');
  for(var i=0;i<pills.length;i++)pills[i].classList.remove('active');
  if(btn)btn.classList.add('active');
}

// Update quick-nav active pill on scroll
var menuScrollTimer=null;
window.addEventListener('scroll',function(){
  if(cp!=='menu')return;
  if(menuScrollTimer)clearTimeout(menuScrollTimer);
  menuScrollTimer=setTimeout(function(){
    var pills=document.querySelectorAll('.menu-qpill');
    if(!pills.length)return;
    var cats=['pizza','burger','fried','sandwich','salad','pasta'];
    var best=null,bestDist=9999;
    for(var i=0;i<cats.length;i++){
      var el=document.getElementById('menuCat-'+cats[i]);
      if(!el)continue;
      var rect=el.getBoundingClientRect();
      var dist=Math.abs(rect.top-150);
      if(dist<bestDist){bestDist=dist;best=i;}
    }
    if(best!==null){
      for(var i=0;i<pills.length;i++)pills[i].classList.remove('active');
      if(pills[best])pills[best].classList.add('active');
    }
  },150);
});

// Category menu
function om(ck){cct=ck;var d=L(),cat=d.cats[ck];if(!cat)return;nv("menu");var sks=Object.keys(cat.scs),tabs=document.getElementById("subcatTabs"),bc=document.getElementById("breadcrumb");if(bc)bc.innerHTML='<a onclick="nv(\x27home\x27)">خانه</a> / <span>'+cat.n+"</span>";if(sks.length===1){if(tabs)tabs.style.display="none";csc=sks[0];ri(ck,sks[0])}else{if(tabs){tabs.style.display="flex";tabs.innerHTML="";for(var i=0;i<sks.length;i++){var sk=sks[i];tabs.innerHTML+='<button class="subcat-tab'+(i===0?" active":"")+'" onclick="ssc(\x27'+ck+'\x27,\x27'+sk+'\x27,this)">'+cat.scs[sk].n+"</button>"}csc=sks[0];ri(ck,sks[0])}}}
function ssc(ck,sk,btn){csc=sk;var tabs=document.querySelectorAll(".subcat-tab");for(var i=0;i<tabs.length;i++)tabs[i].classList.remove("active");btn.classList.add("active");ri(ck,sk)}
function ri(ck,sk){var d=L(),its=d.cats[ck].scs[sk].its,cat=d.cats[ck],h='<div class="items-grid">';for(var i=0;i<its.length;i++){var it=its[i];var stars='',rf=Math.floor(it.r||0);for(var s=0;s<rf;s++)stars+='★';for(var s=rf;s<5;s++)stars+='☆';h+='<div class="item-card" onclick="oe(\x27'+it.id+'\x27)"><div class="item-card-img-wrap"><img src="'+itemImg(it,ck)+'" alt="'+it.n+'" loading="lazy"></div><div class="item-card-body"><div class="item-card-name">'+it.n+'</div><div class="item-card-stars">'+stars+' '+(it.r||0)+'</div><div class="item-card-desc">'+(it.d||"")+'</div><div class="item-card-bottom"><span class="item-card-price">'+((function(){var d=gd(it.id);return d?fp(d.np)+' <s style="color:var(--tm);font-size:70%;margin-right:4px">'+fp(it.p)+'</s> <span style="color:var(--r);font-size:65%">-%'+d.d+'</span>':fp(it.p)})())+'</span><span class="item-card-add">➕</span></div></div></div>'}h+="</div>";var ig=document.getElementById("itemsGrid");if(ig)ig.innerHTML=h}

// Extras (sauce/drink selection)
var ei=null,esa=null,edr=null;
function oe(id){ei=fi(id);if(!ei)return;esa=null;edr=null;nv("extras");var ck=fc(id),cat=ck?L().cats[ck]:null;var bc=document.getElementById("extrasBreadcrumb");if(bc)bc.innerHTML='<a onclick=\"if(cct)om(cct);else nv(\x27menu\x27)\">'+("\u0645\u0646\u0648")+'</a> / <span>'+ei.n+'</span>';var d=L();var stars='',rf=Math.floor(ei.r||0);for(var s=0;s<rf;s++)stars+='\u2605';for(var s=rf;s<5;s++)stars+='\u2606';
  var priceLabel=fp(ei.p),dealPrice=null,dealPct=null;
  var gd_=gd(ei.id);if(gd_){dealPrice=gd_.np;dealPct=gd_.d;window._dealPrice=dealPrice;window._dealPct=dealPct}
  if(!dealPrice&&window._dealPrice){dealPrice=window._dealPrice;dealPct=window._dealPct}
  if(dealPrice)priceLabel='<s style=opacity:.6>'+fp(ei.p)+'</s> '+fp(dealPrice)+' <span style=background:var(--r);color:white;padding:1px 10px;border-radius:12px;font-size:.7rem>-%'+dealPct+'</span>';
  var h='<div class=\"item-detail-card\"><img src=\"'+itemImg(ei,ck)+'\" alt=\"'+ei.n+'\" style=\"width:180px;height:180px;border-radius:20px;object-fit:cover;margin:0 auto 1.5rem;display:block;border:3px solid var(--bgd)\"><h2>'+ei.n+'</h2><div class=\"item-detail-stars\">'+stars+' '+(ei.r||0)+'</div><div class=\"item-detail-desc\">'+(ei.d||'\u062a\u0648\u0636\u06cc\u062d\u0627\u062a\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647')+'<br><span style=\"color:var(--tm);font-size:.8rem\">\u0627\u06cc\u0646 \u063a\u0630\u0627 \u0628\u0627 \u0628\u0647\u062a\u0631\u06cc\u0646 \u0645\u0648\u0627\u062f \u0627\u0648\u0644\u06cc\u0647 \u0648 \u062a\u0648\u0633\u0637 \u0633\u0631\u0622\u0634\u067e\u0632\u0647\u0627\u06cc \u0645\u062c\u0631\u0628 \u0647\u06cc\u0698\u0627 \u062a\u0647\u06cc\u0647 \u0645\u06cc\u0634\u0648\u062f</span></div><div class=\"item-detail-price\">'+priceLabel+'</div><button class=\"item-detail-cta\" onclick=\"showExtrasStep2()\">\u2795 \u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0633\u0628\u062f \u062e\u0631\u06cc\u062f</button></div><div class=\"step2-section\" id=\"step2Section\"><h3 style=\"color:var(--g);margin-bottom:1rem\">\uD83E\uDDD9 \u0627\u0646\u062a\u062e\u0627\u0628 \u0633\u0633 <span style=\"color:var(--tm);font-size:.75rem;font-weight:400\">(\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)</span></h3><div class=\"items-grid\" style=\"grid-template-columns:repeat(auto-fill,minmax(140px,1fr))\">';for(var i=0;i<d.sauces.length;i++){var sc=d.sauces[i];h+='<div class=\"eq-item\" id=\"sc_'+sc.id+'\"><div class=\"eq-info\"><div class=\"eq-name\">'+sc.n+'</div><div class=\"eq-price\">'+(sc.p===0?'\u0631\u0627\u06cc\u06af\u0627\u0646':'+'+fp(sc.p))+'</div></div><div class=\"eq-counter\"><button class=\"eq-btn eq-minus\" data-type=\"sc\" data-id=\"'+sc.id+'\">\u2212</button><span class=\"eq-qty\" id=\"qty_sc_'+sc.id+'\">0</span><button class=\"eq-btn eq-plus\" data-type=\"sc\" data-id=\"'+sc.id+'\">+</button></div></div>'}h+='</div><h3 style=\"color:var(--g);margin:1.5rem 0 1rem\">\uD83E\uDD64 \u0627\u0646\u062a\u062e\u0627\u0628 \u0646\u0648\u0634\u06cc\u062f\u0646\u06cc <span style=\"color:var(--tm);font-size:.75rem;font-weight:400\">(\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)</span></h3><div class=\"items-grid\" style=\"grid-template-columns:repeat(auto-fill,minmax(140px,1fr))\">';for(var i=0;i<d.drinks.length;i++){var dr=d.drinks[i];h+='<div class=\"eq-item\" id=\"dr_'+dr.id+'\"><div class=\"eq-info\"><div class=\"eq-name\">'+dr.n+'</div><div class=\"eq-price\">+'+fp(dr.p)+'</div></div><div class=\"eq-counter\"><button class=\"eq-btn eq-minus\" data-type=\"dr\" data-id=\"'+dr.id+'\">\u2212</button><span class=\"eq-qty\" id=\"qty_dr_'+dr.id+'\">0</span><button class=\"eq-btn eq-plus\" data-type=\"dr\" data-id=\"'+dr.id+'\">+</button></div></div>'}h+='<div class=\"extras-price-breakdown\"><div class=\"extras-price-row\"><span>\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u0647</span><span>'+fp(ei.p)+'</span></div><div class=\"extras-price-row\" id=\"extrasSauceRow\" style=\"display:none\"><span>\u2795 \u0633\u0633</span><span id=\"extrasSaucePrice\" style=\"color:var(--g)\">0 \u062a\u0648\u0645\u0627\u0646</span></div><div class=\"extras-price-row\" id=\"extrasDrinkRow\" style=\"display:none\"><span>\u2795 \u0646\u0648\u0634\u06cc\u062f\u0646\u06cc</span><span id=\"extrasDrinkPrice\" style=\"color:var(--g)\">0 \u062a\u0648\u0645\u0627\u0646</span></div><div class=\"extras-price-row total\"><span>\uD83D\uDCB0 \u0645\u0628\u0644\u063a \u0646\u0647\u0627\u06cc\u06cc</span><span id=\"extrasTotalPrice\">'+fp(ei.p)+'</span></div></div><button onclick=\"aic()\" id=\"addToCartBtn\" class=\"btn btn-gold btn-block\" style=\"padding:18px;font-size:1.15rem;font-weight:900\">\uD83D\uDED2 \u0627\u0641\u0632\u0648\u062f\u0646 \u0646\u0647\u0627\u06cc\u06cc \u0628\u0647 \u0633\u0628\u062f \u062e\u0631\u06cc\u062f</button></div>';var ec=document.getElementById('extrasContent');if(ec)ec.innerHTML=h;}
var _eqSauces={},_eqDrinks={};
function eqChange(btn,delta){var t=btn.getAttribute('data-type');var i=btn.getAttribute('data-id');var s=t==='sc'?_eqSauces:_eqDrinks;s[i]=(s[i]||0)+delta;if(s[i]<0)s[i]=0;var el=document.getElementById('qty_'+t+'_'+i);if(el)el.textContent=s[i];var item=document.getElementById(t+'_'+i);if(item)item.classList.toggle('selected',s[i]>0);uet();var eve=document.getElementById('step2Section');if(eve)eve.setAttribute('data-updated','1')}
function uet(){if(!ei)return;var st=0,si=[],di=[];var d=L();for(var id in _eqSauces){var q=_eqSauces[id];if(q>0){var s=d.sauces.find(function(x){return x.id===id});if(s){st+=s.p*q;si.push({item:s,qty:q})}}}for(var id in _eqDrinks){var q=_eqDrinks[id];if(q>0){var dr=d.drinks.find(function(x){return x.id===id});if(dr){st+=dr.p*q;di.push({item:dr,qty:q})}}}var t=ei.p+st;var tp=document.getElementById('extrasTotalPrice');if(tp)tp.textContent=fp(t);var sr=document.getElementById('extrasSauceRow');if(sr)sr.style.display=si.length?'flex':'none';var d2=document.getElementById('extrasDrinkRow');if(d2)d2.style.display=di.length?'flex':'none';if(si.length){var sp=document.getElementById('extrasSaucePrice');if(sp)sp.textContent='+'+fp(si.reduce(function(s,x){return s+x.item.p*x.qty},0))}if(di.length){var dp=document.getElementById('extrasDrinkPrice');if(dp)dp.textContent='+'+fp(di.reduce(function(s,x){return s+x.item.p*x.qty},0))}}
document.addEventListener('click',function(e){var b=e.target;if(b.classList.contains('eq-btn')){eqChange(b,b.classList.contains('eq-plus')?1:-1);e.stopPropagation()}});


function showExtrasStep2(){var s=document.getElementById('step2Section');if(s)s.classList.add('open');var b=document.querySelector('.item-detail-cta');if(b)b.style.display='none';window.scrollTo({top:s? s.offsetTop-100:0,behavior:'smooth'})}
function aic(){if(!ei)return;var it=JSON.parse(JSON.stringify(ei));var dl=gd(ei.id);if(dl){it.p=dl.np;it._wasDeal=true}else if(window._dealPrice){it.p=window._dealPrice;it._wasDeal=true;window._dealPrice=null;window._dealPct=null}var sa=[],da=[];for(var id in _eqSauces){var q=_eqSauces[id];if(q>0){var s=L().sauces.find(function(x){return x.id===id});if(s)sa.push({item:s,qty:q})}}for(var id in _eqDrinks){var q=_eqDrinks[id];if(q>0){var d=L().drinks.find(function(x){return x.id===id});if(d)da.push({item:d,qty:q})}}atc2(it,sa,da);_eqSauces={};_eqDrinks={};var qs=document.querySelectorAll('.eq-qty');for(var i=0;i<qs.length;i++)qs[i].textContent='0';var is=document.querySelectorAll('.eq-item');for(var i=0;i<is.length;i++)is[i].classList.remove('selected');st('\u2705 '+ei.n+' \u0627\u0641\u0632\u0648\u062f\u0647 \u0634\u062f!')}

// ═══ ADMIN PANEL ═══
var admLogged=false,admCurTab="dashboard";
function admLogin(){var p=document.getElementById("admPass");if(p&&p.value==="heeja2024"){admLogged=true;var al=document.getElementById("admLogin");if(al)al.style.display="none";var ap=document.getElementById("admPanel");if(ap)ap.style.display="block";admTab("dashboard");}else{var ae=document.getElementById("admErr");if(ae)ae.style.display="block"}}
function admLogout(){admLogged=false;var al=document.getElementById("admLogin");if(al)al.style.display="block";var ap=document.getElementById("admPanel");if(ap)ap.style.display="none"}
function admTab(t,btn){admCurTab=t;sbSync();var tabs=document.querySelectorAll(".admin-tab");for(var i=0;i<tabs.length;i++)tabs[i].classList.remove("active");if(btn)btn.classList.add("active");var c=document.getElementById("admContent");if(!c)return;
  if(t==="dashboard"){
    sbSync();
    var oh=gO(),d=L(),totalRev=0,todayRev=0,itemCounts={},today=new Date().toDateString();
    for(var i=0;i<oh.length;i++){var o=oh[i];totalRev+=o.total;if(new Date(o.date).toDateString()===today)todayRev+=o.total;
      for(var j=0;j<o.items.length;j++){var iname=o.items[j].name;itemCounts[iname]=(itemCounts[iname]||0)+1}}
    var avgOrder=oh.length?Math.round(totalRev/oh.length):0;
    var topItems=[];for(var k in itemCounts)topItems.push({n:k,c:itemCounts[k]});topItems.sort(function(a,b){return b.c-a.c});topItems=topItems.slice(0,6);
    var maxC=topItems.length?topItems[0].c:1;
    var h='<div class="export-bar"><h3 style="color:var(--gl)">📊 نمای کلی</h3><button class="btn btn-gold btn-sm" onclick="sbSync();st(\'🔄 همگام‌سازی شد\',\'info\')" title="همگام‌سازی با سرور">🔄 sync</button><button class="btn btn-gold btn-sm" onclick="admExportCSV()">📥 export CSV</button></div>';
    h+='<div class="kpi-row"><div class="kpi-card"><div class="kpi-icon">📦</div><div class="kpi-val">'+oh.length+'</div><div class="kpi-label">کل سفارشات</div></div><div class="kpi-card"><div class="kpi-icon">💰</div><div class="kpi-val">'+fp(todayRev)+'</div><div class="kpi-label">درآمد امروز</div></div><div class="kpi-card"><div class="kpi-icon">📊</div><div class="kpi-val">'+fp(avgOrder)+'</div><div class="kpi-label">میانگین هر سفارش</div></div><div class="kpi-card"><div class="kpi-icon">⭐</div><div class="kpi-val">'+(topItems.length?topItems[0].n:"-")+'</div><div class="kpi-label">محبوب‌ترین</div></div></div>';
    h+='<div class="dash-grid"><div class="admin-card"><h3>📈 آیتم‌های برتر</h3><div class="bar-chart">';
    for(var ti=0;ti<topItems.length;ti++){var pct=Math.round((topItems[ti].c/maxC)*100);h+='<div class="bar-item"><div class="bar-val">'+topItems[ti].c+'</div><div class="bar-fill" style="height:'+pct+'%"></div><div class="bar-name">'+topItems[ti].n+'</div></div>'}h+='</div></div>';
    h+='<div class="admin-card"><h3>🕐 آخرین سفارشات</h3>';
    var recent=oh.slice(-5).reverse();
    if(!recent.length)h+='<p class="empty-state">سفارشی نیست</p>';
    else{h+='<table class="admin-table"><thead><tr><th>کد</th><th>مشتری</th><th>مبلغ</th><th>وضعیت</th></tr></thead><tbody>';
      for(var ri=0;ri<recent.length;ri++){var ro=recent[ri];var stsLabels={pending:"⏳",preparing:"👨‍🍳",ready:"📦",shipped:"🛵",delivered:"✅"};h+='<tr><td>'+ro.id+'</td><td>'+ro.cust.name+'</td><td>'+fp(ro.total)+'</td><td>'+ (stsLabels[ro.status]||'⏳')+' '+(ro.status==="delivered"?"تحویل":ro.status==="pending"?"در انتظار":"در حال انجام")+'</td></tr>'}h+='</tbody></table>'}h+='</div></div>';
    c.innerHTML=h;}else if(t==="orders"){sbSync();
    var oh=gO(),h="";if(!oh.length){h='<p class="empty-state">هیچ سفارشی ثبت نشده</p>'}else{h='<table class="admin-table"><thead><tr><th>شماره</th><th>کد</th><th>مشتری</th><th>تلفن</th><th>نوع</th><th>آدرس</th><th>اقلام</th><th>مبلغ</th><th>وضعیت</th><th></th></tr></thead><tbody>';for(var i=oh.length-1;i>=0;i--){var o=oh[i];var itemNames=o.items.map(function(x){var line=x.name;if(x.sauce)line+=' + '+x.sauce;if(x.drink)line+=' + '+x.drink;return line}).join('<br>');h+='<tr><td style="font-weight:900;color:var(--gl)">#'+rn(o)+'</td><td style="font-size:.75rem">'+o.id+'</td><td>'+o.cust.name+'</td><td>'+o.cust.phone+'</td><td>'+(o.cust.delivery==="delivery"?'🛵 پیک':'🏃 حضوری')+'</td><td>'+(o.cust.delivery==="delivery"&&o.cust.addr?o.cust.addr:'-')+'</td><td style="font-size:.78rem;max-width:200px">'+itemNames+'</td><td>'+fp(o.total)+'</td><td><select onchange="admChSt(\x27'+o.id+'\x27,this.value)" style="background:var(--inp);color:var(--t);border:1px solid var(--b);border-radius:6px;padding:3px 6px;font-size:.7rem"><option value="pending"'+(o.status==="pending"?' selected':'')+'>⏳ در انتظار</option><option value="preparing"'+(o.status==="preparing"?' selected':'')+'>👨‍🍳 آماده</option><option value="ready"'+(o.status==="ready"?' selected':'')+'>📦 بسته</option><option value="shipped"'+(o.status==="shipped"?' selected':'')+'>🛵 ارسال</option><option value="delivered"'+(o.status==="delivered"?' selected':'')+'>✅ تحویل</option></select></td><td><button class="btn btn-danger btn-sm" onclick="admDelOrd(\x27'+o.id+'\x27)">🗑</button></td></tr>'}h+='</tbody></table>'}c.innerHTML=h}
  else if(t==="deals"){var d=L();c.innerHTML='<div class="admin-card"><h3>➕ تخفیف جدید</h3><div class="inline-form"><div class="form-group"><label>نام</label><input id="dlName" placeholder="نام تخفیف"></div><div class="form-group"><label>٪ تخفیف</label><input type="number" id="dlPct" value="25"></div><div class="form-group"><label>قیمت اصلی</label><input type="number" id="dlPrice" value="150000"></div><div class="form-group"><label>آیتم مرتبط</label><select id="dlItemId" onchange="admOnItemSelect(this.value)"><option value="">-- انتخاب کن --</option></select></div><button class="btn btn-gold" onclick="admAddDeal()">➕ افزودن</button></div></div><div class="admin-card"><h3>📋 تخفیفات فعال</h3><div id="dlList">'+admDealsHTML(d)+'</div></div>';setTimeout(function(){var sel=document.getElementById("dlItemId");if(sel){var d3=L(),opts='<option value="">-- انتخاب کن --</option>';for(var ck2 in d3.cats)for(var sk2 in d3.cats[ck2].scs){var its2=d3.cats[ck2].scs[sk2].its;for(var ai2=0;ai2<its2.length;ai2++)opts+='<option value="'+its2[ai2].id+'">'+d3.cats[ck2].e+' '+its2[ai2].n+'</option>'}sel.innerHTML=opts}},100)}
  else if(t==="items"){var d=L();var h='<div class="admin-card"><h3>✏️ ویرایش سریع قیمت‌ها</h3><p style="color:var(--t2);font-size:.8rem;margin-bottom:1rem">قیمت جدید را وارد کن و بیرون کلیک کن تا ذخیره بشه</p><div id="quickPriceList">'+admQuickPriceHTML(d)+'</div></div><div class="admin-card"><h3>➕ آیتم جدید</h3><div class="form-row"><div class="form-group"><label>دسته</label><select id="itCat" onchange="admPopSubcats()">'+Object.keys(d.cats).map(function(k){return'<option value="'+k+'">'+d.cats[k].e+' '+d.cats[k].n+'</option>'}).join("")+'</select></div><div class="form-group"><label>زیرمجموعه</label><select id="itSub"></select></div><div class="form-group"><label>نام</label><input id="itName" placeholder="نام غذا"></div><div class="form-group"><label>توضیح</label><input id="itDesc" placeholder="توضیح کوتاه"></div><div class="form-group"><label>قیمت</label><input type="number" id="itPrice" value="150000"></div></div><button class="btn btn-gold" onclick="admAddItem()" style="margin-top:1rem">➕ افزودن</button></div><div class="admin-card"><h3>📋 آیتم‌ها ('+admCountItems(d)+' عدد)</h3><div id="itList">'+admItemsHTML(d)+'</div></div>';c.innerHTML=h;setTimeout(function(){admPopSubcats()},50)}
  else if(t==="sauces"){var d=L();c.innerHTML='<div class="admin-card"><h3>➕ سس جدید</h3><div class="inline-form"><div class="form-group"><label>نام</label><input id="scName" placeholder="سس قارچ"></div><div class="form-group"><label>قیمت</label><input type="number" id="scPrice" value="0"></div><button class="btn btn-gold" onclick="admAddSauce()">➕ افزودن</button></div></div><div class="admin-card"><h3>📋 سس‌ها</h3>'+admSaucesHTML(d)+'</div>'}
  else if(t==="drinks"){var d=L();c.innerHTML='<div class="admin-card"><h3>➕ نوشیدنی جدید</h3><div class="inline-form"><div class="form-group"><label>نام</label><input id="drName" placeholder="لیموناد"></div><div class="form-group"><label>قیمت</label><input type="number" id="drPrice" value="25000"></div><button class="btn btn-gold" onclick="admAddDrink()">➕ افزودن</button></div></div><div class="admin-card"><h3>📋 نوشیدنی‌ها</h3>'+admDrinksHTML(d)+'</div>'}
}
function admDealsHTML(d){var ds=d.deals||[];if(!ds.length)return'<p class="empty-state">هیچ تخفیفی نیست</p>';var h='<table class="admin-table"><thead><tr><th>نام</th><th>٪</th><th>قیمت اصلی</th><th>قیمت جدید</th><th></th></tr></thead><tbody>';for(var i=0;i<ds.length;i++){var x=ds[i];h+='<tr><td>'+x.n+(x.itemId?' <span style="color:var(--tm);font-size:.7rem">('+(fi(x.itemId)?fi(x.itemId).n:'')+')</span>':'')+'</td><td>%'+x.d+'</td><td>'+fp(x.op)+'</td><td>'+fp(x.np)+'</td><td><button class="btn btn-danger btn-sm" onclick="admDelDeal(\x27'+x.id+'\x27)">🗑️</button></td></tr>'}return h+'</tbody></table>'}
function admItemsHTML(d){var h="";for(var ck in d.cats){var cat=d.cats[ck];for(var sk in cat.scs){var its=cat.scs[sk].its;if(!its.length)continue;h+='<h4 style="color:var(--gl);margin:1rem 0 .5rem">📌 '+cat.n+' > '+cat.scs[sk].n+'</h4><table class="admin-table"><thead><tr><th>نام</th><th>قیمت</th><th>⭐</th><th></th></tr></thead><tbody>';for(var i=0;i<its.length;i++){var it=its[i];h+='<tr><td>'+it.n+'</td><td>'+fp(it.p)+'</td><td>'+(it.r||0)+'</td><td><button class="btn btn-danger btn-sm" onclick="admDelItem(\x27'+ck+'\x27,\x27'+sk+'\x27,\x27'+it.id+'\x27)">🗑️</button></td></tr>'}h+='</tbody></table>'}}return h||'<p class="empty-state">آیتمی نیست</p>'}
function admSaucesHTML(d){var ss=d.sauces||[];if(!ss.length)return'<p class="empty-state">سسی نیست</p>';var h='<table class="admin-table"><thead><tr><th>نام</th><th>قیمت</th><th></th></tr></thead><tbody>';for(var i=0;i<ss.length;i++){var s=ss[i];h+='<tr><td>'+s.n+'</td><td>'+(s.p===0?"رایگان":fp(s.p))+'</td><td><button class="btn btn-danger btn-sm" onclick="admDelSauce(\x27'+s.id+'\x27)">🗑️</button></td></tr>'}return h+'</tbody></table>'}
function admDrinksHTML(d){var ds=d.drinks||[];if(!ds.length)return'<p class="empty-state">نوشیدنی نیست</p>';var h='<table class="admin-table"><thead><tr><th>نام</th><th>قیمت</th><th></th></tr></thead><tbody>';for(var i=0;i<ds.length;i++){var x=ds[i];h+='<tr><td>'+x.n+'</td><td>'+fp(x.p)+'</td><td><button class="btn btn-danger btn-sm" onclick="admDelDrink(\x27'+x.id+'\x27)">🗑️</button></td></tr>'}return h+'</tbody></table>'}
function admExportCSV(){var oh=gO();if(!oh.length){st("داده‌ای برای export نیست","info");return}var csv="کد,تاریخ,مشتری,تلفن,نوع,مبلغ,وضعیت,اقلام\n";for(var i=0;i<oh.length;i++){var o=oh[i];csv+=o.id+","+o.date+","+o.cust.name+","+o.cust.phone+","+(o.cust.delivery==="delivery"?"پیک":"حضوری")+","+o.total+","+o.status+",\""+o.items.map(function(x){return x.name}).join(" | ")+"\"\n"}var blob=new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="heeja-orders-"+new Date().toISOString().slice(0,10)+".csv";a.click();st("✅ CSV دانلود شد")}
function admOnItemSelect(id){if(!id)return;var it=fi(id);if(!it)return;var ne=document.getElementById('dlName');if(ne)ne.value=it.n;var pe=document.getElementById('dlPrice');if(pe)pe.value=it.p}
function admChSt(oid,st){var oh=gO();for(var i=0;i<oh.length;i++){if(oh[i].id===oid){oh[i].status=st;break}}localStorage.setItem(OK,JSON.stringify(oh));sbReq("PATCH",SUPABASE_URL+"/rest/v1/orders?id=eq."+oid,{status:st});admTab("dashboard")}
function admDelOrd(oid){var oh=gO().filter(function(o){return o.id!==oid});localStorage.setItem(OK,JSON.stringify(oh));sbReq("DELETE",SUPABASE_URL+"/rest/v1/orders?id=eq."+oid);admTab("dashboard");st("سفارش حذف شد")}
function admAddDeal(){var d=L(),n=document.getElementById("dlName").value.trim(),pct=parseInt(document.getElementById("dlPct").value)||0,op=parseInt(document.getElementById("dlPrice").value)||0,iid=document.getElementById("dlItemId").value;if(!n||!pct||!op){st("همه فیلدها الزامی است","error");return}d.deals.push({id:"d"+Date.now(),n:n,d:pct,op:op,np:Math.round(op*(1-pct/100)),itemId:iid||null});S(d);sbSaveMenu();admTab("deals");st("تخفیف اضافه شد")}
function admDelDeal(id){var d=L();d.deals=d.deals.filter(function(x){return x.id!==id});S(d);sbSaveMenu();admTab("deals")}

function admAddItem(){var d=L(),ck=document.getElementById('itCat').value,sk=document.getElementById('itSub').value,n=document.getElementById('itName').value.trim(),desc=document.getElementById('itDesc').value.trim(),p=parseInt(document.getElementById('itPrice').value)||0;if(!n||!p){st('نام و قیمت الزامی است','error');return}if(!d.cats[ck].scs[sk])sk=Object.keys(d.cats[ck].scs)[0];d.cats[ck].scs[sk].its.push({id:ck.substring(0,2)+'_'+Date.now(),n:n,d:desc,p:p,r:0});S(d);sbSaveMenu();admTab('items');st('➕ '+n+' اضافه شد')}
function admDelItem(ck,sk,id){var d=L();d.cats[ck].scs[sk].its=d.cats[ck].scs[sk].its.filter(function(i){return i.id!==id});S(d);sbSaveMenu();admTab("items")}
function admAddSauce(){var d=L(),n=document.getElementById("scName").value.trim(),p=parseInt(document.getElementById("scPrice").value)||0;if(!n){st("نام الزامی است","error");return}d.sauces.push({id:"sc"+Date.now(),n:n,p:p});S(d);sbSaveMenu();admTab("sauces");st("سس اضافه شد")}
function admDelSauce(id){var d=L();d.sauces=d.sauces.filter(function(s){return s.id!==id});S(d);sbSaveMenu();admTab("sauces")}
function admAddDrink(){var d=L(),n=document.getElementById("drName").value.trim(),p=parseInt(document.getElementById("drPrice").value)||0;if(!n){st("نام الزامی است","error");return}d.drinks.push({id:"dr"+Date.now(),n:n,p:p});S(d);sbSaveMenu();admTab("drinks");st("نوشیدنی اضافه شد")}
function admDelDrink(id){var d=L();d.drinks=d.drinks.filter(function(x){return x.id!==id});S(d);sbSaveMenu();admTab("drinks")}
function admPopSubcats(){var catSel=document.getElementById('itCat');if(!catSel)return;var ck=catSel.value;var d=L();var sub=document.getElementById('itSub');if(!sub)return;var sks=Object.keys(d.cats[ck].scs);sub.innerHTML=sks.map(function(s){return'<option value="'+s+'">'+d.cats[ck].scs[s].n+'</option>'}).join('')}
function admCountItems(d){var n=0;for(var ck in d.cats)for(var sk in d.cats[ck].scs)n+=d.cats[ck].scs[sk].its.length;return n}
function admQuickPriceHTML(d){var h='<div style="max-height:300px;overflow-y:auto">';for(var ck in d.cats){var cat=d.cats[ck];for(var sk in cat.scs){var its=cat.scs[sk].its;for(var i=0;i<its.length;i++){var it=its[i];h+='<div style="display:flex;align-items:center;gap:.5rem;padding:.4rem 0;border-bottom:1px solid var(--b);font-size:.82rem"><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+cat.e+' '+it.n+'</span><input type="number" value="'+it.p+'" onchange="admUpdatePrice(\x27'+ck+'\x27,\x27'+sk+'\x27,\x27'+it.id+'\x27,this.value)" style="width:100px;padding:6px;background:var(--inp);border:1px solid var(--b);border-radius:6px;color:var(--t);font-size:.8rem;text-align:center"><span style="color:var(--tm);font-size:.7rem;width:60px">'+fp(it.p)+'</span></div>'}}}h+='</div>';return h}
function admUpdatePrice(ck,sk,id,val){var d=L();var its=d.cats[ck].scs[sk].its;for(var i=0;i<its.length;i++){if(its[i].id===id){its[i].p=parseInt(val)||0;break}}S(d);sbSaveMenu();st('✅ قیمت بروز شد')}
function admAddItem(){var d=L(),ck=document.getElementById('itCat').value,sk=document.getElementById('itSub').value,n=document.getElementById('itName').value.trim(),desc=document.getElementById('itDesc').value.trim(),p=parseInt(document.getElementById('itPrice').value)||0;if(!n||!p){st('نام و قیمت الزامی است','error');return}d.cats[ck].scs[sk].its.push({id:ck.substring(0,2)+'_'+Date.now(),n:n,d:desc,p:p,r:0});S(d);admTab('items');st('➕ '+n+' اضافه شد')}
var _orderingEnabled=true;
function admToggleOrders(){_orderingEnabled=!_orderingEnabled;var b=document.getElementById('admTogBtn');if(b){b.textContent=_orderingEnabled?'🔴 باز':'🟢 بسته';b.style.background=_orderingEnabled?'var(--r)':'var(--gr)'};st(_orderingEnabled?'✅ سفارش‌گیری فعال شد':'⛔ سفارش‌گیری غیرفعال شد')}
function admReset(){if(!confirm('⚠️ همه داده‌ها پاک میشوند. مطمئنی؟'))return;localStorage.clear();S(DD);st('✅ بازنشانی شد');setTimeout(function(){admTab('dashboard')},300)}

// Admin navigation - secret, not in navbar
(function(){var h=window.location.hash;if(h==="#admin"||h==="#h3e2j1a9"){setTimeout(function(){nv("admin")},300)}})()

function _admInjectHTML(){
  var pg=document.getElementById('pg-admin');if(!pg)return;
  pg.innerHTML='<div class=\"admin-page\"><div class=\"admin-container\"><div id=\"admLogin\"><div class=\"admin-login-card\"><h2>\uD83D\uDD10 \u0648\u0631\u0648\u062f \u0645\u062F\u06CC\u0631\u06CC\u062A</h2><div class=\"form-group\"><input type=\"password\" id=\"admPass\" placeholder=\"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631\"></div><button class=\"btn btn-gold btn-block\" onclick=\"admLogin()\">\u0648\u0631\u0648\u062F</button><p id=\"admErr\" style=\"color:var(--r);margin-top:.8rem;display:none\">\u0631\u0645\u0632 \u0627\u0634\u062A\u0628\u0627\u0647</p></div></div><div id=\"admPanel\" style=\"display:none\"><div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem\"><h2 style=\"color:var(--gl)\">\u2699\uFE0F \u0645\u062F\u06CC\u0631\u06CC\u062A</h2><button class=\"btn btn-outline btn-sm\" onclick=\"admLogout()\">\u062E\u0631\u0648\u062C</button></div><div class=\"admin-tabs\"><button class=\"admin-tab active\" onclick=\"admTab(\'dashboard\',this)\">\uD83D\uDCCA \u062F\u0627\u0634\u0628\u0648\u0631\u062F</button><button class=\"admin-tab\" onclick=\"admTab(\'orders\',this)\">\uD83D\uDCE6 \u0633\u0641\u0627\u0631\u0634\u0627\u062A</button><button class=\"admin-tab\" onclick=\"admTab(\'deals\',this)\">\uD83D\uDD25 \u062A\u062E\u0641\u06CC\u0641\u0627\u062A</button><button class=\"admin-tab\" onclick=\"admTab(\'items\',this)\">\uD83C\uDF7D\uFE0F \u0645\u0646\u0648</button><button class=\"admin-tab\" onclick=\"admTab(\'sauces\',this)\">\uD83E\uDDD9 \u0633\u0633\u200C\u0647\u0627</button><button class=\"admin-tab\" onclick=\"admTab(\'drinks\',this)\">\uD83E\uDD64 \u0646\u0648\u0634\u06CC\u062F\u0646\u06CC</button><button class=\"admin-tab\" style=\"margin-right:auto;background:var(--r);color:white\" onclick=\"admToggleOrders()\" id=\"admTogBtn\">\uD83D\uDD34 \u0628\u0627\u0632</button></div><div id=\"admContent\"></div><button class=\"btn btn-danger btn-sm\" onclick=\"admReset()\" style=\"margin-top:2rem\">\uD83D\uDD04 \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0647\u0645\u0647</button></div></div></div>';
}


// Back to top visibility
window.addEventListener('scroll',function(){var b=document.getElementById('bttBtn');if(b)b.classList.toggle('visible',window.scrollY>400)});

// Global image error fallback
window.addEventListener('error',function(e){var t=e.target;if(t&&t.tagName==='IMG'){t.onerror=null;t.src=img('pizza-cat.jpg')}},true);

// Secret admin entry - triple click logo
(function(){var c=0,t=null;var b=document.getElementById('navBrand');if(b)b.addEventListener('click',function(e){c++;if(c===1)t=setTimeout(function(){c=0},800);if(c>=3){clearTimeout(t);c=0;nv('admin');e.preventDefault()}})})()

// Admin HTML injection (hidden until visited)
_admInjectHTML();

setInterval(function(){sbSync()},15000);


setTimeout(function(){sbSyncMenu()},1000);

// Auto-sync from Supabase on every page load
sbSync();

// Init
rh();
