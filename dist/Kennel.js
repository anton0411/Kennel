'use strict';

var _depiction,_proxyURL,_useShadowDom,_silenceErrors,_iframeHeader,_options,_tint,_packagePrefix,_defaultTint,_views,__classPrivateFieldSet=undefined&&undefined.__classPrivateFieldSet||function(e,i,t){if(!i.has(e))throw new TypeError("attempted to set private field on non-instance");return i.set(e,t),t},__classPrivateFieldGet=undefined&&undefined.__classPrivateFieldGet||function(e,i){if(!i.has(e))throw new TypeError("attempted to get private field on non-instance");return i.get(e)};const marked=require("marked");marked.setOptions({xhtml:!0,gfm:!0});class Kennel{constructor(e,i){_depiction.set(this,void 0),_proxyURL.set(this,void 0),_useShadowDom.set(this,void 0),_silenceErrors.set(this,void 0),_iframeHeader.set(this,void 0),_options.set(this,void 0),_tint.set(this,void 0),_packagePrefix.set(this,void 0),_defaultTint.set(this,void 0),_views.set(this,void 0);__classPrivateFieldSet(this,_depiction,void 0!==e?e:{minVersion:"0.1",tintColor:"#6264D3",class:"DepictionLabelView",text:"(This depiction is empty.)"}),void 0!==i?(__classPrivateFieldSet(this,_proxyURL,void 0!==i.proxyURL?i.proxyURL:""),__classPrivateFieldSet(this,_iframeHeader,void 0!==i.iframeHeader?i.iframeHeader:"<style>@media (prefers-color-scheme: dark) { html {color: white} }</style>"),__classPrivateFieldSet(this,_useShadowDom,Boolean(i.useShadowDom)),__classPrivateFieldSet(this,_silenceErrors,Boolean(i.silenceErrors)),__classPrivateFieldSet(this,_packagePrefix,void 0!==i.packagePrefix?i.packagePrefix:"https://api.parcility.co/render/package/"),__classPrivateFieldSet(this,_defaultTint,void 0!==i.defaultTint?i.defaultTint:"#6264d3")):(__classPrivateFieldSet(this,_proxyURL,""),__classPrivateFieldSet(this,_iframeHeader,"<style>@media (prefers-color-scheme: dark) { html {color: white} }</style>"),__classPrivateFieldSet(this,_useShadowDom,!1),__classPrivateFieldSet(this,_silenceErrors,!1),__classPrivateFieldSet(this,_packagePrefix,"https://api.parcility.co/render/package/"),__classPrivateFieldSet(this,_defaultTint,"#6264d3")),__classPrivateFieldSet(this,_tint,void 0!==__classPrivateFieldGet(this,_depiction).tintColor&&""!==__classPrivateFieldGet(this,_depiction).tintColor?Kennel._sanitizeColor(__classPrivateFieldGet(this,_depiction).tintColor):__classPrivateFieldGet(this,_defaultTint)),__classPrivateFieldSet(this,_views,new Map),__classPrivateFieldGet(this,_views).set("DepictionStackView",e=>this._DepictionStackView(e)),__classPrivateFieldGet(this,_views).set("DepictionAutoStackView",e=>this._DepictionAutoStackView(e)),__classPrivateFieldGet(this,_views).set("DepictionTabView",e=>this._DepictionTabView(e)),__classPrivateFieldGet(this,_views).set("DepictionTableTextView",e=>this._DepictionTableTextView(e)),__classPrivateFieldGet(this,_views).set("DepictionTableButtonView",e=>this._DepictionTableButtonView(e)),__classPrivateFieldGet(this,_views).set("DepictionLabelView",e=>this._DepictionLabelView(e)),__classPrivateFieldGet(this,_views).set("DepictionScreenshotsView",e=>this._DepictionScreenshotsView(e)),__classPrivateFieldGet(this,_views).set("DepictionSpacerView",e=>this._DepictionSpacerView(e)),__classPrivateFieldGet(this,_views).set("DepictionSeparatorView",e=>this._DepictionSeparatorView(e)),__classPrivateFieldGet(this,_views).set("DepictionHeaderView",e=>this._DepictionHeaderView(e)),__classPrivateFieldGet(this,_views).set("DepictionSubheaderView",e=>this._DepictionSubheaderView(e)),__classPrivateFieldGet(this,_views).set("DepictionButtonView",e=>this._DepictionButtonView(e)),__classPrivateFieldGet(this,_views).set("DepictionImageView",e=>this._DepictionImageView(e)),__classPrivateFieldGet(this,_views).set("DepictionRatingView",e=>this._DepictionRatingView(e)),__classPrivateFieldGet(this,_views).set("DepictionReviewView",e=>this._DepictionReviewView(e)),__classPrivateFieldGet(this,_views).set("DepictionWebView",e=>this._DepictionWebView(e)),__classPrivateFieldGet(this,_views).set("DepictionVideoView",e=>this._DepictionVideoView(e)),__classPrivateFieldGet(this,_views).set("DepictionBannersView",e=>this._DepictionBannersView(e)),__classPrivateFieldGet(this,_views).set("FeaturedBannersView",e=>this._DepictionBannersView(e)),__classPrivateFieldGet(this,_views).set("DepictionAdmobView",e=>this._DepictionAdmobView(e)),__classPrivateFieldGet(this,_useShadowDom)?__classPrivateFieldGet(this,_views).set("DepictionMarkdownView",e=>this._DepictionMarkdownShadowDomView(e)):__classPrivateFieldGet(this,_views).set("DepictionMarkdownView",e=>this._DepictionMarkdownView(e));}render(){let e=Kennel._sanitizeColor(__classPrivateFieldGet(this,_tint)),i=`<div class="native_depiction"><style>a, .nd_tint, .nd_active {color: ${e}} .nd_active {border-bottom: 2px solid ${e};} .nd_btn {background-color: ${e}}</style>`;return i+=this._DepictionBaseView(__classPrivateFieldGet(this,_depiction)),i+="</div>",i}_DepictionBaseView(e){let i,t;if(!e.class)return console.log("Kennel: Class for element is not defined."),e.class="UndefinedViewClass",this._DepictionErrorView(e,"Class for element is not defined");try{return e.class.toLowerCase().includes("hidden")?"":(i=__classPrivateFieldGet(this,_views).get(e.class),"function"!=typeof i?this._DepictionUnknownView(e):i(e))}catch(i){return "TypeError"===i.name?(console.error("Kennel: Element is malformed."),this._DepictionErrorView(e,"Could not render malformed element")):-1!==i.indexOf("kennel:")?(t=i.substring(7),console.error("Kennel: "+t),this._DepictionErrorView(e,t)):(console.error("Kennel: An unknown error occurred."),this._DepictionErrorView(e,"An unknown error occurred during render"))}}_DepictionTabView(e){let i,t='<div class="nd_tabView">',n=Kennel._makeIdentifier("nd_tabView");for(t+='<div class="nd_nav">',i=0;i<e.tabs.length;i++)t+=`<div class="${n} ${n}_tab_${i} nd_nav_btn nd_tweak_info_btn ${0==i?"nd_active":""}" onclick="ndChangeTab('.${n}_tab_${i}', '.${n}')">${Kennel._sanitize(e.tabs[i].tabname)}</div>`;for(t+="</div>",t+="<div>",i=0;i<e.tabs.length;i++)t+=`<div class="nd_tab ${n} ${n}_tab_${i} ${i>0?"nd_hidden":""}">`,t+=this._DepictionBaseView(e.tabs[i]),t+="</div>";return t+="</div></div>",t}_DepictionStackView(e){let i,t="";if(void 0!==e.backgroundColor?t+=`<div class="nd_nested_stack" style="background: ${Kennel._sanitizeColor(e.backgroundColor)}">`:t+='<div class="nd_nested_stack">',void 0===e.orientation||"landscape"!==e.orientation.toLowerCase())for(i=0;i<e.views.length;i++)t+=this._DepictionBaseView(e.views[i]);else {for(t+='<div class="nd_landscape_stack">',i=0;i<e.views.length;i++)t+=this._DepictionBaseView(e.views[i]);t+="</div>";}return t+="</div>",t}_DepictionAutoStackView(e){let i,t="";if(void 0!==e.backgroundColor?t+=`<div class="nd_nested_stack" style="background: ${Kennel._sanitizeColor(e.backgroundColor)}; width: ${e.horizontalSpacing?Kennel._sanitizeDouble(e.horizontalSpacing)+"px":"100%"}">`:t+=`<div class="nd_nested_stack" style="width: ${e.horizontalSpacing?Kennel._sanitizeDouble(e.horizontalSpacing)+"px":"100%"}">`,void 0===e.orientation||"landscape"!==e.orientation.toLowerCase())for(i=0;i<e.views.length;i++)t+=this._DepictionBaseView(e.views[i]);else {for(t+='<div class="nd_landscape_stack">',i=0;i<e.views.length;i++)t+=this._DepictionBaseView(e.views[i]);t+="</div>";}return t+="</div>",t}_DepictionTableTextView(e){if(void 0===e.title)throw 'kennel:Missing required "title" property';if(void 0===e.text)throw 'kennel:Missing required "text" property';return `<div class="nd_table"><div class="nd_cell"><div class="nd_title">${Kennel._sanitize(e.title)}</div><div class="nd_text">${Kennel._sanitize(e.text)}</div></div></div>`}_DepictionTableButtonView(e){let i="";if(void 0===e.title)throw 'kennel:Missing required "title" property';if(void 0===e.action)throw 'kennel:Missing required "action" property';return e.openExternal&&(i+=' target="_blank"'),(e.yPadding||e.tintColor)&&(i+=' style="',e.yPadding&&(i+=`padding-bottom: '${Kennel._sanitizeDouble(e.yPadding)}';`),e.tintColor&&(i+=`color: ${Kennel._sanitizeColor(e.tintColor)};`),i+='"'),e.action=Kennel._sanitize(Kennel._buttonLinkHandler(e.action,e.title)),`<a class="nd nd_table-btn" href="${e.action}"${i}><div>${Kennel._sanitize(e.title)}</div></a>`}_DepictionButtonView(e){let i="";if(void 0===e.text)throw 'kennel:Missing required "text" property';if(void 0===e.action)throw 'kennel:Missing required "action" property';return e.openExternal&&(i+=' target="_blank"'),(e.yPadding||e.tintColor)&&(i+=' style="',e.yPadding&&(i+=`padding-bottom: '${Kennel._sanitizeDouble(e.yPadding)}';`),e.tintColor&&(i+=`background-color: ${Kennel._sanitizeColor(e.tintColor)};`),i+='"'),e.action=Kennel._sanitize(Kennel._buttonLinkHandler(e.action,e.text)),`<a class="nd nd_btn" href="${e.action}"${i}>${Kennel._sanitize(e.text)}</a>`}_DepictionMarkdownShadowDomView(e){let i,t,n,r=!1,s=Kennel._makeIdentifier("md");if(void 0===e.markdown)throw 'kennel:Missing required "markdown" property';if(void 0===e.tintColor&&void 0===__classPrivateFieldGet(this,_tint)?e.tintColor="#6264D3":void 0===e.tintColor&&void 0!==__classPrivateFieldGet(this,_tint)&&(e.tintColor=__classPrivateFieldGet(this,_tint)),t='<p style="opacity:0.3">[Warning: This depiction may be trying to maliciously run code in your browser.]</p><br>',e.useRawFormat?(marked.setOptions({gfm:!1}),n=marked(e.markdown).replace(/<hr>/gi,this._DepictionSeparatorView(e)),marked.setOptions({gfm:!0}),-1===n.toLowerCase().indexOf("<script>")&&-1===n.toLowerCase().indexOf("<\/script>")||(n=n.replace(/<script>/im,"&lt;script&gt;").replace(/<\/script>/im,"&lt;/script&gt;"),r=!0,n=`${t}${n}`),/on([^\s]+?)=/im.test(n)&&(r||(n=`${t}${n}`,r=!0),n=n.replace(/on([^\s]+?)=/gi,"onXSSAttempt="))):n=marked(Kennel._laxSanitize(e.markdown)).replace(/<hr>/g,this._DepictionSeparatorView(e)),-1!==n.indexOf("<style>")){let e,t=-1,r=-1;for(;-1!==n.indexOf("<style>",t+1);)t=n.indexOf("<style>",t),r=n.indexOf("</style>",r),e=n.substring(t+7,r),e=e.replace(/body/g,"root").replace(/html/g,"root"),n=n.substring(0,t+7)+e+n.substring(r),t++,r++;i=n.substring(0,n.indexOf("<style>"))+n.substring(n.indexOf("</style>")+8);}else i=n;return `<div id="${s}" class="nd_md_view"><noscript>${i}</noscript><script>mdEl = document.createElement("sandboxed-markdown");shadowRoot = mdEl.attachShadow({mode: 'open'});shadowRoot.innerHTML = \`<style>a {color:${Kennel._sanitizeColor(e.tintColor)};text-decoration: none} a:hover {opacity:0.8} h1, h2, h3, h4, h5, h6, p {margin-top: 5px; margin-bottom: 5px; font-size: 12px;}</style><root>${n}</root>\`;el = document.getElementById("${s}");el.appendChild(mdEl);el.removeAttribute("id");el.removeChild(el.children[0]);el.removeChild(el.children[0]);<\/script></div>`}_DepictionMarkdownView(e){let i,t=!1,n=Kennel._makeIdentifier("md");if(void 0===e.markdown)throw 'kennel:Missing required "markdown" property';return void 0===e.tintColor&&void 0===__classPrivateFieldGet(this,_tint)?e.tintColor="#6264D3":void 0===e.tintColor&&void 0!==__classPrivateFieldGet(this,_tint)&&(e.tintColor=__classPrivateFieldGet(this,_tint)),e.useRawFormat?(marked.setOptions({gfm:!1}),i=marked(e.markdown).replace(/<hr>/gi,this._DepictionSeparatorView(e)),marked.setOptions({gfm:!0}),-1===i.toLowerCase().indexOf("<script>")&&-1===i.toLowerCase().indexOf("<\/script>")||(i=i.replace(/<script>/im,"&lt;script&gt;").replace(/<\/script>/im,"&lt;/script&gt;"),t=!0,i="undefined"+i),/on([^\s]+?)=/im.test(i)&&(t||(i="undefined"+i,t=!0),i=i.replace(/on([^\s]+?)=/gi,"onXSSAttempt="))):i=marked(Kennel._laxSanitize(e.markdown)).replace(/<hr>/g,this._DepictionSeparatorView(e)),i=`<html><head><base target='_top'>${__classPrivateFieldGet(this,_iframeHeader).replace(/"/g,"'")}<style>${void 0!==e.title?"@media (prefers-color-scheme: dark) { html { color: white; }}":""} a {color:${Kennel._sanitizeColor(e.tintColor)};text-decoration: none} a:hover {opacity:0.8} h1, h2, h3, h4, h5, h6, p {margin-top: 5px; margin-bottom: 5px;} body {margin: 0} * {font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', sans-serif}</style></head><body>${i.replace(/"/gi,"&quot;")}</body></html>`,`<iframe onload="this.height = getComputedStyle(this.contentDocument.body.parentElement).height" sandbox="allow-same-origin allow-popups allow-top-navigation" id="${n}" class="nd_md_iframe" srcdoc="${i}"></iframe>`}_DepictionLabelView(e){let i;if(void 0===e.text)throw 'kennel:Missing required "text" property';return i=void 0!==e.margins?Kennel._marginResolver(e.margins):"",e.alignment=Kennel._alignmentResolver(e.alignment),e.fontWeight=Kennel._weightStringResolver(e.fontWeight),e.textColor=void 0!==e.textColor?`color: ${Kennel._sanitizeColor(e.textColor)};`:"",e.fontSize=void 0!==e.fontSize?`font-size: ${Kennel._sanitizeDouble(e.fontSize)}px;`:"",`<div class="nd_label" style="font-weight: ${e.fontWeight}; text-align:${e.alignment}; ${e.textColor}${e.fontSize}${i}">${Kennel._sanitize(e.text)}</div>`}_DepictionScreenshotsView(e){let i,t,n,r,s,o='<div class="nd_scroll_view">',a="";if(void 0===e.screenshots)throw 'kennel:Missing required "screenshots" property';if(void 0===e.itemCornerRadius)throw 'kennel:Missing required "itemCornerRadius" property';if(void 0===e.itemSize)throw 'kennel:Missing required "itemSize" property';for(i=e.itemSize.substring(1,e.itemSize.length-1).split(","),t=Number(i[0]),n=Number(i[1]),a=t>n?`width: ${Kennel._sanitizeDouble(t)}px`:`height: ${Kennel._sanitizeDouble(n)}px`,s=0;s<e.screenshots.length;s++){if(void 0===e.screenshots[s].url)throw 'kennel:Missing required "url" property in screenshot object.';r=Kennel._laxSanitize(`${__classPrivateFieldGet(this,_proxyURL)}${e.screenshots[s].url}`),e.screenshots[s].video?o+=`<video controls class="nd_img_card" style="${Kennel._sanitize(a)}; border-radius: ${Kennel._sanitizeDouble(e.itemCornerRadius)}px" alt="${Kennel._sanitize(e.screenshots[s].accessibilityText)}"><source src="${r}"></video>`:o+=`<img loading="lazy" style="${Kennel._sanitize(a)}; border-radius: ${Kennel._sanitizeDouble(e.itemCornerRadius)}px" class="nd_img_card" alt="${Kennel._sanitize(e.screenshots[s].accessibilityText)}" src="${r}">`;}return o+="</div>",o}_DepictionSpacerView(e){let i;if(void 0===e.spacing)throw 'kennel:Missing required "spacing" property';return i=Kennel._sanitizeDouble(e.spacing),`<div class="nd_br" style="padding-top: ${i}px"></div>`}_DepictionSeparatorView(e){return '<div class="nd_hr_wrap"><hr></div>'}_DepictionHeaderView(e){if(void 0===e.title)throw 'kennel:Missing required "title" property';return e.fontWeight="bold",void 0!==e.useBoldText&&(e.fontWeight=e.useBoldText?"bold":"normal"),`<h3 class="nd_header" style="text-align: ${Kennel._alignmentResolver(e.alignment)};font-weight: ${Kennel._sanitize(e.fontWeight)}">${Kennel._sanitize(e.title)}</h3>`}_DepictionSubheaderView(e){if(void 0===e.title)throw 'kennel:Missing required "title" property';return e.fontWeight="normal",void 0!==e.useBoldText&&(e.fontWeight=e.useBoldText?"bold":"normal"),`<h4 class="nd_header" style="text-align: ${Kennel._alignmentResolver(e.alignment)};font-weight: ${Kennel._sanitize(e.fontWeight)}">${Kennel._sanitize(e.title)}</h4>`}_DepictionImageView(e){let i,t;if(void 0===e.URL)throw 'kennel:Missing required "URL" property';if(void 0===e.width)throw 'kennel:Missing required "width" property';if(void 0===e.height)throw 'kennel:Missing required "height" property';if(void 0===e.cornerRadius)throw 'kennel:Missing required "cornerRadius" property';return i=Kennel._laxSanitize(`${__classPrivateFieldGet(this,_proxyURL)}${e.URL}`),t=void 0!==e.horizontalPadding?`padding-top:${Kennel._sanitizeDouble(e.horizontalPadding)}px;padding-bottom:${Kennel._sanitizeDouble(e.horizontalPadding)}px;`:"",e.alignment=Kennel._alignmentResolver(e.alignment),`<div style="text-align:${e.alignment};"><img loading="lazy" src="${i}" style="width:${Kennel._sanitizeDouble(e.width)}px;height:${Kennel._sanitizeDouble(e.height)}px;border-radius:${Kennel._sanitizeDouble(e.cornerRadius)}px;max-width:100%;${t}" alt="Image from depiction."></div>`}_DepictionRatingView(e){let i;if(void 0===e.rating)throw 'kennel:Missing required "rating" property';if(void 0===e.alignment)throw 'kennel:Missing required "alignment" property';return i=Kennel._starString(e.rating),e.alignment=Kennel._alignmentResolver(e.alignment),`<div title="${Kennel._sanitizeDouble(e.rating)}/5 stars." style="color:#a1a1a1; text-align:${e.alignment};">${i}</div>`}_DepictionReviewView(e){let i,t;if(void 0===e.title)throw 'kennel:Missing required "title" property';if(void 0===e.author)throw 'kennel:Missing required "author" property';if(void 0===e.markdown)throw 'kennel:Missing required "markdown" property';return t=this._DepictionMarkdownView(e),void 0!==e.rating?(e.alignment=2,i=this._DepictionRatingView(e)):i="",`<div class="nd_review"><div class="nd_review_head"><div class="nd_left"><p>${Kennel._sanitize(e.title)}</p><p class="nd_author">by ${Kennel._sanitize(e.author)}</p></div><div class="nd_right">${i}</div></div>${t}</div>`}_DepictionWebView(e){if(void 0===e.URL)throw 'kennel:Missing required "URL" property';if(void 0===e.width)throw 'kennel:Missing required "width" property';if(void 0===e.height)throw 'kennel:Missing required "height" property';return e.alignment=Kennel._alignmentResolver(e.alignment),`<div style="text-align: ${e.alignment}"><iframe class="nd_max_width" src="${Kennel._laxSanitize(e.URL)}" style="width: ${Kennel._sanitizeDouble(e.width)}px; height: ${Kennel._sanitizeDouble(e.height)}px;"></iframe></div>`}_DepictionVideoView(e){let i="";if(void 0===e.URL)throw 'kennel:Missing required "URL" property';if(void 0===e.width)throw 'kennel:Missing required "width" property';if(void 0===e.height)throw 'kennel:Missing required "height" property';if(void 0===e.cornerRadius)throw 'kennel:Missing required "cornerRadius" property';return void 0!==e.showPlaybackControls&&1!=e.showPlaybackControls||(i+="controls "),e.autoplay&&(i+="autoplay "),e.loop&&(i+="loop "),`<div style="text-align: ${Kennel._alignmentResolver(e.alignment)};"><video class="nd_max_width" ${i}style="border-radius: ${Kennel._sanitizeDouble(e.cornerRadius)}px;" width="${Kennel._sanitizeDouble(e.width)}" height="${Kennel._sanitizeDouble(e.height)}"><source src="${Kennel._laxSanitize(e.URL)}"></video></div>`}_DepictionBannersView(e){let i,t,n,r,s,o,a,l,d='<div class="nd_scroll_view">',_="";if(void 0===e.itemSize)throw 'kennel:Missing required "itemSize" property';if(void 0===e.itemCornerRadius)throw 'kennel:Missing required "itemCornerRadius" property';if(void 0===e.banners)throw 'kennel:Missing required "banners" property';for(a=void 0===e.hideShadow?"nd_text_shadow":e.hideShadow?"":"nd_text_shadow",t=e.itemSize.substring(1,e.itemSize.length-1).split(","),n=.75*Number(t[0]),r=.75*Number(t[1]),_=`width: ${Kennel._sanitizeDouble(n)}px; height: ${Kennel._sanitizeDouble(r)}px;`,i=0;i<e.banners.length;i++){if(void 0===e.banners[i].url)throw 'kennel:Missing required "url" property in banner object.';if(void 0===e.banners[i].title)throw 'kennel:Missing required "title" property in banner object.';if(void 0===e.banners[i].package)throw 'kennel:Missing required "package" property in banner object.';s=Kennel._laxSanitize(`${__classPrivateFieldGet(this,_proxyURL)}${e.banners[i].url}`),o=__classPrivateFieldGet(this,_packagePrefix)+Kennel._laxSanitize(e.banners[i].package),l=void 0===e.displayText||e.displayText?`<p class="${a} nd_truncate" style="width: ${Kennel._sanitizeDouble(n-10)}px">${Kennel._sanitize(e.banners[i].title)}</p>`:"",d+=`<a class="nd_card" style="background-image: url(${s}); border-radius: ${Kennel._sanitizeDouble(e.itemCornerRadius)}px; ${_}" href="${o}">${l}</a>`;}return d+="</div>",d}_DepictionAdmobView(e){if(void 0===e.adUnitID)throw 'kennel:Missing required "adUnitID" property';return ""}_DepictionUnknownView(e){return __classPrivateFieldGet(this,_silenceErrors)?"":`<p style="opacity:0.3">[Could not render: ${Kennel._sanitize(e.class)}]</p>`}_DepictionErrorView(e,i){return __classPrivateFieldGet(this,_silenceErrors)?"":`<p style="opacity:0.3;color:red">[${i}: ${Kennel._sanitize(e.class)}]</p>`}static _sanitize(e){let i,t="";e=String(e);for(let n=0;n<e.length;n++)i=e[n],t+=i>="A"&&i<="z"||i>="0"&&i<="9"?i:`&#x${i.charCodeAt(0).toString(16).padStart(4,"0")};`;return t}static _sanitizeDouble(e){let i,t,n=String(e),r="";for(i=0;i<n.length;i++)t=n[i],("."==t||t>="0"&&t<="9")&&(r+=t);return r}static _sanitizeColor(e){let i,t,n="";for(e=String(e),i=0;i<e.length;i++)t=e[i],(t>="A"&&t<="z"||t>="0"&&t<="9"||"#"==t||"."==t||"-"==t||","==t||"("==t||")"==t)&&(n+=t);return n}static _laxSanitize(e){let i,t;e=String(e);let n="";for(i=0;i<e.length;i++)t=e[i],n+="&"===t||"<"===t||">"===t||'"'===t||"'"===t||"`"===t||"{"===t||"}"===t||"$"===t||"\\"===t||"/"===t?`&#x${t.charCodeAt(0).toString(16).padStart(4,"0")};`:t;return n}static _makeIdentifier(e){return void 0===e&&(e="nd"),`${e}_${Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(36)}`}static _starString(e){return e=Math.round(e),"★".repeat(e).padEnd(5,"☆")}static _weightStringResolver(e){return void 0===e?"normal":"normal"==(e=e.toLowerCase())||"bold"==e||"bolder"==e||"lighter"==e?e:"ultralight"==e?"100":"thin"==e?"200":"light"==e?"300":"book"==e?"400":"semibold"==e||"Demibold"==e||"medium"==e?"600":"heavy"==e?"800":"black"==e||"extrablack"==e?"900":void 0}static _marginResolver(e){let i=JSON.parse(e.replace("{","[").replace("}","]"));return `margin: ${Kennel._sanitizeDouble(i[0])}px, ${Kennel._sanitizeDouble(i[3])}px, ${Kennel._sanitizeDouble(i[2])}px, ${Kennel._sanitizeDouble(i[1])}px;`}static _alignmentResolver(e){return 0==e?"left":1==e?"center":2==e?"right":"left"}static _buttonLinkHandler(e,i){const t=e.indexOf("javascript:");return -1!==t?e.substring(0,t)+encodeURIComponent(e.substring(t)):0==e.indexOf("depiction-")?(e=e.substring(10),void 0===i&&(i="Depiction"),`https://api.parcility.co/render/headerless?url=${encodeURIComponent(e)}&name=${i}`):0==e.indexOf("form-")?e.substring(4):e}}_depiction=new WeakMap,_proxyURL=new WeakMap,_useShadowDom=new WeakMap,_silenceErrors=new WeakMap,_iframeHeader=new WeakMap,_options=new WeakMap,_tint=new WeakMap,_packagePrefix=new WeakMap,_defaultTint=new WeakMap,_views=new WeakMap;

module.exports = Kennel;
