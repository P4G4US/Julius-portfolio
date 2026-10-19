(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const root=document.documentElement,shell=document.getElementById('top');

/* ---- theme ---- */
const bD=document.getElementById('tDark'),bL=document.getElementById('tLight');
const sync=()=>{const t=root.getAttribute('data-theme');const d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;bD.setAttribute('aria-pressed',d);bL.setAttribute('aria-pressed',!d)};
const setT=t=>{root.setAttribute('data-theme',t);try{localStorage.setItem('jg-theme',t)}catch(e){}sync()};
try{const s=localStorage.getItem('jg-theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
bD.onclick=()=>setT('dark');bL.onclick=()=>setT('light');sync();
const backgroundMusic=document.getElementById('backgroundMusic'),musicToggle=document.getElementById('musicToggle');
backgroundMusic.volume=.06;
musicToggle.addEventListener('click',async()=>{
  if(backgroundMusic.paused){
    try{await backgroundMusic.play();musicToggle.textContent='Music on';musicToggle.setAttribute('aria-pressed','true');musicToggle.setAttribute('aria-label','Pause background music')}
    catch(_){musicToggle.textContent='Music unavailable'}
  }else{
    backgroundMusic.pause();musicToggle.textContent='Music off';musicToggle.setAttribute('aria-pressed','false');musicToggle.setAttribute('aria-label','Play background music')
  }
});

/* ---- content ---- */
const xp=[['09.2022','03.2023','Cyber Security Intern','IIT Madras (Pravartak)','Completed a 6 month cyber security course with hands on cyber threat management training.'],
['03.2023','03.2024','Information Security Software Developer','Sony India Software Center','Managed access control processes and documented system outages for information security workflows.'],
['01.2025','07.2025','Design Engineer','Translab Technologies Pvt Ltd','Created graphic elements for websites and social platforms using Figma, Photoshop, and Illustrator.'],
['02.2025','Present','Design Lead','Minimalist Institute','Leads a 7 member design team, driving brand consistency, logo development, and visual identity systems. Manages social media strategy, redesigned the company website, produces Instagram video content, and delivered brand events under the Live To Express campaign.'],
['12.2025','01.2026','Graphic Designer','TSquared Lab','Designed website interfaces, social media creatives, email campaigns, and marketing assets in Figma. Produced podcast and social video content and developed AI powered branding and visual identity assets.']];
document.getElementById('xp').innerHTML=xp.map(r=>`<li class="rv"><div class="xp__top"><span>${r[0]} / ${r[1]}</span><span>${r[2]}</span><span>${r[3]}</span></div><div class="xp__btm"><p>${r[4]}</p></div></li>`).join('');
const works=[['Poster design','Since 2022','Posters','Personal series','ig_hob'],['Branding, UI','2024','Brand and UI','Passé, streetwear fashion','passe2'],['Brand identity','2026','Branding','Malekoppa Architects','mk_cards'],['Motion, UI animation','2025','Motion Design','Pujar Constructions','mo_cover'],
['Social media','2026','Social Media','beMore Design Studio','bm_cover'],['Motion, explainer','2026','Informational Video','Brain fog and cognitive load','iv_cover'],['Motion graphics','2025','Motion Graphics','Product loops','mg_cover'],['Email design','2025','Emailer','TSquared Eats, meal of the week','em_cover']];
document.getElementById('grid').innerHTML=works.map((w,i)=>`<a class="card rv" href="#work-${i+1}" data-i="${i}"><div class="card__m"><span>${String(i+1).padStart(2,'0')}</span><span>${w[1]}</span></div><div class="card__i"><div class="pic" data-pic="${w[4]}"></div></div><div class="card__c">${w[2]}<br>${w[3]}</div></a>`).join('');
document.getElementById('idx').innerHTML=works.map((w,i)=>`<li class="rv"><a class="row" href="#work-${i+1}" data-i="${i}"><span class="row__n">${String(i+1).padStart(2,'0')}</span><span class="row__t">${w[2]}</span><span class="row__m">${w[0]}<br>${w[3]}</span><span class="row__y">${w[1]}</span></a></li>`).join('');


/* project view content; index matches works[] */
const DETAIL={7:{media:[["e","em_full",1]],dims:{em_full:[1160,6691]},mailFrom:'TSquared Eats',mailSubject:'Meal of the Week: 10% off your order',
  meta:[['Type','Email design'],['Client','TSquared Eats'],['Tool','Figma'],['Year','2025']],
  text:["A Meal of the Week email for TSquared Eats, the meal prep side of TSquared Lab. The brief was simple: show the new dishes, make them look as good as they taste, and get people to use the code.",
        "It opens on a dark hero with the offer set as a ticket stub, then runs through seven dishes. Each one gets a cut out photo, a bold red title with NEW where it applies, and a short description on a grey panel, alternating left and right so the scroll keeps a steady rhythm on a phone. A lifestyle photo breaks up the menu halfway, and the email closes on the promo code one more time.",
        "Scroll inside the email window above to read it the way a subscriber would."],
  crops:[[.58,.05,.36,.045,'Offer set as a ticket stub','em_full'],[.02,.11,.95,.08,'Dish card with description panel','em_full'],[.08,.224,.58,.028,'Bold red dish titles','em_full'],[.02,.318,.96,.082,'Lifestyle photo break','em_full'],[.02,.9,.96,.093,'Closing promo code','em_full']]},
6:{media:[["v","mg_watch",0,"9/16",1],["v","mg_chair",0,"9/16",1]],dims:{"mg_w1": [1080, 1920], "mg_w2": [1080, 1920], "mg_c1": [1080, 1920], "mg_c2": [1080, 1920], "mg_c3": [1080, 1920]},videoBg:'#fdfdfd',
  meta:[['Type','Motion graphics'],['Format','Two vertical loops, 9:16'],['Length','7 and 8 seconds'],['Year','2025']],
  text:["Two short vertical loops that test how much character simple product shots can get from motion alone.",
        "Apple Watch Ultra is a launch teaser study. The watch tumbles inside an app icon shaped frame, tilting toward the camera before it settles, and the Watch Ultra lockup fades up to close.",
        "Chair picker plays like a product configurator. A sculpted hand presses a colour swatch and the chair on the card swaps with it, from Retro Wooden to Yellow Acrylic, Mahogany and Blue Rigid, each with its own backdrop and floor shadow, before the loop signs off with my mark."],
  crops:[[.14,.28,.72,.43,'Watch tumbling inside an icon frame','mg_w1'],[.18,.41,.64,.2,'Lockup reveal','mg_w2'],[.08,.26,.84,.47,'Yellow Acrylic','mg_c1'],[.08,.26,.84,.47,'Mahogany','mg_c2'],[.08,.26,.84,.47,'Blue Rigid','mg_c3'],[.68,.3,.32,.4,'A sculpted hand presses the swatch','mg_c2']]},
5:{media:[["v","iv_film",1,"9/16",1]],dims:{"iv_s1": [540, 960], "iv_s2": [540, 960], "iv_s3": [540, 960], "iv_s4": [540, 960], "iv_s5": [540, 960], "iv_s6": [540, 960], "iv_s7": [540, 960]},videoBg:'#e4dee3',
  meta:[['Type','Motion design, Explainer'],['Format','Instagram reel, 9:16'],['Length','30 seconds'],['Year','2026']],
  text:["A 30 second explainer on brain fog and why it happens, made for Instagram. It turns a dense idea, Cognitive Load Theory, into something you can follow in a single scroll.",
        "It opens on a highlighted definition of brain fog, then reframes it: your brain isn't broken, it's overloaded. From there the three kinds of load stack up on screen, intrinsic (the task itself), extraneous (distractions and bad design) and germane (the effort that actually helps you learn), before landing on two practical moves: cut the clutter, and reduce the noise.",
        "The look mixes paper texture, scribbled brains, grid lines and window shadows with condensed headline type in one deep blue. Each line is timed to read on its own, so the reel still works with the sound off, and it signs off with my mark."],
  crops:[[.2,.28,.8,.22,'Opening on a highlighted definition','iv_s1'],[0,0,1,.68,'Not broken, overloaded','iv_s2'],[.05,.36,.95,.24,'Cognitive Load Theory title card','iv_s3'],[.05,.31,.95,.43,'Intrinsic, extraneous and germane load','iv_s4'],[.1,.15,.8,.55,'Cut the clutter, focus on what matters','iv_s5'],[.15,.33,.75,.22,'Reduce the noise','iv_s6'],[.15,.27,.7,.44,'Sign off with the Julius mark','iv_s7']]},
4:{media:[["i","bm1",0],["i","bm2",0],["i","bm3",0],["i","bm4",0]],dims:{bm1:[1080,1440],bm2:[1080,1440],bm3:[1080,1440],bm4:[1080,1440]},
  meta:[['Type','Social media content'],['Client','beMore Design Studio'],['Format','Instagram carousel'],['Photography','@angles_and_aesthetics'],['Year','2026']],
  text:["Social content for beMore Design Studio, an architecture and interior design studio I manage social media for. This carousel steps away from finished interiors to show the people who build them.",
        "The sequence moves from a close up of the beMore mark on a team uniform, to a material discussion on site, to hands finishing a timber frame, and ends on the whole crew in a half built room. The caption carries the same idea in short lines: every space has a story, and great spaces are made by great teams."],
  crops:[[.3,.46,.33,.2,'beMore mark on the team uniform','bm1'],[.25,.72,.55,.22,'Tools and samples on site','bm2'],[.12,.52,.68,.35,'Hands finishing a timber frame','bm3'],[.08,.28,.86,.5,'The crew behind the space','bm4']]},
3:{media:[["v","mo_film",1,"16/9",1]],dims:{"mo_s1": [1280, 720], "mo_s2": [1280, 720], "mo_s3": [1280, 720], "mo_s4": [1280, 720], "mo_s5": [1280, 720]},videoBg:'#fdfdfd',
  meta:[['Type','Motion design, UI animation'],['Client','Pujar Constructions'],['Length','25 seconds'],['Year','2025']],
  text:["A short brand film for Pujar Constructions, a builder I create social content for. It borrows the look and feel of the Airbnb app to sell something bigger than a trip: building your own home.",
        "It opens on a question, Thinking of building your dream abode?, then drops into a phone where a search bar, category tabs and project cards stand in for the construction journey. The familiar booking search becomes Where, Estimates, Savings and With whom. Then comes We are here, a row of Interiors, Modulars and Traditions cards, Building Memories Everywhere, and a soft reveal of the Pujar logo.",
        "Every move uses the kind of easing you feel in real product UI, so the piece reads like an app you could tap. Type eases in word by word, cards slide on springs, and the palette stays warm gold on white to match the brand."],
  crops:[[.37,.1,.27,.3,'Search and category tabs','mo_s2'],[.28,.42,.44,.4,'Project cards: Villa in Gadag, Happy to help workers','mo_s2'],[.24,.33,.76,.31,'Search rebuilt as Where, Estimates, Savings','mo_s4'],[.52,.25,.48,.52,'Interiors, Modulars and Traditions cards','mo_s5'],[.2,.4,.68,.13,'Building Memories Everywhere','mo_s3'],[.37,.25,.24,.4,'App icon reveal','mo_s1']]},
2:{media:[["v", "mk_logo", 1], ["i", "mk_bill", 1], ["i", "mk_sign1", 0], ["i", "mk_sign2", 0], ["i", "mk_phone", 0], ["i", "mk_mark", 0], ["i", "mk_cards", 1], ["i", "mk_intro", 0], ["i", "mk_primary", 0], ["i", "mk_mono", 0], ["i", "mk_color", 0], ["i", "mk_type", 1], ["i", "mk_spec", 0], ["i", "mk_voice2", 0], ["i", "mk_scale", 1], ["i", "mk_voice", 1], ["i", "mk_dodont", 1]],dims:{"mk_bill": [2076, 1224], "mk_sign1": [1306, 1466], "mk_sign2": [1524, 1410], "mk_phone": [1302, 1494], "mk_mark": [2593, 3323], "mk_cards": [1988, 1372], "mk_intro": [963, 616], "mk_primary": [960, 807], "mk_mono": [1018, 765], "mk_color": [1041, 851], "mk_type": [1089, 516], "mk_spec": [1063, 728], "mk_voice2": [981, 770], "mk_scale": [1100, 614], "mk_voice": [1133, 596], "mk_dodont": [1118, 429]},videoBg:'#f3f3f0',
  meta:[['Type','Brand identity, Guidelines, Motion'],['Client','Malekoppa Architects'],['Sector','Architecture and interiors'],['Year','2026']],
  text:["Malekoppa Architects designs buildings and interiors, and documents them as carefully as it draws them. The identity starts there. The mark is an M built from two leaning wall planes with an arched doorway carved into the first, so the logo reads as a building you can walk into.",
        "The guidelines keep it working day to day. A dark palette of Carbon and Slate lets drawings, renders and site photography carry the page, with Paper for text and Signal blue used once per surface. Montserrat runs everything from a title block to a footnote, and the voice sticks to plain, specific language: say the material, show the reasoning, keep lines short.",
        "The logo animation raises the walls one plane at a time, cuts the arch, then settles into the full lockup. The system was tested on signage, business cards, a billboard and social stories."],
  crops:[[.16,.34,.42,.5,'Arched doorway carved into the M','mk_mark'],[.22,.18,.32,.45,'Signal dot grid on a Carbon card','mk_cards'],[.05,.26,.95,.74,'Paper, Carbon, Depth, Signal, Slate, Ash','mk_color'],[.03,.04,.55,.36,'montser headlines at 72 and 40px','mk_scale'],[.69,.5,.28,.24,'Clear space set by the logo height','mk_primary'],[.04,.12,.48,.4,'Voice rules: say it plainly','mk_dodont']]},
1:{sizes:[[724,234],[724,460],[724,386],[724,368],[724,391],[724,333]],images:['passe1','passe2','passe3','passe4','passe5','passe6'],meta:[['Type','Brand identity, UI'],['Client','Passé'],['Collection','Winter'],['Year','2024']],
  text:["The Passé concept aligns with the client's identity as a trendy fashion brand specializing in casual streetwear and urban styles. The theme reflects the brand's commitment to stylish, comfortable clothing that resonates with young, fashion forward people.",
        "The system starts with a bold, rounded wordmark, then carries it into a lookbook layout with garment callouts and collection credits. For the shop, each Winter Collection piece sits on a frosted glass product card over moody monochrome photography, with a breadcrumb, price, size picker and add to cart kept simple and calm."],
  crops:[[.28,.25,.44,.45,'Rounded custom wordmark',0],[0,.14,.42,.41,'Garment callouts on the lookbook',1],[0,.66,.3,.3,'Designer and collection credits',1],[.25,.26,.5,.64,'Frosted glass product card',2],[.45,.555,.27,.14,'Size picker states',3],[.34,.31,.32,.12,'Breadcrumb navigation',4]]},
0:{cols:3,media:[["i", "ig_hob", 0, "HOB (Trilogy)"], ["i", "ps_rahman", 0, "A. R. Rahman"], ["i", "ps_remorse", 0, "Remorse"], ["i", "ps_sonder", 0, "Sonder"], ["i", "ps_forum", 0, "Forum 1983"], ["i", "ps_lucid", 0, "Lucid"], ["i", "ps_abel", 0, "Abel"], ["i", "ps_presence", 0, "Presence"], ["i", "ps_meditate", 0, "Meditate"], ["i", "ps_jordan", 0, "Air Jordans"], ["i", "ps_chai", 0, "Chai"], ["i", "ps_diligence", 0, "Diligence"], ["i", "ps_alliance", 0, "Alliance"], ["i", "ps_countach", 0, "Countach"], ["i", "ps_kanye", 0, "Kanye West"], ["i", "ps_faith", 0, "Faith over riches"]],dims:{"ps_rahman": [1450, 1300], "ps_remorse": [1080, 1080], "ps_sonder": [1080, 1041], "ps_forum": [1080, 1041], "ps_lucid": [1080, 1041], "ps_abel": [1080, 1041], "ps_presence": [1080, 1041], "ps_meditate": [1080, 1040], "ps_jordan": [1080, 1040], "ps_chai": [1080, 1041], "ps_diligence": [1080, 1080], "ps_alliance": [1080, 1041], "ps_countach": [1080, 1040], "ps_kanye": [1349, 1299], "ps_faith": [1349, 1299], "ig_hob": [4, 5]},meta:[['Type','Poster design'],['Series','Personal'],['Pieces','16'],['Years','2022 to 2025']],
  text:["A running series of personal posters, made to practise type, collage and texture outside client briefs. Most start from something I'm listening to, wearing or thinking about, and end as a single square frame.",
        "Music shows up most: A. R. Rahman framed inside a giant quote mark, Abel and the HOB trilogy for The Weeknd, Kanye West set in towering condensed type, J. Cole as a calm, hand cut Meditate. Sneakers and cars get the spec sheet treatment, with the adidas Forum, Air Jordans and the Lamborghini Countach printed in halftone. The rest are one word ideas like Sonder, Presence, Diligence, Alliance and Lucid, plus a stack of Chai for good measure.",
        "Across the set I keep coming back to the same tools: grain, halftone, torn paper, oversized type and one or two strong colours. Click any poster to see it full size."],
  crops:[[.03,.16,.94,.19,'HOB wordmark cut open to a second portrait','ig_hob'],[.62,.3,.33,.36,'Portrait set inside the quote mark grid','ps_rahman'],[.48,.25,.52,.2,'Glitch band over a halftone bust','ps_sonder'],[.29,.03,.45,.55,'CHAI stacked as a colour gradient','ps_chai'],[.5,.36,.36,.25,'Halftone print on the Countach','ps_countach'],[.15,.13,.7,.67,'Grain gradient spheres','ps_alliance'],[0,.25,.6,.47,'Condensed WEST at full height','ps_kanye']]}};
/* ---- placeholder imagery (Framer image host is blocked inside artifacts) ---- */
function rnd(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const cache={};
const PORTRAIT='assets/images/portrait.jpg';
const VID={mg_watch:'assets/video/mg_watch.mp4',mg_chair:'assets/video/mg_chair.mp4',iv_film:'assets/video/iv_film.mp4',mo_film:'assets/video/mo_film.mp4',mk_logo:'assets/video/mk_logo.mp4'};
const LOGOS={LOGO1:'assets/images/LOGO1.png',LOGO2:'assets/images/LOGO2.png',LOGO3:'assets/images/LOGO3.png'};
const IMG={em_full:'assets/images/em_full.jpg',em_cover:'assets/images/em_cover.jpg',ps_rahman:'assets/images/ps_rahman.jpg',ps_remorse:'assets/images/ps_remorse.jpg',ps_sonder:'assets/images/ps_sonder.jpg',ps_forum:'assets/images/ps_forum.jpg',ps_lucid:'assets/images/ps_lucid.jpg',ps_abel:'assets/images/ps_abel.jpg',ps_presence:'assets/images/ps_presence.jpg',ps_meditate:'assets/images/ps_meditate.jpg',ps_jordan:'assets/images/ps_jordan.jpg',ps_chai:'assets/images/ps_chai.jpg',ps_diligence:'assets/images/ps_diligence.jpg',ps_alliance:'assets/images/ps_alliance.jpg',ps_countach:'assets/images/ps_countach.jpg',ps_kanye:'assets/images/ps_kanye.jpg',ps_faith:'assets/images/ps_faith.jpg',mg_w1:'assets/images/mg_w1.jpg',mg_w2:'assets/images/mg_w2.jpg',mg_c1:'assets/images/mg_c1.jpg',mg_c2:'assets/images/mg_c2.jpg',mg_c3:'assets/images/mg_c3.jpg',mg_cover:'assets/images/mg_cover.jpg',iv_s1:'assets/images/iv_s1.jpg',iv_s2:'assets/images/iv_s2.jpg',iv_s3:'assets/images/iv_s3.jpg',iv_s4:'assets/images/iv_s4.jpg',iv_s5:'assets/images/iv_s5.jpg',iv_s6:'assets/images/iv_s6.jpg',iv_s7:'assets/images/iv_s7.jpg',iv_cover:'assets/images/iv_cover.jpg',bm_cover:'assets/images/bm_cover.jpg',bm1:'assets/images/bm1.jpg',bm2:'assets/images/bm2.jpg',bm3:'assets/images/bm3.jpg',bm4:'assets/images/bm4.jpg',mo_s5:'assets/images/mo_s5.jpg',mo_cover:'assets/images/mo_cover.jpg',mo_s1:'assets/images/mo_s1.jpg',mo_s2:'assets/images/mo_s2.jpg',mo_s3:'assets/images/mo_s3.jpg',mo_s4:'assets/images/mo_s4.jpg',mk_bill:'assets/images/mk_bill.jpg',mk_sign1:'assets/images/mk_sign1.jpg',mk_sign2:'assets/images/mk_sign2.jpg',mk_phone:'assets/images/mk_phone.jpg',mk_mark:'assets/images/mk_mark.jpg',mk_cards:'assets/images/mk_cards.jpg',mk_intro:'assets/images/mk_intro.jpg',mk_primary:'assets/images/mk_primary.jpg',mk_mono:'assets/images/mk_mono.jpg',mk_color:'assets/images/mk_color.jpg',mk_type:'assets/images/mk_type.jpg',mk_spec:'assets/images/mk_spec.jpg',mk_voice2:'assets/images/mk_voice2.jpg',mk_scale:'assets/images/mk_scale.jpg',mk_voice:'assets/images/mk_voice.jpg',mk_dodont:'assets/images/mk_dodont.jpg',passe1:'assets/images/passe1.jpg',passe2:'assets/images/passe2.jpg',passe3:'assets/images/passe3.jpg',passe4:'assets/images/passe4.jpg',passe5:'assets/images/passe5.jpg',passe6:'assets/images/passe6.jpg',ig_hob:'assets/images/ig_hob.jpg'};
function art(kind){
  if(kind==='portrait')return PORTRAIT;
  if(IMG[kind])return IMG[kind];
  if(cache[kind])return cache[kind];
  const S=700,c=document.createElement('canvas');c.width=c.height=S;const x=c.getContext('2d');const OR={orA:[0,0,11],orB:[10,6,37],orC:[-4,-4,59],orD:[6,-10,83]},orv=OR[kind]||[0,0,0];let r=rnd(kind.length*97+kind.charCodeAt(0)+orv[2]*7);
  const warm=kind.startsWith('ember')||!!OR[kind],dark=['crystal','tower','type','ember2','car'].includes(kind);
  const g=x.createLinearGradient(0,0,S*.4,S);
  if(warm){g.addColorStop(0,'#3a0a05');g.addColorStop(.55,'#a2301a');g.addColorStop(1,'#1a0505')}
  else if(dark){g.addColorStop(0,'#2a2a2a');g.addColorStop(1,'#060606')}
  else{g.addColorStop(0,'#f0f0f0');g.addColorStop(1,'#cfcfcf')}
  x.fillStyle=g;x.fillRect(0,0,S,S);
  if(kind==='hand'){ /* one continuous dark form so the orbiting windows read as one photo */
    x.filter='blur(6px)';x.strokeStyle='#141414';x.lineCap='round';
    x.lineWidth=70;x.beginPath();x.moveTo(470,40);x.bezierCurveTo(380,220,430,380,330,520);x.stroke();
    x.lineWidth=110;x.beginPath();x.moveTo(330,520);x.bezierCurveTo(290,600,250,650,230,720);x.stroke();
    x.lineWidth=26;[[-60,10],[-20,-30],[25,-40]].forEach(([dx,dy])=>{x.beginPath();x.moveTo(470,60);x.quadraticCurveTo(470+dx,30+dy,450+dx*1.6,90+dy);x.stroke()});
  }else if(warm){
    x.filter='blur(18px)';
    for(let i=0;i<7;i++){
      const px=S*(.15+r()*.7),py=S*(.15+r()*.75),rx=S*(.1+r()*.3),ry=S*(.08+r()*.3);
      const hue=6+orv[0]+r()*16,light=25+orv[1]+r()*28;
      x.save();x.translate(px,py);x.rotate(r()*Math.PI*2);x.scale(rx,ry);
      const glow=x.createRadialGradient(0,0,.02,0,0,1);
      glow.addColorStop(0,`hsla(${hue},82%,${light+12}%,.62)`);
      glow.addColorStop(.48,`hsla(${hue},78%,${light}%,.3)`);
      glow.addColorStop(1,`hsla(${hue},72%,${light-8}%,0)`);
      x.fillStyle=glow;x.beginPath();x.arc(0,0,1,0,Math.PI*2);x.fill();x.restore();
    }
  }else{
    x.filter='blur(34px)';
    for(let i=0;i<7;i++){x.beginPath();x.ellipse(S*(.15+r()*.7),S*(.15+r()*.75),S*(.1+r()*.3),S*(.08+r()*.3),r()*3,0,7);
      x.fillStyle=warm?`hsla(${6+orv[0]+r()*16},${70+r()*25}%,${16+orv[1]+r()*40}%,.9)`:dark?`rgba(235,235,235,${.18+r()*.4})`:`rgba(20,20,20,${.5+r()*.45})`;x.fill()}
  }
  x.filter='none';
  const d=x.getImageData(0,0,S,S),p=d.data,a=kind==='sand'?80:22;for(let i=0;i<p.length;i+=4){const v=(Math.random()-.5)*a;p[i]+=v;p[i+1]+=v;p[i+2]+=v}x.putImageData(d,0,0);
  return cache[kind]=c.toDataURL('image/jpeg',.82);
}
const face4Pic=document.getElementById('face4');
const pics=[...document.querySelectorAll('[data-pic]')].filter(el=>el!==face4Pic);
const setPic=el=>{el.style.backgroundImage=(el.dataset.logo?`url(${LOGOS[el.dataset.logo]}), `:'')+`url(${art(el.dataset.pic)})`};
if(face4Pic)setPic(face4Pic);
const pio='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){setPic(e.target);pio.unobserve(e.target)}}),{rootMargin:'900px 0px'}):null;
pics.forEach(el=>pio?pio.observe(el):setPic(el));

/* ---- smooth scroll (Lenis, as on the template) ---- */
let lenis=null;
if(!RM&&window.Lenis){lenis=new Lenis({lerp:.09,wheelMultiplier:1});}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');const t=id==='#top'?0:document.querySelector(id);if(t===null)return;e.preventDefault();lenis?lenis.scrollTo(t,{duration:1.4}):(t===0?scrollTo({top:0,behavior:'smooth'}):t.scrollIntoView({behavior:'smooth'}))}));

/* ---- entrance ---- */
requestAnimationFrame(()=>requestAnimationFrame(()=>shell.classList.remove('ld')));

/* ---- appear on scroll (spring up 50px), below fold only ---- */
if(!RM&&'IntersectionObserver'in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const sib=[...el.parentElement.children].filter(c=>c.classList.contains('rv'));el.style.transitionDelay=(Math.max(0,sib.indexOf(el))%6)*70+'ms';el.classList.remove('pre');io.unobserve(el)}),{threshold:.1});
  document.querySelectorAll('.rv').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('pre');io.observe(el)}});
  const lg=document.getElementById('logo');const lio=new IntersectionObserver(es=>{if(es[0].isIntersecting){lg.classList.remove('pre');lio.disconnect()}},{threshold:.2});
  lg.classList.add('pre');lio.observe(lg);
}

