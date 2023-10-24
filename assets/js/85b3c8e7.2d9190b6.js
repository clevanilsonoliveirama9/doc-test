"use strict";(self.webpackChunkclaps_docs=self.webpackChunkclaps_docs||[]).push([[874],{64906:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ot});var r=n(67294),a=n(22430),l=n(80139),o=n(87441),i=n(87462),m=n(34209),c=n(71698),s=n(11703),d=n(40044),u=n(69417),p=n(60181),g=n(23508),h=n(93946),E=n(50066);const b=E.ZP.div`
  border: 0.1rem solid hsl(var(--secondary-light-01));
  border-radius: 0.6rem;
  overflow-y: hidden;
  position: relative;
  height: fit-content;

  > * {
    border-bottom: 0.1rem solid hsl(var(--secondary-light-01));
  }
`;function v(e){const{children:t,style:n}=e;return r.createElement(b,{style:n},t)}const f=E.ZP.div`
  &:not(:last-child) {
    border-bottom: 0.1rem solid hsl(var(--secondary-light-01));
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
  }
`,y=E.ZP.span`
  color: hsl(var(--neutral-black));
  font-weight: 500;
  font-size: 1.4rem;
`,Z=E.ZP.span`
  color: hsl(var(--primary-400));
  font-size: 1.4rem;
`,k=E.ZP.span`
  color: hsl(var(--help-blue));
  font-size: 1.4rem;
`,x=E.ZP.p`
  color: hsl(var(--neutral-dark));
  font-size: 1.4rem;
  font-weight: 300;
`,w=E.ZP.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`,P=E.ZP.span`
  display: inline-block;
  padding: 0.2rem;
  background: hsl(var(--secondary-light-02));
`,S=E.ZP.span`
  color: hsl(var(--help-alert));
  &::before {
    content: ' obrigatório';
  }
`;function C(e){const{nome:t,campo:n}=e,{type:a,required:l,format:o,minLength:i,maxLength:m,description:c}=n;return r.createElement(f,null,"_"!==t&&r.createElement(y,null,t,": "),r.createElement(Z,null,a||typeof n),l&&r.createElement(S,null),r.createElement(x,null,c&&r.createElement("div",null,c),o&&r.createElement("span",null,"Formato ",r.createElement(k,null,o),"."),i&&r.createElement("span",null," ","Tamanho m\xednimo: ",r.createElement(k,null,i),"."),m&&r.createElement("span",null," ","Tamanho m\xe1ximo: ",r.createElement(k,null,m),"."),n.enum&&r.createElement(w,null,n.enum.map((e=>r.createElement(P,{key:e},e))))))}var $=n(6939),A=n(99412);const z=E.ZP.div`
  padding: 0.6rem;
`,j=E.ZP.div`
  background: hsl(var(--neutral-white));
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  padding: 0.6rem;
  position: relative;
  z-index: 1;
`,B=E.ZP.div`
  display: ${e=>{let{isAberto:t}=e;return t?"block":"none"}};
`;function I(e){const{objeto:t,header:n}=e,[a,l]=(0,r.useState)(!!e.isAberto),{properties:o}=t;return o?r.createElement(v,null,r.createElement(j,null,n,r.createElement($.Z,{titulo:a?"Fechar":"Abrir"},r.createElement(h.Z,{onClick:()=>l(!a)},a?r.createElement(p.Z,null):r.createElement(g.Z,null)))),r.createElement(B,{isAberto:a},Object.entries(o).map((e=>{let[t,n]=e;const{type:a,required:l}=n;return a===A.Y.OBJECT||a===A.Y.ARRAY?r.createElement("div",{key:t,style:{padding:"1.6rem 1.6rem 0"}},r.createElement(v,{style:{marginBottom:"1.2rem"}},r.createElement(I,{isAberto:!1,objeto:n,header:r.createElement("div",{style:{display:"flex",alignItems:"center"}},r.createElement(C,{nome:t,campo:{type:a,required:l}}))}))):r.createElement(z,{key:t},r.createElement(C,{nome:t,campo:n}))})))):r.createElement(r.Fragment,null)}const R=E.ZP.h5`
  color: hsl(var(--neutral-dark));
  font-size: 1.4rem;
  font-weight: 400;
  text-transform: uppercase;
`;function T(e){const{children:t,styles:n}=e;return r.createElement(R,{style:n},t)}var F=n(63970),O=n(79982);const q=E.ZP.div`
  margin-bottom: 3.2rem;
`,G=E.ZP.div`
  border-radius: 0.5rem;
  border: 0.1rem solid hsl(var(--secondary-light-01));
  padding: 1rem 0.8rem 0.8rem;
`,H=E.ZP.div`
  align-items: center;
  display: flex;
  font-size: 1.4rem;

  &::before {
    content: 'Body';
  }
`;function L(e){const{children:t,value:n,index:a,...l}=e;return r.createElement("div",(0,i.Z)({role:"tabpanel",hidden:n!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`},l),t)}function U(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function W(){const{config:e,metodoSelecionado:t}=(0,r.useContext)(l.k),[n,a]=(0,r.useState)(0),[o,p]=(0,r.useState)(),[g,h]=(0,r.useState)("");(0,r.useEffect)((()=>{if(!t?.requestBody?.content)return p(void 0),void h("");const{content:n}=t.requestBody,r=(0,O.HP)(n["application/json"].schema,e);p(r);const a=(0,O.XW)((0,O.At)(r,e));h(a)}),[t]);return o?r.createElement(q,null,r.createElement(T,{styles:{marginBottom:"1.4rem"}},"BODY PARAMS"),r.createElement(G,null,r.createElement(c.Z,{sx:{borderBottom:1,borderColor:"divider"}},r.createElement(s.Z,{value:n,onChange:(e,t)=>{a(t)}},r.createElement(d.Z,(0,i.Z)({label:"Descri\xe7\xe3o"},U(0))),r.createElement(d.Z,(0,i.Z)({label:"JSON"},U(1))))),r.createElement(L,{value:n,index:0},r.createElement("div",{style:{padding:"1.2rem"}},r.createElement(I,{isAberto:!0,objeto:o,header:r.createElement(H,null)}))),r.createElement(L,{value:n,index:1},r.createElement(m.Z,{language:"javascript",style:F.Qj},g),r.createElement(u.Z,{variant:"outlined",onClick:()=>{navigator.clipboard.writeText(g)}},"Copiar")))):r.createElement(r.Fragment,null)}var _=n(21023),D=n(93619);const Y=E.ZP.div`
  border-top: 0.1rem solid hsl(var(--secondary-light-01));
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: space-between;
  padding-top: 1.2rem;
`,J=E.ZP.div`
  align-items: center;
  background: transparent;
  border: none;
  color: hsl(var(--neutral-dark));
  cursor: pointer;
  display: flex;
  gap: 0.4rem;
  font-size: 1.4rem;
`;function N(){const{metodoSelecionado:e,setState:t}=(0,r.useContext)(l.k),[n,a]=(0,r.useState)(),[o,i]=(0,r.useState)();return(0,r.useEffect)((()=>{e&&(a((0,O.U7)({metodoSelecionado:e,posicao:"anteriorRef"})),i((0,O.U7)({metodoSelecionado:e,posicao:"proximoRef"})))}),[e]),r.createElement(Y,null,n?r.createElement(J,{onClick:()=>t({metodoSelecionado:n,responseSelecionada:void 0})},r.createElement(_.Z,null),n.summary):r.createElement("div",null),o&&r.createElement(J,{onClick:()=>t({metodoSelecionado:o,responseSelecionada:void 0})},o.summary,r.createElement(D.Z,null)))}const M=E.ZP.span`
  align-items: center;
  background: ${e=>{let{bg:t}=e;return t}};
  border-radius: 1rem;
  color: #fff;
  display: inline-flex;
  font-size: 0.8rem;
  height: fit-content;
  justify-content: center;
  min-width: 5.6rem;
  padding: 0.2rem 0.8rem;
  text-transform: uppercase;
`,Q={get:"#009A75",post:"#0272d9",put:"#604aa2",patch:"#df7d03",delete:"#DA2A2A"};function X(e){const{tipo:t,style:n}=e;return r.createElement(M,{style:n,bg:Q[t]},t)}const V=E.ZP.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.6rem;
`,K=E.ZP.p`
  color: hsl(var(--neutral-black));
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0;
  word-break: break-all;
`;function ee(e){const{tipo:t,rota:n}=e;return r.createElement(V,null,r.createElement(X,{tipo:t}),r.createElement(K,null,n))}var te=n(55819),ne=n(70925);const re={marginBottom:"1.4rem"},ae={padding:"1.4rem"},le=E.ZP.div`
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
`,oe=E.ZP.div`
  background: hsl(var(--secondary-light-02));
  min-height: 4rem;
  border-radius: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  justify-content: space-between;
  margin-top: 1.4rem;
  padding: 0.6rem;
`,ie=E.ZP.div`
  overflow-x: auto;
  max-width: calc(100% - 0.6rem);

  span {
    white-space: nowrap;
  }
`;function me(){const{config:e,metodoSelecionado:t,serverUrl:n,setState:a}=(0,r.useContext)(l.k),o=t?.pathRef.nome;return r.createElement(le,null,r.createElement(T,{styles:re},"Servidores"),r.createElement(v,{style:ae},r.createElement(ne.Z,{label:"Servidores",variant:"outlined",select:!0,value:n,onChange:e=>{const{value:t}=e.target;a({serverUrl:t})}},e.servers.map((e=>r.createElement(te.Z,{key:e.url,value:e.url},e.description)))),r.createElement(oe,null,r.createElement(ie,null,r.createElement("span",null,`${n}${o}`)),r.createElement(u.Z,{variant:"outlined",onClick:()=>{t&&n&&navigator.clipboard.writeText(`${n}/${o}`)}},"Copiar"))))}const ce=E.ZP.div`
  align-items: center;
  display: flex;
  gap: 1.2rem;
`,se=E.ZP.span`
  &::before {
    background: hsl(var(${e=>{let{statusColor:t}=e;return t}}));
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 1rem;
    margin-right: 0.8rem;
    width: 1rem;
  }
`;function de(e){const{response:t,...n}=e,{description:a,nome:l}=t;return r.createElement(ce,n,r.createElement(se,{statusColor:(0,O.mw)(+l)},l),r.createElement("span",null,a))}const ue=E.ZP.div`
  margin-bottom: 3.2rem;
`,pe=E.ZP.div`
  align-items: center;
  color: hsl(var(--neutral-black));
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  transition: 200ms;

  ${e=>{let{isSelecionada:t}=e;return t?" background: hsl(var(--neutral-white));":""}}

  &:first-child {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &:hover {
    background: hsl(var(--neutral-white));
  }
`;function ge(){const{metodoSelecionado:e,responseSelecionada:t,setState:n}=(0,r.useContext)(l.k);if(!e?.responses)return r.createElement(r.Fragment,null);const{responses:a}=e;return r.createElement(ue,null,r.createElement(T,{styles:{marginBottom:"1.4rem"}},"Responses"),r.createElement(v,{style:{background:"hsl(var(--secondary-light-02))"}},Object.entries(a).map((e=>{let[a,l]=e;return r.createElement(pe,{key:a,isSelecionada:t?.nome===a,onClick:()=>n({responseSelecionada:{nome:a,...l}})},r.createElement(de,{response:{nome:a,...l}}))}))))}const he=E.ZP.div``,Ee=E.ZP.div`
  border-radius: 0.5rem;
  border: 0.1rem solid hsl(var(--secondary-light-01));
  padding: 0.8rem;
  margin-bottom: 1.8rem;
`,be=E.ZP.div`
  padding: 1.2rem;
`;function ve(e){const{children:t,value:n,index:a,...l}=e;return r.createElement("div",(0,i.Z)({role:"tabpanel",hidden:n!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`},l),t)}function fe(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}function ye(){const{config:e,responseSelecionada:t}=(0,r.useContext)(l.k),[n,a]=(0,r.useState)(0),[o,p]=(0,r.useState)(),[g,h]=(0,r.useState)("");(0,r.useEffect)((()=>{if(!t?.content)return p(void 0),void h("");const{content:n}=t,r=(0,O.HP)(n["application/json"].schema,e);p(r);const a=(0,O.XW)((0,O.At)(r,e));h(a)}),[t]);return o&&t?r.createElement(he,null,r.createElement(T,{styles:{marginBottom:"1.4rem"}},"Response"),r.createElement(Ee,null,r.createElement(c.Z,{sx:{borderBottom:1,borderColor:"divider"}},r.createElement(s.Z,{value:n,onChange:(e,t)=>{a(t)}},r.createElement(d.Z,(0,i.Z)({label:"Descri\xe7\xe3o"},fe(0))),r.createElement(d.Z,(0,i.Z)({label:"JSON"},fe(1))))),r.createElement(ve,{value:n,index:0},r.createElement(be,null,r.createElement(I,{isAberto:!0,objeto:o,header:r.createElement(de,{style:{padding:"0.6rem"},response:t})}))),r.createElement(ve,{value:n,index:1},r.createElement(m.Z,{language:"javascript",style:F.Qj},g),r.createElement(u.Z,{variant:"outlined",onClick:()=>{navigator.clipboard.writeText(g)}},"Copiar")))):r.createElement(r.Fragment,null)}const Ze="1300px",ke="2.4rem",xe="3.2rem",we=E.ZP.div`
  overflow-x: auto;
  flex: 1;
  padding: ${ke};

  @media (min-width: ${Ze}) {
    padding: ${xe};
    padding-right: 0;
  }
`,Pe=E.ZP.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
`,Se=E.ZP.section`
  flex: 1;

  @media (min-width: ${Ze}) {
    border-right: 0.05rem solid hsl(var(--secondary-light-01));
    padding-right: ${xe};
  }
