/* index.js Date:2017-04-06 16:26:01 */
define("js/index.js",["filter.js","vue.js"],function(require,a,b){var c=require("filter.js");require("vue.js");var d={_init:function(){c.filter(),d.render()},render:function(){$.ajax({url:"https://una-jian.github.io/cx-vue/html/data/data.json",dataType:"JSON",type:"get"}).done(function(a){d.view(a)})},_xsyc:function(a,b,c,d,e){var g=a.decide[b];g.isA=c,g.isB=d,g.isC=e},view:function(a){var b={resume:a,expIten:{},education:{},zhengshu:{},langsha:{},decide:{base:{isA:!0,isB:!1},phone:{isA:!0,isB:!1},speople:{isA:!0,isB:!1,isC:!0},yixiang:{isA:!1,isB:!0,isC:!0},history_work_:{isA:!1,isB:!0,isC:!0},edu_history_:{isA:!1,isB:!0,isC:!0},train_:{isA:!1,isB:!0,isC:!0},language_:{isA:!1,isB:!0,isC:!0}}};new Vue({el:"#example",data:b,methods:{jb_aedit:function(){d._xsyc(this,"base",!1,!0),d.tagData(this.resume)},jx_send:function(){d._xsyc(this,"base",!0,!1)},jx_clear:function(){d._xsyc(this,"base",!0,!1),this.resume=d.resumeCfg()},phone_edit:function(){d._xsyc(this,"phone",!1,!0),d.tagData(this.resume),d.zhengze("#input_phone"),d.zhengze_em("#input_emali")},phone_send:function(){d._xsyc(this,"phone",!0,!1)},phone_clear:function(){d._xsyc(this,"phone",!0,!1),this.resume.phone=d.resumeCfg().phone},speo_big_edit:function(a){this.index=a,d._xsyc(this,"speople",!1,!0,!0),d.zhengze_num("#tizhong"),d.zhengze_num("#shengao")},speo_send:function(){d._xsyc(this,"speople",!0,!0,!1)},speo_edit:function(){this.index=0,d._xsyc(this,"speople",!1,!0,!0),d.tagData(this.resume),d.zhengze_num("#tizhong"),d.zhengze_num("#shengao")},speo_clear:function(){-99==this.index?(d._xsyc(this,"speople",!0,!1,!0),this.resume.people={}):(this.resume.people=d.resumeCfg().people,d._xsyc(this,"speople",!0,!0,!1))},yx_add:function(a){this.index=a,d._xsyc(this,"yixiang",!0,!1,!0),d.tagData(this.resume.intent),d.click_input(this.resume),d.zhengze_ch("#i_qwzw"),d.zhengze_ch("#i_qwxscp")},yx_quer:function(){d._xsyc(this,"yixiang",!0,!0,!1)},yx_quex:function(){-99==this.index?(this.resume.intent={},this.resume.intent.industry=[],this.resume.intent.area_province=[],this.resume.intent.sell_mode=[],d._xsyc(this,"yixiang",!1,!0,!0)):(this.resume.intent=d.resumeCfg().intent,d._xsyc(this,"yixiang",!0,!0,!1))},yx_edit:function(){this.index=0,d.click_input(this.resume),d.tagData(this.resume),d._xsyc(this,"yixiang",!0,!1,!0)},history_add:function(a){this.exp=a,this.expIten={},d._xsyc(this,"history_work_",!0,!1,!0)},history_add_:function(a){this.exp=a,this.expIten={},d._xsyc(this,"history_work_",!0,!1,!0)},job_quer:function(a){d._xsyc(this,"history_work_",!0,!0,!1);var b=this.resume.work_history;this.exp<0?b.push(a):this.resume.work_history[this.exp]=a},job_edit:function(a,b){d._xsyc(this,"history_work_",!0,!1,!0),this.expIten=a,this.exp=b;var c=JSON.stringify(a);$("#example").data("something",c)},job_clear:function(a){this.resume.work_history.splice(a,1),this.resume.work_history<=0&&d._xsyc(this,"history_work_",!1,!0,!0)},job_quex:function(){if(-99==this.exp)d._xsyc(this,"history_work_",!1,!0,!0);else if(-100==this.exp)d._xsyc(this,"history_work_",!0,!0,!1);else{d._xsyc(this,"history_work_",!0,!0,!1);var a=$.parseJSON($("#example").data("something"));this.resume.work_history.splice(this.expNum,1,a)}},addbig_edu_s:function(a){this.exp=a,this.education={},d._xsyc(this,"edu_history_",!0,!1,!0)},add_edu_s:function(a){this.exp=a,this.education={},d._xsyc(this,"edu_history_",!0,!1,!0)},edu_edit:function(a,b){d._xsyc(this,"edu_history_",!0,!1,!0),this.education=a,this.exp=b;var c=JSON.stringify(a);$("#example").data("something",c)},edu_clear:function(){if(-99==this.exp)d._xsyc(this,"edu_history_",!1,!0,!0);else if(-100==this.exp)d._xsyc(this,"edu_history_",!0,!0,!1);else{d._xsyc(this,"edu_history_",!0,!0,!1);var a=$.parseJSON($("#example").data("something"));this.resume.edu_history.splice(this.expNum,1,a)}},edu_send:function(a){d._xsyc(this,"edu_history_",!0,!0,!1);var b=this.resume.edu_history;this.exp<0?b.push(a):this.resume.edu_history[this.exp]=a},edu_dele:function(a){this.resume.edu_history.splice(a,1),this.resume.edu_history<=0&&d._xsyc(this,"edu_history_",!1,!0,!0)},tra_add:function(a){this.exp=a,this.zhengshu={},d._xsyc(this,"train_",!0,!1,!0)},tra_eidt:function(a,b){d._xsyc(this,"train_",!0,!1,!0),this.zhengshu=a,this.exp=b;var c=JSON.stringify(a);$("#example").data("something",c)},tra_clear:function(){if(-99==this.exp)d._xsyc(this,"train_",!1,!0,!0);else if(-100==this.exp)d._xsyc(this,"train_",!0,!0,!1);else{d._xsyc(this,"train_",!0,!0,!1);var a=$.parseJSON($("#example").data("something"));this.resume.train.splice(this.expNum,1,a)}},tra_send:function(a){d._xsyc(this,"train_",!0,!0,!1);var b=this.resume.train;this.exp<0?b.push(a):this.resume.train[this.exp]=a},tra_dele:function(a){this.resume.train.splice(a,1),this.resume.train<=0&&d._xsyc(this,"train_",!1,!0,!0)},lang_add:function(a){this.exp=a,this.langsha={},d._xsyc(this,"language_",!0,!1,!0)},lang_eidt:function(a,b){d._xsyc(this,"language_",!0,!1,!0),this.langsha=a,this.exp=b;var c=JSON.stringify(a);$("#example").data("something",c)},lang_clear:function(){if(-99==this.exp)d._xsyc(this,"language_",!1,!0,!0);else if(-100==this.exp)d._xsyc(this,"language_",!0,!0,!1);else{d._xsyc(this,"language_",!0,!0,!1);var a=$.parseJSON($("#example").data("something"));this.resume.language_s.splice(this.expNum,1,a)}},lang_send:function(a){d._xsyc(this,"language_",!0,!0,!1);var b=this.resume.language_s;this.exp<0?b.push(a):this.resume.language_s[this.exp]=a},lang_dele:function(a){this.resume.language_s.splice(a,1),this.resume.language_s<=0&&d._xsyc(this,"language_",!1,!0,!0)}}})},click_input:function(a){$("#input_b").focus(function(){$("#line_kind").show(),d.tagData(a)}),$("#xz_qr").click(function(){$("#line_kind").hide()}),$("#xz_qx").click(function(){-99==this.index?($("#line_kind").hide(),a.intent.industry=[!1]):($("#line_kind").hide(),a.intent.industry=d.resumeCfg().intent.industry)})},zhengze:function(a){var b=/^1[3|4|5|7|8]{1}[0-9]{9}$/;$(a).blur(function(){var a=$(this).val();b.test(a)?$(".in-mal").hide("normal"):$(".in-mal").show("normal")})},zhengze_em:function(a){var b=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;$(a).blur(function(){var a=$(this).val();b.test(a)?$(".in-mal1").hide("normal"):$(".in-mal1").show("normal")})},zhengze_num:function(a){var b=/^[0-9]+$/;$(a).blur(function(){var a=$(this).val();b.test(a)?$(this).removeClass("error"):$(this).addClass("error")})},zhengze_ch:function(a){var b=/^[\u4e00-\u9fa5]+$/;$(a).blur(function(){var a=$(this).val();b.test(a)?$(this).removeClass("error"):$(this).addClass("error")})},tagData:function(a){var b=JSON.stringify(a);$("#example").data("resume",b)},resumeCfg:function(){var a=$("#example").data("resume");return $.parseJSON(a)}};b.exports={init:d._init}});
