!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire6149;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire6149=o);var a,i=o("bpxeT"),s=o("8nrFW"),u=o("2TvXO"),c=o("l5bVx"),l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,g=m||h||Function("return this")(),b=Object.prototype.toString,y=Math.max,w=Math.min,x=function(){return g.Date.now()};function L(t){var n=void 0===t?"undefined":e(c)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(L(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=L(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var r=d.test(t);return r||p.test(t)?v(t.slice(2),r?2:8):f.test(t)?NaN:+t}a=function(e,t,n){var r,o,a,i,s,u,c=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function v(e){return c=e,s=setTimeout(h,t),l?p(e):i}function m(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-c>=a}function h(){var e=x();if(m(e))return g(e);s=setTimeout(h,function(e){var n=t-(e-u);return f?w(n,a-(e-c)):n}(e))}function g(e){return s=void 0,d&&r?p(e):(r=o=void 0,i)}function b(){var e=x(),n=m(e);if(r=arguments,o=this,u=e,n){if(void 0===s)return v(u);if(f)return s=setTimeout(h,t),p(u)}return void 0===s&&(s=setTimeout(h,t)),i}return t=T(t)||0,L(n)&&(l=!!n.leading,a=(f="maxWait"in n)?y(T(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=o=s=void 0},b.flush=function(){return void 0===s?i:g(x())},b};var k=o("lbRHt");function S(e){var t=_(e);return M(t)}var _=function(e){return e.map((function(e){var t=e.title,n=void 0===t?"":t,r=e.vote_average,o=void 0===r?"":r,a=e.release_date,i=void 0===a?"":a,s=e.id,u=void 0===s?"":s;return i.length>0&&(i=i.slice(0,4)),{title:n,vote_average:o,release_date:i,id:u}}))},M=function(e){return e.map(E).join("")},E=function(e,t,n){var r=e.title,o=e.release_date,a=e.id;return'\n      <div class="search-result__item " tadindex="0" data-index='.concat(t," data-id=").concat(a,'>\n        <p class="search-result__title">').concat(r,'</p>\n        <span class="search-result__date"> (').concat(o,")</span>\n      </div>\n      ")},N=(i=o("bpxeT"),o("dDDEV")),j=(u=o("2TvXO"),k=o("lbRHt"),o("aTzrc"));function I(e){return{totalItems:e,itemsPerPage:20,visiblePages:3,centerAlign:!0,firstItemClassName:"pagination-first-child",lastItemClassName:"pagination-last-child",usageStatistics:!0}}var O=o("g2YN6"),D=o("6fJbC"),H=o("1VFfL");o("2xDiJ");var q=document.querySelector(".movies"),C=document.querySelector(".hero-home__form"),F=document.querySelector(".fail-search"),A=new(0,D.localStorageAPI);function W(){return(W=e(i)(e(u).mark((function t(n){var r,o,a,i,s,c;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.target.closest("li").dataset.id,"UL"!==n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:o=A.getData("movies"),a=A.getData("genresList"),i=o.filter((function(e){return e.id===Number(r)}))[0],(s=i.genre_ids)&&(c=a.filter((function(e){var t=e.id;return s.includes(t)})).map((function(e){return e.name}))),i.genres=c,A.setData("current-film",i),(0,O.modalBasicLightbox)(i,"movies"),A.addListenersToBtns();case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(e){return P.apply(this,arguments)}function P(){return(P=e(i)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.fetchMoviesByName)(n);case 2:z(e.sent,n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(e){return U.apply(this,arguments)}function U(){return(U=e(i)(e(u).mark((function t(n){var r,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,k.fetchMovieById)(n);case 2:r=t.sent,(o={}).results=[e(N)({},r)],o.total_results=1,localStorage.setItem("movies",JSON.stringify(o.results)),z(o);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function z(t,n){if(0===t.results.length)return F.classList.remove("is-hidden"),setTimeout((function(){return F.classList.add("is-hidden")}),5e3),void C.reset();q.innerHTML=(0,j.createMovieCards)(t.results),new(e(H))("pagination",I(t.total_results)).on("afterMove",(function(e){var t=e.page;(0,k.fetchMoviesByName)(n,t).then((function(e){q.innerHTML=(0,j.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})})).catch((function(e){console.log(e)}))}))}q.addEventListener("click",(function(e){return W.apply(this,arguments)}));var J=document.querySelector(".search-result"),V=document.querySelector(".hero-home__form"),X=document.querySelector(".form_input"),$=[],Q="",K=0,G="",Y=0;function Z(){return(Z=e(i)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(Q=n.target.value.trim()).length){e.next=5;break}return ce(),K=0,e.abrupt("return");case 5:return K=0,$=[],e.next=9,oe(Q);case 9:return e.sent,e.abrupt("return");case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=e(i)(e(u).mark((function t(n){var r;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $=[],K=0,t.next=4,(0,k.fetchMoviesByNameQuickSearch)(n,K+=1);case 4:return r=t.sent,G=n,$=e(s)(r.results),Y=r.total_pages,K=r.page,t.abrupt("return",ne(n));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=e(i)(e(u).mark((function t(n){var r,o;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=K+4,[];case 2:if(!(r>K&&Y>K)){t.next=10;break}return t.next=5,(0,k.fetchMoviesByNameQuickSearch)(n,K+=1);case 5:o=t.sent,K=o.page,$=0===$.length?e(s)(o.results):e(s)($).concat(e(s)(o.results)),t.next=2;break;case 10:return t.abrupt("return",$);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function oe(e){return ae.apply(this,arguments)}function ae(){return(ae=e(i)(e(u).mark((function t(n){var r,o,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=n.toLowerCase(),r=[],o=!1,G==n){e.next=10;break}return o=!0,e.next=7,ee(n);case 7:r=e.sent,e.next=15;break;case 10:if(K!==Y){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,ne(n);case 14:r=e.sent;case 15:return a=S(r),o?ie(a):se(a),$=[],e.abrupt("return","ok");case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var ie=function(e){J.innerHTML=e,document.body.addEventListener("click",ue)},se=function(e){J.insertAdjacentHTML("beforeend",e),document.body.removeEventListener("click",ue),document.body.addEventListener("click",ue)},ue=function(e){e.target.closest(".hero-home__form")||(ce(),document.body.removeEventListener("click",ue)),console.log("evt:  ",e);var t=e.target.closest(".search-result__item"),n=t.dataset.id;t.firstElementChild.textContent;ce(),R(n)};V.addEventListener("submit",(function(e){e.preventDefault();var t=V.elements.searchQuery.value.trim();return""===t?console.log("Empty search query"):(ce(),void B(t))}));var ce=function(){ie("")};X.addEventListener("input",e(a)((function(e){return Z.apply(this,arguments)}),500)),J.addEventListener("scroll",e(a)((function(e){var t=e.target,n=t.offsetHeight,r=t.scrollHeight;if(.3*r>r-n-t.scrollTop)return $=[],void oe(Q)}),100)),o("8uW00");var le,fe=o("6Urw1"),de=o("6Nu6u"),pe=o("3SEMc"),ve=o("8uW00"),me=(0,fe.initializeApp)({apiKey:"AIzaSyCI5JTbKtHIHNuS4WcbgMfz2S8WxJp_ehM",authDomain:"filmoteka-proj-7.firebaseapp.com",databaseURL:"https://filmoteka-proj-7-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"filmoteka-proj-7",storageBucket:"filmoteka-proj-7.appspot.com",messagingSenderId:"181528100082",appId:"1:181528100082:web:031dd9add36023a4e5e46b",measurementId:"G-1X27T2N03L"}),he=((0,de.getDatabase)(me),(0,pe.getAuth)()),ge=document.querySelector(".logout"),be=document.querySelector(".welcome"),ye=document.querySelector(".login");(0,pe.onAuthStateChanged)(he,(function(e){e&&(e.uid,le=e.email,ge.classList.remove("visually-hidden"),ye.classList.add("visually-hidden"),console.log("current user = ",le),be.innerHTML="Welcome, ".concat(le,"!"))})),ve.registrationFormSubmit.addEventListener("click",(function(e){e.preventDefault();var t=ve.registrationFormEmail.value;console.log(t);var n=ve.registrationFormPassword.value;console.log(n),(0,pe.createUserWithEmailAndPassword)(he,t,n).then((function(e){e.user})).catch((function(e){var t=e.code,n=e.message;console.log(t),console.log(n)})),ve.registrationForm.reset(),(0,ve.closeOnSubmit)()})),ve.loginForm.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("watched"),localStorage.removeItem("queue");var t=ve.loginFormEmail.value,n=ve.loginFormPassword.value;(0,pe.signInWithEmailAndPassword)(he,t,n).then((function(e){e.user;window.location.reload()})).catch((function(e){e.code,e.message})),ve.loginForm.reset(),(0,ve.closeOnSubmit)()})),ge.addEventListener("click",(function(){(0,pe.signOut)(he).then((function(){le=null,ge.classList.add("visually-hidden"),ye.classList.remove("visually-hidden"),localStorage.clear()})).catch((function(e){})),window.location.reload()}));i=o("bpxeT"),u=o("2TvXO"),k=o("lbRHt"),j=o("aTzrc"),H=o("1VFfL");var we=document.querySelector(".movies");function xe(){return(xe=e(i)(e(u).mark((function t(){var n;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,k.fetchTrendingMovies)();case 2:n=t.sent,we.innerHTML=(0,j.createMovieCards)(n.results),console.log("res: ",n),new(e(H))("pagination",I(n.total_results)).on("afterMove",(function(e){var t=e.page;(0,k.fetchTrendingMovies)(t).then((function(e){we.innerHTML=(0,j.createMovieCards)(e.results),window.scrollTo({top:0,behavior:"smooth"})}))}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){xe.apply(this,arguments)}(),o("4smAb"),o("j1lrD"),o("4Hwvb"),o("dsadE")}();
//# sourceMappingURL=index.8080a6ad.js.map
