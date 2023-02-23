import{DateTime as t}from"luxon";var e,n,r,o,l,s={},i=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(t,e){for(var n in e)t[n]=e[n];return t}function a(t){var e=t.parentNode;e&&e.removeChild(t)}function p(t,n,r){var o,l,s,i={};for(s in n)"key"==s?o=n[s]:"ref"==s?l=n[s]:i[s]=n[s];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(s in t.defaultProps)void 0===i[s]&&(i[s]=t.defaultProps[s]);return c(t,i,o,l,null)}function c(t,e,o,l,s){var i={type:t,props:e,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==s?++r:s};return null==s&&null!=n.vnode&&n.vnode(i),i}function h(t){return t.children}function f(t,e){this.props=t,this.context=e}function d(t,e){if(null==e)return t.__?d(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?d(t):null}function m(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return m(t)}}function y(t){(!t.__d&&(t.__d=!0)&&o.push(t)&&!v.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||setTimeout)(v)}function v(){for(var t;v.__r=o.length;)t=o.sort(function(t,e){return t.__v.__b-e.__v.__b}),o=[],t.some(function(t){var e,n,r,o,l,s;t.__d&&(l=(o=(e=t).__v).__e,(s=e.__P)&&(n=[],(r=u({},o)).__v=o.__v+1,S(s,o,r,e.__n,void 0!==s.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?d(o):l,o.__h),T(n,o),o.__e!=l&&m(o)))})}function g(t,e,n,r,o,l,_,u,a,p){var f,m,y,v,g,w,D,x=r&&r.__k||i,C=x.length;for(n.__k=[],f=0;f<e.length;f++)if(null!=(v=n.__k[f]=null==(v=e[f])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?c(null,v,null,null,v):Array.isArray(v)?c(h,{children:v},null,null,null):v.__b>0?c(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(y=x[f])||y&&v.key==y.key&&v.type===y.type)x[f]=void 0;else for(m=0;m<C;m++){if((y=x[m])&&v.key==y.key&&v.type===y.type){x[m]=void 0;break}y=null}S(t,v,y=y||s,o,l,_,u,a,p),g=v.__e,(m=v.ref)&&y.ref!=m&&(D||(D=[]),y.ref&&D.push(y.ref,null,v),D.push(m,v.__c||g,v)),null!=g?(null==w&&(w=g),"function"==typeof v.type&&v.__k===y.__k?v.__d=a=b(v,a,t):a=k(t,v,y,x,g,a),"function"==typeof n.type&&(n.__d=a)):a&&y.__e==a&&a.parentNode!=t&&(a=d(y))}for(n.__e=w,f=C;f--;)null!=x[f]&&("function"==typeof n.type&&null!=x[f].__e&&x[f].__e==n.__d&&(n.__d=d(r,f+1)),E(x[f],x[f]));if(D)for(f=0;f<D.length;f++)N(D[f],D[++f],D[++f])}function b(t,e,n){for(var r,o=t.__k,l=0;o&&l<o.length;l++)(r=o[l])&&(r.__=t,e="function"==typeof r.type?b(r,e,n):k(n,r,r,o,r.__e,e));return e}function k(t,e,n,r,o,l){var s,i,_;if(void 0!==e.__d)s=e.__d,e.__d=void 0;else if(null==n||o!=l||null==o.parentNode)t:if(null==l||l.parentNode!==t)t.appendChild(o),s=null;else{for(i=l,_=0;(i=i.nextSibling)&&_<r.length;_+=2)if(i==o)break t;t.insertBefore(o,l),s=l}return void 0!==s?s:o.nextSibling}function w(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||_.test(e)?n:n+"px"}function D(t,e,n,r,o){var l;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||w(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||w(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])l=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+l]=n,n?r||t.addEventListener(e,l?C:x,l):t.removeEventListener(e,l?C:x,l);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function x(t){this.l[t.type+!1](n.event?n.event(t):t)}function C(t){this.l[t.type+!0](n.event?n.event(t):t)}function S(t,e,r,o,l,s,i,_,a){var p,c,d,m,y,v,b,k,w,D,x,C,S,T=e.type;if(void 0!==e.constructor)return null;null!=r.__h&&(a=r.__h,_=e.__e=r.__e,e.__h=null,s=[_]),(p=n.__b)&&p(e);try{t:if("function"==typeof T){if(k=e.props,w=(p=T.contextType)&&o[p.__c],D=p?w?w.props.value:p.__:o,r.__c?b=(c=e.__c=r.__c).__=c.__E:("prototype"in T&&T.prototype.render?e.__c=c=new T(k,D):(e.__c=c=new f(k,D),c.constructor=T,c.render=P),w&&w.sub(c),c.props=k,c.state||(c.state={}),c.context=D,c.__n=o,d=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=T.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=u({},c.__s)),u(c.__s,T.getDerivedStateFromProps(k,c.__s))),m=c.props,y=c.state,d)null==T.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==T.getDerivedStateFromProps&&k!==m&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(k,D),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(k,c.__s,D)||e.__v===r.__v){c.props=k,c.state=c.__s,e.__v!==r.__v&&(c.__d=!1),c.__v=e,e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(t){t&&(t.__=e)}),c.__h.length&&i.push(c);break t}null!=c.componentWillUpdate&&c.componentWillUpdate(k,c.__s,D),null!=c.componentDidUpdate&&c.__h.push(function(){c.componentDidUpdate(m,y,v)})}if(c.context=D,c.props=k,c.__v=e,c.__P=t,x=n.__r,C=0,"prototype"in T&&T.prototype.render)c.state=c.__s,c.__d=!1,x&&x(e),p=c.render(c.props,c.state,c.context);else do{c.__d=!1,x&&x(e),p=c.render(c.props,c.state,c.context),c.state=c.__s}while(c.__d&&++C<25);c.state=c.__s,null!=c.getChildContext&&(o=u(u({},o),c.getChildContext())),d||null==c.getSnapshotBeforeUpdate||(v=c.getSnapshotBeforeUpdate(m,y)),S=null!=p&&p.type===h&&null==p.key?p.props.children:p,g(t,Array.isArray(S)?S:[S],e,r,o,l,s,i,_,a),c.base=e.__e,e.__h=null,c.__h.length&&i.push(c),b&&(c.__E=c.__=null),c.__e=!1}else null==s&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=I(r.__e,e,r,o,l,s,i,a);(p=n.diffed)&&p(e)}catch(t){e.__v=null,(a||null!=s)&&(e.__e=_,e.__h=!!a,s[s.indexOf(_)]=null),n.__e(t,e,r)}}function T(t,e){n.__c&&n.__c(e,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(t){t.call(e)})}catch(t){n.__e(t,e.__v)}})}function I(t,n,r,o,l,i,_,u){var p,c,h,f=r.props,m=n.props,y=n.type,v=0;if("svg"===y&&(l=!0),null!=i)for(;v<i.length;v++)if((p=i[v])&&"setAttribute"in p==!!y&&(y?p.localName===y:3===p.nodeType)){t=p,i[v]=null;break}if(null==t){if(null===y)return document.createTextNode(m);t=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),i=null,u=!1}if(null===y)f===m||u&&t.data===m||(t.data=m);else{if(i=i&&e.call(t.childNodes),c=(f=r.props||s).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!u){if(null!=i)for(f={},v=0;v<t.attributes.length;v++)f[t.attributes[v].name]=t.attributes[v].value;(h||c)&&(h&&(c&&h.__html==c.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(t,e,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in e||D(t,l,null,n[l],r);for(l in e)o&&"function"!=typeof e[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===e[l]||D(t,l,e[l],n[l],r)}(t,m,f,l,u),h)n.__k=[];else if(v=n.props.children,g(t,Array.isArray(v)?v:[v],n,r,o,l&&"foreignObject"!==y,i,_,i?i[0]:r.__k&&d(r,0),u),null!=i)for(v=i.length;v--;)null!=i[v]&&a(i[v]);u||("value"in m&&void 0!==(v=m.value)&&(v!==t.value||"progress"===y&&!v||"option"===y&&v!==f.value)&&D(t,"value",v,f.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==t.checked&&D(t,"checked",v,f.checked,!1))}return t}function N(t,e,r){try{"function"==typeof t?t(e):t.current=e}catch(t){n.__e(t,r)}}function E(t,e,r){var o,l;if(n.unmount&&n.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||N(o,null,e)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){n.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(l=0;l<o.length;l++)o[l]&&E(o[l],e,"function"!=typeof t.type);r||null==t.__e||a(t.__e),t.__e=t.__d=void 0}function P(t,e,n){return this.constructor(t,n)}e=i.slice,n={__e:function(t,e,n,r){for(var o,l,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(t)),s=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(e){t=e}throw t}},r=0,f.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof t&&(t=t(u({},n),this.props)),t&&u(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),y(this))},f.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),y(this))},f.prototype.render=h,o=[],v.__r=0;class H extends f{constructor(...t){super(...t),this.headers=[]}componentWillMount(){this.setState({data:this.props.data}),console.log("table will Mounted")}componentWillReceiveProps(t){this.setState({data:t.data}),console.log("table Receive Props")}format(e,n){if(e){if(n)return n(e);if(!e.constructor)return e;switch(e.constructor.name){case"Date":return function(e){return e?(n=e,r=null,n&&("Number"==n.constructor.name?r=t.fromMillis(n):"String"==n.constructor.name?r=t.fromISO(n):"Date"==n.constructor.name&&(r=t.fromJSDate(n))),r).toFormat("MM/dd/yyyy hh:mm a"):null;var n,r}(e);case"Number":return Number.isSafeInteger(e)?e:e.toFixed(3);default:return e}}}getColumn(t,e,n){let r=null,o=e;"object"==typeof e&&e.column&&(o=e.column);try{"function"==typeof o?r=o(t,n):"string"==typeof o&&(r=t[o])}catch(t){r="-"}return this.format(r,e.format)}getTd(t,e,n){let r=p("td",null),o=this.getColumn(t,e,n);return o&&(o.type&&"td"==o.type?r=o:r.props.children=o),"object"==typeof e&&(e.class&&(r.props.class=e.class),e.onClick&&(r.props.onClick=e.onClick(t,n))),r}getRow(t,e){return this.props.columns?this.props.columns.map(n=>this.getTd(t,n,e)):this.headers.map(e=>p("td",null,this.format(t[e])))}getHeader(t){if("string"==typeof this.headers[t])return p("th",null,this.headers[t]);let e=this.headers[t];return p("th",{class:e.class},e.label)}getHeaders(){return this.props.headers&&(this.headers=this.props.headers),this.headers||(this.headers=Object.keys(this.props.data[0])),this.headers.map((t,e)=>this.getHeader(e))}getRowClass(t,e,n){return"string"==typeof t?t:t(e)}render(){return p("div",{class:"o-table"},p("table",{class:this.props.class},p("thead",null,p("tr",null,this.getHeaders())),p("tbody",null,this.props.rowDef&&this.state.data.map((t,e)=>{var n,r;return p("tr",{class:this.getRowClass(null==(n=this.props.rowDef)?void 0:n.class,t,e)},null==(r=this.props.rowDef)?void 0:r.columns.map(n=>this.getTd(t,n,e)))}),!this.props.rowDef&&this.state.data.map((t,e)=>p("tr",{class:t.class||null},this.getRow(t,e)))),this.props.tfoot&&p("tfoot",null,this.props.tfoot.map((t,e)=>p("tr",null,this.getTfootRow(t,e))))))}getTfootRow(t,e){return console.log(t),p(h,null,t.map(t=>this.getTFootColumn(t)))}getTFootColumn(t){if("string"==typeof t)return p("td",null,t);let e=p("td",null);return t.class&&(e.props.class=t.class),t.column&&(e.props.children=t.column),e}}class M extends H{constructor(...t){super(...t),this.state={sortDirection:"",sortedIndex:null}}bestGuessCompare(t,e){return this.state.sortDirection||(this.state.sortDirection="a"),"number"==typeof t&&"number"==typeof e?"a"==this.state.sortDirection?t-e:e-t:"number"==typeof t||"number"==typeof e?(t||(t=Number.NEGATIVE_INFINITY),e||(e=Number.NEGATIVE_INFINITY),"a"==this.state.sortDirection?t-e:e-t):"string"==typeof t&&"string"==typeof e?"a"==this.state.sortDirection?t.localeCompare(e):e.localeCompare(t):"string"==typeof t||"string"==typeof e?(t||(t=""),e||(e=""),"a"==this.state.sortDirection?t.localeCompare(e):e.localeCompare(t)):(t||(t=0),e||(e=0),"a"==this.state.sortDirection?t-e:e-t)}sort(t){if(!this.props.columns&&!this.props.rowDef)return;if(!this.getHeaderData(t).sortable)return;let e=this.props.data.sort((e,n)=>{var r;let o,l,s;if(this.props.columns)s=this.props.columns[t];else if(null!=(r=this.props.rowDef)&&r.columns){var i;s=null==(i=this.props.rowDef)?void 0:i.columns[t]}if(s)if(s.sort){let t=s;t&&t.sort&&(o=t.sort(e),l=t.sort(n))}else o=this.getColumn(e,s,null),l=this.getColumn(n,s,null);return this.bestGuessCompare(o,l)});this.setState({sortedIndex:t,data:e,sortDirection:this.state.sortDirection&&"a"==this.state.sortDirection?"d":"a"})}getHeaderData(t){let e={label:"",class:"",sortable:!1};return this.props.headers&&("string"==typeof this.props.headers[t]?(e.label=this.props.headers[t],e.label&&(e.sortable=!0)):e=this.props.headers[t]),e}getHeader(t){let e=" ",n="",r=this.getHeaderData(t);return n=r.label,r.sortable&&(e="sortable "+(r.class?r.class:"")),p("th",{class:(this.state.sortedIndex==t?this.state.sortDirection:"")+" "+(e||""),onClick:this.sort.bind(this,t)},n,"d"==this.state.sortDirection&&this.state.sortedIndex==t&&p("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"16",height:"16"},p("path",{d:"m 13,6 -5,5 -5,-5 z",fill:"#117cc0"})),"a"==this.state.sortDirection&&this.state.sortedIndex==t&&p("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"16",height:"16"},p("path",{d:"m 13,10 -5,-5 -5,5  z",fill:"#117cc0"})),r&&r.sortable&&this.state.sortedIndex!=t&&p("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"16",height:"16"},p("path",{d:"m 13,9 -5,-5 -5,5  z",fill:"#117cc0"}),p("path",{d:"m 13,11 -5,5 -5,-5 z",fill:"#117cc0"})))}}export{M as SortableTable,H as Table};
//# sourceMappingURL=index.modern.mjs.map
