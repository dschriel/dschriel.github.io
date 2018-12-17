(function(t){function e(e){for(var n,r,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b56":function(t,e,a){"use strict";var n=a("f6b3"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["default"].use(o["a"],{iconfont:"md",theme:{primary:"#d81b60"}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("notifications",{attrs:{group:"foo"}}),a("Navbar"),a("v-content",{staticClass:"mx-4 mb-4"},[a("router-view")],1),a("Popup")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{attrs:{flat:"",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",[t._v("Friday")]),a("span",{staticClass:"font-weight-light"},[t._v("Todo")])]),a("v-spacer")],1)],1)},s=[],c={data:function(){return{}}},u=c,p=a("2877"),d=a("6544"),v=a.n(d),f=a("9910"),m=a("71d9"),b=a("2a7f"),y=Object(p["a"])(u,l,s,!1,null,null,null);y.options.__file="Navbar.vue";var h=y.exports;v()(y,{VSpacer:f["a"],VToolbar:m["a"],VToolbarTitle:b["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.newLocation,callback:function(e){t.newLocation=e},expression:"newLocation"}},[a("v-btn",{staticClass:"info",attrs:{slot:"activator",fab:"",fixed:"",bottom:"",right:""},slot:"activator"},[a("v-icon",[t._v("add")])],1),a("v-card",[a("v-card-title",[a("h2",{staticClass:"px-3 pt-3"},[t._v("Add a new location")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{label:"Title",rules:t.inputRules,"prepend-inner-icon":"restaurant"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-flex",{attrs:{x12:"",md6:""}},[a("v-text-field",{attrs:{label:"Location",rules:t.inputRules,"prepend-inner-icon":"place"},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-select",{attrs:{label:"Type",items:t.types,hint:"tag: "+t.select.key,"item-text":"name","item-value":"key","offset-y":"","persistent-hint":"","return-object":"","single-line":"","prepend-inner-icon":"fastfood"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-flex",{attrs:{x12:"",md6:""}},[a("v-text-field",{attrs:{label:"Price","prepend-inner-icon":"euro_symbol"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),a("v-layout",[a("v-flex",[a("v-text-field",{attrs:{label:"Url",rules:t.inputRules,"prepend-inner-icon":"link"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-textarea",{attrs:{label:"Information",rules:t.inputRules,"prepend-inner-icon":"edit"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),a("v-layout",[a("v-btn",{staticClass:"info my-3",attrs:{flat:"",loading:t.loading},on:{click:t.submit}},[t._v("Add location")])],1)],1)],1)],1)],1)],1)},_=[],g=a("8aa5"),w=a.n(g),C=(a("e71f"),{apiKey:"AIzaSyARxnmCubdhWg8gCgbv3MMqQH_U3tgElHs",authDomain:"slice-todo.firebaseapp.com",databaseURL:"https://slice-todo.firebaseio.com",projectId:"slice-todo",storageBucket:"slice-todo.appspot.com",messagingSenderId:"407226459423"});w.a.initializeApp(C);var k=w.a.firestore();k.settings({timestampsInSnapshots:!0});var V=k,S={data:function(){return{title:"",location:"",price:"undefined",url:"",content:"",currentUser:"Duncan Heffron",select:{key:"select-type",name:"Select type"},types:[{key:"all-you-can-eat",name:"All you can eat"},{key:"sushi",name:"Sushi"},{key:"fastfood",name:"Fastfood"},{key:"barbeque",name:"Barbeque"},{key:"chinees",name:"Chinees"},{key:"grieks",name:"Grieks"},{key:"italiaans",name:"Italiaans"}],inputRules:[function(t){return t.length>=3||"Minumum lenght is 3 characters"}],loading:!1,newLocation:!1}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var e={title:this.title,price:this.price,url:this.url,location:this.location,type:this.select.key,content:this.content,author:this.currentUser};V.collection("locations").add(e).then(function(){t.loading=!1,t.newLocation=!1,t.$notify({group:"foo",position:"bottom right",type:"success",title:"Success",text:"A new location was added to our database."})})}}}},T=S,j=a("8336"),O=a("b0af"),L=a("99d9"),P=a("12b2"),A=a("a523"),B=a("169a"),I=a("0e8f"),R=a("4bd4"),M=a("132d"),$=a("a722"),E=a("b56d"),F=a("2677"),D=a("a844"),U=Object(p["a"])(T,x,_,!1,null,null,null);U.options.__file="Popup.vue";var q=U.exports;v()(U,{VBtn:j["a"],VCard:O["a"],VCardText:L["a"],VCardTitle:P["a"],VContainer:A["a"],VDialog:B["a"],VFlex:I["a"],VForm:R["a"],VIcon:M["a"],VLayout:$["a"],VSelect:E["a"],VTextField:F["a"],VTextarea:D["a"]});var H={name:"App",components:{Navbar:h,Popup:q},data:function(){return{}}},N=H,z=a("7496"),J=a("549c"),G=Object(p["a"])(N,i,r,!1,null,null,null);G.options.__file="App.vue";var K=G.exports;v()(G,{VApp:z["a"],VContent:J["a"]});var Q=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3",attrs:{row:""}},[a("v-tooltip",{attrs:{top:""}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(e){t.sortBy("title")}},slot:"activator"},[a("v-icon",{attrs:{left:"",small:""}},[t._v("title")]),a("span",{staticClass:"captions text-lowercase"},[t._v("Title")])],1),a("span",[t._v("Sort locations by title")])],1),a("v-tooltip",{attrs:{top:""}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(e){t.sortBy("location")}},slot:"activator"},[a("v-icon",{attrs:{left:"",small:""}},[t._v("place")]),a("span",{staticClass:"captions text-lowercase"},[t._v("Location")])],1),a("span",[t._v("Sort locations by location")])],1),a("v-tooltip",{attrs:{top:""}},[a("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(e){t.sortBy("type")}},slot:"activator"},[a("v-icon",{attrs:{left:"",small:""}},[t._v("fastfood")]),a("span",{staticClass:"captions text-lowercase"},[t._v("Type")])],1),a("span",[t._v("Sort locations by type")])],1)],1),t._l(t.locations,function(e){return a("v-card",{key:e.id,attrs:{flat:""}},[a("v-layout",{class:"pa-3 location "+e.type,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Restaurant")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Price")]),a("div",[t._v(t._s(e.price)+" "),a("span",{staticClass:"caption grey--text"},[t._v("p.p.")])])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Location")]),a("div",[t._v(t._s(e.location))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"right"},[a("v-chip",{class:e.type+" white--text caption my-2",attrs:{small:""}},[t._v(t._s(e.type))])],1)])],1),a("v-divider")],1)})],2)],1)},X=[],Y=(a("55dd"),a("ac6a"),{data:function(){return{locations:[]}},created:function(){var t=this;V.collection("locations").get().then(function(e){e.forEach(function(e){var a={id:e.id,title:e.data().title,price:e.data().price,url:e.data().url,location:e.data().location,type:e.data().type,content:e.data().content,author:e.data().author};t.locations.push(a)})})},methods:{sortBy:function(t){this.locations.sort(function(e,a){return e[t]<a[t]?-1:1})}}}),Z=Y,tt=(a("2b56"),a("cc20")),et=a("ce7e"),at=a("3a2f"),nt=Object(p["a"])(Z,W,X,!1,null,null,null);nt.options.__file="Dashboard.vue";var ot=nt.exports;v()(nt,{VBtn:j["a"],VCard:O["a"],VChip:tt["a"],VContainer:A["a"],VDivider:et["a"],VFlex:I["a"],VIcon:M["a"],VLayout:$["a"],VTooltip:at["a"]}),n["default"].use(Q["a"]);var it=new Q["a"]({mode:"history",base:"dist",routes:[{path:"/",name:"dashboard",component:ot}]}),rt=a("ee98"),lt=a.n(rt);n["default"].config.productionTip=!1,n["default"].use(lt.a),new n["default"]({router:it,render:function(t){return t(K)}}).$mount("#app")},f6b3:function(t,e,a){}});
//# sourceMappingURL=app.f2587396.js.map