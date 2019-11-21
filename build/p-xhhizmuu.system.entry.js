System.register(["./p-93f6d8d8.system.js"],(function(e){"use strict";var t,i,r,l;return{setters:[function(e){t=e.r;i=e.c;r=e.h;l=e.H}],execute:function(){var s=e("carage_edit_text",function(){function e(e){t(this,e);this.multiline=false;this.disabled=false;this.required=false;this.errored=false;this.placeholder="";this.valueChanged=i(this,"valueChanged",7)}e.prototype.handleInput=function(e){var t=e.target.value;this.valueChanged.emit(t)};e.prototype.render=function(){var e=this;return r(l,{class:{multiline:this.multiline,disabled:this.disabled,errored:this.errored,required:this.required}},r("label",null,r("span",{class:"label"},r("slot",null)),this.multiline?r("textarea",{class:"input",disabled:this.disabled,required:this.required,placeholder:this.placeholder,onInput:function(t){return e.handleInput(t)}},this.value):r("input",{class:"input",type:"text",disabled:this.disabled,required:this.required,placeholder:this.placeholder,value:this.value,onInput:function(t){return e.handleInput(t)}})))};Object.defineProperty(e,"style",{get:function(){return":host{--form-background-color:var(--color-light);--form-placeholder-color:var(--color-medium);-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:opacity;transition-property:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(:not(.errored)){--form-border-color:var(--color-light);--form-input-color:var(--color-dark);--form-label-color:var(--color-accent)}:host(.errored){--form-border-color:var(--color-error);--form-input-color:var(--color-error);--form-label-color:var(--color-error)}:host(:not(.disabled)){pointer-events:auto;opacity:1}:host(.disabled){pointer-events:none;opacity:.5}.label{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:color;transition-property:color;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-bottom:10px;color:var(--form-label-color);font-size:1.1rem;line-height:1;white-space:nowrap}:host(:not(.disabled)) .label{cursor:pointer}:host(.disabled) .label{cursor:default}:host(.required) .label:after{content:\"*\"}.input{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:background-color,border-color,color;transition-property:background-color,border-color,color;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;padding:calc(var(--base-size) / 2) var(--base-size);outline:0;width:100%;background-color:var(--form-background-color);border:2px solid var(--form-border-color);border-radius:calc(var(--base-size) / 2);color:var(--form-input-color);font:var(--font-weight-regular) inherit/1.5 var(--font-face-default)}.input::-webkit-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::-moz-placeholder{color:var(--form-placeholder-color);opacity:.9}.input:-ms-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::-ms-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::placeholder{color:var(--form-placeholder-color);opacity:.9}textarea{min-height:225px;resize:vertical}"},enumerable:true,configurable:true});return e}())}}}));