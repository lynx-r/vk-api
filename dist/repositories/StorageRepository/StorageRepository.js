var __rest=this&&this.__rest||function(t,r){var e={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&r.indexOf(s)<0&&(e[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(t);o<s.length;o++)r.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(e[s[o]]=t[s[o]])}return e};import{Repository}from"../Repository";import{formatOptionalArray}from"../../utils";export class StorageRepository extends Repository{constructor(t){super("storage",t),this.get=this.r("get",t=>{if("keys"in t){const{keys:r}=t,e=__rest(t,["keys"]);return Object.assign(Object.assign({},e),{keys:formatOptionalArray(r)})}return t}),this.getKeys=this.r("getKeys"),this.set=this.r("set")}}