var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){i.label=c[1];break}if(6===c[0]&&i.label<a[1]){i.label=a[1],a=c;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(c);break}a[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),r=require("@libs/fetch"),a=require("@libs/defaultCover"),o=function(){function o(){this.id="dilartube",this.name="dilar tube",this.version="1.0.1",this.icon="src/ar/dilartube/icon.png",this.site="https://golden.rest/"}return o.prototype.parseNovels=function(e){var t=this,n=[],r=new Set;return e.data&&e.data.length>0&&e.data.filter((function(e){return e.is_novel})).forEach((function(e){var o=e;r.has(e.title)||(r.add(o.title),n.push({name:e.title||"novel",path:"mangas/".concat(o.id),cover:o.cover?"".concat(t.site,"uploads/manga/cover/").concat(o.id,"/").concat(o.cover):a.defaultCover}))})),e.releases&&e.releases.length>0&&e.releases.filter((function(e){return e.manga.is_novel})).forEach((function(e){var o=e.manga;r.has(o.title)||(r.add(o.title),n.push({name:o.title||"novel",path:"mangas/".concat(o.id),cover:o.cover?"".concat(t.site,"uploads/manga/cover/").concat(o.id,"/").concat(o.cover):a.defaultCover}))})),n},o.prototype.popularNovels=function(n,a){return e(this,arguments,void 0,(function(e,n){var a,o,i=n.showLatestNovels;n.filters;return t(this,(function(t){switch(t.label){case 0:return a="".concat(this.site,"api/releases?page=").concat(e),i&&(a="".concat(this.site,"api/releases?page=").concat(e)),[4,(0,r.fetchApi)(a).then((function(e){return e.json()}))];case 1:return o=t.sent(),[2,this.parseNovels(o)]}}))}))},o.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,a,o,i,c,s,u,l,h,p,f,d,v;return t(this,(function(t){switch(t.label){case 0:return e=[],a=this.site+"api/"+n,o=this.site+"api/"+n+"/releases",[4,(0,r.fetchApi)(a).then((function(e){return e.json()}))];case 1:return i=t.sent(),[4,(0,r.fetchApi)(o).then((function(e){return e.json()}))];case 2:return c=t.sent(),s=i.mangaData,u=c.releases,l={path:n,name:s.arabic_title||"Untitled",author:(s.authors.length>0?s.authors[0].name:"")||"Unknown",summary:s.summary||"",cover:"".concat(this.site,"uploads/manga/cover/").concat(s.id,"/").concat(s.cover),chapters:[]},h=s.translation_status,p={1:"مستمره",0:"منتهية",2:"متوقفة",3:"غير مترجمه"}[h]||"غير معروف",new Set(["مكتمل","جديد","مستمر"]),f=s.categories.map((function(e){return e.name})).join(","),l.genres="".concat(p,",").concat(f),d=s.story_status,v={2:"Ongoing",3:"Completed"}[d]||"Unknown",l.status=v,u.map((function(t){e.push({name:t.title,releaseTime:new Date(t.created_at).toISOString(),path:"".concat(n,"/").concat(s.title.replace(" ","-"),"/").concat(t.chapter),chapterNumber:t.chapter})})),l.chapters=e.reverse(),[2,l]}}))}))},o.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,o,i,c;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(new URL(a,this.site).toString())];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),o=(0,n.load)(e),i=o("script.js-react-on-rails-component").html(),c=JSON.parse(i),[2,c.readerDataAction.readerData.release.content]}}))}))},o.prototype.searchNovels=function(n,a){return e(this,void 0,void 0,(function(){var e,a,o;return t(this,(function(t){switch(t.label){case 0:return(e=new FormData).append("query",n),e.append("includes",'["Manga","Team","Member"]'),[4,(0,r.fetchApi)("https://dilar.tube/api/quick_search",{method:"POST",body:e}).then((function(e){return e.json()}))];case 1:return a=t.sent(),o=a[0],[2,this.parseNovels(o)]}}))}))},o}();exports.default=new o;