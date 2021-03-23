(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),s=(a(49),a(35)),o=a(36),u=a(44),l=a(42),d=(a(50),a(9)),j=a(39),O=a(3),p=a(11),h=a(38),b=a(43),m=a(2),f="GET_ITEMS",g="ADD_ITEM",v="DELETE_ITEM",E="ITEMS_LOADING",x="USER_LOADING",y="USER_LOADED",S="AUTH_ERROR",w="LOGIN_SUCCESS",_="LOGIN_FAIL",L="LOGOUT_SUCCESS",R="REGISTER_SUCCESS",A="REGISTER_FAIL",I="GET_ERRORS",C="CLEAR_ERRORS",T={items:[],loading:!1},k={msg:{},status:null,id:null},D={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},N=Object(p.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{items:t.payload,loading:!1});case v:return Object(m.a)(Object(m.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});case g:return Object(m.a)(Object(m.a)({},e),{},{items:[t.payload].concat(Object(b.a)(e.items))});case E:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case C:return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case y:return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case w:case R:return localStorage.setItem("token",t.payload.token),Object(m.a)(Object(m.a)(Object(m.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case S:case _:case L:case A:return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),G=[h.a],F=Object(p.e)(N,{},Object(p.d)(p.a.apply(void 0,G),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||p.d)),U=a(12),M=a.n(U),P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:I,payload:{msg:e,status:t,id:a}}},q=function(){return{type:C}},H=function(e){var t=e().auth.token,a={headers:{"Content-Type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},J=a(13),X=function(){return{type:E}},B=a(1);var V=Object(d.b)((function(e){return{item:e.item,auth:e.auth}}),{getItems:function(){return function(e){e(X()),M.a.get("/api/items").then((function(t){e({type:f,payload:t.data})}))}}})((function(e){var t=Object(n.useState)(""),a=Object(J.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){e.getItems(),e.auth.isAuthenticated&&r(e.auth.user.name)}),[e.auth]),Object(B.jsxs)("div",{children:[Object(B.jsx)("h3",{children:"Home"}),F.getState().auth.isAuthenticated&&Object(B.jsxs)("p",{children:["HELLO ",c]}),e.item.items.map((function(e){return Object(B.jsx)("p",{children:e.name})}))]})})),z=a(15),K=a(5),Q=a.n(K);var W=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var c=JSON.stringify({name:t,email:a,password:n});M.a.post("/api/users",c,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:R,payload:t.data})})).catch((function(t){e(P(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:A})}))}},clearErrors:q})((function(e){var t=Object(n.useState)({name:"",email:"",password:""}),a=Object(J.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(null),s=Object(J.a)(i,2),o=s[0],u=s[1];Q.a.bool,Q.a.object.isRequired,Q.a.func.isRequired,Q.a.func.isRequired,Object(n.useEffect)((function(){"REGISTER_FAIL"===e.error.id&&u(e.error.msg.msg)}),[e.error]);var l=function(e){console.log(e),r(Object(m.a)(Object(m.a)({},c),{},Object(z.a)({},e.target.name,e.target.value)))};return Object(B.jsxs)("div",{children:[o,Object(B.jsx)("input",{type:"text",onChange:l,value:c.name,name:"name",placeholder:"First and Last Name..."}),Object(B.jsx)("input",{type:"email",onChange:l,value:c.email,name:"email",placeholder:"Email..."}),Object(B.jsx)("input",{type:"password",onChange:l,value:c.password,name:"password",placeholder:"Password..."}),Object(B.jsx)("button",{onClick:function(t){t.preventDefault();var a={name:c.name,email:c.email,password:c.password};e.clearErrors(),e.register(a)},children:"Register"})]})}));var Y=Object(d.b)(null,{logout:function(){return window.location.pathname="/",{type:L}}})((function(e){return Q.a.func.isRequired,Object(B.jsx)(n.Fragment,{children:Object(B.jsx)("button",{onClick:e.logout,children:"Logout"})})}));var Z=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});M.a.post("/api/auth",n,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:w,payload:t.data})})).catch((function(t){e(P(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:_})}))}},clearErrors:q})((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(J.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(null),s=Object(J.a)(i,2),o=s[0],u=s[1];Q.a.bool,Q.a.object.isRequired,Q.a.func.isRequired,Q.a.func.isRequired,Object(n.useEffect)((function(){"LOGIN_FAIL"===e.error.id&&u(e.error.msg.msg)}),[e.error]);var l=function(e){console.log(e),r(Object(m.a)(Object(m.a)({},c),{},Object(z.a)({},e.target.name,e.target.value)))};return Object(B.jsxs)("div",{children:[o,Object(B.jsx)("input",{type:"email",onChange:l,value:c.email,name:"email",placeholder:"Email..."}),Object(B.jsx)("input",{type:"password",onChange:l,value:c.password,name:"password",placeholder:"Password..."}),Object(B.jsx)("button",{onClick:function(t){t.preventDefault();var a={email:c.email,password:c.password};e.clearErrors(),e.login(a)},children:"Login"})]})}));var $=function(){return F.getState().auth.isAuthenticated?Object(B.jsx)("div",{children:"Add Item"}):Object(B.jsx)("div",{children:"Please Sign-in"})};var ee=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){return console.log(e),Object(B.jsxs)("div",{children:[Object(B.jsx)("img",{}),Object(B.jsxs)("ul",{children:[Object(B.jsx)("li",{children:"Home"}),e.auth.isAuthenticated&&Object(B.jsx)("li",{children:"Profile"}),e.auth.isAuthenticated&&Object(B.jsx)("li",{children:"Add"}),e.auth.isAuthenticated&&Object(B.jsx)("li",{children:Object(B.jsx)(Y,{})}),!1===e.auth.isAuthenticated&&Object(B.jsx)("li",{children:Object(B.jsx)(Z,{})})]})]})})),te=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){F.dispatch((function(e,t){e({type:x}),M.a.get("/api/auth/user",H(t)).then((function(t){e({type:y,payload:t.data})})).catch((function(t){e(P(t.response.data,t.response.status)),e({type:S})}))}))}},{key:"render",value:function(){return Object(B.jsxs)(d.a,{store:F,children:[Object(B.jsx)(ee,{}),Object(B.jsx)("div",{className:"App",children:Object(B.jsxs)(j.a,{children:[Object(B.jsx)(O.a,{exact:!0,path:"/",children:Object(B.jsx)(V,{})}),Object(B.jsx)(O.a,{path:"/register",children:Object(B.jsx)(W,{})}),Object(B.jsx)(O.a,{path:"/login",children:Object(B.jsx)(Z,{})}),Object(B.jsx)(O.a,{path:"/add",children:Object(B.jsx)($,{})})]})})]})}}]),a}(n.Component),ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};M.a.defaults.baseURL="http://3.133.13.90:8080/",M.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",i.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(te,{})}),document.getElementById("root")),ae()}},[[82,1,2]]]);
//# sourceMappingURL=main.db102c79.chunk.js.map