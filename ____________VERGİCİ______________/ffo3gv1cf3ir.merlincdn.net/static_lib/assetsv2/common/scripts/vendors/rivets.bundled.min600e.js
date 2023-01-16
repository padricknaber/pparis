!function(){function n(t,e,i,n){return new s(t,e,i,n)}function s(t,e,i,n){this.options=n||{},this.options.adapters=this.options.adapters||{},this.obj=t,this.keypath=e,this.callback=i,this.objectPath=[],this.update=this.update.bind(this),this.parse(),r(this.target=this.realize())&&this.set(!0,this.key,this.target,this.callback)}function r(t){return"object"==typeof t&&null!==t}n.adapters={},s.tokenize=function(t,e,i){var n=[],s={i:i,path:""};for(i=0;i<t.length;i++){var r=t.charAt(i);~e.indexOf(r)?(n.push(s),s={i:r,path:""}):s.path+=r}return n.push(s),n},s.prototype.parse=function(){var t=this.interfaces();if(!t.length)throw Error("[sightglass] Must define at least one adapter interface.");if(~t.indexOf(this.keypath[0]))var e=this.keypath[0],i=this.keypath.substr(1);else{if(void 0===(e=this.options.root||n.root))throw Error("[sightglass] Must define a default root adapter.");i=this.keypath}this.tokens=s.tokenize(i,t,e),this.key=this.tokens.pop()},s.prototype.realize=function(){var i,n=this.obj,s=!1;return this.tokens.forEach(function(t,e){r(n)?(void 0!==this.objectPath[e]?n!==(i=this.objectPath[e])&&(this.set(!1,t,i,this.update),this.set(!0,t,n,this.update),this.objectPath[e]=n):(this.set(!0,t,n,this.update),this.objectPath[e]=n),n=this.get(t,n)):(!1===s&&(s=e),(i=this.objectPath[e])&&this.set(!1,t,i,this.update))},this),!1!==s&&this.objectPath.splice(s),n},s.prototype.update=function(){var t,e;(t=this.realize())!==this.target&&(r(this.target)&&this.set(!1,this.key,this.target,this.callback),r(t)&&this.set(!0,this.key,t,this.callback),e=this.value(),this.target=t,(this.value()instanceof Function||this.value()!==e)&&this.callback())},s.prototype.value=function(){return r(this.target)?this.get(this.key,this.target):void 0},s.prototype.setValue=function(t){r(this.target)&&this.adapter(this.key).set(this.target,this.key.path,t)},s.prototype.get=function(t,e){return this.adapter(t).get(e,t.path)},s.prototype.set=function(t,e,i,n){t=t?"observe":"unobserve",this.adapter(e)[t](i,e.path,n)},s.prototype.interfaces=function(){var e=Object.keys(this.options.adapters);return Object.keys(n.adapters).forEach(function(t){~e.indexOf(t)||e.push(t)}),e},s.prototype.adapter=function(t){return this.options.adapters[t.i]||n.adapters[t.i]},s.prototype.unobserve=function(){var i;this.tokens.forEach(function(t,e){(i=this.objectPath[e])&&this.set(!1,t,i,this.update)},this),r(this.target)&&this.set(!1,this.key,this.target,this.callback)},"undefined"!=typeof module&&module.exports?module.exports=n:"function"==typeof define&&define.amd?define([],function(){return this.sightglass=n}):this.sightglass=n}.call(this),function(){function u(t,e){return function(){return t.apply(e,arguments)}}function t(t,e){function i(){this.constructor=t}for(var n in e)r.call(e,n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}var n,h,s,e,i,a=[].slice,r={}.hasOwnProperty,p=[].indexOf||function(t){for(var e=0,i=this.length;e<i;e++)if(e in this&&this[e]===t)return e;return-1},c={options:"prefix templateDelimiters rootInterface preloadData handler executeFunctions".split(" "),extensions:["binders","formatters","components","adapters"],public:{binders:{},components:{},formatters:{},adapters:{},prefix:"rv",templateDelimiters:["{","}"],rootInterface:".",preloadData:!0,executeFunctions:!1,iterationAlias:function(t){return"%"+t+"%"},handler:function(t,e,i){return this.call(t,e,i.view.models)},configure:function(t){var e,i,n;for(i in t=null==t?{}:t)if(n=t[i],"binders"===i||"components"===i||"formatters"===i||"adapters"===i)for(e in n){var s=n[e];c[i][e]=s}else c.public[i]=n},bind:function(t,e,i){return(t=new c.View(t,e=null==e?{}:e,i=null==i?{}:i)).bind(),t},init:function(t,e,i){var n;if(null==i&&(i={}),null==e&&(e=document.createElement("div")),(n=(t=c.public.components[t]).template.call(this,e))instanceof HTMLElement){for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(n)}else e.innerHTML=n;return n=t.initialize.call(this,e,i),(t=new c.View(e,n)).bind(),t}}};function o(){}function l(){}function d(t,e,i){this.els=t,this.models=e,null==i&&(i={}),this.update=u(this.update,this),this.publish=u(this.publish,this),this.sync=u(this.sync,this),this.unbind=u(this.unbind,this),this.bind=u(this.bind,this),this.select=u(this.select,this),this.traverse=u(this.traverse,this),this.build=u(this.build,this),this.buildBinding=u(this.buildBinding,this),this.bindingRegExp=u(this.bindingRegExp,this),this.options=u(this.options,this),this.els.jquery||this.els instanceof Array||(this.els=[this.els]);var n,s,r,o=c.extensions;for(e=0,s=o.length;e<s;e++){if(this[n=o[e]]={},i[n]){var h=i[n];for(a in h)t=h[a],this[n][a]=t}for(a in h=c.public[n])t=h[a],null==(l=this[n])[a]&&(l[a]=t)}for(var a=0,l=(t=c.options).length;a<l;a++)this[n=t[a]]=null!=(r=i[n])?r:c.public[n];this.build()}function f(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.getValue=u(this.getValue,this),this.update=u(this.update,this),this.unbind=u(this.unbind,this),this.bind=u(this.bind,this),this.publish=u(this.publish,this),this.sync=u(this.sync,this),this.set=u(this.set,this),this.eventHandler=u(this.eventHandler,this),this.formattedValue=u(this.formattedValue,this),this.parseFormatterArguments=u(this.parseFormatterArguments,this),this.parseTarget=u(this.parseTarget,this),this.observe=u(this.observe,this),this.setBinder=u(this.setBinder,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={},this.model=void 0,this.setBinder()}function v(t,e,i){this.view=t,this.el=e,this.type=i,this.unbind=u(this.unbind,this),this.bind=u(this.bind,this),this.locals=u(this.locals,this),this.component=this.view.components[this.type],this.static={},this.observers={},this.upstreamObservers={},e=t.bindingRegExp();var n,s,r,o,h=this.el.attributes||[];for(i=0,r=h.length;i<r;i++)t=h[i],e.test(t.name)||(n=this.camelCase(t.name),s=c.TypeParser.parse(t.value),0<=p.call(null!=(o=this.component.static)?o:[],n)?this.static[n]=t.value:s.type===c.TypeParser.types.primitive?this.static[n]=s.value:this.observers[n]=t.value)}function b(t,e,i,n,s){this.view=t,this.el=e,this.type=i,this.keypath=n,this.options=null!=s?s:{},this.sync=u(this.sync,this),this.formatters=this.options.formatters||[],this.dependencies=[],this.formatterObservers={}}window.jQuery||window.$?(e="on"in(h=window.jQuery||window.$).prototype?["on","off"]:["bind","unbind"],n=e[0],s=e[1],c.Util={bindEvent:function(t,e,i){return h(t)[n](e,i)},unbindEvent:function(t,e,i){return h(t)[s](e,i)},getInputValue:function(t){t=h(t);return"checkbox"===t.attr("type")?t.is(":checked"):t.val()}}):c.Util={bindEvent:"addEventListener"in window?function(t,e,i){return t.addEventListener(e,i,!1)}:function(t,e,i){return t.attachEvent("on"+e,i)},unbindEvent:"removeEventListener"in window?function(t,e,i){return t.removeEventListener(e,i,!1)}:function(t,e,i){return t.detachEvent("on"+e,i)},getInputValue:function(t){if("checkbox"===t.type)return t.checked;if("select-multiple"!==t.type)return t.value;for(var e=[],i=0,n=t.length;i<n;i++){var s=t[i];s.selected&&e.push(s.value)}return e}},c.TypeParser=(o.types={primitive:0,keypath:1},o.parse=function(t){return/^'.*'$|^".*"$/.test(t)?{type:this.types.primitive,value:t.slice(1,-1)}:"true"===t?{type:this.types.primitive,value:!0}:"false"===t?{type:this.types.primitive,value:!1}:"null"===t?{type:this.types.primitive,value:null}:"undefined"===t||""===t?{type:this.types.primitive,value:void 0}:!1===isNaN(Number(t))?{type:this.types.primitive,value:Number(t)}:{type:this.types.keypath,value:t}},o),c.TextTemplateParser=(l.types={text:0,binding:1},l.parse=function(t,e){for(var i,n=[],s=t.length,r=i=0;r<s;){if((i=t.indexOf(e[0],r))<0){n.push({type:this.types.text,value:t.slice(r)});break}if(0<i&&r<i&&n.push({type:this.types.text,value:t.slice(r,i)}),r=i+e[0].length,(i=t.indexOf(e[1],r))<0){s=t.slice(r-e[1].length),(null!=(i=n[n.length-1])?i.type:void 0)===this.types.text?i.value+=s:n.push({type:this.types.text,value:s});break}r=t.slice(r,i).trim(),n.push({type:this.types.binding,value:r}),r=i+e[1].length}return n},l),c.View=(d.prototype.options=function(){for(var t={},e=c.extensions.concat(c.options),i=0,n=e.length;i<n;i++){var s=e[i];t[s]=this[s]}return t},d.prototype.bindingRegExp=function(){return new RegExp("^"+this.prefix+"-")},d.prototype.buildBinding=function(t,e,i,s){var r,o,n={},h=function(){for(var t=s.match(/((?:'[^']*')*(?:(?:[^\|']*(?:'[^']*')+[^\|']*)+|[^\|]+))|^$/g),e=[],i=0,n=t.length;i<n;i++)o=t[i],e.push(o.trim());return e}(),a=function(){for(var t=h.shift().split("<"),e=[],i=0,n=t.length;i<n;i++)r=t[i],e.push(r.trim());return e}(),l=a.shift();return n.formatters=h,(a=a.shift())&&(n.dependencies=a.split(/\s+/)),this.bindings.push(new c[t](this,e,i,l,n))},d.prototype.build=function(){this.bindings=[];for(var h,a=function(t){var e,i,n,s;if(3===t.nodeType){if(n=c.TextTemplateParser,(i=h.templateDelimiters)&&(s=n.parse(t.data,i)).length&&(1!==s.length||s[0].type!==n.types.text)){for(var r=0,o=s.length;r<o;r++)n=s[r],i=document.createTextNode(n.value),t.parentNode.insertBefore(i,t),1===n.type&&h.buildBinding("TextBinding",i,null,n.value);t.parentNode.removeChild(t)}}else 1===t.nodeType&&(e=h.traverse(t));if(!e){for(n=t.childNodes,t=[],s=0,i=n.length;s<i;s++)e=n[s],t.push(e);for(s=0,i=t.length;s<i;s++)e=t[s],a(e)}},t=(h=this).els,e=0,i=t.length;e<i;e++){var n=t[e];a(n)}this.bindings.sort(function(t,e){return((null!=(e=e.binder)?e.priority:void 0)||0)-((null!=(e=t.binder)?e.priority:void 0)||0)})},d.prototype.traverse=function(t){for(var e,i,n=this.bindingRegExp(),s="SCRIPT"===t.nodeName||"STYLE"===t.nodeName,r=t.attributes,o=0,h=r.length;o<h;o++)if(e=r[o],n.test(e.name)){if(i=e.name.replace(n,""),!(d=this.binders[i])){var a=this.binders;for(u in a){var l=a[u];"*"!==u&&-1!==u.indexOf("*")&&(new RegExp("^"+u.replace(/\*/g,".+")+"$").test(i)&&(d=l))}}(d=d||this.binders["*"]).block&&(s=!0,p=[e])}for(var u=p||t.attributes,p=0,d=u.length;p<d;p++)e=u[p],n.test(e.name)&&(i=e.name.replace(n,""),this.buildBinding("Binding",t,i,e.value));return s||(i=t.nodeName.toLowerCase(),this.components[i]&&!t._bound&&(this.bindings.push(new c.ComponentBinding(this,t,i)),s=!0)),s},d.prototype.select=function(t){for(var e=this.bindings,i=[],n=0,s=e.length;n<s;n++){var r=e[n];t(r)&&i.push(r)}return i},d.prototype.bind=function(){for(var t=this.bindings,e=0,i=t.length;e<i;e++)t[e].bind()},d.prototype.unbind=function(){for(var t=this.bindings,e=0,i=t.length;e<i;e++)t[e].unbind()},d.prototype.sync=function(){for(var t=this.bindings,e=0,i=t.length;e<i;e++){var n=t[e];"function"==typeof n.sync&&n.sync()}},d.prototype.publish=function(){for(var t=this.select(function(t){return null!=(t=t.binder)?t.publishes:void 0}),e=0,i=t.length;e<i;e++)t[e].publish()},d.prototype.update=function(t){for(s in t=null==t?{}:t){var e=t[s];this.models[s]=e}for(var i=this.bindings,e=0,n=i.length;e<n;e++){var s=i[e];"function"==typeof s.update&&s.update(t)}},d),c.Binding=(f.prototype.setBinder=function(){if(!(this.binder=this.view.binders[this.type])){var t=this.view.binders;for(var e in t){var i=t[e];"*"!==e&&-1!==e.indexOf("*")&&(new RegExp("^"+e.replace(/\*/g,".+")+"$").test(this.type)&&(this.binder=i,this.args=new RegExp("^"+e.replace(/\*/g,"(.+)")+"$").exec(this.type),this.args.shift()))}}return this.binder||(this.binder=this.view.binders["*"]),this.binder instanceof Function?this.binder={routine:this.binder}:void 0},f.prototype.observe=function(t,e,i){return c.sightglass(t,e,i,{root:this.view.rootInterface,adapters:this.view.adapters})},f.prototype.parseTarget=function(){var t=c.TypeParser.parse(this.keypath);return t.type===c.TypeParser.types.primitive?this.value=t.value:(this.observer=this.observe(this.view.models,this.keypath,this.sync),this.model=this.observer.target)},f.prototype.parseFormatterArguments=function(t,e){for(var i,n,s=[],r=0,o=t.length;r<o;r++){var h=t[r];s.push(c.TypeParser.parse(h))}for(t=s,o=[],r=s=0,n=t.length;s<n;r=++s)h=t[r],o.push(h.type===c.TypeParser.types.primitive?h.value:((i=this.formatterObservers)[e]||(i[e]={}),(i=this.formatterObservers[e][r])||(i=this.observe(this.view.models,h.value,this.sync),this.formatterObservers[e][r]=i),i.value()));return o},f.prototype.formattedValue=function(t){for(var e,i,n=this.formatters,s=e=0,r=n.length;e<r;s=++e){var o=(h=n[s]).match(/[^\s']+|'([^']|'[^\s])*'|"([^"]|"[^\s])*"/g),h=o.shift();h=this.view.formatters[h],o=this.parseFormatterArguments(o,s),(null!=h?h.read:void 0)instanceof Function?t=(i=h.read).call.apply(i,[this.model,t].concat(a.call(o))):h instanceof Function&&(t=h.call.apply(h,[this.model,t].concat(a.call(o))))}return t},f.prototype.eventHandler=function(e){var i,n=(i=this).view.handler;return function(t){return n.call(e,this,t,i)}},f.prototype.set=function(t){var e;return t=t instanceof Function&&!this.binder.function&&c.public.executeFunctions?this.formattedValue(t.call(this.model)):this.formattedValue(t),null!=(e=this.binder.routine)?e.call(this,this.el,t):void 0},f.prototype.sync=function(){var s,r;return this.set(function(){var t;if(this.observer){if(this.model!==this.observer.target){for(var e=this.dependencies,i=0,n=e.length;i<n;i++)(r=e[i]).unobserve();if(this.dependencies=[],null!=(this.model=this.observer.target)&&null!=(t=this.options.dependencies)&&t.length)for(i=0,n=(e=this.options.dependencies).length;i<n;i++)s=e[i],r=this.observe(this.model,s,this.sync),this.dependencies.push(r)}return this.observer.value()}return this.value}.call(this))},f.prototype.publish=function(){var t;if(this.observer){for(var e=this.getValue(this.el),i=this.formatters.length-1,n=this.formatters.slice(0).reverse(),s=t=0,r=n.length;t<r;s=++t){var o=n[s],s=i-s,h=o.split(/\s+/),o=h.shift();s=this.parseFormatterArguments(h,s),null!=(h=this.view.formatters[o])&&h.publish&&(e=(h=this.view.formatters[o]).publish.apply(h,[e].concat(a.call(s))))}return this.observer.setValue(e)}},f.prototype.bind=function(){if(this.parseTarget(),null!=(e=this.binder.bind)&&e.call(this,this.el),null!=this.model&&null!=(i=this.options.dependencies)&&i.length)for(var t=this.options.dependencies,e=0,i=t.length;e<i;e++){var n=t[e],n=this.observe(this.model,n,this.sync);this.dependencies.push(n)}return this.view.preloadData?this.sync():void 0},f.prototype.unbind=function(){null!=(i=this.binder.unbind)&&i.call(this,this.el),null!=(s=this.observer)&&s.unobserve();for(var t,e,i,n=this.dependencies,s=0,r=n.length;s<r;s++)(i=n[s]).unobserve();for(e in this.dependencies=[],r=this.formatterObservers)for(t in s=r[e],s)i=s[t],i.unobserve();return this.formatterObservers={}},f.prototype.update=function(t){var e;return null==t&&(t={}),this.model=null!=(e=this.observer)?e.target:void 0,null!=(e=this.binder.update)?e.call(this,t):void 0},f.prototype.getValue=function(t){return this.binder&&null!=this.binder.getValue?this.binder.getValue.call(this,t):c.Util.getInputValue(t)},f),c.ComponentBinding=(e=c.Binding,t(v,e),v.prototype.sync=function(){},v.prototype.update=function(){},v.prototype.publish=function(){},v.prototype.locals=function(){var t,e={},i=this.static;for(t in i){var n=i[t];e[t]=n}for(t in i=this.observers)n=i[t],e[t]=n.value();return e},v.prototype.camelCase=function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},v.prototype.bind=function(){var t,e,i;if(!this.bound){var n=this.observers;for(t in n){var s=n[t];this.observers[t]=this.observe(this.view.models,s,function(e){return function(t){return function(){return e.componentView.models[t]=e.observers[t].value()}}}(this).call(this,t))}this.bound=!0}if(null!=this.componentView)this.componentView.bind();else{this.el.innerHTML=this.component.template.call(this),n=this.component.initialize.call(this,this.el,this.locals()),this.el._bound=!0;for(var s={},r=c.extensions,o=0,h=r.length;o<h;o++){if(s[e=r[o]]={},this.component[e]){var a=this.component[e];for(u in a){var l=a[u];s[e][u]=l}}for(u in a=this.view[e])l=a[u],null==(p=s[e])[u]&&(p[u]=l)}for(var u=0,p=(l=c.options).length;u<p;u++)s[e=l[u]]=null!=(i=this.component[e])?i:this.view[e];for(t in this.componentView=new c.View(Array.prototype.slice.call(this.el.childNodes),n,s),this.componentView.bind(),i=this.observers)e=i[t],this.upstreamObservers[t]=this.observe(this.componentView.models,t,function(i){return function(t,e){return function(){return e.setValue(i.componentView.models[t])}}}(this).call(this,t,e))}},v.prototype.unbind=function(){var t,e,i=this.upstreamObservers;for(t in i){var n=i[t];n.unobserve()}for(t in i=this.observers)n=i[t],n.unobserve();return null!=(e=this.componentView)?e.unbind.call(this):void 0},v),c.TextBinding=(i=c.Binding,t(b,i),b.prototype.binder={routine:function(t,e){return t.data=null!=e?e:""}},b.prototype.sync=function(){return b.__super__.sync.apply(this,arguments)},b),c.public.binders.text=function(t,e){return null!=t.textContent?t.textContent=null!=e?e:"":t.innerText=null!=e?e:""},c.public.binders.html=function(t,e){return t.innerHTML=null!=e?e:""},c.public.binders.show=function(t,e){return t.style.display=e?"":"none"},c.public.binders.hide=function(t,e){return t.style.display=e?"none":""},c.public.binders.enabled=function(t,e){return t.disabled=!e},c.public.binders.disabled=function(t,e){return t.disabled=!!e},c.public.binders.checked={publishes:!0,priority:2e3,bind:function(t){return c.Util.bindEvent(t,"change",this.publish)},unbind:function(t){return c.Util.unbindEvent(t,"change",this.publish)},routine:function(t,e){return t.checked="radio"===t.type?(null!=(t=t.value)?t.toString():void 0)===(null!=e?e.toString():void 0):!!e}},c.public.binders.unchecked={publishes:!0,priority:2e3,bind:function(t){return c.Util.bindEvent(t,"change",this.publish)},unbind:function(t){return c.Util.unbindEvent(t,"change",this.publish)},routine:function(t,e){return t.checked="radio"===t.type?(null!=(t=t.value)?t.toString():void 0)!==(null!=e?e.toString():void 0):!e}},c.public.binders.value={publishes:!0,priority:3e3,bind:function(t){return"INPUT"!==t.tagName||"radio"!==t.type?(this.event="SELECT"===t.tagName?"change":"input",c.Util.bindEvent(t,this.event,this.publish)):void 0},unbind:function(t){return"INPUT"!==t.tagName||"radio"!==t.type?c.Util.unbindEvent(t,this.event,this.publish):void 0},routine:function(t,e){var i,n;if("INPUT"===t.tagName&&"radio"===t.type)return t.setAttribute("value",e);if(null!=window.jQuery){if(t=h(t),(null!=e?e.toString():void 0)!==(null!=(i=t.val())?i.toString():void 0))return t.val(null!=e?e:"")}else if("select-multiple"===t.type){if(null!=e){for(var s=[],r=0,o=t.length;r<o;r++)i=t[r],s.push(i.selected=(n=i.value,0<=p.call(e,n)));return s}}else if((null!=e?e.toString():void 0)!==(null!=(r=t.value)?r.toString():void 0))return t.value=null!=e?e:""}},c.public.binders.if={block:!0,priority:4e3,bind:function(t){var e,i;return null==this.marker?(e=[this.view.prefix,this.type].join("-").replace("--","-"),i=t.getAttribute(e),this.marker=document.createComment(" rivets: "+this.type+" "+i+" "),this.bound=!1,t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)):void 0},unbind:function(){return this.nested?(this.nested.unbind(),this.bound=!1):void 0},routine:function(t,e){if(!!e==!this.bound){if(e){var i={},n=this.view.models;for(var s in n){var r=n[s];i[s]=r}return(this.nested||(this.nested=new c.View(t,i,this.view.options()))).bind(),this.marker.parentNode.insertBefore(t,this.marker.nextSibling),this.bound=!0}return t.parentNode.removeChild(t),this.nested.unbind(),this.bound=!1}},update:function(t){var e;return null!=(e=this.nested)?e.update(t):void 0}},c.public.binders.unless={block:!0,priority:4e3,bind:function(t){return c.public.binders.if.bind.call(this,t)},unbind:function(){return c.public.binders.if.unbind.call(this)},routine:function(t,e){return c.public.binders.if.routine.call(this,t,!e)},update:function(t){return c.public.binders.if.update.call(this,t)}},c.public.binders["on-*"]={function:!0,priority:1e3,unbind:function(t){return this.handler?c.Util.unbindEvent(t,this.args[0],this.handler):void 0},routine:function(t,e){return this.handler&&c.Util.unbindEvent(t,this.args[0],this.handler),c.Util.bindEvent(t,this.args[0],this.handler=this.eventHandler(e))}},c.public.binders["each-*"]={block:!0,priority:4e3,bind:function(t){if(null==this.marker){var e=[this.view.prefix,this.type].join("-").replace("--","-");this.marker=document.createComment(" rivets: "+this.type+" "),this.iterated=[],t.removeAttribute(e),t.parentNode.insertBefore(this.marker,t),t.parentNode.removeChild(t)}else for(var i=this.iterated,e=0,n=i.length;e<n;e++)(t=i[e]).bind()},unbind:function(){if(null!=this.iterated)for(var t=this.iterated,e=0,i=t.length;e<i;e++)t[e].unbind()},routine:function(t,e){var i;if(a=this.args[0],this.iterated.length>(e=e||[]).length)for(var n=0,s=(s=Array(this.iterated.length-e.length)).length;n<s;n++){var r=this.iterated.pop();r.unbind(),this.marker.parentNode.removeChild(r.els[0])}for(r=n=0,s=e.length;n<s;r=++n)if(u=e[r],(i={index:r})[c.public.iterationAlias(a)]=r,i[a]=u,null==this.iterated[r]){for(l in r=this.view.models)u=r[l],null==i[l]&&(i[l]=u);var o=this.iterated.length?this.iterated[this.iterated.length-1].els[0]:this.marker,h=((r=this.view.options()).preloadData=!0,t.cloneNode(!0));(r=new c.View(h,i,r)).bind(),this.iterated.push(r),this.marker.parentNode.insertBefore(h,o.nextSibling)}else this.iterated[r].models[a]!==u&&this.iterated[r].update(i);if("OPTION"===t.nodeName)for(var a,l=0,u=(a=this.view.bindings).length;l<u;l++)(i=a[l]).el===this.marker.parentNode&&"value"===i.type&&i.sync()},update:function(t){var e={};for(s in t){var i=t[s];s!==this.args[0]&&(e[s]=i)}for(var n=this.iterated,s=0,i=n.length;s<i;s++)(t=n[s]).update(e)}},c.public.binders["class-*"]=function(t,e){var i=" "+t.className+" ";return!e==(-1!==i.indexOf(" "+this.args[0]+" "))?t.className=e?t.className+" "+this.args[0]:i.replace(" "+this.args[0]+" "," ").trim():void 0},c.public.binders["*"]=function(t,e){return null!=e?t.setAttribute(this.type,e):t.removeAttribute(this.type)},c.public.formatters.call=function(){var t=arguments[0],e=2<=arguments.length?a.call(arguments,1):[];return t.call.apply(t,[this].concat(a.call(e)))},c.public.adapters["."]={id:"_rv",counter:0,weakmap:{},weakReference:function(t){var e;return t.hasOwnProperty(this.id)||(e=this.counter++,Object.defineProperty(t,this.id,{value:e})),(e=this.weakmap)[t=t[this.id]]||(e[t]={callbacks:{}})},cleanupWeakReference:function(t,e){return Object.keys(t.callbacks).length||t.pointers&&Object.keys(t.pointers).length?void 0:delete this.weakmap[e]},stubFunction:function(a,t){var l=a[t],u=this.weakReference(a),p=this.weakmap;return a[t]=function(){var t,e,i=l.apply(a,arguments),n=u.pointers;for(t in n)for(var s=n[t],r=null!=(e=null!=(e=p[t])?e.callbacks[s]:void 0)?e:[],o=0,h=r.length;o<h;o++)(s=r[o])();return i}},observeMutations:function(t,e,i){var n,s;if(Array.isArray(t)){if(null==(n=this.weakReference(t)).pointers){n.pointers={};for(var r="push pop shift unshift sort reverse splice".split(" "),o=0,h=r.length;o<h;o++){var a=r[o];this.stubFunction(t,a)}}if(null==(s=n.pointers)[e]&&(s[e]=[]),p.call(n.pointers[e],i)<0)return n.pointers[e].push(i)}},unobserveMutations:function(t,e,i){var n,s;return Array.isArray(t)&&null!=t[this.id]&&(n=this.weakmap[t[this.id]])&&(s=n.pointers[e])?(0<=(i=s.indexOf(i))&&s.splice(i,1),s.length||delete n.pointers[e],this.cleanupWeakReference(n,t[this.id])):void 0},observe:function(r,o,t){var e,h,a,l=this.weakReference(r).callbacks;return null==l[o]&&(l[o]=[],null!=(e=Object.getOwnPropertyDescriptor(r,o))&&e.get||null!=e&&e.set||(h=r[o],Object.defineProperty(r,o,{enumerable:!0,get:function(){return h},set:(a=this,function(t){var e;if(t!==h&&(a.unobserveMutations(h,r[a.id],o),h=t,e=a.weakmap[r[a.id]])){if((l=e.callbacks)[o])for(var i=l[o].slice(),n=0,s=i.length;n<s;n++)e=i[n],0<=p.call(l[o],e)&&e();return a.observeMutations(t,r[a.id],o)}})}))),p.call(l[o],t)<0&&l[o].push(t),this.observeMutations(r[o],r[this.id],o)},unobserve:function(t,e,i){var n,s;return(s=this.weakmap[t[this.id]])&&(n=s.callbacks[e])?(0<=(i=n.indexOf(i))&&(n.splice(i,1),n.length||(delete s.callbacks[e],this.unobserveMutations(t[e],t[this.id],e))),this.cleanupWeakReference(s,t[this.id])):void 0},get:function(t,e){return t[e]},set:function(t,e,i){return t[e]=i}},c.factory=function(t){return c.sightglass=t,(c.public._=c).public},"object"==typeof("undefined"!=typeof module&&null!==module?module.exports:void 0)?module.exports=c.factory(require("sightglass")):"function"==typeof define&&define.amd?define(["sightglass"],function(t){return this.rivets=c.factory(t)}):this.rivets=c.factory(sightglass)}.call(this);