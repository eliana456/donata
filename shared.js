// ════════════════════════════════════════
//  PAINTINGS DATA
//  Set `img` to your image path e.g. "images/vakaras.jpg"
// ════════════════════════════════════════
const paintings = [
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/nezinomas.jpeg',
    medium:'acrylic', series:'figures',    size:'medium', avail:true,
    lt:{name:'Vasara II',  med:'Akrilas ant drobės'},
    en:{name:'Summer II', med:'Acrylic on canvas'},
    dim:'60 x 60 cm', year:'2026', price:'€ 250' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/vasarosvakaras.jpeg',
    medium:'acrylic', series:'figures',    size:'medium', avail:true,
    lt:{name:'Vasaros vakaras',  med:'Akrilas ant drobės'},
    en:{name: "Summer's evening", med:'Acrylic on canvas'},
    dim:'60 x 60 cm', year:'2026', price:'€ 250' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/vasara.jpeg',
    medium:'acrylic', series:'figures',    size:'medium', avail:true,
    lt:{name:'Vasara',  med:'Akrilas ant drobės'},
    en:{name:'Summer', med:'Acrylic on canvas'},
    dim:'60 x 60 cm', year:'2026', price:'€ 250' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/hothouse.jpeg',
    medium:'acrylic', series:'figures',    size:'medium', avail:true,
    lt:{name:'Šiltnamis',  med:'Akrilas ant drobės'},
    en:{name:'Hothouse', med:'Acrylic on canvas'},
    dim:'50 x 70 cm', year:'2026', price:'€ 250' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/besansu.jpeg',
    medium:'acrylic', series:'figures',    size:'large', avail:false,
    lt:{name:'Be šansų',  med:'Akrilas ant drobės'},
    en:{name:'No chances', med:'Acrylic on canvas'},
    dim:'80 x 100 cm', year:'2026', price:' ' },
  { bg:'#7F77DD', a1:'#D85A30', a2:'#FAC775', img:'images/vasarosgylis.jpeg',
    medium:'acrylic', series:'landscapes', size:'small', avail:true,
    lt:{name:'Vasaros gylis',      med:'Akrilas ant drobės'},
    en:{name:'Vasaros gylis',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 200' },
  { bg:'#7F77DD', a1:'#D85A30', a2:'#FAC775', img:'images/pavasarisparasepirmas.jpeg',
    medium:'acrylic', series:'landscapes', size:'small', avail:true,
    lt:{name:'Pavasaris parašė pirmas',      med:'Akrilas ant drobės'},
    en:{name:'Pavasaris parašė pirmas',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 200' },
  { bg:'#1D9E75', a1:'#085041', a2:'#5DCAA5', img:'images/laimeskryptis.jpeg',
    medium:'acrylic', series:'landscapes', size:'small', avail:true,
    lt:{name:'Laimės kryptis',      med:'Akrilas ant drobės'},
    en:{name:'Laimės kryptis',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 200' },
  { bg:'#7F77DD', a1:'#D85A30', a2:'#FAC775', img:'images/smaragdodovana.jpeg',
    medium:'acrylic', series:'landscapes', size:'small', avail:true,
    lt:{name:'Smaragdo dovana',      med:'Akrilas ant drobės'},
    en:{name:'Smaragdo dovana',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 200' },
  { bg:'#1D9E75', a1:'#085041', a2:'#5DCAA5', img:'images/surelyyouknow.jpeg',
    medium:'acrylic', series:'still-life', size:'small', avail:true,
    lt:{name:'Tikrai žinai',     med:'Akrilas ant drobės'},
    en:{name:'Surely you know',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 250' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/passage.jpeg',
    medium:'oil', series:'figures',    size:'small', avail:true,
    lt:{name:'Brasta',  med:'Aliejus ant drobės'},
    en:{name:'Passage', med:'Oil on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 250' },
  { bg:'#7F77DD', a1:'#D85A30', a2:'#FAC775', img:'images/youandi.jpeg',
    medium:'acrylic', series:'landscapes', size:'small', avail:true,
    lt:{name:'Aš ir Tu',      med:'Akrilas ant drobės'},
    en:{name:'You and I',     med:'Acrylic on canvas'},
    dim:'60 × 60 cm', year:'2026', price:'€ 200' },
  { bg:'#7F77DD', a1:'#D85A30', a2:'#FAC775', img:'images/islikimas.jpeg',
    medium:'acrylic', series:'landscapes', size:'large', avail:true,
    lt:{name:'Išlikimas',     med:'Acrylic ant drobės'},
    en:{name:'Survival',  med:'Acrylic on canvas'},
    dim:'80 × 100 cm', year:'2024', price:'€ 300' },
  { bg:'#D85A30', a1:'#F0997B', a2:'#712B13', img:'images/fotosesija.jpeg',
    medium:'oil', series:'figures',    size:'large', avail:true,
    lt:{name:'Fotosesija',  med:'Aliejus ant drobės'},
    en:{name:'Photo shoot', med:'Oil on canvas'},
    dim:'100 × 80 cm', year:'2026', price:'€ 300 ' },
  { bg:'#1D9E75', a1:'#085041', a2:'#5DCAA5', img:'images/neviskasok.jpeg',
    medium:'acrylic', series:'still-life', size:'medium', avail:true,
    lt:{name:'Ne, viskas ok',     med:'Akrilas ant drobės'},
    en:{name:"No, everything's fine",       med:'Acrylic on canvas'},
    dim:'55 × 70 cm', year:'2026', price:'€ 500' },
  { bg:'#FAC775', a1:'#EF9F27', a2:'#BA7517', img:'images/svelnumoanatomija.jpeg',
    medium:'acrylic', series:'studies',    size:'small', avail:true,
    lt:{name:'Švelnumo anatomija', med:'Akrilas ant popieriaus'},
    en:{name:'Anatomy of Softness',     med:'Acrylic on paper'},
    dim:'60 × 50 cm', year:'2026', price:'€ 250' },
  { bg:'#F0997B', a1:'#D85A30', a2:'#FAC775', img:'images/heylady.jpeg',
    medium:'oil', series:'studies', size:'medium', avail:false,
    lt:{name:'Good evening, darling!',          med:'Aliejus ant drobės'},
    en:{name:'Labas vakaras, brangioji',             med:'Oil on canvas'},
    dim:'55 × 70 cm', year:'2025', price:'€ 445' },  
];

// ════════════════════════════════════════
//  STRINGS
// ════════════════════════════════════════
const strings = {
  lt: {
    navWorks:'Darbai', navAbout:'Apie', navContact:'Kontaktai',
    eyebrow:'tapytoja · Vilnius', heroTitle:'Atrinkti darbai, 2022–2026',
    filterLabel:'filtrai', fpTitle:'Filtruoti darbus', fpClear:'išvalyti filtrus',
    groups:[
      {key:'medium', label:'technika',     opts:[{k:'charcoal',l:'anglis'}, {k:'oil',l:'aliejus'},{k:'acrylic',l:'akrilas'},{k:'watercolour',l:'akvarelė'}]},
      {key:'series',  label:'serija',       opts:[{k:'landscapes',l:'peizažai'},{k:'figures',l:'figūros'},{k:'still-life',l:'natiurmortas'},{k:'studies',l:'etiudai'}]},
      {key:'size',    label:'dydis',        opts:[{k:'small',l:'mažas'},{k:'medium',l:'vidutinis'},{k:'large',l:'didelis'}]},
      {key:'avail',   label:'prieinamumas', opts:[{k:'true',l:'prieinama'},{k:'false',l:'parduota'}]},
      {key:'year',    label:'metai',        opts:[{k:'2026',l:'2026'}, {k:'2025',l:'2025'}, {k:'2024',l:'2024'},{k:'2023',l:'2023'},{k:'2022',l:'2022'}]},
    ],
    lMed:'technika', lDim:'matmenys', lSize:'dydis', lYear:'metai',
    avail:'Prieinama', sold:'Parduota',
    btn1:'Teirautis dėl šio darbo',
    eqBack:'grįžti', eqPrefix:'Teiravimasis dėl paveikslo',
    cfName:'Jūsų vardas', cfEmail:'El. pašto adresas', cfMsg:'Jūsų žinutė...', cfSend:'Siųsti žinutę',
    noResults:'Nėra atitinkančių darbų.',
    footer:'© 2026 Donata Andriuškevičienė', footerRights:'Visos teisės saugomos',
    dblHint:'dukart spustelėkite norėdami sužinoti daugiau',
    worksLabel:(n)=>`${n} darb${n===1?'as':n<10?'ai':'ų'}`,
    sizeMap:{small:'Mažas',medium:'Vidutinis',large:'Didelis'},
  },
  en: {
    navWorks:'Works', navAbout:'About', navContact:'Contact',
    eyebrow:'painter · Vilnius', heroTitle:'Selected works, 2022–2026',
    filterLabel:'filter', fpTitle:'Filter works', fpClear:'clear all filters',
    groups:[
      {key:'medium', label:'medium',       opts:[{k:'charcoal',l:'charcoal'}, {k:'oil',l:'oil'},{k:'acrylic',l:'acrylic'},{k:'watercolour',l:'watercolour'}]},
      {key:'series',  label:'series',       opts:[{k:'landscapes',l:'landscapes'},{k:'figures',l:'figures'},{k:'still-life',l:'still life'},{k:'studies',l:'studies'}]},
      {key:'size',    label:'size',         opts:[{k:'small',l:'small'},{k:'medium',l:'medium'},{k:'large',l:'large'}]},
      {key:'avail',   label:'availability', opts:[{k:'true',l:'available'},{k:'false',l:'sold'}]},
      {key:'year',    label:'year',         opts:[{k:'2026',l:'2026'}, {k:'2025',l:'2025'}, {k:'2024',l:'2024'},{k:'2023',l:'2023'},{k:'2022',l:'2022'}]},
    ],
    lMed:'medium', lDim:'dimensions', lSize:'size', lYear:'year',
    avail:'Available', sold:'Sold',
    btn1:'Enquire about this work',
    eqBack:'back', eqPrefix:'Enquiry about',
    cfName:'Your name', cfEmail:'Email address', cfMsg:'Your message...', cfSend:'Send message',
    noResults:'No works match this filter.',
    footer:'© 2026 Donata Andriuškevičienė', footerRights:'All rights reserved',
    dblHint:'double-click to open',
    worksLabel:(n)=>`${n} work${n!==1?'s':''}`,
    sizeMap:{small:'Small',medium:'Medium',large:'Large'},
  },
};

// ════════════════════════════════════════
//  STATE
// ════════════════════════════════════════
let lang = localStorage.getItem('lang') || 'lt';
let activeFilters = {};
let currentLb = 0;
let filterOpen = false;
let mobileNavOpen = false;

function s(){ return strings[lang]; }

// ════════════════════════════════════════
//  MOBILE NAV
// ════════════════════════════════════════
function toggleMobileNav(){
  mobileNavOpen = !mobileNavOpen;
  document.getElementById('mobile-nav').classList.toggle('open', mobileNavOpen);
  document.getElementById('hamburger').classList.toggle('open', mobileNavOpen);
}
function closeMobileNav(){
  mobileNavOpen = false;
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ════════════════════════════════════════
//  LANGUAGE — persisted across pages
// ════════════════════════════════════════
function setLang(l){
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  document.getElementById('btn-lt').classList.toggle('active', l==='lt');
  document.getElementById('btn-en').classList.toggle('active', l==='en');
  // update <html lang> for SEO/accessibility
  const st = strings[l];
  const nw = document.getElementById('nav-works');
  const na = document.getElementById('nav-about');
  const nc = document.getElementById('nav-contact');
  if(nw) nw.textContent = st.navWorks;
  if(na) na.textContent = st.navAbout;
  if(nc) nc.textContent = st.navContact;
  const mnw = document.getElementById('mnav-works');
  const mna = document.getElementById('mnav-about');
  const mnc = document.getElementById('mnav-contact');
  if(mnw) mnw.textContent = st.navWorks;
  if(mna) mna.textContent = st.navAbout;
  if(mnc) mnc.textContent = st.navContact;
  document.getElementById('footer-copy').innerHTML =
    `${st.footer} · <span>${st.footerRights}</span>`;
  if(typeof onLangChange === 'function') onLangChange(l);
}

// call on every page load to apply saved language
function initLang(){
  document.getElementById('btn-lt').classList.toggle('active', lang==='lt');
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.documentElement.lang = lang;
  setLang(lang);
}

// ════════════════════════════════════════
//  FILTER HELPERS
// ════════════════════════════════════════
function matchesFilter(p){
  for(const[k,v] of Object.entries(activeFilters)){
    if(k==='avail' && String(p.avail)!==v) return false;
    if(k==='year'  && p.year!==v)          return false;
    if(k!=='avail' && k!=='year' && p[k]!==v) return false;
  }
  return true;
}
function countFor(key,val){
  const test={...activeFilters,[key]:val};
  return paintings.filter(p=>{
    for(const[k,v] of Object.entries(test)){
      if(k==='avail' && String(p.avail)!==v) return false;
      if(k!=='avail' && p[k]!==v)            return false;
    }
    return true;
  }).length;
}
function hasFilters(){ return Object.keys(activeFilters).length > 0; }

// ════════════════════════════════════════
//  PLACEHOLDER ART
// ════════════════════════════════════════
function placeholderHTML(p,idx){
  const sh=[
    `<div style="position:absolute;bottom:0;left:0;right:0;height:38%;background:${p.a1};"></div><div style="position:absolute;top:18%;left:18%;width:30%;height:30%;border-radius:50%;background:${p.a2};opacity:0.75;"></div>`,
    `<div style="position:absolute;top:0;left:0;right:0;height:55%;background:${p.a1};opacity:0.8;"></div><div style="position:absolute;bottom:12%;right:10%;width:18%;height:35%;background:${p.a2};border-radius:1px;"></div>`,
    `<div style="position:absolute;bottom:0;left:0;right:0;height:42%;background:${p.a1};"></div>`,
    `<div style="position:absolute;top:15%;left:15%;right:15%;bottom:15%;border-radius:50%;background:${p.a1};"></div>`,
    `<div style="position:absolute;bottom:0;left:0;width:42%;height:100%;background:${p.a1};opacity:0.55;"></div><div style="position:absolute;top:12%;right:10%;width:20%;height:50%;background:${p.a2};border-radius:1px;"></div>`,
    `<div style="position:absolute;inset:0;background:${p.a1};opacity:0.35;"></div><div style="position:absolute;top:20%;left:20%;width:60%;height:60%;border-radius:50%;background:${p.a2};opacity:0.5;"></div>`,
  ];
  return `<div style="position:absolute;inset:0;background:${p.bg};">${sh[idx%sh.length]}</div>`;
}

// ════════════════════════════════════════
//  GALLERY
// ════════════════════════════════════════
function renderGallery(){
  const g  = document.getElementById('gallery');
  const nr = document.getElementById('no-results');
  if(!g) return;
  const st  = s();
  const any = paintings.some(matchesFilter);
  nr.style.display = any ? 'none' : 'block';
  nr.textContent   = st.noResults;
  g.innerHTML = paintings.map((p,i)=>{
    const hidden = !matchesFilter(p) ? ' hidden' : '';
    // build rich alt text for SEO
    const altLt = `${p.lt.name} — ${p.lt.med}, ${p.dim}, ${p.year}`;
    const altEn = `${p.en.name} — ${p.en.med}, ${p.dim}, ${p.year}`;
    const alt   = lang==='lt' ? altLt : altEn;
    const img   = p.img
      ? `<img src="${p.img}" alt="${alt}" loading="lazy">`
      : `<div style="width:100%;height:260px;position:relative;">${placeholderHTML(p,i)}</div>`;
    const sold  = !p.avail ? `<div class="sold-badge">${st.sold}</div>` : '';
    return `<div class="cell${hidden}" data-idx="${i}" onclick="cellTap(event,${i})">
      <div class="cell-inner">
        <div class="cell-img" style="position:relative;">${img}${sold}</div>
        <div class="cell-overlay"><div class="cell-preview">
          <div class="cell-pname">${p[lang].name}</div>
          <div class="cell-pmeta"><span class="cell-pmed">${p[lang].med}</span><span class="cell-pprice">${p.price}</span></div>
          <div class="cell-phint">${st.dblHint}</div>
        </div></div>
      </div></div>`;
  }).join('');
  renderToolbar();
}


// ════════════════════════════════════════
//  TWO-TAP / CLICK SYSTEM
//  Desktop: single click opens lightbox directly
//  Mobile:  first tap shows overlay preview, second tap opens lightbox
// ════════════════════════════════════════
const cellState = {}; // tracks which cell is in "preview shown" state on mobile

function cellTap(e, i) {
  // detect touch device
  const isTouch = window.matchMedia('(hover: none)').matches;

  if (!isTouch) {
    // desktop: single click opens immediately
    openLb(i);
    return;
  }

  // mobile two-tap logic
  if (cellState[i] === 'preview') {
    // second tap — open lightbox
    openLb(i);
    cellState[i] = null;
  } else {
    // first tap — show preview, hide all others first
    Object.keys(cellState).forEach(k => {
      if (k != i) {
        cellState[k] = null;
        const otherCell = document.querySelector(`.cell[data-idx="${k}"]`);
        if (otherCell) otherCell.classList.remove('touch-active');
      }
    });
    cellState[i] = 'preview';
    // find this cell and add touch-active class to show overlay
    const cell = document.querySelector(`.cell[data-idx="${i}"]`);
    if (cell) cell.classList.add('touch-active');
  }
}

// dismiss preview if user taps outside any cell
document.addEventListener('click', e => {
  if (!e.target.closest('.cell')) {
    Object.keys(cellState).forEach(k => {
      cellState[k] = null;
      const cell = document.querySelector(`.cell[data-idx="${k}"]`);
      if (cell) cell.classList.remove('touch-active');
    });
  }
});


function renderToolbar(){
  const st = s();
  const n  = paintings.filter(matchesFilter).length;
  document.getElementById('work-count').textContent      = st.worksLabel(n);
  document.getElementById('filter-btn-label').textContent= st.filterLabel;
  document.getElementById('filter-btn').classList.toggle('active', hasFilters()||filterOpen);
  const tags = document.getElementById('active-tags');
  if(!hasFilters()){ tags.innerHTML=''; return; }
  tags.innerHTML = Object.entries(activeFilters).map(([k,v])=>{
    const grp = st.groups.find(g=>g.key===k);
    const opt = grp?.opts.find(o=>o.k===v);
    const lbl = opt ? `${grp.label}: ${opt.l}` : v;
    return `<span class="active-tag">${lbl}<span class="active-tag-x" onclick="removeFilter('${k}')"><i class="ti ti-x" style="font-size:10px;"></i></span></span>`;
  }).join('');
}

// ════════════════════════════════════════
//  FILTER PANEL
// ════════════════════════════════════════
function renderFilterPanel(){
  const st = s();
  const fp = document.getElementById('fp-title');
  const fc = document.getElementById('fp-clear');
  if(fp) fp.textContent = st.fpTitle;
  if(fc) fc.textContent = st.fpClear;
  const fb = document.getElementById('fp-body');
  if(!fb) return;
  fb.innerHTML = st.groups.map(grp=>
    `<div class="fp-group"><div class="fp-group-label">${grp.label}</div><div>${
      grp.opts.map(o=>{
        const a = activeFilters[grp.key]===o.k;
        const c = countFor(grp.key,o.k);
        return `<div class="fp-option${a?' active':''}" onclick="toggleFilter('${grp.key}','${o.k}')">
          <span>${o.l}</span>
          <span class="fp-opt-right"><span class="fp-count">${c}</span><i class="ti ti-check fp-check"></i></span>
        </div>`;
      }).join('')
    }</div></div>`
  ).join('');
}
function openFilterPanel(){ filterOpen=true; document.getElementById('filter-panel').classList.add('open'); document.getElementById('fp-overlay').classList.add('open'); document.body.style.overflow='hidden'; renderFilterPanel(); }
function closeFilterPanel(){ filterOpen=false; document.getElementById('filter-panel').classList.remove('open'); document.getElementById('fp-overlay').classList.remove('open'); document.body.style.overflow=''; document.getElementById('filter-btn').classList.toggle('active',hasFilters()); }
function toggleFilter(k,v){ if(activeFilters[k]===v) delete activeFilters[k]; else activeFilters[k]=v; renderFilterPanel(); renderGallery(); }
function removeFilter(k){ delete activeFilters[k]; renderFilterPanel(); renderGallery(); }
function clearFilters(){ activeFilters={}; renderFilterPanel(); renderGallery(); }

// ════════════════════════════════════════
//  MODAL LIGHTBOX
// ════════════════════════════════════════
function openLb(i){
  currentLb=i; closeEnquiry();
  const m=document.getElementById('modal');
  m.classList.add('open');
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>requestAnimationFrame(()=>m.classList.add('visible')));
  renderLb();
}
function closeLb(){
  const m=document.getElementById('modal');
  m.classList.remove('visible');
  setTimeout(()=>{ m.classList.remove('open'); document.body.style.overflow=''; },350);
  closeEnquiry();
}
function handleModalBgClick(e){ if(e.target===document.getElementById('modal')) closeLb(); }
function moveLb(dir){
  const vis=paintings.map((_,i)=>i).filter(i=>matchesFilter(paintings[i]));
  if(!vis.length) return;
  const pos=vis.indexOf(currentLb);
  currentLb=vis[(pos+dir+vis.length)%vis.length];
  closeEnquiry(); zoom.reset(false); renderLb();
}

function renderLb(){
  zoom.reset(false);
  const p=paintings[currentLb]; const st=s();
  document.getElementById('modal-title').textContent   = p[lang].name;
  document.getElementById('mlbl-med').textContent      = st.lMed;
  document.getElementById('mval-med').textContent      = p[lang].med;
  document.getElementById('mlbl-dim').textContent      = st.lDim;
  document.getElementById('mval-dim').textContent      = p.dim;
  document.getElementById('mlbl-size').textContent     = st.lSize;
  document.getElementById('mval-size').textContent     = st.sizeMap[p.size];
  document.getElementById('mlbl-year').textContent     = st.lYear;
  document.getElementById('mval-year').textContent     = p.year;
  document.getElementById('modal-price').textContent   = p.price;
  const av=document.getElementById('modal-avail');
  av.className  = p.avail ? 'modal-avail' : 'modal-sold-lbl';
  av.textContent= p.avail ? st.avail : st.sold;
  const b1=document.getElementById('modal-btn1');
  b1.textContent=st.btn1; b1.classList.toggle('disabled',!p.avail);
  const paint=document.getElementById('modal-painting');
  if(p.img){
    // rich alt text in lightbox too
    const alt = lang==='lt'
      ? `${p.lt.name} — ${p.lt.med}, ${p.dim}, ${p.year}`
      : `${p.en.name} — ${p.en.med}, ${p.dim}, ${p.year}`;
    paint.className='modal-painting';
    paint.innerHTML=`<img src="${p.img}" alt="${alt}" title="Click to zoom · scroll to zoom · drag to pan">`;
    zoom.attach();
  } else {
    paint.className='modal-placeholder';
    paint.innerHTML=placeholderHTML(p,currentLb);
  }
  const visDots=paintings.map((_,i)=>i).filter(i=>matchesFilter(paintings[i]));
  const currentPos = visDots.indexOf(currentLb) + 1;
  const totalVis = visDots.length;
  document.getElementById('modal-dots').innerHTML=
    `<span class="modal-counter">${currentPos} / ${totalVis}</span>`;
}

// keyboard nav
document.addEventListener('keydown',e=>{
  if(!document.getElementById('modal').classList.contains('open')) return;
  if(e.key==='ArrowLeft')  moveLb(-1);
  if(e.key==='ArrowRight') moveLb(1);
  if(e.key==='Escape')     closeLb();
});

// swipe
(()=>{
  let sx=null,sy=null;
  document.addEventListener('touchstart',e=>{ if(e.touches.length!==1)return; sx=e.touches[0].clientX; sy=e.touches[0].clientY; },{passive:true});
  document.addEventListener('touchend',e=>{
    if(sx===null) return;
    const dx=e.changedTouches[0].clientX-sx;
    const dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.5){
      const img=document.querySelector('#modal-painting img');
      if(img && img.classList.contains('is-zoomed')){ sx=null; return; }
      dx<0 ? moveLb(1) : moveLb(-1);
    }
    sx=null; sy=null;
  },{passive:true});
})();

// ════════════════════════════════════════
//  PAN & ZOOM
// ════════════════════════════════════════
const zoom=(()=>{
  let scale=1,tx=0,ty=0,dragging=false,startX,startY,startTx,startTy;
  const MIN=1,MAX=5,STEP=0.4;
  function img(){ return document.querySelector('#modal-painting img'); }
  function stage(){ return document.querySelector('.modal-stage'); }
  function apply(animate){
    const el=img(); if(!el)return;
    el.style.transition=animate?'transform 0.25s ease':'none';
    el.style.transform=`scale(${scale}) translate(${tx}px,${ty}px)`;
    const z=scale>1;
    el.classList.toggle('is-zoomed',z);
    stage()?.classList.toggle('is-zoomed',z);
    el.style.cursor=z?(dragging?'grabbing':'grab'):'zoom-in';
  }
  function clamp(){
    const el=img(); if(!el)return;
    const r=el.getBoundingClientRect();
    const sr=el.closest('.modal-stage').getBoundingClientRect();
    const mx=Math.max(0,(r.width -sr.width) /2/scale);
    const my=Math.max(0,(r.height-sr.height)/2/scale);
    tx=Math.max(-mx,Math.min(mx,tx));
    ty=Math.max(-my,Math.min(my,ty));
  }
  function reset(animate){ scale=1;tx=0;ty=0;apply(animate??true); }
  function zoomTo(ns,animate){ scale=Math.max(MIN,Math.min(MAX,ns)); if(scale===1){tx=0;ty=0;}else clamp(); apply(animate); }
  function onClick(e){ e.stopPropagation(); if(dragging)return; scale>1?reset(true):zoomTo(2.5,true); }
  function onMouseDown(e){
    if(scale<=1)return; e.preventDefault(); dragging=false;
    startX=e.clientX;startY=e.clientY;startTx=tx;startTy=ty;
    const el=img(); if(!el)return;
    el.classList.add('is-panning'); el.style.transition='none';
    function onMove(e){ const dx=(e.clientX-startX)/scale,dy=(e.clientY-startY)/scale; if(Math.abs(dx)>3||Math.abs(dy)>3)dragging=true; tx=startTx+dx;ty=startTy+dy;clamp();apply(false); }
    function onUp(){ el.classList.remove('is-panning'); document.removeEventListener('mousemove',onMove); document.removeEventListener('mouseup',onUp); setTimeout(()=>{dragging=false;},10); }
    document.addEventListener('mousemove',onMove);
    document.addEventListener('mouseup',onUp);
  }
  function onTouchStart(e){
    if(scale<=1||e.touches.length!==1)return; e.stopPropagation();
    startX=e.touches[0].clientX;startY=e.touches[0].clientY;startTx=tx;startTy=ty;
    const el=img(); if(!el)return;
    function onMove(e){ if(e.touches.length!==1)return; e.preventDefault(); const dx=(e.touches[0].clientX-startX)/scale,dy=(e.touches[0].clientY-startY)/scale; tx=startTx+dx;ty=startTy+dy;clamp();apply(false); }
    function onEnd(){ el.removeEventListener('touchmove',onMove); el.removeEventListener('touchend',onEnd); }
    el.addEventListener('touchmove',onMove,{passive:false});
    el.addEventListener('touchend',onEnd);
  }
  function onWheel(e){ e.preventDefault(); zoomTo(scale+(e.deltaY>0?-STEP:STEP),false); }
  function attach(){
    const el=img(); if(!el)return;
    el.addEventListener('click',onClick);
    el.addEventListener('mousedown',onMouseDown);
    el.addEventListener('touchstart',onTouchStart,{passive:true});
    const st=stage();
    if(st) st.addEventListener('wheel',onWheel,{passive:false});
  }
  return{reset,attach};
})();

// ════════════════════════════════════════
//  ENQUIRY
// ════════════════════════════════════════
function openEnquiry(){
  const p=paintings[currentLb]; const st=s();
  const subj=`${st.eqPrefix}: "${p[lang].name}"`;
  document.getElementById('eq-back-label').textContent = st.eqBack;
  document.getElementById('eq-heading').textContent    = `${st.eqPrefix} "${p[lang].name}"`;
  document.getElementById('eq-subject').textContent    = subj;
  document.getElementById('eq-hidden-subject').value   = subj;
  document.getElementById('eq-name').placeholder  = st.cfName;
  document.getElementById('eq-email').placeholder = st.cfEmail;
  document.getElementById('eq-msg').placeholder   = st.cfMsg;
  document.getElementById('eq-send').textContent  = st.cfSend;
  document.getElementById('modal-enquiry').classList.add('open');
}
function closeEnquiry(){ document.getElementById('modal-enquiry').classList.remove('open'); }

function handleEnquirySubmit(e){
  // fill the hidden subject field with the painting name before Formspree receives it
  const p = paintings[currentLb];
  const st = s();
  document.getElementById('eq-hidden-subject').value = `${st.eqPrefix}: "${p[lang].name}"`;
  // let the form submit naturally to Formspree — no e.preventDefault()
}

function handleContactSubmit(e){
  // nothing special needed here — form submits naturally to Formspree
}
