(this.webpackJsonpquill=this.webpackJsonpquill||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(52),i=a.n(o),s=(a(67),a(68),a(25)),c=a(53),l=a(54),p=a(60),u=a(59),h=a(55),m=function(e){return r.a.createElement(h.a,{data:e.data,options:e.options})},d=a(180),b=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=new WebSocket("wss://ws-feed.pro.coinbase.com");e.onopen=function(){e.send(JSON.stringify({type:"subscribe",product_ids:["BTC-USD"],channels:["level2","heartbeat",{name:"ticker",product_ids:["BTC-USD"]}]}))},e.onmessage=function(e){var t=JSON.parse(e.data);if("ticker"===t.type){console.log(t);var a=n.state.lineChartData.datasets[0],r=Object(s.a)({},a);r.data.push(t.price),n.setState({price:t.price});var o=Object(s.a)(Object(s.a)({},n.state.lineChartData),{},{datasets:[r],labels:n.state.lineChartData.labels.concat((new Date).toLocaleTimeString())});n.setState({lineChartData:o})}}},n.state={price:0,lineChartData:{labels:[],datasets:[{type:"line",label:"BTC-USD",backgroundColor:"rgba(0, 0, 0, 0)",borderColor:n.props.theme.palette.primary.main,pointBackgroundColor:n.props.theme.palette.secondary.main,pointBorderColor:n.props.theme.palette.secondary.main,borderWidth:"2",lineTension:.45,data:[]}]},lineChartOptions:{responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},scales:{xAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10}}]}}},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return 0!==this.state.price?r.a.createElement("div",{className:e["chart-container"]},r.a.createElement("h2",null,"Current BTC_USD is ",this.state.price),r.a.createElement(m,{data:this.state.lineChartData,options:this.state.lineChartOptions})):r.a.createElement("h1",null,"Wait.........")}}]),a}(n.Component),v=Object(d.a)((function(e){return{"chart-container":{height:500,width:"90%",margin:"auto"}}}),{withTheme:!0})(b);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(58),g=a(179),w=Object(C.a)();i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{theme:w},r.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,t,a){e.exports=a(166)},67:function(e,t,a){},68:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.491154b3.chunk.js.map