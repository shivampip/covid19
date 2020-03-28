(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{180:function(e,t,a){e.exports=a(380)},202:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(48),l=a.n(o),c=a(49),s=a(50),i=a(53),d=a(54),u=a(35),h=a.n(u),f=a(79),m=a(80),g=a.n(m),p=a(142),E=a.n(p).a.create({baseURL:"https://pkgstore.datahub.io/core/covid-19/"}),w=(a(202),a(8)),y=[],v=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={countries:[],selectedC:"India",rdata:[],data:null,totalConfiremd:0,totalDeath:0,wdata:[],wtc:0,wtd:0},e.getData=Object(f.a)(h.a.mark((function t(){var a,n,r,o,l,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Fetching Data"),t.next=3,E.get("countries-aggregated_json/data/14fece7bbf912fcd8e0fbe6ba2af9873/countries-aggregated_json.json");case 3:return a=t.sent,n=a.data,r=n.reduce((function(e,t){return-1===e.indexOf(t.Country)&&e.push(t.Country),e}),[]),t.next=8,E.get("worldwide-aggregated_json/data/017c259c1d8ed879992e09f43faeefa5/worldwide-aggregated_json.json");case 8:a=t.sent,console.log("Worldwide"),o=a.data,console.log(o),l=o[o.length-1]?o[o.length-1].Confirmed:0,c=o[o.length-1]?o[o.length-1].Deaths:0,e.setState({countries:r,rdata:n,wdata:o,wtc:l,wtd:c});case 15:case"end":return t.stop()}}),t)}))),e.renderGraph=function(t){console.log("Rendering Graph"),y=(y=e.state.rdata.filter((function(e){return e.Country===t}))).filter((function(e){return e.Deaths>0})),console.log("Country data"),console.log(y),console.log("Total confirmed");var a=y[y.length-1]?y[y.length-1].Confirmed:0,n=y[y.length-1]?y[y.length-1].Deaths:0;console.log(a),e.setState({selectedC:t,data:y,totalConfiremd:a,totalDeath:n})},e.renderCountries=function(){return e.state.countries.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:return e.next=4,this.renderGraph(this.state.selectedC);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("RENDERING"),null===this.state.data&&this.renderGraph(this.state.selectedC),r.a.createElement("div",{className:"live-area"},r.a.createElement("select",{value:this.state.selectedC,onChange:function(t){console.log(t.target.value),e.renderGraph(t.target.value)}},this.renderCountries()),r.a.createElement("h3",null,"Total Confirmed Cases: ",this.state.totalConfiremd),r.a.createElement("h3",null,"Total Deaths: ",this.state.totalDeath),r.a.createElement(w.b,{width:.7*window.innerWidth,height:300,data:this.state.data,margin:{top:20,right:10,left:10,bottom:0}},r.a.createElement(w.c,{strokeDasharray:"2 2"}),r.a.createElement(w.e,{dataKey:"Date",tickFormatter:function(e){return g()(e).format("YYYY-MM-DD")}}),r.a.createElement(w.f,null),r.a.createElement(w.d,null),r.a.createElement(w.a,{type:"monotone",dataKey:"Deaths",stackId:"1",stroke:"#3ac798",fill:"#ff0026"}),r.a.createElement(w.a,{type:"monotone",dataKey:"Confirmed",stackId:"1",stroke:"#3ac798",fill:"#3ac798"})),r.a.createElement("hr",null),r.a.createElement("h2",null,"Worldwide"),r.a.createElement("h3",null,"Total Confirmed Cases: ",this.state.wtc),r.a.createElement("h3",null,"Total Deaths: ",this.state.wtd),r.a.createElement(w.b,{width:.7*window.innerWidth,height:300,data:this.state.wdata,margin:{top:20,right:10,left:10,bottom:0}},r.a.createElement(w.c,{strokeDasharray:"2 2"}),r.a.createElement(w.e,{dataKey:"Date",tickFormatter:function(e){return g()(e).format("YYYY-MM-DD")}}),r.a.createElement(w.f,null),r.a.createElement(w.d,null),r.a.createElement(w.a,{type:"monotone",dataKey:"Deaths",stackId:"1",stroke:"#3ac798",fill:"#ff0026"}),r.a.createElement(w.a,{type:"monotone",dataKey:"Confirmed",stackId:"1",stroke:"#3ac798",fill:"#3ac798"})))}}]),a}(n.PureComponent);v.jsfiddleUrl="https://jsfiddle.net/alidingling/c1rLyqj1/";a(379);var C=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{id:"title"},"COVID-19 Live Update"),r.a.createElement(v,null),r.a.createElement("h1",null,"Stay Home, Stay Safe"),r.a.createElement("p",{id:"credit"},"Data source ",r.a.createElement("a",{href:"https://datahub.io/"},"DataHub"))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(C,null),document.querySelector("#root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.0abcd360.chunk.js.map