`,Ce=E.ZP.section`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${Ze}) {
    flex-direction: column;
    padding-left: 3.2rem;
  }
`,$e=E.ZP.h1`
  font-size: 3rem;
  color: hsl(var(--neutral-black));
  font-weight: 500;
  font-style: normal;
  margin-bottom: 0.8rem;
  word-wrap: break-word;
`,Ae=E.ZP.p`
  color: hsl(var(--neutral-dark));
  font-size: 1.6rem;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 0.1rem solid hsl(var(--secondary-light-01));
`,ze=E.ZP.div`
  padding: ${ke};
  max-width: 90rem;

  h1 {
    margin-bottom: 1.2rem;
  }

  p {
    margin-bottom: 0.8rem;
  }

  pre {
    margin: 1.2rem 0;
  }

  code {
    font-size: 1.4rem;
  }

  @media (min-width: ${Ze}) {
    padding: ${xe};
  }
`,je=1300;function Be(){const{metodoSelecionado:e,config:t}=(0,r.useContext)(l.k),[n,a]=(0,r.useState)(innerWidth<je),i=()=>{innerWidth<je&&!n&&a(!0),innerWidth>je&&n&&a(!1)};if((0,r.useEffect)((()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)})),[n]),!e)return r.createElement(we,null,r.createElement(ze,null,r.createElement("div",{dangerouslySetInnerHTML:{__html:o.TU.parse(t.info.description)}})));return r.createElement(we,null,n?r.createElement(r.Fragment,null,r.createElement($e,null,e.summary),r.createElement(ee,{tipo:e.nome,rota:`${e.pathRef.nome}`}),r.createElement(Ae,null,e.description),r.createElement(me,null),r.createElement(ge,null),r.createElement(ye,null),r.createElement(W,null),r.createElement(N,null)):r.createElement(Pe,null,r.createElement(Se,null,r.createElement($e,null,e.summary),r.createElement(ee,{tipo:e.nome,rota:`${e.pathRef.nome}`}),r.createElement(Ae,null,e.description),r.createElement(ge,null),r.createElement(W,null),r.createElement(N,null)),r.createElement(Ce,null,r.createElement(me,null),r.createElement(ye,null))))}var Ie=n(42761),Re=n(78262);const Te=E.ZP.div`
  background: ${e=>{let{isSelecionado:t}=e;return t?"hsla(var(--primary-50), 0.3)":""}};
  display: flex;
  border-radius: 0.4rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  gap: 0.4rem;
  font-size: 1.4rem;
  justify-content: space-between;
  padding: 0.4rem 1.4rem;

  &:hover {
    background: hsl(var(--secondary-light-02));
  }
