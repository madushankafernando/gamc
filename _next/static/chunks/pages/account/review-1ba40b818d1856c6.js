(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1178],{60256:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/review",function(){return c(17100)}])},17100:function(a,b,c){"use strict";c.r(b);var d=c(85893),e=c(67294),f=c(11163),g=c(29208),h=c.n(g),i=c(99245),j=c.n(i),k=c(9005),l=c(3360),m=c(52041),n=c(30501),o=c(42727),p=c(27456),q=c(79741),r=c(94860),s=function(){var a=(0,e.useState)({}),b=a[0],c=a[1],g=(0,q.P0)().accountHub,i=(0,f.useRouter)(),n=(0,e.useState)(!1),s=n[0],t=n[1],u=(0,e.useMemo)(function(){var a=i.query.status,b=void 0===a?m.Ef.PUBLISHED:a,c=Array.isArray(b)?b[0]:b;return Object.values(m.Ef).includes(c)?b:m.Ef.PUBLISHED},[i.query]);(0,e.useEffect)(function(){t(!0);var a=(g||{}).id;if(!a){t(!1),c({});return}(0,k._i)("/api/hub/reviews",{method:"POST",body:JSON.stringify({variables:{reviewFilterValue:{author:{id:{eq:a}},status:{eq:u}},reviewPagination:{pageSize:m.hT},commentFilterValue:{user:{id:{eq:a}},review:{id:{ne:null}}},commentPagination:{pageSize:m.AL},userId:a},query:"GET_REVIEWS_AND_COMMENTS_BY_USER"})}).then(function(a){c((0,l.F)(a.data))}).catch(function(){}).finally(function(){return t(!1)})},[g,u,i]);var v=h()(b,"publishedReview.meta.pagination.total",0),w=h()(b,"draftReview.meta.pagination.total",0),x=h()(b,"pendingReview.meta.pagination.total",0),y=h()(b,"declinedReview.meta.pagination.total",0),z=h()(b,"user")||{};return(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(r.Z,{loading:!0}),(0,d.jsx)(p.Z,{className:"flex-1",children:j()(b)?(0,d.jsx)("div",{className:"uppercase text-4xl text-center font-bold bg-[#000] py-14",children:"No Reviews Found"}):(0,d.jsx)("div",{className:"p-4 md:p-10",children:(0,d.jsx)(o.Z,{data:b,status:u,showReviewFilter:!0,user:z,meta:{published:v,draft:w,pending:x,declined:y}})})})]})},t=function(){return(0,d.jsx)(n.Z,{title:"GameFi.org - My Review",children:(0,d.jsx)(q.ZP,{children:(0,d.jsx)(s,{})})})};b.default=t}},function(a){a.O(0,[7721,1160,7344,1852,6697,344,1049,2041,2727,9774,2888,179],function(){var b;return a(a.s=60256)}),_N_E=a.O()}])