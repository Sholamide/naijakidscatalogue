(this.webpackJsonpnaijakidscat=this.webpackJsonpnaijakidscat||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(80),r=a.n(n),s=a(144),l=a(5),o=a(81),j=a.n(o),b=a(134),d=a(148),x=a(151),h=a(146),p=a(136),u=a(137),O=a(138),g=a(139),m=a(140),f=a(141),v=a(143),y=a(56),S=a(82),w=a(37),G=a(145),k=a(135),L=a(149),A=a(89),C=a(4),F=function(e){var t=e.game,a=e.rootProps,c=t.GameTitle,i=t.GameDescription,n=t.GameImage;return Object(C.jsxs)(d.b,Object(w.a)(Object(w.a)({bg:"green.100",borderWidth:"5px",borderColor:"red.900",borderRadius:"base",px:{base:"4",md:"6"},py:{base:"4",md:"6"},spacing:Object(G.a)({base:"4",md:"5"})},a),{},{children:[Object(C.jsx)(b.a,{position:"relative",children:Object(C.jsx)(k.a,{children:Object(C.jsx)(h.a,{src:n,alt:c,draggable:"false",fallback:Object(C.jsx)(L.a,{}),borderRadius:Object(G.a)({base:"md",md:"xl"})})})}),Object(C.jsxs)(d.b,{children:[Object(C.jsxs)(d.b,{spacing:"1",children:[Object(C.jsx)(p.a,{bg:"green.900",p:"10px",mx:"auto",borderRadius:"2xl",fontWeight:"bold",color:"white",children:"Title"}),Object(C.jsx)(p.a,{color:Object(A.c)("gray.700","gray.400"),children:c})]}),Object(C.jsxs)(d.b,{spacing:"1",children:[Object(C.jsx)(p.a,{fontWeight:"bold",bg:"red.900",p:"5px",mx:"auto",borderRadius:"2xl",color:"white",fontSize:"sm",children:"Game Description"}),Object(C.jsx)(p.a,{fontWeight:"medium",color:Object(A.c)("gray.700","gray.100"),children:i})]})]})]}))},T=a(150),z=function(e){var t=c.useMemo((function(){var t=c.Children.toArray(e.children).filter(c.isValidElement).length;return{base:Math.min(2,t),md:Math.min(3,t),lg:Math.min(4,t),xl:Math.min(5,t)}}),[e.children]);return Object(C.jsx)(T.a,Object(w.a)({columns:t,columnGap:{base:"4",md:"6"},rowGap:{base:"8",md:"10"}},e))},M=a(87);var R=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),s=r[0],o=r[1],w=Object(c.useState)(""),G=Object(l.a)(w,2),k=G[0],L=G[1],A=Object(c.useState)(["All"]),T=Object(l.a)(A,2),R=T[0],W=T[1],E=Object(c.useState)(["All"]),I=Object(l.a)(E,2),K=I[0],D=I[1],J=Object(c.useState)(["Topic"]),B=Object(l.a)(J,1)[0];return Object(c.useEffect)((function(){j.a.get("https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter").then((function(e){o(!0),i(e.data)}))}),[]),s?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(b.a,{maxW:"7xl",mx:"auto",w:"100%",px:{base:"4",md:"8",lg:"12"},py:{base:"6",md:"8",lg:"12"},children:[Object(C.jsx)(d.b,{children:Object(C.jsxs)(d.b,{spacing:"4",children:[Object(C.jsx)(h.a,{boxSize:"150px",src:"naijakidslogo.png"}),Object(C.jsxs)(d.b,{direction:"row",spacing:"4",justify:"space-between",children:[" ",Object(C.jsx)(p.a,{as:"i",fontSize:"xl",children:Object(C.jsx)(M.a,{steps:["Hi there, my name is Olamide \ud83d\ude43\ud83d\ude43",1500,"This is my one page catalogue   for the react front-end internship task \ud83d\udd76\ufe0f\ud83d\udd7a",1500,"This project was built using React and ChakraUI \ud83d\ude0e\ud83c\udfa9",1500],loop:1/0,wrapper:"p"})}),Object(C.jsx)(d.b,{children:Object(C.jsxs)(u.a,{fontWeight:"bold",color:"green.900",href:"https://github.com/Sholamide/naijakids",isExternal:!0,children:["Github Repo",Object(C.jsx)(O.a,{as:S.a})]})})]})]})}),Object(C.jsxs)(d.a,{px:"12px",py:"18px",direction:"row",children:[Object(C.jsxs)(g.a,{children:[Object(C.jsx)(m.a,{pointerEvents:"none",children:Object(C.jsx)(O.a,{as:y.b,px:"4px"})}),Object(C.jsx)(f.a,{variant:"flushed",placeholder:"Search games by Topic",onChange:function(e){return L(e.target.value)},value:k})]}),Object(C.jsxs)(v.a,{icon:Object(C.jsx)(O.a,{as:y.a}),variant:"filled","aria-label":"Filter games by Groups",onChange:function(e){W(e.target.value)},children:[Object(C.jsx)("option",{value:"All",children:"Filter Games by Groups"}),Object(C.jsx)("option",{value:"Academic",children:"Academic"}),Object(C.jsx)("option",{value:"Financial Literacy",children:"Financial Literacy "})]}),Object(C.jsxs)(v.a,{icon:Object(C.jsx)(O.a,{as:y.a}),variant:"filled","aria-label":"Filter games by Levels",onChange:function(e){D(e.target.value)},children:[Object(C.jsx)("option",{value:"All",children:"Filter Games by Levels"}),Object(C.jsx)("option",{value:"Key Stage 1",children:"Key Stage 1"}),Object(C.jsx)("option",{value:"Financial Literacy",children:"Financial Literacy"}),Object(C.jsx)("option",{value:"Key Stage 2",children:"Key Stage 2"})]})]}),Object(C.jsx)(z,{children:function(e){return e.filter((function(e){return e.Group==R||e.Level==K||e.Level==K&&e.Group==R||"All"==R&&"All"==K?B.some((function(t){return e[t].toString().toLowerCase().indexOf(k.toLowerCase())>-1})):void 0}))}(a).map((function(e){return Object(C.jsx)(F,{game:e},e.GameTitle)}))})]})}):Object(C.jsx)(d.b,{children:Object(C.jsx)(x.a,{position:"fixed",left:"0px",right:"0px",zIndex:"9999",thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})};r.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(s.a,{children:Object(C.jsx)(R,{})})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.0650b2ba.chunk.js.map