(this.webpackJsonpnc_reactportfolio=this.webpackJsonpnc_reactportfolio||[]).push([[0],{138:function(e,t){},139:function(e,t){},140:function(e,t){},141:function(e,t){},142:function(e,t){},147:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(11),a=c.n(r),s=(c(66),c(67),c(7)),i=c(18),o=c(19),j=c(21),b=c(20),l=c(2),h=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsx)("div",{style:{width:"100",margin:"auto"},children:Object(l.jsx)(s.Grid,{className:"landing-grid",children:Object(l.jsxs)(s.Cell,{col:12,children:[Object(l.jsx)("img",{src:"https://github.com/nbmc1991/nc_reactportfolio/blob/master/public/IMG_5322.jpg?raw=true",alt:"avatar",className:"avatar-image"}),Object(l.jsxs)("div",{className:"banner-text",children:[Object(l.jsx)("h1",{children:"Full Stack Web Developer"}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"HTML/CSS | Bootstrap | JavaScript| React | NodeJS | Express | MongoDB"}),Object(l.jsxs)("div",{className:"social-links",children:[Object(l.jsx)("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/norma-cruz-8900542a/",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})}),Object(l.jsx)("a",{rel:"noopener noreferrer",href:"https://github.com/nbmc1991",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-github-square","aria-hidden":"true"})}),Object(l.jsx)("a",{rel:"noopener noreferrer",href:"https://www.facebook.com/ameera91",target:"_blank",children:Object(l.jsx)("i",{className:"fa fa-facebook-square","aria-hidden":"true"})})]})]})]})})})}}]),c}(n.Component),d=(n.Component,function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Contact"})})}}]),c}(n.Component)),u=c(24),O=c(16);function x(){O.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(O.c.version,"/pdf.worker.js");var e=Object(n.useState)(null),t=Object(u.a)(e,2),c=(t[0],t[1]),r=Object(n.useState)(1),a=Object(u.a)(r,2),s=a[0],i=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main",children:Object(l.jsx)(O.a,{file:"file:///C:/Users/nbmc1/Downloads/Normaresumepdf.pdf",onLoadSuccess:function(e){var t=e.numPages;c(t),i(1)},children:Object(l.jsx)(O.b,{pageNumber:s})})})})}var p=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={activeTab:0},n}return Object(o.a)(c,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"hello world"})}):1===this.state.activeTab?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"NodeJS"})}):2===this.state.activeTab?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Express project goes here"})}):3===this.state.activeTab?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"MongoDb project goes here"})}):void 0}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"category-tabs",children:[Object(l.jsxs)(s.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0,children:[Object(l.jsx)(s.Tab,{children:"React"}),Object(l.jsx)(s.Tab,{children:"NodeJS"}),Object(l.jsx)(s.Tab,{children:"Express"}),Object(l.jsx)(s.Tab,{children:"MongoDb"})]}),Object(l.jsxs)("section",{className:"projects-grid",children:[Object(l.jsx)(s.Grid,{className:"project-grid",children:Object(l.jsx)(s.Cell,{col:12,children:Object(l.jsx)("div",{className:"content",children:this.toggleCategories()})})}),this.toggleCategories()]})]})}}]),c}(n.Component),m=c(6),f=function(){return Object(l.jsxs)(m.c,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(m.a,{path:"/aboutme",component:h}),Object(l.jsx)(m.a,{path:"/contact",component:d}),Object(l.jsx)(m.a,{path:"/projects",component:p}),Object(l.jsx)(m.a,{path:"/resume",component:x})]})},v=c(22);var g=function(){return Object(l.jsx)("div",{className:"demo-big-content",children:Object(l.jsxs)(s.Layout,{children:[Object(l.jsx)(s.Header,{className:"header-color",title:"Norma Cruz",scroll:!0,children:Object(l.jsxs)(s.Navigation,{children:[Object(l.jsx)(v.b,{to:"/aboutme",children:"About Me"}),Object(l.jsx)(v.b,{to:"/projects",children:"Projects"}),Object(l.jsx)(v.b,{to:"/resume",children:"Resume"}),Object(l.jsx)(v.b,{to:"/contact",children:"Contact"})]})}),Object(l.jsx)(s.Drawer,{title:"Norma Cruz",children:Object(l.jsxs)(s.Navigation,{children:[Object(l.jsx)("a",{href:"/aboutme",children:"About Me"}),Object(l.jsx)("a",{href:"/projects",children:"Projects"}),Object(l.jsx)("a",{href:"/resume",children:"Resume"}),Object(l.jsx)("a",{href:"/contact",children:"Contact"})]})}),Object(l.jsxs)(s.Content,{children:[Object(l.jsx)("div",{className:"page-content"}),Object(l.jsx)(f,{})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,148)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(145),c(146);a.a.render(Object(l.jsx)(v.a,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()},66:function(e,t,c){},67:function(e,t,c){}},[[147,1,2]]]);
//# sourceMappingURL=main.786499af.chunk.js.map