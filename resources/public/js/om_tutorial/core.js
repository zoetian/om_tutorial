// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
om_tutorial.core.HelloWorld = (function om_tutorial$core$HelloWorld(){
var this__20086__auto__ = this;
React.Component.apply(this__20086__auto__,arguments);

if(!((this__20086__auto__.initLocalState == null))){
this__20086__auto__.state = this__20086__auto__.initLocalState();
} else {
this__20086__auto__.state = {};
}

return this__20086__auto__;
});

om_tutorial.core.HelloWorld.prototype = goog.object.clone(React.Component.prototype);

var x28856_28866 = om_tutorial.core.HelloWorld.prototype;
x28856_28866.componentWillUpdate = ((function (x28856_28866){
return (function (next_props__20022__auto__,next_state__20023__auto__){
var this__20021__auto__ = this;
if(((!((this__20021__auto__ == null)))?(((false) || (this__20021__auto__.om$next$Ident$))?true:false):false)){
var ident__20025__auto___28867 = om.next.ident.call(null,this__20021__auto__,om.next.props.call(null,this__20021__auto__));
var next_ident__20026__auto___28868 = om.next.ident.call(null,this__20021__auto__,om.next._next_props.call(null,next_props__20022__auto__,this__20021__auto__));
if(cljs.core.not_EQ_.call(null,ident__20025__auto___28867,next_ident__20026__auto___28868)){
var idxr__20027__auto___28869 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20021__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20027__auto___28869 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20027__auto___28869),((function (idxr__20027__auto___28869,ident__20025__auto___28867,next_ident__20026__auto___28868,this__20021__auto__,x28856_28866){
return (function (indexes__20028__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20028__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20025__auto___28867], null),cljs.core.disj,this__20021__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20026__auto___28868], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20021__auto__);
});})(idxr__20027__auto___28869,ident__20025__auto___28867,next_ident__20026__auto___28868,this__20021__auto__,x28856_28866))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20021__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20021__auto__);
});})(x28856_28866))
;

x28856_28866.shouldComponentUpdate = ((function (x28856_28866){
return (function (next_props__20022__auto__,next_state__20023__auto__){
var this__20021__auto__ = this;
var next_children__20024__auto__ = next_props__20022__auto__.children;
var next_props__20022__auto____$1 = goog.object.get(next_props__20022__auto__,"omcljs$value");
var next_props__20022__auto____$2 = (function (){var G__28858 = next_props__20022__auto____$1;
var G__28858__$1 = (((next_props__20022__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__28858):G__28858);
return G__28858__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20021__auto__),next_props__20022__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__20021__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20021__auto__.state,"omcljs$state"),goog.object.get(next_state__20023__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20021__auto__.props.children,next_children__20024__auto__);
}
}
});})(x28856_28866))
;

x28856_28866.componentWillUnmount = ((function (x28856_28866){
return (function (){
var this__20021__auto__ = this;
var r__20032__auto__ = om.next.get_reconciler.call(null,this__20021__auto__);
var cfg__20033__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20032__auto__);
var st__20034__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20033__auto__);
var indexer__20031__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20033__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__20034__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20034__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20021__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20034__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20021__auto__);
} else {
}

if((indexer__20031__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20031__auto__,this__20021__auto__);
}
});})(x28856_28866))
;

x28856_28866.componentDidUpdate = ((function (x28856_28866){
return (function (prev_props__20029__auto__,prev_state__20030__auto__){
var this__20021__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20021__auto__);
});})(x28856_28866))
;

x28856_28866.isMounted = ((function (x28856_28866){
return (function (){
var this__20021__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20021__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28856_28866))
;

x28856_28866.componentWillMount = ((function (x28856_28866){
return (function (){
var this__20021__auto__ = this;
var indexer__20031__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20021__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20031__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20031__auto__,this__20021__auto__);
}
});})(x28856_28866))
;

x28856_28866.render = ((function (x28856_28866){
return (function (){
var this__20020__auto__ = this;
var this$ = this__20020__auto__;
var _STAR_reconciler_STAR_28859 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28860 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28861 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28862 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28863 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20020__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20020__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20020__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20020__auto__);

om.next._STAR_parent_STAR_ = this__20020__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"Hello World!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28863;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28862;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28861;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28860;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28859;
}});})(x28856_28866))
;


om_tutorial.core.HelloWorld.prototype.constructor = om_tutorial.core.HelloWorld;

om_tutorial.core.HelloWorld.prototype.constructor.displayName = "om-tutorial.core/HelloWorld";

om_tutorial.core.HelloWorld.prototype.om$isComponent = true;

var x28864_28870 = om_tutorial.core.HelloWorld;


var x28865_28871 = om_tutorial.core.HelloWorld.prototype;


om_tutorial.core.HelloWorld.cljs$lang$type = true;

om_tutorial.core.HelloWorld.cljs$lang$ctorStr = "om-tutorial.core/HelloWorld";

om_tutorial.core.HelloWorld.cljs$lang$ctorPrWriter = (function (this__20088__auto__,writer__20089__auto__,opt__20090__auto__){
return cljs.core._write.call(null,writer__20089__auto__,"om-tutorial.core/HelloWorld");
});
om_tutorial.core.hello = om.next.factory.call(null,om_tutorial.core.HelloWorld);
ReactDOM.render(om_tutorial.core.hello.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map