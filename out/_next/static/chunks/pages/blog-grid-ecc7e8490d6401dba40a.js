(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5581],{351:function(e,s,l){"use strict";l(7294);var a=l(1664),i=l(5893);s.Z=function(e){var s=e.pageTitle,l=e.homePageUrl,n=e.homePageText,r=e.activePageText;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"page-title-area",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"page-title-content",children:[(0,i.jsx)("h2",{children:s}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a.default,{href:l,children:(0,i.jsx)("a",{children:n})})}),(0,i.jsx)("li",{children:r})]})]})}),(0,i.jsx)("div",{className:"divider"}),(0,i.jsxs)("div",{className:"lines",children:[(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"}),(0,i.jsx)("div",{className:"line"})]}),(0,i.jsx)("div",{className:"banner-shape1",children:(0,i.jsx)("img",{src:"/images/shape/shape9.png",alt:"image"})})]})})}},9072:function(e,s,l){"use strict";l(7294);var a=l(1664),i=l(5893);s.Z=function(){var e=(new Date).getFullYear();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"footer-area",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"footer-content",children:[(0,i.jsx)(a.default,{href:"/",children:(0,i.jsx)("a",{className:"logo",children:(0,i.jsx)("img",{src:"/images/footer.png",alt:"logo"})})}),(0,i.jsxs)("ul",{className:"social-links",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/groups/947919142367894",target:"_blank",children:(0,i.jsx)("i",{className:"ri-facebook-fill"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw",target:"_blank",children:(0,i.jsx)("i",{className:"ri-youtube-fill"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/",target:"_blank",children:(0,i.jsx)("i",{className:"ri-linkedin-fill"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/iysa_official/",target:"_blank",children:(0,i.jsx)("i",{className:"ri-instagram-fill"})})})]}),(0,i.jsxs)("ul",{className:"navbar-nav",children:[(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(a.default,{href:"/contact",children:(0,i.jsx)("a",{className:"nav-link",children:"Support"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(a.default,{href:"/contact",children:(0,i.jsx)("a",{className:"nav-link",children:"Contact"})})})]}),(0,i.jsxs)("p",{className:"copyright",children:["Copyright \xa9 ",e," ",(0,i.jsx)("strong",{children:"IYMIA"}),". Made by"," ",(0,i.jsx)("a",{href:"https://www.iysa.or.id",target:"_blank",children:"IYSA Offical"})]})]})})})})}},2167:function(e,s,l){"use strict";var a=l(3848);s.default=void 0;var i,n=(i=l(7294))&&i.__esModule?i:{default:i},r=l(1063),c=l(4651),t=l(7426);var d={};function o(e,s,l,a){if(e&&r.isLocalURL(s)){e.prefetch(s,l,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[s+"%"+l+(i?"%"+i:"")]=!0}}var h=function(e){var s,l=!1!==e.prefetch,i=c.useRouter(),h=n.default.useMemo((function(){var s=r.resolveHref(i,e.href,!0),l=a(s,2),n=l[0],c=l[1];return{href:n,as:e.as?r.resolveHref(i,e.as):c||n}}),[i,e.href,e.as]),g=h.href,j=h.as,m=e.children,x=e.replace,f=e.shallow,u=e.scroll,b=e.locale;"string"===typeof m&&(m=n.default.createElement("a",null,m));var N=(s=n.default.Children.only(m))&&"object"===typeof s&&s.ref,v=t.useIntersection({rootMargin:"200px"}),p=a(v,2),y=p[0],w=p[1],k=n.default.useCallback((function(e){y(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[N,y]);n.default.useEffect((function(){var e=w&&l&&r.isLocalURL(g),s="undefined"!==typeof b?b:i&&i.locale,a=d[g+"%"+j+(s?"%"+s:"")];e&&!a&&o(i,g,j,{locale:s})}),[j,g,w,b,l,i]);var _={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,l,a,i,n,c,t){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(l))&&(e.preventDefault(),null==c&&a.indexOf("#")>=0&&(c=!1),s[i?"replace":"push"](l,a,{shallow:n,locale:t,scroll:c}))}(e,i,g,j,x,f,u,b)},onMouseEnter:function(e){r.isLocalURL(g)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),o(i,g,j,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var C="undefined"!==typeof b?b:i&&i.locale,M=i&&i.isLocaleDomain&&r.getDomainLocale(j,C,i&&i.locales,i&&i.domainLocales);_.href=M||r.addBasePath(r.addLocale(j,C,i&&i.defaultLocale))}return n.default.cloneElement(s,_)};s.default=h},7426:function(e,s,l){"use strict";var a=l(3848);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,l=e.disabled||!r,t=i.useRef(),d=i.useState(!1),o=a(d,2),h=o[0],g=o[1],j=i.useCallback((function(e){t.current&&(t.current(),t.current=void 0),l||h||e&&e.tagName&&(t.current=function(e,s,l){var a=function(e){var s=e.rootMargin||"",l=c.get(s);if(l)return l;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var s=a.get(e.target),l=e.isIntersecting||e.intersectionRatio>0;s&&l&&s(l)}))}),e);return c.set(s,l={id:s,observer:i,elements:a}),l}(l),i=a.id,n=a.observer,r=a.elements;return r.set(e,s),n.observe(e),function(){r.delete(e),n.unobserve(e),0===r.size&&(n.disconnect(),c.delete(i))}}(e,(function(e){return e&&g(e)}),{rootMargin:s}))}),[l,s,h]);return i.useEffect((function(){if(!r&&!h){var e=n.requestIdleCallback((function(){return g(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[h]),[j,h]};var i=l(7294),n=l(3447),r="undefined"!==typeof IntersectionObserver;var c=new Map},569:function(e,s,l){"use strict";l.r(s);l(7294);var a=l(7331),i=l(351),n=l(9072),r=l(1664),c=l(5893);s.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(i.Z,{pageTitle:"Blog Grid",homePageUrl:"/",homePageText:"Home",activePageText:"Blog Grid"}),(0,c.jsx)("div",{className:"blog-area ptb-100",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row justify-content-center",children:[(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog1.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"})," April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point of differentiation"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog2.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Design is a plan or specification for the construction of an object"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog3.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"The new minimum is a digital magazine with a header featuring a thin"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog4.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"WordPress is open source software you can use to create a beautiful"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog5.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Bootstrap 5 is open source software you can use to create a beautiful"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog6.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Beautiful designs, powerful features, and the freedom to build anything you"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog7.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Branding"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 14, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(0) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point of differentiation"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog8.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Agency"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 13, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(4) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Most designs, powerful features, and the freedom to build anything you"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,c.jsxs)("div",{className:"single-blog-post",children:[(0,c.jsxs)("div",{className:"image",children:[(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{className:"d-block",children:(0,c.jsx)("img",{src:"/images/blog/blog9.jpg",alt:"blog"})})}),(0,c.jsx)(r.default,{href:"/blog-grid",children:(0,c.jsx)("a",{className:"tag",children:"Marketing"})})]}),(0,c.jsxs)("div",{className:"content",children:[(0,c.jsxs)("ul",{className:"meta",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-time-line"}),"April 12, 2021"]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("i",{className:"ri-message-2-line"}),(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"(2) Comment"})})]})]}),(0,c.jsx)("h3",{children:(0,c.jsx)(r.default,{href:"/blog-details",children:(0,c.jsx)("a",{children:"Branding involves developing strategy to create a point"})})})]})]})}),(0,c.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,c.jsx)("div",{className:"pagination-area",children:(0,c.jsxs)("div",{className:"nav-links",children:[(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers current",children:"1"}),(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers",children:"2"}),(0,c.jsx)("a",{href:"/blog-grid",className:"page-numbers",children:"3"}),(0,c.jsx)("a",{href:"/blog-grid",className:"next page-numbers",title:"Next Page",children:(0,c.jsx)("i",{className:"ri-arrow-right-line"})})]})})})]})})}),(0,c.jsx)(n.Z,{})]})}},3177:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-grid",function(){return l(569)}])},1664:function(e,s,l){e.exports=l(2167)},1163:function(e,s,l){e.exports=l(4651)},219:function(e,s,l){"use strict";function a(e,s){if(null==e)return{};var l,a,i=function(e,s){if(null==e)return{};var l,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],s.indexOf(l)>=0||(i[l]=e[l]);return i}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],s.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}l.d(s,{Z:function(){return a}})}},function(e){e.O(0,[7331,9774,2888,179],(function(){return s=3177,e(e.s=s);var s}));var s=e.O();_N_E=s}]);