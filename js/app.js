/*modisoft.cn/ugly/dna=66640131ae1a31040a773abd21ca6eff*/
var $=Dom7,theme="auto";0<=document.location.search.indexOf("theme=")&&(theme=document.location.search.split("theme=")[1].split("&")[0]);
var theme="ios",appConfig={id:"io.framework7.testapp",root:"#xtphp_f7app",theme:theme,data:function(){return{user:{firstName:"John",lastName:"Doe"}}},methods:{helloWorld:function(){xtphp_f7app.dialog.alert("Hello World!")}},routes:routes,vi:{placementId:"pltd4o7ibb9rc653x14"},view:{pushStateSeparator:"#!",iosDynamicNavbar:!1,iosSeparateDynamicNavbar:!1,stackPages:!0},dialog:{buttonOk:"确定",buttonCancel:"取消"}};
modisoftSoftware.device.is_app?(appConfig.view.xhrCache=!0,appConfig.view.pushState=!1):(appConfig.view.xhrCache=!0,appConfig.view.pushState=!0);var xtphp_f7app=new Framework7(appConfig);