`,Fe=E.ZP.span`
  color: hsl(var(--neutral-dark));
  font-weight: 400;
  line-height: 150%;
`;function Oe(e){const{metodoSelecionado:t}=(0,r.useContext)(l.k),{metodo:n,...a}=e,{summary:o}=n;return r.createElement(Te,(0,i.Z)({isSelecionado:o===t?.summary},a),r.createElement(Fe,null,o),r.createElement(X,{style:{marginTop:".2rem"},tipo:n.nome}))}const qe=E.ZP.div`
  max-width: 50rem;
  padding: 1.4rem;
`,Ge=E.ZP.div`
  min-width: 28rem;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid hsl(var(--secondary-light-01));
`,He=E.ZP.div`
  color: hsl(var(--neutral-dark));
  font-size: 1.4rem;
  text-align: center;
  padding: 1.2rem;

  ::before {
    content: 'Nenhum resultado encontrado';
  }
`;function Le(e){const{metodos:t,setState:n}=(0,r.useContext)(l.k),{onClose:a}=e,[o,m]=(0,r.useState)(t);return(0,r.useEffect)((()=>{m(t)}),[t]),r.createElement(Re.Z,(0,i.Z)({},e,{onClose:()=>{m(t),a&&a()}}),r.createElement(qe,null,r.createElement(Ge,null,r.createElement(ne.Z,{label:"Pesquisar",variant:"outlined",onChange:e=>{const{value:n}=e.target;m((0,O.j0)(n,t))}})),o.length?o.map((e=>r.createElement(Oe,{key:e.operationId,metodo:e,onClick:()=>{n({metodoSelecionado:e,responseSelecionada:void 0,isSidebarAberta:!1}),m(t),a&&a()}}))):r.createElement(He,null)))}var Ue=n(75503),We=n(48317);const _e=E.ZP.div``;function De(e){const{setState:t}=(0,r.useContext)(l.k),{paths:n}=e;return r.createElement(_e,null,n.map((e=>e.metodos.map((e=>r.createElement("div",{key:e.operationId,onClick:()=>{t({isSidebarAberta:!1,metodoSelecionado:e,responseSelecionada:void 0})}},r.createElement(Oe,{metodo:e})))))))}const Ye=E.ZP.div``,Je=E.ZP.div`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  color: hsl(var(--neutral-dark));
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 400;
  transition: 200ms;

  &:hover {
    background: hsl(var(--secondary-light-02));
  }
