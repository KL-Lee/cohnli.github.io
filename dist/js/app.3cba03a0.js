(function(e){function t(t){for(var l,n,i=t[0],o=t[1],m=t[2],u=0,h=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);c&&c(t);while(h.length)h.shift()();return r.push.apply(r,m||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},s={app:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/tfsvrmonitor/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var c=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var l=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("div",{staticStyle:{position:"absolute","margin-left":"800px","margin-top":"20px","margin-buttom":"10px"}},[a("el-container",[a("el-alert",{staticStyle:{"margin-bottom":"17px"},attrs:{type:"info",effect:"dark",closable:!1,"show-icon":""}},[a("template",{slot:"title"},[a("div",{staticStyle:{"margin-top":"10px"}},[e._v("模型调用量 -- 模型访问量qpm,成功数和失败数,命中Cache量")]),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("模型资源使用量 -- 分IP展示GPU使用率和显存使用率及总和")]),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("机器资源使用情况 -- 调用量qpm,成功数和失败数,CPU与GPU使用率")]),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("----------缺项数据采用补零操作,总和非平均,请知悉--------")])])],2)],1)],1),a("div",{staticStyle:{"margin-left":"80px","margin-top":"20px","margin-buttom":"10px"}},[a("el-container",[a("el-aside",{attrs:{width:"40%"}},[a("el-form",{ref:"form",attrs:{model:e.form,"status-icon":"","label-width":"96px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"查询时间"}},[a("el-date-picker",{attrs:{type:"datetimerange",align:"left","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":["10:00:00","12:00:00"]},on:{blur:e.getquerytime},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("el-form-item",{attrs:{label:"查询类型"}},[a("el-select",{staticStyle:{width:"250px","text-align-last":"center"},attrs:{"allow-create":"",filterable:"","default-first-option":""},model:{value:e.form.func,callback:function(t){e.$set(e.form,"func",t)},expression:"form.func"}},e._l(e.funcOptions,(function(e){return a("el-option",{key:e.value,staticStyle:{"text-align-last":"center"},attrs:{label:e.label,value:e.value}})})),1)],1),"GetModelState"==e.form.func?a("el-form-item",{attrs:{label:"数据类型"}},[a("el-select",{staticStyle:{width:"250px","text-align-last":"center"},attrs:{"allow-create":"",filterable:"","default-first-option":""},model:{value:e.form.show_type,callback:function(t){e.$set(e.form,"show_type",t)},expression:"form.show_type"}},e._l(e.modelOptions,(function(e){return a("el-option",{key:e.value,staticStyle:{"text-align-last":"center"},attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"GetMachineState"==e.form.func?a("el-form-item",{attrs:{label:"数据类型"}},[a("el-select",{staticStyle:{width:"250px","text-align-last":"center"},attrs:{"allow-create":"",filterable:"","default-first-option":""},model:{value:e.form.mac_type,callback:function(t){e.$set(e.form,"mac_type",t)},expression:"form.mac_type"}},e._l(e.machineOptions,(function(e){return a("el-option",{key:e.value,staticStyle:{"text-align-last":"center"},attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"GetModelState"==e.form.func?a("el-form-item",{attrs:{label:"目标模型"}},[a("el-select",{staticStyle:{width:"250px","text-align-last":"center"},attrs:{"allow-create":"",filterable:"","default-first-option":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},e._l(e.modelnameOptions,(function(e){return a("el-option",{key:e.value,staticStyle:{"text-align-last":"center"},attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),"GetMachineState"==e.form.func?a("el-form-item",{attrs:{label:"目标机器"}},[a("el-select",{staticStyle:{width:"250px","text-align-last":"center"},attrs:{"allow-create":"",filterable:"","default-first-option":""},model:{value:e.form.machineip,callback:function(t){e.$set(e.form,"machineip",t)},expression:"form.machineip"}},e._l(e.machineIpOptions,(function(e){return a("el-option",{key:e.value,staticStyle:{"text-align-last":"center"},attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit",icon:"el-icon-search",loading:!1},on:{click:e.TfsvronQuery}},[e._v("查询")])],1)],1)],1)],1)],1),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"960px",height:"600px",float:"left","margin-top":"50px","margin-left":"80px"},attrs:{id:"chart_1"}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"960px",height:"600px",float:"left","margin-top":"50px","margin-left":"80px"},attrs:{id:"chart_2"}})])},r=[],n=(a("4160"),a("a630"),a("b0c0"),a("4ec9"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2909")),i=a("bc3a"),o=a.n(i),m=a("5c96"),c=a.n(m);o.a.defaults.withCredentials=!0;var u=o.a.create({headers:{"X-Requested-With":"XMLHttpRequest"},timeout:3e4});u.interceptors.request.use((function(e){return e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=!1;return t?new Promise((function(){})):e}),(function(e){console.log(e),console.log("err"+e);var t=!1,a=e.response&&e.response.data||e.message;return void 0!==e.response&&void 0!==e.response.status&&401===e.response.status&&(a="登录态过期，请退出后再登录"),t||Object(m["Message"])({message:a,type:"error",duration:5e3}),Promise.reject(e)}));var h=u,_="/datalogicsvr/tfsvrmonitor";function f(e){return h({url:_,method:"post",data:e})}var d={data:function(){return{form:{func:"GetModelState",name:"",machineip:"",start_time:"",end_time:"",show_type:"",mac_type:""},funcOptions:[{value:"GetModelState",label:"模型(Model)状态查询"},{value:"GetMachineState",label:"机器(Machine)状态查询"}],modelOptions:[{value:"call",label:"模型(Model)被调用情况"},{value:"resouse",label:"模型(Model)资源使用量"},{value:"todo",label:"todo"}],machineOptions:[{value:"m_resouse",label:"机器(Machine)资源使用量"},{value:"wrong_call",label:"机器(Machine)错误调用量"},{value:"todo",label:"todo"}],modelnameOptions:[{value:"widget_house_price_intention",label:"widget_house_price_intention"},{value:"lc_beta6",label:"lc_beta6"},{value:"lc_beta8",label:"lc_beta8"},{value:"lc_beta18",label:"lc_beta18"},{value:"antispam_ad_overfeat",label:"antispam_ad_overfeat"},{value:"emo_resnet_model",label:"emo_resnet_model"},{value:"emo_movie_tag",label:"emo_movie_tag"},{value:"dien_v1",label:"dien_v1"},{value:"dien_v2",label:"dien_v2"},{value:"comment_sentiment_analysis_model",label:"comment_sentiment_analysis_model"},{value:"yoda_vip_category_ranking_model_tf",label:"yoda_vip_category_ranking_model_tf"},{value:"region_cls",label:"region_cls"},{value:"music_slot",label:"music_slot"},{value:"biz_recall",label:"biz_recall"},{value:"dien_v3",label:"dien_v3"},{value:"facenet",label:"facenet"},{value:"widget_stock_embedding",label:"widget_stock_embedding"},{value:"addrmatch_qa",label:"addrmatch_qa"},{value:"mp_title_low_lstm_model_tf",label:"mp_title_low_lstm_model_tf"},{value:"dien_v4",label:"dien_v4"},{value:"query_low_lstm_model_tf",label:"query_low_lstm_model_tf"},{value:"wenwen_intention_bert",label:"wenwen_intention_bert"},{value:"clickbait_unclear_refer_bert",label:"clickbait_unclear_refer_bert"},{value:"medical_qa_mismatch_bert",label:"medical_qa_mismatch_bert"},{value:"ex_ctr",label:"ex_ctr"},{value:"dien_v5",label:"dien_v5"},{value:"dien_v6",label:"dien_v6"},{value:"dien_v7",label:"dien_v7"},{value:"dien_v8",label:"dien_v8"},{value:"static_high_score_model",label:"static_high_score_model"},{value:"dmb_video_fm",label:"dmb_video_fm"},{value:"intent_generate",label:"intent_generate"},{value:"faceboxes",label:"faceboxes"},{value:"ver_query_disc",label:"ver_query_disc"},{value:"mlm_video",label:"mlm_video"},{value:"query_anchor",label:"query_anchor"},{value:"intent_personalization",label:"intent_personalization"},{value:"deep_fm_hint",label:"deep_fm_hint"},{value:"seq_drop",label:"seq_drop"},{value:"wenwen_qa_mismatch_bert",label:"wenwen_qa_mismatch_bert"},{value:"baike_contentdnn_coarse",label:"baike_contentdnn_coarse"},{value:"baike_contentdnn_fine",label:"baike_contentdnn_fine"},{value:"query_low_bert_model",label:"query_low_bert_model"},{value:"sogou_page_low_bert_model",label:"sogou_page_low_bert_model"},{value:"drmm",label:"drmm"},{value:"yyb_rerank_tf_model",label:"yyb_rerank_tf_model"},{value:"mp_title_low_lstm_multicls",label:"mp_title_low_lstm_multicls"},{value:"feibiliu_tagging",label:"feibiliu_tagging"},{value:"what_embedding",label:"what_embedding"},{value:"query_cheat_bert",label:"query_cheat_bert"},{value:"what_jiazheng_intention",label:"what_jiazheng_intention"}],machineIpOptions:[{value:"9.24.22.189",label:"mmsearchtfsvrshs6000da30(9.24.22.189)"},{value:"9.54.141.115",label:"mmsearchtfsvrshs6000dc17(9.54.141.115)"},{value:"100.96.24.159",label:"mmsearchtfsvrshs6000da25(100.96.24.159)"},{value:"100.96.24.160",label:"mmsearchtfsvrshs10000da28(100.96.24.160)"},{value:"10.51.214.59",label:"mmsearchtfsvrshs10000dc21(10.51.214.59)"},{value:"9.107.29.242",label:"mmsearchtfsvrshs10000db44(9.107.29.242)"},{value:"9.107.29.199",label:"mmsearchtfsvrshs11000db42(9.107.29.199)"},{value:"10.50.215.114",label:"mmsearchtfsvrshs11000dc19(10.50.215.114)"},{value:"9.24.16.231",label:"mmsearchtfsvrshs11000da26(9.24.16.231)"},{value:"9.114.24.163",label:"mmsearchtfsvrshs13000da36(9.114.24.163)"},{value:"9.114.24.180",label:"mmsearchtfsvrshs13000da35(9.114.24.180)"},{value:"9.107.15.157",label:"mmsearchtfsvrshs13000db46(9.107.15.157)"},{value:"9.114.16.181",label:"mmsearchtfsvrshs7000da22(9.114.16.181)"},{value:"9.107.30.107",label:"mmsearchtfsvrshs7000db38(9.107.30.107)"},{value:"9.24.25.194",label:"mmsearchtfsvrshs12000da33(9.24.25.194)"},{value:"9.54.141.14",label:"mmsearchtfsvrshs5000dc16(9.54.141.14)"},{value:"9.107.29.208",label:"mmsearchtfsvrshs2000db34(9.107.29.208)"},{value:"9.114.29.107",label:"mmsearchtfsvrshs1000da14(9.114.29.107)"},{value:"9.114.29.10",label:"mmsearchtfsvrshs15000da37(9.114.29.10)"},{value:"9.54.8.226",label:"mmsearchtfsvrshs9000dc18(9.54.8.226)"},{value:"9.54.141.238",label:"mmsearchtfsvrshs4000dc14(9.54.141.238)"},{value:"9.114.25.185",label:"mmsearchtfsvrshs2000da11(9.114.25.185)"},{value:"9.107.163.76",label:"mmsearchtfsvrshs15000db47(9.107.163.76)"},{value:"9.54.147.160",label:"mmsearchtfsvrshs3000dc13(9.54.147.160)"},{value:"9.107.169.26",label:"mmsearchtfsvrshs1000db31(9.107.169.26)"},{value:"9.114.24.157",label:"mmsearchtfsvrshs8000da34(9.114.24.157)"},{value:"9.114.33.159",label:"mmsearchtfsvrshs4000da21(9.114.33.159)"},{value:"9.114.133.56",label:"mmsearchtfsvrshs12000da29(9.114.133.56)"},{value:"10.50.215.79",label:"mmsearchtfsvrshs2000dc11(10.50.215.79)"},{value:"9.24.39.221",label:"mmsearchtfsvrshs5000da31(9.24.39.221)"},{value:"9.51.4.56",label:"mmsearchtfsvrshs0dc4(9.51.4.56)"},{value:"9.51.130.227",label:"mmsearchtfsvrshs1000dc3(9.51.130.227)"},{value:"9.107.170.6",label:"mmsearchtfsvrshs3000db36(9.107.170.6)"},{value:"10.50.216.86",label:"mmsearchtfsvrshs8000dc20(10.50.216.86)"},{value:"9.189.140.40",label:"mmsearchtfsvrshs15000dc23(9.189.140.40)"},{value:"100.96.11.167",label:"mmsearchtfsvrshs5000da23(100.96.11.167)"},{value:"9.24.16.124",label:"mmsearchtfsvrshs9000da24(9.24.16.124)"},{value:"9.189.140.36",label:"mmsearchtfsvrshs14000dc24(9.189.140.36)"},{value:"100.96.20.22",label:"mmsearchtfsvrshs8000da27(100.96.20.22)"},{value:"9.114.29.100",label:"mmsearchtfsvrshs14000da38(9.114.29.100)"},{value:"9.24.39.239",label:"mmsearchtfsvrshs4000da32(9.24.39.239)"},{value:"9.54.8.252",label:"mmsearchtfsvrshs3000dc12(9.54.8.252)"},{value:"9.107.169.15",label:"mmsearchtfsvrshs0db19(9.107.169.15)"},{value:"10.50.83.245",label:"mmsearchtfsvrshs12000dc22(10.50.83.245)"},{value:"9.107.15.177",label:"mmsearchtfsvrshs14000db48(9.107.15.177)"},{value:"9.54.8.229",label:"mmsearchtfsvrshs7000dc15(9.54.8.229)"},{value:"9.107.29.220",label:"mmsearchtfsvrshs9000db41(9.107.29.220)"},{value:"9.114.29.97",label:"mmsearchtfsvrshs0da9(9.114.29.97)"}],value1:"",loading:!1,result:""}},methods:{getquerytime:function(){var e=this;if(this.value1){var t=Object(n["a"])(this.value1);t.forEach((function(t,a){a?e.form.end_time=t.getTime()/1e3:e.form.start_time=t.getTime()/1e3}))}},drawchart_model_call:function(e,t,a){var l=this.$echarts.init(document.getElementById("chart_1")),s=this.$echarts.init(document.getElementById("chart_2")),r={title:{text:t.title,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"10%",left:"6%",right:"2%",bottom:"5%"},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:[{name:t.one.name,data:t.one,type:"line"},{itemStyle:{normal:{lineStyle:{color:"#3fa7dc"}}},name:t.two.name,data:t.two,type:"line"},{name:t.three.name,data:t.three,type:"line"}]};l.setOption(r);var n={title:{text:a.title,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"10%",left:"6%",right:"2%",bottom:"5%"},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:[{name:a.one.name,data:a.one,type:"line"},{itemStyle:{normal:{lineStyle:{color:"#3fa7dc"}}},name:a.two.name,data:a.two,type:"line"},{name:a.three.name,data:a.three,type:"line"}]};s.setOption(n)},drawchart:function(e,t,a,l){var s=this.$echarts.init(document.getElementById("chart_1")),r=this.$echarts.init(document.getElementById("chart_2")),n={title:{text:l.one,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"10%",left:"6%",right:"2%",bottom:"5%"},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:t};s.setOption(n);var i={title:{text:l.two,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{top:"10%",left:"6%",right:"2%",bottom:"5%"},xAxis:{type:"category",data:e},yAxis:{type:"value"},series:a};r.setOption(i)},setchartdata:function(e){var t=this,a=JSON.parse(e.jsonResp);if("call"==this.form.show_type){for(var l=[],s=0,r=a.states.length;s<r;s++)l[s]=a.states[s].str_start_time;for(var n={one:[],two:[],three:[],title:""},i={one:[],two:[],three:[],title:""},o=0,m=a.states.length;o<m;o++)n.one[o]=a.states[o].state.qpm,n.two[o]=a.states[o].state.success_times,n.three[o]=a.states[o].state.fail_times,i.one[o]=a.states[o].state.hit_cache_times,i.two[o]=a.states[o].state.qpm-a.states[o].state.hit_cache_times,i.three[o]=a.states[o].state.success_avg_cost_time;n.title="模型调用情况",n.one.name="调用总数",n.two.name="调用成功",n.three.name="调用失败",i.title="Cache命中数量与耗时",i.one.name="命中",i.two.name="未命中",i.three.name="命中时耗时",this.drawchart_model_call(l,n,i)}if("resouse"==this.form.show_type&&function(){for(var e=new Map,l="",s="",r="",n=[],i={one:[],two:[]},o=0,m=a.gpu_states.length;o<m;o++){n[o]=a.gpu_states[o].str_start_time,i.one[o]=0,i.two[o]=0;for(var c=0,u=a.gpu_states[o].gpu_state.length;c<u;c++){if(l=a.gpu_states[o].gpu_state[c].machine_ip,s=String(a.gpu_states[o].gpu_state[c].gpu_id),r=l+"__gpu_"+s+"__",e.has(r))e.get(r).one.push(a.gpu_states[o].gpu_state[c].gpu_rate),e.get(r).two.push(a.gpu_states[o].gpu_state[c].gpu_memory_rate);else{for(var h={one:[],two:[]},_=0,f=n.length-1;_<f&&1!=n.length;_++)h.one.push(0),h.two.push(0);h.one.push(a.gpu_states[o].gpu_state[c].gpu_rate),h.two.push(a.gpu_states[o].gpu_state[c].gpu_memory_rate),e.set(r,h)}i.one[o]+=a.gpu_states[o].gpu_state[c].gpu_rate,i.two[o]+=a.gpu_states[o].gpu_state[c].gpu_memory_rate}e.forEach((function(e,t){e.one.length!=n.length&&(e.one.length==n.length-1&&e.one.push(0),e.two.length!=n.length&&e.two.length==n.length-1&&e.two.push(0))}))}var d=[],v=[],p={name:"Gpu使用率总和",type:"line",data:i.one},b={name:"显存使用率总和",type:"line",data:i.two};d.push(p),v.push(b),e.forEach((function(e,t){var a={name:t,type:"line",data:e.one},l={name:t,type:"line",data:e.two};d.push(a),v.push(l)}));var g={one:"模型GPU使用率",two:"模型GPU显存使用率"};t.drawchart(n,d,v,g)}(),"m_resouse"==this.form.mac_type){for(var c=[],u=0,h=a.machine_states.length;u<h;u++)c[u]=a.machine_states[u].str_start_time;for(var _={one:[],two:[],three:[],title:""},f={one:[],two:[],three:[],title:""},d=0,v=a.machine_states.length;d<v;d++)"machine_state"in a.machine_states[d]?(_.one[d]=a.machine_states[d].machine_state.total_qp,_.two[d]=a.machine_states[d].machine_state.success_times,_.three[d]=a.machine_states[d].machine_state.fail_times,f.one[d]=a.machine_states[d].machine_state.cpu_rate,"gpu_states"in a.machine_states[d].machine_state?(f.two[d]=a.machine_states[d].machine_state.gpu_states[0].gpu_rate,f.three[d]=a.machine_states[d].machine_state.gpu_states[1].gpu_rate):(f.two[d]=0,f.three[d]=0)):(_.one[d]=0,_.two[d]=0,_.three[d]=0,f.one[d]=0,f.two[d]=0,f.three[d]=0);_.title="机器调用情况",_.one.name="调用总数",_.two.name="调用成功",_.three.name="调用失败",f.title="机器资源使用情况",f.one.name="CPU使用率",f.two.name="GPU_0_使用率",f.three.name="GPU_1_使用率",this.drawchart_model_call(c,_,f)}"wrong_call"==this.form.mac_type&&function(){console.log("data_show: \n",a);for(var e=new Map,l=[],s=[],r=[],n=0,i=a.states.length;n<i;n++){l[n]=a.states[n].str_start_time;for(var o=0,m=a.states[n].state.length;o<m;o++){if(key=a.states[n].state[o].model_name,e.has(key))e.get(key).qpm.push(a.states[n].state[o].qpm),e.get(key).suc.push(a.states[n].state[o].success_times),e.get(key).fail.push(a.states[n].state[o].fail_times);else{for(var c={qpm:[],suc:[],fail:[]},u=0,h=l.length-1;u<h&&1!=l.length;u++)c.qpm.push(0),c.suc.push(0),c.fail.push(0);c.qpm.push(a.states[n].state[o].qpm),c.suc.push(a.states[n].state[o].success_times),c.fail.push(a.states[n].state[o].fail_times),e.set(key,c)}"fail_sum"in e.get(key)||(e.get(key).fail_sum=a.states[n].state[o].fail_times),e.get(key).fail_sum+=a.states[n].state[o].fail_times}e.forEach((function(e,t){e.qpm.length!=l.length&&(e.qpm.length==l.length-1&&e.qpm.push(0),e.suc.length!=l.length&&(e.suc.length==l.length-1&&e.suc.push(0),e.fail.length!=l.length&&e.fail.length==l.length-1&&e.fail.push(0)))}))}var _=Array.from(e);_.sort((function(e,t){return t[1].fail_sum-e[1].fail_sum}));for(var f=0,d=_.length;f<d;f++)if(0!=_[f][1].fail_sum){var v={name:_[f][0],type:"line",data:_[f][1].fail};s.push(v)}_.sort((function(e,t){return t[1].qpm[0]-e[1].qpm[0]}));for(var p=0,b=_.length;p<b;p++){var g={name:_[p][0],type:"line",data:_[p][1].qpm};r.push(g)}var y={one:"模型错误调用量(过滤总和为0的模型)",two:"模型总调用量qpm"};t.drawchart(l,s,r,y)}()},TfsvronQuery:function(){var e=this,t={};this.form.func?(t.func=this.form.func,"GetModelState"==t.func?(t.req_type=this.form.show_type,t.starttime=this.form.start_time,t.endtime=this.form.end_time,t.modelname=this.form.name,this.form.mac_type=""):"GetMachineState"==t.func&&(t.req_type=this.form.mac_type,t.starttime=this.form.start_time,t.endtime=this.form.end_time,t.machineip=this.form.machineip,this.form.show_type=""),this.loading=!0,f(t).then((function(t){e.loading=!1,console.log("response: \n",t),e.result=t.data,0===e.result.ret?(e.$echarts.init(document.getElementById("chart_1")).clear(),e.$echarts.init(document.getElementById("chart_2")).clear(),e.setchartdata(e.result)):window.alert("request fail!")}))):window.alert("请选择 func")}}},v=d,p=a("2877"),b=Object(p["a"])(v,s,r,!1,null,null,null),g=b.exports,y=(a("0fae"),a("8c4f"));l["default"].use(y["a"]);var w=new y["a"]({routes:[]});l["default"].use(c.a),l["default"].config.productionTip=!1,new l["default"]({render:function(e){return e(g)},router:w}).$mount("#app")}});