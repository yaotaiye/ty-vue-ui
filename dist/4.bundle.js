(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,o,v){"use strict";v.r(o);var e=v(124),n=v(117);for(var _ in n)"default"!==_&&function(t){v.d(o,t,function(){return n[t]})}(_);var i=v(0),d=Object(i.a)(n.default,e.a,e.b,!1,null,"6d31d325",null);o.default=d.exports},117:function(t,o,v){"use strict";v.r(o);var e=v(118),n=v.n(e);for(var _ in e)"default"!==_&&function(t){v.d(o,t,function(){return e[t]})}(_);o.default=n.a},118:function(t,o,v){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"Dialog",data:function(){return{dialogVisible:!1,modal:!1}},mounted:function(){},methods:{open:function(){console.log("open")},close:function(){console.log("close")},opened:function(){console.log("opened")},closed:function(){console.log("closed")}}}},124:function(t,o,v){"use strict";var e=function(){var t=this,o=t.$createElement,v=t._self._c||o;return v("div",[v("div",{staticClass:"title"},[t._v("TyDialog弹框组件使用")]),t._v(" "),t._m(0),t._v(" "),v("ty-button",{attrs:{type:"primary"},on:{click:function(o){t.dialogVisible=!0}}},[t._v("显示弹框")]),t._v(" "),v("TyDialog",{attrs:{title:"提示",width:"30%",visible:t.dialogVisible,modal:"",center:""},on:{"update:visible":function(o){t.dialogVisible=o},open:t.open,close:t.close,opened:t.opened,closed:t.closed}},[v("span",[t._v("爱神的箭卡时间")]),t._v(" "),v("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[v("ty-button",{on:{click:function(o){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),v("ty-button",{attrs:{type:"primary"},on:{click:function(o){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)},n=[function(){var t=this,o=t.$createElement,v=t._self._c||o;return v("div",{staticClass:"describe"},[v("table",{staticClass:"ty-table"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("@open")]),t._v(" "),v("td",[t._v("弹框打开回调函数")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("@close")]),t._v(" "),v("td",[t._v("弹框关闭回调函数")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("@opened")]),t._v(" "),v("td",[t._v("弹框打开动画开始回调函数")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("@closed")]),t._v(" "),v("td",[t._v("弹框关闭动画结束回调函数")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("modal")]),t._v(" "),v("td",[t._v("布尔类型，是否开启遮罩层")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("center")]),t._v(" "),v("td",[t._v("布尔类型，是否标题按钮居中显示")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("title")]),t._v(" "),v("td",[t._v("标题")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("width")]),t._v(" "),v("td",[t._v("弹框宽度")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("visible")]),t._v(" "),v("td",[t._v("布尔类型，控制弹框显示")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])])])])])}];v.d(o,"a",function(){return e}),v.d(o,"b",function(){return n})}}]);