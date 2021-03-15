var __rest=this&&this.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(r[o[s]]=t[o[s]])}return r};import{Repository}from"../Repository";import{formatOptionalArray,formatOptionalBoolean,toPseudoBoolean}from"../../utils";export class UsersRepository extends Repository{constructor(t){super("users",t),this.get=this.r("get",t=>{var{userIds:e,fields:r}=t,o=__rest(t,["userIds","fields"]);return Object.assign(Object.assign({},o),{userIds:formatOptionalArray(e),fields:formatOptionalArray(r)})}),this.getFollowers=this.r("getFollowers",t=>{var{fields:e}=t,r=__rest(t,["fields"]);return Object.assign(Object.assign({},r),{fields:formatOptionalArray(e)})}),this.getSubscriptions=this.r("getSubscriptions",t=>{var{fields:e,extended:r}=t,o=__rest(t,["fields","extended"]);return Object.assign(Object.assign({},o),{extended:formatOptionalBoolean(r),fields:formatOptionalArray(e)})}),this.report=this.r("getSubscriptions"),this.search=this.r("search",t=>{var{sort:e,online:r,hasPhoto:o}=t,s=__rest(t,["sort","online","hasPhoto"]);return Object.assign({sort:void 0===e?void 0:"number"==typeof e?e:toPseudoBoolean("popularity"===e),online:formatOptionalBoolean(r),hasPhoto:formatOptionalBoolean(o)},s)})}}