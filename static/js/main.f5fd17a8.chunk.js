(this.webpackJsonparoma=this.webpackJsonparoma||[]).push([[0],{235:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(44),l=n.n(r),c=(n(90),n(22)),o=n(23),s=n(25),u=n(24),m=n(26),d=(n(91),n(92),function(e){return i.a.createElement("div",{className:"NavBar"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#homepage"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{href:"#wines"},"Wines")),i.a.createElement("li",null,i.a.createElement("a",{href:"#mission"},"Mission")),i.a.createElement("li",null,i.a.createElement("a",{href:"#contacts"},"Contacts"))))}),p=(n(93),n(84)),h=n.n(p),E=function(e){return i.a.createElement("div",{className:"Homepage",id:"homepage"},i.a.createElement("div",{className:"HomepageColored"},i.a.createElement(d,{positions:e.positions})),i.a.createElement("div",{className:"HomeText"},i.a.createElement("h1",{className:"FirstLine"},i.a.createElement("i",null,"We ",i.a.createElement("span",{style:{fontSize:"4.7rem"}},"Believe")," ",i.a.createElement("span",{style:{fontSize:"4rem"}},"in"))),i.a.createElement("div",{className:"LogoBox"},i.a.createElement("img",{alt:"logoimg",src:h.a})),i.a.createElement("h1",{className:"ThirdLine"},i.a.createElement("i",null,"Experiences"))))},f=(n(94),function(){return i.a.createElement("div",{className:"Wines",id:"wines"},i.a.createElement("h2",null,"Wines"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}),g=(n(95),function(){return i.a.createElement("div",{className:"BottleImage"},i.a.createElement("img",{src:"Bottle of wine"}))}),v=(n(96),function(){return i.a.createElement("div",{className:"Mission",id:"mission"},i.a.createElement("div",{className:"MissionBox"},i.a.createElement("h3",null,"Mission"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}),b=(n(97),n(98),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={numberOfWords:0},n.textHasChanged=function(e){console.log(e.target.value),n.setState({numberOfWords:e.target.value.length})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("rerendered"),i.a.createElement("div",{className:"Contacts",id:"contacts"},i.a.createElement("div",{className:"Inputs"},i.a.createElement("input",{type:"text",placeholder:"Name"}),i.a.createElement("input",{type:"text",placeholder:"Company"}),i.a.createElement("input",{type:"email",placeholder:"E-mail"})),i.a.createElement("div",{className:"Form"},i.a.createElement("textarea",{onChange:function(t){return e.textHasChanged(t)},maxLength:500,placeholder:"Message..."}),i.a.createElement("p",null,this.state.numberOfWords,"/500"),i.a.createElement("button",null,"Submit")))}}]),t}(a.Component)),O=(n(235),function(){return i.a.createElement("div",{className:"Arrow"})}),N=(n(236),n(237),n(238),function(e){return e.show?i.a.createElement("div",{className:"Backdrop Obscuring",onClick:e.changeState}):i.a.createElement("div",{className:"Backdrop DeObscuring ObBackground"})}),C=(n(239),function(e){return i.a.createElement("div",{className:"SideMenuItem",style:e.isFirst?null:{borderTop:"1px solid #297876"}},i.a.createElement("a",{href:e.passedHref,onClick:e.closeMenu},e.children))}),w=function(e){var t=["Drawer","Closed"];return e.isOpen&&(t=["Drawer","Open"]),i.a.createElement("div",{className:t.join(" ")},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(C,{closeMenu:e.changeState,isFirst:!0,passedHref:"#homepage"},"Home")),i.a.createElement("li",null,i.a.createElement(C,{closeMenu:e.changeState,passedHref:"#wines"},"Wines")),i.a.createElement("li",null,i.a.createElement(C,{closeMenu:e.changeState,passedHref:"#mission"},"Mission")),i.a.createElement("li",null,i.a.createElement(C,{closeMenu:e.changeState,passedHref:"#contacts"},"Contacts"))))},y=(n(240),function(e){return console.log(e.isOpen),i.a.createElement("div",{className:"Container",onClick:e.changeState},i.a.createElement("div",{className:e.isOpen?"change1 ChangeBright":"ChangeDark"}),i.a.createElement("div",{className:e.isOpen?"change2 ChangeBright":"ChangeDark"}),i.a.createElement("div",{className:e.isOpen?"change3 ChangeBright":"ChangeDark"}))}),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={isMenuOpen:!1},n.sideMenuStateChanged=function(){n.setState({isMenuOpen:!n.state.isMenuOpen})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll('a[href^="#"]'),t=!0,n=!1,a=void 0;try{for(var i,r=function(){var e=i.value;e.addEventListener("click",(function(t){var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"}),window.history.pushState(null,null,n),t.preventDefault()}))},l=e[Symbol.iterator]();!(t=(i=l.next()).done);t=!0)r()}catch(c){n=!0,a=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(w,{changeState:function(){return e.sideMenuStateChanged()},isOpen:this.state.isMenuOpen,positions:this.state.positions}),i.a.createElement(N,{changeState:function(){return e.sideMenuStateChanged()},show:this.state.isMenuOpen}),i.a.createElement(y,{changeState:function(){return e.sideMenuStateChanged()},isOpen:this.state.isMenuOpen}),i.a.createElement(E,{positions:this.state.positions}),i.a.createElement(O,null),i.a.createElement(f,null),i.a.createElement(g,null),i.a.createElement(v,null),i.a.createElement(O,null),i.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},84:function(e,t,n){e.exports=n.p+"static/media/white_logo.05432b8e.png"},85:function(e,t,n){e.exports=n(241)},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.f5fd17a8.chunk.js.map