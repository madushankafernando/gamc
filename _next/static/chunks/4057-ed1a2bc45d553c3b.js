(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4057],{83946:function(a,b,c){"use strict";function d(a){if(null===a|| !0===a|| !1===a)return NaN;var b=Number(a);return isNaN(b)?b:b<0?Math.ceil(b):Math.floor(b)}c.d(b,{Z:function(){return d}})},48705:function(a,b,c){"use strict";c.r(b),b.default={src:"/_next/static/media/home-widget-1.ce116612.png",height:275,width:184,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAHlBMVEUuMj0jJi8vMTslKDE0N0IcHictMDsVFx8YGyM0OEPkUzImAAAACnRSTlMFgk1WSV4qTEkcA3ZJpwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAChJREFUCJkdxMkRADAIA7E15uq/4kzQQ3A6syEi8m/DWkqmJLM3XZ4HCQEAcqIs5KkAAAAASUVORK5CYII="}},34235:function(a,b,c){"use strict";c.r(b),b.default={src:"/_next/static/media/home-widget-2.6dfc9cf8.png",height:275,width:205,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAIVBMVEUdHycuMTsrLjghIywuMTskJi9MaXE7PU0vMT0kJzAgIitDGQk9AAAAC3RSTlNMTSFTNmYABBRxjtVaxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVAiZFcTJEQAgCASwPWBB+y/YMY8gGdViIpNICiRUfQyQfdsg3SV8m7+VBxQ3AKH2m7rwAAAAAElFTkSuQmCC"}},61557:function(a,b,c){"use strict";c.r(b),b.default={src:"/_next/static/media/instruction.38496d3a.png",height:1209,width:1125,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAALVBMVEVMaXEvPS0hKiMrSiolMiIjNBsiJiwkLSYiMR4mNx0gKSEsOCpIYjU4QjYrMC+09W6KAAAAD3RSTlMAIy4PZNdOilXtO5wzknmSFhWAAAAACXBIWXMAACE4AAAhOAFFljFgAAAANklEQVQImRXKxw3AMBDEQO5ekOTUf7nGvQgMSEgloPu6DaQJCCp1lMXaep+9YJA5fBw5/az+ARftAMLX9KIUAAAAAElFTkSuQmCC"}},20206:function(a,b,c){"use strict";c.r(b),b.default={src:"/_next/static/media/under-stroke-yellow.83482c6b.svg",height:18,width:118}},51068:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(34942),g=c(11163),h=c(9005),i=function(){var a=(0,f.b)().now,b=(0,g.useRouter)(),c=(0,e.useState)(null),i=c[0],j=c[1];(0,e.useEffect)(function(){i||(0,h._i)("https://gamefi.org/api/v1/banners").then(function(a){a||j(null),j(a)}).catch(function(a){return j(null)})},[i]);var k=(0,e.useCallback)(function(b){return null!=b&&!!b.deadline&&1e3*b.deadline>(null==a?void 0:a.getTime())},[a]),l=(0,e.useMemo)(function(){if(!i)return[];var a=[];return i[b.route]||(a=i.default),(null==(a=null==(a=i[b.route])?void 0:a.filter(function(a){return k(a)}))?void 0:a.length)?a:i.default},[i,b.route]),m=(0,e.useState)(null),n=m[0],o=m[1];return(0,e.useEffect)(function(){if(null==l?void 0:l.length){var a=0;o(l[0]);var b=setInterval(function(){a=a>=l.length-1?0:a+1,o(l[a])},1500);return function(){b&&clearInterval(b)}}},[l]),(0,d.jsx)("div",{className:"mx-auto relative mb-4 sm:mb-16",children:(0,d.jsx)("a",{href:null==n?void 0:n.link,target:"_blank",rel:"noreferrer",onClick:function(){(0,h.oc)("banner_click",{id:null==n?void 0:n.id,link:null==n?void 0:n.link,text:null==n?void 0:n.text})},children:(0,d.jsx)("img",{src:null==n?void 0:n.img,alt:null==n?void 0:n.text,className:"mx-auto aspect-[970/90] max-h-[90px]"})})})};b.Z=i},30501:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=c(9008),f=c.n(e),g=c(76483),h=c(40625),i=c(52563),j=c(10879),k=c(59830),l=function(a){var b=a.children,c=a.title,e=a.description,l=a.image,m=a.disableFooter,n=a.extended,o=a.hideTopBar,p=a.className;return(0,d.jsx)("div",{className:"flex w-full h-screen ".concat("dark"),children:(0,d.jsxs)("div",{className:"dark:bg-gamefiDark-900 dark:text-white w-full h-full flex flex-col md:flex-row",children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:c||k.oc}),(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,d.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,d.jsx)("meta",{property:"og:title",content:c||k.oc},"title"),(0,d.jsx)("meta",{property:"og:description",content:e||k.H6},"description"),(0,d.jsx)("meta",{property:"og:image",content:l||"https://gamefi.org/gamefi.jpg?v=1655805418132"},"image"),(0,d.jsx)("meta",{name:"keywords",content:"launchpad, game hub, nft marketplace, game portal, game pass, game guild, tournament, metaverse, ido"}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,d.jsx)("meta",{name:"twitter:title",content:c||k.oc}),(0,d.jsx)("meta",{name:"twitter:description",content:e||k.H6}),(0,d.jsx)("meta",{name:"twitter:image",content:l||"https://gamefi.org/gamefi.jpg?v=1655805418132"})]}),(0,d.jsx)("div",{children:(0,d.jsx)(g.Z,{})}),(0,d.jsxs)("div",{id:"layoutBody",className:"".concat(void 0===p?"":p," w-full h-full overflow-auto relative scroll-smooth"),children:[!(void 0!==o&&o)&&(0,d.jsx)(h.Z,{absolute:n}),b,!m&&(0,d.jsx)(j.Z,{})]}),(0,d.jsx)(i.Z,{})]})})};b.Z=l},35117:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=c(25675),f=c.n(e),g=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"lg:hidden w-full flex justify-center mt-20",children:(0,d.jsx)(f(),{src:c(61557),alt:""})}),(0,d.jsxs)("div",{className:"hidden lg:block md:px-4 lg:px-16 mx-auto py-28 container relative select-none",children:[(0,d.jsx)("div",{className:"absolute bottom-0 left-4 lg:left-10",children:(0,d.jsx)(f(),{src:c(48705),alt:""})}),(0,d.jsx)("div",{className:"absolute bottom-0 right-4 lg:right-10",children:(0,d.jsx)(f(),{src:c(34235),alt:""})}),(0,d.jsx)("div",{className:"uppercase font-bold text-center text-3xl",children:"Easy to join INO & IGO with 5 steps"}),(0,d.jsxs)("div",{className:"mt-14 mx-auto relative flex justify-between",style:{maxWidth:"800px"},children:[(0,d.jsx)("div",{className:"absolute bg-gamefiGreen-700 rounded w-full top-4",style:{height:"2px",top:"calc(50% - 2px)"}}),(0,d.jsxs)("svg",{width:"63",height:"63",viewBox:"0 0 63 63",className:"bg-gamefiDark-900",style:{zIndex:"1"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"29",fill:"#6CDB00",stroke:"#15171E",strokeWidth:"5"}),(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"24.5",fill:"#15171E"}),(0,d.jsx)("path",{d:"M31.5 28.9688C36.6259 28.9688 40.7812 27.08 40.7812 24.75C40.7812 22.42 36.6259 20.5312 31.5 20.5312C26.3741 20.5312 22.2188 22.42 22.2188 24.75C22.2188 27.08 26.3741 28.9688 31.5 28.9688Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M22.2188 28.9688V29.8125C22.2188 32.1429 26.3734 34.0312 31.5 34.0312C36.6266 34.0312 40.7812 32.1429 40.7812 29.8125V28.9688",stroke:"#6CDB00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M22.2188 34.0312V34.875C22.2188 37.2054 26.3734 39.0938 31.5 39.0938C36.6266 39.0938 40.7812 37.2054 40.7812 34.875V34.0312",stroke:"#6CDB00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M22.2188 39.0938V39.9375C22.2188 42.2679 26.3734 44.1562 31.5 44.1562C36.6266 44.1562 40.7812 42.2679 40.7812 39.9375V39.0938",stroke:"#6CDB00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsxs)("svg",{width:"63",height:"63",viewBox:"0 0 63 63",className:"bg-gamefiDark-900",style:{zIndex:"1"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"29",fill:"#6CDB00",stroke:"#15171E",strokeWidth:"5"}),(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"24.5",fill:"#15171E"}),(0,d.jsx)("path",{d:"M38.7904 38.7917H24.207V37.424C24.207 36.1605 24.9622 35.0209 26.1299 34.5365C27.3122 34.0469 29.0716 33.5834 31.4987 33.5834C33.9258 33.5834 35.6852 34.0469 36.8674 34.5375C38.0352 35.0209 38.7904 36.1605 38.7904 37.424V38.7917Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M31.4987 30.4583C33.7999 30.4583 35.6654 28.5929 35.6654 26.2917C35.6654 23.9905 33.7999 22.125 31.4987 22.125C29.1975 22.125 27.332 23.9905 27.332 26.2917C27.332 28.5929 29.1975 30.4583 31.4987 30.4583Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M20.041 24.2084V20.0417H24.2077",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M42.9577 24.2084V20.0417H38.791",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M20.041 38.7917V42.9584H24.2077",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M42.9577 38.7917V42.9584H38.791",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"})]}),(0,d.jsxs)("svg",{width:"63",height:"63",viewBox:"0 0 63 63",className:"bg-gamefiDark-900",style:{zIndex:"1"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"29",fill:"#6CDB00",stroke:"#15171E",strokeWidth:"5"}),(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"24.5",fill:"#15171E"}),(0,d.jsx)("path",{d:"M36.709 21.0834H41.9173V42.9584H21.084V21.0834H26.2923",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M28.375 34.625L30.4583 36.7084L34.625 32.5417",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M26.293 20.0417V26.2917H29.418C29.418 25.1406 30.3503 24.2084 31.5013 24.2084C32.6523 24.2084 33.5846 25.1406 33.5846 26.2917H36.7096V20.0417H26.293Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"})]}),(0,d.jsxs)("svg",{width:"63",height:"63",viewBox:"0 0 63 63",className:"bg-gamefiDark-900",style:{zIndex:"1"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"29",fill:"#6CDB00",stroke:"#15171E",strokeWidth:"5"}),(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"24.5",fill:"#15171E"}),(0,d.jsx)("path",{d:"M37.7507 42.9584H22.2168C21.6153 42.9584 21.1499 42.4312 21.2245 41.8343L23.0578 27.1677C23.1204 26.6672 23.5458 26.2917 24.0501 26.2917H38.956C39.4582 26.2917 39.8826 26.6643 39.9476 27.1623L40.7715 33.4792",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10"}),(0,d.jsx)("path",{d:"M27.334 29.4167V24.2084C27.334 21.9167 29.209 20.0417 31.5007 20.0417C33.7923 20.0417 35.6673 21.9167 35.6673 24.2084V29.4167",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M37.7513 42.9584C40.6278 42.9584 42.9596 40.6265 42.9596 37.75C42.9596 34.8735 40.6278 32.5417 37.7513 32.5417C34.8748 32.5417 32.543 34.8735 32.543 37.75C32.543 40.6265 34.8748 42.9584 37.7513 42.9584Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M37.75 35.6667V39.8334",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M35.668 37.75H39.8346",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"})]}),(0,d.jsxs)("svg",{width:"63",height:"63",viewBox:"0 0 63 63",className:"bg-gamefiDark-900",style:{zIndex:"1"},fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"29",fill:"#6CDB00",stroke:"#15171E",strokeWidth:"5"}),(0,d.jsx)("circle",{cx:"31.5",cy:"31.5",r:"24.5",fill:"#15171E"}),(0,d.jsx)("path",{d:"M25.2507 21.0833H37.7507L41.9173 25.25V39.8333C41.9173 40.3858 41.6978 40.9158 41.3071 41.3065C40.9164 41.6972 40.3865 41.9166 39.834 41.9166H23.1673C22.6148 41.9166 22.0849 41.6972 21.6942 41.3065C21.3035 40.9158 21.084 40.3858 21.084 39.8333V25.25L25.2507 21.0833Z",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M31.5 37.75V28.375",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10"}),(0,d.jsx)("path",{d:"M27.334 33.5833L31.5007 37.75L35.6673 33.5833",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,d.jsx)("path",{d:"M21.084 25.25H41.9173",stroke:"#6CDB00",strokeWidth:"1.5",strokeMiterlimit:"10"})]})]}),(0,d.jsxs)("div",{className:"mx-auto flex justify-between",style:{maxWidth:"800px"},children:[(0,d.jsx)("div",{className:"flex justify-center whitespace-nowrap uppercase text-sm font-semibold",style:{width:"63px"},children:"Stake"}),(0,d.jsx)("div",{className:"flex justify-center whitespace-nowrap uppercase text-sm font-semibold",style:{width:"63px"},children:"KYC"}),(0,d.jsx)("div",{className:"flex justify-center whitespace-nowrap uppercase text-sm font-semibold",style:{width:"63px"},children:"Apply Whitelist"}),(0,d.jsx)("div",{className:"flex justify-center whitespace-nowrap uppercase text-sm font-semibold",style:{width:"63px"},children:"Buy"}),(0,d.jsx)("div",{className:"flex justify-center whitespace-nowrap uppercase text-sm font-semibold",style:{width:"63px"},children:"Claim"})]})]})]})};b.Z=g},22087:function(a,b,c){"use strict";var d=c(85893),e=c(67294),f=c(18064),g=function(a){var b=a.to,c=a.className,g=(0,e.useState)("00"),h=g[0],i=g[1],j=(0,e.useState)("00"),k=j[0],l=j[1],m=(0,e.useState)("00"),n=m[0],o=m[1],p=(0,e.useState)("00"),q=p[0],r=p[1];return(0,e.useEffect)(function(){var a=new Date(1e3*Number(b));if(a<new Date){i("00"),l("00"),o("00"),r("00");return}var c=setInterval(function(){if(a<new Date){i("00"),l("00"),o("00"),r("00");return}var b=(0,f.Z)({start:new Date,end:a});i(b.days<10?"0".concat(b.days):"".concat(b.days)),l(b.hours<10?"0".concat(b.hours):"".concat(b.hours)),o(b.minutes<10?"0".concat(b.minutes):"".concat(b.minutes)),r(b.seconds<10?"0".concat(b.seconds):"".concat(b.seconds))},1e3);return function(){clearInterval(c)}},[b]),(0,d.jsxs)("div",{className:"flex font-medium ".concat(c),children:[(0,d.jsxs)("div",{className:"text-center",children:[h,"d"]}),(0,d.jsx)("span",{className:"mx-1",children:":"}),(0,d.jsxs)("div",{className:"text-center",children:[k,"h"]}),(0,d.jsx)("span",{className:"mx-1",children:":"}),(0,d.jsxs)("div",{className:"text-center",children:[n,"m"]}),(0,d.jsx)("span",{className:"mx-1",children:":"}),(0,d.jsxs)("div",{className:"text-center",children:[q,"s"]})]})};b.Z=g},6021:function(a,b,c){"use strict";c.d(b,{x9:function(){return j},l0:function(){return h},mh:function(){return k},CG:function(){return i},QV:function(){return l}}),c(59830);var d={src:"/_next/static/media/community.60cf6bfd.svg",height:14,width:17},e={src:"/_next/static/media/seed.7daf79fb.svg",height:17,width:16},f={src:"/_next/static/media/public.be55e956.svg",height:16,width:16},g={src:"/_next/static/media/lock.b46eb7d4.svg",height:16,width:14},h=function(a){var b,c=1e3*+a.start_join_pool_time,d=1e3*+a.end_join_pool_time,e=1e3*+a.start_time,f=1e3*+a.start_pre_order_time||null,g=1e3*+(null===(b=a.freeBuyTimeSetting)|| void 0===b?void 0:b.start_buy_time)||null,h=1e3*+a.finish_time||null;return{startJoinPooltime:c,endJoinPoolTime:d,startBuyTime:e,freeBuyTime:g,finishTime:h,startPreOrderTime:f}},i=function(a){switch(a){case 1:return{title:"private",icon:g};case 2:return{title:"seed",icon:e};case 3:return{title:"community",icon:d};default:return{title:"public",icon:f}}},j=function(a){return a?new Date(1e3*Number(a)):null},k=function(a,b,c){return a&&b?j(a).getTime()<=(null==c?void 0:c.getTime())&&j(b).getTime()>(null==c?void 0:c.getTime()):null},l=function(a,b){return b?Math.round(Number(a||"0")*b)/b:0}},79654:function(){}}])