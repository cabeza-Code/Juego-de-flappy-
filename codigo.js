window.addEventListener('DOMContentLoaded',()=>{
  
let caja = document.querySelector('.caja');

let p = document.querySelector('.player');

let pro = {
 x:80,
 xv:0,
 y:0,
 yv:0
}
let tiempo = 0;
let tiempo2 = 0;
let medidas = [200,300,400,500,350,100];

let animate = ()=>{
 this.requestAnimationFrame(animate);
 pro.y += pro.yv;
 pro.x += pro.xv;
 pro.yv += 0.3;
 if(pro.y + 40 + pro.yv > innerHeight) {
    pro.yv += 0;
 }
 p.style.transform = `translatey(${pro.y}px)`+`translatex(${pro.x}px)`;
 
 tiempo++;
 let a = Math.floor(Math.random()*medidas.length);
 if(tiempo % 100 === 0) {
  p.style.border = 'none';
  let n = document.createElement('div');
  caja.appendChild(n);
  n.classList.add('tubos');
  n.style.height = medidas[`${a}`]+'px';
  n.style.backgroundImage = "url(tubo2.png)";
  n.style.backgroundSize = '110% 110%'
  if(tiempo % 300 === 0) {
     n.style.bottom = '0px'
     n.style.height = medidas[`${a}`]+'px'
     n.style.backgroundImage = "url(tubos.png)"
     n.style.backgroundSize = '100% 100%'
     
  }
 }
  
 let t = document.querySelectorAll('.tubos')
 t.forEach((e,i)=>{
  e.style.transform += "translatex(-3px)";
  if(e.getBoundingClientRect().x < -100) {
     e.remove();
  }
 })
 chocar();
 
 tiempo2++;
 let alto = Math.random()*innerHeight;
 if(tiempo2 % 90 === 0) {
 let c = document.createElement('div');
 caja.appendChild(c);
 c.classList.add('disparos');
 c.style.top = `${alto}px`;
 c.style.right = "-500px";
 bloques();
 }
 
  let ca = document.querySelectorAll('.disparos')
 ca.forEach((e,i)=>{
 e.style.transform += "translatex(-6px)";
  if(e.getBoundingClientRect().x < -50) {
     e.remove();
  };
 });
 
 pisar()
 matar();
};//llave animacion

animate();

console.log(this == window);

caja.addEventListener('click',()=>{
 pro.yv = -6; 
})

function chocar() {
let tub = document.querySelectorAll('.tubos')
tub.forEach((e,i)=>{
let x = e.getBoundingClientRect().x;
let y = e.getBoundingClientRect().y;
let an = e.getBoundingClientRect().width;
let al = e.getBoundingClientRect().height;
//console.log(an)
if(pro.x + 60 > x && 
   pro.x < x + 100 && 
   pro.y + 40 > y && 
   pro.y < y + al) {
   e.style.background = 'red';
   pro.yv = -pro.yv
   
} 
})
}


function pisar() {
 let balas = document.querySelectorAll('.disparos');
 balas.forEach((e,i)=>{
let x = e.getBoundingClientRect().x;
let y = e.getBoundingClientRect().y;
let an = e.getBoundingClientRect().width;
let al = e.getBoundingClientRect().height;
if(pro.y + 40 > y && 
   pro.y < y + al && 
   pro.x + 60 > x && 
   pro.x < x + an) {
   p.style.border = 'solid 1px yellow';
   pro.yv = -1;
}
 });
 
}

function bloques() {
 let balas = document.querySelectorAll('.disparos');
 balas.forEach((e,i)=>{
 let b = document.createElement('div');
 e.appendChild(b);
 b.classList.add('bloque')
 });
}

function matar() {
 let b = document.querySelectorAll('.bloque');
 let dis = document.querySelectorAll('.disparos');
 b.forEach((e,i)=>{
 dis.forEach((ee,ii)=>{
 let x = e.getBoundingClientRect().x;
let y = e.getBoundingClientRect().y;
let an = e.getBoundingClientRect().width;
let al = e.getBoundingClientRect().height;
  if(pro.y + 40 > y && 
     pro.y < y + al && 
     pro.x + 60 > x && 
     pro.x < x + an) {
     ee.style.backgroundImage = 'url(ex.png)';
     e.remove()
     setTimeout(()=>{
      ee.remove();
      
     },500)
     
     
  }
 })
 });
}

});//inició 




















