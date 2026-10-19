// @ts-nocheck
// Paper-doll character art, ported 1:1 from the Vokaboka game (re-run .design-sync/port_character.py after game changes).
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export const OUT="#2B2233";
export const SKIN=["#FFE3CC","#F8CBA4","#EBAE80","#CC8A58","#9C6239","#6B4024"];
export const HAIRC=["#F6D58E","#E9B65C","#C9772F","#8A5A3B","#4A2F22","#1F1A24","#E85C4A","#FF8FB8","#9B6CF2","#4C8DF6","#EDEDED"];
export const CLOTH=[["#E8453C","rouge","rot"],["#4C8DF6","bleu","blau"],["#3FBF6E","vert","grün"],["#FFD23F","jaune","gelb"],["#FF8FB8","rose","rosa"],["#9B6CF2","violet","violett"],["#FF9A3D","orange","orange"],["#2E2A36","noir","schwarz"],["#FFFFFF","blanc","weiss"],["#8A5A3B","marron","braun"],["#A7A7B3","gris","grau"],["#2EC4C4","turquoise","türkis"],["#7FA7E8","bleu","hellblau"]];
const L=(d,w,col)=>`<path d="${d}" fill="none" stroke="${OUT}" stroke-width="${w+8}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const P=(d,fill,x="")=>`<path d="${d}" fill="${fill}" stroke="${OUT}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" ${x}/>`;
const Ci=(cx,cy,r,fill,x="")=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${OUT}" stroke-width="4" ${x}/>`;
function shade(hex,amt){const n=parseInt(hex.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;r=Math.max(0,Math.min(255,r+amt));g=Math.max(0,Math.min(255,g+amt));b=Math.max(0,Math.min(255,b+amt));return "#"+((1<<24)|(r<<16)|(g<<8)|b).toString(16).slice(1)}
const TORSO="M76 150 Q100 140 124 150 Q132 190 128 232 L72 232 Q68 190 76 150 Z";
const TOPBODY="M73 148 Q100 137 127 148 Q135 190 131 238 L69 238 Q65 190 73 148 Z";
const ARM_L="M78 160 Q60 188 56 220",ARM_R="M122 160 Q140 188 144 220";
const SLV_L="M78 160 Q61 186 57 211",SLV_R="M122 160 Q139 186 143 211";

function hairBack(c){const h=c.hairC;switch(c.hair){
  case"afro":return Ci(100,72,80,h)+Ci(40,100,26,h)+Ci(160,100,26,h);
  case"tresses":{let s=P("M40 86 Q38 24 100 22 Q162 24 160 86 L156 118 L44 118 Z",h);for(const x of [46,154])for(let i=0;i<5;i++)s+=Ci(x,140+i*24,13-i*.6,h);return s+Ci(46,262,9,c.accC)+Ci(154,262,9,c.accC);}
  case"macarons":return Ci(48,38,26,h)+Ci(152,38,26,h)+Ci(48,38,9,c.accC)+Ci(152,38,9,c.accC);
  case"frange":return P("M40 86 Q38 24 100 22 Q162 24 160 86 L166 214 L34 214 Z",h);
  case"ondule":return P("M38 86 Q36 24 100 22 Q164 24 162 86 Q174 118 156 148 Q174 178 150 206 Q100 224 50 206 Q26 178 44 148 Q26 118 38 86 Z",h);
  case"lang":return P("M40 86 Q38 24 100 22 Q162 24 160 86 L168 236 Q100 252 32 236 Z",h);
  case"carre":return P("M36 84 Q36 22 100 22 Q164 22 164 84 L166 146 Q148 158 132 148 L68 148 Q52 158 34 146 Z",h);
  case"chignon":return Ci(100,26,26,h)+`<path d="M86 44 Q100 36 114 44" stroke="${shade(h,-40)}" stroke-width="4" fill="none"/>`;
  case"couettes":return Ci(34,104,27,h)+Ci(166,104,27,h)+Ci(52,92,7,c.accC)+Ci(148,92,7,c.accC);
  case"queue":return P("M138 38 Q196 58 182 150 Q176 196 150 208 Q172 140 144 70 Z",h)+Ci(146,50,8,c.accC);
  case"boucles":{let s="";for(let i=0;i<16;i++){const a=Math.PI*(0.95+1.1*i/15);s+=Ci((100+62*Math.cos(a)).toFixed(1),(86+60*Math.sin(a)).toFixed(1),22,h);}
    for(let i=0;i<5;i++){const a=Math.PI*(0.15+0.7*i/4);s+=Ci((100+64*Math.cos(a+Math.PI)).toFixed(1),(96+38*Math.sin(a)).toFixed(1),18,h);}return s;}
  default:return"";}}
function hairFront(c){const h=c.hairC;switch(c.hair){
  case"chauve":return"";
  case"iroquois":return P("M82 44 Q84 4 100 0 Q116 4 118 44 Q100 32 82 44 Z",h);
  case"pique":return P("M42 90 Q40 44 58 38 L50 10 L74 30 L82 2 L98 28 L112 0 L124 28 L146 8 L142 38 Q162 46 158 90 Q150 58 100 54 Q50 58 42 90 Z",h);
  case"frange":return P("M42 86 Q40 26 100 24 Q160 26 158 86 L156 72 Q100 78 44 72 Z",h);
  case"lang":return P("M42 94 Q38 26 100 25 Q162 26 158 94 Q150 58 112 47 Q104 60 100 66 Q96 60 88 47 Q50 58 42 94 Z",h);
  case"carre":return P("M40 98 Q36 24 100 24 Q164 24 160 98 Q152 54 104 52 Q68 54 54 74 Q46 84 40 98 Z",h);
  case"courts":return P("M42 90 Q40 26 100 26 Q160 26 158 90 Q154 62 140 53 Q126 64 112 51 Q100 64 86 51 Q72 64 60 53 Q46 62 42 90 Z",h);
  case"boucles":{let s="";for(let i=0;i<7;i++){const x=52+i*16;s+=Ci(x,(46+Math.abs(3-i)*5),15,h);}return s;}
  default:return P("M42 94 Q40 30 100 30 Q160 30 158 94 Q150 56 100 52 Q50 56 42 94 Z",h);}}
function eyes(c){const one=(x,kind)=>{
  if(kind==="froh")return `<path d="M${x-8} 96 Q${x} 84 ${x+8} 96" stroke="${OUT}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  let s=`<ellipse cx="${x}" cy="92" rx="6" ry="7.5" fill="${OUT}"/><circle cx="${x+2}" cy="89" r="2.2" fill="#fff"/>`;
  if(kind==="wimpern")s+=`<path d="M${x+(x<100?-6:6)} 87 l${x<100?-7:7} -5 M${x+(x<100?-6:6)} 91 l${x<100?-8:8} -1" stroke="${OUT}" stroke-width="3" stroke-linecap="round"/>`;
  return s;};
  const k=c.eyes;
  return `<g class="blink">${one(78,k==="zwinker"?"punkt":k)}${one(122,k==="zwinker"?"froh":k)}</g>`;}
function mouth(c){switch(c.mouth){
  case"grin":return P("M88 113 Q100 132 112 113 Z","#8E2F45")+`<path d="M91 115 L109 115 L108 119 L92 119 Z" fill="#fff"/>`;
  case"o":return `<ellipse cx="100" cy="118" rx="5" ry="6.5" fill="#8E2F45" stroke="${OUT}" stroke-width="3.5"/>`;
  case"zunge":return P("M88 113 Q100 132 112 113 Z","#8E2F45")+`<ellipse cx="101" cy="123" rx="6" ry="4.5" fill="#FF7E9A"/>`;
  default:return `<path d="M90 115 Q100 125 110 115" stroke="${OUT}" stroke-width="4" fill="none" stroke-linecap="round"/>`;}}
function bottoms(c){if(c.top==="robe")return"";const b=c.bottomC;const waist=P("M71 222 L129 222 L131 246 L69 246 Z",b);
  switch(c.bottom){
  case"jupe":return P("M71 222 L129 222 L145 266 Q100 277 55 266 Z",b);
  case"short":return L("M90 230 L89 252",24,b)+L("M110 230 L111 252",24,b)+waist;
  default:return L("M90 230 L88.5 282",23,b)+L("M110 230 L111.5 282",23,b)+waist;}}
function shoes(c){const s=c.shoesC;const foot=(x,dir)=>{
  switch(c.shoes){
  case"bottes":return P(`M${x-11} 264 L${x+11} 264 L${x+12} 290 Q${x+12+dir*8} 292 ${x+dir*20} 302 L${x-dir*13} 302 Z`,s);
  case"chaussons":return `<ellipse cx="${x+dir*3}" cy="296" rx="19" ry="11" fill="${s}" stroke="${OUT}" stroke-width="4"/>`+Ci(x-6+dir*3,283,5,s)+Ci(x+6+dir*3,283,5,s)+`<circle cx="${x-5+dir*3}" cy="294" r="2" fill="${OUT}"/><circle cx="${x+5+dir*3}" cy="294" r="2" fill="${OUT}"/>`;
  default:return P(`M${x-15+dir*-2} 300 Q${x-15} 284 ${x+dir*2} 284 Q${x+18*dir+dir*2} 286 ${x+20*dir} 300 Z`.replace(/--/g,"+"),s)+`<rect x="${x-18}" y="297" width="38" height="8" rx="4" fill="#fff" stroke="${OUT}" stroke-width="4"/>`;}};
  return foot(85,-1)+foot(115,1);}
function sneaker(x,dir,s){return P(`M${x-17} 300 Q${x-16} 284 ${x} 284 Q${x+18} 285 ${x+19} 300 Z`,s)+`<rect x="${x-18}" y="297" width="38" height="8" rx="4" fill="#fff" stroke="${OUT}" stroke-width="4"/>`}
function topSVG(c){const t=c.topC,d=shade(t,-35);let s="";
  const motif=(y)=>c.motif?`<text x="100" y="${y}" font-size="28" text-anchor="middle" dominant-baseline="central" style="font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif">${c.motif}</text>`:"";
  switch(c.top){
  case"pull":s=P(TOPBODY,t)+L(SLV_L,23,t)+L(SLV_R,23,t)+`<path d="M86 146 Q100 156 114 146" stroke="${d}" stroke-width="5" fill="none" stroke-linecap="round"/>`+`<path d="M72 228 H128" stroke="${d}" stroke-width="5"/>`+motif(192);break;
  case"debardeur":s=P("M80 150 L120 150 Q131 190 129 238 L71 238 Q69 190 80 150 Z",t)+`<path d="M84 150 L84 138 M116 150 L116 138" stroke="${OUT}" stroke-width="10" stroke-linecap="round"/><path d="M84 150 L84 138 M116 150 L116 138" stroke="${t}" stroke-width="5" stroke-linecap="round"/>`+motif(196);break;
  case"robe":s=L("M80 160 Q72 170 69 180",22,t)+L("M120 160 Q128 170 131 180",22,t)+P("M74 148 Q100 138 126 148 L129 204 L71 204 Z",t)+P("M71 198 L129 198 L152 272 Q100 286 48 272 Z",t)+`<path d="M71 202 H129" stroke="${d}" stroke-width="6"/>`+`<path d="M86 146 Q100 156 114 146" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>`+motif(238);break;
  case"sweat":s=P("M66 154 Q100 120 134 154 Q100 166 66 154 Z",d)+P(TOPBODY,t)+L(SLV_L,24,t)+L(SLV_R,24,t)+P("M84 200 L116 200 L120 226 L80 226 Z",d)+`<path d="M94 152 L92 176 M106 152 L108 176" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>`+motif(184);break;
  case"veste":s=P(TOPBODY,"#FFFFFF")+motif(196)+P("M73 148 Q86 141 93 144 L91 238 L69 238 Q65 190 73 148 Z",t)+P("M127 148 Q114 141 107 144 L109 238 L131 238 Q135 190 127 148 Z",t)+L(SLV_L,24,t)+L(SLV_R,24,t)+`<circle cx="88" cy="190" r="3" fill="${OUT}"/><circle cx="88" cy="212" r="3" fill="${OUT}"/>`;break;
  default:s=L("M80 160 Q72 172 68 183",22,t)+L("M120 160 Q128 172 132 183",22,t)+P(TOPBODY,t)+`<path d="M86 146 Q100 157 114 146" stroke="${d}" stroke-width="5" fill="none" stroke-linecap="round"/>`+motif(196);}
  return s;}
function accBack(c){if(c.acc==="sac")return P("M58 158 L142 158 L148 244 Q100 254 52 244 Z",c.accC)+P("M70 180 L130 180 L132 220 L68 220 Z",shade(c.accC,-30));return"";}
function accFront(c){const a=c.accC,d=shade(a,-40);switch(c.acc){
  case"noeud":return L("M46 72 Q100 16 154 72",6,a)+P("M140 40 L118 24 Q110 40 118 56 Z",a)+P("M140 40 L162 24 Q170 40 162 56 Z",a)+Ci(140,40,7,d);
  case"lunettes":return `<g fill="rgba(255,255,255,.28)">${Ci(78,92,15,"rgba(255,255,255,.28)",`stroke="${a}" stroke-width="5"`)}${Ci(122,92,15,"rgba(255,255,255,.28)",`stroke="${a}" stroke-width="5"`)}</g><path d="M93 90 Q100 85 107 90" stroke="${a}" stroke-width="5" fill="none"/>`;
  case"casquette":return P("M42 76 Q44 20 100 20 Q156 20 158 76 Z",a)+P("M100 68 Q152 58 180 76 Q152 88 100 78 Z",d)+Ci(100,20,6,d);
  case"fleur":{let s="";for(let i=0;i<5;i++){const an=i*Math.PI*2/5;s+=Ci((148+11*Math.cos(an)).toFixed(1),(48+11*Math.sin(an)).toFixed(1),9,a);}return s+Ci(148,48,7,"#FFD23F");}
  case"couronne":return P("M66 46 L72 12 L88 32 L100 4 L112 32 L128 12 L134 46 Z","#FFD23F")+Ci(100,30,5,a)+Ci(80,38,4,"#4C8DF6")+Ci(120,38,4,"#3FBF6E");
  case"chat":return P("M50 52 L56 8 L88 34 Z",a)+P("M150 52 L144 8 L112 34 Z",a)+`<path d="M58 40 L60 20 L76 34 Z M142 40 L140 20 L124 34 Z" fill="#FFB3C7"/>`;
  case"casque":return L("M38 92 Q38 18 100 18 Q162 18 162 92",8,a)+`<rect x="26" y="74" width="22" height="40" rx="10" fill="${a}" stroke="${OUT}" stroke-width="4"/><rect x="152" y="74" width="22" height="40" rx="10" fill="${a}" stroke="${OUT}" stroke-width="4"/>`;
  case"sac":return L("M84 152 L80 206",6,shade(a,-30))+L("M116 152 L120 206",6,shade(a,-30));
  default:return"";}}
export function charSVG(c,vb="0 0 200 330",cls=""){
  const sk=SKIN[c.skin]||SKIN[1];
  const legs=`<g class="legs">${L("M90 226 L88 292",15,sk)}${L("M110 226 L112 292",15,sk)}${bottoms(c)}${c.shoes==="baskets"||!c.shoes?sneaker(85,-1,c.shoesC)+sneaker(115,1,c.shoesC):shoes(c)}</g>`;
  const HT='transform="translate(100 142) scale(1.12) translate(-100 -142)"';const accF=accFront(c),bag=c.acc==="sac";
  return `<svg viewBox="${vb}" class="${cls}" aria-hidden="true"><g ${HT}>${hairBack(c)}</g>${accBack(c)}${legs}${P(TORSO,sk)}
  <g class="arms">${L(ARM_L,14,sk)}${L(ARM_R,14,sk)}</g>${topSVG(c)}${Ci(56,222,9.5,sk)}${Ci(144,222,9.5,sk)}
  <g ${HT}><rect x="91" y="128" width="18" height="24" rx="6" fill="${sk}" stroke="${OUT}" stroke-width="4"/>
  ${Ci(43,94,10,sk)}${Ci(157,94,10,sk)}<ellipse cx="100" cy="86" rx="58" ry="54" fill="${sk}" stroke="${OUT}" stroke-width="4"/>
  ${c.blush?`<ellipse cx="67" cy="108" rx="10" ry="6" fill="#FF8FA3" opacity=".55"/><ellipse cx="133" cy="108" rx="10" ry="6" fill="#FF8FA3" opacity=".55"/>`:""}
  ${eyes(c)}<path d="M97 101 Q102 104 97 108" stroke="${OUT}" stroke-width="3" fill="none" stroke-linecap="round"/>${mouth(c)}
  ${hairFront(c)}${bag?"":accF}</g>${bag?accF:""}</svg>`;
}
export { Ci, esc };
