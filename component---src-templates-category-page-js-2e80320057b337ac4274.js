(self.webpackChunkreconnect_life=self.webpackChunkreconnect_life||[]).push([[119],{7641:function(e,t,n){"use strict";var o=n(7294),a=n(5444),r=n(9),i=n(4533),l=r.ZP.div.withConfig({displayName:"HorizontalCard__Root",componentId:"sc-1sacl8-0"})(["min-height:180px;padding:20px;padding-left:230px;background-color:rgba(255,255,255,0.9);box-sizing:border-box;border-radius:4px;box-shadow:0px 0px 10px 1px rgb(34 39 39 / 10%);margin-bottom:36px;position:relative;box-sizing:border-box;@media (max-width:","px){padding:10px;}"],550),p=(0,r.ZP)(a.Link).withConfig({displayName:"HorizontalCard__Thumbnail",componentId:"sc-1sacl8-1"})(["margin:0;position:absolute;display:block;width:190px;top:18px;bottom:18px;border-radius:4px;left:18px;background-size:cover;background-position:center center;box-sizing:border-box;@media (max-width:","px){position:static;height:190px;width:100%;margin-bottom:1rem;}"],550),c=r.ZP.h2.withConfig({displayName:"HorizontalCard__Title",componentId:"sc-1sacl8-2"})(["font-size:23px;margin-bottom:16px;margin-top:0;"]),d=(0,r.ZP)(a.Link).withConfig({displayName:"HorizontalCard__TitleLink",componentId:"sc-1sacl8-3"})(["color:#222727;text-decoration:none;font-family:",";&:hover{text-decoration:underline;color:#488570;}"],i.Cc),s=r.ZP.div.withConfig({displayName:"HorizontalCard__EntryDetails",componentId:"sc-1sacl8-4"})(["font-size:14px;color:#697979;font-style:italic;margin-bottom:16px;line-height:1.5;"]),m=r.ZP.p.withConfig({displayName:"HorizontalCard__Excerpt",componentId:"sc-1sacl8-5"})(["margin-bottom:0;"]),u=(0,r.ZP)(a.Link).withConfig({displayName:"HorizontalCard__ReadMoreButton",componentId:"sc-1sacl8-6"})(["white-space:nowrap;"]);t.Z=function(e){var t=e.to,n=e.title,a=e.featuredImage,r=e.author,i=e.date,g=e.timeToRead,x=e.excerpt;return o.createElement(l,null,o.createElement(p,{to:t,style:{backgroundImage:'url("/images/'+a+'")'}}),o.createElement(c,null,o.createElement(d,{to:t},n)),o.createElement(s,null,i.getMonth()+1,".",i.getUTCDate(),".",i.getFullYear()," - ",r,o.createElement("br",null),g," minute read"),o.createElement(m,null,x," ",o.createElement(u,{to:t},"Continue Reading »")))}},6253:function(e,t,n){"use strict";var o=n(7294),a=n(6989),r=n(9),i=n(4533),l=n(6379),p=r.ZP.div.withConfig({displayName:"standard-content__Root",componentId:"sc-1d1h2zh-0"})(["max-width:1000px;padding:30px 40px 30px;@media (max-width:","px){padding:30px 20px;}"],i.Ut),c=r.ZP.h1.withConfig({displayName:"standard-content__Title",componentId:"sc-1d1h2zh-1"})(["margin-top:0;"]);t.Z=function(e){var t=e.numPages>1&&e.currentPage?o.createElement(l.Z,{numPages:e.numPages,currentPage:e.currentPage,rootSlug:e.rootSlug}):null,n=e.title?o.createElement(c,null,e.title):null;return o.createElement(a.Z,null,o.createElement(p,null,n,e.children,t))}},6379:function(e,t,n){"use strict";var o=n(7294),a=n(5444),r=n(9),i=(0,r.ZP)(a.Link).withConfig({displayName:"Pagination__PageLink",componentId:"mn0lso-0"})(["display:inline-block;padding:4px 8px;border-radius:4px;text-decoration:none;margin-right:0.25rem;font-weight:600;&:hover{background-color:#366454;color:#EFEBE2;}"]),l=r.ZP.span.withConfig({displayName:"Pagination__CurrentPage",componentId:"mn0lso-1"})(["display:inline-block;padding:4px 8px;margin-right:0.25rem;background-color:#366454;color:#EFEBE2;border-radius:4px;"]);t.Z=function(e){var t=e.numPages,n=e.currentPage,a=e.rootSlug;if(t){for(var r=[],p=0;p<t;p++){var c=a+"/page/"+(p+1);p+1===1&&(c=a||"/"),p+1===n?r.push(o.createElement(l,{key:"current-"+c},p+1)):r.push(o.createElement(i,{to:c,key:c},p+1))}var d=n>2?a+"/page/"+(n-1):a||"/",s=a+"/page/"+(n+1),m=n>1?o.createElement(i,{to:d,key:"prev-"+d},"←"):null,u=n<t?o.createElement(i,{to:s,key:"next-"+s},"→"):null;return o.createElement("div",null,m,r,u)}return null}},2428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(3552),a=n(7294),r=n(6253),i=n(7641),l=n(8739),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.Z)(t,e),t.prototype.render=function(){var e=this.props.data.allMdx.edges,t=this.props.data.site.siteMetadata.authors;return a.createElement(r.Z,{title:"Category: "+this.props.pageContext.categoryName,numPages:this.props.pageContext.numPages,currentPage:this.props.pageContext.currentPage,rootSlug:"/category/"+this.props.pageContext.category},a.createElement(l.Z,{title:this.props.pageContext.categoryName}),e.map((function(e){var n=e.node,o=n.frontmatter.title||n.slug,r=t.find((function(e){return e.id===n.frontmatter.author}));return a.createElement(i.Z,{key:n.slug,to:"/"+n.slug,title:o,featuredImage:n.frontmatter.featuredImage,author:null==r?void 0:r.name,date:new Date(n.frontmatter.date),timeToRead:n.timeToRead,excerpt:n.excerpt})})))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-category-page-js-2e80320057b337ac4274.js.map