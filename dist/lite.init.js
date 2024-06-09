/**
 * oreui-web lite
 * license: cc by-nc-sa 4.0
 * code by XiaozhiSans
 */
import c from "./oreuicfg.json" with {type:"json"};import {info as i} from "./libs/info.js";document.addEventListener("DOMContentLoaded",()=>{try{let l=document.createElement("link");l.rel="stylesheet";l.type="text/css";l.href=c.path+"all.init.css";document.querySelector("head").appendChild(l);console.log(`[oreui] init oreui successful, version: ${i.version}(${i.date})`);}catch(error){console.warn("[oreui] init oreui faild. ", error);}});