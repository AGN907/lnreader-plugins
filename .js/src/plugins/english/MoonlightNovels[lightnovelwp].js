var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(r,s){function o(e){try{i(l.next(e))}catch(e){s(e)}}function n(e){try{i(l.throw(e))}catch(e){s(e)}}function i(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(o,n)}i((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function n(n){return function(i){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,n[0]&&(o=0)),o;)try{if(t=1,l&&(r=2&n[0]?l.return:n[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,n[1])).done)return r;switch(l=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,l=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==n[0]&&2!==n[0])){o=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){o.label=n[1];break}if(6===n[0]&&o.label<r[1]){o.label=r[1],r=n;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(n);break}r[2]&&o.ops.pop(),o.trys.pop();continue}n=a.call(e,o)}catch(e){n=[6,e],l=0}finally{t=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,i])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("htmlparser2"),r=require("@libs/fetch"),s=require("@libs/novelStatus"),o=require("@libs/defaultCover");function n(e,a){var t=e.match(/(\d+)$/);t&&t[0]&&(a.chapterNumber=parseInt(t[0]))}var i=new(function(){function i(e){var a,t;this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var l=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(4+l),this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters}return i.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},i.prototype.safeFecth=function(t,l){return e(this,void 0,void 0,(function(){var e,s,o,n,i;return a(this,(function(a){switch(a.label){case 0:return[4,(0,r.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=l)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return[4,e.text()];case 2:if(s=a.sent(),o=null===(i=null===(n=s.match(/<title>(.*?)<\/title>/))||void 0===n?void 0:n[1])||void 0===i?void 0:i.trim(),this.getHostname(t)!=this.getHostname(e.url)||o&&("Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o))throw new Error("Captcha error, please open in webview");return[2,s]}}))}))},i.prototype.parseNovels=function(e){var a=this;e=(0,t.load)(e).html();var l=[];return(e.match(/<article([\s\S]*?)<\/article>/g)||[]).forEach((function(e){var t=e.match(/<a href="(.*?)".*title="(.*?)"/)||[],r=t[1],s=t[2];if(s&&r){var n=e.match(/<img.*src="(.*?)"(?:\sdata-src="(.*?)")?.*\/?>/)||[];l.push({name:s,cover:n[2]||n[1]||o.defaultCover,path:r.replace(a.site,"")})}})),l},i.prototype.popularNovels=function(t,l){return e(this,arguments,void 0,(function(e,t){var l,r,s,o,n,i,u,c,v,h=t.filters,p=t.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(s in l=null!==(v=null===(c=this.options)||void 0===c?void 0:c.seriesPath)&&void 0!==v?v:"series/",r=this.site+l+"?page="+e,h||(h=this.filters||{}),p&&(r+="&order=latest"),h)if("object"==typeof h[s].value)for(o=0,n=h[s].value;o<n.length;o++)i=n[o],r+="&".concat(s,"=").concat(i);else h[s].value&&(r+="&".concat(s,"=").concat(h[s].value));return[4,this.safeFecth(r,!1)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},i.prototype.parseNovel=function(t){return e(this,void 0,void 0,(function(){var e,r,i,u,c,v,h,p,d,b,f,m,g,y,w,S,k,N,C;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+t,!1)];case 1:return r=a.sent(),i={path:t,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},u=!1,c=!1,v=!1,h=!1,p=!1,d=!1,b=!1,f=!1,m=!1,g=!1,y=0,w=!1,S=[],k={},N=new l.Parser({onopentag:function(a,t){var l;!i.cover&&(null===(l=t.class)||void 0===l?void 0:l.includes("ts-post-image"))?(i.name=t.title,i.cover=t["data-src"]||t.src||o.defaultCover):"genxed"===t.class||"sertogenre"===t.class?u=!0:u&&"a"===a?c=!0:"div"!==a||"entry-content"!==t.class&&"description"!==t.itemprop?"spe"===t.class||"serl"===t.class?h=!0:h&&"span"===a?p=!0:"div"===a&&"sertostat"===t.class?(h=!0,p=!0,f=!0):t.class&&t.class.includes("eplister")?m=!0:m&&"li"===a?g=!0:g&&("a"===a&&void 0===k.path?k.path=t.href.replace(e,"").trim():"epl-num"===t.class?y=1:"epl-title"===t.class?y=2:"epl-date"===t.class?y=3:"epl-price"===t.class&&(y=4)):v=!0},ontext:function(e){var a,t;if(u)c&&(i.genres+=e+", ");else if(v)i.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(d)i.author+=e||"Unknown";else if(b)i.artist+=e||"Unknown";else if(f)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":i.status=s.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":i.status=s.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":i.status=s.NovelStatus.OnHiatus;break;default:i.status=s.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":d=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":f=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":b=!0}}}else if(m&&g)if(1===y)n(e,k);else if(2===y)k.name=(null===(t=null===(a=e.match(RegExp("^".concat(i.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===t?void 0:t.trim())||e.trim(),k.chapterNumber||n(e,k);else if(3===y)k.releaseTime=e;else if(4===y){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":w=!1;break;default:w=!0}}},onclosetag:function(e){var a,t,l;u?c?c=!1:(u=!1,i.genres=null===(a=i.genres)||void 0===a?void 0:a.slice(0,-2)):v?"br"===e?i.summary+="\n":"div"===e&&(v=!1):h?p?"span"===e&&(p=!1,d&&i.author?d=!1:b&&i.artist?b=!1:f&&""!==i.status&&(f=!1)):"div"===e&&(h=!1,i.author=null===(t=i.author)||void 0===t?void 0:t.trim(),i.artist=null===(l=i.artist)||void 0===l?void 0:l.trim()):m&&(g?1===y||2===y||3===y||4===y?y=0:"li"===e&&(g=!1,k.chapterNumber||(k.chapterNumber=0),w||S.push(k),k={}):"ul"===e&&(m=!1))}}),N.write(r),N.end(),S.length&&((null===(C=this.options)||void 0===C?void 0:C.reverseChapters)&&S.reverse(),i.chapters=S),[2,i]}}))}))},i.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,r,s,o,n;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=a.sent(),null===(s=this.options)||void 0===s?void 0:s.customJs)try{r=(0,t.load)(e),e=r.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(n=null===(o=e.match(/<div.*class="epcontent ([\s\S]*?)<div.*class="bottomnav"/g))||void 0===o?void 0:o[0].match(/<p.*>([\s\S]*?)<\/p>/g))||void 0===n?void 0:n.join("\n"))||""]}}))}))},i.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,r;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+t,[4,this.safeFecth(e,!0)];case 1:return r=a.sent(),[2,this.parseNovels(r)]}}))}))},i}())({id:"moonlightnovel",sourceSite:"https://moonlightnovel.com/",sourceName:"Moonlight Novels",options:{lang:"English",reverseChapters:!0,seriesPath:"/novels/"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Amnesia",value:"amnesia"},{label:"Childcare",value:"childcare"},{label:"Comedy",value:"comedy"},{label:"Drama",value:"drama"},{label:"Fantasy",value:"fantasy"},{label:"fantasy of",value:"fantasy-of"},{label:"Fate",value:"fate"},{label:"Fiction",value:"fiction"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Idol",value:"idol"},{label:"Josei",value:"josei"},{label:"Magic",value:"magic"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Modern",value:"modern"},{label:"Mystery",value:"mystery"},{label:"Psychological",value:"psychological"},{label:"Rebirth",value:"rebirth"},{label:"Revenge",value:"revenge"},{label:"Rofan",value:"rofan"},{label:"Romance",value:"romance"},{label:"Romance Fantasy",value:"romance-fantasy"},{label:"Romantic Comedy",value:"romantic-comedy"},{label:"Royalty",value:"royalty"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Supernatural",value:"supernatural"},{label:"Suspense",value:"suspense"},{label:"Tragedy",value:"tragedy"},{label:"Transmigration",value:"transmigration"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Younger Man",value:"younger-man"},{label:"Yuri",value:"yuri"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Chinese",value:"chinese"},{label:"Indonesian",value:"indonesian"},{label:"Japanese",value:"japanese"},{label:"Korean",value:"korean"},{label:"Original",value:"original"},{label:"Web Novel",value:"web-novel"},{label:"Web Novel (KR)",value:"web-novel-kr"},{label:"Webnovel",value:"webnovel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"},{label:"Rating",value:"rating"}]}}});exports.default=i;