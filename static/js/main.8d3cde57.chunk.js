(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),s=n.n(o),r=n(1),l=n(4),i=n(5),d=n(8),u=n(7),m=n(6),p=n.n(m),h=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=h.map((function(e,t){return{id:t+1,name:e}}));var g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:["Jam"]},e.selectProduct=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(r.a)(e.selectedGoods),[t])}}))},e.undoSelectedProduct=function(t){e.setState((function(e){return{selectedGoods:Object(r.a)(e.selectedGoods.filter((function(e){return t!==e})))}}))},e.resetSelectedThings=function(){e.setState({selectedGoods:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e,t=this.state.selectedGoods,n=this.selectProduct,a=this.resetSelectedThings,o=this.undoSelectedProduct;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app__title"},h.length?"".concat(0===(e=t).length?"No goods":1===e.length?"".concat(e[0]," is"):"".concat(e.slice(0,-1).join(", "),"\n      and ").concat(e.slice(-1)," are")," selected"):"No goods selected"),!t.length||c.a.createElement("button",{type:"button",className:"app__reset",onClick:a},"X"),h.length&&c.a.createElement("ul",{className:"app__list"},f.map((function(e){return c.a.createElement("li",{className:p()("app__item",{"app__item--active":t.includes(e.name)}),key:e.id},e.name,c.a.createElement("button",{className:"app__add",type:"button",hidden:t.includes(e.name),onClick:function(){return n(e.name)}},"Add"),c.a.createElement("button",{className:"app__remove",type:"button",onClick:function(){return o(e.name)}},"Remove"))}))))}}]),n}(a.Component);s.a.render(c.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8d3cde57.chunk.js.map