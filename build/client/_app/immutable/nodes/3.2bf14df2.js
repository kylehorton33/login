import{S as R,i as z,s as Q,k as u,q as j,a as k,l as c,m,r as H,h as a,c as w,n as o,b as x,D as s,J as P,K as T,H as M,L as W}from"../chunks/index.8b7fe566.js";import{j as X}from"../chunks/singletons.e88468e2.js";import{a as Y}from"../chunks/axios.4a70c6fc.js";import{a as Z}from"../chunks/js.cookie.edb2da2a.js";const tt=X("goto");function et(_){let f,e,r,p,U,l,g,i,d,b,h,V,D,y,I,N,L,E,S,q,A,G;return{c(){f=u("form"),e=u("div"),r=u("h2"),p=j("User Login"),U=k(),l=u("input"),g=k(),i=u("input"),d=k(),b=u("div"),h=u("button"),V=j("Submit"),D=k(),y=u("div"),I=u("a"),N=j("Go Home"),L=k(),E=u("div"),S=u("a"),q=j("Login"),this.h()},l(t){f=c(t,"FORM",{});var n=m(f);e=c(n,"DIV",{class:!0});var v=m(e);r=c(v,"H2",{});var O=m(r);p=H(O,"User Login"),O.forEach(a),U=w(v),l=c(v,"INPUT",{class:!0,type:!0,placeholder:!0}),g=w(v),i=c(v,"INPUT",{class:!0,type:!0,placeholder:!0}),d=w(v),b=c(v,"DIV",{class:!0});var $=m(b);h=c($,"BUTTON",{type:!0,class:!0});var B=m(h);V=H(B,"Submit"),B.forEach(a),$.forEach(a),v.forEach(a),n.forEach(a),D=w(t),y=c(t,"DIV",{class:!0});var C=m(y);I=c(C,"A",{href:!0});var F=m(I);N=H(F,"Go Home"),F.forEach(a),C.forEach(a),L=w(t),E=c(t,"DIV",{class:!0});var J=m(E);S=c(J,"A",{href:!0});var K=m(S);q=H(K,"Login"),K.forEach(a),J.forEach(a),this.h()},h(){o(l,"class","input"),o(l,"type","text"),o(l,"placeholder","Email"),o(i,"class","input"),o(i,"type","password"),o(i,"placeholder","Password"),o(h,"type","submit"),o(h,"class","btn variant-filled"),o(b,"class","mx-auto flex justify-center"),o(e,"class","form space-y-4 p-40"),o(I,"href","/"),o(y,"class","container mx-auto flex justify-center"),o(S,"href","/login"),o(E,"class","container mx-auto flex justify-center")},m(t,n){x(t,f,n),s(f,e),s(e,r),s(r,p),s(e,U),s(e,l),P(l,_[0]),s(e,g),s(e,i),P(i,_[1]),s(e,d),s(e,b),s(b,h),s(h,V),x(t,D,n),x(t,y,n),s(y,I),s(I,N),x(t,L,n),x(t,E,n),s(E,S),s(S,q),A||(G=[T(l,"input",_[3]),T(i,"input",_[4]),T(h,"click",_[2]),T(f,"submit",onsubmit)],A=!0)},p(t,[n]){n&1&&l.value!==t[0]&&P(l,t[0]),n&2&&i.value!==t[1]&&P(i,t[1])},i:M,o:M,d(t){t&&a(f),t&&a(D),t&&a(y),t&&a(L),t&&a(E),A=!1,W(G)}}}function st(_,f,e){let r,p;function U(){r||alert("Enter email!"),p?l():alert("Enter password!")}async function l(){try{const d=await Y.post("http://localhost:5000/users/login",{email:r,password:p});Z.set("token",d.data.token,{sameSite:"strict"}),console.log(d.data.token),tt("/")}catch(d){console.log(d)}}function g(){r=this.value,e(0,r)}function i(){p=this.value,e(1,p)}return[r,p,U,g,i]}class rt extends R{constructor(f){super(),z(this,f,st,et,Q,{})}}export{rt as component};