`,Ne=E.ZP.div`
  display: ${e=>{let{isTagBodyOpen:t}=e;return t?"block":"none"}};
`;function Me(e){const{metodoSelecionado:t}=(0,r.useContext)(l.k),[n,a]=(0,r.useState)(!1),{tag:o,index:i,tagGroupIndex:m}=e;return(0,r.useEffect)((()=>{t&&t.pathRef.tagRef.nome===o.nome&&a(!0)}),[t]),r.createElement(Ye,null,r.createElement(Je,{onClick:()=>a(!n)},n?r.createElement(Ue.Z,null):r.createElement(We.Z,null),o.nome),r.createElement(Ne,{isTagBodyOpen:n},r.createElement(De,{tagGroupIndex:m,tagIndex:i,paths:o.paths})))}const Qe=E.ZP.div``;function Xe(e){const{tags:t,tagGroupIndex:n}=e;return r.createElement(Qe,null,t.map(((e,t)=>r.createElement(Me,{key:e.nome,tagGroupIndex:n,index:t,tag:e}))))}const Ve=E.ZP.div`
  nav {
    background: hsl(var(--neutral-white));
    border-right: 0.1rem solid hsl(var(--secondary-light-02));
    height: 100vh;
    min-width: 30rem;
    overflow-y: auto;
    padding: 1.2rem;
    padding-bottom: 4rem;
    position: sticky;
    top: 0;
    width: 30rem;
    transition: 200ms transform;

    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ddd;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    @media (max-width: ${F.dv}) {
      position: absolute;
      transform: translate(
        ${e=>{let{isAberto:t}=e;return t?"0%":"-100%"}}
      );
    }
  }

  @media (max-width: ${F.dv}) {
    position: absolute;
    ${e=>{let{isAberto:t}=e;return t?"inset: 0;":""}}
    background: rgba(0, 0, 0, .4);
    z-index: 10;
  }
