import{r as t,c as s,h as e,H as a}from"./p-b7f1464d.js";import{a as i}from"./p-964c20ab.js";const r=class{constructor(e){t(this,e),this.disabled=!1,this.required=!1,this.errored=!1,this.placeholder="",this.valueChanged=s(this,"valueChanged",7)}handleInput(t){const{value:s}=t.target;this.valueChanged.emit(new Date(s))}render(){return e(a,{class:{disabled:this.disabled,errored:this.errored,required:this.required}},e("label",null,e("span",{class:"label"},e("slot",null)),e("input",{class:"input",type:"date",disabled:this.disabled,required:this.required,placeholder:this.placeholder,value:i(this.value),onInput:t=>this.handleInput(t)})))}static get style(){return":host{--form-background-color:var(--color-light);--form-placeholder-color:var(--color-medium);-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:opacity;transition-property:opacity;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}:host(:not(.errored)){--form-border-color:var(--color-light);--form-input-color:var(--color-dark);--form-label-color:var(--color-accent)}:host(.errored){--form-border-color:var(--color-error);--form-input-color:var(--color-error);--form-label-color:var(--color-error)}:host(:not(.disabled)){pointer-events:auto;opacity:1}:host(.disabled){pointer-events:none;opacity:.5}.label{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:color;transition-property:color;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-bottom:10px;color:var(--form-label-color);font-size:1.1rem;line-height:1;white-space:nowrap}:host(:not(.disabled)) .label{cursor:pointer}:host(.disabled) .label{cursor:default}:host(.required) .label:after{content:\"*\"}.input{-webkit-transition:.2s ease-out;transition:.2s ease-out;-webkit-transition-property:background-color,border-color,color;transition-property:background-color,border-color,color;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;padding:calc(var(--base-size) / 2) var(--base-size);outline:0;width:100%;background-color:var(--form-background-color);border:2px solid var(--form-border-color);border-radius:calc(var(--base-size) / 2);color:var(--form-input-color);font:var(--font-weight-regular) inherit/1.5 var(--font-face-default)}.input::-webkit-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::-moz-placeholder{color:var(--form-placeholder-color);opacity:.9}.input:-ms-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::-ms-input-placeholder{color:var(--form-placeholder-color);opacity:.9}.input::placeholder{color:var(--form-placeholder-color);opacity:.9}"}};export{r as carage_edit_date};