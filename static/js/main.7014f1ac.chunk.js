(this["webpackJsonppixabay-app"]=this["webpackJsonppixabay-app"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(28),s=n.n(r),i=n(14),o=n.n(i),l=n(29),u=n(4),b=n(0),j=function(e){var t=e.error;return Object(b.jsx)("p",{className:"mt-3 p-4 text-center  alert alert-danger",children:t})},d=function(e){var t=e.setSearch,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trimEnd()?(d(!1),t(r)):d(!0)},children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"form-group col-md-8",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search an image, i.e: soccer",onChange:function(e){return s(e.target.value)}})}),Object(b.jsx)("div",{className:"form-group col-md-4 ",children:Object(b.jsx)("input",{type:"submit",className:"btn btn-lg btn-dark btn-block",value:"Search"})})]}),l?Object(b.jsx)(j,{error:"Type a keyword to search"}):null]})},h=n(30),m=n.n(h),p=function(e){var t=e.Results,n=[];return t.sort((function(){return Math.random()-Math.random()})).find((function(){return!0})),t.map((function(e){return n.push({src:e.largeImageURL,thumbnail:e.webformatURL,thumbnailWidth:e.previewWidth,thumbnailHeight:e.previewHeight})})),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(m.a,{enableImageSelection:!1,images:n,backdropClosesModal:!0})})},f=n.p+"static/media/Final.392f6a31.gif";var O=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],j=s[1],h=Object(a.useState)(1),m=Object(u.a)(h,2),O=m[0],x=m[1],g=Object(a.useState)(1),v=Object(u.a)(g,2),y=v[0],S=v[1],N=Object(a.useState)(!0),k=Object(u.a)(N,2),w=k[0],C=k[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return t=30,"23686731-d7a837d5f9b30045c039ab2a7",a="https://pixabay.com/api/?key=".concat("23686731-d7a837d5f9b30045c039ab2a7","&q=").concat(n.replace(" ","+"),"&per_page=").concat(t,"&page=").concat(O),e.next=7,fetch(a);case 7:return c=e.sent,e.next=10,c.json();case 10:if(r=e.sent,j(r.hits),S(Math.ceil(r.totalHits/t)),document.querySelector(".page-header").scrollIntoView({behavior:"smooth"}),!(r.totalHits>0)){e.next=18;break}return C(!1),e.abrupt("return");case 18:C(!0);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,O]),Object(b.jsxs)("div",{className:"container",style:{height:"100vh"},children:[Object(b.jsxs)("div",{className:"page-header  rounded",style:{background:"transparent",textAlign:"center"},children:[Object(b.jsx)("a",{href:"/PixFinder/",className:"mb-3 mt-2",style:{color:"white",fontSize:"40px",fontFamily:"Varela Round",width:"50%",textAlign:"center"},children:Object(b.jsx)("img",{src:f,alt:"logo",style:{height:"20vh",marginBottom:"1"}})}),Object(b.jsx)(d,{setSearch:c})]}),Object(b.jsxs)("div",{className:"row justify-content-center",children:[0===i?null:Object(b.jsx)(p,{Results:i}),Object(b.jsx)("br",{}),1===O||w?null:Object(b.jsx)("button",{type:"button",className:"btn btn-info mr-1 mt-2 mb-3",onClick:function(){var e=O-1;0!==e&&x(e)},children:"\u2190 Previous"}),O===y||w?null:Object(b.jsx)("button",{type:"button",className:"btn btn-info mr-1 mt-2 mb-3",onClick:function(){var e=O+1;e>y||x(e)},children:"Next \u2192"})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[92,1,2]]]);
//# sourceMappingURL=main.7014f1ac.chunk.js.map