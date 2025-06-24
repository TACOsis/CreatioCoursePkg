(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[3227],{33227:(Xt,B,P)=>{P.r(B),P.d(B,{AngularTreeGridComponent:()=>M,AngularTreeGridModule:()=>A,AngularTreeGridService:()=>g,DefaultEditor:()=>C});var e=P(59131),U=P(62278),s=P(40297),_=P(56711),N=P(71252);const K=["db-tree-head",""],$=o=>({"column-hide":o});function J(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"th",5)(1,"input",6),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.selectAll(r))}),e.\u0275\u0275elementEnd()()}if(o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("checked",t.internal_configs.all_selected)}}function X(o,n){if(o&1&&(e.\u0275\u0275element(0,"span",11),e.\u0275\u0275pipe(1,"safeHtml")),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.add_icon),e.\u0275\u0275sanitizeHtml)}}function Y(o,n){o&1&&(e.\u0275\u0275elementStart(0,"span",12),e.\u0275\u0275text(1,"+"),e.\u0275\u0275elementEnd())}function Z(o,n){o&1&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Actions"),e.\u0275\u0275elementEnd())}function q(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"th",7),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.addRow())}),e.\u0275\u0275elementStart(1,"span",8),e.\u0275\u0275template(2,X,2,3,"span",9)(3,Y,2,0,"span",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,Z,2,0,"span",0),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275propertyInterpolate("width",t.configs.action_column_width),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!t.internal_configs.show_add_row&&t.configs.actions.add&&t.configs.css.add_icon.length>0),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.internal_configs.show_add_row&&t.configs.actions.add&&t.configs.css.add_icon.length==0),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.internal_configs.show_add_row||!t.configs.actions.add)}}function ee(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"th",1),e.\u0275\u0275element(1,"div",13),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(3,$,t.hidden)),e.\u0275\u0275attribute("width",t.width),e.\u0275\u0275advance(),e.\u0275\u0275property("innerHTML",t.header_renderer?t.header_renderer(t.header):t.header,e.\u0275\u0275sanitizeHtml)}}function te(o,n){o&1&&(e.\u0275\u0275elementStart(0,"th"),e.\u0275\u0275text(1," Parent "),e.\u0275\u0275elementEnd())}function ne(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"tr",1),e.\u0275\u0275template(2,J,2,1,"th",2)(3,q,5,4,"th",3)(4,ee,2,5,"th",4)(5,te,2,0,"th",0),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngClass",t.configs.css.header_class),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.add||t.configs.actions.edit||t.configs.actions.delete),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.columns),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.show_parent_on_edit&&t.internal_configs.show_parent_col||t.internal_configs.show_add_row)}}const oe=["db-filter-row",""];function re(o,n){o&1&&e.\u0275\u0275element(0,"td")}function ie(o,n){o&1&&e.\u0275\u0275element(0,"td")}function ae(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"input",2),e.\u0275\u0275listener("keyup",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.filter())}),e.\u0275\u0275twoWayListener("ngModelChange",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext().$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275twoWayBindingSet(c.search_values[a.name],r)||(c.search_values[a.name]=r),e.\u0275\u0275resetView(r)}),e.\u0275\u0275elementEnd()()}if(o&2){const t=e.\u0275\u0275nextContext().$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275twoWayProperty("ngModel",i.search_values[t.name])}}function ce(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275template(1,ae,2,1,"div",0),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.filter)}}function le(o,n){o&1&&e.\u0275\u0275element(0,"td")}const j=["customView"];function de(o,n){}const se=o=>({"cell-default":!0,"expandable-editor":o}),_e=["db-add-row",""];function pe(o,n){o&1&&e.\u0275\u0275element(0,"td")}function ge(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",10),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.saveAddRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.save_icon),e.\u0275\u0275sanitizeHtml)}}function me(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",11),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.saveAddRecord(r))}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Save row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",12)(4,"g",13),e.\u0275\u0275element(5,"rect",14)(6,"path",15),e.\u0275\u0275elementEnd()()()}}function fe(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",16),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.cancelAddEdit())}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.cancel_icon),e.\u0275\u0275sanitizeHtml)}}function ue(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",17),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.cancelAddEdit())}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Cancel row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",12)(4,"g",18),e.\u0275\u0275element(5,"rect",19)(6,"path",20),e.\u0275\u0275elementEnd()()()}}function we(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-custom-cell-editor-component",24),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.cancelAddEdit())})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveAddRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("column",t)("row_data",i.row_data)}}function he(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-tree-cell-editor",25),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.cancelAddEdit())})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveAddRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("row_data",i.row_data)("column",t)}}function xe(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,we,1,2,"db-custom-cell-editor-component",22)(2,he,1,2,"db-tree-cell-editor",23),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.editor),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.editor)}}function be(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td",21),e.\u0275\u0275template(1,xe,3,2,"div",0),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit;e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,$,t.hidden)),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.editable)}}function Ce(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"option",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit;e.\u0275\u0275property("value",t.id),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate1(" ",t.value," ")}}const ve=["db-tree-cell-actions",""];function ye(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",5),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.enableEdit(r.row_data[r.configs.id_field],r.row_data))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.edit_icon),e.\u0275\u0275sanitizeHtml)}}function ke(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.enableEdit(r.row_data[r.configs.id_field],r.row_data))}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Edit row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",7)(4,"g",8),e.\u0275\u0275element(5,"rect",9)(6,"path",10),e.\u0275\u0275elementEnd()()()}}function Me(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,ye,2,3,"span",3)(2,ke,7,0,"svg",4),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.css.edit_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.edit_icon)}}function Te(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",15),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.save_icon),e.\u0275\u0275sanitizeHtml)}}function Ie(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",16),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Save row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",7)(4,"g",17),e.\u0275\u0275element(5,"rect",9)(6,"path",18),e.\u0275\u0275elementEnd()()()}}function Oe(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",19),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.cancel_icon),e.\u0275\u0275sanitizeHtml)}}function Pe(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",20),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data))}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Cancel row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",7)(4,"g",21),e.\u0275\u0275element(5,"rect",22)(6,"path",23),e.\u0275\u0275elementEnd()()()}}function Se(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",2),e.\u0275\u0275template(2,Te,2,3,"span",11)(3,Ie,7,0,"svg",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275template(5,Oe,2,3,"span",13)(6,Pe,7,0,"svg",14),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.configs.css.save_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.save_icon),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.configs.css.cancel_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.cancel_icon)}}function Ee(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Me,3,2,"div",1)(2,Se,7,4,"ng-container",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.edit_tracker[t.row_data[t.configs.id_field]]),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.edit_tracker[t.row_data[t.configs.id_field]])}}function Ve(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",26),e.\u0275\u0275pipe(1,"safeHtml"),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.deleteRecord(r.row_data))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("innerHTML",e.\u0275\u0275pipeBind1(1,1,t.configs.css.delete_icon),e.\u0275\u0275sanitizeHtml)}}function Re(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",27),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(r.deleteRecord(r.row_data))}),e.\u0275\u0275elementStart(1,"title"),e.\u0275\u0275text(2,"Delete row"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"g",7)(4,"g",28),e.\u0275\u0275element(5,"rect",9)(6,"path",29)(7,"path",30)(8,"path",31),e.\u0275\u0275elementEnd()()()}}function De(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,Ve,2,3,"span",24)(2,Re,9,0,"svg",25),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.css.delete_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.delete_icon)}}function Ae(o,n){}const H=o=>({visibility:o});function He(o,n){o&1&&e.\u0275\u0275element(0,"span",5)}function Fe(o,n){if(o&1&&(e.\u0275\u0275element(0,"span",10),e.\u0275\u0275pipe(1,"safeHtml")),o&2){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(4,H,t.row_data.expand_disabled?"hidden":"visible"))("innerHTML",e.\u0275\u0275pipeBind1(1,2,t.configs.css.expand_icon),e.\u0275\u0275sanitizeHtml)}}function ze(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"span",11),e.\u0275\u0275text(1,"+"),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(1,H,t.row_data.expand_disabled?"hidden":"visible"))}}function Le(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",7),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.expandRow(r))}),e.\u0275\u0275template(1,Fe,2,6,"span",8)(2,ze,2,3,"span",9),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.show_expand_icon&&t.configs.css.expand_icon.length>0),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.show_expand_icon&&t.configs.css.expand_icon.length==0)}}function Be(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Le,3,2,"span",6),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.show_expand_icon)}}function Ne(o,n){o&1&&e.\u0275\u0275element(0,"span",14)}function $e(o,n){if(o&1&&(e.\u0275\u0275element(0,"span",10),e.\u0275\u0275pipe(1,"safeHtml")),o&2){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(4,H,t.row_data.expand_disabled?"hidden":"visible"))("innerHTML",e.\u0275\u0275pipeBind1(1,2,t.configs.css.collapse_icon),e.\u0275\u0275sanitizeHtml)}}function je(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"span",17),e.\u0275\u0275text(1,"\u2014"),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(1,H,t.row_data.expand_disabled?"hidden":"visible"))}}function Ge(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"span",15),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.collapseRow(r))}),e.\u0275\u0275template(1,$e,2,6,"span",8)(2,je,2,3,"span",16),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.show_expand_icon&&t.configs.css.collapse_icon.length>0),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.show_expand_icon&&t.configs.css.collapse_icon.length==0)}}function We(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Ne,1,0,"span",12)(2,Ge,3,2,"span",13),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.row_data.is_loading),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.row_data.is_loading&&t.show_expand_icon)}}function Qe(o,n){if(o&1&&e.\u0275\u0275element(0,"db-custom-cell-component",21),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("column",t.column)("row_data",t.row_data)}}function Ue(o,n){if(o&1&&e.\u0275\u0275element(0,"db-tree-cell-view",21),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("column",t.column)("row_data",t.row_data)}}function Ke(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0,18),e.\u0275\u0275template(1,Qe,1,2,"db-custom-cell-component",19)(2,Ue,1,2,"db-tree-cell-view",20),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngSwitch",t.column.type),e.\u0275\u0275advance(),e.\u0275\u0275property("ngSwitchCase","custom")}}function Je(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-custom-cell-editor-component",24),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data.pathx))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onEditComplete(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("cell_value",t.cell_value)("column",t.column)("row_data",t.row_data)}}function Xe(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-tree-cell-editor",25),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data.pathx))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onEditComplete(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("cell_value",t.cell_value)("row_data",t.row_data)("column",t.column)("expandable_column",!0)}}function Ye(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Je,1,3,"db-custom-cell-editor-component",22)(2,Xe,1,4,"db-tree-cell-editor",23),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.column.editor),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.column.editor)}}function Ze(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",2),e.\u0275\u0275template(2,He,1,0,"span",3)(3,Be,2,1,"ng-container",1)(4,We,3,2,"ng-container",1)(5,Ke,3,2,"ng-container",4)(6,Ye,3,2,"ng-container",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngStyle",t.getChildrenPadding()),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.row_data.levelx==0&&t.row_data.leaf),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.expand_tracker[t.row_data.pathx]),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.expand_tracker[t.row_data.pathx]),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.edit_on||!t.column.editable),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.edit_on&&t.column.editable)}}function qe(o,n){if(o&1&&e.\u0275\u0275element(0,"db-custom-cell-component",21),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("column",t.column)("row_data",t.row_data)}}function et(o,n){if(o&1&&e.\u0275\u0275element(0,"db-tree-cell-view",21),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("column",t.column)("row_data",t.row_data)}}function tt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0,18),e.\u0275\u0275template(1,qe,1,2,"db-custom-cell-component",19)(2,et,1,2,"db-tree-cell-view",20),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngSwitch",t.column.type),e.\u0275\u0275advance(),e.\u0275\u0275property("ngSwitchCase","custom")}}function nt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-custom-cell-editor-component",24),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data.pathx))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onEditComplete(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("cell_value",t.cell_value)("column",t.column)("row_data",t.row_data)}}function ot(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"db-tree-cell-editor",25),e.\u0275\u0275listener("canceledit",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(r.canceledit.emit(r.row_data.pathx))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onEditComplete(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("cell_value",t.cell_value)("row_data",t.row_data)("column",t.column)("expandable_column",!1)}}function rt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,nt,1,3,"db-custom-cell-editor-component",22)(2,ot,1,4,"db-tree-cell-editor",23),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.column.editor),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.column.editor)}}function it(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,tt,3,2,"ng-container",4)(2,rt,3,2,"ng-container",1),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.edit_on||!t.column.editable),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.edit_on&&t.column.editable)}}const at=["db-subgrid-head",""],ct=(o,n,t)=>({sorted:o,sortable:n,"column-hide":t});function lt(o,n){if(o&1&&e.\u0275\u0275element(0,"span",3),o&2){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275property("ngClass",t.sorted&&t.sort_type==0?"arrow-down active":"arrow-down")}}function dt(o,n){if(o&1&&e.\u0275\u0275element(0,"span",3),o&2){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275property("ngClass",t.sorted&&t.sort_type==1?"arrow-up active":"arrow-up")}}function st(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"th",1),e.\u0275\u0275listener("click",function(){const r=e.\u0275\u0275restoreView(t).$implicit,a=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(a.sortColumn(a.row_data,r))}),e.\u0275\u0275text(1),e.\u0275\u0275template(2,lt,1,1,"span",2)(3,dt,1,1,"span",2),e.\u0275\u0275elementEnd()}if(o&2){const t=n.$implicit;e.\u0275\u0275propertyInterpolate("width",t.width?t.width:"auto"),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction3(5,ct,t.sorted,t.sortable,t.hidden)),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate1(" ",t.header," "),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.sortable),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.sortable)}}const _t=["db-subgrid-body",""];function pt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"tr"),e.\u0275\u0275element(2,"td",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("innerHTML",t.configs.subgrid_config.data_loading_text,e.\u0275\u0275sanitizeHtml),e.\u0275\u0275attribute("colspan",t.configs.subgrid_config.columns.length)}}function gt(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275element(1,"db-tree-cell",3),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit,i=e.\u0275\u0275nextContext().$implicit,r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("configs",r.configs)("column",t)("index",1)("row_data",i)("expand_tracker",r.expand_tracker)("cellclick",r.cellclick)}}function mt(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275template(1,gt,2,6,"td",2),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.configs.subgrid_config.columns)}}function ft(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275element(1,"div",4),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("innerHTML",t.summary_renderer&&t.summary_renderer(i.row_data.children),e.\u0275\u0275sanitizeHtml)}}function ut(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275template(1,ft,2,1,"td",2),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.configs.subgrid_config.columns)}}function wt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,mt,2,1,"tr",2)(2,ut,2,1,"tr",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.row_data.children),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.subgrid_config.show_summary_row)}}const ht=["db-subgrid",""],G=(o,n)=>({"column-hide":o,"expand-column":n});function xt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",4)(1,"input",5),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.selectRowOnCheck(a.row_data,r))}),e.\u0275\u0275elementEnd()()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("checked",t.row_data.row_selected),e.\u0275\u0275attribute("disabled",t.row_data.selection_disabled)}}function bt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",6),e.\u0275\u0275listener("canceledit",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.cancelEdit(r))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("row_data",t.row_data)("configs",t.configs)("store",t.store)("edit_tracker",t.edit_tracker)("internal_configs",t.internal_configs)("rowdelete",t.rowdelete)}}function Ct(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",7)(1,"db-tree-cell",8),e.\u0275\u0275listener("rowexpand",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onRowExpand(r))})("rowcollapse",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.onRowCollapse(r))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementEnd()()}if(o&2){const t=n.$implicit,i=n.index,r=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(8,G,t.hidden,i==0)),e.\u0275\u0275advance(),e.\u0275\u0275property("configs",r.configs)("column",t)("index",i)("row_data",r.row_data)("expand_tracker",r.expand_tracker)("edit_on",r.edit_tracker[r.row_data[r.configs.id_field]])("cellclick",r.cellclick)}}function vt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,xt,2,2,"td",1)(2,bt,1,6,"td",2)(3,Ct,2,11,"td",3),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.edit||t.configs.actions.delete||t.configs.actions.add),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.configs.columns)}}function yt(o,n){o&1&&e.\u0275\u0275element(0,"td")}function kt(o,n){o&1&&e.\u0275\u0275element(0,"td")}function Mt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,yt,1,0,"td",0)(2,kt,1,0,"td",0),e.\u0275\u0275elementStart(3,"td",9)(4,"table",10),e.\u0275\u0275element(5,"thead",11)(6,"tbody",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.edit||t.configs.actions.delete||t.configs.actions.add),e.\u0275\u0275advance(),e.\u0275\u0275attribute("colspan",t.configs.columns.length),e.\u0275\u0275advance(2),e.\u0275\u0275property("row_data",t.row_data)("configs",t.configs),e.\u0275\u0275advance(),e.\u0275\u0275property("configs",t.configs)("expand_tracker",t.expand_tracker)("cellclick",t.cellclick)("row_data",t.row_data)}}function Tt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,vt,4,3,"ng-container",0)(2,Mt,7,9,"ng-container",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.row_data.leaf),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.row_data.leaf)}}const It=["db-tree-body",""];function Ot(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275element(1,"td",3),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("innerHTML",t.configs.data_loading_text,e.\u0275\u0275sanitizeHtml),e.\u0275\u0275attribute("colspan",t.columns.length+1)}}function Pt(o,n){if(o&1&&e.\u0275\u0275element(0,"tr",4),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("columns",t.columns)("configs",t.configs)("store",t.store)("internal_configs",t.internal_configs)("expand_tracker",t.expand_tracker)("ngClass",t.configs.css.row_filter_class)}}function St(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr",5),e.\u0275\u0275listener("rowadd",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.addRow(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("columns",t.columns)("configs",t.configs)("internal_configs",t.internal_configs)("store",t.store)("ngClass",t.configs.row_class_function()+" row-add")}}function Et(o,n){if(o&1&&e.\u0275\u0275element(0,"tr",7),o&2){const t=n.$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("configs",i.configs)("internal_configs",i.internal_configs)("expand_tracker",i.expand_tracker)("edit_tracker",i.edit_tracker)("store",i.store)("row_data",t)("cellclick",i.cellclick)("rowselect",i.rowselect)("rowdeselect",i.rowdeselect)("expand",i.expand)("rowsave",i.rowsave)("rowdelete",i.rowdelete)}}function Vt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Et,1,12,"tr",6),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.display_data)}}function Rt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",13)(1,"input",14),e.\u0275\u0275listener("click",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(2).$implicit,c=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(c.selectRowOnCheck(a,r))}),e.\u0275\u0275elementEnd()()}if(o&2){const t=e.\u0275\u0275nextContext(2).$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("checked",t.row_selected),e.\u0275\u0275attribute("disabled",t.selection_disabled)}}function Dt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",15),e.\u0275\u0275listener("canceledit",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(5);return e.\u0275\u0275resetView(a.cancelEdit(r))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(5);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("row_data",t)("configs",i.configs)("store",i.store)("edit_tracker",i.edit_tracker)("internal_configs",i.internal_configs)("rowdelete",i.rowdelete)}}function At(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",16)(1,"db-tree-cell",17),e.\u0275\u0275listener("rowexpand",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(5);return e.\u0275\u0275resetView(a.onRowExpand(r))})("rowcollapse",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(5);return e.\u0275\u0275resetView(a.onRowCollapse(r))})("editcomplete",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(5);return e.\u0275\u0275resetView(a.saveRecord(r))}),e.\u0275\u0275elementEnd()()}if(o&2){const t=n.$implicit,i=n.index,r=e.\u0275\u0275nextContext(2).$implicit,a=e.\u0275\u0275nextContext(3);e.\u0275\u0275classMap(t.css_class),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction2(11,G,t.hidden,i==0)),e.\u0275\u0275advance(),e.\u0275\u0275property("configs",a.configs)("column",t)("index",i)("row_data",r)("expand_tracker",a.expand_tracker)("edit_on",a.edit_tracker[r[a.configs.id_field]])("cellclick",a.cellclick)}}function Ht(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"option",21),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit;e.\u0275\u0275property("value",t.id),e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate(t.value)}}function Ft(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"select",19),e.\u0275\u0275twoWayListener("ngModelChange",function(r){e.\u0275\u0275restoreView(t);const a=e.\u0275\u0275nextContext(3).$implicit,c=e.\u0275\u0275nextContext(3);return e.\u0275\u0275twoWayBindingSet(a[c.configs.parent_id_field],r)||(a[c.configs.parent_id_field]=r),e.\u0275\u0275resetView(r)}),e.\u0275\u0275template(1,Ht,2,2,"option",20),e.\u0275\u0275elementEnd()}if(o&2){const t=e.\u0275\u0275nextContext(3).$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275twoWayProperty("ngModel",t[i.configs.parent_id_field]),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",i.parents)}}function zt(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275template(1,Ft,2,2,"select",18),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(2).$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",i.edit_tracker[t[i.configs.id_field]])}}function Lt(o,n){o&1&&e.\u0275\u0275element(0,"td")}function Bt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Rt,2,2,"td",10)(2,Dt,1,6,"td",11)(3,At,2,14,"td",12)(4,zt,2,1,"td",0)(5,Lt,1,0,"td",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.edit||t.configs.actions.delete||t.configs.actions.add),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.columns),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.show_parent_on_edit&&t.internal_configs.show_parent_col),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.internal_configs.show_add_row&&!(t.internal_configs.show_parent_col&&t.configs.show_parent_on_edit))}}function Nt(o,n){if(o&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr",9),e.\u0275\u0275listener("click",function(r){const a=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(c.selectRow(a,r))}),e.\u0275\u0275template(1,Bt,6,5,"ng-container",0),e.\u0275\u0275elementEnd()}if(o&2){const t=n.$implicit,i=e.\u0275\u0275nextContext(3);e.\u0275\u0275attribute("class",i.configs.row_class_function(t)+" "+(t.row_selected?i.configs.css.row_selection_class:"")),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",i.expand_tracker[t.parent_pathx])}}function $t(o,n){o&1&&e.\u0275\u0275element(0,"td")}function jt(o,n){o&1&&e.\u0275\u0275element(0,"td")}function Gt(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"td"),e.\u0275\u0275element(1,"div",23),e.\u0275\u0275elementEnd()),o&2){const t=n.$implicit,i=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(),e.\u0275\u0275property("innerHTML",t.summary_renderer&&t.summary_renderer(i.display_data),e.\u0275\u0275sanitizeHtml)}}function Wt(o,n){if(o&1&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275template(1,$t,1,0,"td",0)(2,jt,1,0,"td",0)(3,Gt,2,1,"td",22),e.\u0275\u0275elementEnd()),o&2){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.edit||t.configs.actions.delete||t.configs.actions.add),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.configs.columns)}}function Qt(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Nt,2,2,"tr",8)(2,Wt,4,3,"tr",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.display_data),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.show_summary_row)}}function Ut(o,n){if(o&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Ot,2,2,"tr",0)(2,Pt,1,6,"tr",1)(3,St,1,5,"tr",2)(4,Vt,2,1,"ng-container",0)(5,Qt,3,2,"ng-container",0),e.\u0275\u0275elementContainerEnd()),o&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.store.raw_data.length==0),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.filter),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.internal_configs.show_add_row),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.subgrid),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.subgrid)}}class g{constructor(){this.display_data_observable=new U.Subject,this.display_data_observable$=this.display_data_observable.asObservable()}updateDisplayDataObservable(n){this.display_data_observable.next(n)}findRowIndex(n,t,i){return n.map(r=>r[t.id_field]).indexOf(i)}selectAll(n){n.forEach(t=>{t.row_selected=!0})}deSelectAll(n){n.forEach(t=>{t.row_selected=!1})}expandAll(n){for(const t in n)n.hasOwnProperty(t)&&(n[t]=!0)}collapseAll(n){for(const t in n)n.hasOwnProperty(t)&&(n[t]=!1);n[""]=!0}expandRow(n,t,i,r,a,c,l){if(a.subgrid){this.expandSubgridRow(n,t,i,r,a,c,l);return}const d=this.findRowIndex(c,a,n),p=c[d],W=p.pathx.split(".");t[p.pathx]=!0;let z=1;for(let L=0;L<c.length;L++){const Q=c[L];if(z>=W.length)return;const Jt=W.slice(0,z).join(".");Q.pathx.indexOf(Jt)!==-1&&(z+=1,t[Q.pathx]=!0,r||(a.load_children_on_expand?this.emitExpandRowEvent(t,i,l,p,a):i.emit({event:null,data:p})))}}collapseRow(n,t,i,r,a,c){const l=this.findRowIndex(c,a,n),d=c[l],p=d.pathx;t[p]=!1,c.forEach(F=>{F.pathx.indexOf(p)!==-1&&(t[F.pathx]=0,r||i.emit({event:null,data:d}))})}emitExpandRowEvent(n,t,i,r,a){const c=new Promise((l,d)=>{t.emit({data:r,resolve:l})});n[r.pathx]=!0,i.remove_children(r),r.is_loading=!0,c.then(l=>{r.is_loading=!1,i.remove_children(r),l&&(l.map(d=>{d.leaf=!0,d.levelx=r.levelx+1,d.pathx=r.pathx+"."+d[a.id_field],d.parent_pathx=r.pathx,d[a.parent_id_field]=r[a.id_field]}),i.add_children(r,l))}).catch(l=>{})}disableRowSelection(n,t,i){const r=this.findRowIndex(n,t,i);n[r].selection_disabled=!0}enableRowSelection(n,t,i){const r=this.findRowIndex(n,t,i);n[r].selection_disabled=!1}disableRowExpand(n,t,i){const r=this.findRowIndex(n,t,i);n[r].expand_disabled=!0}enableRowExpand(n,t,i){const r=this.findRowIndex(n,t,i);n[r].expand_disabled=!1}expandSubgridRow(n,t,i,r,a,c,l){const d=this.findRowIndex(c,a,n),p=c[d];t[p.pathx]=!0,r||this.emitSubgridExpandRowEvent(t,i,l,p)}emitSubgridExpandRowEvent(n,t,i,r){const a=new Promise((l,d)=>{t.emit({data:r,resolve:l})});n[r.pathx]=!0;const c=i.showBlankRow(r);c.loading_children=!0,a.then(l=>{c.loading_children=!1,l?(l.map(d=>{d.leaf=!0}),c.children=l):c.children||(c.children=[])}).catch(l=>{})}}g.\u0275fac=function(n){return new(n||g)},g.\u0275prov=e.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac,providedIn:"root"}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(g,[{type:e.Injectable,args:[{providedIn:"root"}]}],function(){return[]},null);class Kt{constructor(n){this.angularTreeGridService=n}getRawData(){return this.raw_data}setRawData(n){this.raw_data=n}getProcessedData(){return this.processed_data}setProcessedData(n){this.processed_data=n,this.setDisplayData([...n])}getDisplayData(){return this.display_data}setDisplayData(n){this.display_data=n,this.angularTreeGridService.updateDisplayDataObservable(this.display_data)}showBlankRow(n){const t=this.display_data.map(r=>r[this.configs.id_field]).indexOf(n[this.configs.id_field]);let i=this.display_data[t+1];return(!i||i.parent_pathx!==n[this.configs.id_field])&&(i={leaf:!0,row_selected:!0,parent_pathx:n[this.configs.id_field]},i[this.configs.id_field]=-1,this.display_data.splice(t+1,0,i)),i}remove_children(n){const t=[];for(let i=0;i<this.processed_data.length;i++){const r=this.processed_data[i];r[this.configs.parent_id_field]!==n[this.configs.id_field]&&t.push(r)}this.setProcessedData(t)}add_children(n,t){const i=this.processed_data.map(c=>c[this.configs.id_field]).indexOf(n[this.configs.id_field]),r=this.processed_data.slice(0,i+1),a=this.processed_data.slice(i+1);this.processed_data=r.concat(t).concat(a),this.setDisplayData([...this.processed_data]),this.angularTreeGridService.updateDisplayDataObservable(this.display_data)}filterBy(n,t){this.display_data=this.processed_data.filter(i=>{let r=!0;for(let a=0;a<n.length;a++){const c=n[a];let l=i[c.name],d=t[a];d&&(c.filter_function?c.filter_function(i,c,l,d)===!1&&(r=!1):typeof l=="number"?l!==parseInt(d,10)&&(r=!1):(c.case_sensitive_filter||(l=l.toLowerCase(),d=d.toLowerCase()),l.indexOf(d)===-1&&(r=!1)))}return r}),this.angularTreeGridService.updateDisplayDataObservable(this.display_data)}findTopParentNode(n,t){const i=n.map(a=>a[t.id_field]);let r=[];return n.forEach(a=>{i.indexOf(a[t.parent_id_field])===-1&&r.push(a[t.parent_id_field])}),r=r.filter(function(a,c,l){return l.indexOf(a)===c}),r}processData(n,t,i,r,a){const c=this.findTopParentNode(n,i),l=[];a.top_parents=c,n.map(d=>{d.pathx=[],d.leaf=!1}),c.forEach(d=>{const p=this.findChildren(n,d,i);this.orderData(n,l,i,p,[],0)}),l.map(d=>{const p=d.parent_pathx;d.parent_pathx=p.join("."),p.push(d[i.id_field]),d.pathx=p.join("."),t[d.pathx]=!1,r[d[i.id_field]]=!1,i.subgrid&&(d.leaf=!1)}),t[""]=!0,this.setProcessedData(l),this.setRawData(n),this.configs=i}findChildren(n,t,i){return n.filter(r=>r[i.parent_id_field]===t)}orderData(n,t,i,r,a,c){r.forEach(l=>{const d=this.findChildren(n,l[i.id_field],i);if(d.length===0)l.leaf=!0,l.levelx=c,l.parent_pathx=[...a],t.push(l);else{l.parent_pathx=[...a],l.levelx=c,t.push(l);const p=[...a,l[i.id_field]];this.orderData(n,t,i,d,p,c+1)}})}refreshDisplayData(){this.display_data=this.processed_data,this.angularTreeGridService.updateDisplayDataObservable(this.display_data)}}class b{constructor(n){this.angularTreeGridService=n}ngOnInit(){}addRow(){this.internal_configs.show_add_row=!0}selectAll(n){n.target.checked?(this.angularTreeGridService.selectAll(this.store.getDisplayData()),this.rowselectall.emit(this.store.getDisplayData())):(this.angularTreeGridService.deSelectAll(this.store.getDisplayData()),this.rowdeselectall.emit(n))}}b.\u0275fac=function(n){return new(n||b)(e.\u0275\u0275directiveInject(g))},b.\u0275cmp=e.\u0275\u0275defineComponent({type:b,selectors:[["","db-tree-head",""]],inputs:{store:"store",configs:"configs",expand_tracker:"expand_tracker",edit_tracker:"edit_tracker",internal_configs:"internal_configs",columns:"columns",rowselectall:"rowselectall",rowdeselectall:"rowdeselectall"},attrs:K,decls:1,vars:1,consts:[[4,"ngIf"],[3,"ngClass"],["class","checkbox_column",4,"ngIf"],["class","action-column",3,"width","click",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"checkbox_column"],["type","checkbox",3,"click","checked"],[1,"action-column",3,"click","width"],[1,"icon-container"],["title","Add a row",3,"innerHTML",4,"ngIf"],["title","Add a row","class","inbuild-icon",4,"ngIf"],["title","Add a row",3,"innerHTML"],["title","Add a row",1,"inbuild-icon"],[3,"innerHTML"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,ne,6,5,"ng-container",0),n&2&&e.\u0275\u0275property("ngIf",t.configs)},dependencies:[s.NgIf,s.NgClass,s.NgForOf],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc;background:#fff}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:.5rem}tr[_ngcontent-%COMP%]   th.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   th.action-column[_ngcontent-%COMP%]   span.icon-container[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span.inbuild-icon[_ngcontent-%COMP%]{font-size:25px}th.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}th.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}.column-hide[_ngcontent-%COMP%]{display:none}svg[_ngcontent-%COMP%]{width:25px;padding-right:3px}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(b,[{type:e.Component,args:[{selector:"[db-tree-head]",template:`<ng-container *ngIf="configs">
  <tr [ngClass]="configs.css.header_class">
    <th *ngIf="configs.multi_select" class="checkbox_column">
      <input
        type="checkbox"
        (click)="selectAll($event)"
        [checked]="this.internal_configs.all_selected"
      />
    </th>
    <th
      *ngIf="
        configs.actions.add || configs.actions.edit || configs.actions.delete
      "
      class="action-column"
      width="{{ configs.action_column_width }}"
      (click)="addRow()"
    >
      <span class="icon-container">
        <span
          *ngIf="
            !internal_configs.show_add_row &&
            configs.actions.add &&
            configs.css.add_icon.length > 0
          "
          [innerHTML]="configs.css.add_icon | safeHtml"
          title="Add a row"
        ></span>
        <span
          *ngIf="
            !internal_configs.show_add_row &&
            configs.actions.add &&
            configs.css.add_icon.length == 0
          "
          title="Add a row"
          class="inbuild-icon"
          >+</span
        >
      </span>
      <span *ngIf="internal_configs.show_add_row || !configs.actions.add"
        >Actions</span
      >
    </th>
    <th
      *ngFor="let column of columns"
      [ngClass]="{ 'column-hide': column.hidden }"
      [attr.width]="column.width"
    >
      <div
        [innerHTML]="
          column.header_renderer
            ? column.header_renderer(column.header)
            : column.header
        "
      ></div>
    </th>
    <th
      *ngIf="
        (configs.show_parent_on_edit && internal_configs.show_parent_col) ||
        internal_configs.show_add_row
      "
    >
      Parent
    </th>
  </tr>
</ng-container>
`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc;background:#fff}tr th{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr th div{padding:.5rem}tr th.column-hide{display:none}tr th.action-column span.icon-container{cursor:pointer}tr th span.inbuild-icon{font-size:25px}th.clear-left-border{border-left:0!important}th.clear-right-border{border-right:0!important}.column-hide{display:none}svg{width:25px;padding-right:3px}
`]}]}],function(){return[{type:g}]},{store:[{type:e.Input}],configs:[{type:e.Input}],expand_tracker:[{type:e.Input}],edit_tracker:[{type:e.Input}],internal_configs:[{type:e.Input}],columns:[{type:e.Input}],rowselectall:[{type:e.Input}],rowdeselectall:[{type:e.Input}]});class S{constructor(n){this.angularTreeGridService=n,this.search_values={}}ngOnInit(){this.columns.forEach(n=>{this.search_values[n.name]=""})}filter(){this.store.filterBy(this.columns,Object.values(this.search_values)),this.configs.subgrid||this.angularTreeGridService.expandAll(this.expand_tracker)}}S.\u0275fac=function(n){return new(n||S)(e.\u0275\u0275directiveInject(g))},S.\u0275cmp=e.\u0275\u0275defineComponent({type:S,selectors:[["","db-filter-row",""]],inputs:{store:"store",columns:"columns",expand_tracker:"expand_tracker",configs:"configs",internal_configs:"internal_configs"},attrs:oe,decls:4,vars:4,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["type","text",3,"keyup","ngModelChange","ngModel"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,re,1,0,"td",0)(1,ie,1,0,"td",0)(2,ce,2,1,"td",1)(3,le,1,0,"td",0),n&2&&(e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.edit||t.configs.actions.delete||t.configs.actions.add),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.columns),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.internal_configs.show_add_row||t.internal_configs.show_parent_col&&t.configs.show_parent_on_edit))},dependencies:[s.NgIf,s.NgForOf,_.DefaultValueAccessor,_.NgControlStatus,_.NgModel],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc}tr.selected[_ngcontent-%COMP%]{background-color:#e2e7eb}tr[_ngcontent-%COMP%]   span.parent_container[_ngcontent-%COMP%]{padding-left:45px}tr.child[_ngcontent-%COMP%]{background:#fff}tr.child[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent[_ngcontent-%COMP%]{background:#fafbff}tr.subgrid-row[_ngcontent-%COMP%]{background:#fcfcfc}tr.row-add[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.2rem}tr.row-add[_ngcontent-%COMP%]   td.action-column[_ngcontent-%COMP%]{padding:.5rem 1rem}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr[_ngcontent-%COMP%]   td.checkbox_column[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]   td.expand-column[_ngcontent-%COMP%]{padding:.3rem}tr[_ngcontent-%COMP%]   td.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   td.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}tr[_ngcontent-%COMP%]   td.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}td[_ngcontent-%COMP%]{vertical-align:middle;position:relative;padding:.2rem}td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #cdd5dc;width:100%;padding:.2rem .5rem;height:2rem;border-radius:3px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(S,[{type:e.Component,args:[{selector:"[db-filter-row]",template:`<td *ngIf="configs.multi_select"></td>
<td *ngIf="(configs.actions.edit || configs.actions.delete || configs.actions.add)"></td>
<td *ngFor="let column of columns">
  <div *ngIf="column.filter">
    <input type="text" (keyup)="filter()" [(ngModel)]="search_values[column.name]">
  </div>
</td>
<!-- Add column to fix UI issue when add row is enabled or Edit is enabled -->
<td *ngIf="internal_configs.show_add_row || (internal_configs.show_parent_col && configs.show_parent_on_edit)"></td>`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}td{vertical-align:middle;position:relative;padding:.2rem}td input{border:1px solid #cdd5dc;width:100%;padding:.2rem .5rem;height:2rem;border-radius:3px;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}
`]}]}],function(){return[{type:g}]},{store:[{type:e.Input}],columns:[{type:e.Input}],expand_tracker:[{type:e.Input}],configs:[{type:e.Input}],internal_configs:[{type:e.Input}]});class C{constructor(){this.canceledit=new e.EventEmitter,this.editcomplete=new e.EventEmitter,this.cellclick=new e.EventEmitter}}C.\u0275fac=function(n){return new(n||C)},C.\u0275cmp=e.\u0275\u0275defineComponent({type:C,selectors:[["ng-component"]],outputs:{canceledit:"canceledit",editcomplete:"editcomplete",cellclick:"cellclick"},decls:0,vars:0,template:function(n,t){},encapsulation:2}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(C,[{type:e.Component,args:[{selector:"",template:""}]}],null,{canceledit:[{type:e.Output}],editcomplete:[{type:e.Output}],cellclick:[{type:e.Output}]});class w extends C{constructor(n){super(),this.resolver=n}ngOnInit(){this.column.editor&&!this.custom_component&&(this.createCustomComponent(),this.callOnComponentInit())}ngOnDestroy(){this.custom_component&&this.custom_component.destroy()}createCustomComponent(){const n=this.resolver.resolveComponentFactory(this.column.editor);this.custom_component=this.custom_view.createComponent(n)}callOnComponentInit(){this.column.on_component_init&&this.column.on_component_init(this.custom_component.instance),this.custom_component.instance.cell_value=this.cell_value,this.custom_component.instance.row_data=this.row_data,this.custom_component.instance.column=this.column,this.custom_component.instance.editcomplete.subscribe(n=>this.editcomplete.emit(n)),this.custom_component.instance.canceledit.subscribe(n=>this.canceledit.emit(n)),this.custom_component.instance.cellclick.subscribe(n=>this.cellclick.emit(n))}}w.\u0275fac=function(n){return new(n||w)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver))},w.\u0275cmp=e.\u0275\u0275defineComponent({type:w,selectors:[["db-custom-cell-editor-component"]],viewQuery:function(n,t){if(n&1&&e.\u0275\u0275viewQuery(j,7,e.ViewContainerRef),n&2){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t.custom_view=i.first)}},inputs:{column:"column",cell_value:"cell_value",row_data:"row_data"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:0,consts:[["customView",""]],template:function(n,t){n&1&&e.\u0275\u0275template(0,de,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},encapsulation:2}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(w,[{type:e.Component,args:[{selector:"db-custom-cell-editor-component",template:`
      <ng-template #customView></ng-template>
    `}]}],function(){return[{type:e.ComponentFactoryResolver}]},{column:[{type:e.Input}],cell_value:[{type:e.Input}],row_data:[{type:e.Input}],custom_view:[{type:e.ViewChild,args:["customView",{read:e.ViewContainerRef,static:!0}]}]});class h extends C{constructor(){super()}ngOnInit(){}}h.\u0275fac=function(n){return new(n||h)},h.\u0275cmp=e.\u0275\u0275defineComponent({type:h,selectors:[["db-tree-cell-editor"]],inputs:{cell_value:"cell_value",row_data:"row_data",column:"column",expandable_column:"expandable_column"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:1,vars:4,consts:[["type","text","size","1",3,"ngModelChange","click","keydown.enter","keydown.esc","ngModel","ngClass"]],template:function(n,t){n&1&&(e.\u0275\u0275elementStart(0,"input",0),e.\u0275\u0275twoWayListener("ngModelChange",function(r){return e.\u0275\u0275twoWayBindingSet(t.row_data[t.column.name],r)||(t.row_data[t.column.name]=r),r}),e.\u0275\u0275listener("click",function(r){return t.cellclick.emit(r)})("keydown.enter",function(r){return t.editcomplete.emit(r)})("keydown.esc",function(){return t.canceledit.emit()}),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275twoWayProperty("ngModel",t.row_data[t.column.name]),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(2,se,t.expandable_column)))},dependencies:[_.DefaultValueAccessor,_.NgControlStatus,_.NgModel,s.NgClass],styles:["input.cell-default[_ngcontent-%COMP%]{padding:.2rem .5rem;height:2rem;box-sizing:border-box;width:100%;border:1px solid #d1cece;border-radius:3px}input.expandable-editor[_ngcontent-%COMP%]{width:calc(100% - 18px)}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(h,[{type:e.Component,args:[{selector:"db-tree-cell-editor",template:`<input type="text" 
    [(ngModel)]="row_data[column.name]" 
    [ngClass]="{'cell-default': true, 'expandable-editor': expandable_column}"
    (click)="cellclick.emit($event)"
    (keydown.enter)="editcomplete.emit($event)"
    (keydown.esc)="canceledit.emit()"
    size="1"
    >`,styles:[`input.cell-default{padding:.2rem .5rem;height:2rem;box-sizing:border-box;width:100%;border:1px solid #d1cece;border-radius:3px}input.expandable-editor{width:calc(100% - 18px)}
`]}]}],function(){return[]},{cell_value:[{type:e.Input}],row_data:[{type:e.Input}],column:[{type:e.Input}],expandable_column:[{type:e.Input}]});class m{constructor(n){this.sanitized=n}transform(n){return this.sanitized.bypassSecurityTrustHtml(n)}}m.\u0275fac=function(n){return new(n||m)(e.\u0275\u0275directiveInject(N.DomSanitizer,16))},m.\u0275pipe=e.\u0275\u0275definePipe({name:"safeHtml",type:m,pure:!0}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(m,[{type:e.Pipe,args:[{name:"safeHtml"}]}],function(){return[{type:N.DomSanitizer}]},null);class E{constructor(){this.row_data={},this.parents=[],this.rowadd=new e.EventEmitter,this.canceledit=new e.EventEmitter}ngOnInit(){this.raw_data=this.store.getRawData(),this.columns.forEach(n=>{this.row_data[n.name]=""}),this.parents=this.raw_data.map(n=>({id:n[this.configs.id_field],value:n[this.configs.parent_display_field]}))}saveAddRecord(n){this.raw_data.push(this.row_data),this.rowadd.emit(this.row_data)}cancelAddEdit(){this.internal_configs.show_add_row=!1}}E.\u0275fac=function(n){return new(n||E)},E.\u0275cmp=e.\u0275\u0275defineComponent({type:E,selectors:[["","db-add-row",""]],inputs:{store:"store",columns:"columns",configs:"configs",internal_configs:"internal_configs"},outputs:{rowadd:"rowadd",canceledit:"canceledit"},attrs:_e,decls:12,vars:8,consts:[[4,"ngIf"],[1,"action-column"],[1,"icon-container"],["title","Save row",3,"innerHTML","click",4,"ngIf"],["title","Save row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],["title","Cancel row",3,"innerHTML","click",4,"ngIf"],["title","Cancel row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["title","Save row",3,"click","innerHTML"],["title","Save row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","Layer 2"],["data-name","save"],["width","24","height","24","opacity","0"],["d","M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"],["title","Cancel row",3,"click","innerHTML"],["title","Cancel row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","close"],["width","24","height","24","transform","rotate(180 12 12)","opacity","0"],["d","M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"],[3,"ngClass"],[3,"cell_value","column","row_data","canceledit","editcomplete",4,"ngIf"],[3,"cell_value","row_data","column","canceledit","editcomplete",4,"ngIf"],[3,"canceledit","editcomplete","cell_value","column","row_data"],[3,"canceledit","editcomplete","cell_value","row_data","column"],[3,"value"]],template:function(n,t){n&1&&(e.\u0275\u0275template(0,pe,1,0,"td",0),e.\u0275\u0275elementStart(1,"td",1)(2,"div",2),e.\u0275\u0275template(3,ge,2,3,"span",3)(4,me,7,0,"svg",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",2),e.\u0275\u0275template(6,fe,2,3,"span",5)(7,ue,7,0,"svg",6),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(8,be,2,4,"td",7),e.\u0275\u0275elementStart(9,"td")(10,"select",8),e.\u0275\u0275twoWayListener("ngModelChange",function(r){return e.\u0275\u0275twoWayBindingSet(t.row_data[t.configs.parent_id_field],r)||(t.row_data[t.configs.parent_id_field]=r),r}),e.\u0275\u0275template(11,Ce,2,2,"option",9),e.\u0275\u0275elementEnd()()),n&2&&(e.\u0275\u0275property("ngIf",t.configs.multi_select),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.configs.css.save_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.save_icon),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.configs.css.cancel_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.configs.css.cancel_icon),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.columns),e.\u0275\u0275advance(2),e.\u0275\u0275twoWayProperty("ngModel",t.row_data[t.configs.parent_id_field]),e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.parents))},dependencies:[w,h,s.NgIf,s.NgForOf,s.NgClass,_.SelectControlValueAccessor,_.NgControlStatus,_.NgModel,_.NgSelectOption,_.\u0275NgSelectMultipleOption,m],styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}svg{width:20px;padding-right:4px}div.icon-container{display:inline-block;width:50%;text-align:center}
`],encapsulation:2}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(E,[{type:e.Component,args:[{selector:"[db-add-row]",encapsulation:e.ViewEncapsulation.None,template:`<td *ngIf="configs.multi_select"></td>
<td class="action-column">
  <div class="icon-container">
    <span
      (click)="saveAddRecord($event)"
      *ngIf="configs.css.save_icon"
      title="Save row"
      [innerHTML]="this.configs.css.save_icon | safeHtml"
    ></span>
    <svg
      (click)="saveAddRecord($event)"
      title="Save row"
      *ngIf="!configs.css.save_icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Save row</title>
      <g data-name="Layer 2">
        <g data-name="save">
          <rect width="24" height="24" opacity="0" />
          <path
            d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"
          />
        </g>
      </g>
    </svg>
  </div>
  <div class="icon-container">
    <span
      (click)="cancelAddEdit()"
      *ngIf="configs.css.cancel_icon"
      title="Cancel row"
      [innerHTML]="this.configs.css.cancel_icon | safeHtml"
    ></span>
    <svg
      (click)="cancelAddEdit()"
      *ngIf="!configs.css.cancel_icon"
      title="Cancel row"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Cancel row</title>
      <g data-name="Layer 2">
        <g data-name="close">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path
            d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
          />
        </g>
      </g>
    </svg>
  </div>
</td>
<td *ngFor="let column of columns" [ngClass]="{ 'column-hide': column.hidden }">
  <div *ngIf="column.editable">
    <db-custom-cell-editor-component
      *ngIf="column.editor"
      [cell_value]=""
      [column]="column"
      [row_data]="row_data"
      (canceledit)="cancelAddEdit()"
      (editcomplete)="saveAddRecord($event)"
    >
    </db-custom-cell-editor-component>
    <db-tree-cell-editor
      *ngIf="!column.editor"
      [cell_value]=""
      [row_data]="row_data"
      [column]="column"
      (canceledit)="cancelAddEdit()"
      (editcomplete)="saveAddRecord($event)"
    >
    </db-tree-cell-editor>
  </div>
</td>
<td>
  <select [(ngModel)]="row_data[configs.parent_id_field]">
    <option *ngFor="let parent of parents" [value]="parent.id">
      {{ parent.value }}
    </option>
  </select>
</td>
`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}svg{width:20px;padding-right:4px}div.icon-container{display:inline-block;width:50%;text-align:center}
`]}]}],function(){return[]},{store:[{type:e.Input}],columns:[{type:e.Input}],configs:[{type:e.Input}],internal_configs:[{type:e.Input}],rowadd:[{type:e.Output}],canceledit:[{type:e.Output}]});class x{constructor(){this.editcomplete=new e.EventEmitter,this.canceledit=new e.EventEmitter}ngOnInit(){this.display_data=this.store.getDisplayData()}enableEdit(n,t){for(const i in this.edit_tracker)this.edit_tracker[i]=!1;this.edit_tracker[n]=!0,this.configs.actions.edit_parent&&(this.internal_configs.show_parent_col=!0),this.internal_configs.current_edited_row={...t}}findRecordIndex(n){for(const t in this.store.processed_data)if(this.store.processed_data[t].pathx===n)return Number(t)}deleteRecord(n){const t=this.findRecordIndex(n.pathx);this.configs.actions.resolve_delete?new Promise((r,a)=>{this.rowdelete.emit({data:n,resolve:r})}).then(()=>{this.store.processed_data.splice(t,1),this.store.refreshDisplayData()}).catch(r=>{}):(this.store.processed_data.splice(t,1),this.store.refreshDisplayData(),this.rowdelete.emit(n))}saveRecord(n){this.editcomplete.emit({event:n,data:this.row_data})}}x.\u0275fac=function(n){return new(n||x)},x.\u0275cmp=e.\u0275\u0275defineComponent({type:x,selectors:[["","db-tree-cell-actions",""]],inputs:{store:"store",edit_tracker:"edit_tracker",internal_configs:"internal_configs",configs:"configs",rowdelete:"rowdelete",row_data:"row_data"},outputs:{editcomplete:"editcomplete",canceledit:"canceledit"},attrs:ve,decls:2,vars:2,consts:[[4,"ngIf"],["class","icon-container",4,"ngIf"],[1,"icon-container"],["title","Edit row",3,"innerHTML","click",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],["title","Edit row",3,"click","innerHTML"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","Layer 2"],["data-name","edit"],["width","24","height","24","opacity","0"],["d","M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"],["title","Save row",3,"innerHTML","click",4,"ngIf"],["title","Save row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],["title","Cancel row",3,"innerHTML","click",4,"ngIf"],["title","Cancel row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],["title","Save row",3,"click","innerHTML"],["title","Save row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","save"],["d","M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"],["title","Cancel row",3,"click","innerHTML"],["title","Cancel row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","close"],["width","24","height","24","transform","rotate(180 12 12)","opacity","0"],["d","M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"],["title","Delete row",3,"innerHTML","click",4,"ngIf"],["title","Delete row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click",4,"ngIf"],["title","Delete row",3,"click","innerHTML"],["title","Delete row","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24",3,"click"],["data-name","trash-2"],["d","M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"],["d","M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"],["d","M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,Ee,3,2,"ng-container",0)(1,De,3,2,"div",1),n&2&&(e.\u0275\u0275property("ngIf",t.configs.actions.edit&&t.configs.row_edit_function(t.row_data)),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.configs.actions.delete&&!t.edit_tracker[t.row_data[t.configs.id_field]]&&t.configs.row_delete_function(t.row_data)))},dependencies:[s.NgIf,m],styles:["svg[_ngcontent-%COMP%]{width:20px}div.icon-container[_ngcontent-%COMP%]{display:inline-block;width:50%;text-align:center;color:#000;cursor:pointer}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(x,[{type:e.Component,args:[{selector:"[db-tree-cell-actions]",template:`<ng-container
  *ngIf="configs.actions.edit && configs.row_edit_function(row_data)"
>
  <div *ngIf="!edit_tracker[row_data[configs.id_field]]" class="icon-container">
    <span
      (click)="enableEdit(row_data[configs.id_field], row_data)"
      *ngIf="configs.css.edit_icon"
      title="Edit row"
      [innerHTML]="this.configs.css.edit_icon | safeHtml"
    ></span>
    <svg
      (click)="enableEdit(row_data[configs.id_field], row_data)"
      *ngIf="!configs.css.edit_icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>Edit row</title>
      <g data-name="Layer 2">
        <g data-name="edit">
          <rect width="24" height="24" opacity="0" />
          <path
            d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"
          />
        </g>
      </g>
    </svg>
  </div>
  <ng-container *ngIf="edit_tracker[row_data[configs.id_field]]">
    <div class="icon-container">
      <span
        (click)="saveRecord($event)"
        *ngIf="configs.css.save_icon"
        title="Save row"
        [innerHTML]="this.configs.css.save_icon | safeHtml"
      ></span>
      <svg
        (click)="saveRecord($event)"
        title="Save row"
        *ngIf="!configs.css.save_icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Save row</title>
        <g data-name="Layer 2">
          <g data-name="save">
            <rect width="24" height="24" opacity="0" />
            <path
              d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="icon-container">
      <span
        (click)="canceledit.emit(row_data)"
        *ngIf="configs.css.cancel_icon"
        title="Cancel row"
        [innerHTML]="this.configs.css.cancel_icon | safeHtml"
      ></span>
      <svg
        (click)="canceledit.emit(row_data)"
        *ngIf="!configs.css.cancel_icon"
        title="Cancel row"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>Cancel row</title>
        <g data-name="Layer 2">
          <g data-name="close">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            />
            <path
              d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
            />
          </g>
        </g>
      </svg>
    </div>
  </ng-container>
</ng-container>
<div
  class="icon-container"
  *ngIf="
    configs.actions.delete &&
    !edit_tracker[row_data[configs.id_field]] &&
    configs.row_delete_function(row_data)
  "
>
  <span
    *ngIf="configs.css.delete_icon"
    title="Delete row"
    (click)="deleteRecord(row_data)"
    [innerHTML]="this.configs.css.delete_icon | safeHtml"
  ></span>
  <svg
    *ngIf="!configs.css.delete_icon"
    title="Delete row"
    (click)="deleteRecord(row_data)"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <title>Delete row</title>
    <g data-name="Layer 2">
      <g data-name="trash-2">
        <rect width="24" height="24" opacity="0" />
        <path
          d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"
        />
        <path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
        <path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z" />
      </g>
    </g>
  </svg>
</div>
`,styles:[`svg{width:20px}div.icon-container{display:inline-block;width:50%;text-align:center;color:#000;cursor:pointer}
`]}]}],function(){return[]},{store:[{type:e.Input}],edit_tracker:[{type:e.Input}],internal_configs:[{type:e.Input}],configs:[{type:e.Input}],rowdelete:[{type:e.Input}],row_data:[{type:e.Input}],editcomplete:[{type:e.Output}],canceledit:[{type:e.Output}]});class v{constructor(n){this.resolver=n}ngOnInit(){this.column.component&&!this.custom_component&&(this.createCustomComponent(),this.callOnComponentInit())}ngOnDestroy(){this.custom_component&&this.custom_component.destroy()}createCustomComponent(){const n=this.resolver.resolveComponentFactory(this.column.component);this.custom_component=this.custom_view.createComponent(n)}callOnComponentInit(){this.column.on_component_init&&this.column.on_component_init(this.custom_component.instance),this.custom_component.instance.cell_value=this.row_data[this.column.name],this.custom_component.instance.row_data=this.row_data,this.custom_component.instance.column=this.column}}v.\u0275fac=function(n){return new(n||v)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver))},v.\u0275cmp=e.\u0275\u0275defineComponent({type:v,selectors:[["db-custom-cell-component"]],viewQuery:function(n,t){if(n&1&&e.\u0275\u0275viewQuery(j,7,e.ViewContainerRef),n&2){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t.custom_view=i.first)}},inputs:{column:"column",row_data:"row_data"},decls:2,vars:0,consts:[["customView",""]],template:function(n,t){n&1&&e.\u0275\u0275template(0,Ae,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor)},encapsulation:2}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(v,[{type:e.Component,args:[{selector:"db-custom-cell-component",template:`
      <ng-template #customView></ng-template>
    `}]}],function(){return[{type:e.ComponentFactoryResolver}]},{column:[{type:e.Input}],row_data:[{type:e.Input}],custom_view:[{type:e.ViewChild,args:["customView",{read:e.ViewContainerRef,static:!0}]}]});class V{constructor(){}ngOnInit(){}}V.\u0275fac=function(n){return new(n||V)},V.\u0275cmp=e.\u0275\u0275defineComponent({type:V,selectors:[["db-tree-cell-view"]],inputs:{column:"column",row_data:"row_data"},decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(n,t){n&1&&e.\u0275\u0275element(0,"span",0),n&2&&e.\u0275\u0275property("innerHTML",t.column.renderer?t.column.renderer(t.row_data[t.column.name],t.row_data):t.row_data[t.column.name],e.\u0275\u0275sanitizeHtml)}}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(V,[{type:e.Component,args:[{selector:"db-tree-cell-view",template:`<span [innerHTML]="column.renderer ? column.renderer(row_data[column.name], row_data) : row_data[column.name]"></span>
`,styles:[""]}]}],function(){return[]},{column:[{type:e.Input}],row_data:[{type:e.Input}]});class f{constructor(){this.rowexpand=new e.EventEmitter,this.rowcollapse=new e.EventEmitter,this.canceledit=new e.EventEmitter,this.editcomplete=new e.EventEmitter}ngOnInit(){this.is_expand_column=this.index===0,this.show_expand_icon=!this.row_data.leaf,this.configs.load_children_on_expand&&(this.show_expand_icon=!this.row_data.leaf_node),this.cell_value=this.row_data[this.column.name]}expandRow(n){this.index===0&&(!this.row_data.leaf||this.configs.load_children_on_expand)&&(this.rowexpand.emit({event:n,data:this.row_data}),n.stopPropagation())}collapseRow(n){this.index===0&&(!this.row_data.leaf||this.configs.load_children_on_expand)&&(this.rowcollapse.emit({event:n,data:this.row_data}),n.stopPropagation())}onCellClick(n){this.cellclick.emit({column:this.column,row:this.row_data,event:n})}onEditComplete(n){this.editcomplete.emit({event:n,data:this.row_data})}getChildrenPadding(){const n=this.row_data.leaf?this.row_data.levelx*10+20+"px":this.row_data.levelx*10+"px";return this.configs.rtl_direction?{"padding-right":n}:{"padding-left":n}}}f.\u0275fac=function(n){return new(n||f)},f.\u0275cmp=e.\u0275\u0275defineComponent({type:f,selectors:[["db-tree-cell"]],inputs:{configs:"configs",index:"index",row_data:"row_data",column:"column",expand_tracker:"expand_tracker",cellclick:"cellclick",edit_on:"edit_on"},outputs:{rowexpand:"rowexpand",rowcollapse:"rowcollapse",canceledit:"canceledit",editcomplete:"editcomplete"},decls:3,vars:2,consts:[[3,"click"],[4,"ngIf"],[3,"ngStyle"],["class","no-expand-icon",4,"ngIf"],[3,"ngSwitch",4,"ngIf"],[1,"no-expand-icon"],["class","expand-icon-container","title","Expand Row",3,"click",4,"ngIf"],["title","Expand Row",1,"expand-icon-container",3,"click"],["class","expand-icon",3,"ngStyle","innerHTML",4,"ngIf"],["class","expand-icon inbuild-icon",3,"ngStyle",4,"ngIf"],[1,"expand-icon",3,"ngStyle","innerHTML"],[1,"expand-icon","inbuild-icon",3,"ngStyle"],["class","childred-loader",4,"ngIf"],["class","expand-icon-container","title","Collapse Row",3,"click",4,"ngIf"],[1,"childred-loader"],["title","Collapse Row",1,"expand-icon-container",3,"click"],["class","expand-icon inbuild-dash-icon",3,"ngStyle",4,"ngIf"],[1,"expand-icon","inbuild-dash-icon",3,"ngStyle"],[3,"ngSwitch"],[3,"column","row_data",4,"ngSwitchCase"],[3,"column","row_data",4,"ngSwitchDefault"],[3,"column","row_data"],[3,"cell_value","column","row_data","canceledit","editcomplete",4,"ngIf"],[3,"cell_value","row_data","column","expandable_column","canceledit","editcomplete",4,"ngIf"],[3,"canceledit","editcomplete","cell_value","column","row_data"],[3,"canceledit","editcomplete","cell_value","row_data","column","expandable_column"]],template:function(n,t){n&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("click",function(r){return t.onCellClick(r)}),e.\u0275\u0275template(1,Ze,7,6,"ng-container",1)(2,it,3,2,"ng-container",1),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.is_expand_column),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.is_expand_column))},dependencies:[v,V,w,h,s.NgIf,s.NgStyle,s.NgSwitch,s.NgSwitchCase,s.NgSwitchDefault,m],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}i.expand-icon[_ngcontent-%COMP%]{margin-right:5px}span.no-expand-icon[_ngcontent-%COMP%]{display:inline-block;width:14px}span.expand-icon-container[_ngcontent-%COMP%]{position:relative;cursor:pointer;padding:0 5px 0 0;width:21px;box-sizing:border-box;text-align:center}span.expand-icon-container[_ngcontent-%COMP%]   span.inbuild-icon[_ngcontent-%COMP%]{font-size:25px}span.expand-icon-container[_ngcontent-%COMP%]   span.inbuild-dash-icon[_ngcontent-%COMP%]{font-size:17px;font-weight:700}span.childred-loader[_ngcontent-%COMP%]{border:3px solid #f3f3f3;animation:_ngcontent-%COMP%_spin 1s linear infinite;border-top:3px solid #555;border-radius:50%;width:10px;height:10px;display:inline-block;margin-right:5px}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(f,[{type:e.Component,args:[{selector:"db-tree-cell",template:`<div (click)="onCellClick($event)">
  <ng-container *ngIf="is_expand_column">
    <div
      [ngStyle]="getChildrenPadding()"
    >
      <span
        class="no-expand-icon"
        *ngIf="row_data.levelx == 0 && row_data.leaf"
      ></span>
      <ng-container *ngIf="!expand_tracker[row_data.pathx]">
        <span
          (click)="expandRow($event)"
          class="expand-icon-container"
          *ngIf="show_expand_icon"
          title="Expand Row"
        >
          <span
            class="expand-icon"
            [ngStyle]="{
              visibility: row_data.expand_disabled ? 'hidden' : 'visible'
            }"
            *ngIf="show_expand_icon && configs.css.expand_icon.length > 0"
            [innerHTML]="configs.css.expand_icon | safeHtml"
          ></span>
          <span
            class="expand-icon inbuild-icon"
            [ngStyle]="{
              visibility: row_data.expand_disabled ? 'hidden' : 'visible'
            }"
            *ngIf="show_expand_icon && configs.css.expand_icon.length == 0"
            >+</span
          >
        </span>
      </ng-container>
      <ng-container *ngIf="expand_tracker[row_data.pathx]">
        <span *ngIf="row_data.is_loading" class="childred-loader"></span>
        <span
          (click)="collapseRow($event)"
          *ngIf="!row_data.is_loading && show_expand_icon"
          class="expand-icon-container"
          title="Collapse Row"
        >
          <span
            class="expand-icon"
            [ngStyle]="{
              visibility: row_data.expand_disabled ? 'hidden' : 'visible'
            }"
            *ngIf="show_expand_icon && configs.css.collapse_icon.length > 0"
            [innerHTML]="configs.css.collapse_icon | safeHtml"
          ></span>
          <span
            class="expand-icon inbuild-dash-icon"
            [ngStyle]="{
              visibility: row_data.expand_disabled ? 'hidden' : 'visible'
            }"
            *ngIf="show_expand_icon && configs.css.collapse_icon.length == 0"
            >\u2014</span
          >
        </span>
      </ng-container>
      <ng-container
        *ngIf="!edit_on || !column.editable"
        [ngSwitch]="column.type"
      >
        <db-custom-cell-component
          *ngSwitchCase="'custom'"
          [column]="column"
          [row_data]="row_data"
        >
        </db-custom-cell-component>
        <db-tree-cell-view
          *ngSwitchDefault
          [column]="column"
          [row_data]="row_data"
        >
        </db-tree-cell-view>
      </ng-container>
      <ng-container *ngIf="edit_on && column.editable">
        <db-custom-cell-editor-component
          *ngIf="column.editor"
          [cell_value]="cell_value"
          [column]="column"
          [row_data]="row_data"
          (canceledit)="canceledit.emit(row_data['pathx'])"
          (editcomplete)="onEditComplete($event)"
        >
        </db-custom-cell-editor-component>
        <db-tree-cell-editor
          *ngIf="!column.editor"
          [cell_value]="cell_value"
          [row_data]="row_data"
          [column]="column"
          [expandable_column]="true"
          (canceledit)="canceledit.emit(row_data['pathx'])"
          (editcomplete)="onEditComplete($event)"
        >
        </db-tree-cell-editor>
      </ng-container>
    </div>
  </ng-container>
  <ng-container *ngIf="!is_expand_column">
    <ng-container *ngIf="!edit_on || !column.editable" [ngSwitch]="column.type">
      <db-custom-cell-component
        *ngSwitchCase="'custom'"
        [column]="column"
        [row_data]="row_data"
      >
      </db-custom-cell-component>
      <db-tree-cell-view
        *ngSwitchDefault
        [column]="column"
        [row_data]="row_data"
      >
      </db-tree-cell-view>
    </ng-container>

    <ng-container *ngIf="edit_on && column.editable">
      <db-custom-cell-editor-component
        *ngIf="column.editor"
        [cell_value]="cell_value"
        [column]="column"
        [row_data]="row_data"
        (canceledit)="canceledit.emit(row_data['pathx'])"
        (editcomplete)="onEditComplete($event)"
      >
      </db-custom-cell-editor-component>
      <db-tree-cell-editor
        *ngIf="!column.editor"
        [cell_value]="cell_value"
        [row_data]="row_data"
        [column]="column"
        [expandable_column]="false"
        (canceledit)="canceledit.emit(row_data['pathx'])"
        (editcomplete)="onEditComplete($event)"
      >
      </db-tree-cell-editor>
    </ng-container>
  </ng-container>
</div>
`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}i.expand-icon{margin-right:5px}span.no-expand-icon{display:inline-block;width:14px}span.expand-icon-container{position:relative;cursor:pointer;padding:0 5px 0 0;width:21px;box-sizing:border-box;text-align:center}span.expand-icon-container span.inbuild-icon{font-size:25px}span.expand-icon-container span.inbuild-dash-icon{font-size:17px;font-weight:700}span.childred-loader{border:3px solid #f3f3f3;animation:spin 1s linear infinite;border-top:3px solid #555;border-radius:50%;width:10px;height:10px;display:inline-block;margin-right:5px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`]}]}],function(){return[]},{configs:[{type:e.Input}],index:[{type:e.Input}],row_data:[{type:e.Input}],column:[{type:e.Input}],expand_tracker:[{type:e.Input}],cellclick:[{type:e.Input}],edit_on:[{type:e.Input}],rowexpand:[{type:e.Output}],rowcollapse:[{type:e.Output}],canceledit:[{type:e.Output}],editcomplete:[{type:e.Output}]});class R{constructor(){}ngOnInit(){}sortColumn(n,t){const i=t.name;t.sort_type=t.sorted?!t.sort_type:1,t.sorted=1,t.sort_type?n.children.sort((r,a)=>r[i]>a[i]?1:a[i]>r[i]?-1:0):n.children.sort((r,a)=>r[i]<a[i]?1:a[i]<r[i]?-1:0)}}R.\u0275fac=function(n){return new(n||R)},R.\u0275cmp=e.\u0275\u0275defineComponent({type:R,selectors:[["","db-subgrid-head",""]],inputs:{configs:"configs",row_data:"row_data"},attrs:at,decls:2,vars:1,consts:[[3,"width","ngClass","click",4,"ngFor","ngForOf"],[3,"click","width","ngClass"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(n,t){n&1&&(e.\u0275\u0275elementStart(0,"tr"),e.\u0275\u0275template(1,st,4,9,"th",0),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.configs.subgrid_config.columns))},dependencies:[s.NgForOf,s.NgClass,s.NgIf],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc;background:#fff}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:.5rem}tr[_ngcontent-%COMP%]   th.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   th.action-column[_ngcontent-%COMP%]   span.icon-container[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span.inbuild-icon[_ngcontent-%COMP%]{font-size:25px}th.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}th.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}.column-hide[_ngcontent-%COMP%]{display:none}svg[_ngcontent-%COMP%]{width:25px;padding-right:3px}th.sortable[_ngcontent-%COMP%]{cursor:pointer}th.sortable[_ngcontent-%COMP%]:hover   span.arrow-up[_ngcontent-%COMP%]{border-bottom:6px solid rgb(175,175,175)}th.sortable[_ngcontent-%COMP%]:hover   span.arrow-down[_ngcontent-%COMP%]{border-top:6px solid rgb(175,175,175)}th[_ngcontent-%COMP%]   span.arrow-up[_ngcontent-%COMP%]{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:6px solid #ddd;position:relative;top:-18px}th[_ngcontent-%COMP%]   span.arrow-up.active[_ngcontent-%COMP%]{border-bottom:6px solid rgb(138,137,137)!important}th[_ngcontent-%COMP%]   span.arrow-down[_ngcontent-%COMP%]{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #ddd;position:relative;left:10px;top:17px}th[_ngcontent-%COMP%]   span.arrow-down.active[_ngcontent-%COMP%]{border-top:6px solid rgb(138,137,137)!important}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(R,[{type:e.Component,args:[{selector:"[db-subgrid-head]",template:`<tr>
  <th *ngFor="let column of configs.subgrid_config.columns"
    (click)="sortColumn(row_data, column)" width="{{column.width ? column.width : 'auto'}}"
    [ngClass]="{'sorted': column.sorted,'sortable': column.sortable, 'column-hide': column.hidden}">
    {{column.header}}
    <span *ngIf="column.sortable" [ngClass]="column.sorted && column.sort_type == 0?'arrow-down active':'arrow-down'"></span>
    <span *ngIf="column.sortable" [ngClass]="column.sorted && column.sort_type == 1?'arrow-up active':'arrow-up'"></span>
  </th>
</tr>`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc;background:#fff}tr th{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr th div{padding:.5rem}tr th.column-hide{display:none}tr th.action-column span.icon-container{cursor:pointer}tr th span.inbuild-icon{font-size:25px}th.clear-left-border{border-left:0!important}th.clear-right-border{border-right:0!important}.column-hide{display:none}svg{width:25px;padding-right:3px}th.sortable{cursor:pointer}th.sortable:hover span.arrow-up{border-bottom:6px solid rgb(175,175,175)}th.sortable:hover span.arrow-down{border-top:6px solid rgb(175,175,175)}th span.arrow-up{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:6px solid #ddd;position:relative;top:-18px}th span.arrow-up.active{border-bottom:6px solid rgb(138,137,137)!important}th span.arrow-down{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:6px solid #ddd;position:relative;left:10px;top:17px}th span.arrow-down.active{border-top:6px solid rgb(138,137,137)!important}
`]}]}],function(){return[]},{configs:[{type:e.Input}],row_data:[{type:e.Input}]});class D{constructor(){}ngOnInit(){}}D.\u0275fac=function(n){return new(n||D)},D.\u0275cmp=e.\u0275\u0275defineComponent({type:D,selectors:[["","db-subgrid-body",""]],inputs:{configs:"configs",expand_tracker:"expand_tracker",row_data:"row_data",cellclick:"cellclick"},attrs:_t,decls:2,vars:2,consts:[[4,"ngIf"],[1,"subgrid-loading-text",3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"configs","column","index","row_data","expand_tracker","cellclick"],[3,"innerHTML"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,pt,3,2,"ng-container",0)(1,wt,3,2,"ng-container",0),n&2&&(e.\u0275\u0275property("ngIf",t.row_data.loading_children),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",!t.row_data.loading_children))},dependencies:[f,s.NgIf,s.NgForOf],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc}tr.selected[_ngcontent-%COMP%]{background-color:#e2e7eb}tr[_ngcontent-%COMP%]   span.parent_container[_ngcontent-%COMP%]{padding-left:45px}tr.child[_ngcontent-%COMP%]{background:#fff}tr.child[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent[_ngcontent-%COMP%]{background:#fafbff}tr.subgrid-row[_ngcontent-%COMP%]{background:#fcfcfc}tr.row-add[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.2rem}tr.row-add[_ngcontent-%COMP%]   td.action-column[_ngcontent-%COMP%]{padding:.5rem 1rem}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr[_ngcontent-%COMP%]   td.checkbox_column[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]   td.expand-column[_ngcontent-%COMP%]{padding:.3rem}tr[_ngcontent-%COMP%]   td.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   td.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}tr[_ngcontent-%COMP%]   td.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}td.subgrid-loading-text[_ngcontent-%COMP%]{text-align:center}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(D,[{type:e.Component,args:[{selector:"[db-subgrid-body]",template:`<ng-container *ngIf="row_data.loading_children">
  <tr>
    <td [attr.colspan]="configs.subgrid_config.columns.length" 
      [innerHTML]="configs.subgrid_config.data_loading_text"
      class="subgrid-loading-text"></td>
  </tr>
</ng-container>
<ng-container *ngIf="!row_data.loading_children">
  <tr *ngFor="let child_data of row_data.children">
    <td *ngFor="let column of configs.subgrid_config.columns; index as i">
      <db-tree-cell
        [configs]="configs"
        [column]="column"
        [index]="1"
        [row_data]="child_data"
        [expand_tracker]="expand_tracker"
        [cellclick]="cellclick"
      ></db-tree-cell>
    </td>
  </tr>
  <tr *ngIf="configs.subgrid_config.show_summary_row">
    <td *ngFor="let column of configs.subgrid_config.columns">
      <div [innerHTML]="column.summary_renderer && column.summary_renderer(row_data.children)"></div>
    </td>
  </tr>
</ng-container>`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}td.subgrid-loading-text{text-align:center}
`]}]}],function(){return[]},{configs:[{type:e.Input}],expand_tracker:[{type:e.Input}],row_data:[{type:e.Input}],cellclick:[{type:e.Input}]});class y{constructor(){}ngOnInit(){}saveRecord(n){const t=n.data;this.configs.actions.resolve_edit?new Promise((r,a)=>{this.rowsave.emit({data:t,resolve:r})}).then(()=>{this.checkAndRefreshData(t)}).catch(r=>{}):(this.checkAndRefreshData(t),this.rowsave.emit(t))}checkAndRefreshData(n){this.edit_tracker[n[this.configs.id_field]]=!1,this.internal_configs.show_parent_col=!1,this.internal_configs.current_edited_row[this.configs.parent_id_field]!==n[this.configs.parent_id_field]&&this.refreshData(n)}refreshData(n){this.configs.actions.edit_parent&&(n[this.configs.parent_id_field]=parseInt(n[this.configs.parent_id_field],10),this.expand_tracker={},this.edit_tracker={},this.store.processData(this.store.getRawData(),this.expand_tracker,this.configs,this.edit_tracker,this.internal_configs))}cancelEdit(n){const t=n[this.configs.id_field];Object.assign(n,this.internal_configs.current_edited_row),this.edit_tracker[t]=!1,this.internal_configs.show_parent_col=!1}onRowExpand(n){const t=n.data,i=new Promise((a,c)=>{this.expand.emit({data:t,resolve:a})});this.expand_tracker[t.pathx]=!0;const r=this.store.showBlankRow(t);r.loading_children=!0,i.then(a=>{r.loading_children=!1,a?(a.map(c=>{c.leaf=!0}),r.children=a):r.children||(r.children=[])}).catch(a=>{})}onRowCollapse(n){const t=n.data;this.expand_tracker[t.pathx]=!1}selectRowOnCheck(n,t){t.target.checked?(n.row_selected=!0,this.rowselect.emit({data:n,event:t})):(n.row_selected=!1,this.rowdeselect.emit({data:n,event:t})),this.setSelectAllConfig()}setSelectAllConfig(){let n=!0;this.store.getDisplayData().forEach(t=>{t.row_selected||(n=!1)}),this.internal_configs.all_selected=n}}y.\u0275fac=function(n){return new(n||y)},y.\u0275cmp=e.\u0275\u0275defineComponent({type:y,selectors:[["","db-subgrid",""]],inputs:{store:"store",configs:"configs",expand_tracker:"expand_tracker",edit_tracker:"edit_tracker",internal_configs:"internal_configs",row_data:"row_data",cellclick:"cellclick",expand:"expand",rowselect:"rowselect",rowdeselect:"rowdeselect",rowsave:"rowsave",rowdelete:"rowdelete"},attrs:ht,decls:1,vars:1,consts:[[4,"ngIf"],["class","checkbox_column",4,"ngIf"],["db-tree-cell-actions","",3,"row_data","configs","store","edit_tracker","internal_configs","rowdelete","canceledit","editcomplete",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"checkbox_column"],["type","checkbox",3,"click","checked"],["db-tree-cell-actions","",3,"canceledit","editcomplete","row_data","configs","store","edit_tracker","internal_configs","rowdelete"],[3,"ngClass"],[3,"rowexpand","rowcollapse","editcomplete","configs","column","index","row_data","expand_tracker","edit_on","cellclick"],[1,"subgrid-column"],[1,"subgrid-table"],["db-subgrid-head","",3,"row_data","configs"],["db-subgrid-body","",3,"configs","expand_tracker","cellclick","row_data"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,Tt,3,2,"ng-container",0),n&2&&e.\u0275\u0275property("ngIf",t.expand_tracker[t.row_data.parent_pathx])},dependencies:[x,f,R,D,s.NgIf,s.NgForOf,s.NgClass],styles:["tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc}tr.selected[_ngcontent-%COMP%]{background-color:#e2e7eb}tr[_ngcontent-%COMP%]   span.parent_container[_ngcontent-%COMP%]{padding-left:45px}tr.child[_ngcontent-%COMP%]{background:#fff}tr.child[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent[_ngcontent-%COMP%]{background:#fafbff}tr.subgrid-row[_ngcontent-%COMP%]{background:#fcfcfc}tr.row-add[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.2rem}tr.row-add[_ngcontent-%COMP%]   td.action-column[_ngcontent-%COMP%]{padding:.5rem 1rem}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr[_ngcontent-%COMP%]   td.checkbox_column[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]   td.expand-column[_ngcontent-%COMP%]{padding:.3rem}tr[_ngcontent-%COMP%]   td.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   td.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}tr[_ngcontent-%COMP%]   td.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}.db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc;background:#fff}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:.5rem}tr[_ngcontent-%COMP%]   th.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   th.action-column[_ngcontent-%COMP%]   span.icon-container[_ngcontent-%COMP%]{cursor:pointer}tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span.inbuild-icon[_ngcontent-%COMP%]{font-size:25px}th.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}th.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}.column-hide[_ngcontent-%COMP%]{display:none}svg[_ngcontent-%COMP%]{width:25px;padding-right:3px}td[_ngcontent-%COMP%]{border:1px solid #cdd5dc;vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}td.checkbox_column[_ngcontent-%COMP%]{text-align:center}td.expand-column[_ngcontent-%COMP%]{padding:.3rem}td.subgrid-column[_ngcontent-%COMP%]{padding:0}td.column-hide[_ngcontent-%COMP%]{display:none}td.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}td.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}td[_ngcontent-%COMP%]   table.subgrid-table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(y,[{type:e.Component,args:[{selector:"[db-subgrid]",template:`<ng-container *ngIf="expand_tracker[row_data.parent_pathx]">

  <!-- Expandable Row -->
  <ng-container *ngIf="!row_data.leaf">
    <td *ngIf="configs.multi_select" class="checkbox_column">
      <input type="checkbox" [checked]="row_data.row_selected" (click)="selectRowOnCheck(row_data, $event)" 
        [attr.disabled]="row_data.selection_disabled">
    </td>
    <td db-tree-cell-actions 
      *ngIf="(configs.actions.edit || configs.actions.delete || configs.actions.add)"
      [row_data]="row_data"
      [configs]="configs"
      [store]="store"
      [edit_tracker]="edit_tracker"
      [internal_configs]="internal_configs"
      [rowdelete]="rowdelete"
      (canceledit)="cancelEdit($event)" 
      (editcomplete)="saveRecord($event)"
      >
    </td>
    <td *ngFor="let column of configs.columns; index as i" 
      [ngClass]="{'column-hide': column.hidden, 'expand-column': i == 0}">
      <db-tree-cell
        [configs]="configs"
        [column]="column"
        [index]="i"
        [row_data]="row_data"
        [expand_tracker]="expand_tracker"
        [edit_on]="edit_tracker[row_data[configs.id_field]]"
        [cellclick]="cellclick"
        (rowexpand)="onRowExpand($event)"
        (rowcollapse)="onRowCollapse($event)"
        (editcomplete)="saveRecord($event)"
      >
      </db-tree-cell>
    </td>
  </ng-container>

  <!-- Subgrid Rows -->
  <ng-container *ngIf="row_data.leaf">    
    <td *ngIf="configs.multi_select"></td>
    <td *ngIf="(configs.actions.edit || configs.actions.delete || configs.actions.add)"></td>
    <td [attr.colspan]="configs.columns.length" class="subgrid-column">
        <table class="subgrid-table">
          <thead db-subgrid-head
            [row_data]="row_data"
            [configs]="configs">
            
          </thead>
          <tbody db-subgrid-body
            [configs]="configs"
            [expand_tracker]="expand_tracker"
            [cellclick]="cellclick"
            [row_data]="row_data">
          </tbody>            
        </table>
    </td>    
  </ng-container>  
</ng-container>`,styles:[`tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc;background:#fff}tr th{font-size:1rem;font-weight:600;line-height:1.25;color:#181818;vertical-align:middle;position:relative;box-sizing:border-box}tr th div{padding:.5rem}tr th.column-hide{display:none}tr th.action-column span.icon-container{cursor:pointer}tr th span.inbuild-icon{font-size:25px}th.clear-left-border{border-left:0!important}th.clear-right-border{border-right:0!important}.column-hide{display:none}svg{width:25px;padding-right:3px}td{border:1px solid #cdd5dc;vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}td.checkbox_column{text-align:center}td.expand-column{padding:.3rem}td.subgrid-column{padding:0}td.column-hide{display:none}td.clear-left-border{border-left:0!important}td.clear-right-border{border-right:0!important}td table.subgrid-table{border-collapse:collapse;width:100%}
`]}]}],function(){return[]},{store:[{type:e.Input}],configs:[{type:e.Input}],expand_tracker:[{type:e.Input}],edit_tracker:[{type:e.Input}],internal_configs:[{type:e.Input}],row_data:[{type:e.Input}],cellclick:[{type:e.Input}],expand:[{type:e.Input}],rowselect:[{type:e.Input}],rowdeselect:[{type:e.Input}],rowsave:[{type:e.Input}],rowdelete:[{type:e.Input}]});class k{constructor(n){this.angularTreeGridService=n,this.parents=[]}ngOnInit(){this.display_data=this.store.getDisplayData(),this.angularTreeGridService.display_data_observable$.subscribe(n=>{this.display_data=this.store.getDisplayData(),this.setParents()}),this.setParents()}setParents(){this.parents=this.store.raw_data.map(n=>({id:n[this.configs.id_field],value:n[this.configs.parent_display_field]}))}refreshData(n){this.configs.actions.edit_parent&&(n[this.configs.parent_id_field]=parseInt(n[this.configs.parent_id_field],10),this.expand_tracker={},this.edit_tracker={},this.store.processData(this.store.getRawData(),this.expand_tracker,this.configs,this.edit_tracker,this.internal_configs))}onRowExpand(n){const t=n.data;this.configs.load_children_on_expand?this.angularTreeGridService.emitExpandRowEvent(this.expand_tracker,this.expand,this.store,t,this.configs):(this.expand_tracker[t.pathx]=!0,this.expand.emit(n))}onRowCollapse(n){const t=n.data;this.expand_tracker[t.pathx]=!1,Object.keys(this.expand_tracker).forEach(r=>{r.indexOf(t.pathx)!==-1&&(this.expand_tracker[r]=0)}),this.collapse.emit(n)}saveRecord(n){const t=n.data;this.configs.actions.resolve_edit?new Promise((r,a)=>{this.rowsave.emit({data:t,resolve:r})}).then(()=>{this.checkAndRefreshData(t)}).catch(r=>{}):(this.checkAndRefreshData(t),this.rowsave.emit(t))}checkAndRefreshData(n){this.edit_tracker[n[this.configs.id_field]]=!1,this.internal_configs.show_parent_col=!1,this.internal_configs.current_edited_row[this.configs.parent_id_field]!==n[this.configs.parent_id_field]&&this.refreshData(n)}addRow(n){this.configs.actions.resolve_add?new Promise((i,r)=>{this.rowadd.emit({data:n,resolve:i})}).then(()=>{this.internal_configs.show_add_row=!1,this.refreshData(n)}).catch(i=>{}):(this.refreshData(n),this.internal_configs.show_add_row=!1,this.rowadd.emit(n))}cancelEdit(n){const t=n[this.configs.id_field];Object.assign(n,this.internal_configs.current_edited_row),this.edit_tracker[t]=!1,this.internal_configs.show_parent_col=!1}selectRow(n,t){this.configs.multi_select||(this.store.getDisplayData().forEach(i=>{i.row_selected=!1}),n.row_selected=!0,this.rowselect.emit({data:n,event:t}))}selectRowOnCheck(n,t){t.target.checked?(n.row_selected=!0,this.rowselect.emit({data:n,event:t})):(n.row_selected=!1,this.rowdeselect.emit({data:n,event:t})),this.setSelectAllConfig()}setSelectAllConfig(){let n=!0;this.store.getDisplayData().forEach(t=>{t.row_selected||(n=!1)}),this.internal_configs.all_selected=n}}k.\u0275fac=function(n){return new(n||k)(e.\u0275\u0275directiveInject(g))},k.\u0275cmp=e.\u0275\u0275defineComponent({type:k,selectors:[["","db-tree-body",""]],inputs:{store:"store",configs:"configs",expand_tracker:"expand_tracker",edit_tracker:"edit_tracker",internal_configs:"internal_configs",columns:"columns",cellclick:"cellclick",expand:"expand",collapse:"collapse",rowdelete:"rowdelete",rowsave:"rowsave",rowadd:"rowadd",rowselect:"rowselect",rowdeselect:"rowdeselect"},attrs:It,decls:1,vars:1,consts:[[4,"ngIf"],["db-filter-row","",3,"columns","configs","store","internal_configs","expand_tracker","ngClass",4,"ngIf"],["db-add-row","",3,"columns","configs","internal_configs","store","ngClass","rowadd",4,"ngIf"],[2,"text-align","center",3,"innerHTML"],["db-filter-row","",3,"columns","configs","store","internal_configs","expand_tracker","ngClass"],["db-add-row","",3,"rowadd","columns","configs","internal_configs","store","ngClass"],["db-subgrid","","class","subgrid-row",3,"configs","internal_configs","expand_tracker","edit_tracker","store","row_data","cellclick","rowselect","rowdeselect","expand","rowsave","rowdelete",4,"ngFor","ngForOf"],["db-subgrid","",1,"subgrid-row",3,"configs","internal_configs","expand_tracker","edit_tracker","store","row_data","cellclick","rowselect","rowdeselect","expand","rowsave","rowdelete"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["class","checkbox_column",4,"ngIf"],["db-tree-cell-actions","",3,"row_data","configs","store","edit_tracker","internal_configs","rowdelete","canceledit","editcomplete",4,"ngIf"],[3,"class","ngClass",4,"ngFor","ngForOf"],[1,"checkbox_column"],["type","checkbox",3,"click","checked"],["db-tree-cell-actions","",3,"canceledit","editcomplete","row_data","configs","store","edit_tracker","internal_configs","rowdelete"],[3,"ngClass"],[3,"rowexpand","rowcollapse","editcomplete","configs","column","index","row_data","expand_tracker","edit_on","cellclick"],[3,"ngModel","ngModelChange",4,"ngIf"],[3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,t){n&1&&e.\u0275\u0275template(0,Ut,6,5,"ng-container",0),n&2&&e.\u0275\u0275property("ngIf",t.configs)},dependencies:[S,E,y,x,f,s.NgIf,s.NgClass,s.NgForOf,_.SelectControlValueAccessor,_.NgControlStatus,_.NgModel,_.NgSelectOption,_.\u0275NgSelectMultipleOption],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr[_ngcontent-%COMP%]{border-bottom:1px solid #cdd5dc}tr.selected[_ngcontent-%COMP%]{background-color:#e2e7eb}tr[_ngcontent-%COMP%]   span.parent_container[_ngcontent-%COMP%]{padding-left:45px}tr.child[_ngcontent-%COMP%]{background:#fff}tr.child[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent[_ngcontent-%COMP%]{background:#fafbff}tr.subgrid-row[_ngcontent-%COMP%]{background:#fcfcfc}tr.row-add[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.2rem}tr.row-add[_ngcontent-%COMP%]   td.action-column[_ngcontent-%COMP%]{padding:.5rem 1rem}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr[_ngcontent-%COMP%]   td.checkbox_column[_ngcontent-%COMP%]{text-align:center}tr[_ngcontent-%COMP%]   td.expand-column[_ngcontent-%COMP%]{padding:.3rem}tr[_ngcontent-%COMP%]   td.column-hide[_ngcontent-%COMP%]{display:none}tr[_ngcontent-%COMP%]   td.clear-left-border[_ngcontent-%COMP%]{border-left:0!important}tr[_ngcontent-%COMP%]   td.clear-right-border[_ngcontent-%COMP%]{border-right:0!important}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(k,[{type:e.Component,args:[{selector:"[db-tree-body]",template:`<ng-container *ngIf="configs">
<tr *ngIf="store.raw_data.length==0">
  <td [innerHTML]="configs.data_loading_text" [attr.colspan]="columns.length + 1" style="text-align: center"></td>
</tr>
<tr db-filter-row 
  [columns]="columns" 
  [configs]="configs"
  [store]="store"
  [internal_configs]="internal_configs" 
  *ngIf="configs.filter"
  [expand_tracker]="expand_tracker"
  [ngClass]="configs.css.row_filter_class">
</tr>
<tr db-add-row 
  [columns]="columns" 
  [configs]="configs" 
  [internal_configs]="internal_configs" 
  [store]="store"
  (rowadd)="addRow($event)"
  *ngIf="internal_configs.show_add_row"
  [ngClass]="configs.row_class_function() + ' row-add'">
</tr>
<ng-container *ngIf="configs.subgrid">
  <tr db-subgrid
  *ngFor="let row_data of display_data"
  class="subgrid-row"
  [configs]="configs" 
  [internal_configs]="internal_configs" 
  [expand_tracker]="expand_tracker" 
  [edit_tracker]="edit_tracker" 
  [store]="store"
  [row_data]="row_data"
  [cellclick]="cellclick"
  [rowselect]="rowselect"
  [rowdeselect]="rowdeselect"
  [expand]="expand"
  [rowsave]="rowsave"
  [rowdelete]="rowdelete"
  >

  </tr>
</ng-container>
<ng-container *ngIf="!configs.subgrid">
  <tr 
  *ngFor="let row_data of display_data"
  [attr.class]="configs.row_class_function(row_data) + ' ' + (row_data.row_selected ? configs.css.row_selection_class : '')"
  (click)="selectRow(row_data, $event)" 
  >  
  <ng-container *ngIf="expand_tracker[row_data.parent_pathx]">
    <td *ngIf="configs.multi_select" class="checkbox_column">
      <input type="checkbox" [checked]="row_data.row_selected" (click)="selectRowOnCheck(row_data, $event)" 
        [attr.disabled]="row_data.selection_disabled">
    </td>
    <td db-tree-cell-actions 
      *ngIf="(configs.actions.edit || configs.actions.delete || configs.actions.add)"
      [row_data]="row_data"
      [configs]="configs"
      [store]="store"
      [edit_tracker]="edit_tracker"
      [internal_configs]="internal_configs"
      [rowdelete]="rowdelete"
      (canceledit)="cancelEdit($event)" 
      (editcomplete)="saveRecord($event)">
    </td>
    <td *ngFor="let column of columns; index as i" 
    class="{{column.css_class}}"
    [ngClass]="{'column-hide': column.hidden, 'expand-column': i == 0}">
      <db-tree-cell
        [configs]="configs"
        [column]="column"
        [index]="i"
        [row_data]="row_data"
        [expand_tracker]="expand_tracker"
        [edit_on]="edit_tracker[row_data[configs.id_field]]"
        [cellclick]="cellclick"
        (rowexpand)="onRowExpand($event)"
        (rowcollapse)="onRowCollapse($event)"
        (editcomplete)="saveRecord($event)"
      >
      </db-tree-cell>
    </td>
    <td *ngIf="configs.show_parent_on_edit && internal_configs.show_parent_col">
      <select *ngIf="edit_tracker[row_data[configs.id_field]]" 
        [(ngModel)]="row_data[configs.parent_id_field]">
        <option *ngFor="let parent of parents" [value]="parent.id">{{parent.value}}</option>
      </select>
    </td>    

    <!-- Add column to fix UI issue when add row is enabled but don't show when edit is enabled for the row -->
    <td *ngIf="internal_configs.show_add_row && !(internal_configs.show_parent_col && configs.show_parent_on_edit)"></td>
  </ng-container>
</tr>
<tr *ngIf="configs.show_summary_row">
  <td *ngIf="configs.multi_select"></td>
  <td *ngIf="(configs.actions.edit || configs.actions.delete || configs.actions.add)"></td>
  <td *ngFor="let column of configs.columns">
    <div [innerHTML]="column.summary_renderer && column.summary_renderer(display_data)"></div>
  </td>
</tr>
</ng-container>

</ng-container>
`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}tr{border-bottom:1px solid #cdd5dc}tr.selected{background-color:#e2e7eb}tr span.parent_container{padding-left:45px}tr.child{background:#fff}tr.child td:nth-child(2){padding:.875rem 1.25rem .875rem 2.5rem!important}tr.parent{background:#fafbff}tr.subgrid-row{background:#fcfcfc}tr.row-add td{padding:.2rem}tr.row-add td.action-column{padding:.5rem 1rem}tr td{vertical-align:middle;position:relative;padding:.5rem;box-sizing:border-box}tr td.checkbox_column{text-align:center}tr td.expand-column{padding:.3rem}tr td.column-hide{display:none}tr td.clear-left-border{border-left:0!important}tr td.clear-right-border{border-right:0!important}tr td select{padding:.2rem .5rem;height:2rem;border:1px solid #d1cece}
`]}]}],function(){return[{type:g}]},{store:[{type:e.Input}],configs:[{type:e.Input}],expand_tracker:[{type:e.Input}],edit_tracker:[{type:e.Input}],internal_configs:[{type:e.Input}],columns:[{type:e.Input}],cellclick:[{type:e.Input}],expand:[{type:e.Input}],collapse:[{type:e.Input}],rowdelete:[{type:e.Input}],rowsave:[{type:e.Input}],rowadd:[{type:e.Input}],rowselect:[{type:e.Input}],rowdeselect:[{type:e.Input}]});class M{constructor(n){this.angularTreeGridService=n,this.processed_data=[],this.expand_tracker={},this.columns=[],this.edit_tracker={},this.internal_configs={show_add_row:!1,show_parent_col:!1,all_selected:!1},this.store=new Kt(this.angularTreeGridService),this.default_configs={css:{expand_icon:"",collapse_icon:"",add_icon:"",edit_icon:"",delete_icon:"",save_icon:"",cancel_icon:"",row_selection_class:"selected",header_class:"",row_filter_class:"",table_class:""},actions:{edit:!1,add:!1,delete:!1,resolve_edit:!1,resolve_add:!1,resolve_delete:!1,edit_parent:!1},data_loading_text:"Loading...",filter:!1,multi_select:!1,show_parent_on_edit:!0,show_summary_row:!1,subgrid:!1,load_children_on_expand:!1,rtl_direction:!1,action_column_width:"60px",row_class_function:()=>"",row_edit_function:()=>!0,row_delete_function:()=>!0,subgrid_config:{show_summary_row:!1,data_loading_text:"Loading..."}},this.default_column_config={sorted:0,sort_type:null,editable:!1,hidden:!1,filter:!0,case_sensitive_filter:!1},this.cellclick=new e.EventEmitter,this.expand=new e.EventEmitter,this.collapse=new e.EventEmitter,this.rowselect=new e.EventEmitter,this.rowdeselect=new e.EventEmitter,this.rowselectall=new e.EventEmitter,this.rowdeselectall=new e.EventEmitter,this.rowadd=new e.EventEmitter,this.rowsave=new e.EventEmitter,this.rowdelete=new e.EventEmitter}ngOnInit(){this.validateConfigs()&&(this.setDefaultConfigs(),this.setColumnNames())}ngOnChanges(){this.validateConfigs()&&(this.setDefaultConfigs(),this.setColumnNames(),this.store.processData(this.data,this.expand_tracker,this.configs,this.edit_tracker,this.internal_configs))}validateConfigs(){if(!this.data){window.console.warn("data can't be empty!");return}if(!this.configs){window.console.warn("configs can't be empty!");return}const n=this.data[0];let t=!0;return this.configs.id_field||(t=!1,window.console.error("id field is mandatory!")),!this.configs.parent_id_field&&!this.configs.subgrid&&(t=!1,window.console.error("parent_id field is mandatory!")),n&&!n.hasOwnProperty(this.configs.id_field)&&(t=!1,console.error("id_field doesn't exist!")),n&&!n.hasOwnProperty(this.configs.parent_id_field)&&!this.configs.subgrid&&!this.configs.load_children_on_expand&&(t=!1,console.error("parent_id_field doesn't exist!")),n&&!n.hasOwnProperty(this.configs.parent_display_field)&&(t=!1,console.error("parent_display_field doesn't exist! Basically this field will be expanded.")),this.configs.subgrid&&!this.configs.subgrid_config&&(t=!1,console.error("subgrid_config doesn't exist!")),this.configs.subgrid&&this.configs.subgrid_config&&!this.configs.subgrid_config.id_field&&(t=!1,console.error("id_field of subgrid doesn't exist!")),this.configs.subgrid&&this.configs.subgrid_config&&!this.configs.subgrid_config.columns&&(t=!1,console.error("columns of subgrid doesn't exist!")),t}setDefaultConfigs(){this.processed_data=[],this.configs=Object.assign({},this.default_configs,this.configs),this.configs.actions=Object.assign({},this.default_configs.actions,this.configs.actions),this.configs.css=Object.assign({},this.default_configs.css,this.configs.css),this.configs.subgrid_config=Object.assign({},this.default_configs.subgrid_config,this.configs.subgrid_config),this.configs.subgrid&&(this.configs.actions.add=!1)}setColumnNames(){if(this.columns=this.configs.columns?this.configs.columns:[],!this.configs.columns)Object.keys(this.data[0]).forEach(t=>{this.columns.push(Object.assign({header:t,name:t},this.default_column_config))});else for(let n=0;n<this.columns.length;n++)this.columns[n]=Object.assign({},this.default_column_config,this.columns[n])}collapseAll(){this.angularTreeGridService.collapseAll(this.expand_tracker)}expandAll(){this.angularTreeGridService.expandAll(this.expand_tracker)}selectAll(){this.angularTreeGridService.selectAll(this.store.getDisplayData()),this.internal_configs.all_selected=!0}deSelectAll(){this.angularTreeGridService.deSelectAll(this.store.getDisplayData()),this.internal_configs.all_selected=!1}expandRow(n,t){this.angularTreeGridService.expandRow(n,this.expand_tracker,this.expand,t,this.configs,this.store.getDisplayData(),this.store)}collapseRow(n,t){this.angularTreeGridService.collapseRow(n,this.expand_tracker,this.collapse,t,this.configs,this.store.getDisplayData())}disableRowSelection(n){this.angularTreeGridService.disableRowSelection(this.store.getDisplayData(),this.configs,n)}enableRowSelection(n){this.angularTreeGridService.enableRowSelection(this.store.getDisplayData(),this.configs,n)}disableRowExpand(n){this.angularTreeGridService.disableRowExpand(this.store.getDisplayData(),this.configs,n)}enableRowExpand(n){this.angularTreeGridService.enableRowExpand(this.store.getDisplayData(),this.configs,n)}}M.\u0275fac=function(n){return new(n||M)(e.\u0275\u0275directiveInject(g))},M.\u0275cmp=e.\u0275\u0275defineComponent({type:M,selectors:[["db-angular-tree-grid"]],inputs:{data:"data",configs:"configs"},outputs:{cellclick:"cellclick",expand:"expand",collapse:"collapse",rowselect:"rowselect",rowdeselect:"rowdeselect",rowselectall:"rowselectall",rowdeselectall:"rowdeselectall",rowadd:"rowadd",rowsave:"rowsave",rowdelete:"rowdelete"},features:[e.\u0275\u0275NgOnChangesFeature],decls:3,vars:23,consts:[["db-tree-head","",3,"store","expand_tracker","internal_configs","edit_tracker","rowselectall","rowdeselectall","columns","configs"],["db-tree-body","",3,"store","expand_tracker","edit_tracker","internal_configs","columns","configs","cellclick","expand","collapse","rowdelete","rowsave","rowadd","rowselect","rowdeselect"]],template:function(n,t){n&1&&(e.\u0275\u0275elementStart(0,"table"),e.\u0275\u0275element(1,"thead",0)(2,"tbody",1),e.\u0275\u0275elementEnd()),n&2&&(e.\u0275\u0275attribute("class","db-tree-view "+t.configs.css.table_class),e.\u0275\u0275advance(),e.\u0275\u0275property("store",t.store)("expand_tracker",t.expand_tracker)("internal_configs",t.internal_configs)("edit_tracker",t.edit_tracker)("rowselectall",t.rowselectall)("rowdeselectall",t.rowdeselectall)("columns",t.columns)("configs",t.configs),e.\u0275\u0275advance(),e.\u0275\u0275property("store",t.store)("expand_tracker",t.expand_tracker)("edit_tracker",t.edit_tracker)("internal_configs",t.internal_configs)("columns",t.columns)("configs",t.configs)("cellclick",t.cellclick)("expand",t.expand)("collapse",t.collapse)("rowdelete",t.rowdelete)("rowsave",t.rowsave)("rowadd",t.rowadd)("rowselect",t.rowselect)("rowdeselect",t.rowdeselect))},dependencies:[b,k],styles:[".db-tree-view[_ngcontent-%COMP%]{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}"]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(M,[{type:e.Component,args:[{selector:"db-angular-tree-grid",template:`<table [attr.class]="'db-tree-view ' + configs.css.table_class" >
    <thead 
        db-tree-head
        [store]="store"
        [expand_tracker]="expand_tracker"
        [internal_configs]="internal_configs"
        [edit_tracker]="edit_tracker"
        [rowselectall]="rowselectall"
        [rowdeselectall]="rowdeselectall"
        [columns]="columns"
        [configs]="configs">
    </thead>

    <tbody 
        db-tree-body
        [store]="store"
        [expand_tracker]="expand_tracker"
        [edit_tracker]="edit_tracker"
        [internal_configs]="internal_configs"
        [columns]="columns"
        [configs]="configs"
        [cellclick]="cellclick"
        [expand]="expand"
        [collapse]="collapse"
        [rowdelete]="rowdelete"
        [rowsave]="rowsave"
        [rowadd]="rowadd"
        [rowselect]="rowselect"
        [rowdeselect]="rowdeselect"
    >        
    </tbody>
</table>`,styles:[`.db-tree-view{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all;color:#4b4b4b}
`]}]}],function(){return[{type:g}]},{data:[{type:e.Input}],configs:[{type:e.Input}],cellclick:[{type:e.Output}],expand:[{type:e.Output}],collapse:[{type:e.Output}],rowselect:[{type:e.Output}],rowdeselect:[{type:e.Output}],rowselectall:[{type:e.Output}],rowdeselectall:[{type:e.Output}],rowadd:[{type:e.Output}],rowsave:[{type:e.Output}],rowdelete:[{type:e.Output}]});class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule,_.FormsModule]]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(u,[{type:e.NgModule,args:[{declarations:[f,V,v,x,w,h,m],imports:[s.CommonModule,_.FormsModule],exports:[f,v,w,h,x,m]}]}],null,null);class T{}T.\u0275fac=function(n){return new(n||T)},T.\u0275mod=e.\u0275\u0275defineNgModule({type:T}),T.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule,u]]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(T,[{type:e.NgModule,args:[{declarations:[y,R,D],imports:[s.CommonModule,u],exports:[y]}]}],null,null);class I{}I.\u0275fac=function(n){return new(n||I)},I.\u0275mod=e.\u0275\u0275defineNgModule({type:I}),I.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule,u,_.FormsModule,T]]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(I,[{type:e.NgModule,args:[{declarations:[k,E,S],imports:[s.CommonModule,u,_.FormsModule,T],exports:[k]}]}],null,null);class O{}O.\u0275fac=function(n){return new(n||O)},O.\u0275mod=e.\u0275\u0275defineNgModule({type:O}),O.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule]]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(O,[{type:e.NgModule,args:[{declarations:[b],imports:[s.CommonModule],exports:[b]}]}],null,null);class A{}A.\u0275fac=function(n){return new(n||A)},A.\u0275mod=e.\u0275\u0275defineNgModule({type:A}),A.\u0275inj=e.\u0275\u0275defineInjector({imports:[[s.CommonModule,I,O]]}),(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(A,[{type:e.NgModule,args:[{declarations:[M],imports:[s.CommonModule,I,O],exports:[M]}]}],null,null)}}]);
