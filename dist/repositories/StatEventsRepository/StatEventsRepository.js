var __rest=this&&this.__rest||function(t,e){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(s[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(s[o[r]]=t[o[r]])}return s};import{Repository}from"../Repository";export class StatEventsRepository extends Repository{constructor(t){super("statEvents",t),this.addMiniAppsCustom=this.r("addMiniAppsCustom",t=>{const{events:e}=t,s=__rest(t,["events"]),o=e.map(t=>{const{json:e,timestamp:s}=t,o=__rest(t,["json","timestamp"]);return Object.assign(Object.assign({},o),{json:"object"==typeof e?JSON.stringify(e):void 0,timestamp:"number"==typeof s?s:void 0===s?void 0:s.getTime()})});return Object.assign(Object.assign({},s),{events:o})}),this.addMiniApps=this.r("addMiniApps")}}