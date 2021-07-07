(this["webpackJsonpmountain-pass"]=this["webpackJsonpmountain-pass"]||[]).push([[0],{141:function(e,n,t){},153:function(e,n,t){},154:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(17),a=t.n(i),s=t(3),o=t(4),u=t(62),l=t(5),d=t.n(l),v={UPDATE_FIELD_VALUE:"UPDATE_FIELD_VALUE",SHOW_SERVICE_FORM:"SHOW_SERVICE_FORM",HIDE_SERVICE_FORM:"HIDE_SERVICE_FORM",FETCH_SERVICES_STARTED:"FETCH_SERVICES_STARTED",FETCH_SERVICES_SUCCESS:"FETCH_SERVICES_SUCCESS",FETCH_SERVICES_FAILURE:"FETCH_SERVICES_FAILURE",SAVE_SERVICE_STARTED:"SAVE_SERVICE_STARTED",SAVE_SERVICE_SUCCESS:"SAVE_SERVICE_SUCCESS",SAVE_SERVICE_FAILURE:"SAVE_SERVICE_FAILURE"},j=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SAVE_SERVICE_SUCCESS:return(e=d()(n)).showModal=!1,e;case v.SHOW_SERVICE_FORM:return(e=d()(n)).showModal=!0,e;case v.HIDE_SERVICE_FORM:return(e=d()(n)).showModal=!1,e;default:return n}},h=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.FETCH_SERVICES_SUCCESS:return(e=d()(n)).services=t.payload.services,e;default:return n}},p={fields:{name:{value:"Apple"},version:{value:"1.0.0"}}},b=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SAVE_SERVICE_SUCCESS:return(e=d()(n)).fields=d()(p.fields),e;case v.UPDATE_FIELD_VALUE:return(e=d()(n)).fields[t.payload.field].value=t.payload.value,e;default:return n}},S={isBusy:!1,showModal:!1,msg:{status:"info",msg:"default message"}},O={services:null},E=Object(o.c)({app:j,services:h,serviceForm:b}),f={app:S,services:O,serviceForm:p},C=Object(o.d)(E,f,Object(o.a)(u.a)),m=(t(141),t(7)),_=t(8),x=t(10),V=t(9),y=t(12),A=t(0),F=function(e){return Object(A.jsx)("button",Object(y.a)(Object(y.a)({className:"box"},e),{},{children:e.children}))},R=function(e){return Object(A.jsxs)("div",{id:"quick-links",children:[Object(A.jsx)("div",{className:"section-header__1",children:Object(A.jsx)("h2",{children:"Quick Links"})}),Object(A.jsxs)("div",{children:[Object(A.jsx)(F,{type:"button",onClick:e.handleAddService,children:"Add Service"}),Object(A.jsx)(F,{children:"Deploy Gatsby Website"}),Object(A.jsx)(F,{children:"Deploy Node Project"})]})]})},I=t(6),g=t.n(I),T=t(14),D=t(41),k=t.n(D),w=function(){var e=Object(T.a)(g.a.mark((function e(){var n,t,r,c=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.length>0&&void 0!==c[0]?c[0]:null,n=c.length>1&&void 0!==c[1]?c[1]:1,t="bWFyc29uOmVSZDc",r="https://interview-web-service.mountainpass.com.au/api/v1/projects?page=".concat(n),e.prev=4,e.abrupt("return",k()(r,{method:"GET",headers:{Authorization:"Basic ".concat(t)}}));case 8:e.prev=8,e.t0=e.catch(4),console.error("Error fetching services"),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[4,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){try{var n=JSON.stringify(e);return k()("https://interview-web-service.mountainpass.com.au/api/v1/projects",{method:"POST",headers:{Authorization:"Basic ".concat("bWFyc29uOmVSZDc"),"Content-Type":"application/json"},body:n})}catch(t){console.error("Error POST saving a service"),console.error(t)}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:v.SHOW_SERVICE_FORM,payload:{serviceId:e}}},H=function(){return{type:v.HIDE_SERVICE_FORM}},M=function(e){return function(){var n=Object(T.a)(g.a.mark((function n(t){var r,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(N()),console.log("saving started",e),n.next=4,U(e);case 4:return r=n.sent,n.next=7,r.json();case 7:c=n.sent,console.log("result from response",c),t(P());case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(){return{type:v.SAVE_SERVICE_STARTED}},P=function(){return{type:v.SAVE_SERVICE_SUCCESS}},W=Object(s.b)((function(e){return e}),(function(e){return Object(o.b)({handleAddService:L},e)}))(R),B=function(){return function(){var e=Object(T.a)(g.a.mark((function e(n){var t,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,n(J(r.data)),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},J=function(e){return{type:v.FETCH_SERVICES_SUCCESS,payload:{services:e}}},q=t(11),z=function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:e.name}),Object(A.jsxs)("div",{children:["version : ",e.version]})]})},G=function(e){return Object(A.jsx)("div",{className:"group",children:e.services.map((function(e){return Object(A.jsx)(z,{name:e.name,version:e.version},e.name)}))})},Z=t(18),Q=function(e){return Object(A.jsx)("button",Object(y.a)(Object(y.a)({},e),{},{children:e.children}))};Q.proptTypes={children:t.n(Z).a.string.isRequired};var K=Q,X=function(e){Object(x.a)(t,e);var n=Object(V.a)(t);function t(e){var r;return Object(m.a)(this,t),(r=n.call(this,e)).handleAddService=r.handleAddService.bind(Object(q.a)(r)),r}return Object(_.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchServices()}},{key:"handleAddService",value:function(){this.props.handleAddService()}},{key:"render",value:function(){var e=Object(A.jsx)("div",{children:"Loading.."});return Array.isArray(this.props.services.services)&&(e=Object(A.jsx)(G,{services:this.props.services.services})),Object(A.jsxs)("div",{id:"service-list-panel",className:"page__default",children:[Object(A.jsx)("div",{className:"section-header__2",children:Object(A.jsx)("h2",{children:"Services"})}),Object(A.jsx)("div",{children:Object(A.jsx)(K,{className:"primary",onClick:this.handleAddService,children:"Add Service"})}),Object(A.jsx)("div",{children:e}),Object(A.jsx)(K,{type:"button",onClick:this.handleAddService,className:"button-box",children:"Add Service"})]})}}]),t}(c.a.Component),Y=Object(s.b)((function(e){return e}),(function(e){return Object(o.b)({handleAddService:L,fetchServices:B},e)}))(X),$=function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(W,{}),Object(A.jsx)(Y,{})]})},ee=t(42),ne=t.n(ee),te=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{type:v.UPDATE_FIELD_VALUE,payload:{field:e,value:n}}},re=function(e){return Object(A.jsx)("input",Object(y.a)({className:"user-input"},e))},ce=function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{htmlFor:e.for,children:e.labelText}),e.children]})},ie=function(e){Object(x.a)(t,e);var n=Object(V.a)(t);function t(e){var r;return Object(m.a)(this,t),(r=n.call(this,e)).handleCancel=r.handleCancel.bind(Object(q.a)(r)),r.updateFieldValue=r.updateFieldValue.bind(Object(q.a)(r)),r.handleSubmitForm=r.handleSubmitForm.bind(Object(q.a)(r)),r}return Object(_.a)(t,[{key:"handleCancel",value:function(){this.props.handleCancel()}},{key:"updateFieldValue",value:function(e,n){this.props.updateFieldValue(e,n.target.value)}},{key:"handleSubmitForm",value:function(e){e.preventDefault();var n=this.props.serviceForm.fields,t={name:n.name.value,version:n.version.value};console.log("checking props..",this.props),console.log("before saving..",t),this.props.saveService(t)}},{key:"render",value:function(){var e=this,n=this.props.serviceForm.fields;return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Add Service"}),Object(A.jsxs)("form",{method:"POST",onSubmit:this.handleSubmitForm,children:[Object(A.jsx)(ce,{labelText:"Name",for:"name",children:Object(A.jsx)(re,{name:"name",id:"name",value:n.name.value,onChange:function(n){return e.updateFieldValue("name",n)}})}),Object(A.jsx)(ce,{labelText:"Version",for:"version",children:Object(A.jsx)(re,{name:"version",id:"version",value:n.version.value,onChange:function(n){return e.updateFieldValue("version",n)}})}),Object(A.jsxs)("div",{children:[Object(A.jsx)(K,{type:"button",onClick:this.handleCancel,children:"Cancel"}),Object(A.jsx)(K,{type:"submit",className:"primary",children:"Add Service"})]})]})]})}}]),t}(c.a.Component),ae=Object(s.b)((function(e){return e}),(function(e){return Object(o.b)({handleCancel:H,updateFieldValue:te,saveService:M},e)}))(ie),se=function(e){Object(x.a)(t,e);var n=Object(V.a)(t);function t(e){var r;return Object(m.a)(this,t),r=n.call(this,e),ne.a.setAppElement("div"),r}return Object(_.a)(t,[{key:"render",value:function(){var e="loading..";return this.props.isOpen&&(e=Object(A.jsx)(ae,{})),Object(A.jsx)(ne.a,{contentLabel:"New Service",isOpen:this.props.isOpen,children:e})}}]),t}(c.a.Component);se.defaultProps={isOpen:!1};var oe=se,ue=function(e){Object(x.a)(t,e);var n=Object(V.a)(t);function t(){return Object(m.a)(this,t),n.apply(this,arguments)}return Object(_.a)(t,[{key:"render",value:function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)($,{}),Object(A.jsx)(oe,{isOpen:this.props.app.showModal})]})}}]),t}(c.a.Component);ue.defaultProps={showServiceForm:!1};var le=ue,de=Object(s.b)((function(e){return e}),null)(le);var ve=function(){return Object(A.jsx)("div",{id:"app",className:"App",children:Object(A.jsx)(de,{})})},je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,155)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};t(153);a.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(s.a,{store:C,children:Object(A.jsx)(ve,{})})}),document.getElementById("root")),je()}},[[154,1,2]]]);
//# sourceMappingURL=main.33ae0e72.chunk.js.map