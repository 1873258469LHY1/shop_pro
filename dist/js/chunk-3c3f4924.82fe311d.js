(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c3f4924"],{"69c4":function(t,a,i){"use strict";i("8818")},8818:function(t,a,i){},9760:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"outer"},[i("div",{staticClass:"container"},[i("header",[i("ul",[i("li",{staticClass:"elaborately"},[i("div",{staticStyle:{cursor:"pointer"},on:{click:function(a){return a.stopPropagation(),t.handleClick(a)}}},[i("span",[t._v(t._s(t.tagName))]),i("i",{class:t.isSift?"iconfont icon-arrow-up-bold":"iconfont icon-arrow-down-bold"})]),t.isSift?i("div",{staticClass:"pupupWrap"},[i("ul",{staticClass:"pupup"},[i("li",{staticClass:"selectKindList"},[t._m(0),i("ul",{staticClass:"selectKind"},[i("li",[i("div",{staticClass:"btn",class:{active:"精选歌单"===t.tagName},on:{click:function(a){return t.getTagList("","精选歌单")}}},[t._v(" 精选歌单 ")])])])]),t._l(t.playListTagsList,(function(a){return i("li",{key:a.id,staticClass:"selectKindList"},[i("p",[i("i",{staticClass:"iconfont icon-zhuti"},[t._v(t._s(a.name))])]),i("ul",{staticClass:"selectKind"},t._l(a.data,(function(a){return i("li",{key:a.id},[i("div",{staticClass:"btn",class:{active:t.playListCategory.tagId===a.id},on:{click:function(i){return t.getTagList(a.id,a.name)}}},[t._v(" "+t._s(a.name)+" ")])])})),0)])}))],2)]):t._e()]),"精选歌单"===t.tagName?[i("li",{class:{active:"new"===t.playlistsParameter.order}},[i("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.handleNewHot("new")}}},[t._v("最新")])]),i("li",{class:{active:"hot"===t.playlistsParameter.order}},[i("span",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.handleNewHot("hot")}}},[t._v("最热")])])]:t._e()],2)]),i("div",{staticClass:"songListWarp"},[i("ul",{staticClass:"songList"},t._l(t.playList,(function(a){return i("li",{key:a.id,staticClass:"song",on:{mouseleave:function(a){t.songId=""},click:function(i){return t.handleJump(a.id)}}},[i("div",{staticClass:"bigImg",on:{mouseenter:function(i){t.songId=a.id}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.img,expression:"item.img"}]})]),i("i",{directives:[{name:"show",rawName:"v-show",value:t.songId===a.id,expression:"songId === item.id"}],staticClass:"iconfont icon-play1"}),i("p",{staticClass:"text"},[i("span",[t._v(t._s(a.name))])]),i("p",{staticClass:"icon"},[i("i",{staticClass:"iconfont icon-bofang"},[t._v(" "+t._s(a.listencnt/1e4>1?(a.listencnt/1e4).toFixed(1)+"万":a.listencnt)+" ")])])])})),0)]),i("el-pagination",{attrs:{"current-page":t.playlistsParameter.pn,"page-size":t.playlistsParameter.rn,layout:" prev, pager, next",total:t.total,background:"","pager-count":5},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(a){return t.$set(t.playlistsParameter,"pn",a)},"update:current-page":function(a){return t.$set(t.playlistsParameter,"pn",a)},"update:pageSize":function(a){return t.$set(t.playlistsParameter,"rn",a)},"update:page-size":function(a){return t.$set(t.playlistsParameter,"rn",a)}}})],1)])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("p",[i("i",{staticClass:"iconfont icon-moren"},[t._v("默认")])])}],n=i("f736"),l={name:"Playlists",data:function(){return{songId:"",isSift:!1,playList:[],playListTagsList:[],playlistsParameter:{order:"new",rn:15,pn:1},total:0,tagName:"精选歌单",playListCategory:{tagId:"",rn:12,pn:1}}},methods:{handleJump:function(t){console.log(this.$route),this.$router.push("/playlist_detail/".concat(t))},getTagList:function(t,a){var i=this;t!==this.playListCategory.tagId&&(this.playlistsParameter.pn=1,this.playListCategory.tagId=t,this.tagName=a,"精选歌单"!==this.tagName?Object(n["getCategoryPlayList"])(this.playListCategory).then((function(t){t=t.data,i.total=t.total,i.playList=t.data})):this.getPlayList())},handleNewHot:function(t){this.playlistsParameter.order!==t&&(this.playlistsParameter.order=t,this.getPlayList())},handleCurrentChange:function(){this.getPlayList()},getPlayList:function(){var t=this;Object(n["getPlayList"])(this.playlistsParameter).then((function(a){a=a.data,t.total=+a.total,t.playList=a.data}))},handleClick:function(){var t=this;this.isSift=!this.isSift,window.onclick=function(){t.isSift=!1}}},mounted:function(){var t=this;this.getPlayList(),Object(n["getPlayListTags"])().then((function(a){a.data.pop(),t.playListTagsList=a.data}))}},r=l,o=(i("69c4"),i("2877")),c=Object(o["a"])(r,s,e,!1,null,"b7fcaf9a",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3c3f4924.82fe311d.js.map