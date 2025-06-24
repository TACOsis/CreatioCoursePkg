(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[15600],{15600:(m,C,p)=>{p.r(C),p.d(C,{ColorSketchModule:()=>u,SketchComponent:()=>i,SketchFieldsComponent:()=>c,SketchPresetColorsComponent:()=>h});var e=p(59131),a=p(46595),v=p(17390),d=p(40297),_=p(56711);const g=(r,t)=>({input:r,label:t});function b(r,t){if(r&1){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",8)(1,"color-editable-input",9),e.\u0275\u0275listener("onChange",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.handleChange(s))}),e.\u0275\u0275elementEnd()()}if(r&2){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction2(5,g,n.input,n.label)),e.\u0275\u0275property("value",n.round(n.rgb.a*100))("dragLabel",!0)("dragMax",100)}}function f(r,t){if(r&1){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2)(1,"color-swatch",3),e.\u0275\u0275listener("onClick",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.handleClick(s))})("onHover",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.onSwatchHover.emit(s))}),e.\u0275\u0275elementEnd()()}if(r&2){const n=t.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275styleMap(o.swatchStyle),e.\u0275\u0275property("color",o.normalizeValue(n).color)("focusStyle",o.focusStyle(n))}}function k(r,t){if(r&1){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",12)(1,"color-alpha",13),e.\u0275\u0275listener("onChange",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.handleValueChange(s))}),e.\u0275\u0275elementEnd()()}if(r&2){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("radius",2)("rgb",n.rgb)("hsl",n.hsl)}}function x(r,t){if(r&1){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",14)(1,"color-sketch-preset-colors",15),e.\u0275\u0275listener("onClick",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.handleBlockChange(s))})("onSwatchHover",function(s){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.onSwatchHover.emit(s))}),e.\u0275\u0275elementEnd()()}if(r&2){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("colors",n.presetColors)}}class c{hsl;rgb;hex;disableAlpha=!1;onChange=new e.EventEmitter;input={width:"100%",padding:"4px 10% 3px",border:"none",boxSizing:"border-box",boxShadow:"inset 0 0 0 1px #ccc",fontSize:"11px"};label={display:"block",textAlign:"center",fontSize:"11px",color:"#222",paddingTop:"3px",paddingBottom:"4px",textTransform:"capitalize"};round(t){return Math.round(t)}handleChange({data:t,$event:n}){if(t.hex){if((0,a.isValidHex)(t.hex)){const o=new v.q(t.hex);this.onChange.emit({data:{hex:this.disableAlpha||t.hex.length<=6?o.toHex():o.toHex8(),source:"hex"},$event:n})}}else t.r||t.g||t.b?this.onChange.emit({data:{r:t.r||this.rgb.r,g:t.g||this.rgb.g,b:t.b||this.rgb.b,source:"rgb"},$event:n}):t.a?(t.a<0?t.a=0:t.a>100&&(t.a=100),t.a/=100,this.disableAlpha&&(t.a=1),this.onChange.emit({data:{h:this.hsl.h,s:this.hsl.s,l:this.hsl.l,a:Math.round(t.a*100)/100,source:"rgb"},$event:n})):(t.h||t.s||t.l)&&this.onChange.emit({data:{h:t.h||this.hsl.h,s:Number(t.s&&t.s||this.hsl.s),l:Number(t.l&&t.l||this.hsl.l),source:"hsl"},$event:n})}static \u0275fac=function(n){return new(n||c)};static \u0275cmp=e.\u0275\u0275defineComponent({type:c,selectors:[["color-sketch-fields"]],inputs:{hsl:"hsl",rgb:"rgb",hex:"hex",disableAlpha:"disableAlpha"},outputs:{onChange:"onChange"},decls:10,vars:31,consts:[[1,"sketch-fields"],[1,"sketch-double"],["label","hex",3,"onChange","value"],[1,"sketch-single"],["label","r",3,"onChange","value","dragLabel","dragMax"],["label","g",3,"onChange","value","dragLabel","dragMax"],["label","b",3,"onChange","value","dragLabel","dragMax"],["class","sketch-alpha",4,"ngIf"],[1,"sketch-alpha"],["label","a",3,"onChange","value","dragLabel","dragMax"]],template:function(n,o){n&1&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"color-editable-input",2),e.\u0275\u0275listener("onChange",function(l){return o.handleChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div",3)(4,"color-editable-input",4),e.\u0275\u0275listener("onChange",function(l){return o.handleChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(5,"div",3)(6,"color-editable-input",5),e.\u0275\u0275listener("onChange",function(l){return o.handleChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",3)(8,"color-editable-input",6),e.\u0275\u0275listener("onChange",function(l){return o.handleChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(9,b,2,8,"div",7),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275advance(2),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction2(19,g,o.input,o.label)),e.\u0275\u0275property("value",o.hex.replace("#","")),e.\u0275\u0275advance(2),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction2(22,g,o.input,o.label)),e.\u0275\u0275property("value",o.rgb.r)("dragLabel",!0)("dragMax",255),e.\u0275\u0275advance(2),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction2(25,g,o.input,o.label)),e.\u0275\u0275property("value",o.rgb.g)("dragLabel",!0)("dragMax",255),e.\u0275\u0275advance(2),e.\u0275\u0275styleMap(e.\u0275\u0275pureFunction2(28,g,o.input,o.label)),e.\u0275\u0275property("value",o.rgb.b)("dragLabel",!0)("dragMax",255),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",o.disableAlpha===!1))},dependencies:[d.NgIf,a.EditableInputComponent],styles:[".sketch-fields[_ngcontent-%COMP%]{display:flex;padding-top:4px}.sketch-double[_ngcontent-%COMP%]{flex:2 1 0%}.sketch-single[_ngcontent-%COMP%], .sketch-alpha[_ngcontent-%COMP%]{flex:1 1 0%;padding-left:6px}[dir=rtl][_nghost-%COMP%]   .sketch-single[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .sketch-single[_ngcontent-%COMP%]{padding-right:6px;padding-left:0}[dir=rtl][_nghost-%COMP%]   .sketch-alpha[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .sketch-alpha[_ngcontent-%COMP%]{padding-right:6px;padding-left:0}"],changeDetection:0})}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.Component,args:[{selector:"color-sketch-fields",template:`
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `,changeDetection:e.ChangeDetectionStrategy.OnPush,preserveWhitespaces:!1,styles:[`.sketch-fields{display:flex;padding-top:4px}.sketch-double{flex:2 1 0%}.sketch-single,.sketch-alpha{flex:1 1 0%;padding-left:6px}:host-context([dir=rtl]) .sketch-single{padding-right:6px;padding-left:0}:host-context([dir=rtl]) .sketch-alpha{padding-right:6px;padding-left:0}
`]}]}],null,{hsl:[{type:e.Input}],rgb:[{type:e.Input}],hex:[{type:e.Input}],disableAlpha:[{type:e.Input}],onChange:[{type:e.Output}]});class h{colors;onClick=new e.EventEmitter;onSwatchHover=new e.EventEmitter;swatchStyle={borderRadius:"3px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.15)"};handleClick({hex:t,$event:n}){this.onClick.emit({hex:t,$event:n})}normalizeValue(t){return typeof t=="string"?{color:t}:t}focusStyle(t){return{boxShadow:`inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${this.normalizeValue(t).color}`}}static \u0275fac=function(n){return new(n||h)};static \u0275cmp=e.\u0275\u0275defineComponent({type:h,selectors:[["color-sketch-preset-colors"]],inputs:{colors:"colors"},outputs:{onClick:"onClick",onSwatchHover:"onSwatchHover"},decls:2,vars:1,consts:[[1,"sketch-swatches"],["class","sketch-wrap",4,"ngFor","ngForOf"],[1,"sketch-wrap"],[1,"swatch",3,"onClick","onHover","color","focusStyle"]],template:function(n,o){n&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,f,2,4,"div",1),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",o.colors))},dependencies:[d.NgForOf,a.SwatchComponent],styles:[".sketch-swatches[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap[_ngcontent-%COMP%]{width:16px;height:16px;margin:0 10px 10px 0}[dir=rtl][_nghost-%COMP%]   .sketch-swatches[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .sketch-swatches[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}[dir=rtl][_nghost-%COMP%]   .sketch-wrap[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .sketch-wrap[_ngcontent-%COMP%]{margin-left:10px;margin-right:0}"],changeDetection:0})}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(h,[{type:e.Component,args:[{selector:"color-sketch-preset-colors",template:`
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `,changeDetection:e.ChangeDetectionStrategy.OnPush,preserveWhitespaces:!1,styles:[`.sketch-swatches{position:relative;display:flex;flex-wrap:wrap;margin:0 -10px;padding:10px 0 0 10px;border-top:1px solid rgb(238,238,238)}.sketch-wrap{width:16px;height:16px;margin:0 10px 10px 0}:host-context([dir=rtl]) .sketch-swatches{padding-right:10px;padding-left:0}:host-context([dir=rtl]) .sketch-wrap{margin-left:10px;margin-right:0}
`]}]}],null,{colors:[{type:e.Input}],onClick:[{type:e.Output}],onSwatchHover:[{type:e.Output}]});class i extends a.ColorWrap{disableAlpha=!1;presetColors=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];width=200;activeBackground;constructor(){super()}afterValidChange(){const t=this.disableAlpha?1:this.rgb.a;this.activeBackground=`rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${t})`}handleValueChange({data:t,$event:n}){this.handleChange(t,n)}handleBlockChange({hex:t,$event:n}){(0,a.isValidHex)(t)&&this.handleChange({hex:t,source:"hex"},n)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["color-sketch"]],inputs:{disableAlpha:"disableAlpha",presetColors:"presetColors",width:"width"},features:[e.\u0275\u0275ProvidersFeature([{provide:_.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>i),multi:!0},{provide:a.ColorWrap,useExisting:(0,e.forwardRef)(()=>i)}]),e.\u0275\u0275InheritDefinitionFeature],decls:14,vars:16,consts:[[1,"sketch-saturation"],[3,"onChange","hsl","hsv"],[1,"sketch-controls"],[1,"sketch-sliders"],[1,"sketch-hue"],[3,"onChange","hsl"],["class","sketch-alpha",4,"ngIf"],[1,"sketch-color"],[1,"sketch-active"],[1,"sketch-fields-container"],[3,"onChange","rgb","hsl","hex","disableAlpha"],["class","sketch-swatches-container",4,"ngIf"],[1,"sketch-alpha"],[3,"onChange","radius","rgb","hsl"],[1,"sketch-swatches-container"],[3,"onClick","onSwatchHover","colors"]],template:function(n,o){n&1&&(e.\u0275\u0275elementStart(0,"div")(1,"div",0)(2,"color-saturation",1),e.\u0275\u0275listener("onChange",function(l){return o.handleValueChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"div",2)(4,"div",3)(5,"div",4)(6,"color-hue",5),e.\u0275\u0275listener("onChange",function(l){return o.handleValueChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,k,2,3,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",7),e.\u0275\u0275element(9,"color-checkboard")(10,"div",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",9)(12,"color-sketch-fields",10),e.\u0275\u0275listener("onChange",function(l){return o.handleValueChange(l)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(13,x,2,1,"div",11),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275classMapInterpolate1("sketch-picker ",o.className,""),e.\u0275\u0275styleProp("width",o.width,"px"),e.\u0275\u0275advance(2),e.\u0275\u0275property("hsl",o.hsl)("hsv",o.hsv),e.\u0275\u0275advance(4),e.\u0275\u0275property("hsl",o.hsl),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",o.disableAlpha===!1),e.\u0275\u0275advance(3),e.\u0275\u0275styleProp("background",o.activeBackground),e.\u0275\u0275advance(2),e.\u0275\u0275property("rgb",o.rgb)("hsl",o.hsl)("hex",o.hex)("disableAlpha",o.disableAlpha),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",o.presetColors&&o.presetColors.length))},dependencies:()=>[d.NgIf,a.AlphaComponent,a.CheckboardComponent,a.HueComponent,a.SaturationComponent,c,h],styles:[".sketch-picker[_ngcontent-%COMP%]{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation[_ngcontent-%COMP%]{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container[_ngcontent-%COMP%], .sketch-swatches-container[_ngcontent-%COMP%]{display:block}.sketch-controls[_ngcontent-%COMP%]{display:flex}.sketch-sliders[_ngcontent-%COMP%]{padding:4px 0;flex:1 1 0%}.sketch-hue[_ngcontent-%COMP%]{position:relative;height:10px;overflow:hidden}.sketch-alpha[_ngcontent-%COMP%]{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color[_ngcontent-%COMP%]{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}[dir=rtl][_nghost-%COMP%]   .sketch-color[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .sketch-color[_ngcontent-%COMP%]{margin-right:4px;margin-left:0}"],changeDetection:0})}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Component,args:[{selector:"color-sketch",template:`
  <div class="sketch-picker {{ className }}" [style.width.px]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `,changeDetection:e.ChangeDetectionStrategy.OnPush,preserveWhitespaces:!1,providers:[{provide:_.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>i),multi:!0},{provide:a.ColorWrap,useExisting:(0,e.forwardRef)(()=>i)}],styles:[`.sketch-picker{padding:10px 10px 3px;box-sizing:initial;background:#fff;border-radius:4px;box-shadow:0 0 0 1px #00000026,0 8px 16px #00000026}.sketch-saturation{width:100%;padding-bottom:75%;position:relative;overflow:hidden}.sketch-fields-container,.sketch-swatches-container{display:block}.sketch-controls{display:flex}.sketch-sliders{padding:4px 0;flex:1 1 0%}.sketch-hue{position:relative;height:10px;overflow:hidden}.sketch-alpha{position:relative;height:10px;margin-top:4px;overflow:hidden}.sketch-color{width:24px;height:24px;position:relative;margin-top:4px;margin-left:4px;border-radius:3px}.sketch-active{position:absolute;inset:0;border-radius:2px;box-shadow:#00000026 0 0 0 1px inset,#00000040 0 0 4px inset}:host-context([dir=rtl]) .sketch-color{margin-right:4px;margin-left:0}
`]}]}],function(){return[]},{disableAlpha:[{type:e.Input}],presetColors:[{type:e.Input}],width:[{type:e.Input}]});class u{static \u0275fac=function(n){return new(n||u)};static \u0275mod=e.\u0275\u0275defineNgModule({type:u});static \u0275inj=e.\u0275\u0275defineInjector({imports:[d.CommonModule,a.AlphaModule,a.CheckboardModule,a.EditableInputModule,a.HueModule,a.SaturationModule,a.SwatchModule]})}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.NgModule,args:[{declarations:[i,c,h],exports:[i,c,h],imports:[d.CommonModule,a.AlphaModule,a.CheckboardModule,a.EditableInputModule,a.HueModule,a.SaturationModule,a.SwatchModule]}]}],null,null)}}]);
