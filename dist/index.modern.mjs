import{DateTime as e}from"luxon";var t,n,l,o,r,_={},s=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,n,l){var o,r,_,s={};for(_ in n)"key"==_?o=n[_]:"ref"==_?r=n[_]:s[_]=n[_];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):l),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===s[_]&&(s[_]=e.defaultProps[_]);return p(e,s,o,r,null)}function p(e,t,o,r,_){var s={type:e,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++l:_};return null==_&&null!=n.vnode&&n.vnode(s),s}function f(e){return e.children}function h(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function m(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!v.__r++||r!==n.debounceRendering)&&((r=n.debounceRendering)||setTimeout)(v)}function v(){for(var e;v.__r=o.length;)e=o.sort(function(e,t){return e.__v.__b-t.__v.__b}),o=[],e.some(function(e){var t,n,l,o,r,_;e.__d&&(r=(o=(t=e).__v).__e,(_=t.__P)&&(n=[],(l=u({},o)).__v=o.__v+1,D(_,o,l,t.__n,void 0!==_.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?d(o):r,o.__h),T(n,o),o.__e!=r&&y(o)))})}function g(e,t,n,l,o,r,i,u,c,a){var h,y,m,v,g,w,x,S=l&&l.__k||s,C=S.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(v=n.__k[h]=null==(v=t[h])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?p(null,v,null,null,v):Array.isArray(v)?p(f,{children:v},null,null,null):v.__b>0?p(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(m=S[h])||m&&v.key==m.key&&v.type===m.type)S[h]=void 0;else for(y=0;y<C;y++){if((m=S[y])&&v.key==m.key&&v.type===m.type){S[y]=void 0;break}m=null}D(e,v,m=m||_,o,r,i,u,c,a),g=v.__e,(y=v.ref)&&m.ref!=y&&(x||(x=[]),m.ref&&x.push(m.ref,null,v),x.push(y,v.__c||g,v)),null!=g?(null==w&&(w=g),"function"==typeof v.type&&v.__k===m.__k?v.__d=c=k(v,c,e):c=b(e,v,m,S,g,c),"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=d(m))}for(n.__e=w,h=C;h--;)null!=S[h]&&("function"==typeof n.type&&null!=S[h].__e&&S[h].__e==n.__d&&(n.__d=d(l,h+1)),N(S[h],S[h]));if(x)for(h=0;h<x.length;h++)M(x[h],x[++h],x[++h])}function k(e,t,n){for(var l,o=e.__k,r=0;o&&r<o.length;r++)(l=o[r])&&(l.__=e,t="function"==typeof l.type?k(l,t,n):b(n,l,l,o,l.__e,t));return t}function b(e,t,n,l,o,r){var _,s,i;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(null==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),_=null;else{for(s=r,i=0;(s=s.nextSibling)&&i<l.length;i+=2)if(s==o)break e;e.insertBefore(o,r),_=r}return void 0!==_?_:o.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function x(e,t,n,l,o){var r;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof l&&(e.style.cssText=l=""),l)for(t in l)n&&t in n||w(e.style,t,"");if(n)for(t in n)l&&n[t]===l[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?l||e.addEventListener(t,r?C:S,r):e.removeEventListener(t,r?C:S,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function S(e){this.l[e.type+!1](n.event?n.event(e):e)}function C(e){this.l[e.type+!0](n.event?n.event(e):e)}function D(e,t,l,o,r,_,s,i,c){var a,p,d,y,m,v,k,b,w,x,S,C,D,T=t.type;if(void 0!==t.constructor)return null;null!=l.__h&&(c=l.__h,i=t.__e=l.__e,t.__h=null,_=[i]),(a=n.__b)&&a(t);try{e:if("function"==typeof T){if(b=t.props,w=(a=T.contextType)&&o[a.__c],x=a?w?w.props.value:a.__:o,l.__c?k=(p=t.__c=l.__c).__=p.__E:("prototype"in T&&T.prototype.render?t.__c=p=new T(b,x):(t.__c=p=new h(b,x),p.constructor=T,p.render=R),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=x,p.__n=o,d=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=u({},p.__s)),u(p.__s,T.getDerivedStateFromProps(b,p.__s))),y=p.props,m=p.state,d)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==T.getDerivedStateFromProps&&b!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,x)||t.__v===l.__v){p.props=b,p.state=p.__s,t.__v!==l.__v&&(p.__d=!1),p.__v=t,t.__e=l.__e,t.__k=l.__k,t.__k.forEach(function(e){e&&(e.__=t)}),p.__h.length&&s.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,x),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(y,m,v)})}if(p.context=x,p.props=b,p.__v=t,p.__P=e,S=n.__r,C=0,"prototype"in T&&T.prototype.render)p.state=p.__s,p.__d=!1,S&&S(t),a=p.render(p.props,p.state,p.context);else do{p.__d=!1,S&&S(t),a=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(o=u(u({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(y,m)),D=null!=a&&a.type===f&&null==a.key?a.props.children:a,g(e,Array.isArray(D)?D:[D],t,l,o,r,_,s,i,c),p.base=t.__e,t.__h=null,p.__h.length&&s.push(p),k&&(p.__E=p.__=null),p.__e=!1}else null==_&&t.__v===l.__v?(t.__k=l.__k,t.__e=l.__e):t.__e=P(l.__e,t,l,o,r,_,s,c);(a=n.diffed)&&a(t)}catch(e){t.__v=null,(c||null!=_)&&(t.__e=i,t.__h=!!c,_[_.indexOf(i)]=null),n.__e(e,t,l)}}function T(e,t){n.__c&&n.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){n.__e(e,t.__v)}})}function P(e,n,l,o,r,s,i,u){var a,p,f,h=l.props,y=n.props,m=n.type,v=0;if("svg"===m&&(r=!0),null!=s)for(;v<s.length;v++)if((a=s[v])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){e=a,s[v]=null;break}if(null==e){if(null===m)return document.createTextNode(y);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,y.is&&y),s=null,u=!1}if(null===m)h===y||u&&e.data===y||(e.data=y);else{if(s=s&&t.call(e.childNodes),p=(h=l.props||_).dangerouslySetInnerHTML,f=y.dangerouslySetInnerHTML,!u){if(null!=s)for(h={},v=0;v<e.attributes.length;v++)h[e.attributes[v].name]=e.attributes[v].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,l,o){var r;for(r in n)"children"===r||"key"===r||r in t||x(e,r,null,n[r],l);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||x(e,r,t[r],n[r],l)}(e,y,h,r,u),f)n.__k=[];else if(v=n.props.children,g(e,Array.isArray(v)?v:[v],n,l,o,r&&"foreignObject"!==m,s,i,s?s[0]:l.__k&&d(l,0),u),null!=s)for(v=s.length;v--;)null!=s[v]&&c(s[v]);u||("value"in y&&void 0!==(v=y.value)&&(v!==e.value||"progress"===m&&!v||"option"===m&&v!==h.value)&&x(e,"value",v,h.value,!1),"checked"in y&&void 0!==(v=y.checked)&&v!==e.checked&&x(e,"checked",v,h.checked,!1))}return e}function M(e,t,l){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,l)}}function N(e,t,l){var o,r;if(n.unmount&&n.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||M(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){n.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&N(o[r],t,"function"!=typeof e.type);l||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function R(e,t,n){return this.constructor(e,n)}t=s.slice,n={__e:function(e,t,n,l){for(var o,r,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,l||{}),_=o.__d),_)return o.__E=o}catch(t){e=t}throw e}},l=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=f,o=[],v.__r=0;class E extends h{constructor(...e){super(...e),this.headers=[]}componentWillMount(){this.setState({data:this.props.data}),console.log("table will Mounted")}componentWillReceiveProps(e){this.setState({data:e.data}),console.log("table Receive Props")}format(t,n){if(t){if(n)return n(t);if(!t.constructor)return t;switch(t.constructor.name){case"Date":return function(t){return t?(n=t,l=null,n&&("Number"==n.constructor.name?l=e.fromMillis(n):"String"==n.constructor.name?l=e.fromISO(n):"Date"==n.constructor.name&&(l=e.fromJSDate(n))),l).toFormat("MM/dd/yyyy hh:mm a"):null;var n,l}(t);case"Number":return Number.isSafeInteger(t)?t:t.toFixed(3);default:return t}}}getColumn(e,t,n){let l=null,o=t;"object"==typeof t&&t.column&&(o=t.column);try{"function"==typeof o?l=o(e,n):"string"==typeof o&&(l=e[o])}catch(e){l="-"}return this.format(l,t.format)}getTd(e,t,n){let l=a("td",null),o=this.getColumn(e,t,n);return o&&(o.type&&"td"==o.type?l=o:l.props.children=o),"object"==typeof t&&(t.class&&(l.props.class=t.class),t.onClick&&(l.props.onClick=t.onClick(e,n))),l}getRow(e,t){return this.props.columns?this.props.columns.map(n=>this.getTd(e,n,t)):this.headers.map(t=>a("td",null,this.format(e[t])))}getHeader(e){if("string"==typeof this.headers[e])return a("th",null,this.headers[e]);let t=this.headers[e];return a("th",{class:t.class},t.label)}getHeaders(){return this.props.headers&&(this.headers=this.props.headers),this.headers||(this.headers=Object.keys(this.props.data[0])),this.headers.map((e,t)=>this.getHeader(t))}getRowClass(e,t,n){return"string"==typeof e?e:e(t)}render(){return a("div",{class:"o-table"},a("table",{class:this.props.class},a("thead",null,a("tr",null,this.getHeaders())),a("tbody",null,this.props.rowDef&&this.state.data.map((e,t)=>{var n,l;return a("tr",{class:this.getRowClass(null==(n=this.props.rowDef)?void 0:n.class,e,t)},null==(l=this.props.rowDef)?void 0:l.columns.map(n=>this.getTd(e,n,t)))}),!this.props.rowDef&&this.state.data.map((e,t)=>a("tr",{class:e.class||null},this.getRow(e,t)))),this.props.tfoot&&a("tfoot",null,this.props.tfoot.map((e,t)=>a("tr",null,this.getTfootRow(e,t))))))}getTfootRow(e,t){return console.log(e),a(f,null,e.map(e=>this.getTFootColumn(e)))}getTFootColumn(e){if("string"==typeof e)return a("td",null,e);let t=a("td",null);return e.class&&(t.props.class=e.class),e.column&&(t.props.children=e.column),t}}export{E as Table};
//# sourceMappingURL=index.modern.mjs.map