/* ---- scroll linked motion ---- */
const heroImg=document.getElementById('heroImg'),heroBox=document.querySelector('.hero__media');
const rot=document.getElementById('rot'),bp=document.getElementById('bp'),bp2=document.getElementById('bp2');
document.getElementById('bi').setAttribute('href',PORTRAIT);
/* amoeboid outline: a ring of radii shaped by a few sine lobes, joined with smooth curves */
const LOBES=[[2,.10,.3,.7],[3,.075,1.7,-1.1],[5,.035,2.4,1.6],[4,.045,4.1,-.6]];
const LOBES2=[[2,.09,2.2,-.8],[3,.08,.6,1.2],[4,.05,3.3,.9],[5,.03,1.1,-1.5]];
function blobPath(m,rad,cx=500,cy=500,R=325,L=LOBES){const N=24,P=[];for(let i=0;i<N;i++){const th=i/N*Math.PI*2;let rr=1;L.forEach(([k,a,ph,w])=>rr+=a*Math.sin(k*th+ph+m*w));rr*=R;P.push([cx+rr*Math.cos(th+rad),cy+rr*Math.sin(th+rad)])}
  const f=v=>v.toFixed(1);let d=`M${f(P[0][0])},${f(P[0][1])}`;
  for(let i=0;i<N;i++){const p0=P[(i-1+N)%N],p1=P[i],p2=P[(i+1)%N],p3=P[(i+2)%N];d+=`C${f(p1[0]+(p2[0]-p0[0])/6)},${f(p1[1]+(p2[1]-p0[1])/6)} ${f(p2[0]-(p3[0]-p1[0])/6)},${f(p2[1]-(p3[1]-p1[1])/6)} ${f(p2[0])},${f(p2[1])}`}
  return d+'Z'}
