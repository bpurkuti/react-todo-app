(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),i=n.n(o),l=n(7),r=n.n(l),d=(n(15),n(16),n(6)),s=n(9),u=n(2),j=(n(17),function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),i=n[0],l=n[1];return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addTodo(i,Math.random().toFixed(5),!1),l("")},children:[Object(c.jsx)("input",{className:"search_bar",type:"text",placeholder:"Your Todos",value:i,onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("button",{className:"search_btn",type:"submit",children:" Add"})]})}),a=n(8),b=function(e){return Object(c.jsx)("div",{className:"todo_container",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{className:e.completed?"complete":"",onClick:function(){return e.toggleComplete(e.id)},children:e.text}),Object(c.jsx)("button",{className:"todo_btns",onClick:function(){return e.toggleComplete(e.id)},children:" Complete"}),Object(c.jsx)("button",{className:"todo_btns",onClick:function(){return e.handleRemove(e.id)},children:" Remove "})]})})},p=function(){var e=Object(o.useState)(a),t=Object(u.a)(e,2),n=t[0],i=t[1],l=Object(o.useState)("Show All"),r=Object(u.a)(l,2),p=r[0],m=r[1],h=Object(o.useState)(!0),f=Object(u.a)(h,2),O=f[0],x=f[1],v=function(e){i((function(t){return t.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t}))}))},g=function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{addTodo:function(e,t,n){if(e.length){var c={text:e,id:t,completed:n};i((function(e){return[c].concat(Object(s.a)(e))}))}}}),Object(c.jsxs)("div",{className:"filter_name",children:[" Todos Left: ",n.filter((function(e){return!e.completed})).length," "]}),Object(c.jsxs)("div",{className:"btns_1",children:[Object(c.jsx)("button",{onClick:function(){return m("Show All")},children:" Show All "}),Object(c.jsx)("button",{onClick:function(){return m("Show Active")},children:" Show Active "}),Object(c.jsx)("button",{onClick:function(){return m("Show Complete")},children:" Show Completed "})]}),Object(c.jsxs)("div",{className:"btns_2",children:[n.length>0?Object(c.jsx)("button",{onClick:function(){n.map((function(e){return e.completed?"":v(e.id)}))},children:" Complete All "}):"",n.filter((function(e){return e.completed})).length>0?Object(c.jsx)("button",{onClick:function(){n.map((function(e){return e.completed?g(e.id):""}))},children:" Remove Completed "}):""]}),Object(c.jsxs)("h4",{className:"filter_name",children:[" Filter: ",p]}),"Show All"===p?n.map((function(e){return Object(c.jsx)(b,{id:e.id,completed:e.completed,toggleComplete:v,handleRemove:g,text:e.text},e.id)})):"Show Active"===p?n.filter((function(e){return!e.completed})).map((function(e){return Object(c.jsx)(b,{id:e.id,completed:e.completed,toggleComplete:v,handleRemove:g,text:e.text},e.id)})):n.filter((function(e){return e.completed})).map((function(e){return Object(c.jsx)(b,{id:e.id,completed:e.completed,toggleComplete:v,handleRemove:g,text:e.text},e.id)})),Object(c.jsxs)("div",{children:["Json Representation",Object(c.jsx)("input",{type:"checkbox",onClick:function(){return x(!O)},checked:O,defaultChecked:!0})]}),O?Object(c.jsx)("div",{className:"show_json",children:"Show All"===p?Object(c.jsx)("p",{id:"json",children:Object(c.jsxs)("pre",{children:[" ",JSON.stringify(n,null,2)," "]})}):"Show Active"===p?Object(c.jsx)("p",{id:"json",children:Object(c.jsxs)("pre",{children:[" ",JSON.stringify(n.filter((function(e){return!e.completed})),null,2)," "]})}):Object(c.jsx)("p",{id:"json",children:Object(c.jsxs)("pre",{children:[" ",JSON.stringify(n.filter((function(e){return e.completed})),null,2)," "]})})}):""]})};var m=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),o(e),i(e),l(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),h()},8:function(e){e.exports=JSON.parse('[{"text":"Walk like an Egyptian","id":"1","completed":false},{"text":"Be Cool","id":"2","completed":true}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.b7ae0d04.chunk.js.map