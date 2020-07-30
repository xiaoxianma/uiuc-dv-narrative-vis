(this["webpackJsonpuiuc-dv-narrative-vis"]=this["webpackJsonpuiuc-dv-narrative-vis"]||[]).push([[0],{332:function(e,t,a){e.exports=a.p+"static/media/2019.de665a57.csv"},333:function(e,t,a){e.exports=a.p+"static/media/2019_region.39427317.csv"},371:function(e,t,a){e.exports=a(697)},377:function(e,t,a){},697:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(51),c=a.n(o),i=(a(376),a(317)),l=a.n(i),s=(a(377),a(41)),u=a(16),m=a(717),p=a(715),h=a(739),d=a(742),f=Object(p.a)((function(e){return{content:{color:"white",fontSize:20}}}));function y(){var e=f();return(r.a.createElement("div",{className:"section"},r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:3}),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("div",null,r.a.createElement("h3",null,"Introduction")),r.a.createElement("div",{className:e.content,align:"left"},"In this project, we perform a detailed data analysis on the World Happiness Report of 2019. The World Happiness Report is a landmark survey of the state of global happiness. The report reviews the state of happiness in the world and shows how the science of happiness explains personal and national variations in happiness. It is one approach to measuring humanities well-being. There are six factors are selected due to their high contribution to making life evaluation higher in each country including economic production, social support, life expectancy, freedom, absence of corruption, and generosity. They have no impact on the total score reported for each country, but they do explain why some countries rank higher than others."),r.a.createElement(d.a,{href:"#world-happiness"},r.a.createElement(h.a,{variant:"contained",color:"primary"},"About the visualization"))),r.a.createElement(m.a,{item:!0,xs:3}))))}var g=a(18),b=a(160),E=a(161),v=Object(p.a)((function(e){return{plot:{leftMargin:e.spacing(10)},description:{marginTop:e.spacing(3),textAlign:"left",fontSize:16}}}));function x(e){var t=v(),a=Object(n.useRef)(),o=Object(n.useState)([]),c=Object(u.a)(o,2),i=c[0],l=c[1];Object(n.useEffect)((function(){var t,a=[],n=Object(s.a)(e.reportData.slice(0,20));try{for(n.s();!(t=n.n()).done;){var r=t.value;a.push({name:r.country,gdp:parseFloat(r["gdp-per-capita"]),social:r["social-support"],health:r["healthy-life-expectancy"],freedom:r.freedom,generosity:r.generosity,perceptions:r["perceptions-of-corruption"]})}}catch(o){n.e(o)}finally{n.f()}l(a)}),[e.reportData]),Object(n.useEffect)((function(){E.b(a.current).append("circle").attr("cx",150).attr("cy",70).attr("r",50)}),[]);return r.a.createElement("div",{className:"section"},r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:2}),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement("h4",null,"Top 20 Happiest Countries"),r.a.createElement(g.b,{layout:"horizontal",width:1600,height:800,data:i,margin:{top:20,right:30,left:20,bottom:100}},r.a.createElement(g.g,{dataKey:"name",type:"category",interval:0,angle:-30,tick:{fill:"white",fontSize:16,dy:35,dx:-10}}),r.a.createElement(g.h,null),r.a.createElement(g.f,null),r.a.createElement(g.e,{verticalAlign:"top",formatter:function(e,t){var a=t.color;return(r.a.createElement("span",{style:{color:a}},e))}}),r.a.createElement(g.a,{dataKey:"gdp",stackId:"a",fill:"#8884d8",animationBegin:100,animationDuration:2e3}),r.a.createElement(g.a,{dataKey:"social",stackId:"a",fill:"#f06292",animationBegin:100,animationDuration:2e3}),r.a.createElement(g.a,{dataKey:"health",stackId:"a",fill:"#ba68c8",animationBegin:100,animationDuration:2e3}),r.a.createElement(g.a,{dataKey:"freedom",stackId:"a",fill:"#4dd0e1",animationBegin:100,animationDuration:2e3}),r.a.createElement(g.a,{dataKey:"generosity",stackId:"a",fill:"#ffd54f",animationBegin:100,animationDuration:2e3}),r.a.createElement(g.a,{dataKey:"perceptions",stackId:"a",fill:"#81c784",animationBegin:100,animationDuration:2e3}),r.a.createElement("svg",{width:1600,height:800},r.a.createElement(b.AnnotationLabel,{x:938,y:320,dy:-100,dx:100,color:"#ff8a65",note:{label:"Costa Rica tops the happiness index despite low gdp",align:"left",orientation:"topBottom",bgPadding:10,padding:15,titleColor:"#ffe0b2"}}),r.a.createElement(b.AnnotationCalloutRect,{x:350,y:370,dy:-120,dx:-120,color:"white",note:{label:"GDP, Social Support and Healthy life expectancy are the three biggest factors",lineType:"horizontal",padding:10},subject:{width:400,height:290}}))),r.a.createElement("p",{className:t.description},"From this chart, we can see three factor gdp, social support, and healthy life expectancy are way more important than the others. General speaking, strong economy will make a country happy. But it is always true. For example, the economy of Costa Rica is out of top 50 in the world. However, it ranks the 12th happiest country.")),r.a.createElement(m.a,{item:!0,xs:2})))}var j=a(79),O=a(330),w=a(337),k=a(35),S=Object(p.a)((function(e){return{chartLabel:{stroke:"white",fill:"white",fontWeight:400},countryLabel:{fontSize:30,stroke:"#eeeeee",fill:"#eeeeee"},hint:{fontSize:14,value:{color:"white"},backgroundColor:"grey"}}}));function N(e){var t=S();return r.a.createElement(k.g,{width:800,height:800,yDomain:[0,8],xDomain:[0,2]},r.a.createElement(k.e,null),r.a.createElement(k.b,null),r.a.createElement(k.f,{style:{line:{stroke:"white"},ticks:{stroke:"white"},text:{stroke:"none",fill:"white",fontWeight:400}}}),r.a.createElement(k.h,{style:{line:{stroke:"white"},ticks:{stroke:"white"},text:{stroke:"none",fill:"white",fontWeight:400}}}),r.a.createElement(k.a,{text:"".concat(e.chartXAxis," ").concat(e.attr),xPercent:.8,yPercent:.875,className:t.chartLabel}),r.a.createElement(k.a,{text:"Happiness Score",xPercent:.07,className:t.chartLabel}),r.a.createElement(k.a,{text:e.score,xPercent:.1,yPercent:.03,className:t.chartLabel}),r.a.createElement(k.a,{text:e.selectedCountry,xPercent:.1,yPercent:.85,className:t.countryLabel}),r.a.createElement(k.c,{animation:{damping:10,stiffness:20},opacity:.8,data:e.lineData,strokeWidth:8,color:"#bcaaa4"}),r.a.createElement(k.d,{data:e.chartData,sizeType:"literal",colorType:"literal",onValueMouseOver:function(t){e.setSelectedCountry(t.country);var a,n=[],r=Object(s.a)(e.chartData);try{for(r.s();!(a=r.n()).done;){var o=a.value;o.country===t.country?(o.size=10,o.color="#ffb74d"):(o.size=5,o.color="#12939A"),n.push(o)}}catch(c){r.e(c)}finally{r.f()}e.setChartData(n),e.setScore("(".concat(t.y,")")),e.setAttr("- ".concat(t.x.toFixed(2)))},onValueMouseOut:function(t,a){e.setSelectedCountry("");var n,r=[],o=Object(s.a)(e.chartData);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.size=5,c.color="#12939A",r.push(c)}}catch(i){o.e(i)}finally{o.f()}e.setChartData(r),e.setScore(""),e.setAttr("")}}))}var C=a(737),D=Object(p.a)((function(e){return{title:{marginTop:e.spacing(8),fontSize:48,color:"white"},colorScale:{maxWidth:"30%",margin:"auto"},root:{flexGrow:1},chart:{margin:e.spacing(4)},btnGroup:{"& > *":{margin:e.spacing(1)},textAlign:"left"},btn:{backgroundColor:"white","&:hover":{backgroundColor:C.a[100]},"&:active":{backgroundColor:C.a[300]}},activeBtn:{backgroundColor:C.a[300],"&:hover":{backgroundColor:C.a[100]},"&:active":{backgroundColor:C.a[300]},"&:focus":{backgroundColor:C.a[300]}}}})),z=["#d53e4f","#f46d43","#fdae61","#abdda4","#66c2a5","#3288bd"],A=E.a().domain([2.6,3.8,4.8,5.8,6.8,7.8]).range(z);function B(e){var t=D(),a=Object(n.useState)(""),o=Object(u.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(""),p=Object(u.a)(l,2),d=p[0],f=p[1],y=Object(n.useState)(""),g=Object(u.a)(y,2),b=g[0],E=g[1],v=Object(n.useState)([]),x=Object(u.a)(v,2),k=x[0],S=x[1],C=Object(n.useState)([]),B=Object(u.a)(C,2),H=B[0],P=B[1],I=Object(n.useState)([]),R=Object(u.a)(I,2),T=R[0],K=R[1],L=Object(n.useState)([]),W=Object(u.a)(L,2),G=W[0],F=W[1],M=Object(n.useState)([]),V=Object(u.a)(M,2),J=V[0],X=V[1],Z=Object(n.useState)([]),_=Object(u.a)(Z,2),q=_[0],Q=_[1],U=Object(n.useState)([]),Y=Object(u.a)(U,2),$=Y[0],ee=Y[1],te=Object(n.useState)([]),ae=Object(u.a)(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)("gdp per capita"),ce=Object(u.a)(oe,2),ie=ce[0],le=ce[1],se=Object(n.useState)(!0),ue=Object(u.a)(se,2),me=ue[0],pe=ue[1],he=Object(n.useState)(!1),de=Object(u.a)(he,2),fe=de[0],ye=de[1],ge=Object(n.useState)(!1),be=Object(u.a)(ge,2),Ee=be[0],ve=be[1],xe=Object(n.useState)(!1),je=Object(u.a)(xe,2),Oe=je[0],we=je[1],ke=Object(n.useState)(!1),Se=Object(u.a)(ke,2),Ne=Se[0],Ce=Se[1],De=Object(n.useState)(!1),ze=Object(u.a)(De,2),Ae=ze[0],Be=ze[1],He=Object(n.useState)(""),Pe=Object(u.a)(He,2),Ie=Pe[0],Re=Pe[1];Object(n.useEffect)((function(){var t,a=[],n=[],r=[],o=[],c=[],i=[],l="#12939A",u=Object(s.a)(e.reportData);try{for(u.s();!(t=u.n()).done;){var m=t.value;a.push({x:2*m["gdp-per-capita"]/1.69,y:m.score,country:m.country,size:5,color:l}),n.push({x:2*m["social-support"]/1.63,y:m.score,country:m.country,size:5,color:l}),r.push({x:2*m["healthy-life-expectancy"]/1.15,y:m.score,country:m.country,size:5,color:l}),o.push({x:2*m.freedom/.61,y:m.score,country:m.country,size:5,color:l}),c.push({x:2*m.generosity/.6,y:m.score,country:m.country,size:5,color:l}),i.push({x:2*m["perceptions-of-corruption"]/.46,y:m.score,country:m.country,size:5,color:l})}}catch(p){u.e(p)}finally{u.f()}S(a),P(n),K(r),F(o),X(c),Q(i),ee(a),re([{x:.05,y:3.5},{x:2,y:6.6}])}),[e.reportData]),Object(n.useEffect)((function(){var e,t=[],a=Object(s.a)($);try{for(a.s();!(e=a.n()).done;){var n=e.value;n.country===Ie?(n.size=10,n.color="#ffb74d",i("(".concat(n.y,")")),f("- ".concat(n.x.toFixed(2)))):(n.size=5,n.color="#12939A"),t.push(n)}}catch(r){a.e(r)}finally{a.f()}ee(t)}),[Ie]);var Te=function(e){var t=e.currentTarget.id;"gdp"===t?(pe(!0),ee(k),le("gdp per capita"),re([{x:.05,y:3.5},{x:2,y:6.6}])):pe(!1),"social"===t?(ye(!0),ee(H),le("social support"),re([{x:.05,y:3},{x:2,y:6}])):ye(!1),"healthy"===t?(ve(!0),ee(T),le("healthy"),re([{x:.05,y:2.7},{x:2,y:6.5}])):ve(!1),"freedom"===t?(we(!0),ee(G),le("freedom"),re([{x:.05,y:3.3},{x:2,y:6}])):we(!1),"generosity"===t?(Ce(!0),ee(J),le("generosity"),re([{x:.05,y:4.5},{x:2,y:6.5}])):Ce(!1),"perception"===t?(Be(!0),ee(q),le("perception"),re([{x:.05,y:4.5},{x:2,y:7}])):Be(!1)};return(r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.title},"World Happiness"),r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement(j.ComposableMap,{"data-tip":"",projectionConfig:{rotate:[-10,0,0],scale:120}},r.a.createElement(j.ZoomableGroup,null,r.a.createElement(j.Sphere,{stroke:"#E4E5E6",strokeWidth:.2}),r.a.createElement(j.Graticule,{stroke:"#E4E5E6",strokeWidth:.2}),156===e.reportData.length&&r.a.createElement(j.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(t){return t.geographies.map((function(t){var a=e.reportData.find((function(e){return e.country===t.properties.NAME}));return(r.a.createElement(j.Geography,{key:t.rsmKey,geography:t,fill:a?A(a.score):"white",onMouseEnter:function(){E("".concat(t.properties.NAME," - score: ").concat(a?a.score:"N/A")),Re(a?a.country:"")},onMouseLeave:function(){E(""),Re(""),f(""),i("")},style:{default:{outline:"none"},hover:{fill:a?A(a.score-.2):"white",outline:"none"},pressed:{fill:a?A(a.score-.2):"white",outline:"none"}}}))}))})))),r.a.createElement("div",{className:t.colorScale},r.a.createElement("p",null,"Low <- Happiness Index -> High"),r.a.createElement(O.Colorscale,{colorscale:z})),r.a.createElement(w.a,null,b)),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("div",{className:t.chart},r.a.createElement(N,{attr:d,score:c,setScore:i,setAttr:f,lineData:ne,chartData:$,setChartData:ee,chartXAxis:ie,selectedCountry:Ie,setSelectedCountry:Re})),r.a.createElement("div",{className:t.btnGroup},r.a.createElement(h.a,{variant:"contained",className:me?t.activeBtn:t.btn,onClick:Te,id:"gdp"},"GDP Per Capita"),r.a.createElement(h.a,{variant:"contained",className:fe?t.activeBtn:t.btn,onClick:Te,id:"social"},"Social Support"),r.a.createElement(h.a,{variant:"contained",className:Ee?t.activeBtn:t.btn,onClick:Te,id:"healthy"},"Healthy"),r.a.createElement(h.a,{variant:"contained",className:Oe?t.activeBtn:t.btn,onClick:Te,id:"freedom"},"Freedom"),r.a.createElement(h.a,{variant:"contained",className:Ne?t.activeBtn:t.btn,onClick:Te,id:"generosity"},"Generosity"),r.a.createElement(h.a,{variant:"contained",className:Ae?t.activeBtn:t.btn,onClick:Te,id:"perception"},"Perceptions")))))))}var H=Object(p.a)((function(e){return{content:{margin:e.spacing(5)},link:{color:"green",fontSize:24,textDecoration:"underline"}}}));function P(){var e=H();return(r.a.createElement("div",{className:"section"},r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:2}),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement("h4",null,"Resources"),r.a.createElement("div",{className:e.content},r.a.createElement("a",{className:e.link,href:"https://github.com/xiaoxianma/uiuc-dv-narrative-vis"},"Source Code")),r.a.createElement("div",{className:e.content},r.a.createElement("a",{className:e.link,href:"https://worldhappiness.report/ed/2020/"},"World Happiness Report 2019")),r.a.createElement("div",{className:e.content},r.a.createElement("a",{className:e.link,href:"https://kaggle.com/roshansharma/world-happiness-report"},"Kaggle Dataset 2019")),r.a.createElement("div",{className:e.content},r.a.createElement("a",{className:e.link,href:"https://github.com/alvarotrigo/fullPage.js"},"Fullpage.js for slide show"))),r.a.createElement(m.a,{item:!0,xs:2}))))}var I=a(740),R=a(332),T=a.n(R),K=a(333),L=a.n(K),W=a(334),G=a(335),F=a(338),M=a(336),V=function(e){Object(F.a)(a,e);var t=Object(M.a)(a);function a(){return Object(W.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"section"},r.a.createElement("h3",null,"Happiness Index Analysis"),r.a.createElement("p",null,"Created by Weidong Sun for CS498 Data Visualization"))}}]),a}(r.a.Component),J=Object(p.a)((function(e){return{description:{marginTop:e.spacing(3),textAlign:"left",fontSize:16}}}));function X(e){var t=J();return(r.a.createElement("div",{className:"section"},r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:3}),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("h4",null,"Happiness Index by Region"),r.a.createElement(g.b,{width:1200,height:600,data:e.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(g.g,{dataKey:"name",tick:""},r.a.createElement(g.c,{value:"Region",offset:0,position:"insideBottom",fill:"white",fontSize:20})),r.a.createElement(g.h,{label:{value:"Average Score",angle:-90,position:"insideLeft",fill:"white",fontSize:20}}),r.a.createElement(g.f,null),r.a.createElement(g.a,{dataKey:"score",fill:"#7c4dff"},r.a.createElement(g.d,{dataKey:"name",position:"top",fill:"#00e676"}))),r.a.createElement("p",{className:t.description},'"Australia and New Zealand" and "North America" are outstanding among the world, and they are the only regions the score is above 7.0. Asia and Africa are the low happiness regions, however Eastern Asia is a special region, which ranks the 4th happiness region.')),r.a.createElement(m.a,{item:!0,xs:3}))))}function Z(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),i=Object(u.a)(c,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){Object(I.a)(T.a).then((function(e){return o(e)})),Object(I.a)(L.a).then((function(e){var t,a=new Map,n=Object(s.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;a.hasOwnProperty(r.Region)?a.get(r.Region).push(parseFloat(r["Happiness Score"])):a.set(r.Region,[parseFloat(r["Happiness Score"])])}}catch(d){n.e(d)}finally{n.f()}var o,c=[],i=Object(s.a)(a.entries());try{for(i.s();!(o=i.n()).done;){var l=Object(u.a)(o.value,2),p=l[0],h=l[1];c.push({name:p,score:h.reduce((function(e,t){return e+t}))})}}catch(d){i.e(d)}finally{i.f()}c.sort((function(e,t){return t.score-e.score})),m(c)}))}),[]),console.log(a),r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(y,null),r.a.createElement(B,{reportData:a}),r.a.createElement(X,{data:l}),r.a.createElement(x,{reportData:a}),r.a.createElement(P,null))}var _=["title","introduction","world-happiness","region","country-rank","resources"],q=function(){return r.a.createElement(l.a,{navigation:!0,anchors:_,navigationTooltips:_,sectionsColor:["#282c34","#282c34","#282c34","#282c34","#282c34","#282c34"],onLeave:function(e,t,a){console.log("onLeave event",{origin:e,destination:t,direction:a})},render:function(e){var t=e.state,a=e.fullpageApi;return console.log("render prop change",t,a),r.a.createElement(Z,null)}})};c.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.e0ca1916.chunk.js.map