/* two blobs orbit the centre (like the template's two circles), each turning and morphing on its own */
function drawBlobs(deg,mt){const a=deg*Math.PI/180,R=192;
  const o1=200*(1+.05*Math.sin(mt*.6)),o2=200*(1+.05*Math.sin(mt*.5+2));
  const a1=a+.06*Math.sin(mt*.4),a2=a+.06*Math.sin(mt*.45+1);
  bp.setAttribute('d',blobPath(mt,a*.6+mt*.15,500+o1*Math.sin(a1),500-o1*Math.cos(a1),R,LOBES));
  bp2.setAttribute('d',blobPath(mt*1.15+3,-a*.5-mt*.12,500-o2*Math.sin(a2),500+o2*Math.cos(a2),R,LOBES2));}
drawBlobs(0,0);
/* constant slow drift; scroll speed adds a boost that eases back down */
let orbit=0,morph=0,boost=0,lastT=performance.now(),lastY=scrollY;
function updMotion(){const now=performance.now(),dt=Math.min(.05,(now-lastT)/1000)||.016;lastT=now;
  const v=Math.abs(scrollY-lastY)/dt;lastY=scrollY;
  const target=Math.min(v/900,4);boost+=(target-boost)*Math.min(1,dt*(target>boost?4:1.2));
  orbit+=(3+boost*38)*dt;morph+=(.22+boost*.9)*dt;}
