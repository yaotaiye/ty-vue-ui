(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(t,s,a){"use strict";a.r(s);var l=a(106),i=a.n(l);for(var o in l)"default"!==o&&function(t){a.d(s,t,function(){return l[t]})}(o);s.default=i.a},106:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Grid"}},118:function(t,s,a){"use strict";var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"title"},[t._v("固定网格")]),t._v(" "),a("p",{staticClass:"describe"},[t._v("\n        整个网格系统，一共12格子,通过设置TyCol的 col 属性值，可按比例划分网格。\n    ")]),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("col-4")])]),t._v(" "),a("TyCol",{attrs:{col:"6"}},[a("div",{staticClass:"demo-col"},[t._v("col-6")])]),t._v(" "),a("TyCol",{attrs:{col:"2"}},[a("div",{staticClass:"demo-col"},[t._v("col-2")])])],1),t._v(" "),a("TyRow",[a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("col-3")])]),t._v(" "),a("TyCol",{attrs:{col:"2"}},[a("div",{staticClass:"demo-col"},[t._v("col-2")])]),t._v(" "),a("TyCol",{attrs:{col:"7"}},[a("div",{staticClass:"demo-col"},[t._v("col-7")])])],1),t._v(" "),a("TyRow",[a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("col-1")])]),t._v(" "),a("TyCol",{attrs:{col:"11"}},[a("div",{staticClass:"demo-col"},[t._v("col-11")])])],1)],1),t._v(" "),a("div",{staticClass:"title"},[t._v("平分网格")]),t._v(" "),a("p",{staticClass:"describe"},[t._v("传统的12网格，无法做到分为5等分，但这里使用了flex弹性布局，可以设置，在没有设置col的情况下，视为平分网格。")]),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",[a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("50%")])]),t._v(" "),a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("50%")])])],1),t._v(" "),a("TyRow",[a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("20%")])]),t._v(" "),a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("20%")])]),t._v(" "),a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("20%")])]),t._v(" "),a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("20%")])]),t._v(" "),a("TyCol",[a("div",{staticClass:"demo-col"},[t._v("20%")])])],1)],1),t._v(" "),a("div",{staticClass:"title"},[t._v("设置网格间隙")]),t._v(" "),a("p",{staticClass:"describe"},[t._v("网格固定的间隙有10，15，20像素，在TyRow设置gridSpace的值。")]),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{attrs:{gridSpace:"10"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-10")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-10")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-10")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{attrs:{gridSpace:"15"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-15")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-15")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-15")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{attrs:{gridSpace:"20"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-20")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-20")])]),t._v(" "),a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("grid-space-20")])])],1)],1),t._v(" "),a("div",{staticClass:"title"},[t._v("网格水平内容分布")]),t._v(" "),a("p",{staticClass:"describe"},[t._v("\n        水平内容布局，通过设置TyRow的justifyContent属性值，可到达居中、靠前、靠后、平均间隙等效果。\n    ")]),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",attrs:{justifyContent:"start"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("start内容靠前")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",attrs:{justifyContent:"center"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("center内容居中")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",attrs:{justifyContent:"end"}},[a("TyCol",{attrs:{col:"4"}},[a("div",{staticClass:"demo-col"},[t._v("end内容靠尾")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",attrs:{justifyContent:"between"}},[a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("between内容间距平分")])]),t._v(" "),a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("between内容间距平分")])]),t._v(" "),a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("between内容间距平分")])])],1)],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",attrs:{justifyContent:"around"}},[a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("around内容左右间距平分")])]),t._v(" "),a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("around内容左右间距平分")])]),t._v(" "),a("TyCol",{attrs:{col:"3"}},[a("div",{staticClass:"demo-col"},[t._v("around内容左右间距平分")])])],1)],1),t._v(" "),a("div",{staticClass:"title"},[t._v("网格垂直内容分布")]),t._v(" "),a("p",{staticClass:"describe"},[t._v(" 垂直内容布局，通过设置TyRow的alignIitems属性值，可到达上下居中、顶对齐、底对齐等效果。")]),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",staticStyle:{height:"100px"},attrs:{alignIitems:"start"}},[a("div",{staticClass:"demo-col col-3"},[t._v("start内容靠前")]),t._v(" "),a("div",{staticClass:"demo-col col-3",staticStyle:{height:"60px"}})])],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",staticStyle:{height:"100px"},attrs:{alignIitems:"center"}},[a("div",{staticClass:"demo-col col-3"},[t._v("center")]),t._v(" "),a("div",{staticClass:"demo-col col-3",staticStyle:{height:"60px"}})])],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",staticStyle:{height:"100px"},attrs:{alignIitems:"baseline"}},[a("div",{staticClass:"demo-col col-3"},[t._v("baseline")]),t._v(" "),a("div",{staticClass:"demo-col col-3",staticStyle:{height:"60px"}})])],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",staticStyle:{height:"100px"},attrs:{alignIitems:"end"}},[a("div",{staticClass:"demo-col col-3"},[t._v("end")]),t._v(" "),a("div",{staticClass:"demo-col col-3",staticStyle:{height:"60px"}})])],1),t._v(" "),a("div",{staticClass:"bd-example-row mt-10"},[a("TyRow",{staticClass:"bd-highlight",staticStyle:{height:"100px"},attrs:{alignIitems:"stretch"}},[a("div",{staticClass:"demo-col col-3"},[t._v("stretch")]),t._v(" "),a("div",{staticClass:"demo-col col-3",staticStyle:{height:"60px"}})])],1)])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"ty-table"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("col")]),t._v(" "),a("td",[t._v("网格比例")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("1/2/3/4/5/6/7/8/9/10/11")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[t._v("gridSpace")]),t._v(" "),a("td",[t._v("网格间隙")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("10/15/20")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[t._v("justifyContent")]),t._v(" "),a("td",[t._v("网格水平内容分布")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("start/center/end/between/around")]),t._v(" "),a("td",[t._v("---")])]),t._v(" "),a("tr",[a("td",[t._v("alignIitems")]),t._v(" "),a("td",[t._v("网格垂直内容分布")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("start/center/end/baseline/stretch")]),t._v(" "),a("td",[t._v("---")])])])])}];a.d(s,"a",function(){return l}),a.d(s,"b",function(){return i})},98:function(t,s,a){"use strict";a.r(s);var l=a(118),i=a(105);for(var o in i)"default"!==o&&function(t){a.d(s,t,function(){return i[t]})}(o);var c=a(0),v=Object(c.a)(i.default,l.a,l.b,!1,null,"1edbba8c",null);s.default=v.exports}}]);