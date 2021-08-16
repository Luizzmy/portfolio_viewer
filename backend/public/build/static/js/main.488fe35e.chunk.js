(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{193:function(e,t,n){},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),i=n.n(c),o=(n(193),n(144)),s=n(24),l=n(298),u=n(293),j=n(294),d=n(39),b=n(23),f=n.n(b),O=n(33),p=n(29),h=n(81),x=n.n(h),v=x.a.create({baseURL:"/",withCredentials:!0}),m=function(e){return v.post("/login",e)},g=function(){return v.get("/current-user")},y=function(){return v.get("/logout")},w=n(7),k=Object(r.createContext)(),S=function(e){var t=Object(r.useState)(null),n=Object(p.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n=t.data,i(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e){c(e)},o={user:a,login:i,logout:function(){c(null)},addProfilePic:function(e){return c(Object(d.a)(Object(d.a)({},a),{},{img:e}))}};return Object(w.jsx)(k.Provider,Object(d.a)(Object(d.a)({},e),{},{value:o}))},C=function(){return Object(r.useContext)(k)},P=n(172),I=n.n(P),N=n(300),F=n(42),E=x.a.create({baseURL:"/",withCredentials:!0}),V=function(){return E.get("/user-portfolios")},_=function(e){return E.post("/new-portfolio",e)},T=function(e,t){return E.put("/edit/".concat(e),t)},R=n(149),A=n(109),D=n(137),J=n(297),q=n(296),H=["index"],L=["title","editable","children","dataIndex","record","handleSave"],W=["_id"],B=l.a.Text,U=a.a.createContext(null),z=function(e){e.index;var t=Object(D.a)(e,H),n=J.a.useForm(),r=Object(p.a)(n,1)[0];return Object(w.jsx)(J.a,{form:r,component:!1,children:Object(w.jsx)(U.Provider,{value:r,children:Object(w.jsx)("tr",Object(d.a)({},t))})})},M=function(e){var t=e.title,n=e.editable,a=e.children,c=e.dataIndex,i=e.record,o=e.handleSave,s=Object(D.a)(e,L),l=Object(r.useState)(!1),u=Object(p.a)(l,2),j=u[0],b=u[1],h=Object(r.useRef)(null),x=Object(r.useContext)(U);Object(r.useEffect)((function(){j&&h.current.focus()}),[j]);var v=function(){b(!j),x.setFieldsValue(Object(A.a)({},c,i[c]))},m=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.validateFields();case 3:t=e.sent,v(),o(Object(d.a)(Object(d.a)({},i),t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),g=a;return n&&(g=j?Object(w.jsx)(J.a.Item,{style:{margin:0},name:c,rules:[{required:!0,message:"".concat(t," is required.")}],children:Object(w.jsx)(N.a,{ref:h,onPressEnter:m,onBlur:m})}):Object(w.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:v,children:a})),Object(w.jsx)("td",Object(d.a)(Object(d.a)({},s),{},{children:g}))};function X(e){return"string"===typeof e&&(e=e.replace(/,/g,".")),e}function $(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return t;return null}var G=function(e){var t=e.data,n=Object(r.useState)(),a=Object(p.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(),s=Object(p.a)(o,2),l=s[0],b=s[1],h=Object(r.useState)(!1),v=Object(p.a)(h,2),m=v[0],g=v[1];Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://openexchangerates.org/api/currencies.json");case 2:n=e.sent,r=n.data,t&&(t.forEach((function(e){r.hasOwnProperty(e.Currency)?e.Currency=r[e.Currency]:$(r,e.Currency)?e.Currency=$(r,e.Currency):e.Currency="Not_a_currency"})),i(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(t.CSVData)}),[t.CSVData]),Object(r.useEffect)((function(){!function(e){if(c){var t=0;e.forEach((function(e){var n=parseFloat(X(e.Price))*parseFloat(X(e.FXRate))*e.Holding;t+=n})),b(Math.floor(100*t)/100)}}(c)}),[c]),Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=7;break}return t.CSVData=c,sessionStorage.setItem("csvFile",JSON.stringify(t)),n=t._id,r=Object(D.a)(t,W),e.next=6,T(n,r);case 6:g(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,t,m]);var y=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(R.a)(c),r=n.findIndex((function(e){return t.key===e.key})),a=n[r],n.splice(r,1,Object(d.a)(Object(d.a)({},a),t)),i(n),g(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={body:{row:z,cell:M}},S=t.header.map((function(e){return e.editable?Object(d.a)(Object(d.a)({},e),{},{onCell:function(t){return{record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,handleSave:y}}}):e}));return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{style:{marginTop:"15px"},children:[Object(w.jsxs)(u.a,{justify:"space-between",children:[Object(w.jsx)(j.a,{children:Object(w.jsx)(F.a,{onClick:function(){var e={};for(var n in t.CSVData[0])e[n]="key"===n?c.length:"Price"===n||"Holding"===n||"FXRate"===n?0:"new_row";var r=[].concat(Object(R.a)(c),[e]);i(r)},type:"primary",style:{marginBottom:16},children:"Add a row"})}),Object(w.jsx)(j.a,{children:Object(w.jsxs)(B,{children:["Name of Portfolio: ",t.fileName]})}),Object(w.jsx)(j.a,{children:l?Object(w.jsxs)(B,{children:["Total portfolio value kr ",l]}):null})]}),c?Object(w.jsx)(q.a,{scroll:{x:350},components:k,rowClassName:function(){return"editable-row"},bordered:!0,dataSource:c,columns:S,pagination:{pageSize:50}}):null]})})},K=function(){var e=Object(r.useState)({csvfile:null,tShirts:[null],felpe:[null]}),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(JSON.parse(sessionStorage.getItem("csvFile"))||""),i=Object(p.a)(c,2),o=i[0],s=i[1];function l(e,t){return u.apply(this,arguments)}function u(){return(u=Object(O.a)(f.a.mark((function e(t,n){var r,c,i,o,l,u,j;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a({csvfile:null}),r=t.data,c=Object.keys(r[0]),i=[],o=[],c.forEach((function(e){i.push({title:e,dataIndex:e,editable:!0})})),l=0;l<r.length;l++)r[l].key=l,o.push(r[l]);return console.log(o),u={fileName:n.name,header:i,CSVData:o},e.next=11,_(u);case 11:j=e.sent,u._id=j.data._id,s(u);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){o&&sessionStorage.setItem("csvFile",JSON.stringify(o))}),[o]),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"upload",children:[Object(w.jsx)(N.a,{type:"file",name:"file",placeholder:null,onChange:function(e){a({csvfile:e.target.files[0]})}}),Object(w.jsx)("p",{}),Object(w.jsx)(F.a,{onClick:function(e){e.preventDefault();var t=n.csvfile;t&&I.a.parse(t,{header:!0,dynamicTyping:!0,complete:l})},type:"primary",children:"Upload a CSV File"})]}),o?Object(w.jsx)(G,{data:o}):null]})},Q=n(301),Y=n(302),Z=n(299);var ee=function(){var e=Object(r.useState)(!0),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),i=Object(p.a)(c,2),o=i[0],s=i[1];Object(r.useEffect)((function(){function e(){return(e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!1),e.next=3,V();case 3:t=e.sent,n=t.data,console.log(n),s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,a=t,E.get("/portfolio/".concat(a));case 3:n=e.sent,r=n.data,sessionStorage.setItem("csvFile",JSON.stringify(r)),window.location.reload(),console.log(r);case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,a=t._id,E.get("/delete/".concat(a));case 3:n=o.indexOf(t),r=o.filter((function(e,t){return t!==n})),s(r);case 6:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{children:Object(w.jsx)(Y.b,{className:"demo-loadmore-list",loading:n,itemLayout:"horizontal",dataSource:o,renderItem:function(e){return Object(w.jsx)(Y.b.Item,{actions:[Object(w.jsx)(F.a,{type:"link",onClick:function(){return l(e._id)},children:"edit"},"list-loadmore-edit"),Object(w.jsx)(F.a,{type:"link",onClick:function(){return u(e)},children:"delete"},"list-loadmore-more")],children:Object(w.jsx)(Z.a,{avatar:!0,title:!1,loading:e.loading,active:!0,children:Object(w.jsx)(Y.b.Item.Meta,{title:Object(w.jsx)("p",{children:e.fileName})})})})}})})};var te=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)(F.a,{type:"primary",onClick:function(){a(!0)},children:"View All Portfolios"}),Object(w.jsx)(Q.a,{title:"All portfolios",visible:n,onOk:function(){a(!1)},onCancel:function(){a(!1)},children:Object(w.jsx)(ee,{})})]})},ne=n(295),re=n(78),ae=n(303),ce=ne.a.Sider;var ie=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],c=C().logout;function i(){return(i=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:sessionStorage.clear(),c();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(w.jsx)(ce,{width:130,breakpoint:"md",collapsible:!0,collapsed:n,onCollapse:function(){a(!n)},children:Object(w.jsx)(re.a,{mode:"inline",style:{height:"100%",borderRight:0},children:Object(w.jsx)(re.a.Item,{icon:Object(w.jsx)(ae.a,{}),onClick:function(){return i.apply(this,arguments)},children:"Logout"},"1")})})},oe=ne.a.Header,se=ne.a.Content;var le=function(e){var t=e.children;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(ne.a,{style:{minHeight:"100vh"},children:[Object(w.jsx)(oe,{className:"site-layout-background",style:{padding:0}}),Object(w.jsxs)(ne.a,{className:"site-layout",children:[Object(w.jsx)(ie,{}),Object(w.jsx)(u.a,{justify:"end",align:"middle",style:!0}),Object(w.jsx)(se,{style:{margin:"0 16px",textAlign:"left"},children:Object(w.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360,backgroundColor:"white"},children:t})})]})]})})},ue=l.a.Title;var je=function(){return C().user?Object(w.jsx)("div",{children:Object(w.jsx)(le,{children:Object(w.jsx)(u.a,{children:Object(w.jsxs)(j.a,{sm:24,children:[Object(w.jsx)(ue,{level:1,children:" Welcome to the Portfolio Viewer App"}),Object(w.jsx)(ue,{level:3,children:" Please upload a portfolio as a CSV file or choose a previously uploaded portfolio to view the detail and be able to edit"}),Object(w.jsx)(te,{}),Object(w.jsx)("br",{}),Object(w.jsx)(K,{}),Object(w.jsx)("br",{})]})})})}):Object(w.jsx)(s.a,{to:"/"})};var de=function(){return Object(w.jsx)("div",{children:Object(w.jsx)("h2",{children:"Not found"})})},be=n(183),fe=function(e){be.b.error(e)},Oe=l.a.Title;var pe=function(e){var t=e.history,n=J.a.useForm(),r=Object(p.a)(n,1)[0],a=C(),c=a.login;function i(){return(i=Object(O.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),m(n).then((function(e){c({data:e}),t.push("/home")})).catch((function(e){console.log(e),fe("Wrong Credentials")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.user?Object(w.jsx)(s.a,{to:"/home"}):Object(w.jsxs)("div",{children:[Object(w.jsx)(u.a,{align:"middle",justify:"space-around",children:Object(w.jsx)(j.a,{xs:0,sm:0,md:24,flex:"center",children:Object(w.jsx)("div",{style:{marginTop:"20vh"}})})}),Object(w.jsx)(u.a,{align:"middle",justify:"space-around",children:Object(w.jsxs)(j.a,{flex:"center",children:[Object(w.jsx)(Oe,{level:1,children:"Welcome to the Portfolio Viewer App"}),Object(w.jsx)("br",{}),Object(w.jsx)(Oe,{level:2,children:"Please login to enter"}),Object(w.jsxs)(J.a,{layout:"vertical",form:r,onFinish:function(e){return i.apply(this,arguments)},children:[Object(w.jsx)(J.a.Item,{name:"email",label:"Email:",rules:[{required:!0,type:"email",message:"Please input your email"}],children:Object(w.jsx)(N.a,{})}),Object(w.jsx)(J.a.Item,{name:"password",label:"Password:",rules:[{required:!0,message:"Password is required"}],children:Object(w.jsx)(N.a.Password,{})}),Object(w.jsx)(F.a,{type:"primary",block:!0,htmlType:"submit",children:"Login"})]})]})})]})},he=function(){return Object(w.jsx)(o.a,{children:Object(w.jsxs)(s.d,{children:[Object(w.jsx)(s.b,{exact:!0,path:"/",component:pe}),Object(w.jsx)(s.b,{exact:!0,path:"/home",component:je}),Object(w.jsx)(s.b,{component:de})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(289);i.a.render(Object(w.jsx)(S,{children:Object(w.jsx)(he,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[290,1,2]]]);
//# sourceMappingURL=main.488fe35e.chunk.js.map