(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){e.exports={navbar:"NavBar_navbar__3RIkw",logo:"NavBar_logo__XUnK9"}},169:function(e,t,a){},170:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(37),s=a.n(r),c=(a(169),a(138)),o=a(139),l=a(152),u=a(150),d=(a(170),a(18)),j=a(38),b=a(142),A="USER_LOADING",h="USER_LOADED",O="AUTH_ERROR",p="LOGIN_SUCCESS",m="LOGIN_FAIL",f="LOGOUT_SUCCESS",g="REGISTER_SUCCESS",v="REGISTER_FAIL",x="GET_ERRORS",y="CLEAR_ERRORS",N={msg:{},status:null,id:null},C=a(7),P={token:localStorage.getItem("token"),isAuthenticated:null,isLoading:!1,user:null},_=Object(j.c)({error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case y:return{msg:{},status:null,id:null};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0});case h:return Object(C.a)(Object(C.a)({},e),{},{isAuthenticated:!0,isLoading:!1,user:t.payload});case p:case g:return localStorage.setItem("token",t.payload.token),Object(C.a)(Object(C.a)(Object(C.a)({},e),t.payload),{},{isAuthenticated:!0,isLoading:!1});case O:case m:case f:case v:return localStorage.removeItem("token"),Object(C.a)(Object(C.a)({},e),{},{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}}}),w=[b.a],S=Object(j.e)(_,{},Object(j.d)(j.a.apply(void 0,w),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||j.d)),I=a(19),q=a.n(I),L=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:x,payload:{msg:e,status:t,id:a}}},R=function(){return{type:y}},T=function(){return function(e,t){e({type:A}),q.a.get("/api/auth/user",U(t)).then((function(t){e({type:h,payload:t.data})})).catch((function(t){e(L(t.response.data,t.response.status)),e({type:O})}))}},U=function(e){var t=e().auth.token,a={headers:{"Content-Type":"application/json"}};return t&&(a.headers["x-auth-token"]=t),a},z=a(6),V=a.n(z),E=a(1);var D=Object(d.b)(null,{logout:function(){return window.location.pathname="/",{type:f}}})((function(e){return V.a.func.isRequired,Object(E.jsx)(n.Fragment,{children:Object(E.jsx)("button",{onClick:e.logout,children:"Logout"})})})),X="data:image/png;base64,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",F=a(119),G=a.n(F),H=a(123);var W=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){return Object(E.jsxs)("div",{className:G.a.navbar,children:[Object(E.jsx)("img",{src:X,className:G.a.logo}),Object(E.jsxs)("ul",{children:[e.auth.isAuthenticated&&Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/#/",children:Object(E.jsx)(D,{})})}),e.auth.isAuthenticated&&Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/#/profile",children:Object(E.jsx)(H.a,{name:"user",size:"big"})})}),!e.auth.isAuthenticated&&Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/#/login",children:Object(E.jsx)("button",{children:"Login"})})}),Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"/#/",children:Object(E.jsx)(H.a,{name:"home",size:"big"})})})]})]})})),k=a(148),Z=a(12),J=a(11),M=a(86),B=a.n(M),K=a(214),Q=a(145),Y=a.n(Q),$=["t-shirts","sweatshirts","jackets","pants","shorts","long sleeve shirt","gloves","shoes"],ee=[];$.forEach((function(e){ee.push({key:e,text:Y.a.startCase(e),value:e})})),$=ee;var te=a(149),ae=function(e){var t="";return[].slice.call(new Uint8Array(e)).forEach((function(e){return t+=String.fromCharCode(e)})),window.btoa(t)},ne=a(28),ie=a.n(ne);var re=function(e){var t=e;return Object(E.jsx)("div",{className:e.big?ie.a.overlayBig:ie.a.overlaySmall,children:Object(E.jsxs)("div",{className:ie.a.overlayContent,children:[Object(E.jsxs)("p",{children:["Rating: ",parseInt(t.ratings.reduce((function(e,t){return e+t}),0)/t.ratings.length),"/5"]}),Object(E.jsxs)("a",{href:t.url,children:[Object(E.jsx)(H.a,{name:"linkify"}),"Check it out!"]}),"profile"===e.page&&Object(E.jsx)("p",{children:Object(E.jsx)(se,{id:t._id,handleDelete:e.handleDelete})}),"home"===e.page&&Object(E.jsx)("p",{extra:!0,children:Object(E.jsx)(ce,Object(C.a)({},t))})]})})},se=function(e){return Object(E.jsx)("button",{onClick:e.handleDelete.bind(null,e.id),children:"Delete Item"})},ce=function(e){var t=Object(n.useState)(),a=Object(J.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(!1),c=Object(J.a)(s,2),o=c[0],l=c[1];return e.user?e.user.rated_items.includes(e._id)||o?Object(E.jsx)("p",{children:"Thanks for rating this item!"}):Object(E.jsxs)("p",{children:["Rate this Item: ",Object(E.jsx)("input",{className:ie.a.ratingInput,min:0,max:5,type:"number",name:"rating",onChange:function(e){r(e.target.value)}}),Object(E.jsx)("button",{onClick:function(){q.a.post("/api/items/rate",{userID:e.user._id,itemID:e._id,rating:i}).then((function(e){e&&(S.dispatch(T()),l(!0))})).catch((function(e){console.error(e)}))},children:"Rate"})]}):Object(E.jsxs)("p",{children:[Object(E.jsx)("a",{href:"/#/login",children:"Login "}),"to rate this item"]})},oe=function(e){var t=Object(n.useState)(!1),a=Object(J.a)(t,2),i=a[0],r=a[1],s=function(e){console.log(),r(!0)},c=function(e){r(!1)},o=e;return e.big&&e.right?Object(E.jsx)("div",{className:ie.a.bigImageRight,children:Object(E.jsxs)("div",{className:ie.a.photoContainer,onMouseEnter:s,onMouseLeave:c,children:[i&&Object(E.jsx)(re,Object(C.a)(Object(C.a)({},o),{},{big:!0})),Object(E.jsx)(te.a,{className:ie.a.bigPhoto,src:"data:image/*;base64,".concat(ae(o.image.data.data)),wrapped:!0,ui:!1})]})}):e.big&&e.left?Object(E.jsx)("div",{className:ie.a.bigImageLeft,children:Object(E.jsxs)("div",{className:ie.a.photoContainer,onMouseEnter:s,onMouseLeave:c,children:[i&&Object(E.jsx)(re,Object(C.a)(Object(C.a)({},o),{},{big:!0})),Object(E.jsx)(te.a,{className:ie.a.bigPhoto,src:"data:image/*;base64,".concat(ae(o.image.data.data)),wrapped:!0,ui:!1})]})}):Object(E.jsxs)("div",{className:ie.a.photoContainer,onMouseEnter:s,onMouseLeave:c,children:[i&&Object(E.jsx)(re,Object(C.a)({},o)),Object(E.jsx)(te.a,{className:ie.a.photo,src:"data:image/*;base64,".concat(ae(o.image.data.data)),wrapped:!0,ui:!1})]})};var le=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=Object(n.useState)(""),a=Object(J.a)(t,2),i=(a[0],a[1],Object(n.useState)()),r=Object(J.a)(i,2),s=r[0],c=r[1],o=Object(n.useState)(),l=Object(J.a)(o,2),u=l[0],d=l[1],j=Object(n.useState)(!1),b=Object(J.a)(j,2);return b[0],b[1],Object(n.useEffect)((function(){q.a.get("/api/items/").then((function(e){c(e.data)})),e.auth.isAuthenticated}),[e.auth]),Object(n.useEffect)((function(){q.a.get("/api/items/",{params:{category:u}}).then((function(e){c(e.data)}))}),[u]),Object(E.jsxs)("div",{className:B.a.homeContainer,children:[e.auth.user&&Object(E.jsxs)("h2",{children:["Welcome ",e.auth.user.name]}),Object(E.jsx)("div",{className:B.a.dropdownContainer,children:Object(E.jsx)(K.a,{style:{height:"20px"},required:!0,options:$,name:"category",selection:!0,search:!0,placeholder:"I'm looking for...",onChange:function(e,t){d(t.value)}})}),Object(E.jsx)("div",{className:B.a.profileContainer,children:s&&s.map((function(t){return Object(E.jsx)("div",{className:B.a.cardContainer,children:t.map((function(t,a){return 2===a?Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"home",user:e.auth.user,big:!0,right:!0})):10===a?Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"home",user:e.auth.user,left:!0,big:!0})):Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"home",user:e.auth.user}))}))})}))})]})})),ue=a(42),de=a(147),je=a.n(de)()(),be=a(36),Ae=a.n(be),he=a(215);var Oe=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.name,a=e.email,n=e.password;return function(e){var i=JSON.stringify({name:t,email:a,password:n});q.a.post("/api/users",i,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:g,payload:t.data})})).catch((function(t){e(L(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:v})}))}},clearErrors:R})((function(e){var t=Object(n.useState)({name:"",email:"",password:""}),a=Object(J.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(null),c=Object(J.a)(s,2),o=c[0],l=c[1];V.a.bool,V.a.object.isRequired,V.a.func.isRequired,V.a.func.isRequired,Object(n.useEffect)((function(){"REGISTER_FAIL"===e.error.id&&l(e.error.msg.msg)}),[e.error]),Object(n.useEffect)((function(){e.isAuthenticated&&je.push("/")}),[e.isAuthenticated]);var u=function(e){r(Object(C.a)(Object(C.a)({},i),{},Object(ue.a)({},e.target.name,e.target.value)))};return Object(E.jsxs)("div",{className:Ae.a.registerConatiner,children:[Object(E.jsx)("img",{className:Ae.a.logo,src:X}),o&&Object(E.jsx)(he.a,{negative:!0,className:Ae.a.message,children:Object(E.jsx)(he.a.Header,{children:o})}),Object(E.jsx)("input",{type:"text",onChange:u,value:i.name,name:"name",placeholder:"First and Last Name..."}),Object(E.jsx)("input",{type:"email",onChange:u,value:i.email,name:"email",placeholder:"Email..."}),Object(E.jsx)("input",{type:"password",onChange:u,value:i.password,name:"password",placeholder:"Password..."}),Object(E.jsx)("button",{className:Ae.a.submit,onClick:function(t){t.preventDefault();var a={name:i.name,email:i.email,password:i.password};e.clearErrors(),e.register(a)},children:"Register"}),Object(E.jsxs)("p",{children:["Have An Account? ",Object(E.jsx)("a",{href:"/#/login",children:"Login."})]})]})}));var pe=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{login:function(e){var t=e.email,a=e.password;return function(e){var n=JSON.stringify({email:t,password:a});q.a.post("/api/auth",n,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:p,payload:t.data})})).catch((function(t){e(L(t.response.data,t.response.status,"LOGIN_FAIL")),e({type:m})}))}},clearErrors:R})((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(J.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(null),c=Object(J.a)(s,2),o=c[0],l=c[1];V.a.bool,V.a.object.isRequired,V.a.func.isRequired,V.a.func.isRequired,Object(n.useEffect)((function(){"LOGIN_FAIL"===e.error.id&&l(e.error.msg.msg)}),[e.error]),Object(n.useEffect)((function(){e.isAuthenticated&&je.push(je.location.pathname)}),[e.isAuthenticated]);var u=function(e){r(Object(C.a)(Object(C.a)({},i),{},Object(ue.a)({},e.target.name,e.target.value)))},d=function(t){t.preventDefault();var a={email:i.email,password:i.password};e.clearErrors(),e.login(a),setTimeout(void(e.isAuthenticated&&je.push("/")),1e3)};return Object(E.jsxs)("div",{className:Ae.a.loginContainer,children:[Object(E.jsx)("img",{className:Ae.a.logo,src:X}),o&&Object(E.jsx)(he.a,{negative:!0,className:Ae.a.message,children:Object(E.jsx)(he.a.Header,{children:o})}),Object(E.jsx)("input",{type:"email",onChange:u,value:i.email,name:"email",placeholder:"Email..."}),Object(E.jsx)("input",{type:"password",onChange:u,value:i.password,name:"password",placeholder:"Password...",onKeyPress:function(e){"Enter"===e.key&&d(e)}}),Object(E.jsx)("button",{className:Ae.a.submit,onClick:d,children:"Login"}),Object(E.jsxs)("p",{children:["Don't have an account? ",Object(E.jsx)("a",{href:"/#/register",children:"Register Here."})]})]})})),me=a(22),fe=a.n(me);V.a.object.isRequired;var ge=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=Object(n.useState)(),a=Object(J.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(),c=Object(J.a)(s,2),o=c[0],l=c[1],u=Object(n.useState)(),d=Object(J.a)(u,2),j=d[0],b=d[1],A=Object(n.useState)(),h=Object(J.a)(A,2),O=h[0],p=h[1],m=Object(n.useState)(),f=Object(J.a)(m,2),g=f[0],v=f[1];Object(n.useEffect)((function(){r(e.auth.user)}),[e.auth]);var x=function(e){b(Object(C.a)(Object(C.a)({},j),{},Object(ue.a)({},e.target.name,e.target.value)))};return e.auth.isAuthenticated?Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(i);var t=new FormData;t.append("image",o),t.append("values",JSON.stringify(j)),console.log(i._id),t.append("user",i._id),j.url&&j.name&&j.category&&j.rating&&o?q.a.post("/api/items/add",t,U(S.getState)).then((function(e){e&&(S.dispatch(T()),window.scroll(0,0),p("Success!"))})).catch((function(e){console.error(e)})):(window.scroll(0,0),p("Failed: Please Fill Out All Feilds Correctly"))},className:fe.a.addContainer,children:[Object(E.jsx)("h3",{style:{marginTop:"1%"},children:"Add New Item"}),O&&Object(E.jsx)(he.a,{style:{height:"100%",width:"100%",margin:"auto auto"},negative:O.includes("Failed"),positive:O.includes("Success"),className:fe.a.message,children:Object(E.jsx)(he.a.Header,{children:O})}),Object(E.jsx)("div",{className:fe.a.imageContainer,children:Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:"Upload an Image of the Item"}),Object(E.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0].name.split(".")[1];if("jpg"==t||"jpeg"==t||"png"==t||"PNG"===t){var a=e.target.files[0];v(URL.createObjectURL(a)),l(a)}else p("Failed: Only image files are allowed!")}}),Object(E.jsx)("img",{src:g,className:fe.a.image})]})}),Object(E.jsxs)("div",{className:fe.a.infoContainer,children:[Object(E.jsx)("input",{className:fe.a.inputs,required:!0,type:"url",name:"url",placeholder:"Link to item",onChange:x}),Object(E.jsx)("input",{className:fe.a.inputs,required:!0,type:"text",name:"name",placeholder:"Give this item a name",onChange:x}),Object(E.jsx)(K.a,{className:fe.a.inputs,required:!0,options:$,name:"category",selection:!0,search:!0,placeholder:"Select Category",onChange:function(e,t){t.target=t,x(t)}}),Object(E.jsx)("input",{className:fe.a.inputs,required:!0,type:"number",name:"rating",min:0,max:5,placeholder:"Give this item a rating (out of 5)",onChange:x}),Object(E.jsx)("button",{type:"submit",children:"Submit"})]})]}):Object(E.jsx)("div",{children:"Please Login-in"})}));var ve=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){var t=Object(n.useState)(),a=Object(J.a)(t,2),i=a[0],r=a[1];Object(n.useEffect)((function(){q.a.get("/api/items/",{params:{user:e.auth.user}}).then((function(e){r(e.data)}))}),[e.auth]);var s=function(t){q.a.post("api/items/delete",{id:t,user:e.auth.user},U(S.getState)).then((function(e){r(e.data)}))};return Object(E.jsxs)("div",{className:fe.a.container,children:[Object(E.jsx)("button",{onClick:function(){je.push("/add")},className:fe.a.add,children:"Add Item"}),Object(E.jsx)("div",{className:fe.a.profileContainer,children:i&&i.map((function(t){return Object(E.jsx)("div",{className:fe.a.cardContainer,children:t.map((function(t,a){return 2===a?Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"profile",user:e.auth.user,big:!0,right:!0,handleDelete:s})):10===a?Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"profile",user:e.auth.user,left:!0,big:!0,handleDelete:s})):Object(E.jsx)(oe,Object(C.a)(Object(C.a)({},t),{},{page:"profile",user:e.auth.user,handleDelete:s}))}))})}))})]})})),xe={Home:le,Register:Oe,Login:pe,AddItem:ge,Profile:ve};var ye=function(){return Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:"Oh No! The page you are looking for cannot be found."})})},Ne=function(e){if(e.auth.isAuthenticated){var t=xe[e.component];return Object(E.jsx)(t,{})}return Object(E.jsx)(Z.a,{to:"/login"})},Ce=Object(d.b)((function(e){return{auth:e.auth}}),null)((function(e){return Object(E.jsx)(k.a,{children:Object(E.jsxs)(Z.d,{children:[Object(E.jsx)(Z.b,{exact:!0,path:"/",children:Object(E.jsx)(le,{})}),Object(E.jsx)(Z.b,{exact:!0,path:"/register",children:Object(E.jsx)(Oe,{})}),Object(E.jsx)(Z.b,{exact:!0,path:"/login",children:Object(E.jsx)(pe,{})}),Object(E.jsx)(Z.b,{exact:!0,path:"/add",children:Object(E.jsx)(Ne,Object(C.a)(Object(C.a)({},e),{},{component:"AddItem"}))}),Object(E.jsx)(Z.b,{exact:!0,path:"/profile",children:Object(E.jsx)(Ne,Object(C.a)(Object(C.a)({},e),{},{component:"Profile"}))}),Object(E.jsx)(Z.b,{path:"*",component:ye})]})})})),Pe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){S.dispatch(T())}},{key:"render",value:function(){return Object(E.jsxs)(d.a,{store:S,children:[Object(E.jsx)(W,{}),Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(Ce,{})})]})}}]),a}(n.Component),_e=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};q.a.defaults.baseURL="http://18.218.174.222:80",q.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(Pe,{})}),document.getElementById("root")),_e()},22:function(e,t,a){e.exports={profileContainer:"Profile_profileContainer__2HsQe",container:"Profile_container__2R-rH",cardContainer:"Profile_cardContainer__3DXIp",itemsContainer:"Profile_itemsContainer__3sBjU",item:"Profile_item__6iQbI",infoContainer:"Profile_infoContainer__pmqLT",imageContainer:"Profile_imageContainer__3tx61",inputs:"Profile_inputs__3Wlyg",image:"Profile_image__12c9q",addContainer:"Profile_addContainer__2INWp"}},28:function(e,t,a){e.exports={bigImageRight:"ItemCard_bigImageRight__3v6k1",photo:"ItemCard_photo__1xvCt",photoContainer:"ItemCard_photoContainer__2YGSZ",bigImageLeft:"ItemCard_bigImageLeft__2afIT",bigPhoto:"ItemCard_bigPhoto__32QP1",overlaySmall:"ItemCard_overlaySmall__9eesr",overlayBig:"ItemCard_overlayBig__Jp9Oy",overlayContent:"ItemCard_overlayContent__ixt9B",ratingInput:"ItemCard_ratingInput__3t1UJ"}},36:function(e,t,a){e.exports={loginContainer:"Auth_loginContainer__2mR1P",logo:"Auth_logo__zBB9I",message:"Auth_message__2xvBR",submit:"Auth_submit__2_Ahx",registerConatiner:"Auth_registerConatiner__3aoUu"}},86:function(e,t,a){e.exports={homeContainer:"Home_homeContainer__1W0nM",profileContainer:"Home_profileContainer__upKMo",cardContainer:"Home_cardContainer__39Lnb",itemsContainer:"Home_itemsContainer__3c73a",item:"Home_item__3b6ab",inputs:"Home_inputs__1Yvf8",dropdownContainer:"Home_dropdownContainer__3NmHU"}}},[[205,1,2]]]);
//# sourceMappingURL=main.25883ca8.chunk.js.map