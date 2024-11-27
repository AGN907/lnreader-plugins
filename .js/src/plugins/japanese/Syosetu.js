var e=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function i(e){try{u(a.next(e))}catch(e){l(e)}}function o(e){try{u(a.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}u((a=a.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,a,r,l,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("cheerio"),a=require("@libs/fetch"),r=require("@libs/defaultCover"),l=require("@libs/filterInputs"),i=function(){function i(){var e=this;this.id="yomou.syosetu",this.name="Syosetu",this.icon="src/jp/syosetu/icon.png",this.site="https://yomou.syosetu.com/",this.novelPrefix="https://ncode.syosetu.com",this.version="1.1.0",this.headers={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"},this.searchUrl=function(t,n){return"".concat(e.site,"search.php?order=").concat(n||"hyoka").concat(void 0!==t?"&p=".concat(t<=1||t>100?"1":t):"")},this.filters={ranking:{type:l.FilterTypes.Picker,label:"Ranked by",options:[{label:"日間",value:"daily"},{label:"週間",value:"weekly"},{label:"月間",value:"monthly"},{label:"四半期",value:"quarter"},{label:"年間",value:"yearly"},{label:"累計",value:"total"}],value:"total"},genre:{type:l.FilterTypes.Picker,label:"Ranking Genre",options:[{label:"総ジャンル",value:""},{label:"異世界転生/転移〔恋愛〕〕",value:"1"},{label:"異世界転生/転移〔ファンタジー〕",value:"2"},{label:"異世界転生/転移〔文芸・SF・その他〕",value:"o"},{label:"異世界〔恋愛〕",value:"101"},{label:"現実世界〔恋愛〕",value:"102"},{label:"ハイファンタジー〔ファンタジー〕",value:"201"},{label:"ローファンタジー〔ファンタジー〕",value:"202"},{label:"純文学〔文芸〕",value:"301"},{label:"ヒューマンドラマ〔文芸〕",value:"302"},{label:"歴史〔文芸〕",value:"303"},{label:"推理〔文芸〕",value:"304"},{label:"ホラー〔文芸〕",value:"305"},{label:"アクション〔文芸〕",value:"306"},{label:"コメディー〔文芸〕",value:"307"},{label:"VRゲーム〔SF〕",value:"401"},{label:"宇宙〔SF〕",value:"402"},{label:"空想科学〔SF〕",value:"403"},{label:"パニック〔SF〕",value:"404"},{label:"童話〔その他〕",value:"9901"},{label:"詩〔その他〕",value:"9902"},{label:"エッセイ〔その他〕",value:"9903"},{label:"その他〔その他〕",value:"9999"}],value:""},modifier:{type:l.FilterTypes.Picker,label:"Modifier",options:[{label:"すべて",value:"total"},{label:"連載中",value:"r"},{label:"完結済",value:"er"},{label:"短編",value:"t"}],value:"total"}}}return i.prototype.popularNovels=function(l,i){return e(this,arguments,void 0,(function(l,i){var o,u=this,s=i.filters;return t(this,(function(i){switch(i.label){case 0:return o=function(l){return e(u,void 0,void 0,(function(){var e,i,o,u,c=this;return t(this,(function(t){switch(t.label){case 0:return e=this.site,s.genre.value?e+="rank/".concat(1===s.genre.value.length?"isekailist":"genrelist","/type/").concat(s.ranking.value,"_").concat(s.genre.value).concat("total"===s.modifier.value?"":"_".concat(s.modifier.value),"/?p=").concat(l):e+="rank/list/type/".concat(s.ranking.value,"_").concat(s.modifier.value,"/?p=").concat(l),[4,(0,a.fetchApi)(e)];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),o=(0,n.load)(i,{decodeEntities:!1}),parseInt(o(".is-current").html()||"1")!==l?[2,[]]:(u=[],o(".c-card").each((function(e,t){var n=o(t).find(".p-ranklist-item__title a"),a=n.attr("href");if(a){var l=n.text(),i={path:a.replace(c.novelPrefix,""),name:l,cover:r.defaultCover};u.push(i)}})),[2,u])}}))}))},[4,o(l)];case 1:return[2,i.sent()]}}))}))},i.prototype.parseNovel=function(l){return e(this,void 0,void 0,(function(){var e,i,o,u,s,c=this;return t(this,(function(t){switch(t.label){case 0:return e=[],[4,(0,a.fetchApi)(this.novelPrefix+l,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return i=t.sent(),o=(0,n.load)(i,{decodeEntities:!1}),u="Unknown",o(".c-announce").text().includes("連載中")?u="Ongoing":o(".c-announce").text().includes("完結")?u="Completed":o(".c-announce").text().includes("約2ヶ月以上")&&(u="On Hiatus"),(s={path:l,name:o(".p-novel__title").text(),author:o(".p-novel__author").text().replace("作者：","").trim(),status:u,artist:"",cover:r.defaultCover}).summary=o("#novel_ex").text().trim(),o(".p-eplist__sublist").each((function(t,n){var a=o(n).find("a"),r=a.attr("href"),l=a.text().trim(),i=o(n).find(".p-eplist__update").text().trim().split(" ")[0].replace(/\//g,"-");r&&e.push({name:l,releaseTime:i,path:r.replace(c.novelPrefix,"")})})),s.chapters=e,[2,s]}}))}))},i.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.novelPrefix+r,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),l=(0,n.load)(e,{decodeEntities:!1}),[2,l(".p-novel__body .js-novel-text").find("p").map((function(e,t){return l(t).text()})).get().join("\n")||""]}}))}))},i.prototype.searchNovels=function(l,i){return e(this,void 0,void 0,(function(){var o,u=this;return t(this,(function(s){switch(s.label){case 0:return o=function(i){return e(u,void 0,void 0,(function(){var e,o,u,s,c=this;return t(this,(function(t){switch(t.label){case 0:return e=this.searchUrl(i)+"&word=".concat(l),[4,(0,a.fetchApi)(e,{headers:this.headers})];case 1:return[4,t.sent().text()];case 2:return o=t.sent(),u=(0,n.load)(o,{decodeEntities:!1}),s=[],u(".searchkekka_box").each((function(e,t){var n=u(t).find(".novel_h"),a=n.children()[0].attribs.href.replace(c.novelPrefix,"");a&&s.push({name:n.text(),path:a,cover:r.defaultCover})})),[2,s]}}))}))},[4,o(i)];case 1:return[2,s.sent()]}}))}))},i.prototype.resolveUrl=function(e){return this.novelPrefix+e},i}();exports.default=new i;