const proc=document.getElementById('proc'),cube=document.getElementById('cube');
const ruler=document.getElementById('ruler'),rs=[...ruler.querySelectorAll('span')],line=ruler.querySelector('i');
const pt=[...document.getElementById('ptxt').children];
let ang=0,sc=1,step=-1,heroOn=false;
setTimeout(()=>{heroOn=true;heroImg.style.transition='none'},2700);
function sizeCube(){cube.style.setProperty('--d',cube.offsetWidth/2+'px')}
function setStep(s){
  if(s===step)return;const prev=step;step=s;
  cube.style.setProperty('--ry',(-90*s)+'deg');
  const f4=document.getElementById('face4');if(f4)f4.classList.toggle('grow',s===3);
  rs.forEach((el,i)=>el.classList.toggle('on',Math.abs(i-3)<=s));
  const a=rs[3-s],b=rs[3+s],ra=a.getBoundingClientRect(),rb=b.getBoundingClientRect();
  line.style.setProperty('--w',s?(rb.right-ra.left)+'px':'0px');
  pt.forEach((el,i)=>{const k=i>>1;el.classList.toggle('on',k===s);el.classList.toggle('gone',k!==s&&k<s)});
}
function frame(){
  const vh=innerHeight,y=scrollY;
  if(!RM){
    if(heroOn){const p=Math.min(1,y/heroBox.offsetHeight);heroImg.style.transform=`translateY(${p*heroBox.offsetHeight*.45}px) scale(${1+p*.12})`;heroImg.style.filter=p>0.005?`blur(${(p*18).toFixed(2)}px)`:'none'}
    /* orbit: 0 to 270deg and 1 to 1.2 scale while the group crosses the viewport, smoothed like a spring */
    const r=rot.getBoundingClientRect();
    const t=Math.max(0,Math.min(1,(vh-50-r.top)/(vh+r.height*.75)));
    sc+=((1+.2*t)-sc)*.12;
    rot.style.transform=`scale(${sc.toFixed(4)})`;
    updMotion();if(r.bottom>-300&&r.top<vh+300)drawBlobs(orbit,morph);
  }
  const pr=proc.getBoundingClientRect(),span=proc.offsetHeight-vh;
  const prog=Math.max(0,Math.min(span,-pr.top));
  setStep(Math.min(3,Math.floor((prog+60)/(span/4))));
  requestAnimationFrame(frame);
}
function raf(t){if(lenis)lenis.raf(t);requestAnimationFrame(raf)}
sizeCube();addEventListener('resize',()=>{sizeCube();const s=step;step=-1;setStep(s)});
requestAnimationFrame(raf);requestAnimationFrame(frame);

