(this.webpackJsonpdiceka3=this.webpackJsonpdiceka3||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(47)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.b61bab35.png"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/math.5360fa44.jpg"},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),o=(a(18),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),h=a(10),d=(a(36),a(11));var f=a(12);function p(e){var t=[];return function e(a,n){for(var r,c=n||[],i=0;i<a.length;i++)r=a.splice(i,1),0===a.length&&t.push(c.concat(r)),e(a.slice(),c.concat(r)),a.splice(i,0,r[0]);return t}(e)}a(37);var v=function(e){return e.points_for_line.map((function(e,t){var a="M ".concat(e[0][0]," ").concat(e[0][1]," L ").concat(e[1][0]," ").concat(e[1][1]),n="rgb(129, 0, 0)",c="round",i=1,o=2;return t%2===0&&t%4!==0&&t%10!==0&&t%6!==0?(n="rgb(37, 0, 0)",c="square",i=-1,o=1):t%3===0&&t%6!==0?(n="rgb(37, 0, 194)",o=3):t%4===0?(n="rgb(244, 88, 112)",o=1.5):t%5===0?(n="rgb(67, 169, 112)",o=1.7):t%6===0&&(n="rgb(149, 0, 194)",o=1.8),r.a.createElement("g",{className:"dim t",key:t,fill:n,textAnchor:"middle"},r.a.createElement("path",{key:t,d:a,style:{stroke:"".concat(n),fill:"none",strokeWidth:"".concat(o),strokeLinecap:"".concat(c),strokeDasharray:"1,4"}}),r.a.createElement("text",{className:"t",key:t+1,x:(e[0][0]+e[1][0])/2,y:(e[0][1]+e[1][1])/2,dy:i*(15+t),dx:i*(15+t),fontWeight:"bold",fontFamily:"sans-serif",fontSize:"20px"},e[2]))}))},b=(a(38),function(e){for(var t=e.points,a=[],n=0;n<t.length;n++)a.push(r.a.createElement("g",{key:n,fontSize:"15",fontFamily:"sans-serif",textAnchor:"middle"},r.a.createElement("text",{className:"c",key:n,x:t[n][0],y:t[n][1],dy:"20",dx:"30"},"c",n+1)));return a}),E=(a(39),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).onCheatButt=function(){e.state.isClick?e.setState({isClick:!1}):e.setState({isClick:!0})},e.state={isClick:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"cheat"},r.a.createElement("button",{onClick:this.onCheatButt,className:"cheat grow shadow-1 f6 link  ba  ph3 pv2 mb2 dib br3"},"cheat"),this.state.isClick?r.a.createElement("div",null,r.a.createElement("h1",{id:"ans"},this.props.route," ",r.a.createElement("span",null,"\u0e14\u0e49\u0e27\u0e22\u0e04\u0e48\u0e32\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07\u0e04\u0e37\u0e2d")," ",this.props.min_distance)):"")}}]),t}(n.Component)),g=(a(40),function(e){var t=e.onGetLevel,a=t.easy,n=t.medium,c=t.hard;return r.a.createElement("div",{className:"flex",id:"btn_div"},r.a.createElement("button",{className:"btn grow shadow-1 f6 link dim ba ph3 pv2 mb2 dib br3",onClick:a},"easy"),r.a.createElement("button",{className:"btn grow shadow-1 f6 link dim ba  ph3 pv2 mb2 dib br3 ",onClick:n},"medium"),r.a.createElement("button",{className:"btn grow shadow-1 f6 link dim ba  ph3 pv2 mb2 dib br3 ",onClick:c},"hard"))}),k=(a(41),function(e){var t=e.size,a=e.level,n=e.onGetLevel,c=t.width,i=t.height,o=function(e,t,a){var n=t/4.5,r=a/3,c=n;4===e&&(n*=2);for(var i=r,o=[],l=1;l<=e;l++){var s=13.19*Math.random(),m=67.29*Math.random();e>=5&&2===l?o.push([c+s,3*(m+5)]):6===e&&5===l?o.push([c+s,a-(2*m+30)]):e>=5&&5===l?o.push([3*n,i+m]):4===e&&4===l?o.push([3*n,i+m]):o.push([c+s,i+m]),c+=n,3===l&&4!==e?(c=n,i+=r):4===e&&2===l&&(c=n/=2,i+=r)}return o}(a,c,i),l=o,s=function(e){var t=[];if(e)return e.forEach((function(a,n){for(var r=n;r<e.length;r++)if(r!==n){var c=e[r],i=Math.sqrt(Math.pow(a[0]+c[0],2)+Math.pow(a[1]+c[1],2));t.push([a,c,Math.round((i+31)%25)])}})),t}(o),m=function(e){var t=p(e),a=p(e.map((function(e,t){return"c".concat(t+1)})));t=(t=(t=t.map((function(e){for(var t=[],a=0;a<e.length-1;a++)t.push([e[a],e[a+1]]);return t}))).map((function(e){for(var t=[],a=0;a<e.length;a++){var n=Math.sqrt(Math.pow(e[a][0][0]+e[a][1][[0]],2)+Math.pow(e[a][0][1]+e[a][1][1],2));n=Math.round((n+31)%25,0),t.push(n)}return t}))).map((function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a];return t}));var n=Math.min.apply(Math,Object(f.a)(t));return[a[t.indexOf(n)],n]}(o),u=Object(d.a)(m,2),h=u[0],k=u[1];return o=o.map((function(e,t){return r.a.createElement("circle",{key:t,cx:e[0],cy:e[1],fill:"red",r:"7"})})),h=h.join(" -> "),r.a.createElement("div",null,r.a.createElement("svg",{width:c,height:i,id:"show"},r.a.createElement(b,{points:l}),r.a.createElement(v,{points_for_line:s}),o),r.a.createElement(g,{onGetLevel:n}),r.a.createElement(E,{route:h,min_distance:k}))}),w=(a(42),function(){return r.a.createElement("div",{id:"top",className:"shadow-5"},r.a.createElement("img",{src:a(43),alt:"logo",className:"logo"}),r.a.createElement("h2",{className:"grow h2"},"\u0e44\u0e14\u0e0b\u0e01\u0e49\u0e32"))}),y=(a(44),function(){return r.a.createElement("div",{id:"about"},r.a.createElement("h2",{className:"how"},"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e40\u0e25\u0e48\u0e19"),r.a.createElement("p",{className:"p"},"\u0e21\u0e35\u0e08\u0e38\u0e14\u0e2d\u0e22\u0e39\u0e48 4-6 \u0e08\u0e38\u0e14 \u0e04\u0e37\u0e2d c1,c2,...,c6 \u0e41\u0e25\u0e49\u0e27\u0e41\u0e15\u0e48\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e01 \u0e40\u0e25\u0e02\u0e1a\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e1b\u0e23\u0e30\u0e04\u0e37\u0e2d\u0e04\u0e48\u0e32\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07 \u0e43\u0e2b\u0e49\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e08\u0e19\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e08\u0e38\u0e14\u0e42\u0e14\u0e22\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e04\u0e37\u0e2d\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e2a\u0e35\u0e22\u0e04\u0e48\u0e32\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e15\u0e48\u0e33\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14"),r.a.createElement("p",null,"\u0e21\u0e35\u0e42\u0e2d\u0e01\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e08\u0e30\u0e21\u0e35\u0e2b\u0e25\u0e32\u0e22\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e19\u0e30 \u0e41\u0e04\u0e48\u0e02\u0e2d\u0e43\u0e2b\u0e49\u0e04\u0e48\u0e32\u0e1c\u0e48\u0e32\u0e19\u0e17\u0e32\u0e07\u0e40\u0e17\u0e48\u0e32\u0e01\u0e31\u0e19\u0e1e\u0e2d \u0e2d\u0e34\u0e2d\u0e34 \u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e04\u0e27\u0e23\u0e1b\u0e23\u0e31\u0e1a\u0e02\u0e19\u0e32\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d"),r.a.createElement("div",{id:"credit"},r.a.createElement("h2",{className:"how"},"\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a"),r.a.createElement("img",{src:a(45),alt:"math",className:"mathpic"}),r.a.createElement("p",{className:"p"},"\u0e40\u0e01\u0e21\u0e17\u0e35\u0e48\u0e14\u0e39\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e22\u0e32\u0e01\u0e2d\u0e30\u0e44\u0e23 \u0e41\u0e15\u0e48\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e19\u0e31\u0e49\u0e19\u0e04\u0e48\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19 \u0e41\u0e25\u0e30\u0e21\u0e35\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e32\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e48\u0e32\u0e2d\u0e31\u0e28\u0e08\u0e23\u0e23\u0e22\u0e4c \u0e42\u0e14\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e25\u0e48\u0e19\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e22\u0e32\u0e01 \u0e01\u0e23\u0e13\u0e35\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e21\u0e35\u0e16\u0e36\u0e07 720 \u0e01\u0e23\u0e13\u0e35\u0e04\u0e37\u0e2d 6! \u0e01\u0e23\u0e13\u0e35 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e1e\u0e01\u0e47\u0e21\u0e35\u0e04\u0e13\u0e34\u0e15\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e21\u0e32\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e2b\u0e49\u0e08\u0e38\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e20\u0e32\u0e22\u0e43\u0e19\u0e01\u0e23\u0e2d\u0e1a \u0e41\u0e25\u0e30\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d React \u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 \u0e0b\u0e36\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e2b\u0e31\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e08\u0e36\u0e07\u0e40\u0e08\u0e2d\u0e2d\u0e38\u0e1b\u0e2a\u0e23\u0e23\u0e04\u0e17\u0e35\u0e48\u0e04\u0e48\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e21\u0e32\u0e01"),r.a.createElement("p",{className:"p"},"\u0e20\u0e32\u0e04\u0e41\u0e21\u0e17 \u0e21\u0e2b\u0e34\u0e14\u0e25 61"),r.a.createElement("p",{className:"p"},"\u0e2b\u0e32\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32 \u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 \u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1c\u0e21 (\u0e22\u0e39\u0e42\u0e19\u0e30) 065-930-7037")))}),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onEasyLevel=function(){a.setState({n:4})},a.onMeduimLevel=function(){a.setState({n:5})},a.onHardLevel=function(){a.setState({n:6})},a.state={n:4,answer:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"all"},r.a.createElement(w,null),r.a.createElement("div",{className:"test"},r.a.createElement(h.SizeMe,{monitorHeight:!0},(function(t){var a=t.size;return r.a.createElement("div",{className:"test2 center shadow-5 bw-4 br4 dib"},r.a.createElement(k,{size:a,level:e.state.n,onGetLevel:{easy:e.onEasyLevel,medium:e.onMeduimLevel,hard:e.onHardLevel}}))}))),r.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.9e9214b8.chunk.js.map