`,Ke=E.ZP.div`
  margin-bottom: 1.4rem;
`,et=E.ZP.button`
  background: #fff;
  border: none;
  color: hsl(var(--neutral-black));
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;

  &:hover {
    background: hsl(var(--secondary-light-02));
  }
`;function tt(){const{setState:e,tagGroupViews:t,isSidebarAberta:n}=(0,r.useContext)(l.k),[a,o]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement(Le,{open:a,onClose:()=>o(!1)}),r.createElement(Ve,{isAberto:n,onClick:()=>e({isSidebarAberta:!1})},r.createElement("nav",{onClick:e=>e.stopPropagation()},r.createElement(u.Z,{variant:"outlined",sx:{marginBlock:"1.2rem"},startIcon:r.createElement(Ie.Z,null),onClick:()=>o(!0)},"Pesquisar"),r.createElement("div",null,r.createElement(et,{onClick:()=>e({metodoSelecionado:void 0,isSidebarAberta:!1})},"Intro")),t.map(((e,t)=>{let{nome:n,tags:a}=e;return r.createElement(Ke,{key:n},r.createElement(T,null,n),r.createElement(Xe,{tagGroupIndex:t,tags:a}))})))))}var nt=n(55300),rt=n(49043);const at=E.ZP.main`
  background: hsl(var(--neutral-white));
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`,lt=E.ZP.div`
  display: flex;
`;function ot(){return r.createElement(a.Z,{theme:F.xA},r.createElement(l.n,null,r.createElement(at,null,r.createElement(nt.Z,null),r.createElement(rt.Z,null,r.createElement(lt,null,r.createElement(tt,null),r.createElement(Be,null))))))}}}]);