// Set this to the studio's real LinkedIn profile URL when available.
const config = { linkedinUrl: 'https://www.linkedin.com/in/sai-rishi-kesava-rao' };
const projects = [
 {name:'AABCO Engineering',full:'AABCO Engineering (M) Sdn. Bhd.',category:'Corporate Website / Engineering / Web Development',description:'A modern corporate website developed for a Malaysian engineering company, presenting its capabilities, technical services, and industry expertise through a structured and professional digital experience.',features:['Responsive corporate website','Custom navigation and dropdown menus','Aerospace and engineering service pages','Interactive animations','Product and service presentations','Contact interface','Custom domain deployment'],url:'https://aabco.my',link:'Visit live website',theme:'engineering',mark:'AABCO',caption:'ENGINEERING / DIGITAL PRESENCE'},
 {name:'Aiyra Tots',full:'Aiyra Tots',category:'E-Commerce / Fashion / Custom Web Development',description:'A modern online shopping experience for a children’s traditional clothing brand, designed with an elegant storefront and intuitive product browsing experience.',features:['Responsive e-commerce storefront','Product categories','Product size selection','Size-specific stock management','Shopping cart','WhatsApp-based checkout','Custom product management interface'],theme:'fashion',mark:'Aiyra Tots',caption:'LITTLE TRADITIONS. DIGITAL POSSIBILITIES.'},
 {name:'Orange Bridal BCH',full:'Orange Bridal BCH',category:'Bridal / Wedding Services / Business Website',description:'A considered digital presence for a bridal and wedding services business in Rawang, bringing its services, gallery and enquiry journey together in one welcoming experience.',features:['Wedding services presentation','Gallery and visit sections','WhatsApp enquiry links','Mobile navigation'],url:'https://sarishi10.github.io/orangebridal/',link:'Visit live website',theme:'orange-bridal',mark:'Orange Bridal',caption:'BRIDAL & WEDDING SERVICES'},
 {name:'Sandiego Wedding',full:'Sandiego Wedding',category:'Bridal / Photography / Business Website',description:'An elegant website for a Kuala Lumpur bridal and wedding company, introducing its bridal collections, wedding packages and photography experience.',features:['Dedicated wedding package pages','Bridal collection pages','Experience and contact pages','English, Chinese and Malay language controls','WhatsApp enquiry links','Mobile navigation'],url:'https://sarishi10.github.io/sandiegobridal/',link:'Visit live website',theme:'sandiego',mark:'Sandiego',caption:'BRIDAL · PHOTOGRAPHY · WEDDING'}
];
function projectCard(p,i){return `<article class="project reveal ${i%2?'reverse':''}"><div class="project-preview ${p.theme}"><div class="preview-top"><span>SRWEBDEVS / PROJECT 0${i+1}</span><span>↗</span></div><div class="preview-geometry" aria-hidden="true"></div><div class="preview-wordmark">${p.mark}<small>${p.caption}</small></div><div class="preview-bottom"><span>PROJECT IDENTITY FRAME</span><span>Screenshot coming soon</span></div></div><div class="project-copy"><span class="micro">SELECTED WORK / 0${i+1}</span><h3>${p.name}</h3><div class="project-category">${p.category}</div><p>${p.description}</p><details><summary>Explore project details <span>+</span></summary><div class="detail-content"><h4>${p.full}</h4><ul>${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>${p.note?`<p>${p.note}</p>`:''}<small>Visual above is a labeled identity placeholder, not a screenshot of the website.</small></div></details>${p.url?`<a class="project-link" href="${p.url}" target="_blank" rel="noopener noreferrer">${p.link} <span>↗</span></a>`:'<span class="project-status">Live link not yet available</span>'}</div></article>`;}
document.querySelector('#projects').innerHTML=projects.map(projectCard).join('');
const services=[['▣','Corporate Websites','Professional websites that communicate credibility and help businesses establish a strong online presence.'],['◈','E-Commerce Development','Custom online storefronts with intuitive shopping experiences and product management solutions.'],['⌘','Custom Web Applications','Purpose-built digital platforms designed around specific business workflows.'],['↗','Website Maintenance & Deployment','Website updates, hosting setup, domain configuration, performance improvements, and ongoing support.']];
document.querySelector('#service-grid').innerHTML=services.map((s,i)=>`<a class="service-card reveal" href="#contact"><div class="service-top"><span aria-hidden="true">${s[0]}</span><small>0${i+1}</small></div><h3>${s[1]}</h3><p>${s[2]}</p><span class="service-arrow" aria-hidden="true">↗</span></a>`).join('');
const steps=[['Discover','Understand your business, objectives, and requirements.'],['Design','Create a modern visual direction and intuitive user experience.'],['Develop','Build a responsive, functional, and performance-focused website.'],['Deploy','Test, refine, and launch your digital experience.']];
document.querySelector('#process-grid').innerHTML=steps.map((s,i)=>`<div class="process-step reveal"><div><span>0${i+1}</span><span aria-hidden="true">${i===3?'✓':'→'}</span></div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
const toggle=document.querySelector('#menu-toggle'),nav=document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();if(nav.contains(document.activeElement))toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-shell'))closeMenu();});
document.querySelector('#project-form').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const message=`Hi SRWebDevs! I'm ${f.get('name')}.\n\nI'm interested in: ${f.get('type')}.\n\nProject details: ${f.get('idea')}`;window.location.assign(`https://wa.me/60178781305?text=${encodeURIComponent(message)}`);});
if(config.linkedinUrl){document.querySelectorAll('.linkedin,.footer-linkedin').forEach(el=>{const a=document.createElement('a');a.className=el.className;a.textContent='Connect on LinkedIn ↗';a.href=config.linkedinUrl;a.target='_blank';a.rel='noopener noreferrer';el.replaceWith(a);});document.querySelector('.linkedin-note').remove();}
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>{if(!reduced)el.classList.add('will-reveal');observer.observe(el);});}

