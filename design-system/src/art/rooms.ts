// @ts-nocheck
// Room illustrations, ported 1:1 from the Vokaboka house.
import { OUT, Ci, esc } from "./character";
// ================= The house: one big illustrated cross-section; every object speaks its word =================
const R=(x,y,w,h,rx,fill,ex="")=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${OUT}" stroke-width="5" ${ex}/>`;
const C=(cx,cy,r,fill,ex="")=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${OUT}" stroke-width="5" ${ex}/>`;
const Pp=(d,fill,ex="")=>`<path d="${d}" fill="${fill}" stroke="${OUT}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" ${ex}/>`;
const T=(x,y,s,t)=>`<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle" dominant-baseline="central" style="font-family:'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif">${t}</text>`;
const TX=(x,y,s,t,fill=OUT,w=700)=>`<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" fill="${fill}" text-anchor="middle" dominant-baseline="central" style="font-family:Andika,'Trebuchet MS',sans-serif">${t}</text>`;
const G=(fr,de,inner,ex="")=>`<g class="obj" data-fr="${esc(fr)}" data-de="${esc(de)}" ${ex}>${inner}</g>`;
const sunG=(cx,cy)=>G("le soleil","die Sonne",`<g class="spin" style="transform-origin:${cx}px ${cy}px">${[...Array(8)].map((_,i)=>{const a=i*Math.PI/4;return `<line x1="${cx+42*Math.cos(a)}" y1="${cy+42*Math.sin(a)}" x2="${cx+58*Math.cos(a)}" y2="${cy+58*Math.sin(a)}" stroke="#FFB400" stroke-width="9" stroke-linecap="round"/>`}).join("")}</g>${C(cx,cy,32,"#FFD23F")}`);
const cloud=(x,y,cls,sc=1)=>G("le nuage","die Wolke",`<g class="${cls}"><path d="M${x} ${y} q0 ${-26*sc} ${28*sc} ${-26*sc} q${8*sc} ${-18*sc} ${32*sc} ${-14*sc} q${22*sc} ${-6*sc} ${30*sc} ${16*sc} q${26*sc} ${2*sc} ${24*sc} ${24*sc} z" fill="#fff" stroke="${OUT}" stroke-width="4"/></g>`);
const ROOF=420,FH=700,HW=3420,HH=ROOF+3*FH,BASE=640;
const floorTop=f=>ROOF+(2-f)*FH;
const wf=(w,wall,floor,deco="")=>`<rect width="${w}" height="480" fill="${wall}"/>${deco}<rect y="480" width="${w}" height="220" fill="${floor}"/><rect x="-10" y="466" width="${w+20}" height="20" fill="#fff" stroke="${OUT}" stroke-width="5"/>`;
const planks=(w,c)=>`<path d="M0 545 H${w} M0 615 H${w}" stroke="${c}" stroke-width="5"/>`+[...Array(Math.ceil(w/300))].map((_,i)=>`<path d="M${120+i*300} 480 V545 M${260+i*300} 545 V615 M${60+i*300} 615 V700" stroke="${c}" stroke-width="5"/>`).join("");
const DIM=w=>`<rect class="dim" width="${w}" height="700" fill="#1B2350"/>`;
const DAYS=[["lundi","Montag"],["mardi","Dienstag"],["mercredi","Mittwoch"],["jeudi","Donnerstag"],["vendredi","Freitag"],["samedi","Samstag"],["dimanche","Sonntag"]];

