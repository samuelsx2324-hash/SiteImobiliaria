
const header=document.querySelector('.header');
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>20));
menuBtn?.addEventListener('click',()=>navLinks?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));

document.querySelectorAll('.ba-slider').forEach(slider=>{
  const input=slider.querySelector('.ba-range');
  const update=()=>slider.style.setProperty('--position',input.value+'%');
  input.addEventListener('input',update); update();
});

const recommendations={
  '4':['Plano Destaque','R$ 397 por imóvel','Boa opção para até quatro imóveis, com fotos aprimoradas, vídeo vertical e capa.'],
  '10':['Plano Imobiliária','A partir de R$ 1.490/mês','O plano mensal tende a entregar melhor custo por imóvel, identidade visual e atendimento prioritário.'],
  '20':['Plano Imobiliária personalizado','Solicite uma proposta','Para 11 a 20 imóveis, montamos uma franquia mensal com volume e SLA definidos.'],
  '21':['Operação white label','Proposta sob medida','Para mais de 20 imóveis, recomendamos produção em volume com fluxo, calendário e entrega white label.']
};
document.querySelectorAll('.calc-option').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.calc-option').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const r=recommendations[btn.dataset.qty];
  const target=document.querySelector('#calc-result');
  if(target) target.innerHTML=`<span class="muted">Plano recomendado</span><h3>${r[0]}</h3><b>${r[1]}</b><p>${r[2]}</p>`;
}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const filters=document.querySelectorAll('.filter-btn');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  document.querySelectorAll('[data-category]').forEach(card=>card.classList.toggle('hidden-project',f!=='todos'&&!card.dataset.category.split(' ').includes(f)));
}));

const showcaseMeta={
  reel:{title:'Reel vertical para anúncios e redes',text:'Vídeo vertical com movimento, destaque de ambientes, textos e visual premium para Instagram, TikTok e WhatsApp.',img:'/assets/images/reels.webp'},
  tour:{title:'Apresentação cinematográfica do imóvel',text:'Vídeo horizontal com narrativa mais ampla para site, landing pages, apresentação comercial e YouTube.',img:'/assets/images/hero.webp'},
  kit:{title:'Sistema de peças para o anúncio',text:'Capa, carrossel, story e peças de apoio para transformar um imóvel em uma campanha visual completa.',img:'/assets/images/anuncio-premium.webp'}
};
const showcaseTabs=document.querySelectorAll('.showcase-tab');
const showcaseFrames=document.querySelectorAll('.screen-frame');
let showcaseTimer;
function activateShowcase(key){
  showcaseTabs.forEach(tab=>tab.classList.toggle('active',tab.dataset.showcase===key));
  showcaseFrames.forEach(frame=>frame.classList.toggle('active',frame.dataset.screen===key));
}
showcaseTabs.forEach(tab=>tab.addEventListener('click',()=>{activateShowcase(tab.dataset.showcase); resetShowcaseTimer();}));
function cycleShowcase(){
  if(!showcaseTabs.length) return;
  const keys=[...showcaseTabs].map(tab=>tab.dataset.showcase);
  const active=[...showcaseTabs].find(tab=>tab.classList.contains('active'))?.dataset.showcase||keys[0];
  const idx=(keys.indexOf(active)+1)%keys.length;
  activateShowcase(keys[idx]);
}
function resetShowcaseTimer(){
  clearInterval(showcaseTimer);
  if(showcaseTabs.length) showcaseTimer=setInterval(cycleShowcase,4500);
}
resetShowcaseTimer();

const showcaseModal=document.querySelector('#showcase-modal');
const modalImg=document.querySelector('#showcase-modal-image');
const modalTitle=document.querySelector('#showcase-modal-title');
const modalText=document.querySelector('#showcase-modal-text');
function openShowcaseModal(key){
  const data=showcaseMeta[key]||showcaseMeta.reel;
  if(modalImg) modalImg.src=data.img;
  if(modalTitle) modalTitle.textContent=data.title;
  if(modalText) modalText.textContent=data.text;
  if(showcaseModal){showcaseModal.hidden=false; document.body.style.overflow='hidden';}
}
function closeShowcaseModal(){
  if(showcaseModal){showcaseModal.hidden=true; document.body.style.overflow='';}
}
document.querySelectorAll('[data-open-showcase]').forEach(btn=>btn.addEventListener('click',()=>openShowcaseModal(btn.dataset.openShowcase)));
document.querySelectorAll('[data-close-showcase]').forEach(btn=>btn.addEventListener('click',closeShowcaseModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeShowcaseModal();});