if(!reduced&&matchMedia('(hover:hover) and (pointer:fine)').matches){const art=document.querySelector('.hero-art');art.addEventListener('pointermove',e=>{const b=art.getBoundingClientRect();art.style.setProperty('--mx',`${(e.clientX-b.left-b.width/2)*.035}px`);art.style.setProperty('--my',`${(e.clientY-b.top-b.height/2)*.035}px`);});art.addEventListener('pointerleave',()=>{art.style.setProperty('--mx','0px');art.style.setProperty('--my','0px');});document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const b=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-b.left-b.width/2)*.04}px,${(e.clientY-b.top-b.height/2)*.08}px)`;});el.addEventListener('pointerleave',()=>el.style.transform='');});}

// Position-based navigation works for sections of any height.
const navSections = [...document.querySelectorAll('main section[id]')];
let navLockUntil = 0, navFrame = 0;
function setActiveSection(id) {
 nav.querySelectorAll('a').forEach(a => {
  const active = a.hash === `#${id}`;
  a.classList.toggle('active', active);
  if (active) a.setAttribute('aria-current', 'location');
  else a.removeAttribute('aria-current');
 });
}
function sectionAtPosition(sections, marker) {
 let id = sections[0].id;
 for (const section of sections) { if (section.top <= marker) id = section.id; }
 return id;
}
function updateActiveSection() {
 navFrame = 0;
 if (performance.now() < navLockUntil) return;
 const marker = document.querySelector('.nav-shell').getBoundingClientRect().bottom + 70;
 setActiveSection(sectionAtPosition(navSections.map(s => ({id:s.id,top:s.getBoundingClientRect().top})), marker));
}
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {
 const id = a.hash.slice(1);
 if (!navSections.some(s => s.id === id)) return;
 setActiveSection(id);
 navLockUntil = performance.now() + (reduced ? 0 : 1100);
 setTimeout(updateActiveSection, 1150);
}));
window.addEventListener('scroll', () => {if (!navFrame) navFrame = requestAnimationFrame(updateActiveSection);}, {passive:true});
window.addEventListener('resize', updateActiveSection);
window.addEventListener('hashchange', () => {if (navSections.some(s => `#${s.id}` === location.hash)) setActiveSection(location.hash.slice(1));});
updateActiveSection();
