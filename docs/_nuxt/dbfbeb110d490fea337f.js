(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{250:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5a7c75f0",content,!0,{sourceMap:!1})},251:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("1d3e21e0",content,!0,{sourceMap:!1})},252:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6ab07924",content,!0,{sourceMap:!1})},263:function(t,e,n){var o=n(8),r=n(264)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},264:function(t,e,n){var o=n(12),r=n(30),c=n(22),m=n(49).f;t.exports=function(t){return function(e){for(var n,l=c(e),f=r(l),d=f.length,i=0,v=[];d>i;)n=f[i++],o&&!m.call(l,n)||v.push(t?[n,l[n]]:l[n]);return v}}},265:function(t,e,n){"use strict";var o=n(250);n.n(o).a},266:function(t,e,n){(e=n(10)(!1)).push([t.i,".new-comment{text-align:center}.new-comment .contact-form{width:600px;margin:30px auto}.new-comment .controls{margin:30px}",""]),t.exports=e},267:function(t,e,n){"use strict";var o=n(251);n.n(o).a},268:function(t,e,n){(e=n(10)(!1)).push([t.i,".comments{margin:30px auto;text-align:center}.comment{padding:20px;width:600px;margin-bottom:20px;background-color:#fff}.comment .name{margin-bottom:12px;font-size:24px;color:#5c4de7}",""]),t.exports=e},269:function(t,e,n){"use strict";var o=n(252);n.n(o).a},270:function(t,e,n){(e=n(10)(!1)).push([t.i,".post{max-width:900px;margin:0 auto}.post-header{text-align:center;margin-bottom:30px}.post-header img{margin-bottom:16px;min-width:400px}.post-header p{color:#999}.post-body{text-align:left}",""]),t.exports=e},275:function(t,e,n){"use strict";n.r(e);n(263),n(26),n(17),n(50);var o=n(46),r=(n(38),n(7)),c=n(35),m=n.n(c),l={props:{post:{type:Object,required:!0}}},f=n(3),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"post"},[n("div",{staticClass:"container"},[n("div",{staticClass:"post-header"},[n("img",{attrs:{src:t.$router.options.base+t.post.img,alt:t.post.title}}),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v(t._s(t.post.descr))])]),t._v(" "),n("div",{staticClass:"post-body"},[n("p",{staticClass:"post-body html-reset",domProps:{innerHTML:t._s(t.post.content)}})])])])}),[],!1,null,null,null).exports,v=(n(73),n(27),n(48),n(28),n(29));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={props:{postId:{type:String,required:!0}},data:function(){return{message:null,comment:{name:"",text:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("addComment",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({postId:this.postId,publish:!1},this.comment)).then((function(){t.message="Submited!",t.comment.name="",t.comment.text=""})).catch((function(t){return console.log(t)}))}}},_=(n(265),Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-comment"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("New comment!")]),t._v(" "),t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.comment.name,callback:function(e){t.$set(t.comment,"name",e)},expression:"comment.name"}},[t._v("Name:")]),t._v(" "),n("AppTextArea",{model:{value:t.comment.text,callback:function(e){t.$set(t.comment,"text",e)},expression:"comment.text"}},[t._v("Text:")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",[t._v("Submit!")])],1)],1)],1)])}),[],!1,null,null,null).exports),w={props:{comments:{type:Array,default:null}}},O=(n(267),{components:{post:d,comments:Object(f.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comments?n("section",{staticClass:"comments"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Comments:")]),t._v(" "),0==t.comments.length?n("p",[t._v("Comments: 0")]):t._e(),t._v(" "),t._l(t.comments,(function(e){return n("div",{key:e.name,staticClass:"comment"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])}))],2)]):t._e()}),[],!1,null,null,null).exports,newComment:_},head:function(){var title=this.post.title,t=this.post.descr;return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:img",name:"og:img",content:"".concat(this.post.img)}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([m.a.get("https://blog-nuxt-634c4.firebaseio.com/posts/".concat(t.params.id,".json")),m.a.get("https://blog-nuxt-634c4.firebaseio.com/comments.json")]);case 2:return n=e.sent,r=Object(o.a)(n,2),c=r[0],(l=r[1]).data||(l.data={}),f=Object.values(l.data).filter((function(e){return e.postId===t.params.id&&e.publish})),e.abrupt("return",{post:c.data,comments:f});case 9:case"end":return e.stop()}}),e)})))()}}),y=(n(269),Object(f.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content wrapper-content--fixed"},[e("post",{attrs:{post:this.post}}),this._v(" "),e("comments",{attrs:{comments:this.comments}}),this._v(" "),e("newComment",{attrs:{postId:this.$route.params.id}})],1)}),[],!1,null,null,null));e.default=y.exports}}]);