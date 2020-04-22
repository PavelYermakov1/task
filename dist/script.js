!function(t){var e={};function s(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var a=new class{constructor(){this.state={switch:"train",train:[],gameCorrect:[],gameWrong:[],category:null,rotate:"front",counter:0,currentWord:null,game:!1,mainContener:!0,categoryContainer:!1},this.subscriptions=[]}connect(t,e){return this.subscriptions.push({render:t.render.bind(t),deps:e}),t}setState(t){this.state={...this.state,...t};const e=Object.keys(t);this.subscriptions.forEach(t=>{0!==t.deps.length&&t.deps.forEach(s=>{e.includes(s)&&t.render()})})}getState(){return this.state}};const r=document.querySelector(".hamburger-menu>input");const o=new class{buttonSwitch(){switch(a.getState().switch){case"train":a.setState({switch:"play"});break;case"play":a.setState({switch:"train"})}r.checked=!1}};document.querySelector(".switch").addEventListener("mouseup",o.buttonSwitch);const i=document.querySelectorAll(".main-card"),c=document.querySelector(".menu"),n=document.querySelector(".main-container"),d=document.querySelectorAll(".header-item"),l=document.querySelector(".hamburger-menu>input");const m=new class{render(){switch(a.getState().switch){case"train":i.forEach(t=>t.classList.add("green")),c.classList.add("green");break;case"play":i.forEach(t=>t.classList.remove("green")),c.classList.remove("green")}}renderCards(t){const e=document.createDocumentFragment();return t.forEach(t=>{const s=document.createElement("div");s.classList.add("element-container");const r=document.createElement("div");r.classList.add("element");const o=document.createElement("div");o.classList.add("front"),o.style.backgroundImage=`url("${t.image}")`,o.setAttribute("data",""+t.audioSrc);const i=document.createElement("div");i.classList.add("back"),i.style.backgroundImage=`url("${t.image}")`;const c=document.createElement("div");c.classList.add("rotate");const n=document.createElement("div");n.classList.add("card-title"),n.textContent=t.word;const d=document.createElement("div");d.classList.add("card-title"),d.textContent=t.translation,"play"===a.getState().switch?(n.classList.add("none"),d.classList.add("none"),c.classList.add("none"),r.classList.add("card-cover")):"train"===a.getState().switch&&(n.classList.remove("none"),d.classList.remove("none"),c.classList.remove("none"),r.classList.remove("card-cover")),o.append(n),i.append(d),r.append(o,i,c),s.append(r),e.appendChild(s)}),e}categorySelection(t){const{currentTarget:e}=t;n.style.display="none",a.setState({category:""+e.textContent.trim()}),d.forEach(t=>{t.classList.remove("active"),t.textContent===a.getState().category&&t.classList.add("active")}),l.checked=!1}};for(const t of i)t.addEventListener("click",m.categorySelection);var g=a.connect(m,["switch"]);const u=document.querySelectorAll(".header-item"),p=document.querySelector(".main-container"),y=document.querySelector(".hamburger-menu>input");const h=new class{activedMenu(t){const{target:e}=t;u.forEach(t=>{t.classList.remove("active")}),e.classList.toggle("active"),y.checked=!1,p.style.display="none",a.setState({category:""+e.textContent.trim()})}};for(const t of u)t.addEventListener("click",h.activedMenu);var S={setA:[{word:"cry",translation:"плакать",image:"./src/assets/img/action(setA)/cry.jpg",audioSrc:"./src/assets/audio/action(setA)/cry.mp3",category:"Action (set A)"},{word:"dance",translation:"танцевать",image:"./src/assets/img/action(setA)/dance.jpg",audioSrc:"./src/assets/audio/action(setA)/dance.mp3",category:"Action (set A)"},{word:"dive",translation:"нырять",image:"./src/assets/img/action(setA)/dive.jpg",audioSrc:"./src/assets/audio/action(setA)/dive.mp3",category:"Action (set A)"},{word:"draw",translation:"рисовать",image:"./src/assets/img/action(setA)/draw.jpg",audioSrc:"./src/assets/audio/action(setA)/draw.mp3",category:"Action (set A)"},{word:"fish",translation:"ловить рыбу",image:"./src/assets/img/action(setA)/fish.jpg",audioSrc:"./src/assets/audio/action(setA)/fish.mp3",category:"Action (set A)"},{word:"fly",translation:"летать",image:"./src/assets/img/action(setA)/fly.jpg",audioSrc:"./src/assets/audio/action(setA)/fly.mp3",category:"Action (set A)"},{word:"hug",translation:"обнимать",image:"./src/assets/img/action(setA)/hug.jpg",audioSrc:"./src/assets/audio/action(setA)/hug.mp3",category:"Action (set A)"},{word:"jump",translation:"прыгать",image:"./src/assets/img/action(setA)/jump.jpg",audioSrc:"./src/assets/audio/action(setA)/jump.mp3",category:"Action (set A)"}],setB:[{word:"open",translation:"открывать",image:"./src/assets/img/action(setB)/open.jpg",audioSrc:"./src/assets/audio/action(setB)/open.mp3",category:"Action (set B)"},{word:"play",translation:"играть",image:"./src/assets/img/action(setB)/play.jpg",audioSrc:"./src/assets/audio/action(setB)/play.mp3",category:"Action (set B)"},{word:"point",translation:"указывать",image:"./src/assets/img/action(setB)/point.jpg",audioSrc:"./src/assets/audio/action(setB)/point.mp3",category:"Action (set B)"},{word:"ride",translation:"ездить",image:"./src/assets/img/action(setB)/ride.jpg",audioSrc:"./src/assets/audio/action(setB)/ride.mp3",category:"Action (set B)"},{word:"run",translation:"бегать",image:"./src/assets/img/action(setB)/run.jpg",audioSrc:"./src/assets/audio/action(setB)/run.mp3",category:"Action (set B)"},{word:"sing",translation:"петь",image:"./src/assets/img/action(setB)/sing.jpg",audioSrc:"./src/assets/audio/action(setB)/sing.mp3",category:"Action (set B)"},{word:"skip",translation:"пропускать, прыгать",image:"./src/assets/img/action(setB)/skip.jpg",audioSrc:"./src/assets/audio/action(setB)/skip.mp3",category:"Action (set B)"},{word:"swim",translation:"плавать",image:"./src/assets/img/action(setB)/swim.jpg",audioSrc:"./src/assets/audio/action(setB)/swim.mp3",category:"Action (set B)"}],setC:[{word:"argue",translation:"спорить",image:"./src/assets/img/action(setC)/argued.jpg",audioSrc:"./src/assets/audio/action(setC)/argue.mp3",category:"Action (set C)"},{word:"build",translation:"строить",image:"./src/assets/img/action(setC)/build.jpg",audioSrc:"./src/assets/audio/action(setC)/build.mp3",category:"Action (set C)"},{word:"carry",translation:"нести",image:"./src/assets/img/action(setC)/carry.jpg",audioSrc:"./src/assets/audio/action(setC)/carry.mp3",category:"Action (set C)"},{word:"catch",translation:"ловить",image:"./src/assets/img/action(setC)/catch.jpg",audioSrc:"./src/assets/audio/action(setC)/catch.mp3",category:"Action (set C)"},{word:"drive",translation:"водить машину",image:"./src/assets/img/action(setC)/drive.jpg",audioSrc:"./src/assets/audio/action(setC)/drive.mp3",category:"Action (set C)"},{word:"drop",translation:"падать",image:"./src/assets/img/action(setC)/drop.jpg",audioSrc:"./src/assets/audio/action(setC)/drop.mp3",category:"Action (set C)"},{word:"push",translation:"толкать",image:"./src/assets/img/action(setC)/push.jpg",audioSrc:"./src/assets/audio/action(setC)/push.mp3",category:"Action (set C)"},{word:"pull",translation:"тянуть",image:"./src/assets/img/action(setC)/pull.jpg",audioSrc:"./src/assets/audio/action(setC)/pull.mp3",category:"Action (set C)"}],adjective:[{word:"big",translation:"большой",image:"./src/assets/img/Adjective/big.jpg",audioSrc:"./src/assets/audio/Adjective/big.mp3",category:"Adjective"},{word:"small",translation:"маленький",image:"./src/assets/img/Adjective/small.jpg",audioSrc:"./src/assets/audio/Adjective/small.mp3",category:"Adjective"},{word:"fast",translation:"быстрый",image:"./src/assets/img/Adjective/fast.jpg",audioSrc:"./src/assets/audio/Adjective/fast.mp3",category:"Adjective"},{word:"slow",translation:"медленный",image:"./src/assets/img/Adjective/slow.jpg",audioSrc:"./src/assets/audio/Adjective/slow.mp3",category:"Adjective"},{word:"friendly",translation:"дружелюбный",image:"./src/assets/img/Adjective/friendly.jpg",audioSrc:"./src/assets/audio/Adjective/friendly.mp3",category:"Adjective"},{word:"unfriendly",translation:"недружелюбный",image:"./src/assets/img/Adjective/unfriendly.jpg",audioSrc:"./src/assets/audio/Adjective/unfriendly.mp3",category:"Adjective"},{word:"young",translation:"молодой",image:"./src/assets/img/Adjective/young.jpg",audioSrc:"./src/assets/audio/Adjective/young.mp3",category:"Adjective"},{word:"old",translation:"старый",image:"./src/assets/img/Adjective/old.jpg",audioSrc:"./src/assets/audio/Adjective/old.mp3",category:"Adjective"}],setD:[{word:"cat",translation:"кот",image:"./src/assets/img/Animal(setA)/cat.jpg",audioSrc:"./src/assets/audio/Animal(setA)/cat.mp3",category:"Animal (set A)"},{word:"chick",translation:"цыплёнок",image:"./src/assets/img/Animal(setA)/chick.jpg",audioSrc:"./src/assets/audio/Animal(setA)/chick.mp3",category:"Animal (set A)"},{word:"chicken",translation:"курица",image:"./src/assets/img/Animal(setA)/chicken.jpg",audioSrc:"./src/assets/audio/Animal(setA)/chicken.mp3",category:"Animal (set A)"},{word:"dog",translation:"собака",image:"./src/assets/img/Animal(setA)/dog.jpg",audioSrc:"./src/assets/audio/Animal(setA)/dog.mp3",category:"Animal (set A)"},{word:"horse",translation:"лошадь",image:"./src/assets/img/Animal(setA)/horse.jpg",audioSrc:"./src/assets/audio/Animal(setA)/horse.mp3",category:"Animal (set A)"},{word:"pig",translation:"свинья",image:"./src/assets/img/Animal(setA)/pig.jpg",audioSrc:"./src/assets/audio/Animal(setA)/pig.mp3",category:"Animal (set A)"},{word:"rabbit",translation:"кролик",image:"./src/assets/img/Animal(setA)/rabbit.jpg",audioSrc:"./src/assets/audio/Animal(setA)/rabbit.mp3",category:"Animal (set A)"},{word:"sheep",translation:"овца",image:"./src/assets/img/Animal(setA)/sheep.jpg",audioSrc:"./src/assets/audio/Animal(setA)/sheep.mp3",category:"Animal (set A)"}],setI:[{word:"bird",translation:"птица",image:"./src/assets/img/Animal(setB)/bird.jpg",audioSrc:"./src/assets/audio/Animal(setB)/bird.mp3",category:"Animal (set B)"},{word:"fish",translation:"рыба",image:"./src/assets/img/Animal(setB)/fish1.jpg",audioSrc:"./src/assets/audio/Animal(setB)/fish.mp3",category:"Animal (set B)"},{word:"frog",translation:"жаба",image:"./src/assets/img/Animal(setB)/frog.jpg",audioSrc:"./src/assets/audio/Animal(setB)/frog.mp3",category:"Animal (set B)"},{word:"giraffe",translation:"жираф",image:"./src/assets/img/Animal(setB)/giraffe.jpg",audioSrc:"./src/assets/audio/Animal(setB)/giraffe.mp3",category:"Animal (set B)"},{word:"lion",translation:"лев",image:"./src/assets/img/Animal(setB)/lion.jpg",audioSrc:"./src/assets/audio/Animal(setB)/lion.mp3",category:"Animal (set B)"},{word:"mouse",translation:"мышь",image:"./src/assets/img/Animal(setB)/mouse.jpg",audioSrc:"./src/assets/audio/Animal(setB)/mouse.mp3",category:"Animal (set B)"},{word:"turtle",translation:"черепаха",image:"./src/assets/img/Animal(setB)/turtle.jpg",audioSrc:"./src/assets/audio/Animal(setB)/turtle.mp3",category:"Animal (set B)"},{word:"dolphin",translation:"дельфин",image:"./src/assets/img/Animal(setB)/dolphin.jpg",audioSrc:"./src/assets/audio/Animal(setB)/dolphin.mp3",category:"Animal (set B)"}],clothes:[{word:"skirt",translation:"юбка",image:"./src/assets/img/Clothes/skirt.jpg",audioSrc:"./src/assets/audio/Clothes/skirt.mp3",category:"Clothes"},{word:"pants",translation:"брюки",image:"./src/assets/img/Clothes/pants.jpg",audioSrc:"./src/assets/audio/Clothes/pants.mp3",category:"Clothes"},{word:"blouse",translation:"блузка",image:"./src/assets/img/Clothes/blouse.jpg",audioSrc:"./src/assets/audio/Clothes/blouse.mp3",category:"Clothes"},{word:"dress",translation:"платье",image:"./src/assets/img/Clothes/dress.jpg",audioSrc:"./src/assets/audio/Clothes/dress.mp3",category:"Clothes"},{word:"boot",translation:"ботинок",image:"./src/assets/img/Clothes/boot.jpg",audioSrc:"./src/assets/audio/Clothes/boot.mp3",category:"Clothes"},{word:"shirt",translation:"рубашка",image:"./src/assets/img/Clothes/shirt.jpg",audioSrc:"./src/assets/audio/Clothes/shirt.mp3",category:"Clothes"},{word:"coat",translation:"пальто",image:"./src/assets/img/Clothes/coat.jpg",audioSrc:"./src/assets/audio/Clothes/coat.mp3",category:"Clothes"},{word:"shoe",translation:"туфли",image:"./src/assets/img/Clothes/shoe.jpg",audioSrc:"./src/assets/audio/Clothes/shoe.mp3",category:"Clothes"}],emotion:[{word:"sad",translation:"грустный",image:"./src/assets/img/Emotion/sad.jpg",audioSrc:"./src/assets/audio/Emotion/sad.mp3",category:"Emotion"},{word:"angry",translation:"сердитый",image:"./src/assets/img/Emotion/angry.jpg",audioSrc:"./src/assets/audio/Emotion/angry.mp3",category:"Emotion"},{word:"happy",translation:"счастливый",image:"./src/assets/img/Emotion/happy.jpg",audioSrc:"./src/assets/audio/Emotion/happy.mp3",category:"Emotion"},{word:"tired",translation:"уставший",image:"./src/assets/img/Emotion/tired.jpg",audioSrc:"./src/assets/audio/Emotion/tired.mp3",category:"Emotion"},{word:"surprised",translation:"удивлённый",image:"./src/assets/img/Emotion/surprised.jpg",audioSrc:"./src/assets/audio/Emotion/surprised.mp3",category:"Emotion"},{word:"scared",translation:"испуганный",image:"./src/assets/img/Emotion/scared.jpg",audioSrc:"./src/assets/audio/Emotion/scared.mp3",category:"Emotion"},{word:"smile",translation:"улыбка",image:"./src/assets/img/Emotion/smile.jpg",audioSrc:"./src/assets/audio/Emotion/smile.mp3",category:"Emotion"},{word:"laugh",translation:"смех",image:"./src/assets/img/Emotion/laugh.jpg",audioSrc:"./src/assets/audio/Emotion/laugh.mp3",category:"Emotion"}]};var A=new class{play(){if("play"===a.getState().switch&&null!=a.getState().category){const t=[];let e=0;const s=document.querySelector(".btn"),r=document.querySelectorAll(".front"),o=document.querySelector(".rating");r.forEach(e=>t.push(e)),t.sort(()=>.5-Math.random());const i=t.pop().getAttribute("data");a.setState({currentWord:i}),s.addEventListener("click",()=>{a.setState({game:!0}),s.classList.add("repeat"),s.textContent="Repeat",o.classList.remove("none"),this.audioPlay(a.getState().currentWord)});for(const s of r)s.addEventListener("click",s=>{if(a.getState().game){const{target:r}=s;if(r.getAttribute("data")===a.getState().currentWord){a.setState({counter:0}),a.getState().gameCorrect.push(r.firstChild.textContent),localStorage.setItem("gameCorrect",JSON.stringify(a.getState().gameCorrect)),r.classList.add("inactive"),this.audioPlay("./src/assets/audio/success.mp3");const e=document.createElement("div");e.style.backgroundImage='url("./src/assets/img/star-win.svg")',e.classList.add("star-succes"),o.append(e),0===t.length?a.setState({currentWord:!1}):a.setState({currentWord:t.pop().getAttribute("data")}),setTimeout(this.audioPlay,1500,a.getState().currentWord)}else if(!r.classList.contains("inactive")){this.audioPlay("./src/assets/audio/error.mp3"),a.getState().gameWrong.push(r.firstChild.textContent),localStorage.setItem("gameWrong",JSON.stringify(a.getState().gameWrong));const t=document.createElement("div");t.style.backgroundImage='url("./src/assets/img/star.svg")',t.classList.add("star-error"),o.append(t),a.setState({counter:0}),e+=1,a.setState({counter:e})}a.getState().currentWord||(0===a.getState().counter?(a.setState({counter:0}),this.succedPlay(),setTimeout(this.backPlay,7e3)):(a.setState({counter:0}),this.failurePlay(a.getState().counter),setTimeout(this.backPlay,7e3)))}})}}audioPlay(t){new Audio(""+t).play()}succedPlay(){const t=document.querySelector(".rating"),e=document.createElement("div"),s=document.querySelectorAll(".element-container"),a=document.querySelectorAll(".star-succes"),r=document.querySelectorAll(".star-error");e.classList.add("succes-image"),e.style.backgroundImage='url("./src/assets/img/success.jpg")',e.textContent="WIN !!!",t.append(e),s.forEach(t=>{t.style.display="none"}),a.forEach(t=>{t.style.display="none"}),r.forEach(t=>{t.style.display="none"}),t.style.justifyContent="center",this.audioPlay("./src/assets/audio/gta.mp3")}failurePlay(t){const e=document.querySelector(".rating"),s=document.createElement("div"),a=document.querySelectorAll(".element-container"),r=document.querySelectorAll(".star-succes"),o=document.querySelectorAll(".star-error");s.classList.add("succes-image"),s.style.backgroundImage='url("./src/assets/img/failure.jpg")',s.textContent=t+" Errors",e.append(s),a.forEach(t=>{t.style.display="none"}),r.forEach(t=>{t.style.display="none"}),o.forEach(t=>{t.style.display="none"}),e.style.justifyContent="center",this.audioPlay("./src/assets/audio/dun.mp3")}backPlay(){const t=document.querySelector(".main-container"),e=document.querySelector(".category-container");a.setState({game:!1}),a.setState({category:"Main Page"}),e.style.display="none",t.style.display="flex"}};const C=document.querySelector(".main-container");const f=new class{render(){const t=document.querySelector(".category-container"),e=document.querySelector(".statistics-container");if(null!==a.getState().category&&"Statistics"!==a.getState().category){t&&t.remove(),e&&e.remove(),C.insertAdjacentHTML("afterend",'<div class="category-container"></div>');const s=document.createElement("div");s.classList.add("rating"),s.classList.add("none");const r=document.querySelector(".category-container");switch(r.append(s),a.getState().category){case"Main Page":r.style.display="none",C.style.display="flex";break;case"Action (set A)":r.append(g.renderCards(S.setA)),this.audioPlay(S.setA);break;case"Action (set B)":r.append(g.renderCards(S.setB)),this.audioPlay(S.setB);break;case"Action (set C)":r.append(g.renderCards(S.setC)),this.audioPlay(S.setC);break;case"Adjective":r.append(g.renderCards(S.adjective)),this.audioPlay(S.adjective);break;case"Animal (set A)":r.append(g.renderCards(S.setD)),this.audioPlay(S.setD);break;case"Animal (set B)":r.append(g.renderCards(S.setI)),this.audioPlay(S.setI);break;case"Clothes":r.append(g.renderCards(S.clothes)),this.audioPlay(S.clothes);break;case"Emotion":r.append(g.renderCards(S.emotion)),this.audioPlay(S.emotion)}const o=document.createElement("div");o.classList.add("btns");const i=document.createElement("button");i.classList.add("btn"),i.textContent="Start game","play"===a.getState().switch?i.classList.remove("none"):"train"===a.getState().switch&&i.classList.add("none"),o.append(i),r.append(o),this.rotate(),A.play()}}rotate(){const t=document.querySelectorAll(".rotate");for(const e of t){e.addEventListener("click",()=>{a.setState({rotate:"back"}),e.parentElement.classList.add("translate")}),e.parentElement.addEventListener("mouseleave",()=>{"back"===a.getState().rotate&&(e.parentElement.classList.remove("translate"),a.setState({rotate:"front"}))})}}audioPlay(t){if("train"===a.getState().switch){const e=document.querySelectorAll(".element");for(const s of e)s.addEventListener("click",e=>{const{target:s}=e;"rotate"!==s.className&&(a.getState().train.push(s.firstChild.textContent),localStorage.setItem("train",JSON.stringify(a.getState().train)),t.forEach(t=>{if(t.word===s.firstChild.textContent){new Audio(""+t.audioSrc).play()}}))})}}};a.connect(f,["category","switch"]);const w=document.querySelector(".main-container");const j=new class{render(){const t=document.querySelector(".statistics-container"),e=document.querySelector(".category-container");if("Statistics"===a.getState().category){null!==JSON.parse(localStorage.getItem("train"))?a.setState({train:JSON.parse(localStorage.getItem("train"))}):a.setState({train:[]}),null!==JSON.parse(localStorage.getItem("gameCorrect"))?a.setState({gameCorrect:JSON.parse(localStorage.getItem("gameCorrect"))}):a.setState({gameCorrect:[]}),null!==JSON.parse(localStorage.getItem("gameWrong"))?a.setState({gameWrong:JSON.parse(localStorage.getItem("gameWrong"))}):a.setState({gameWrong:[]}),t&&t.remove(),e&&e.remove(),w.insertAdjacentHTML("afterend",'<div class="statistics-container"></div>');const s=document.createElement("div");s.classList.add("statistics-button-container");const r=document.createElement("button");r.classList.add("statistics-button"),r.classList.add("statistics-button-repeat"),r.textContent="Repeat difficult words";const o=document.createElement("button");o.classList.add("statistics-button"),o.classList.add("statistics-button-clear"),o.textContent="Reset statistics",s.append(r,o);const i=document.createElement("div");i.classList.add("table-container");const c=document.createElement("table");c.classList.add("statistics-table");const n=document.createElement("thead");n.classList.add("statistics-table-head");const d=document.createElement("tr"),l=document.createElement("th");l.classList.add("statistics-table-head-cell"),l.textContent="word";const m=document.createElement("th");m.classList.add("statistics-table-head-cell"),m.textContent="translation";const g=document.createElement("th");g.classList.add("statistics-table-head-cell"),g.textContent="category";const u=document.createElement("th");u.classList.add("statistics-table-head-cell"),u.textContent="sounded on train";const p=document.createElement("th");p.classList.add("statistics-table-head-cell"),p.textContent="correct answer";const y=document.createElement("th");y.classList.add("statistics-table-head-cell"),y.textContent="wrong answer";const h=document.createElement("th");h.classList.add("statistics-table-head-cell"),h.textContent="persent of wrong, %",d.append(l,m,g,u,p,y,h),n.append(d);const A=document.createElement("tbody");A.append(this.createWord(S)),c.append(n,A),i.append(c),document.querySelector(".statistics-container").append(s,i),this.clearStatistics()}}createWord(){const{setA:t,setB:e,setC:s,adjective:a,setD:r,setI:o,clothes:i,emotion:c}=S,n=document.createDocumentFragment();return t.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),e.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),s.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),a.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),r.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),o.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),i.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),c.forEach(t=>{n.appendChild(this.helperCreateWord(t))}),n}helperCreateWord(t){const e=document.createElement("tr"),s=document.createElement("td");s.classList.add("statistics-table-cell"),s.textContent=""+t.word;const r=document.createElement("td");r.classList.add("statistics-table-cell"),r.textContent=""+t.translation;const o=document.createElement("td");o.classList.add("statistics-table-cell"),o.textContent=""+t.category;const i=document.createElement("td");i.classList.add("statistics-table-cell"),i.textContent=this.helperStatistics(a.getState().train,t.word);const c=document.createElement("td");c.classList.add("statistics-table-cell"),c.textContent=this.helperStatistics(a.getState().gameCorrect,t.word);const n=document.createElement("td");n.classList.add("statistics-table-cell"),n.textContent=this.helperStatistics(a.getState().gameWrong,t.word);const d=document.createElement("td");return d.classList.add("statistics-table-cell"),d.textContent=this.helperPersentStatistics(this.helperStatistics(a.getState().gameCorrect,t.word),this.helperStatistics(a.getState().gameWrong,t.word)),e.append(s,r,o,i,c,n,d),e}helperStatistics(t,e){return t.reduce((t,s)=>s===e?++t:t,0)}helperPersentStatistics(t,e){if(!t||!e)return 0;const s=t/(t+e)*100;return Math.round(100-s)}clearStatistics(){document.querySelector(".statistics-button-clear").addEventListener("click",()=>{localStorage.clear(),this.render()})}};a.connect(j,["category"])}]);
//# sourceMappingURL=script.js.map