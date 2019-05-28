(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(t,e,v){"use strict";v.r(e);var _=v(148),n=v(138);for(var d in n)"default"!==d&&function(t){v.d(e,t,function(){return n[t]})}(d);var o=v(0),i=Object(o.a)(n.default,_.a,_.b,!1,null,"53df8746",null);e.default=i.exports},138:function(t,e,v){"use strict";v.r(e);var _=v(139),n=v.n(_);for(var d in _)"default"!==d&&function(t){v.d(e,t,function(){return _[t]})}(d);e.default=n.a},139:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Upload",data:function(){return{dialogVisible:!1,modal:!1,fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},mounted:function(){},methods:{handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){console.log(t.length+e.length+" 个文件")},beforeRemove:function(t,e){console.log("确定移除 "+t.name+"？")},handleChange:function(t,e){},handleSuccess:function(t,e){console.log(t)}}}},148:function(t,e,v){"use strict";var _=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[t._m(0),t._v(" "),v("TyUpload",{ref:"upload",attrs:{action:"https://jsonplaceholder.typicode.com/posts/",name:"file","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"file-list":t.fileList,multiple:"",limit:3,"on-change":t.handleChange}},[v("ty-button",{attrs:{type:"success"}},[t._v("上传")])],1)],1)},n=[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",{staticClass:"ty-table"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("action")]),t._v(" "),v("td",[t._v("必选参数，上传的地址\t")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("headers")]),t._v(" "),v("td",[t._v("设置上传头部")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("multiple")]),t._v(" "),v("td",[t._v("是否支持多文件上传")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("上传时附带的额外参数\t")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("name")]),t._v(" "),v("td",[t._v("上传的文件字段名\t")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("accept")]),t._v(" "),v("td",[t._v("接受上传的文件类型（thumbnail-mode 模式下此参数无效）")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-preview")]),t._v(" "),v("td",[t._v("点击文件列表中已上传的文件时的钩子")]),t._v(" "),v("td",[t._v("function(file)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-remove")]),t._v(" "),v("td",[t._v("文件列表移除文件时的钩子")]),t._v(" "),v("td",[t._v("function(file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-success")]),t._v(" "),v("td",[t._v("文件上传成功时的钩子\t")]),t._v(" "),v("td",[t._v("function(response, file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-error")]),t._v(" "),v("td",[t._v("文件上传失败时的钩子\t")]),t._v(" "),v("td",[t._v("function(err, file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-progress")]),t._v(" "),v("td",[t._v("文件上传时的钩子\t")]),t._v(" "),v("td",[t._v("function(event, file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-remove")]),t._v(" "),v("td",[t._v("文件列表移除文件时的钩子")]),t._v(" "),v("td",[t._v("function(file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("on-change")]),t._v(" "),v("td",[t._v("文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用")]),t._v(" "),v("td",[t._v("function(file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("before-upload")]),t._v(" "),v("td",[t._v("上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。")]),t._v(" "),v("td",[t._v("function(file)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("before-remove")]),t._v(" "),v("td",[t._v("删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。")]),t._v(" "),v("td",[t._v("function(file, fileList)")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("limit")]),t._v(" "),v("td",[t._v("最大允许上传个数\t")]),t._v(" "),v("td",[t._v("number")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("disabled")]),t._v(" "),v("td",[t._v("是否禁用")]),t._v(" "),v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("file-list")]),t._v(" "),v("td",[t._v("上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]")]),t._v(" "),v("td",[t._v("array")]),t._v(" "),v("td",[t._v("[]")])]),t._v(" "),v("tr",[v("td",[t._v("http-request")]),t._v(" "),v("td",[t._v("覆盖默认的上传行为，可以自定义上传的实现")]),t._v(" "),v("td",[t._v("function")]),t._v(" "),v("td",[t._v("--")])])])])}];v.d(e,"a",function(){return _}),v.d(e,"b",function(){return n})}}]);