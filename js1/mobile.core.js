/*modisoft.cn/ugly/dna=f009ff2b8d6e4bdb9d035f6b21b502e4*/
var test0,test1,test2,pullDown_ToRefresh_lock=!1;function jsMath_salt(){for(var a="abcdefghijklmnopqrstuvwxyz".split(""),b="",c=0;4>c;c++)var e=Math.floor(26*Math.random()),b=b+a[e];return b+=Math.floor(99999999*Math.random())}
function ajax_cmdFilter(a){if(!a.cmd)return!1;switch(a.cmd){case "alert":dialog_alert(a.msg);break;case "eval":eval(a.msg);break;case "loginPls":clu_gotoLoginPage();break;case "jump":var b=function(a){jsDevice_isApp()?a?wv_open(a):skel_root_dom_update_html():jsJump(a)};a.msg?uiAlert(a.msg,function(){b(a.url)},a.okBtnTxt):b(a.url);break;case "jumpBack":b=function(){jsDevice_isMobile()?mui.back():window.history.back()};a.msg?uiAlert(a.msg,function(){b()}):b();break;case "jumpInIframe":a.msg?uiAlert(a.msg,
function(){jsJump(a.url,!0)}):jsJump(a.url,!0);break;case "notice":case "error":alert("[err-3942]应该废弃的代码".data.cmd);break;case "xmlConfigWin":xmlConfigWin_okUrl=a.submitUrl;uiModal_open(a.html,"admin_xml");break;case "modal":uiModal_open(a.html,a.cls);break;case "confirm":uiConfirm(a.msg,function(){eval(a.code)});break;default:return!1}return!0}
function ajax_async(a,b,c,e,d){var h=function(a,b,e,d){ajax_cmdFilter(a)||c&&c(a,b,e,d)},g=function(b,c,d,h){console.log("ajax_async/error/"+a);console.log(b);e&&e(b,c,d,h);dialog_toast("网络连接错误")};d?(d={method:"POST",async:!1},d.url=a,d.data=b,d.success=h,d.error=g,d.dataType="json",xtphp_f7app.request(d)):xtphp_f7app.request.post(a,b,h,g,"json")}function ajax_sync(a,b,c,e){ajax_async(a,b,c,e,!0)}
function dialog_toast(a){modisoftSoftware.device.is_app?plus.nativeUI.toast(a):xtphp_f7app.toast.show({text:a,position:"bottom",closeTimeout:3E3})}function dialog_alert(a,b){alert(a);b&&b()}function dialog_confirm(a,b){confirm(a)&&b()}
function jswidget_initAll(a){a=(a?a+" ":"")+"[jswidget-init=no]";console.log("moditrace/jswidget_initAll/4946/"+JSON.stringify(a));$(a).each(function(){if("swiper"==$(this).attr("jswidget-type")){var a=JSON.parse($(this).attr("jswidget-config"));"goodsFloorCategoryShow_5645"==$(this).attr("id")&&(a.pagination.renderBullet=function(c,e){return'<span class="'+(e+(" i"+c))+'" onclick="tab0_scrollTo_goodsFloorCategoryShow()"><i></i><s>'+a.pagination.xtphp_bulletTxt[c]+"</s></span>"});new Swiper(this,
a);$(this).attr("jswidget-init","yes")}})}var navBar_height_px=$("#indexTab_0_navbar").height();jswidget_initAll();$(document).on("touchstart",".layout_landNavBar .menuItem",function(a,b,c){a=$(this);a.hasClass("csel")||(a=a.index(),2!=a&&(2<a&&a--,landNavbar_changeTab(a)))});$(document).on("touchstart","[triggerAction=gobackHistory]",function(a,b,c,e){xtphp_f7app.views.main.router.back()},!0);
$(document).on("touchstart","[triggerAction=goSearchPrePage]",function(a,b,c,e){xtphp_f7app.views.main.router.navigate("/mobile/search_preSearch",{ignoreCache:!0})},!0);
$(document).on("scroll","#mobileIndexTab_0_mainContent",function(a,b,c,e){a=$(this);0==this.scrollTop?($("#indexTab_0_navbar").removeClass("expandStatus_close"),$("#indexTab_0_navbar").addClass("expandStatus_open"),a.closest(".page-content.ptr-content").removeClass("youcant_ptr")):($("#indexTab_0_navbar").removeClass("expandStatus_open"),$("#indexTab_0_navbar").addClass("expandStatus_close"),a.closest(".page-content.ptr-content").addClass("youcant_ptr"));$("#goodsFloorCategoryShow_5645").offset().top<
navBar_height_px?$("#goodsFloorCategoryShow_5645").addClass("pagination_ufoStatus_yes"):$("#goodsFloorCategoryShow_5645").removeClass("pagination_ufoStatus_yes")},!0);$(document).on("ptr:refresh","#mobileIndexTab_0_mainContent_wrap",function(a,b){setTimeout(function(){ajax_sync("/index/pullDown_ToRefresh?tabIndex=0","",function(a){$("#mobileIndexTab_0_mainContent").html(a.msg);jswidget_initAll("#mobileIndexTab_0_mainContent");b()},function(){b()})},1500)});
function tab0_scrollTo_goodsFloorCategoryShow(){var a=$("#goodsFloorCategoryShow_5645").offset().top,b=$("#mobileIndexTab_0_mainContent.pageMainContentz").scrollTop();$("#mobileIndexTab_0_mainContent.pageMainContentz").scrollTo(0,a+b-navBar_height_px,300)}function tab0_goodsAdd(){$(".layout_landNavBar .menuItem:not(.operator)").eq(2).touchstart()}
function tab0_goodsFloor0_changeTab(a,b){a=$(a);a.addClass("csel").siblings().removeClass("csel");$("#mobileIndexTab_0_mainContent .goodsFloor_recommend .sliderzWrapz").eq(b).removeClass("_displayNone_").siblings(".sliderzWrapz").addClass("_displayNone_")}
function tab0_goodsFloor1_viewMore(a){a=$("#goodsFloorCategoryShow_5645 .x_swiperPagination_wrap .swiper-pagination-bullets span.swiper-pagination-bullet-active");a=a.index();var b={};0==a?b.newmedia_platform=1:1==a?b.newmedia_platform=21:2==a&&(b.newmedia_platform=10);landNavbar_changeTab(1);tab1_updateHtml_fromServer(b)}
$(document).on("scroll","#mobileIndexTab_1_mainContent",function(a,b,c,e){if(!pullDown_ToRefresh_lock&&(a=$(this),this.scrollTop+this.clientHeight+10>=this.scrollHeight))if(pullDown_ToRefresh_lock=!0,modisoftSoftware.tab1_goodsCondition.p>=modisoftSoftware.tab1_splitPage_totalPageNum)a.removeClass("pullUpLoad_indStatus_0"),a.removeClass("pullUpLoad_indStatus_1"),a.removeClass("pullUpLoad_indStatus_2"),modisoftSoftware.tab1_splitPage_totalPageNum?a.addClass("pullUpLoad_indStatus_1"):a.addClass("pullUpLoad_indStatus_2");
else{var d=xtphp_f7app.utils.extend({},modisoftSoftware.tab1_goodsCondition);d.p++;setTimeout(function(){ajax_sync("/index/tab1_innerHtml?ajax_fetchMode=2",{goodsCondition:d},function(a){$(a.msg.html).insertBefore("#mobileIndexTab_1_mainContent .pullUpLoad_tailInd");modisoftSoftware=xtphp_f7app.utils.extend(modisoftSoftware,a.msg.jsVarPack);pullDown_ToRefresh_lock=!1})},300)}},!0);
$(document).on("click","#mobileIndexTab_1_filterPanel .p0 .p00 .lv0_item",function(a,b,c,e){a=$(this);b=a.index();a.addClass("csel").siblings().removeClass("csel");$("#mobileIndexTab_1_filterPanel .p0 .p01").eq(b).show().siblings(".p01").hide()},!0);$(document).on("click","#mobileIndexTab_1_filterPanel .p0 .p01 .lv1_item",function(a,b,c,e){$(this).toggleClass("csel");tab1_filterPanel_updateStatus()},!0);
$(document).on("click","#mobileIndexTab_1_filterPanel .p1 .p11 span",function(a,b,c,e){$(this).attr("filterName");$("#mobileIndexTab_1_filterPanel .p0 .p01 .lv1_item").removeClass("csel");tab1_filterPanel_updateStatus()},!0);
$(document).on("click","#mobileIndexTab_1 .tab1_navbar .tab1_yixuanz .p11 span",function(a,b,c,e){a=$(this);a.hasClass("clearAll")?$("#mobileIndexTab_1 .tab1_navbar .tab1_yixuanz .p11 span:not(.clearAll)").each(function(){delete modisoftSoftware.tab1_goodsCondition[$(this).attr("filterName")]}):delete modisoftSoftware.tab1_goodsCondition[a.attr("filterName")];tab1_updateHtml_fromServer(modisoftSoftware.tab1_goodsCondition);tab1_filterPanel_clearAll()},!0);var tab1_localData={filterPanel_currentSelect:[]};
function tab1_order_setOrder(a){modisoftSoftware.tab1_goodsCondition.order=a;tab1_updateHtml_fromServer(modisoftSoftware.tab1_goodsCondition)}function tab1_updateHtml_fromServer(a){a=xtphp_f7app.utils.extend({},a);a.p=1;ajax_sync("/index/tab1_innerHtml?ajax_fetchMode=1",{goodsCondition:a},function(a){$("#mobileIndexTab_1").html(a.msg.html);modisoftSoftware=xtphp_f7app.utils.extend(modisoftSoftware,a.msg.jsVarPack)})}
function tab1_filterPanel_open(){tab1_localData.tab1_filterPanel_innerHtml_hash!=modisoftSoftware.tab1_filterPanel_innerHtml_hash&&($("#mobileIndexTab_1_filterPanel").html(modisoftSoftware.tab1_filterPanel_innerHtml),tab1_localData.tab1_filterPanel_innerHtml_hash=modisoftSoftware.tab1_filterPanel_innerHtml_hash);xtphp_f7app.panel.open("left")}
function tab1_filterPanel_updateStatus(){tab1_localData.filterPanel_currentSelect=[];$("#mobileIndexTab_1_filterPanel .p0 .p00 .lv0_item").removeClass("hasSon");$("#mobileIndexTab_1_filterPanel .p0 .p01").each(function(){var a=$(this),b=a.find(".lv1_item.csel");if(b.length){var c=a.attr("filterName"),a=a.attr("filterLabel"),e={};e.filterName=c;e.filterLabel=a;e.selectedItems=[];b.each(function(){var a=$(this);e.selectedItems.push({itemValue:a.attr("itemValue"),itemName:a.attr("itemName")})});tab1_localData.filterPanel_currentSelect.push(e);
$("#mobileIndexTab_1_filterPanel .p0 .p00 .lv0_item[filterName="+c+"]").addClass("hasSon")}});for(var a="",b=0;b<tab1_localData.filterPanel_currentSelect.length;b++){for(var a=a+('<span filterName="'+tab1_localData.filterPanel_currentSelect[b].filterName+'" >'),a=a+tab1_localData.filterPanel_currentSelect[b].filterLabel,c=":",e=0;e<tab1_localData.filterPanel_currentSelect[b].selectedItems.length;e++)a+=c+tab1_localData.filterPanel_currentSelect[b].selectedItems[e].itemName,c=",";a+="</span>"}$("#mobileIndexTab_1_filterPanel .p1 .p11").html(a)}
function tab1_filterPanel_clearAll(){$("#mobileIndexTab_1_filterPanel .p0 .p01 .lv1_item").removeClass("csel");tab1_filterPanel_updateStatus()}
function tab1_filterPanel_ok(){xtphp_f7app.panel.close("left");if(tab1_localData.filterPanel_currentSelect.length){for(var a={},b=0;b<tab1_localData.filterPanel_currentSelect.length;b++){for(var c="",e="",d=0;d<tab1_localData.filterPanel_currentSelect[b].selectedItems.length;d++)c+=e+tab1_localData.filterPanel_currentSelect[b].selectedItems[d].itemValue,e=",";a[tab1_localData.filterPanel_currentSelect[b].filterName]=c}b=xtphp_f7app.utils.extend({},modisoftSoftware.tab1_goodsCondition,a);tab1_updateHtml_fromServer(b)}console.log(a)}
var tab1_selectPlatform_toggleLock=!1;
function tab1_selectPlatform_toggle(a){if(!tab1_selectPlatform_toggleLock){a=$(a);var b=a.closest(".tab1_navbar"),c=$("#mobileIndexTab_1_selectPlatform");tab1_selectPlatform_toggleLock=!0;b.hasClass("openStatus_open")?(console.log("moditrace/0408/close/"+JSON.stringify(0)),c.removeClass("fadeIn"),setTimeout(function(){c.hide();tab1_selectPlatform_toggleLock=!1;b.removeClass("openStatus_open")},350)):(console.log("moditrace/0408/open/"+JSON.stringify(0)),c.show(),setTimeout(function(){c.addClass("fadeIn")},
100),setTimeout(function(){b.addClass("openStatus_open");tab1_selectPlatform_toggleLock=!1},300))}}function tab1_selectPlatform_toggle_forceClose(){var a=$("#mobileIndexTab_1 .tab1_navbar"),b=$("#mobileIndexTab_1_selectPlatform");b.hide();b.removeClass("fadeIn");a.removeClass("openStatus_open")}$(document).on("touchstart","#mobileIndexTab_1_platformSelectTrigger",function(a){tab1_selectPlatform_toggle(this)});$(document).on("touchstart","#mobileIndexTab_1_selectPlatform .bgz",function(a){tab1_selectPlatform_toggle($("#mobileIndexTab_1_platformSelectTrigger"))});
$(document).on("click","#mobileIndexTab_1_selectPlatform .fgz .box",function(a){tab1_selectPlatform_toggle_forceClose()});$(document).on("click","[jumpTab=tab1]",function(a,b,c,e){a=JSON.parse($(this).attr("jumpConfig"));landNavbar_changeTab(1);tab1_updateHtml_fromServer(a)},!0);function search_preSearch_submit(a){a=$(a);a=a.find("input[name=keyword]").val();(a=a.trim())?search_preSearch_search(a):dialog_alert("请输入搜索关键字");return!1}
function search_preSearch_search(a){xtphp_f7app.views.main.router.back();setTimeout(function(){var b={};b.keyword=a;landNavbar_changeTab(1);tab1_updateHtml_fromServer(b)},300)}function search_preSearch_clearAll(a){a=$(a);dialog_confirm("确定清除搜索记录",function(){a.closest(".ssBoxz").find(".boxbd a").remove();ajax_async("/mobile/search_preSearch_searchHistory_clearAll")})}
$(document).on("click","#mobile_searchPreSearchMainContent .ssBoxz .boxbd a",function(a,b,c,e){a=$(this).html();search_preSearch_search(a)},!0);function goods_sell_descPicGallery_open(a,b){a=$(a);var c=a.closest(".sliderz").attr("galleryPics"),c=JSON.parse(c);xtphp_f7app.photoBrowser.create({photos:c,theme:"dark",type:"standalone",toolbar:!1,backLinkText:"",navbarOfText:"/"}).open(b)}
function goods_sell_follow_followGoods(a,b){a=$(a);a.hasClass("followStatus_yes")?ajax_sync("/favsell/cancelFollow?goodsId="+b,{},function(b){dialog_toast("取消收藏成功");a.removeClass("followStatus_yes")}):ajax_sync("/favsell/follow?goodsId="+b,{},function(b){dialog_toast("收藏成功");a.addClass("followStatus_yes")})}
function connectLogin_loginWayChange(a){a=$(a);var b=a.index();a.addClass("csel").siblings().removeClass("csel");0==b?($("#connectLogin_form3642").removeClass("loginWay_mobile").addClass("loginWay_account"),$("#connectLogin_form3642 input[name=loginMode]").val("account")):1==b&&($("#connectLogin_form3642").removeClass("loginWay_account").addClass("loginWay_mobile"),$("#connectLogin_form3642 input[name=loginMode]").val("mobile"))}
function connectLogin_onsubmit(a){a=xtphp_f7app.form.convertToData("#connectLogin_form3642 form");ajax_sync("/connect/login_1",a,function(a){a.result?(dialog_toast("登录成功"),xtphp_f7app.views.main.router.back(),$(document).trigger("clu_loginStatusChange",a.msg)):(dialog_toast(a.msg),"refreshImgVcode"==a.msg1&&$("#connectLogin_form3642 img.jwAjaxform_vcode").click())});return!1}
function connectLogin_smsvcode_send(a){a=$(a);var b=xtphp_f7app.form.convertToData("#connectLogin_form3642 form");ajax_sync("/connect/login_smv",b,function(b){if(b.result){var e=a.siblings("span");a.hide();e.html(b.msg).show();var d=0,d=setInterval(function(){var a=parseInt(e.html());a--;0>=a?(e.html("..").hide(),e.siblings("a").show(),clearInterval(d)):e.html(a)},1E3)}else dialog_toast(b.msg)})}
$(document).on("click","#goodsEdit_form_5920 .linez.__selectPlatformId span",function(a,b,c,e){b=$(this);b.hasClass("csel")||(a=parseInt(b.attr("platformId")),b.addClass("csel").siblings("span").removeClass("csel"),b=$("#goodsEdit_form_5920"),b.removeClass("platformFilter_show_1"),b.removeClass("platformFilter_show_10"),b.removeClass("platformFilter_show_20"),b.removeClass("platformFilter_show_21"),b.removeClass("platformFilter_show_30"),b.removeClass("platformFilter_show_40"),b.removeClass("platformFilter_show_50"),
b.removeClass("platformFilter_show_99"),b.removeClass("platformFilter_show_51"),b.addClass("platformFilter_show_"+a),b.find('input[name="newMediaItem/newmedia_platform"]').val(a))},!0);
var xtphp_uploadPic={runtime_localfiles:[],runtime_uploadXhrHd:!1,runtime_currentWidget:!1,runtime_currentWidgetConfig:!1,upload_processUploadLoop:function(){if(0==xtphp_uploadPic.runtime_localfiles.length)xtphp_uploadPic.runtime_uploadXhrHd=!1,console.log("moditrace/0313/5622/上传结束");else{var a=xtphp_uploadPic.runtime_localfiles[0],b=new FormData;b.append(xtphp_uploadPic.runtime_currentWidgetConfig.uploadPost_fileName,a.file.name);b.append(xtphp_uploadPic.runtime_currentWidgetConfig.uploadPost_fileKeyname,
a.file);var c=new XMLHttpRequest;c.open("post",xtphp_uploadPic.runtime_currentWidgetConfig.uploadUrl);c.upload.onprogress=function(a){a=Math.round(100*a.loaded/a.total);$("#"+c.bind_boxId).find(".progressIndTxt").html(a+"%")};c.upload.onabort=function(a){$("#"+c.bind_boxId).remove();xtphp_uploadPic.localfiles_deleteById(c.bind_boxId);xtphp_uploadPic.widget_updateWidgetStatus(xtphp_uploadPic.runtime_currentWidget);xtphp_uploadPic.upload_processUploadLoop()};c.onreadystatechange=function(){if(4==c.readyState&&
200==c.status){var a=JSON.parse(c.responseText);a.result?($("#"+c.bind_boxId).removeClass("status_uploading"),$("#"+c.bind_boxId).addClass("status_uploadDone"),$("#"+c.bind_boxId).find("img.previewImg")[0].src=a.msg):(dialog_toast(a.msg),$("#"+c.bind_boxId).remove());xtphp_uploadPic.localfiles_deleteById(c.bind_boxId);xtphp_uploadPic.widget_updateWidgetStatus(xtphp_uploadPic.runtime_currentWidget);xtphp_uploadPic.upload_processUploadLoop()}};c.bind_boxId=a.id;xtphp_uploadPic.runtime_uploadXhrHd=c;
xtphp_uploadPic.runtime_uploadXhrHd.send(b)}},localfiles_deleteById:function(a){for(var b=[],c=0;c<xtphp_uploadPic.runtime_localfiles.length;c++)a!=xtphp_uploadPic.runtime_localfiles[c].id&&b.push(xtphp_uploadPic.runtime_localfiles[c]);xtphp_uploadPic.runtime_localfiles=b},localfiles_loadFile:function(a,b,c){var e=new FileReader,d=function(b,e){var d={};d.id=jsMath_salt();d.file=b;d.dataUrl_base64=e;d.widget_widgetId=a;d.has_addToDom=!1;d.status_uploadStatus="pending";d.status_available=!0;xtphp_uploadPic.runtime_localfiles.push(d);
if(xtphp_uploadPic.runtime_localfiles.length==c){for(var d="",n=xtphp_uploadPic.runtime_localfiles[0].widget_widgetId,f=0;f<xtphp_uploadPic.runtime_localfiles.length;f++)var m=xtphp_uploadPic.runtime_localfiles[f],d=d+('<div class="box imgBox status_uploading" id='+m.id+" >"),d=d+'<img class="previewImg" onclick="xtphp_uploadPic.imgBox_zoomIn(this)" />',d=d+'<div class="progressIndTxt">',d=d+"0%",d=d+"</div>",d=d+'<div class="operz">',d=d+'<a class="move_left" onclick="xtphp_uploadPic.imgBox_moveLeft(this)" ></a>',
d=d+'<a class="rotate_left" onclick="xtphp_uploadPic.imgBox_rotate(this,-90)" ></a>',d=d+'<a class="rotate_right" onclick="xtphp_uploadPic.imgBox_rotate(this,90)" ></a>',d=d+'<a class="move_right" onclick="xtphp_uploadPic.imgBox_moveRight(this)" ></a>',d=d+"</div>",d=d+('<a class="_actionBtn cancelBtn" onclick="xtphp_uploadPic.imgBox_cancelUpload(\''+m.id+"')\"></a>"),d=d+'<a class="_actionBtn deleteBtn" onclick="xtphp_uploadPic.imgBox_delete(this)"></a>',d=d+"</div>";f=$("#"+n+" .box.uploadBtn");
$(d).insertBefore(f);for(f=0;f<xtphp_uploadPic.runtime_localfiles.length;f++)m=xtphp_uploadPic.runtime_localfiles[f],$("#"+m.id).find("img.previewImg")[0].src=m.dataUrl_base64;xtphp_uploadPic.widget_updateWidgetStatus($("#"+n));xtphp_uploadPic.upload_processUploadLoop()}};e.onloadend=function(a,c,e,n){var f=new Image;f.onload=function(){var c,e=f.width,g=f.height;if("image/jpeg"==b.type&&(1600<e||1600<g)){var k;k=e>g?1600/e:1600/g;e=parseInt(e*k);g=parseInt(g*k);k=document.createElement("canvas");
k.width=e;k.height=g;k.getContext("2d").drawImage(f,0,0,e,g);c=k.toDataURL("image/jpeg",0.9);k.toBlob(function(a){a=new File([a],b.name);d(a,c)},"image/jpeg")}else c=a.target.result,d(b,c)};f.src=a.target.result};e._file=b;e.readAsDataURL(b);test0=e},widget_init:function(){$(document).on("click",".widget_uploadPic .box.uploadBtn",function(a,b,c,e){xtphp_uploadPic.runtime_localfiles.length?dialog_toast("请等待当前上传结束"):($(this),a=$(this).closest(".widget_uploadPic"),a.find("input[type=file]").click(),
xtphp_uploadPic.widget_getWidgetConfig(a))},!0);$(document).on("change",".widget_uploadPic input[type=file]",function(a,b,c,e){b=$(this).closest(".widget_uploadPic");a=b.attr("id");c=xtphp_uploadPic.widget_getWidgetConfig(b);var d=xtphp_uploadPic.imgBox_getNum(b);if(0!=this.files.length){for(e=0;e<this.files.length;e++)if(this.files[e].size>c.maxFileSize){alert("单张图片大小不能超过:"+c.maxFileSize_name);return}e=parseInt(c.maxFileNum)-d;if(0>=e)alert("最多只能上传"+c.maxFileNum+"张图片");else if(0>e-this.files.length)alert("还能选择"+
e+"个文件");else for(xtphp_uploadPic.runtime_currentWidget=b,xtphp_uploadPic.runtime_currentWidgetConfig=c,b=this.files.length,test0=this.files,e=0;e<b;e++)xtphp_uploadPic.localfiles_loadFile(a,this.files[e],b)}})},widget_getImgValue_uploadDone:function(a){var b=[];a.find(".box.imgBox.status_uploadDone img").each(function(){b.push($(this).attr("src"))});console.log("widget_getImgValue_uploadDone");console.log(b);return b.toString()},widget_getWidgetConfig:function(a){return JSON.parse(a.attr("jswidget-config"))},
widget_updateWidgetStatus:function(a){var b=xtphp_uploadPic.widget_getWidgetConfig(a),c=xtphp_uploadPic.imgBox_getNum(a),e=b.maxFileNum;a.find(".box.uploadBtn .txtz").html(c+"&nbsp;/&nbsp;"+e);b.createHiddenInputName&&a.find('[name="'+b.createHiddenInputName+'"]').val(xtphp_uploadPic.widget_getImgValue_uploadDone(a))},imgBox_getNum:function(a){return a.find(".box.imgBox").length},imgBox_delete:function(a){a=$(a);var b=a.closest(".widget_uploadPic"),c=a.closest(".box.imgBox");dialog_confirm("确定删除?",
function(){c.remove();xtphp_uploadPic.widget_updateWidgetStatus(b)})},imgBox_cancelUpload:function(a){xtphp_uploadPic.runtime_uploadXhrHd&&a==xtphp_uploadPic.runtime_uploadXhrHd.bind_boxId?xtphp_uploadPic.runtime_uploadXhrHd.abort():($("#"+a).remove(),xtphp_uploadPic.localfiles_deleteById(a))},imgBox_zoomIn:function(a){a=$(a);var b=a.attr("src");a=a.closest(".widget_uploadPic");a=xtphp_uploadPic.widget_getImgValue_uploadDone(a).split(",");for(var c=0,e=0;e<a.length;e++)if(b==a[e]){c=e;break}xtphp_f7app.photoBrowser.create({photos:a,
theme:"dark",type:"standalone",toolbar:!1,backLinkText:"",navbarOfText:"/"}).open(c)},imgBox_rotate:function(a,b){a=$(a);var c=a.closest(".widget_uploadPic"),e=a.closest(".box.imgBox").find("img.previewImg"),d=e.attr("src"),h=/\[r(\w*)\]/,g=h.exec(d),l=0;g&&g[1]&&(l=parseInt(g[1]));d=d.replace(h,"");l=(l+b+360)%360;d=d.split(".");l&&(d[d.length-2]+="[r"+l+"]");l=d.join(".");e.attr("src",l);xtphp_uploadPic.widget_updateWidgetStatus(c)},imgBox_moveLeft:function(a){a=$(a);var b=a.closest(".widget_uploadPic");
a=a.closest(".box.imgBox");var c=a.prev(".box.imgBox");c.length?(a.insertBefore(c),xtphp_uploadPic.widget_updateWidgetStatus(b)):console.log("moditrace/4842/imgBox_moveLeft/fail"+JSON.stringify(0))},imgBox_moveRight:function(a){a=$(a);var b=a.closest(".widget_uploadPic");a=a.closest(".box.imgBox");var c=a.next(".box.imgBox");c.length?(a.insertAfter(c),xtphp_uploadPic.widget_updateWidgetStatus(b)):console.log("moditrace/4934/imgBox_moveRight/fail"+JSON.stringify(0))}};xtphp_uploadPic.widget_init();
function landNavbar_changeTab(a){if(2==a&&0==modisoftSoftware.clu_userId)clu_gotoLoginPage();else{var b=$(".layout_landNavBar .menuItem:not(.operator)").eq(a);b.hasClass("csel")||($("#mobileIndexTab_"+a).show().siblings(".index_singlePage").hide(),b.addClass("csel").siblings(".menuItem").removeClass("csel"),2==a&&(a=$("#mobileIndexTab_2_mainContent"),a.html()||a.html(modisoftSoftware.tab2_mainContent_innerHtml)))}}
function landNavbar_getCurrentCselTabIndex(){var a=$(".layout_landNavBar .menuItem.csel:not(.operator)").index();2<a&&a--;return a}
$(document).on("scroll","#mobileSellGoodsIndex_mainContent",function(a,b,c,e){if(!pullDown_ToRefresh_lock){var d=$(this);a=JSON.parse(d.attr("goodsCondition"));if(this.scrollTop+this.clientHeight+10>=this.scrollHeight)if(pullDown_ToRefresh_lock=!0,a.p>=a.splitPage_totalPageNum)d.removeClass("pullUpLoad_indStatus_0"),d.removeClass("pullUpLoad_indStatus_1"),d.removeClass("pullUpLoad_indStatus_2"),modisoftSoftware.tab1_splitPage_totalPageNum?d.addClass("pullUpLoad_indStatus_1"):d.addClass("pullUpLoad_indStatus_2");
else{var h=xtphp_f7app.utils.extend({},a);h.p++;setTimeout(function(){ajax_sync("/mobile/sellgoods_index?ajax_fetchMode=2",{goodsCondition:h},function(a){d.attr("goodsCondition",JSON.stringify(a.msg.goodsCondition));$(a.msg.html).insertBefore("#mobileSellGoodsIndex_mainContent .pullUpLoad_tailInd");pullDown_ToRefresh_lock=!1})},300)}}},!0);
function sellgoods_changeTab(a){var b={};b._tab=a;b.p=1;ajax_sync("/mobile/sellgoods_index?ajax_fetchMode=1",{goodsCondition:b},function(a){$(".pageid_sellgoodsIndex").html(a.msg.html)})}function sellgoods_delete(a,b){a=$(a);dialog_confirm("确定删除该出售信息?",function(){ajax_sync("/sellgoods/delete?id="+b,{},function(b){a.closest(".__goodsBox__").remove()})})}
$(document).on("scroll","#mobileFavsellIndex_mainContent",function(a,b,c,e){if(!pullDown_ToRefresh_lock){var d=$(this);a=JSON.parse(d.attr("goodsCondition"));if(this.scrollTop+this.clientHeight+10>=this.scrollHeight)if(pullDown_ToRefresh_lock=!0,a.p>=a.splitPage_totalPageNum)d.removeClass("pullUpLoad_indStatus_0"),d.removeClass("pullUpLoad_indStatus_1"),d.removeClass("pullUpLoad_indStatus_2"),modisoftSoftware.tab1_splitPage_totalPageNum?d.addClass("pullUpLoad_indStatus_1"):d.addClass("pullUpLoad_indStatus_2");
else{var h=xtphp_f7app.utils.extend({},a);h.p++;setTimeout(function(){ajax_sync("/mobile/favsell_index?ajax_fetchMode=2",{goodsCondition:h},function(a){d.attr("goodsCondition",JSON.stringify(a.msg.goodsCondition));$(a.msg.html).insertBefore("#mobileFavsellIndex_mainContent .pullUpLoad_tailInd");pullDown_ToRefresh_lock=!1})},300)}}},!0);
function favsell_changeTab(a,b){a=$(a);var c={};c.newmedia_platform=b;c.p=1;ajax_sync("/mobile/favsell_index?ajax_fetchMode=1",{goodsCondition:c},function(b){a.addClass("csel").siblings("span").removeClass("csel");var c=$("#mobileFavsellIndex_mainContent");$(b.msg.html).insertBefore(c);c.remove()})}function favsell_delete(a,b){a=$(a);dialog_confirm("确定取消收藏?",function(){ajax_sync("/favsell/cancelFollow?goodsId="+b,{},function(b){a.closest(".__goodsBox__").remove()})})}
$(document).on("click","[data-clipboard-text]",function(a,b,c,e){test0=a=$(this);"yes"!=a.attr("hasInit")&&(b=new ClipboardJS(this),b.on("success",function(a){dialog_toast("复制成功")}),b.on("error",function(a){dialog_toast("您的设备不支持复制操作")}),a.attr("hasInit","yes"),a.trigger("click",!0))},!1);
$(document).on("clu_loginStatusChange",function(a,b,c,e){a=$("body");a.removeClass("clu_loginStatus_yes");a.removeClass("clu_loginStatus_no");modisoftSoftware.clu_userId=b.user.id;localStorage.removeItem("xtphp_autoLogin_token");if(0<b.user.id){a.addClass("clu_loginStatus_yes");a="";b.user.is_broker?(a="<font color=red>[经]</font>",$("#broker_1240").show()):$("#broker_1240").hide();a+=b.user.name;$("#mobileIndexTab_3_mainContent .clu_loginStatus_yes_show.userInfoz .namez").html(a);a="UID:"+b.user.id+
"&nbsp;&nbsp;&nbsp;&nbsp;手机:"+b.user.mobile;$("#mobileIndexTab_3_mainContent .clu_loginStatus_yes_show.userInfoz .uidz span").html(a);!1!==b.autoLogin_token&&localStorage.setItem("xtphp_autoLogin_token",JSON.stringify(b.autoLogin_token));var d=$("#goodsSell_followBtn");d.length&&ajax_async("/favsell/queryFollowStatus?goodsId="+d.attr("goodsId"),"",function(a){a.result?d.addClass("followStatus_yes"):d.removeClass("followStatus_yes")})}else a.addClass("clu_loginStatus_no"),2==landNavbar_getCurrentCselTabIndex()&&
0==b.user.id&&landNavbar_changeTab(0)});function clu_gotoLoginPage(){xtphp_f7app.views.main.router.navigate("/mobile/connect_login")}function clu_local_logout(){dialog_confirm("确定退出登录?",function(){ajax_sync("/connect/logoutAjax","",function(a){a.result&&(dialog_toast("已退出登录"),$(document).trigger("clu_loginStatusChange",a.msg))})})}
function clu_autologin_tryAutologin(){if(0==modisoftSoftware.clu_userId){var a=localStorage.getItem("xtphp_autoLogin_token");a&&(a=JSON.parse(a),ajax_async("/mobile/clu_autologin_tryAutologin",{token:a},function(a){a.result&&$(document).trigger("clu_loginStatusChange",a.msg)}))}}clu_autologin_tryAutologin();
function broker_goods_editPanel_open(a){a=$(a);a.closest(".pageid_goodsSell").find(".layout_mainContentz .onlyBorkerSeez").toggleClass("_show_");a.closest(".pageid_goodsSell").find(".layout_mainContentz").scrollTop(0)}function broker_goods_qrcode_open(a){xtphp_f7app.photoBrowser.create({photos:[a],theme:"dark",type:"standalone",toolbar:!1,backLinkText:"",navbarOfText:"/"}).open(0)}
function broker_goods_qrcode_delete(a){confirm("确定删除?")&&ajax_sync("/sellgoodsaudit/delete?ids="+a,{},function(a){a.result&&xtphp_f7app.views.main.router.refreshPage()})}function broker_goods_qrcode_rescue(a){confirm("确定还原?")&&ajax_sync("/sellgoodsaudit/rescue?ids="+a,{},function(a){a.result&&xtphp_f7app.views.main.router.refreshPage()})}
function broker_goods_qrcode_audit_yes(a){confirm("确定审核通过?")&&ajax_sync("/sellgoodsaudit/audit_true?ids="+a,{},function(a){a.result&&xtphp_f7app.views.main.router.refreshPage()})}function broker_goods_qrcode_audit_no(a){confirm("确定审核不通过?")&&ajax_sync("/sellgoodsaudit/audit_false?ids="+a,{},function(a){a.result&&xtphp_f7app.views.main.router.refreshPage()})}
function broker_goods_qrcode_audit_reset(a){confirm("确定审核重置?")&&ajax_sync("/sellgoodsaudit/audit_reset?ids="+a,{},function(a){a.result&&xtphp_f7app.views.main.router.refreshPage()})}function sellgoodsEdit_submit_add(a){a=$(a);var b=xtphp_f7app.form.convertToData(a);b.desc_txt=a.find("[name=desc_txt]").text();ajax_sync("/sellgoods/add_1",b,function(a){a.result&&dialog_alert(a.msg,function(){landNavbar_changeTab(3);$("#mobileIndexTab_2_mainContent").html("")})});return!1}
function sellgoodsEdit_submit_edit(a,b){a=$(a);var c=xtphp_f7app.form.convertToData(a);c.desc_txt=a.find("[name=desc_txt]").text();c.id=b;ajax_sync("/sellgoods/edit_1",c,function(a){a.result&&dialog_toast(a.msg.msg);$(document).trigger("sellgoods_goodsDataChange",a.msg.goodsInfo);xtphp_f7app.views.main.router.back()});return!1}
function sellgoodsEdit_submit_edit_broker(a,b){a=$(a);var c=xtphp_f7app.form.convertToData(a);c.desc_txt=a.find("[name=desc_txt]").text();c.id=b;ajax_sync("/sellgoods/edit_1?adminEditingSellgoods_flag=1",c,function(a){a.result&&dialog_toast(a.msg.msg);$(document).trigger("sellgoods_goodsDataChange",a.msg.goodsInfo);xtphp_f7app.views.main.router.back()});return!1}
function goods_sell_pageContent_update(a){var b=$('.page.pageid_goodsSell[goodsId="'+a+'"]');b.length&&ajax_async("/goods/sell?id="+a+"&ajax_fetchMode=1","",function(a){b.html(a.msg);a=b.find(".sliderzWrapz .swiper-container");if(a.length){var e={};e.pagination=JSON.parse(a.data("pagination"));new Swiper(a,e)}})}
$(document).on("sellgoods_goodsDataChange",function(a,b,c,e){$("body");$(".pageid_sellgoodsIndex .orderz .cellBox.csel").click();goods_sell_pageContent_update(b.id);$("#mobileSellgoodsmanageIndex_mainContent").length&&sellgoodsmanage_update({})});function sellgoodsmanage_submit(a){a=$(a);a=xtphp_f7app.form.convertToData(a);console.log(a);sellgoodsmanage_update(null,a);return!1}function sellgoodsmanage_shaixuan(){sellgoodsmanage_update(null,{is_delete:0,is_adminpass:0,p:0})}
function sellgoodsmanage_toggle(a){a=$(a);a.closest(".goodsfilterz").toggleClass("_openStatus_open_");a.closest(".layout_mainContentz").scrollTop(0);return!1}
function sellgoodsmanage_update(a,b){var c=$("#mobileSellgoodsmanageIndex_mainContent"),e;b?e=b:(a||(a={}),e=JSON.parse(c.attr("goodsCondition")),e=xtphp_f7app.utils.extend(e,a));ajax_sync("/mobile/sellgoodsmanage_index?ajax_fetchMode=1",{goodsCondition:e},function(a){$("#mobileSellgoodsmanageIndex_mainContent .goodslist_mainz").html(a.msg.html);$("#mobileSellgoodsmanageIndex_mainContent.layout_mainContentz").scrollTop(0);c.attr("goodsCondition",JSON.stringify(a.msg.goodsCondition))})}
function sellgoodsmanage_update_splitpage(a){sellgoodsmanage_update({p:a})}function sellgoodsmanage_delete(a){confirm("确定删除?")&&ajax_sync("/sellgoodsaudit/delete?ids="+a,{},function(a){a.result&&sellgoodsmanage_update({})})}function sellgoodsmanage_rescue(a){confirm("确定还原?")&&ajax_sync("/sellgoodsaudit/rescue?ids="+a,{},function(a){a.result&&sellgoodsmanage_update({})})}
function sellgoodsmanage_audit_yes(a){confirm("确定审核通过?")&&ajax_sync("/sellgoodsaudit/audit_true?ids="+a,{},function(a){a.result&&sellgoodsmanage_update({})})}function sellgoodsmanage_audit_no(a){confirm("确定审核不通过?")&&ajax_sync("/sellgoodsaudit/audit_false?ids="+a,{},function(a){a.result&&sellgoodsmanage_update({})})}function sellgoodsmanage_audit_reset(a){confirm("确定审核重置?")&&ajax_sync("/sellgoodsaudit/audit_reset?ids="+a,{},function(a){a.result&&sellgoodsmanage_update({})})}
function service_guzhi_submit(a){a=$(a);a=xtphp_f7app.form.convertToData(a);ajax_sync("/appraise/appraise",a,function(a){$(".page.pageid_guzhi .service_guzhi_result .contentz").html(a.msg);$(".page.pageid_guzhi .service_guzhi_result").show()});return!1}function service_guzhi_close(){$(".page.pageid_guzhi .service_guzhi_result .contentz").html("");$(".page.pageid_guzhi .service_guzhi_result").hide()}var app_exitAppTick=0,app_hasCheckVersion=!1,app_newVersionUrl=!1,app_newVersionFilepath=!1;
document.addEventListener("plusready",function(){plus.navigator.setStatusBarStyle("light");plus.navigator.closeSplashscreen();$(document).on("touchstart",".gobackHiddenTrigger",function(a,b,c,e){1<xtphp_f7app.views.main.history.length?xtphp_f7app.views.main.router.back():(app_exitAppTick++,1<app_exitAppTick?plus.runtime.quit():(plus.nativeUI.toast("再按一次退出"),setTimeout(function(){app_exitAppTick=0},2E3)))},!1);setTimeout(function(){app_checkVersion(!0)},500)},!1);
function app_checkVersion(a){app_hasCheckVersion?app_newVersionUrl?$(".uiModal_bg.mobileApp_updateModal").show():a||dialog_toast("已经是最新版本"):($("#versionTxt_0119").html("Version&nbsp;"+plus.runtime.version),ajax_async("/mobile/app_checkVersion?version="+plus.runtime.version,"",function(b){app_hasCheckVersion=!0;b.result?(app_newVersionUrl=b.msg.url,$("#versionTxt_0119").siblings("span").addClass("_hasDot_"),$(".uiModal_bg.mobileApp_updateModal .p1").html("Version&nbsp;"+b.msg.v),$(".uiModal_bg.mobileApp_updateModal .p31").html(b.msg.log),
$(".uiModal_bg.mobileApp_updateModal").show()):(app_newVersionUrl=!1,a||dialog_toast("已经是最新版本"))}))}function app_modal_close(){$(".uiModal_bg.mobileApp_updateModal").hide()}function app_modal_install(){app_newVersionFilepath?plus.runtime.install(app_newVersionFilepath):($("#mobileApp_checkUpdate_1030").removeClass("doingStatus_download"),$("#mobileApp_checkUpdate_1030").removeClass("doingStatus_install"))}
function app_modal_download(a){if(modisoftSoftware.device.is_iphone)alert("ios goto appstore"+app_newVersionUrl);else{a=$(a);a=a.closest(".p3");a.removeClass("doingStatus_install");a.addClass("doingStatus_download");a.find(".doingBtn_download").html("0%");var b=plus.downloader.createDownload(app_newVersionUrl,{},function(b,e){200==e?1E3>b.downloadedSize?(a.removeClass("doingStatus_download"),a.removeClass("doingStatus_install"),dialog_toast("下载安装包失败")):(a.removeClass("doingStatus_download"),a.addClass("doingStatus_install"),
app_newVersionFilepath=b.filename,app_modal_install()):(a.removeClass("doingStatus_download"),a.removeClass("doingStatus_install"),dialog_toast("下载安装包失败"))});b.addEventListener("statechanged",function(b,e){switch(b.state){case 3:var d=parseInt(100*b.downloadedSize/b.totalSize);a.find(".doingBtn_download").html(d+"%")}});b.start()}};