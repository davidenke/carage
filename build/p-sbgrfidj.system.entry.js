System.register(["./p-93f6d8d8.system.js"],(function(e){"use strict";var t,r,n;return{setters:[function(e){t=e.r;r=e.c;n=e.h}],execute:function(){var a=e("carage_card",function(){function e(e){t(this,e);this.closable=false;this.close=r(this,"close",7)}e.prototype.render=function(){var e=this;return[n("slot",null),this.closable&&n("carage-button",{class:"close",onClick:function(){return e.close.emit()}},"close")]};Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.5);box-shadow:0 0 15px 0 rgba(0,0,0,.5);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:calc(var(--base-size) * 2);position:relative;border-top-left-radius:var(--base-size);border-top-right-radius:var(--base-size);background:var(--color-light)}\@media (prefers-color-scheme:dark){:host{-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);background:var(--color-dark)}}.close{position:absolute;bottom:auto;left:auto;right:var(--base-size);top:var(--base-size)}"},enumerable:true,configurable:true});return e}());var u=e("carage_editor",function(){function e(e){t(this,e);this.close=r(this,"close",7);this.save=r(this,"save",7)}e.prototype.update=function(e,t){this.model[e]=t};e.prototype.renderInput=function(e,t){var r=this;var a=t.type,u=t.label,o=t.required;var s="carage-edit-"+a;return n(s,{class:"input",required:o,value:this.model[e],onValueChanged:function(t){var n=t.detail;return r.update(e,n)}},u||e)};e.prototype.renderInputs=function(e){var t=this;var r=e.getMetadata();var n=Array.from(r.entries());return n.map((function(e){var r=e[0],n=e[1];return t.renderInput(r,n)}))};e.prototype.render=function(){var e=this;return n("carage-card",{class:"card",closable:true,onClose:function(){return e.close.emit()}},n("form",null,this.renderInputs(this.model),n("carage-button",{class:"submit",expand:true,onClick:function(){return e.save.emit(e.model)}},"save")))};Object.defineProperty(e,"style",{get:function(){return":host{border-top-left-radius:var(--base-size);border-top-right-radius:var(--base-size)}.card{padding:calc(var(--base-size) * 3) var(--base-size) 0}.card,form{height:100%}form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-x:scroll}form::-webkit-scrollbar{width:0!important}form{overflow:-moz-scrollbars-none;-ms-overflow-style:none}.input{margin-bottom:var(--base-size)}.submit{margin-top:var(--base-size)}"},enumerable:true,configurable:true});return e}())}}}));