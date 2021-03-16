"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPageAccess = void 0;
/**
 * List of access connected with page.
 * @see https://vk.com/dev/objects/page
 */
var EPageAccess;
(function (EPageAccess) {
    EPageAccess[EPageAccess["Admins"] = 0] = "Admins";
    EPageAccess[EPageAccess["Participants"] = 1] = "Participants";
    EPageAccess[EPageAccess["Everybody"] = 2] = "Everybody";
})(EPageAccess = exports.EPageAccess || (exports.EPageAccess = {}));
