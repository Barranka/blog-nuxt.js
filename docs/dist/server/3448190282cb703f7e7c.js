exports.ids=[9],exports.modules={57:function(t,e,o){var content=o(74);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("0d47b4c2",content,!0,t)}},58:function(t,e,o){var content=o(76);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("2aef16a8",content,!0,t)}},73:function(t,e,o){"use strict";o.r(e);var n=o(57),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e.default=r.a},74:function(t,e,o){(e=o(2)(!1)).push([t.i,".promo{text-align:center}.promo p{color:#999}",""]),t.exports=e},75:function(t,e,o){"use strict";o.r(e);var n=o(58),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,(function(){return n[t]}))}(c);e.default=r.a},76:function(t,e,o){(e=o(2)(!1)).push([t.i,".contact{text-align:center;background-color:#4f68f4}.contact,.contact .title{color:#fff}.contact .contact-form{max-width:600px;margin:30px auto}.contact .controls{margin:30px}",""]),t.exports=e},78:function(t,e,o){"use strict";o.r(e);var n=o(1);var r={data:()=>({message:null,user:{name:"",email:"",text:""}}),methods:{onSubmit(){this.message="Submited!",this.user.name="",this.user.email="",this.user.text=""}}};var c={components:{promo:Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"promo"},[this._ssrNode('<div class="container"><h1 class="title">My SSR Blog! With Nuxt.js!</h1> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellendus consequatur minus, animi modi dicta quaerat obcaecati quis exercitationem accusamus sunt aliquid earum harum, omnis atque, a quod quibusdam tenetur.</p></div>')])}),[],!1,(function(t){var e=o(73);e.__inject__&&e.__inject__(t)}),null,"2daf1435").exports,contacts:Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"contact"},[t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<h2 class="title">Contact me!</h2> '),t.message?o("Message",{attrs:{message:t.message}}):t._e(),t._ssrNode(" "),t._ssrNode('<form class="contact-form">',"</form>",[o("AppInput",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[t._v("Name:")]),t._ssrNode(" "),o("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v("Email:")]),t._ssrNode(" "),o("AppTextArea",{model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}},[t._v("Text:")]),t._ssrNode(" "),t._ssrNode('<div class="controls">',"</div>",[o("AppButton",{staticClass:"btnWhite"},[t._v("Submit!")])],1)],2)],2)])}),[],!1,(function(t){var e=o(75);e.__inject__&&e.__inject__(t)}),null,"fc8152c6").exports},head(){let t="My SSR Blog! With Nuxt.js!";return{title:"My SSR Blog!",meta:[{hid:"og:title",name:"og:title",content:"My SSR Blog!"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}},computed:{postsLoaded(){return this.$store.getters.getPostLoaded}}},l=Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper-content wrapper-content--fixed"},[e("promo"),this._ssrNode(" "),e("Intro",{attrs:{title:"My latest post:"}}),this._ssrNode(" "),e("PostsList",{attrs:{posts:this.postsLoaded}}),this._ssrNode(" "),e("contacts")],2)}),[],!1,null,null,"51562b44");e.default=l.exports}};