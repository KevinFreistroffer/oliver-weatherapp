(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){e.exports=a(75)},50:function(e,t,a){},55:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),i=a.n(c),o=(a(50),a(40)),l=a(8),s=a(10),u=a(11),h=(a(55),a(32)),m=function(e){return r.a.createElement("div",{id:"home",className:"view",styles:h},r.a.createElement("h1",null,"Welcome to my ",r.a.createElement("br",null)," Weather App"),r.a.createElement("button",{onClick:function(){return t="search",void e.history.push("/".concat(t));var t}},"Begin Searching"))};m.displayName="Home";var d=m,p=a(9),E=a(33),f=a(34),b=a(42),g=a(35),S=a(43),v=a(44),w=function(e){var t=e.icon,a=e.desc,n=e.temp;return r.a.createElement("div",{className:"weather"},r.a.createElement("img",{src:t}),r.a.createElement("div",{className:"temp-desc-container"},r.a.createElement("p",{className:"desc"},a),r.a.createElement("p",{className:"temp"},n)))};w.displayName="Weather";var y=w,O=function(e){var t=e.term,a=e.handleOnChange,c=e.handleOnSubmit,i=e.isSearching,o=e.data,l=e.error;Object(v.a)(e,["term","handleOnChange","handleOnSubmit","isSearching","data","error"]);return Object(n.useEffect)(function(){console.log(o,l)}),r.a.createElement(n.Fragment,null,r.a.createElement("form",{name:"search-form"},r.a.createElement("label",{htmlFor:"search"},"Search by a city",r.a.createElement("input",{id:"search",type:"text",name:"search-term",value:t,onChange:a,placeholder:"Search by city"})),r.a.createElement("button",{type:"button",onClick:c},i?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,"Find the weather"))))};O.displayName="Form";var C=Object(u.b)(function(e){return console.log(e),{isSearching:e.weather.isSearching,data:e.weather.data,error:e.weather.error}},null)(O),j=a(18),N=a.n(j),A=a(36),H=a(37),R=a.n(H),k=function(e){return{type:"SEARCH_SUCCESS",payload:{data:e}}},F=function(e){return{type:"SEARCH_FAILURE",payload:{error:"An error occured fetching the weather"}}},W=a(38),_=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).handleOnChange=function(e){e.persist(),a.setState(function(t){return{term:e.target.value}})},a.handleOnSubmit=function(){a.props.beginSearch(),a.props.search(a.state.term)},a.state={term:""},a}return Object(S.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"search",className:"view",styles:W},r.a.createElement("h1",null,"Search"),r.a.createElement(C,{term:this.state.term,handleOnChange:this.handleOnChange,handleOnSubmit:this.handleOnSubmit}),this.props.data&&r.a.createElement("div",{className:"todays-weather"},r.a.createElement("h1",null,"Todays Weather"),r.a.createElement(y,{icon:"http://openweathermap.org/img/w/".concat(this.props.data.weather[0].icon,".png"),temp:this.props.data.main.temp,desc:this.props.data.weather[0].main})),"`")}}]),t}(n.Component);_.displayName="Search";var x=Object(u.b)(function(e){return Object(p.a)({},e,{data:e.weather.data})},function(e){return{beginSearch:function(){return e({type:"BEGIN_SEARCH"})},search:function(t){return e(function(e){return function(){var t=Object(A.a)(N.a.mark(function t(a,n){var r,c,i;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.get("http://api.openweathermap.org/data/2.5/weather?units=imperial&q=".concat(e,"&appid=b95eb244ea12e25f51b8c6b56e22eec3"));case 2:return r=t.sent,c=r.status,i=r.data,a(200===c?k(i):F()),t.abrupt("return",a({type:"SEARCH"}));case 7:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(t))},searchSuccess:function(){return e(k())},searchFailure:function(){return e(F())}}})(_),B=function(e){var t=e.title;return r.a.createElement("header",null,t)};B.displayName="Header";var I=B,U={isSearching:!1,data:null,error:null},L=Object(s.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"BEGIN_SEARCH":return Object(p.a)({},e,{isSearching:!0});case"SEARCH":return Object(p.a)({},e);case"SEARCH_SUCCESS":return Object(p.a)({},e,{isSearching:!1,data:t.payload.data});case"SEARCH_FAILURE":return Object(p.a)({},e,{isSearching:!1,error:t.payload.error});default:return Object(p.a)({},e)}}}),G=a(39),J=Object(s.d)(L,Object(s.a)(G.a)),q=function(){return r.a.createElement(u.a,{store:J},r.a.createElement("div",{className:"App"},r.a.createElement(I,{title:"Weather App"}),r.a.createElement(o.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:d}),r.a.createElement(l.a,{path:"/search",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.b8212d15.chunk.js.map