/* ---- project view ---- */
const pv=document.getElementById('pv'),$=id=>document.getElementById(id);
const pvScroll=$('pvScroll'),pvFull=$('pvFull');let pvCur=-1,pvBack=null,pvTimer=0;
const pad=n=>String(n).padStart(2,'0');
function pvFill(i){
  const w=works[i],d=DETAIL[i];pvCur=i;
  $('pvIdx').textContent=pad(i+1)+' / '+pad(works.length);
  $('pvTitle').textContent=w[2];$('pvSub').textContent=w[3];
  const src=art(w[4]);const media=d&&d.media?d.media:(d&&d.images?d.images:[w[4]]).map(k=>['i',k,0]);
  pvFull.classList.toggle('multi',media.length>1);pvFull.style.setProperty('--cols',d&&d.cols||2);
  pvFull.innerHTML=media.map(([t,k,wide,ar,ctl],n)=>t==='e'?`<div class="pv__mail wide"><div class="pv__mailbox"><div class="pv__mailbar"><b>${d.mailFrom||w[2]}</b><span>${d.mailSubject||''}</span></div><div class="pv__mailscroll" data-lenis-prevent tabindex="0" aria-label="Email, scroll to read"><img class="mail-img" src="${art(k)}" alt="${w[2]} email"></div></div><p class="pv__mailhint">Scroll inside the email</p></div>`:t==='v'?`<div class="pv__vid${wide?' wide':''}${ar?' pv__vid--wide':''}" style="background:${d.videoBg||'var(--soft)'}"><video src="${VID[k]}" autoplay muted loop playsinline${ctl?' controls':''}${ar?` style="aspect-ratio:${ar}${ar.startsWith('9/')?';width:auto;height:min(86vh,960px);max-width:100%':''}"`:''} aria-label="${w[2]} video"></video></div>`:`<img class="${wide?'wide':''}" src="${art(k)}" alt="${ar||w[2]+' image '+(n+1)}" data-cap="${ar||w[2]}" loading="lazy">`).join('');
  const meta=d?d.meta:[['Type',w[0]],['Category',w[3]],['Year',w[1]]];
  $('pvMeta').innerHTML=meta.map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('');
  $('pvText').innerHTML=(d?d.text:['Full write up for this project is coming soon.']).map(t=>`<p>${t}</p>`).join('');
  const cw=$('pvDetWrap');cw.hidden=!(d&&d.crops);
  if(d&&d.crops){
    $('pvCrops').innerHTML=d.crops.map(([x,y,cw2,ch,lab,im])=>{const csrc=typeof im==='string'?art(im):(im!=null&&d.images?art(d.images[im]):src);
      const px=cw2>=1?0:x/(1-cw2)*100,py=ch>=1?0:y/(1-ch)*100;
      const [RW,RH]=typeof im==='string'?d.dims[im]:(d.sizes&&im!=null?d.sizes[im]:d.ratio);
      return `<figure class="crop"><div class="crop__i" style="aspect-ratio:${(cw2*RW/(ch*RH)).toFixed(3)};background-image:url(${csrc});background-size:${(100/cw2).toFixed(2)}% auto;background-position:${px.toFixed(2)}% ${py.toFixed(2)}%"></div><figcaption>${lab}</figcaption></figure>`}).join('')}
  $('pvMoreName').textContent=works[(i+1)%works.length][2];
  pvScroll.scrollTop=0;
}
function pvOpen(i,trigger){
  clearTimeout(pvTimer);pvBack=trigger||document.activeElement;pvFill(i);pv.hidden=false;
  requestAnimationFrame(()=>requestAnimationFrame(()=>pv.classList.add('open')));
  if(lenis)lenis.stop();document.documentElement.style.overflow='hidden';
  $('pvClose').focus({preventScroll:true});
}
function pvClose(){
  pv.classList.remove('open');pvFull.querySelectorAll('video').forEach(v=>v.pause());pvTimer=setTimeout(()=>{pv.hidden=true},RM?0:900);
  if(lenis)lenis.start();document.documentElement.style.overflow='';
  if(pvBack&&pvBack.focus)pvBack.focus({preventScroll:true});
}
function pvGo(dir){const i=(pvCur+dir+works.length)%works.length;pv.classList.add('swap');setTimeout(()=>{pvFill(i);pv.classList.remove('swap')},RM?0:350)}
document.querySelectorAll('.card,.row').forEach(c=>c.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();pvwHide();pvOpen(+c.dataset.i,c)}));
/* works view toggle */
const vI=$('vIndex'),vG=$('vGrid'),idxEl=$('idx'),gridEl=$('grid');
function setView(v){idxEl.hidden=v!=='index';gridEl.hidden=v!=='grid';vI.setAttribute('aria-pressed',v==='index');vG.setAttribute('aria-pressed',v==='grid');try{localStorage.setItem('jg-view',v)}catch(_){}}
vI.onclick=()=>setView('index');vG.onclick=()=>setView('grid');
try{const sv=localStorage.getItem('jg-view');if(sv)setView(sv)}catch(_){}
/* index hover preview following the cursor */
const pvw=$('pvw'),pvwPic=pvw.querySelector('.pic'),pvwN=pvw.querySelector('.pvw__n');
let px=innerWidth/2,py=innerHeight/2,qx=px,qy=py,pvwOn=false,lastX=px;
function pvwHide(){pvwOn=false;pvw.classList.remove('on')}
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.querySelectorAll('.row').forEach(r=>{r.addEventListener('mouseenter',()=>{const w=works[+r.dataset.i];pvwPic.style.backgroundImage=`url(${art(w[4])})`;pvwN.textContent=String(+r.dataset.i+1).padStart(2,'0');pvwOn=true;pvw.classList.add('on')});r.addEventListener('mouseleave',pvwHide)});
  addEventListener('mousemove',e=>{px=e.clientX;py=e.clientY});
  (function loop(){qx+=(px+190-qx)*.14;qy+=(py-qy)*.14;const vx=qx-lastX;lastX=qx;const rot=Math.max(-8,Math.min(8,vx*.35));
    if(pvwOn||pvw.classList.contains('on'))pvw.style.translate=`${qx.toFixed(1)}px ${qy.toFixed(1)}px`;pvw.style.rotate=`${RM?0:rot.toFixed(2)}deg`;requestAnimationFrame(loop)})();
  addEventListener('scroll',()=>{if(pvwOn&&!document.querySelector('.row:hover'))pvwHide()},{passive:true});
}
$('pvClose').onclick=pvClose;$('pvPrev').onclick=()=>pvGo(-1);$('pvNext').onclick=()=>pvGo(1);$('pvMore').onclick=()=>pvGo(1);
addEventListener('keydown',e=>{if(pv.hidden)return;if(e.key==='Escape')pvClose();else if(e.key==='ArrowRight')pvGo(1);else if(e.key==='ArrowLeft')pvGo(-1)});
{const m=location.hash.match(/^#work-(\d+)$/);if(m&&+m[1]>=1&&+m[1]<=works.length)pvOpen(+m[1]-1)}

/* ---- lightbox for project images ---- */
const lb=$('lb'),lbImg=$('lbImg');let lbList=[],lbI=0,lbBack=null;
function lbShow(i){lbI=(i+lbList.length)%lbList.length;const im=lbList[lbI];lbImg.src=im.src;lbImg.alt=im.alt;$('lbCap').textContent=im.dataset.cap||'';$('lbIdx').textContent=pad(lbI+1)+' / '+pad(lbList.length);const one=lbList.length<2;$('lbPrev').hidden=one;$('lbNext').hidden=one}
function lbOpen(img){lbList=[...pvFull.querySelectorAll('img:not(.mail-img)')];lbBack=img;lb.hidden=false;lbShow(lbList.indexOf(img));requestAnimationFrame(()=>lb.classList.add('open'));$('lbClose').focus({preventScroll:true})}
function lbClose(){lb.classList.remove('open');setTimeout(()=>{lb.hidden=true},RM?0:350);if(lbBack&&lbBack.focus)lbBack.focus({preventScroll:true})}
function lbGo(d){lb.classList.add('swap');setTimeout(()=>{lbShow(lbI+d);lb.classList.remove('swap')},RM?0:180)}
pvFull.addEventListener('click',e=>{const im=e.target.closest('img:not(.mail-img)');if(im)lbOpen(im)});
$('lbClose').onclick=lbClose;$('lbPrev').onclick=()=>lbGo(-1);$('lbNext').onclick=()=>lbGo(1);
lb.addEventListener('click',e=>{if(e.target===lb||e.target.classList.contains('lb__stage'))lbClose()});
addEventListener('keydown',e=>{if(lb.hidden)return;e.stopImmediatePropagation();if(e.key==='Escape')lbClose();else if(e.key==='ArrowRight')lbGo(1);else if(e.key==='ArrowLeft')lbGo(-1)},true);

/* ---- Zen: hidden balance game. Open with three quick clicks on the hero mark, or type "zen" ---- */
(function(){
  const z=document.getElementById('zen'),cv=document.getElementById('zenC'),cx=cv.getContext('2d'),msg=document.getElementById('zenMsg'),sc=document.getElementById('zenScore'),be=document.getElementById('zenBest');
  let W=0,H=0,dpr=1,raf=0,last=0,state='idle',stack=[],cur=null,cam=0,camT=0,best=0,flash=0,flashTxt='',t0=0,back=null,shake=0;
  try{best=+localStorage.getItem('jg-zen')||0}catch(_){}
  const pad=n=>String(n).padStart(2,'0');
  function size(){dpr=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0)}
  const baseW=()=>Math.min(W*.2,140), baseY=()=>H-80-baseW()*.46;
  function reset(){stack=[];cam=0;camT=0;state='ready';spawn();sc.textContent='Balance 00';be.textContent='Best '+pad(best);msg.innerHTML='Stack the circles on the infinity.<br>Tap, click or press space to drop.';msg.style.opacity=1}
  function topY(){return stack.length?stack[stack.length-1].y-stack[stack.length-1].r:baseY()-baseW()*.42}
  function topX(){return stack.length?stack[stack.length-1].x:W/2}
  function spawn(){const n=stack.length,r=Math.max(10,(stack.length?stack[n-1].r:Math.min(56,baseW()*.4))*(n?.9:1));cur={x:W/2,y:0,r,vy:0,ph:Math.random()*6.28,amp:Math.min(W*.34,250),spd:1.5+n*.14,falling:false};t0=performance.now()}
  function drop(){if(state==='over'){reset();return}if(!cur||cur.falling)return;cur.falling=true;state='play';msg.style.opacity=0}
  function ring(x,y,r,a=1,lw){cx.save();cx.globalAlpha=a;cx.strokeStyle='#fff';cx.lineCap='round';cx.lineWidth=lw||Math.max(2.5,r*.16);cx.beginPath();cx.arc(x,y,r,-1.2,4.75);cx.stroke();cx.lineWidth=(lw||Math.max(2.5,r*.16))*.45;cx.beginPath();cx.arc(x,y,r*.93,-1.0,4.2);cx.stroke();cx.restore()}
  function inf(x,y,w){cx.save();cx.strokeStyle='#fff';cx.lineWidth=Math.max(6,w*.075);cx.lineCap='round';cx.beginPath();for(let i=0;i<=200;i++){const t=i/200*Math.PI*2,d=1+Math.sin(t)**2,px=x+w*Math.cos(t)/d,py=y+w*1.3*Math.sin(t)*Math.cos(t)/d;i?cx.lineTo(px,py):cx.moveTo(px,py)}cx.stroke();cx.restore()}
  function frame(now){
    const dt=Math.min(.033,(now-(last||now))/1000);last=now;
    cam+=(camT-cam)*.08;const sx=shake?(Math.random()-.5)*shake:0;shake*=.86;if(shake<.3)shake=0;
    cx.clearRect(0,0,W,H);cx.save();cx.translate(sx,cam);
    inf(W/2,baseY(),baseW());
    stack.forEach(s=>ring(s.x,s.y,s.r));
    if(cur){
      if(!cur.falling){const t=(now-t0)/1000;cur.x=W/2+Math.sin(cur.ph+t*cur.spd)*cur.amp;cur.y=-cam+120+cur.r}
      else{cur.vy+=1900*dt;cur.y+=cur.vy*dt;const ty=topY();
        if(cur.y+cur.r>=ty&&state==='play'){
          const off=Math.abs(cur.x-topX()),lim=(stack.length?stack[stack.length-1].r:baseW()*.55)*.95;
          if(off<=lim){const px0=topX();cur.y=ty-cur.r;stack.push({x:off<4?px0:cur.x,y:cur.y,r:cur.r});
            if(off<4){flashTxt='Perfect';flash=1}
            const n=stack.length;sc.textContent='Balance '+pad(n);if(n>best){best=n;be.textContent='Best '+pad(best);try{localStorage.setItem('jg-zen',best)}catch(_){}}
            const want=H*.55-ty;camT=Math.max(0,want);spawn()}
          else{state='over';shake=14;cur.vy=200;cur.dx=(cur.x>topX()?1:-1)*220;
            msg.innerHTML='You lost your balance at '+pad(stack.length)+'.<br>Tap to try again. Esc to leave.';msg.style.opacity=1}
        }
        if(state==='over'&&cur){cur.x+=(cur.dx||0)*dt;if(cur.y-cam>H+200)cur=null}
      }
      if(cur)ring(cur.x,cur.y,cur.r,state==='over'?.5:1)
    }
    cx.restore();
    if(flash>0){cx.save();cx.globalAlpha=flash;cx.fillStyle='#fff';cx.font='700 '+Math.min(64,W*.09)+'px "Azeret Mono", monospace';cx.textAlign='center';cx.fillText(flashTxt.toUpperCase(),W/2,H*.38);cx.restore();flash-=dt*1.4}
    raf=requestAnimationFrame(frame)}
  function open(){if(!z.hidden)return;back=document.activeElement;z.hidden=false;size();reset();requestAnimationFrame(()=>z.classList.add('open'));if(lenis)lenis.stop();document.documentElement.style.overflow='hidden';last=0;raf=requestAnimationFrame(frame);document.getElementById('zenX').focus({preventScroll:true})}
  function close(){z.classList.remove('open');cancelAnimationFrame(raf);setTimeout(()=>{z.hidden=true},400);document.documentElement.style.overflow='';if(lenis)lenis.start();if(back&&back.focus)back.focus({preventScroll:true})}
  cv.addEventListener('pointerdown',e=>{e.preventDefault();drop()});
  document.getElementById('zenX').onclick=close;
  addEventListener('keydown',e=>{if(z.hidden)return;e.stopImmediatePropagation();if(e.key==='Escape')close();else if(e.key===' '||e.key==='Enter'){e.preventDefault();drop()}},true);
  addEventListener('resize',()=>{if(!z.hidden){size()}});
  /* triggers */
  const mk=document.querySelector('.hero__img .mark');let clicks=[];
  if(mk)mk.addEventListener('click',()=>{const n=performance.now();clicks=clicks.filter(c=>n-c<1200);clicks.push(n);if(clicks.length>=3){clicks=[];open()}});
  let typed='';addEventListener('keydown',e=>{if(!z.hidden||e.target.closest&&e.target.closest('input,textarea'))return;if(!e.key||e.key.length!==1)return;typed=(typed+e.key).slice(-3).toLowerCase();if(typed==='zen')open()});
  console.log('%cpsst. three quick clicks on the mark, or type zen.','font:12px monospace;color:#888');
})();

/* ---- footer wordmark fills the full content width ---- */
const lgBox=document.getElementById('logo'),lgH=lgBox.querySelector('h2');
function fitMark(){lgH.style.fontSize='100px';const w=lgH.scrollWidth,avail=lgBox.clientWidth;if(w>0)lgH.style.fontSize=(100*avail/w*.995).toFixed(2)+'px'}
fitMark();addEventListener('resize',fitMark);if(document.fonts)document.fonts.ready.then(fitMark);

/* ---- email copy ---- */
const mail=document.getElementById('mail');
/* contact panel */
const EMAIL='aman.7.julius@gmail.com',ct=document.getElementById('ct');let ctBack=null,ctT=0;
function ctOpen(){ctBack=document.activeElement;clearTimeout(ctT);ct.hidden=false;requestAnimationFrame(()=>requestAnimationFrame(()=>ct.classList.add('open')));if(lenis)lenis.stop();document.documentElement.style.overflow='hidden';setTimeout(()=>document.getElementById('cEmail').focus({preventScroll:true}),RM?0:500)}
function ctClose(){ct.classList.remove('open');ctT=setTimeout(()=>{ct.hidden=true},RM?0:800);if(lenis)lenis.start();document.documentElement.style.overflow='';if(ctBack&&ctBack.focus)ctBack.focus({preventScroll:true})}
mail.addEventListener('click',ctOpen);
document.getElementById('ctClose').onclick=ctClose;
addEventListener('keydown',e=>{if(!ct.hidden&&e.key==='Escape'){e.stopImmediatePropagation();ctClose()}},true);
ct.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();ctClose();const t=a.dataset.go==='top'?0:document.getElementById(a.dataset.go);setTimeout(()=>{lenis?lenis.scrollTo(t,{duration:1.4}):(t===0?scrollTo({top:0,behavior:'smooth'}):t.scrollIntoView({behavior:'smooth'}))},RM?0:450)}));
const cEmail=document.getElementById('cEmail'),cMsg=document.getElementById('cMsg'),cSend=document.getElementById('cSend'),cNote=document.getElementById('cNote');
function cHref(){const su='Project enquiry from '+(cEmail.value.trim()||'your site');const body=(cMsg.value.trim())+'\n\nReply to: '+cEmail.value.trim();cSend.href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(EMAIL)+'&su='+encodeURIComponent(su)+'&body='+encodeURIComponent(body)}
[cEmail,cMsg].forEach(el=>el.addEventListener('input',()=>{cHref();el.removeAttribute('aria-invalid');cNote.textContent=''}));cHref();
cSend.addEventListener('click',e=>{const okE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cEmail.value.trim()),okM=cMsg.value.trim().length>0;
  if(!okE||!okM){e.preventDefault();if(!okE)cEmail.setAttribute('aria-invalid','true');if(!okM)cMsg.setAttribute('aria-invalid','true');cNote.textContent=!okE?'Add an email address I can reply to.':'Write a short message first.';(okE?cMsg:cEmail).focus();return}
  cNote.textContent='Gmail opens in a new tab with your message filled in. Press send there.'});
const cCopy=document.getElementById('cCopy');
cCopy.addEventListener('click',()=>{const ok=()=>{cCopy.classList.add('done');clearTimeout(cCopy._t);cCopy._t=setTimeout(()=>cCopy.classList.remove('done'),1600)};
  const sel=()=>{const rg=document.createRange();rg.selectNodeContents(cCopy.querySelector('span'));const s=getSelection();s.removeAllRanges();s.addRange(rg)};
  try{navigator.clipboard.writeText(EMAIL).then(ok,()=>{sel();ok()})}catch(_){sel();ok()}});

/* ---- live clock, India time ---- */
const fmt=new Intl.DateTimeFormat('en-US',{hour:'numeric',minute:'2-digit',second:'2-digit',timeZone:'Asia/Kolkata'});
const cks=[...document.querySelectorAll('[data-clock]')];const tick=()=>{const v=fmt.format(new Date());cks.forEach(c=>c.textContent=v)};tick();setInterval(tick,1000);
})();
