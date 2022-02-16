(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-843f4658"],{1511:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[e.isLoading?r("Spinner"):[r("UserProfileCard",{attrs:{user:e.user,"is-current-user":e.currentUser.id===e.user.id,"initial-is-followed":e.isFollowed}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:e.followings}}),r("UserFollowersCard",{attrs:{followers:e.followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:e.comments}}),r("UserFavoritedRestaurantsCard",{attrs:{"favorited-restaurants":e.favoritedRestaurants}})],1)])]],2)},s=[],a=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.user.name)+" ")]),r("p",{staticClass:"card-text"},[e._v(" "+e._s(e.user.email)+" ")]),r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[e._v(e._s(e.user.commentsLength))]),e._v(" 已評論餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.favoritedRestaurantsLength))]),e._v(" 收藏的餐廳 ")]),r("li",[r("strong",[e._v(e._s(e.user.followingsLength))]),e._v(" followings (追蹤者) ")]),r("li",[r("strong",[e._v(e._s(e.user.followersLength))]),e._v(" followers (追隨者) ")])]),e.isCurrentUser?[r("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"user-edit",params:{id:e.user.id}}}},[e._v(" Edit ")])]:[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v(" 追蹤 ")])]],2)])])])}),l=[],u=r("2708"),c=r("4cce"),d=r("2fa3"),f={mixins:[u["a"]],props:{user:{type:Object,required:!0},isCurrentUser:{type:Boolean,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data:function(){return{isFollowed:this.initialIsFollowed}},watch:{initialIsFollowed:function(e){this.isFollowed=e}},methods:{addFollowing:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].addFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"error"!==s.status){r.next=7;break}throw new Error(s.message);case 7:t.isFollowed=!0,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,s=n.data,"error"!==s.status){r.next=7;break}throw new Error(s.message);case 7:t.isFollowed=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.error(r.t0.message),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},v=f,h=r("2877"),g=Object(h["a"])(v,o,l,!1,null,null,null),m=g.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followings.length))]),e._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},e._l(e.followings,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"mr-1",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},w=[],b={props:{followings:{type:Array,default:function(){return[]}}}},x=b,_=Object(h["a"])(x,p,w,!1,null,null,null),y=_.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.followers.length))]),e._v(" followers (追隨者) ")]),r("div",{staticClass:"card-body"},e._l(e.followers,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"mr-1",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},k=[],F={props:{followers:{type:Array,default:function(){return[]}}}},R=F,O=Object(h["a"])(R,C,k,!1,null,null,null),j=O.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.comments.length))]),e._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.comments,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[r("img",{staticClass:"mr-1 mb-1",attrs:{src:e.Restaurant.image,width:"60",height:"60"}})])})),1)])},U=[],L={props:{comments:{type:Array,default:function(){return[]}}}},I=L,z=Object(h["a"])(I,E,U,!1,null,null,null),S=z.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[e._v(e._s(e.favoritedRestaurants.length))]),e._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},e._l(e.favoritedRestaurants,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.id}}}},[r("img",{staticClass:"mr-1 mb-1",attrs:{src:e.image,width:"60",height:"60"}})])})),1)])},D=[],P={props:{favoritedRestaurants:{type:Array,default:function(){return[]}}}},$=P,B=Object(h["a"])($,A,D,!1,null,null,null),q=B.exports,N=r("2f62"),J=r("2375"),K={name:"UserInfo",components:{UserProfileCard:m,UserFollowingsCard:y,UserFollowersCard:j,UserCommentsCard:S,UserFavoritedRestaurantsCard:q,Spinner:J["a"]},data:function(){return{user:{id:0,image:"",name:"",email:"",followingsLength:0,followersLength:0,commentsLength:0,favoritedRestaurantsLength:0},isFollowed:!1,followings:[],followers:[],comments:[],favoritedRestaurants:[],isLoading:!0}},computed:Object(i["a"])({},Object(N["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchUser(e)},beforeRouteUpdate:function(e,t,r){var n=e.params.id;this.fetchUser(n),r()},methods:{fetchUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,s,a,o,l,u,f,v,h,g,m,p,w;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].get({userId:e});case 3:if(n=r.sent,s=n.data,"error"!==s.status){r.next=7;break}throw new Error(s.message);case 7:a=s.profile,o=s.isFollowed,l=a.id,u=a.image,f=a.name,v=a.email,h=a.Followers,g=a.Followings,m=a.Comments,p=a.FavoritedRestaurants,t.user=Object(i["a"])(Object(i["a"])({},t.user),{},{id:l,image:u,name:f,email:v,followingsLength:g.length,followersLength:h.length,commentsLength:m.length,favoritedRestaurantsLength:p.length}),t.isFollowed=o,t.followings=g,t.followers=h,t.favoritedRestaurants=p,w=new Set,t.comments=m.filter((function(e){return e.Restaurant&&!w.has(e.Restaurant.id)&&w.add(e.Restaurant.id)})),t.isLoading=!1,r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](0),t.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得User資料，請稍後再試!"});case 23:case"end":return r.stop()}}),r,null,[[0,19]])})))()}}},T=K,W=Object(h["a"])(T,n,s,!1,null,null,null);t["default"]=W.exports},"4fad":function(e,t,r){var n=r("d039"),s=r("861d"),a=r("c6b6"),i=r("d86b"),o=Object.isExtensible,l=n((function(){o(1)}));e.exports=l||i?function(e){return!!s(e)&&((!i||"ArrayBuffer"!=a(e))&&(!o||o(e)))}:o},6062:function(e,t,r){"use strict";var n=r("6d61"),s=r("6566");n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),s)},6566:function(e,t,r){"use strict";var n=r("9bf2").f,s=r("7c73"),a=r("e2cc"),i=r("0366"),o=r("19aa"),l=r("2266"),u=r("7dd0"),c=r("2626"),d=r("83ab"),f=r("f183").fastKey,v=r("69f3"),h=v.set,g=v.getterFor;e.exports={getConstructor:function(e,t,r,u){var c=e((function(e,n){o(e,v),h(e,{type:t,index:s(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=n&&l(n,e[u],{that:e,AS_ENTRIES:r})})),v=c.prototype,m=g(t),p=function(e,t,r){var n,s,a=m(e),i=w(e,t);return i?i.value=r:(a.last=i={index:s=f(t,!0),key:t,value:r,previous:n=a.last,next:void 0,removed:!1},a.first||(a.first=i),n&&(n.next=i),d?a.size++:e.size++,"F"!==s&&(a.index[s]=i)),e},w=function(e,t){var r,n=m(e),s=f(t);if("F"!==s)return n.index[s];for(r=n.first;r;r=r.next)if(r.key==t)return r};return a(v,{clear:function(){var e=this,t=m(e),r=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,r=m(t),n=w(t,e);if(n){var s=n.next,a=n.previous;delete r.index[n.index],n.removed=!0,a&&(a.next=s),s&&(s.previous=a),r.first==n&&(r.first=s),r.last==n&&(r.last=a),d?r.size--:t.size--}return!!n},forEach:function(e){var t,r=m(this),n=i(e,arguments.length>1?arguments[1]:void 0);while(t=t?t.next:r.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!w(this,e)}}),a(v,r?{get:function(e){var t=w(this,e);return t&&t.value},set:function(e,t){return p(this,0===e?0:e,t)}}:{add:function(e){return p(this,e=0===e?0:e,e)}}),d&&n(v,"size",{get:function(){return m(this).size}}),c},setStrong:function(e,t,r){var n=t+" Iterator",s=g(t),a=g(n);u(e,t,(function(e,t){h(this,{type:n,target:e,state:s(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(t)}}},"6d61":function(e,t,r){"use strict";var n=r("23e7"),s=r("da84"),a=r("e330"),i=r("94ca"),o=r("6eeb"),l=r("f183"),u=r("2266"),c=r("19aa"),d=r("1626"),f=r("861d"),v=r("d039"),h=r("1c7e"),g=r("d44e"),m=r("7156");e.exports=function(e,t,r){var p=-1!==e.indexOf("Map"),w=-1!==e.indexOf("Weak"),b=p?"set":"add",x=s[e],_=x&&x.prototype,y=x,C={},k=function(e){var t=a(_[e]);o(_,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(w&&!f(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return w&&!f(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(w&&!f(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})},F=i(e,!d(x)||!(w||_.forEach&&!v((function(){(new x).entries().next()}))));if(F)y=r.getConstructor(t,e,p,b),l.enable();else if(i(e,!0)){var R=new y,O=R[b](w?{}:-0,1)!=R,j=v((function(){R.has(1)})),E=h((function(e){new x(e)})),U=!w&&v((function(){var e=new x,t=5;while(t--)e[b](t,t);return!e.has(-0)}));E||(y=t((function(e,t){c(e,_);var r=m(new x,e,y);return void 0!=t&&u(t,r[b],{that:r,AS_ENTRIES:p}),r})),y.prototype=_,_.constructor=y),(j||U)&&(k("delete"),k("has"),p&&k("get")),(U||O)&&k(b),w&&_.clear&&delete _.clear}return C[e]=y,n({global:!0,forced:y!=x},C),g(y,e),w||r.setStrong(y,e,p),y}},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(e,t,r){var n=r("d039");e.exports=n((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},f183:function(e,t,r){var n=r("23e7"),s=r("e330"),a=r("d012"),i=r("861d"),o=r("1a2d"),l=r("9bf2").f,u=r("241c"),c=r("057f"),d=r("4fad"),f=r("90e3"),v=r("bb2f"),h=!1,g=f("meta"),m=0,p=function(e){l(e,g,{value:{objectID:"O"+m++,weakData:{}}})},w=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,g)){if(!d(e))return"F";if(!t)return"E";p(e)}return e[g].objectID},b=function(e,t){if(!o(e,g)){if(!d(e))return!0;if(!t)return!1;p(e)}return e[g].weakData},x=function(e){return v&&h&&d(e)&&!o(e,g)&&p(e),e},_=function(){y.enable=function(){},h=!0;var e=u.f,t=s([].splice),r={};r[g]=1,e(r).length&&(u.f=function(r){for(var n=e(r),s=0,a=n.length;s<a;s++)if(n[s]===g){t(n,s,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},y=e.exports={enable:_,fastKey:w,getWeakData:b,onFreeze:x};a[g]=!0}}]);
//# sourceMappingURL=chunk-843f4658.6710be08.js.map