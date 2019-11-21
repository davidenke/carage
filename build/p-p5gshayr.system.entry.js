var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();System.register(["./p-93f6d8d8.system.js","./p-16430319.system.js"],(function(e){"use strict";var t,r,n,o,i;return{setters:[function(e){t=e.r;r=e.h;n=e.c;o=e.H},function(e){i=e.f}],execute:function(){var a=e("carage_button",function(){function e(e){t(this,e);this.expand=false}e.prototype.render=function(){return r("button",{type:"button",class:{expand:this.expand}},r("slot",null))};Object.defineProperty(e,"style",{get:function(){return"button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:var(--base-size);background:var(--color-accent);color:var(--color-light);cursor:pointer;display:inline-block;outline:0;margin:0;padding:calc(var(--base-size) / 2 - 1px) var(--base-size) calc(var(--base-size) / 2);text-align:center;text-decoration:none;text-overflow:ellipsis;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}button:disabled{cursor:default;pointer-events:none}button.expand{width:100%}"},enumerable:true,configurable:true});return e}());var u=e("carage_car",function(){function e(e){t(this,e);this.isEditing=false}e.prototype.openEditor=function(){this.isEditing=true};e.prototype.closeEditor=function(){this.isEditing=false};e.prototype.save=function(e){this.model=e;this.model.save();this.closeEditor()};e.prototype.render=function(){var e=this;return r("article",{class:{"is-editing":this.isEditing}},r("img",{src:this.model.image,alt:this.model.name}),r("carage-card",{class:"details"},r("h2",null,this.model.licensePlate),r("h1",null,this.model.name),r("dl",null,r("dt",null,"identification"),r("dd",null,this.model.vin),r("dt",null,"key code"),r("dd",null,this.model.keyCode),r("dt",null,"registration date"),r("dd",null,i(this.model.registrationDate)),r("dt",null,"power"),r("dd",null,this.model.powerKW,"kW (",this.model.powerPS,"PS)"))),r("carage-button",{class:"edit",onClick:function(){return e.openEditor()}},"edit"),r("carage-editor",{class:"editor",model:this.model.clone(),onClose:function(){return e.closeEditor()},onSave:function(t){var r=t.detail;return e.save(r)}}))};Object.defineProperty(e,"style",{get:function(){return"article{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;overflow-y:scroll;-webkit-overflow-scrolling:touch}article::-webkit-scrollbar{width:0!important}article{overflow:-moz-scrollbars-none;-ms-overflow-style:none}img{position:relative;height:auto;width:100%;margin-bottom:calc(var(--base-size) * -1);z-index:-1}dd,dl,h1,h2,p{margin:0;padding:0}h1,h2{font-weight:var(--font-weight-medium);line-height:1.5}h2{font-size:1.5rem}h1{font-size:1.8rem}dt{display:none}dd{font-size:1.5rem;line-height:1.5}.details{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}.edit{position:absolute;bottom:auto;left:auto;right:var(--base-size);top:var(--base-size)}.editor{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:top;transition-property:top;position:fixed;bottom:auto;left:0;right:0;top:110vh;height:calc(100vh - var(--base-size));z-index:1}.is-editing .editor{top:var(--base-size)}"},enumerable:true,configurable:true});return e}());var c=e("carage_card",function(){function e(e){t(this,e);this.closable=false;this.close=n(this,"close",7)}e.prototype.render=function(){var e=this;return[r("slot",null),this.closable&&r("carage-button",{class:"close",onClick:function(){return e.close.emit()}},"close")]};Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.5);box-shadow:0 0 15px 0 rgba(0,0,0,.5);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:calc(var(--base-size) * 2);position:relative;border-top-left-radius:var(--base-size);border-top-right-radius:var(--base-size);background:var(--color-light)}\@media (prefers-color-scheme:dark){:host{-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);background:var(--color-dark)}}.close{position:absolute;bottom:auto;left:auto;right:var(--base-size);top:var(--base-size)}"},enumerable:true,configurable:true});return e}());var s=e("carage_cars",function(){function e(e){t(this,e)}e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e,"style",{get:function(){return":host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:100vh;width:100vw;overflow:hidden;scroll-behavior:smooth}\@media (pointer:coarse){:host{overflow-x:scroll;-ms-scroll-snap-type:x mandatory;-webkit-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}:host::-webkit-scrollbar{width:0!important}:host{overflow:-moz-scrollbars-none;-ms-overflow-style:none}}:host ::slotted(*),:host>*{-webkit-box-flex:1;-ms-flex:1 0 100%;flex:1 0 100%;height:100vh;width:100vw}\@media (pointer:coarse){:host ::slotted(*),:host>*{scroll-snap-align:start;overflow:visible}}"},enumerable:true,configurable:true});return e}());var l=e("carage_editor",function(){function e(e){t(this,e);this.close=n(this,"close",7);this.save=n(this,"save",7)}e.prototype.update=function(e,t){this.model[e]=t};e.prototype.renderInput=function(e,t){var n=this;var o=t.type,i=t.label,a=t.required;var u="carage-edit-"+o;return r(u,{class:"input",required:a,value:this.model[e],onValueChanged:function(t){var r=t.detail;return n.update(e,r)}},i||e)};e.prototype.renderInputs=function(e){var t=this;var r=e.getMetadata();var n=Array.from(r.entries());return n.map((function(e){var r=e[0],n=e[1];return t.renderInput(r,n)}))};e.prototype.render=function(){var e=this;return r("carage-card",{class:"card",closable:true,onClose:function(){return e.close.emit()}},r("form",null,this.renderInputs(this.model),r("carage-button",{class:"submit",expand:true,onClick:function(){return e.save.emit(e.model)}},"save")))};Object.defineProperty(e,"style",{get:function(){return":host{border-top-left-radius:var(--base-size);border-top-right-radius:var(--base-size)}.card{padding:calc(var(--base-size) * 3) var(--base-size) 0}.card,form{height:100%}form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-x:scroll}form::-webkit-scrollbar{width:0!important}form{overflow:-moz-scrollbars-none;-ms-overflow-style:none}.input{margin-bottom:var(--base-size)}.submit{margin-top:var(--base-size)}"},enumerable:true,configurable:true});return e}());var d=new Map;var f=function(e,t,r){if(!d.has(e)){d.set(e,new Map)}d.get(e).set(t,r)};var p=function(){function e(e,t){this.id=e;this.setData(t)}e.prototype.setData=function(e){var t=this;var r=this.getMetadata();Object.keys(e).forEach((function(n){t[n]=r.get(n).parse(e[n])}))};e.prototype.getMetadata=function(){return d.get(this.constructor.name)};e.prototype.clone=function(){return new this.constructor(this.id,this.serialize())};e.prototype.serialize=function(){var e=this;var t=this.getMetadata();return Array.from(t.keys()).reduce((function(r,n){r[n]=t.get(n).serialize(e[n]);return r}),{})};e.prototype.toJSON=function(){return this.serialize()};return e}();var A=function(e){var t=e===void 0?{}:e,r=t.label,n=t.required;return function(e,t){var o=e.constructor;var i=function(e){return e};var a=function(e){return e};f(o.name,t.toString(),{type:"text",label:r,required:n,parse:i,serialize:a})}};var v=function(e){var t=e===void 0?{}:e,r=t.label,n=t.required;return function(e,t){var o=e.constructor;var i=function(e){return e};var a=function(e){return e};f(o.name,t.toString(),{type:"number",label:r,required:n,parse:i,serialize:a})}};var h=function(e){var t=e===void 0?{}:e,r=t.label,n=t.required;return function(e,t){var o=e.constructor;var i=function(e){return new Date(e)};var a=function(e){return e.toISOString()};f(o.name,t.toString(),{type:"date",label:r,required:n,parse:i,serialize:a})}};var y=function(e){var t=e===void 0?{}:e,r=t.label,n=t.required;return function(e,t){var o=e.constructor;var i=function(e){return e};var a=function(e){return e};f(o.name,t.toString(),{type:"image",label:r,required:n,parse:i,serialize:a})}};var g="localStorage";var m="carage";function b(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}function E(e){return m+"."+e}function O(e,t){window[g].setItem(e,t)}function w(e){var t=window[g].getItem(e);if(t!==null){return t}return undefined}function P(){return Object.entries(window[g])}var C=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)if(a=e[u])i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var X=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.load=function(e){return new t(e,JSON.parse(w(e)))};t.save=function(e){O(e.id,JSON.stringify(e))};Object.defineProperty(t.prototype,"name",{get:function(){return this.manufacturer+" "+this.model},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"powerPS",{get:function(){return Math.round(this.powerKW*1.35962)},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"keyCode",{get:function(){return this.manufacturerKey+"/"+this.modelCode},enumerable:true,configurable:true});t.prototype.save=function(){t.save(this)};return t}(p);C([y()],X.prototype,"image",void 0);C([A({required:true})],X.prototype,"manufacturer",void 0);C([A({required:true})],X.prototype,"model",void 0);C([h({label:"registration date"})],X.prototype,"registrationDate",void 0);C([A({label:"license plate"})],X.prototype,"licensePlate",void 0);C([A({label:"design type"})],X.prototype,"designType",void 0);C([v({label:"power in kilowatts"})],X.prototype,"powerKW",void 0);C([v()],X.prototype,"capacity",void 0);C([A({required:true})],X.prototype,"vin",void 0);C([A({label:"manufacturer key"})],X.prototype,"manufacturerKey",void 0);C([A({label:"model code"})],X.prototype,"modelCode",void 0);var S=e("carage_root",function(){function e(e){t(this,e);this.newCar=new X(E(b()),{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQAQMAAABI+4zbAAAABlBMVEXMzMzMzMy+G0qZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACwElEQVR4nO2XMY6cMBSGH0IamhGTkgJpr0A6ipX2KnMEpEjJFJHCTXKNlD4KR5hyi2iJn20YPBtpbTJSmu8rfmkH/AHmrf0QAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD475TzJPL0JiFuFEbkNEuIJE7zq8iPeQyxuYh1vcxLJPEsjci1nELErktxDZHEIO5xrj42VNY1ySVEEnov5WhPd7HhZFT/7CMJnWGpRHofG45G9a2PJOyZIrXY011saIzqax9JVO4W9PTj3ZjOyEGPH8JJH3PQaFXT3rkGo39XPpJwwxt1NkG8cDZ6q6WPJI4avV66v7u+MXqr5diGSf2YNrhKHzcK7ypGF0muRqNTTRe7ytHowWJs8l1j55/lkx3qXOJdpglFmOgaVDN4Vx+m52BdvWr6ZFcfXMU4+GdpwyuovUuMiyRXd++qQ50cd7h0pTur5uxdVXi3jRXohUyX7nr5OUUuO1nuufsdrqtdtbYuO8+6pNnIdn3WWVGNOYf3Nbklzf7mXZOLJNcXXZ0i1+ArwOS7vulri1y9K69ih+urvrnI1bryslOX7fr+zlW78iol33XRKohclSuvw0Nc5S/9vd7nKmKX31mPO1zDWqbnZZ1yAxvJr9VhuaXV5e+rf4irfNXfu72u7ZoT3uNZdq1fdy5fX+YfXOsa7eu+cI1J5hrtXNu9w/8/FrNlytw79KpjtKe5deLmytjTnCvaa6elMvfsteW47QGWdTW4MnuActz2Jst6r67M3kRdUc9UrS3dnp6pinq5em3Dsns5N3TbY7br0D09Zh31vv061Xt632eNwYcv3sXlSt/XfwqFfgn89VtB/wkzvxVerc1+vpgQseuiB10kET6fxhCx62leIomTfumdfi8Ruyo9WL29HwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+EP2PcMvgHU5x0AAAAASUVORK5CYII=",registrationDate:new Date});this.isCreating=false;this.cars=[]}e.prototype.openCreator=function(){this.isCreating=true};e.prototype.closeCreator=function(){this.isCreating=false};e.prototype.loadAll=function(){this.cars=P().reverse().map((function(e){var t=e[0],r=e[1];return new X(t,JSON.parse(r))}))};e.prototype.save=function(e){e.save();this.loadAll();this.closeCreator()};e.prototype.componentWillLoad=function(){this.loadAll();if(this.cars.length<1){this.openCreator()}};e.prototype.render=function(){var e=this;return r(o,{class:{"is-creating":this.isCreating}},r("carage-editor",{class:"creator",model:this.newCar,onClose:function(){return e.closeCreator()},onSave:function(t){var r=t.detail;return e.save(r)}}),r("carage-cars",{class:"cars"},this.cars.map((function(e){return r("carage-car",{model:e})}))),r("carage-button",{class:"create",onClick:function(){return e.openCreator()}},"create"))};Object.defineProperty(e,"style",{get:function(){return":host{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100vh}:host(.is-creating){-webkit-transform:translateX(110vw);transform:translateX(110vw)}.create{bottom:auto;left:var(--base-size);top:var(--base-size)}.create,.creator{position:absolute;right:auto}.creator{bottom:0;left:-110vw;top:0;display:block;height:100vh;width:100vw}"},enumerable:true,configurable:true});return e}())}}}));