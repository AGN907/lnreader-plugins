var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function l(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(l,a)}u((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(l=0)),l;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=l.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=e.call(t,l)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("@libs/filterInputs"),i=require("@libs/defaultCover"),o=require("@libs/fetch"),l=require("@libs/novelStatus"),a=r(require("dayjs")),u=/<script id="__NEXT_DATA__" type="application\/json">(\{.*?\})<\/script>/,s=function(){function r(){this.id="RNRF",this.name="РанобэРФ",this.site="https://ранобэ.рф",this.version="1.0.1",this.icon="src/ru/ranoberf/icon.png",this.filters={sort:{label:"Сортировка",value:"popular",options:[{label:"Рейтинг",value:"popular"},{label:"Дате добавления",value:"new"},{label:"Дате обновления",value:"lastPublishedChapter"},{label:"Законченные",value:"completed"}],type:n.FilterTypes.Picker}}}return r.prototype.popularNovels=function(r,n){return t(this,arguments,void 0,(function(t,r){var n,l,a,s,c,p,h,v,f,d=this,b=r.showLatestNovels,m=r.filters;return e(this,(function(e){switch(e.label){case 0:return n=this.site+"/books?order=",n+=b?"lastPublishedChapter":(null===(p=null==m?void 0:m.sort)||void 0===p?void 0:p.value)||"popular",n+="&page="+t,[4,(0,o.fetchApi)(n).then((function(t){return t.text()}))];case 1:return l=e.sent(),a=[],(s=l.match(u))instanceof Array&&s[1]&&(c=JSON.parse(s[1]),null===(f=null===(v=null===(h=c.props.pageProps)||void 0===h?void 0:h.totalData)||void 0===v?void 0:v.items)||void 0===f||f.forEach((function(t){var e;return a.push({name:t.title,cover:(null===(e=null==t?void 0:t.verticalImage)||void 0===e?void 0:e.url)?d.site+t.verticalImage.url:i.defaultCover,path:"/"+t.slug})}))),[2,a]}}))}))},r.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,n,s,c,p,h,v,f;return e(this,(function(e){switch(e.label){case 0:return[4,(0,o.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),n={path:r,name:""},(s=t.match(u))instanceof Array&&s[1]&&(c=JSON.parse(s[1]).props.pageProps.book,n.name=c.title,n.summary=c.description,n.cover=(null===(h=c.verticalImage)||void 0===h?void 0:h.url)?this.site+c.verticalImage.url:i.defaultCover,n.status=(null==c?void 0:c.additionalInfo.includes("Активен"))?l.NovelStatus.Ongoing:l.NovelStatus.Completed,c.author&&(n.author=c.author),(null===(v=c.genres)||void 0===v?void 0:v.length)&&(n.genres=null==c?void 0:c.genres.map((function(t){return t.title})).join(",")),(null===(f=c.chapters)||void 0===f?void 0:f.length)&&(p=[],c.chapters.forEach((function(t,e){t.isDonate&&!t.isUserPaid||p.push({name:t.title,path:t.url,releaseTime:(0,a.default)(t.publishedAt).format("LLL"),chapterNumber:c.chapters.length-e})})),n.chapters=p.reverse())),[2,n]}}))}))},r.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){var t,n,i,l,a,s,c;return e(this,(function(e){switch(e.label){case 0:return[4,(0,o.fetchApi)(this.site+r).then((function(t){return t.text()}))];case 1:return t=e.sent(),(n=t.match(u))instanceof Array&&n[1]?[2,(null===(c=null===(s=null===(a=null===(l=null===(i=JSON.parse(n[1]))||void 0===i?void 0:i.props)||void 0===l?void 0:l.pageProps)||void 0===a?void 0:a.chapter)||void 0===s?void 0:s.content)||void 0===c?void 0:c.text)||""]:[2,""]}}))}))},r.prototype.searchNovels=function(r){return t(this,void 0,void 0,(function(){var t,n,l,a=this;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/v3/books?filter[or][0][title][like]=").concat(r,"&filter[or][1][titleEn][like]=").concat(r,"&filter[or][2][fullTitle][like]=").concat(r,"&filter[status][]=active&filter[status][]=abandoned&filter[status][]=completed&expand=verticalImage"),[4,(0,o.fetchApi)(t).then((function(t){return t.json()}))];case 1:return n=e.sent().items,l=[],n.forEach((function(t){var e;return l.push({name:t.title,cover:(null===(e=null==t?void 0:t.verticalImage)||void 0===e?void 0:e.url)?a.site+t.verticalImage.url:i.defaultCover,path:"/"+t.slug})})),[2,l]}}))}))},r}();exports.default=new s;