const HOUSE=[
 {k:"bureau",fr:"le bureau",de:"das Arbeitszimmer",unit:"Unité 1",f:2,x:0,w:1000,svg:()=>`${wf(1000,"#E7E2FF","#D9A97C")}${planks(1000,"#C08A5C")}
  ${G("le calendrier","der Kalender",`${R(40,60,200,300,14,"#fff")}${R(40,60,200,46,14,"#E8453C")}${TX(140,83,24,"la semaine","#fff")}`)}
  ${DAYS.map(([fr,de],i)=>G(fr,de,`<rect x="54" y="${114+i*34}" width="172" height="28" rx="7" fill="${i>4?"#FFE0EC":"#F1EEFF"}" stroke="${OUT}" stroke-width="3"/>${TX(140,128+i*34,19,fr)}`)).join("")}
  ${G("le tableau noir","die Wandtafel",`${R(270,58,460,240,18,"#B07445")}${R(288,76,424,204,8,"#2F5D50")}<text id="chalk" x="500" y="162" font-size="48" fill="#F4F1E8" text-anchor="middle" dominant-baseline="central" style="font-family:Andika,'Trebuchet MS',sans-serif">Bonjour !</text><text id="chalk2" x="500" y="226" font-size="26" fill="#BFD8CF" text-anchor="middle" dominant-baseline="central" style="font-family:Andika,'Trebuchet MS',sans-serif">Tippe auf die Tafel</text>${R(310,294,380,14,6,"#B07445")}`,'data-act="chalk"')}
  ${G("la règle","das Lineal",`${R(560,280,120,14,3,"#FFD23F")}<path d="M574 280 v7 M590 280 v5 M606 280 v7 M622 280 v5 M638 280 v7 M654 280 v5 M670 280 v7" stroke="${OUT}" stroke-width="3"/>`)}
  ${G("les maths, les mathématiques","Mathematik",`${R(770,58,190,110,14,"#FFD23F")}${TX(865,113,44,"1+1=2")}`)}
  ${G("le classeur","der Ordner",`${[0,1,2,3].map(i=>R(770+i*36,228,30,100,4,["#E8453C","#4C8DF6","#3FBF6E","#9B6CF2"][i])).join("")}`)}
  ${R(756,328,214,16,5,"#fff")}${G("la géo, la géographie","die Geografie",T(930,290,62,"🌍"))}
  ${G("la table","der Tisch",`${R(270,430,460,26,10,"#F4C37A")}${R(290,454,18,90,6,"#E0A85E")}${R(692,454,18,90,6,"#E0A85E")}`)}
  ${G("un ordinateur","ein Computer",T(330,388,72,"💻"))}
  ${G("le livre","das Buch",`${Pp("M384 430 L384 404 Q410 396 432 404 Q454 396 480 404 L480 430 Z","#fff")}<path d="M432 404 V430" stroke="${OUT}" stroke-width="4"/>`)}
  ${G("le cahier","das Heft",R(490,412,74,18,4,"#9B6CF2"))}
  ${G("la trousse","das Etui",`${R(574,404,96,26,13,"#FF8FB8")}<path d="M584 412 H660" stroke="${OUT}" stroke-width="3" stroke-dasharray="6 5"/>`)}
  ${G("le crayon","der Bleistift",T(590,384,32,"✏️"))}${G("le stylo","der Kugelschreiber",T(624,384,32,"🖊️"))}
  ${G("la gomme","der Gummi",R(678,414,34,16,5,"#FFB3C7"))}${G("un agenda","eine Agenda",T(700,388,36,"📒"))}
  ${G("la chaise","der Stuhl",`${R(440,470,120,74,16,"#4C8DF6")}${R(428,532,144,22,8,"#3A74D0")}${R(442,552,14,74,5,"#3A74D0")}${R(544,552,14,74,5,"#3A74D0")}`)}
  ${G("le cartable","die Schultasche",`<path d="M106 572 Q133 540 160 572" stroke="${OUT}" stroke-width="8" fill="none"/>${R(80,566,106,84,20,"#E8453C")}${Pp("M80 600 Q133 622 186 600 L186 584 Q186 566 168 566 L98 566 Q80 566 80 584 Z","#C93629")}${R(122,600,22,16,4,"#FFD23F")}`)}
  ${G("une école","eine Schule",`${R(800,560,160,80,12,"#fff")}${T(880,600,52,"🏫")}`)}`},
 {k:"atelier",fr:"l'atelier",de:"die Werkstatt",unit:"Unité 4",f:2,x:1420,w:1000,svg:()=>`${wf(1000,"#F6E1C3","#C98A5B",`<path d="${[...Array(10)].map((_,i)=>`M${i*100+50} 0 V466`).join(" ")}" stroke="#EBCFA8" stroke-width="5"/>`)}${planks(1000,"#A86E3E")}
  ${G("la construction","der Modellbau",`<g class="sway" style="transform-origin:820px 0px"><path d="M820 0 V96" stroke="${OUT}" stroke-width="3"/>${T(820,128,78,"✈️")}</g>`)}
  ${G("ACM (activités créatrices manuelles)","Handarbeit und Werken",`${R(60,60,220,100,16,"#9B6CF2")}${TX(170,110,58,"ACM","#fff",800)}`)}
  ${G("la table","der Tisch",`${R(70,410,620,30,10,"#E0A85E")}${R(92,438,22,104,6,"#B9803F")}${R(646,438,22,104,6,"#B9803F")}`)}
  ${G("Prends la pâte bleue/verte/rouge.","Nimm die blaue/grüne/rote Knete.",`<ellipse cx="128" cy="392" rx="28" ry="19" fill="#4C8DF6" stroke="${OUT}" stroke-width="4"/><ellipse cx="184" cy="394" rx="28" ry="17" fill="#3FBF6E" stroke="${OUT}" stroke-width="4"/><ellipse cx="240" cy="392" rx="28" ry="19" fill="#E8453C" stroke="${OUT}" stroke-width="4"/>`)}
  ${G("Plante des cure-dents sur le dos.","Pflanze Zahnstocher in den Rücken ein.",`${[...Array(7)].map((_,i)=>{const a=Math.PI*(1.05+i*0.13);return `<line x1="${340+30*Math.cos(a)}" y1="${372+30*Math.sin(a)}" x2="${340+62*Math.cos(a)}" y2="${372+62*Math.sin(a)}" stroke="#C9A06A" stroke-width="5" stroke-linecap="round"/>`}).join("")}${T(340,380,66,"🍐")}<circle cx="312" cy="384" r="4" fill="${OUT}"/>`)}
  ${G("Enfile des raisins sur un fil de métal.","Ziehe Trauben auf einen Metallfaden auf.",`<path d="M420 398 Q490 350 580 396" stroke="#A7A7B3" stroke-width="5" fill="none"/>${[0,1,2,3,4,5].map(i=>{const t=i/5,x=420+160*t,y=398-4*48*t*(1-t)-2;return Ci(x.toFixed(1),y.toFixed(1),15,"#9B6CF2")}).join("")}<circle cx="578" cy="390" r="3" fill="#fff"/>`)}
  ${G("les ciseaux","die Schere",T(640,392,46,"✂️"))}
  ${G("le dessin","das bildnerische Gestalten, die Zeichnung",`<path d="M740 560 L790 160 M900 560 L850 160 M820 560 V300" stroke="#8A5A3B" stroke-width="10" stroke-linecap="round"/>${R(720,180,200,160,8,"#fff")}${C(770,226,22,"#FFD23F")}${Pp("M780 330 L820 270 L860 330 Z","#E8453C")}<path d="M730 318 Q800 300 910 318" stroke="#3FBF6E" stroke-width="8" fill="none"/>`)}
  ${G("tricoter","stricken",T(820,610,74,"🧶"))}
  ${G("bricoler","basteln",`${R(140,588,180,70,12,"#E8453C")}<path d="M190 588 Q230 556 270 588" stroke="${OUT}" stroke-width="7" fill="none"/>${T(230,622,40,"🔨")}`)}
  ${G("le bricolage","das Basteln",T(470,620,60,"🛠️"))}`},
 {k:"chambre",fr:"la chambre",de:"das Zimmer",unit:"Unité 3",f:1,x:0,w:1000,ownDim:true,svg:()=>`
  <defs><pattern id="ch-dots" width="70" height="70" patternUnits="userSpaceOnUse"><circle cx="18" cy="18" r="7" fill="#F8BFD0"/><circle cx="53" cy="53" r="7" fill="#F8BFD0"/></pattern>
  <linearGradient id="ch-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FD0FF"/><stop offset="1" stop-color="#DDF4FF"/></linearGradient>
  <radialGradient id="ch-glow"><stop offset="0" stop-color="#FFF2A8" stop-opacity=".95"/><stop offset="1" stop-color="#FFF2A8" stop-opacity="0"/></radialGradient>
  <clipPath id="ch-win"><rect x="410" y="60" width="220" height="230" rx="18"/></clipPath></defs>
  <rect width="1000" height="480" fill="#FDE4EA"/><rect width="1000" height="480" fill="url(#ch-dots)"/>
  <rect y="480" width="1000" height="220" fill="#EDB57E"/>${planks(1000,"#D69756")}
  <rect x="-10" y="466" width="1020" height="20" fill="#fff" stroke="${OUT}" stroke-width="5"/>
  ${G("la fenêtre","das Fenster",`<g clip-path="url(#ch-win)"><rect x="410" y="60" width="220" height="230" fill="url(#ch-sky)"/>${sunG(470,125)}${cloud(450,240,"drift")}${cloud(540,180,"drift2")}
    <g class="nightsky"><rect x="410" y="60" width="220" height="230" fill="#26306B"/><circle cx="585" cy="112" r="26" fill="#FFF4C4"/><circle cx="597" cy="103" r="22" fill="#26306B"/>${[[450,100],[500,150],[440,220],[530,90],[560,240],[600,200]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="#fff"/>`).join("")}</g></g>
    <rect x="410" y="60" width="220" height="230" rx="18" fill="none" stroke="${OUT}" stroke-width="7"/><path d="M520 62 V288 M412 175 H628" stroke="#fff" stroke-width="10"/>${R(395,286,250,22,8,"#fff")}`,'data-act="window"')}
  ${Pp("M392 48 Q446 160 400 304 L376 304 L376 48 Z","#9B6CF2")}${Pp("M648 48 Q594 160 640 304 L664 304 L664 48 Z","#9B6CF2")}<path d="M360 46 H680" stroke="${OUT}" stroke-width="9" stroke-linecap="round"/>
  ${G("l'étagère","das Regal",`${R(70,190,280,18,6,"#fff")}<path d="M90 208 l16 22 M330 208 l-16 22" stroke="${OUT}" stroke-width="5"/>`)}
  ${G("la BD (la bande dessinée)","der Comic",`${R(96,118,26,72,4,"#4C8DF6")}${R(124,130,24,60,4,"#FFD23F")}${R(150,110,28,80,4,"#3FBF6E")}${Pp("M182 190 L212 128 L234 138 L206 192 Z","#FF6A47")}`)}
  ${G("la plante","die Pflanze",`<g class="sway" style="transform-origin:300px 150px">${Pp("M300 150 Q262 120 268 88 Q298 104 300 150","#3FBF6E")}${Pp("M300 150 Q338 116 334 82 Q304 102 300 150","#2FA35A")}${Pp("M300 150 Q296 100 300 70 Q312 104 300 150","#49C979")}</g>${Pp("M272 190 L278 150 L322 150 L328 190 Z","#FF9A3D")}`)}
  ${G("le lit","das Bett",`${R(48,300,72,210,28,"#8FD3F4")}${R(60,420,320,72,16,"#8FD3F4")}${R(80,488,22,26,6,"#5AA9D6")}${R(340,488,22,26,6,"#5AA9D6")}${R(110,392,264,40,14,"#fff")}<ellipse cx="168" cy="384" rx="48" ry="24" fill="#fff" stroke="${OUT}" stroke-width="5"/>${Pp("M206 378 L370 378 Q386 378 386 394 L386 452 Q300 472 206 452 Z","#FF9EC1")}${[[240,400],[290,420],[340,398],[260,440],[350,440]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#fff" opacity=".8"/>`).join("")}`)}
  ${G("le violon","die Geige, die Violine",T(230,600,70,"🎻"))}
  ${G("la lampe","die Lampe",`<ellipse cx="700" cy="478" rx="42" ry="11" fill="#fff" stroke="${OUT}" stroke-width="5"/><path d="M700 470 V266" stroke="${OUT}" stroke-width="9"/>${Pp("M656 270 L744 270 L722 202 L678 202 Z","#FFD23F")}<path d="M716 270 V300" stroke="${OUT}" stroke-width="3"/>${C(716,304,5,"#FF6A47")}`,'data-act="lamp"')}
  ${G("le placard","der Schrank",`${R(760,166,210,24,8,"#C98A5B")}${R(772,186,186,300,16,"#7A4A2A")}${R(800,210,30,120,10,"#FF8FB8")}${R(840,210,30,140,10,"#4C8DF6")}${R(880,210,30,110,10,"#FFD23F")}
    <g class="doorL">${R(772,186,93,300,14,"#E2A777")}${C(850,330,7,"#FFD23F")}</g><g class="doorR">${R(865,186,93,300,14,"#E2A777")}${C(880,330,7,"#FFD23F")}</g>${R(782,484,24,20,4,"#C98A5B")}${R(924,484,24,20,4,"#C98A5B")}`,'data-act="wardrobe"')}
  ${G("le tapis","der Teppich",`<ellipse cx="600" cy="628" rx="230" ry="52" fill="#9B6CF2" stroke="${OUT}" stroke-width="5"/><ellipse cx="600" cy="628" rx="176" ry="34" fill="none" stroke="#C9B0FF" stroke-width="9" stroke-dasharray="22 14"/>`)}
  ${G("la radio","das Radio",`<path d="M440 524 L474 470" stroke="${OUT}" stroke-width="5" stroke-linecap="round"/>${C(475,468,7,"#FFD23F")}${R(400,522,124,76,18,"#FF6A47")}${C(442,560,21,"#FFE0D6")}${C(442,560,8,OUT)}${R(474,540,36,12,5,"#fff")}${R(474,562,36,12,5,"#fff")}`,'data-act="radio"')}
  ${G("la batterie","das Schlagzeug",T(900,610,70,"🥁"))}
  ${DIM(1000)}<circle class="glow" cx="700" cy="250" r="200" fill="url(#ch-glow)"/>`},
 {k:"bain",fr:"la salle de bain",de:"das Badezimmer",unit:"Unité 4",f:1,x:1420,w:1000,svg:()=>`<defs><pattern id="ba-tile" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#E6F6FF" stroke="#BFE3F5" stroke-width="3"/></pattern>
  <pattern id="ba-floor" width="80" height="80" patternUnits="userSpaceOnUse"><rect width="80" height="80" fill="#FFFFFF"/><rect width="40" height="40" fill="#BDE8E2"/><rect x="40" y="40" width="40" height="40" fill="#BDE8E2"/></pattern></defs>
  ${wf(1000,"#CFEAFF","url(#ba-floor)",`<rect y="250" width="1000" height="216" fill="url(#ba-tile)"/>`)}
  ${G("le miroir","der Spiegel",`<ellipse cx="500" cy="190" rx="176" ry="156" fill="#FFC83D" stroke="${OUT}" stroke-width="6"/><ellipse cx="500" cy="190" rx="158" ry="138" fill="#EAF8FF" stroke="${OUT}" stroke-width="5"/>`)}
  ${G("le visage","das Gesicht",`<circle cx="500" cy="200" r="92" fill="#FFE3CC" stroke="${OUT}" stroke-width="5"/>`)}
  ${G("la tête","der Kopf",`<path d="M420 150 Q500 96 580 150" stroke="${OUT}" stroke-width="0" fill="none"/>`)}
  ${G("une oreille","ein Ohr",T(402,206,42,"🍋")+T(598,206,42,"🍋"))}
  ${G("les cheveux","die Haare",T(448,118,52,"🥦")+T(500,104,52,"🥦")+T(552,118,52,"🥦"))}
  ${G("les yeux, un œil","die Augen, ein Auge",T(466,190,40,"🍇")+T(534,190,40,"🍇"))}
  ${G("le nez","die Nase",T(500,230,44,"🥕"),'data-act="nose"')}
  ${G("la bouche","der Mund",T(500,268,52,"🍌"))}
  ${G("le lavabo","das Lavabo",`${R(492,330,16,30,6,"#A7A7B3")}${Pp("M396 360 L604 360 Q604 424 500 428 Q396 424 396 360 Z","#fff")}${R(478,426,44,56,8,"#fff")}`)}
  ${G("la baignoire","die Badewanne",`<g class="bubbles">${[[90,370,14],[140,352,10],[200,362,16],[250,348,11],[290,366,13]].map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#9FD3F0" stroke-width="3"/>`).join("")}</g>${Pp("M40 396 L340 396 L328 500 Q310 522 278 522 L102 522 Q70 522 58 500 Z","#fff")}${R(80,518,22,22,6,"#FFC83D")}${R(278,518,22,22,6,"#FFC83D")}${T(200,380,46,"🦆")}`)}
  ${G("la serviette","das Tuch",`<path d="M720 186 H860" stroke="${OUT}" stroke-width="8" stroke-linecap="round"/>${R(736,190,110,190,10,"#FF8FB8")}<path d="M736 240 H846 M736 330 H846" stroke="#fff" stroke-width="12"/>`)}
  ${G("Pour le nez, je prends une carotte.","Für die Nase nehme ich eine Karotte.",`${R(720,560,240,90,16,"#fff")}${TX(840,590,22,"Pour le nez,")}${TX(840,620,22,"je prends une carotte.")}`)}`},
 {k:"salon",fr:"le salon",de:"das Wohnzimmer",unit:"Unité 2 · 3",f:0,x:0,w:1000,svg:()=>`<defs><pattern id="sa-str" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#D8F1EE"/><rect width="26" height="60" fill="#C6EAE5"/></pattern></defs>
  ${wf(1000,"url(#sa-str)","#E2A46E")}${planks(1000,"#C98A52")}
  ${G("un arbre généalogique","ein Stammbaum",`${R(36,56,190,230,14,"#FFF6E0")}<path d="M131 270 V170 M131 200 L80 150 M131 200 L182 150 M131 170 L131 120" stroke="#8A5A3B" stroke-width="8" stroke-linecap="round"/>${C(131,104,22,"#3FBF6E")}${C(76,138,20,"#3FBF6E")}${C(186,138,20,"#3FBF6E")}${T(131,104,24,"👧")}${T(76,138,22,"👩")}${T(186,138,22,"👨")}`)}
  ${[["la mère, la maman","die Mutter","👩"],["le père, le papa","der Vater","👨"],["la sœur","die Schwester","👧"],["le frère","der Bruder","👦"],["la grand-mère","die Grossmutter","👵"],["le grand-père","der Grossvater","👴"]].map(([fr,de,e],i)=>G(fr,de,`${R(250+i*78,66,70,86,8,["#FF8FB8","#7FA7E8","#FFD23F","#3FBF6E","#9B6CF2","#FF9A3D"][i])}<rect x="${260+i*78}" y="76" width="50" height="66" rx="4" fill="#fff"/>${T(285+i*78,110,38,e)}`)).join("")}
  ${G("C'est ma famille.","Das ist meine Familie.",`${R(740,56,222,174,14,"#FFC83D")}<rect x="756" y="72" width="190" height="142" rx="8" fill="#fff"/>${T(851,130,70,"👨‍👩‍👧")}${TX(851,192,19,"C'est ma famille.")}`)}
  ${G("le piano, jouer du piano","das Klavier, Klavier spielen",`${R(40,282,250,22,8,"#4B4558")}${R(50,300,230,180,14,"#2E2A36")}${R(62,372,206,44,4,"#fff")}${[0,1,2,4,5].map(i=>`<rect x="${82+i*33}" y="372" width="16" height="26" fill="${OUT}"/>`).join("")}${R(60,476,20,24,4,"#2E2A36")}${R(250,476,20,24,4,"#2E2A36")}`,'data-act="piano"')}
  ${G("la flûte","die Flöte",`<rect x="90" y="262" width="110" height="12" rx="6" fill="#E0A85E" stroke="${OUT}" stroke-width="3" transform="rotate(-8 145 268)"/>`)}
  ${G("la guitare, jouer de la guitare","die Gitarre, Gitarre spielen",T(310,420,92,"🎸"))}
  ${G("le canapé","das Sofa",`${R(360,320,300,110,32,"#FF8FB8")}${R(350,404,320,76,22,"#FF6FA6")}${R(326,372,52,112,24,"#FF6FA6")}${R(642,372,52,112,24,"#FF6FA6")}${R(370,478,16,20,4,"#C93676")}${R(634,478,16,20,4,"#C93676")}`)}
  ${G("le chat","die Katze",T(452,372,66,"🐱"))}
  ${G("la télé","der Fernseher",`${R(722,250,216,132,14,OUT)}<rect class="tv" x="736" y="264" width="188" height="104" rx="6" fill="#7FD0FF"/>${R(820,380,20,14,2,OUT)}`)}
  ${R(704,392,252,88,12,"#C98A5B")}<path d="M830 400 V472" stroke="${OUT}" stroke-width="4"/>
  ${G("la console","die Spielkonsole",T(770,436,48,"🎮"))}${G("la BD (la bande dessinée)","der Comic",T(890,436,44,"💥"))}
  <ellipse cx="560" cy="626" rx="250" ry="48" fill="#FFD23F" stroke="${OUT}" stroke-width="5"/>
  ${G("le chien","der Hund",T(560,600,84,"🐶"))}${G("le bébé","das Baby, das Kleinkind",T(760,610,64,"👶"))}`},
 {k:"cuisine",fr:"la cuisine",de:"die Küche",unit:"Unité 4",f:0,x:1420,w:1000,svg:()=>`
  <defs><pattern id="ku-tiles" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="#fff" stroke="#EADFC6" stroke-width="3"/></pattern>
  <pattern id="ku-check" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="#FFF6E6"/><rect width="50" height="50" fill="#7ECFC0"/><rect x="50" y="50" width="50" height="50" fill="#7ECFC0"/></pattern>
  <linearGradient id="ku-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFB48A"/><stop offset="1" stop-color="#FFE7B8"/></linearGradient><clipPath id="ku-win"><rect x="690" y="60" width="220" height="190" rx="18"/></clipPath></defs>
  <rect width="1000" height="480" fill="#FFE9A8"/><rect y="250" width="1000" height="230" fill="url(#ku-tiles)"/>
  <rect y="480" width="1000" height="220" fill="url(#ku-check)"/><rect x="-10" y="466" width="1020" height="20" fill="#fff" stroke="${OUT}" stroke-width="5"/>
  ${G("la fenêtre","das Fenster",`<g clip-path="url(#ku-win)"><rect x="690" y="60" width="220" height="190" fill="url(#ku-sky)"/>${sunG(770,140)}${cloud(800,200,"drift2")}<rect class="nightsky" x="690" y="60" width="220" height="190" fill="#26306B"/></g><rect x="690" y="60" width="220" height="190" rx="18" fill="none" stroke="${OUT}" stroke-width="7"/><path d="M800 62 V248" stroke="#fff" stroke-width="9"/>${R(676,246,248,20,8,"#fff")}`)}
  ${G("le frigo","der Kühlschrank",`${R(60,108,196,392,28,"#CDEFFF")}${R(72,236,172,254,12,"#F7FCFF")}<path d="M76 320 H240 M76 400 H240" stroke="#BFE0F0" stroke-width="6"/>
    ${G("le morceau de fromage","das Stück Käse",T(110,290,48,"🧀"))}${G("la carotte","die Karotte",T(190,290,48,"🥕"))}${G("la fraise","die Erdbeere",T(110,368,48,"🍓"))}${G("le raisin vert/bleu","die grüne/blaue Traube",T(190,368,48,"🍇"))}${G("le bouquet de brocoli","das Brokkoliröschen",T(150,448,48,"🥦"))}
    ${R(72,120,172,106,16,"#E4F7FF")}${R(220,150,10,50,5,"#fff")}
    <g class="fdoor">${R(72,236,172,254,16,"#E4F7FF")}${R(220,290,10,70,5,"#fff")}${C(110,280,10,"#FF6A47")}${C(140,300,8,"#FFD23F")}${C(120,320,7,"#3FBF6E")}</g>`,'data-act="fridge"')}
  ${R(280,330,390,160,14,"#fff")}<path d="M410 342 V478 M540 342 V478" stroke="${OUT}" stroke-width="4"/>${C(395,410,5,OUT)}${C(425,410,5,OUT)}${C(555,410,5,OUT)}${R(270,316,410,26,10,"#3FBF6E")}${R(330,304,150,16,6,"#4B4558")}
  ${G("la soupe","die Suppe",`<g class="steam"><path d="M370 230 q-12 -16 0 -32 q12 -16 0 -32" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M405 226 q-12 -16 0 -32 q12 -16 0 -32" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M440 230 q-12 -16 0 -32 q12 -16 0 -32" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/></g>${Pp("M344 252 L466 252 L458 304 Q405 318 352 304 Z","#E8453C")}${R(332,240,146,18,9,"#C93629")}`)}
  ${G("le pain","das Brot",T(560,282,64,"🍞"))}${G("un ananas","eine Ananas",T(630,276,60,"🍍"))}
  ${G("la table","der Tisch",`${R(640,486,320,24,10,"#FF9A3D")}${R(664,508,18,120,6,"#D97A22")}${R(918,508,18,120,6,"#D97A22")}`)}
  ${Pp("M700 478 Q800 538 900 478 Z","#9B6CF2")}
  ${G("la pomme","der Apfel",T(748,448,56,"🍎"))}${G("la banane","die Banane",T(802,438,56,"🍌"))}${G("la poire","die Birne",T(856,448,56,"🍐"))}
  ${G("Pose la fraise sur l'assiette.","Stelle/Lege die Erdbeere auf den Teller.",`<ellipse cx="470" cy="600" rx="70" ry="18" fill="#fff" stroke="${OUT}" stroke-width="4"/>${T(470,586,40,"🍓")}`)}
  ${G("la pomme de terre","die Kartoffel",T(330,620,52,"🥔"))}${G("les nouilles","die Nudeln",T(590,620,52,"🍜"))}`},
 {k:"jardin",fr:"le jardin",de:"der Garten",unit:"Unité 3",f:0,x:2420,w:1000,svg:()=>`
  <path d="M0 470 Q160 400 320 452 Q520 380 720 450 Q880 410 1000 440 L1000 480 L0 480 Z" fill="#A6E39A"/>
  ${sunG(820,120)}${cloud(120,140,"drift")}${cloud(520,90,"drift2",.8)}
  <g class="nightsky"><rect width="1000" height="480" fill="#26306B"/><circle cx="820" cy="120" r="34" fill="#FFF4C4"/>${[[120,80],[300,160],[460,70],[620,180],[920,60]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`).join("")}</g>
  <rect y="480" width="1000" height="220" fill="#7ED36F"/><path d="M0 480 H1000" stroke="#5FB552" stroke-width="8"/>
  ${[...Array(11)].map((_,i)=>`<rect x="${20+i*92}" y="400" width="18" height="90" rx="6" fill="#fff" stroke="${OUT}" stroke-width="4"/>`).join("")}<path d="M0 424 H1000 M0 458 H1000" stroke="${OUT}" stroke-width="4"/><path d="M0 424 H1000 M0 458 H1000" stroke="#fff" stroke-width="0"/>
  ${G("l'arbre","der Baum",`<rect x="190" y="250" width="44" height="250" rx="12" fill="#8A5A3B" stroke="${OUT}" stroke-width="5"/><g class="sway" style="transform-origin:212px 280px">${C(212,200,110,"#3FBF6E")}${C(140,240,60,"#49C979")}${C(290,236,64,"#2FA35A")}${T(170,170,40,"🍎")}${T(260,200,40,"🍎")}</g>`)}
  ${G("grimper","klettern",`<path d="M250 300 V500 M282 300 V500" stroke="#C9A06A" stroke-width="6"/>${[0,1,2,3,4].map(i=>`<path d="M250 ${320+i*40} H282" stroke="#C9A06A" stroke-width="6"/>`).join("")}`)}
  ${G("la chenille","die Raupe",T(120,232,40,"🐛"))}
  ${G("nager","schwimmen",`<ellipse cx="620" cy="610" rx="170" ry="54" fill="#5BC0F0" stroke="${OUT}" stroke-width="6"/><path class="wave" d="M490 606 q20 -12 40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#fff" stroke-width="6" fill="none"/>`)}
  ${G("le foot, faire du foot","Fussball, Fussball spielen",`<g class="ball">${T(400,640,64,"⚽")}</g>`,'data-act="ball"')}
  ${G("le vélo","das Velo, das Fahrrad",T(880,560,110,"🚲"))}
  ${G("l'unihockey, faire de l'unihockey","das Unihockey, Unihockey spielen",T(500,520,60,"🏑"))}
  ${G("le hérisson","der Igel",T(330,650,58,"🦔"))}${G("la souris","die Maus",T(80,640,46,"🐭"))}
  ${G("la pêche, pêcher","das Fischen, fischen",T(780,570,56,"🎣"))}
  ${G("jouer dehors","draussen spielen",T(960,640,48,"🪁"))}`},
 {k:"hall2",fr:"l'escalier",de:"die Treppe",unit:"",f:2,x:1000,w:420,hall:true,svg:()=>`${wf(420,"#FFF1D6","#E2A46E")}${planks(420,"#C98A52")}<circle cx="210" cy="170" r="70" fill="#BDE7FF" stroke="${OUT}" stroke-width="7"/><path d="M210 102 V238 M142 170 H278" stroke="#fff" stroke-width="8"/>${G("la plante","die Pflanze",T(90,430,80,"🪴"))}`},
 {k:"hall1",fr:"l'escalier",de:"die Treppe",unit:"",f:1,x:1000,w:420,hall:true,svg:()=>`${wf(420,"#FFF1D6","#E2A46E")}${planks(420,"#C98A52")}${G("le tableau","das Bild",`${R(40,110,150,116,8,"#FFC83D")}<rect x="54" y="124" width="122" height="88" fill="#BDE7FF"/>${Pp("M54 212 L100 160 L140 212 Z","#3FBF6E")}${C(150,146,12,"#FFD23F")}`)}`},
 {k:"hall0",fr:"l'escalier",de:"die Treppe",unit:"",f:0,x:1000,w:420,hall:true,svg:()=>`${wf(420,"#FFF1D6","#E2A46E")}${planks(420,"#C98A52")}
  ${G("la porte","die Türe",`<rect x="24" y="226" width="162" height="256" rx="14" fill="#7A4A2A" stroke="${OUT}" stroke-width="5"/><g class="door">${R(30,232,150,250,12,"#4C8DF6")}${R(56,262,98,70,10,"#BDE7FF")}${C(158,370,8,"#FFD23F")}</g>`,'data-act="door"')}
  ${G("une adresse","eine Adresse",`${R(46,168,118,44,10,"#fff")}${TX(105,190,20,"7, rue Boka")}`)}
  <ellipse cx="105" cy="520" rx="80" ry="14" fill="#C93676" stroke="${OUT}" stroke-width="4"/>`}
];

export function roomSVG(k){const r=HOUSE.find(x=>x.k===k);if(!r)return "";return `<svg viewBox="0 0 ${r.w} 700" preserveAspectRatio="xMidYMid slice" class="vk-room-svg" role="img" aria-label="${esc(r.fr)}">${r.svg()}${r.ownDim||r.k==="jardin"?"":DIM(r.w)}</svg>`}
export const ROOM_META=HOUSE.map(r=>({key:r.k,fr:r.fr,de:r.de,unit:r.unit,width:r.w}));
