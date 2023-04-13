import{S as re,i as ne,s as ce,k as c,q as H,a as w,l as i,m as h,r as k,h as a,c as g,n,b as L,G as t,K as Y,M as ie,o as he,u as ae,y as de,z as pe,A as fe,g as ue,d as _e,B as me}from"../chunks/index.fdbbf576.js";function le(E,e,o){const r=E.slice();return r[1]=e[o],r[3]=o,r}function oe(E){let e,o,r=E[1].name+"",d,m,s,v=E[1].position+"",R,T,$,u,b,P,M,y,N,V,D,j;return{c(){e=c("tr"),o=c("td"),d=H(r),m=w(),s=c("td"),R=H(v),T=w(),$=c("td"),u=w(),b=c("td"),P=w(),M=c("td"),y=c("a"),N=c("button"),V=H("REVIEW"),j=w(),this.h()},l(x){e=i(x,"TR",{class:!0});var l=h(e);o=i(l,"TD",{class:!0});var q=h(o);d=k(q,r),q.forEach(a),m=g(l),s=i(l,"TD",{class:!0});var O=h(s);R=k(O,v),O.forEach(a),T=g(l),$=i(l,"TD",{class:!0}),h($).forEach(a),u=g(l),b=i(l,"TD",{class:!0}),h(b).forEach(a),P=g(l),M=i(l,"TD",{});var A=h(M);y=i(A,"A",{href:!0});var S=h(y);N=i(S,"BUTTON",{class:!0});var W=h(N);V=k(W,"REVIEW"),W.forEach(a),S.forEach(a),A.forEach(a),j=g(l),l.forEach(a),this.h()},h(){n(o,"class","whitespace-nowrap px-6 py-4"),n(s,"class","whitespace-nowrap px-6 py-4"),n($,"class","whitespace-nowrap px-6 py-4"),n(b,"class","whitespace-nowrap px-6 py-4"),n(N,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),n(y,"href",D="/employee/"+E[1].name),n(e,"class","border-b dark:border-neutral-500")},m(x,l){L(x,e,l),t(e,o),t(o,d),t(e,m),t(e,s),t(s,R),t(e,T),t(e,$),t(e,u),t(e,b),t(e,P),t(e,M),t(M,y),t(y,N),t(N,V),t(e,j)},p(x,l){l&1&&r!==(r=x[1].name+"")&&ae(d,r),l&1&&v!==(v=x[1].position+"")&&ae(R,v),l&1&&D!==(D="/employee/"+x[1].name)&&n(y,"href",D)},d(x){x&&a(e)}}}function ve(E){let e,o,r,d,m,s,v,R,T,$,u,b,P,M,y,N,V,D,j,x,l,q,O,A,S,W,z,C=E[0].employees,_=[];for(let f=0;f<C.length;f+=1)_[f]=oe(le(E,C,f));return{c(){e=c("div"),o=c("h1"),r=H("Direct Reports"),d=w(),m=c("p"),s=H("Below you will find a list of your direct reports, select one to edit their profile."),v=w(),R=c("div"),T=c("table"),$=c("thead"),u=c("tr"),b=c("th"),P=H("Name"),M=w(),y=c("th"),N=H("Position"),V=w(),D=c("th"),j=H("Next 1:1"),x=w(),l=c("th"),q=H("Next Review"),O=w(),A=c("th"),S=H("Review"),W=w(),z=c("tbody");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=i(f,"DIV",{class:!0});var B=h(e);o=i(B,"H1",{class:!0});var p=h(o);r=k(p,"Direct Reports"),p.forEach(a),d=g(B),m=i(B,"P",{});var G=h(m);s=k(G,"Below you will find a list of your direct reports, select one to edit their profile."),G.forEach(a),v=g(B),R=i(B,"DIV",{class:!0});var F=h(R);T=i(F,"TABLE",{class:!0});var K=h(T);$=i(K,"THEAD",{class:!0});var J=h($);u=i(J,"TR",{});var I=h(u);b=i(I,"TH",{scope:!0,class:!0});var Q=h(b);P=k(Q,"Name"),Q.forEach(a),M=g(I),y=i(I,"TH",{scope:!0,class:!0});var X=h(y);N=k(X,"Position"),X.forEach(a),V=g(I),D=i(I,"TH",{scope:!0,class:!0});var Z=h(D);j=k(Z,"Next 1:1"),Z.forEach(a),x=g(I),l=i(I,"TH",{scope:!0,class:!0});var ee=h(l);q=k(ee,"Next Review"),ee.forEach(a),O=g(I),A=i(I,"TH",{scope:!0,class:!0});var te=h(A);S=k(te,"Review"),te.forEach(a),I.forEach(a),J.forEach(a),W=g(K),z=i(K,"TBODY",{});var se=h(z);for(let U=0;U<_.length;U+=1)_[U].l(se);se.forEach(a),K.forEach(a),F.forEach(a),B.forEach(a),this.h()},h(){n(o,"class","text-3xl font-bold underline"),n(b,"scope","col"),n(b,"class","px-6 py-4"),n(y,"scope","col"),n(y,"class","px-6 py-4"),n(D,"scope","col"),n(D,"class","px-6 py-4"),n(l,"scope","col"),n(l,"class","px-6 py-4"),n(A,"scope","col"),n(A,"class","px-6 py-4"),n($,"class","border-b font-medium dark:border-neutral-500"),n(T,"class","min-w-full text-left text-sm font-light"),n(R,"class","container svelte-1nud9ol"),n(e,"class","container svelte-1nud9ol")},m(f,B){L(f,e,B),t(e,o),t(o,r),t(e,d),t(e,m),t(m,s),t(e,v),t(e,R),t(R,T),t(T,$),t($,u),t(u,b),t(b,P),t(u,M),t(u,y),t(y,N),t(u,V),t(u,D),t(D,j),t(u,x),t(u,l),t(l,q),t(u,O),t(u,A),t(A,S),t(T,W),t(T,z);for(let p=0;p<_.length;p+=1)_[p]&&_[p].m(z,null)},p(f,[B]){if(B&1){C=f[0].employees;let p;for(p=0;p<C.length;p+=1){const G=le(f,C,p);_[p]?_[p].p(G,B):(_[p]=oe(G),_[p].c(),_[p].m(z,null))}for(;p<_.length;p+=1)_[p].d(1);_.length=C.length}},i:Y,o:Y,d(f){f&&a(e),ie(_,f)}}}function ye(E,e,o){var r={name:"Billy Bob",employees:[]};return he(async()=>{const m=await(await fetch("./mock-data/mockManager.json")).json();o(0,r=m)}),[r]}class Ee extends re{constructor(e){super(),ne(this,e,ye,ve,ce,{})}}function be(E){let e,o,r,d,m;return d=new Ee({}),{c(){e=c("h1"),o=H("Employees"),r=w(),de(d.$$.fragment)},l(s){e=i(s,"H1",{});var v=h(e);o=k(v,"Employees"),v.forEach(a),r=g(s),pe(d.$$.fragment,s)},m(s,v){L(s,e,v),t(e,o),L(s,r,v),fe(d,s,v),m=!0},p:Y,i(s){m||(ue(d.$$.fragment,s),m=!0)},o(s){_e(d.$$.fragment,s),m=!1},d(s){s&&a(e),s&&a(r),me(d,s)}}}function xe(E,e,o){let{data:r}=e;return E.$$set=d=>{"data"in d&&o(0,r=d.data)},[r]}class ge extends re{constructor(e){super(),ne(this,e,xe,be,ce,{data:0})}}export{ge as default};
