(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(4),o=n.n(a),r=n(6),l=n.n(r),i=n(7),c=n.n(i),s=n(2),u=n.n(s),f=n(8),g=n.n(f),d=n(0),m=n(5),p=n(9),v=n(39),h=n(50),y=function(e){function t(){return o()(this,t),c()(this,u()(t).apply(this,arguments))}return g()(t,e),l()(t,[{key:"render",value:function(){return d.createElement(h.a,{onPress:this.props.onPress,style:[E.inner]},d.createElement(p.a.View,this.props,this.props.children))}}]),t}(d.Component),E=m.a.create({inner:{backgroundColor:v.a.white,marginVertical:8,elevation:1}})},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),o=n(5),r=n(3);function l(e){var t=o.a.create({palette:{alignItems:"stretch",flexDirection:"row",height:112},color:{flex:1}});return a.createElement(r.a,{style:t.palette},e.colors&&e.colors.map((function(e){return a.createElement(r.a,{style:[t.color,{backgroundColor:e.color}],key:e.color})})))}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),o=n.n(a),r=n(3),l=n(28),i=n(5),c=n(50),s=function(e){var t=e.name,n=e.undoDeletionByName;return console.log(e,"undo card ****** &&&&&& "),o.a.createElement(r.a,{style:u.undoCard},o.a.createElement(r.a,{style:{width:"80%"}},o.a.createElement(l.a,{style:u.undoText},"Deleted ",t,". tab to dismiss.")),o.a.createElement(c.a,{onPress:function(){n(t)}},o.a.createElement(l.a,{style:u.undoButton}," UNDO ")))},u=i.a.create({undoCard:{backgroundColor:"#303036",flexDirection:"row",padding:15,marginTop:1},undoText:{color:"#fff"},undoButton:{fontWeight:"bold",color:"#e6be0b"}})},165:function(e,t,n){"use strict";var a=n(0),o=n(3);t.a=function(){return a.createElement(o.a,{style:{height:100}})}},226:function(e,t,n){"use strict";(function(e){var a=n(15),o=n.n(a),r=n(40),l=n.n(r),i=n(0),c=n.n(i),s=n(29),u=n(5),f=n(129),g=n(3),d=n(22),m=n(227),p=n(164),v=n(61),h=n(166),y=n(39),E=n(231),b=n(72),P=n(232),w=n(197),x=n(228),k=n(116),C=n.n(k),A=n(68),O=n(165),D=function(t){var n=d.a.get("window"),a=n.height,r=(n.width,[{text:"Get palette from image",name:"palette_from_image",position:2,color:y.a.accent},{text:"Get palette from color",name:"palette_from_color",position:1,color:y.a.accent},{text:"Add colors manually",name:"add_colors_manually",position:3,color:y.a.accent},{text:"Unlock Pro",name:"unlock_pro",position:4,color:y.a.primary}]),u=c.a.useContext(v.a),k=u.isLoading,D=u.allPalettes,B=u.loadInitPaletteFromStore,T=u.deletedPalettes,j=u.undoDeletionByName,_=Object(i.useState)(!1),H=l()(_,2),N=H[0],I=H[1];console.log("called again ",D,T);return Object(i.useEffect)((function(){B(),function(){var e;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!P.a.platform.ios){t.next=6;break}return t.next=3,o.a.awrap(w.b(w.a));case 3:e=t.sent,"granted"!==e.status&&alert("Sorry, we need camera roll permissions to make this work!");case 6:case"end":return t.stop()}}))}()}),[]),k?c.a.createElement(f.a,null):c.a.createElement(g.a,{style:[S.container,{minHeight:a-A.Header.HEIGHT-16}]},N?c.a.createElement(f.a,null):c.a.createElement(g.a,null),c.a.createElement(s.a,null,Object.keys(D).map((function(e){return console.log("name: ",e,D[e].colors),c.a.createElement(m.a,{key:e,colors:D[e].colors,name:e,navigation:t.navigation})})),c.a.createElement(O.a,null)),Object.keys(T).map((function(e){return c.a.createElement(p.a,{key:e,name:e,undoDeletionByName:j})})),c.a.createElement(h.a,{color:y.a.accent,actions:r,onPressItem:function(n){"palette_from_image"===n?(I(!0),function(){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(E.a({mediaTypes:b.a.All,quality:1,base64:!0}));case 2:if(void 0===(t=n.sent).base64){n.next=9;break}return n.next=6,o.a.awrap(C.a.read(new e(t.base64,"base64")));case 6:return n.abrupt("return",n.sent);case 9:return n.next=11,o.a.awrap(C.a.read(t.uri));case 11:return n.abrupt("return",n.sent);case 12:case"end":return n.stop()}}))}().then((function(e,n){I(!1),t.navigation.navigate("ColorList",{colors:x.a.getProminentColors(e)})}))):"palette_from_color"===n?t.navigation.navigate("ColorPicker",{onDone:function(e){console.log("Navigating to palettes"),t.navigation.navigate("Palettes",{color:e.color})}}):"add_colors_manually"===n&&t.navigation.navigate("AddPaletteManually"),console.log("selected button: "+n)}}))};t.a=D,D.navigationOptions={title:"Croma"};var S=u.a.create({container:{margin:8,justifyContent:"center"}})}).call(this,n(311).Buffer)},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(13),o=n.n(a),r=n(0),l=n(5),i=n(3),c=n(28),s=n(109),u=n(39),f=n(163),g=n(86),d=n(115),m=n(50),p=n(61),v=function(e){var t=r.useContext(p.a).deletePaletteByName;return r.createElement(s.a,o()({},e,{onPress:function(){console.log("navigate to palette screen"+e.navigation),e.navigation.navigate("Palette",e)}}),r.createElement(f.a,e),r.createElement(i.a,{style:h.bottom},r.createElement(c.a,{style:h.label},e.name),r.createElement(i.a,{style:h.actionButtonsView},r.createElement(m.a,{style:h.actionButton},r.createElement(g.a,{icon:d.a})),r.createElement(m.a,{style:h.actionButton},r.createElement(g.a,{icon:d.b})),r.createElement(m.a,{onPress:function(){t(e.name)},style:h.actionButton},r.createElement(g.a,{icon:d.c})))))},h=l.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,color:u.a.darkGrey}})},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(4),o=n.n(a),r=n(6),l=n.n(r),i=n(229),c=n(116),s=n.n(c),u=n(62),f=n.n(u),g=function(){function e(){o()(this,e)}return l()(e,null,[{key:"getProminentColors",value:function(t){var n=this;console.log("image: "+t),t.resize(s.a.AUTO,100);var a=e._prepareDataForKmeans(t),o=Date.now(),r=Object(i.a)(a,24,{initialization:"random",maxIterations:20});console.log(JSON.stringify(r)+","+(Date.now()-o)+" ms"),r.centroids=r.centroids.sort((function(e,t){return t.size-e.size})),console.log(r.centroids);var l=r.centroids.map((function(e){return new f.a(n._labToHex(e.centroid))}));return this._getFinalColors(l).map((function(e){return{color:e.tohex()}}))}},{key:"_getFinalColors",value:function(e){var t=this;console.log("----------------------",e),e.sort((function(e,n){return t._toArray(e.tohsv())[0]<t._toArray(n.tohsv())[0]}));for(var n=[],a=0;a<e.length;a+=4){for(var o=[],r=0;r<4;r++)o.push(e[a+r]);o.sort((function(e,n){return t._toArray(e.tohsv())[1]<t._toArray(n.tohsv())[1]})),n.push(o[o.length-1]),n.push(o[o.length-2])}console.log("filtered colors:"+n);for(var l=[],i=0;i<n.length;i+=2)this._toArray(n[i].tohsv())[2]>this._toArray(n[i+1].tohsv())[2]?l.push(n[i]):l.push(n[i+1]);return l}},{key:"_labToHex",value:function(e){return new f.a("lab("+e[0]+", "+e[1]+", "+e[2]+")").tohex()}},{key:"_prepareDataForKmeans",value:function(e){var t=[];console.log("image============",e.bitmap.width,e.bitmap.height);for(var n=0;n<e.bitmap.width;n++)for(var a=0;a<e.bitmap.height;a++){var o=e.getPixelColor(n,a),r=this._toHexColor(o);console.log("hex:",r);var l=new f.a(r).tolab();l=l.substr(4,l.length-5).split(", ").map((function(e){return parseFloat(e)})),t.push(l)}return t}},{key:"_toHexColor",value:function(e){var t=s.a.intToRGBA(e);return new f.a("rgb("+t.r+", "+t.g+", "+t.b+")").tohex()}},{key:"_toArray",value:function(e){var t=e.indexOf("(");return(e=e.substr(t+1,e.length-t)).split(", ").map((function(e){return parseFloat(e)}))}}]),e}()},230:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(10),l=n(78),i=n(5),c=n(3),s=n(22),u=n(39),f=n(218),g=n(68),d=n(29),m=n(28),p=n(147),v=n(86),h=n(224),y=n(50),E=n(62),b=n.n(E);function P(e){var t=i.a.create({backgroundColor:{backgroundColor:e.color,height:112,alignSelf:"stretch"},info:{flexDirection:"row",justifyContent:"space-between",padding:10},colorNameText:{fontSize:16,fontWeight:"500"}}),n=new b.a(e.color),a=[{key:"HEX",value:n.tohex()},{key:"RGB",value:n.torgb()},{key:"HSL",value:n.tohsl()},{key:"HSV",value:n.tohsv()},{key:"HWB",value:n.tohwb()},{key:"CMYK",value:n.tocmyk()},{key:"CIELAB",value:n.tolab()},{key:"Luminance",value:(100*n.luminance()).toFixed(2)+"%"},{key:"Darkness",value:(100*n.darkness()).toFixed(2)+"%"}];return o.a.createElement(c.a,{style:{flex:1,flexDirection:"column",padding:8,backgroundColor:"#fff"}},o.a.createElement(c.a,{style:[t.backgroundColor]}),o.a.createElement(c.a,null,a.map((function(e){return o.a.createElement(y.a,{key:e.key,onPress:function(){return t=e.value,void p.a.setString(t);var t}},o.a.createElement(c.a,{style:t.info},o.a.createElement(m.a,{style:t.colorNameText},e.key," : "),o.a.createElement(m.a,null,e.value),o.a.createElement(v.a,{icon:h.a})))}))))}var w=n(4),x=n.n(w),k=n(6),C=n.n(k),A=n(7),O=n.n(A),D=n(2),S=n.n(D),B=n(8),T=n.n(B),j=function(e){function t(){return x()(this,t),O()(this,S()(t).apply(this,arguments))}return T()(t,e),C()(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.onPress,o=e.children;return a.createElement(y.a,{style:[_.button,t],onPress:n},a.createElement(m.a,{style:{textTransform:"uppercase"}}," ",o," "))}}]),t}(a.Component),_=i.a.create({button:{shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:50,marginTop:10,marginBottom:10,justifyContent:"center",alignItems:"center"}});function H(e){var t=e.navigation.getParam("color");return o.a.createElement(d.a,{style:N.container},o.a.createElement(P,{navigation:e.navigation,color:t},t),o.a.createElement(j,{onPress:function(){return e.navigation.navigate("Palettes",{color:t})}},"See color palettes"))}H.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var N=i.a.create({container:{flex:1,paddingLeft:12,paddingRight:12}}),I=n(40),L=n.n(I),F=n(225);var W=i.a.create({container:{flexDirection:"column",margin:8}}),G=n(109),z=n(163),R=function(e){function t(){return x()(this,t),O()(this,S()(t).apply(this,arguments))}return T()(t,e),C()(t,[{key:"render",value:function(){return a.createElement(G.a,this.props,a.createElement(c.a,null,a.createElement(z.a,this.props),a.createElement(c.a,{style:V.bottom},a.createElement(m.a,{style:V.label},this.props.name))))}}]),t}(a.Component),V=i.a.create({bottom:{flexDirection:"row",alignItems:"center",height:48},label:{flex:1,fontWeight:"500",marginHorizontal:16,color:u.a.darkGrey}});function M(e){var t=new b.a(e.navigation.getParam("color")),n=[];for(var a in t)/.*scheme$/i.test(a)&&"function"===typeof t[a]&&function(){var r,l=[];t[a]().forEach((function(e){return l.push({color:e.tohex()})})),n.push(o.a.createElement(R,{onPress:function(){return e.navigation.navigate("ColorList",{colors:l})},key:a.toString(),colors:l,name:(r=a.toString(),"string"!==typeof r?"":r.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()})))}))}();return o.a.createElement(d.a,{style:U.container},n)}M.navigationOptions=function(e){return{title:e.navigation.getParam("color")}};var U=i.a.create({container:{paddingLeft:12,paddingRight:12}}),$=n(15),J=n.n($),Q=n(25),K=n.n(Q),X=n(52),Y=n(73),Z=n(61),q=function(e){console.log("props.natigation: ",e.navigation);var t=o.a.useState(""),n=L()(t,2),a=n[0],r=n[1],l=o.a.useContext(Z.a).addPalette,i=e.title,s=e.navigationPath;return o.a.createElement(Y.c,null,o.a.createElement(c.a,{style:ee.card},o.a.createElement(m.a,{style:ee.label},i),o.a.createElement(X.a,{style:ee.input,placeholder:"Enter a name for the palette",onChangeText:function(e){return r(e)}})),o.a.createElement(j,{onPress:function(){var t,n;return J.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:t=K()(new Set(e.navigation.getParam("colors")||[])),l(n={name:a,colors:t}),console.log("navigating to home"),"Palette"===s?e.navigation.navigate(s,n):e.navigation.navigate(s);case 5:case"end":return o.stop()}}))}},"Save palette"))},ee=i.a.create({card:{flex:1,flexDirection:"column",justifyContent:"center",shadowColor:"rgba(0,0,0, .4)",shadowOffset:{height:1,width:1},shadowOpacity:1,shadowRadius:1,backgroundColor:"#fff",elevation:2,height:92,marginVertical:10,padding:10},label:{flex:1,color:u.a.darkGrey,fontWeight:"700"},input:{flex:1,borderBottomColor:"black",borderBottomWidth:1}});var te=function(e){function t(){return x()(this,t),O()(this,S()(t).apply(this,arguments))}return T()(t,e),C()(t,[{key:"render",value:function(){return a.createElement(c.a,{style:[ne.container,{backgroundColor:this.props.color}]},a.createElement(m.a,{style:ne.colorText},this.props.color))}}]),t}(a.Component),ne=i.a.create({container:{height:56,justifyContent:"center",alignItems:"center"},colorText:{fontWeight:"700",backgroundColor:"rgba(255, 255, 255, .3)",paddingLeft:8,paddingRight:8}});function ae(e){var t=function(e){var t=new Set,n=[];return e.forEach((function(e){console.log("Color: "+e.color),t.has(e.color)||(console.log("inside==="+e.color),n.push(e)),t.add(e.color)})),n}(e.navigation.getParam("colors"));return o.a.createElement(d.a,{style:oe.listview},t.map((function(e){return o.a.createElement(te,{key:e.color,color:e.color})})),o.a.createElement(j,{onPress:function(){return e.navigation.navigate("SavePalette",{colors:t})}},"SAVE AS NEW PALETTE"))}ae.navigationOptions={title:"Colors"};var oe=i.a.create({listview:{margin:8}}),re=n(115),le=function(e){function t(){return x()(this,t),O()(this,S()(t).apply(this,arguments))}return T()(t,e),C()(t,[{key:"render",value:function(){return a.createElement(G.a,this.props,a.createElement(c.a,null,a.createElement(c.a,{style:{backgroundColor:this.props.color,height:100}}),a.createElement(c.a,{style:ie.bottom},a.createElement(m.a,{style:ie.label},this.props.color),a.createElement(c.a,{style:ie.actionButtonsView},a.createElement(y.a,{onPress:this.props.colorDeleteFromPalette,style:ie.actionButton},a.createElement(v.a,{icon:re.c}))))))}}]),t}(a.Component),ie=i.a.create({bottom:{flexDirection:"row",alignItems:"center",padding:16,height:54},actionButtonsView:{flexDirection:"row",alignItems:"flex-end"},actionButton:{paddingRight:16},label:{flex:1,marginHorizontal:16,fontWeight:"500",color:u.a.darkGrey}}),ce=n(164),se=n(166),ue=n(165),fe=[{text:"Add color",icon:n(310),name:"add_color",position:1}];function ge(e){var t=s.a.get("window"),n=t.height,a=(t.width,e.navigation.getParam("name")),r=o.a.useContext(Z.a),l=r.allPalettes,i=r.colorDeleteFromPalette,f=r.undoColorDeletion,m=r.addColorToPalette,p=l[a].colors,v=l[a].deletedColors?l[a].deletedColors:[],h=function(t){i(e.navigation.getParam("name"),t)};return o.a.createElement(c.a,{style:(de.container,{minHeight:n-g.Header.HEIGHT-16})},o.a.createElement(d.a,{style:de.listview},p.map((function(t,n){return o.a.createElement(le,{onPress:function(){return e.navigation.navigate("ColorDetails",{color:t.color})},color:t.color,colorDeleteFromPalette:function(){h(n)}})})),o.a.createElement(ue.a,null)),v.map((function(e){return o.a.createElement(ce.a,{name:e.color,undoDeletionByName:function(e){f(a,e)}})})),o.a.createElement(se.a,{actions:fe,overrideWithAction:!0,color:u.a.accent,onPressItem:function(){return e.navigation.navigate("ColorPicker",{onDone:function(e){m(a,e)}})}}))}ge.navigationOptions=function(e){return{title:e.navigation.getParam("name")}};var de=i.a.create({container:{flex:1},listview:{margin:8}}),me=n(226),pe=(r.a.select({web:{headerMode:"screen"},default:{}}),Object(g.createStackNavigator)({ColorDetails:H,ColorPicker:function(e){var t=Object(a.useState)("#db0a5b"),n=L()(t,2),r=n[0],l=n[1];return o.a.createElement(d.a,null,o.a.createElement(c.a,{style:W.container},o.a.createElement(F.a,{onChangeColor:function(e){console.log("oncolorchange called",e),l(e)},style:[{height:300,verticalMargin:8,flex:1}]}),o.a.createElement(j,{onPress:function(){console.log(e.navigation.getParam("onDone")),e.navigation.goBack(),e.navigation.getParam("onDone")({color:r})}},"Done")))},Palettes:M,SavePalette:function(e){return console.log(e,"SavePaletteScreen "),o.a.createElement(d.a,null,o.a.createElement(q,{title:"ADD NEW PALETTE",navigationPath:"Home",navigation:e.navigation}))},ColorList:ae,Palette:ge,Home:me.a,AddPaletteManually:function(e){return console.log(e,"AddPaletteManuallyScreen "),o.a.createElement(d.a,null,o.a.createElement(q,{title:"ADD PALETTE NAME",navigationPath:"Palette",navigation:e.navigation}))}},{initialRouteName:"Home",transparentCard:!0,defaultNavigationOptions:{headerStyle:{backgroundColor:u.a.primary},headerTintColor:"#fff"}})),ve=(Object(g.createAppContainer)(pe),pe),he=Object(g.createSwitchNavigator)({Main:ve});he.path="";var ye=Object(f.createBrowserApp)(he,{history:"hash"});function Ee(e){var t=s.a.get("window"),n=t.height,a=t.width;return console.log("height",n,"width",a),o.a.createElement(Z.a.Provider,{value:Object(Z.b)(Z.c)},o.a.createElement(c.a,{style:[be.container]},o.a.createElement(c.a,{style:[{backgroundColor:"transparent"},{width:"web"==r.a.OS?Math.min(600,a):a}]},"ios"===r.a.OS&&o.a.createElement(l.a,{barStyle:"default"}),o.a.createElement(ye,null))))}n.d(t,"a",(function(){return Ee}));var be=i.a.create({container:{flex:1,justifyContent:"center",backgroundColor:u.a.backgroundColor,flexDirection:"row"}})},233:function(e,t,n){n(234),e.exports=n(316)},234:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},310:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHklEQVQoz2NgwAH+QwEDqWBUI5ICUgH5GkejgwYaAQHbzzEa1pSvAAAAAElFTkSuQmCC"},39:function(e,t,n){"use strict";t.a={tintColor:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc",tabBar:"#fefefe",errorBackground:"red",errorText:"#fff",warningBackground:"#EAEB5E",warningText:"#666804",noticeBackground:"#2f95dc",noticeText:"#fff",primary:"#f1544d",primaryDark:"#c94740",text:"#fff",accent:"#f0d04c",grey:"#888",darkGrey:"#333",lightGrey:"#eee",white:"#fff",black:"#000",fadedBlack:"rgba(0, 0, 0, .5)",backgroundColor:"#f2f2f2"}},61:function(e,t,n){"use strict";var a=n(40),o=n.n(a),r=n(25),l=n.n(r),i=n(15),c=n.n(i),s=n(11),u=n.n(s),f=n(0),g=n.n(f),d=n(4),m=n.n(d),p=n(128),v=function e(){m()(this,e)};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}v.getAllPalettes=function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(p.a.getItem("ALL_PALETTES"));case 2:if(e=t.sent,console.log("Palettes returned from storage: ",e),!e){t.next=8;break}return t.abrupt("return",JSON.parse(e));case 8:return t.abrupt("return",{});case 9:case"end":return t.stop()}}))},v.saveAllPalette=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(p.a.setItem("ALL_PALETTES",JSON.stringify(e)));case 2:case"end":return t.stop()}}))},v.deletePaletteByName=function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(v.getAllPalettes());case 2:return delete(t=n.sent)[e],n.next=6,c.a.awrap(v.saveAllPalette(t));case 6:case"end":return n.stop()}}))},n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return P}));var E={allPalettes:{},deletedPalettes:{},isLoading:!1};function b(e){var t,n=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:g((function(t){var n=t.allPalettes;return n[e.name]=e,y({},t,{allPalettes:n})}));case 1:case"end":return t.stop()}}))},a=function(e){g((function(t){var n=t.deletedPalettes;return delete n[e],y({},t,{deletedPalettes:n})}))},r=function(e,t){g((function(n){var a=n.allPalettes;return a[e].deletedColors.forEach((function(n,o){n.color===t&&a[e].deletedColors.splice(o,1)})),y({},n,{allPalettes:a})}))},i=Object(f.useState)(y({},e,{loadInitPaletteFromStore:function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(v.getAllPalettes());case 2:e=t.sent,g((function(t){return y({},t,{allPalettes:e})}));case 4:case"end":return t.stop()}}))},undoDeletionByName:function(e){g((function(t){var o=t.deletedPalettes;return o[e]&&(n(y({},o[e])),a(e)),y({},t)}))},deletePaletteByName:function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(v.deletePaletteByName(e));case 2:g((function(t){var n=t.allPalettes,o=t.deletedPalettes;return n[e]?(o[e]=y({},n[e]),delete n[e],setTimeout((function(){a(e)}),3e3),y({},t,{allPalettes:n,deletedPalettes:o})):y({},t)}));case 3:case"end":return t.stop()}}))},addPalette:n,colorDeleteFromPalette:function(e,t){g((function(n){var a=n.allPalettes,o=a[e].colors.splice(t,1);return a[e].deletedColors?a[e].deletedColors.push(y({},o[0])):a[e].deletedColors=l()(o),setTimeout((function(){r(e,o[0].color)}),3e3),y({},n,{allPalettes:a})}))},undoColorDeletion:function(e,t){g((function(n){var a=n.allPalettes;return a[e].colors.push({color:t}),a[e].deletedColors.forEach((function(n,o){n.color===t&&a[e].deletedColors.splice(o,1)})),y({},n,{allPalettes:a})}))},addColorToPalette:function(e,t){g((function(n){var a=n.allPalettes;return a[e].colors=a[e].colors.concat(t),y({},n,{allPalettes:a})}))}})),s=o()(i,2),u=s[0],g=s[1];return Object.keys(u.allPalettes).length>0&&(t=u.allPalettes,v.saveAllPalette(t)),console.log(u,"updated state "),u}var P=g.a.createContext()}},[[233,1,2]]]);
//# sourceMappingURL=../../d7bf1e99dfe5358f487d.map