"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommunityWallPrivacy = exports.ECommunityMemberStatus = exports.ECommunitySection = exports.ECommunityAgeLimits = exports.ECommunityAdminLevel = exports.ECommunityPrivacy = void 0;
var ECommunityPrivacy;
(function (ECommunityPrivacy) {
    ECommunityPrivacy[ECommunityPrivacy["Open"] = 0] = "Open";
    ECommunityPrivacy[ECommunityPrivacy["Closed"] = 1] = "Closed";
    ECommunityPrivacy[ECommunityPrivacy["Private"] = 2] = "Private";
})(ECommunityPrivacy = exports.ECommunityPrivacy || (exports.ECommunityPrivacy = {}));
var ECommunityAdminLevel;
(function (ECommunityAdminLevel) {
    ECommunityAdminLevel[ECommunityAdminLevel["Moderator"] = 1] = "Moderator";
    ECommunityAdminLevel[ECommunityAdminLevel["Editor"] = 2] = "Editor";
    ECommunityAdminLevel[ECommunityAdminLevel["Admin"] = 3] = "Admin";
})(ECommunityAdminLevel = exports.ECommunityAdminLevel || (exports.ECommunityAdminLevel = {}));
var ECommunityAgeLimits;
(function (ECommunityAgeLimits) {
    ECommunityAgeLimits[ECommunityAgeLimits["None"] = 1] = "None";
    ECommunityAgeLimits[ECommunityAgeLimits["Plus16"] = 2] = "Plus16";
    ECommunityAgeLimits[ECommunityAgeLimits["Plus18"] = 3] = "Plus18";
})(ECommunityAgeLimits = exports.ECommunityAgeLimits || (exports.ECommunityAgeLimits = {}));
var ECommunitySection;
(function (ECommunitySection) {
    ECommunitySection[ECommunitySection["None"] = 0] = "None";
    ECommunitySection[ECommunitySection["Photos"] = 1] = "Photos";
    ECommunitySection[ECommunitySection["Discussions"] = 2] = "Discussions";
    ECommunitySection[ECommunitySection["Audios"] = 3] = "Audios";
    ECommunitySection[ECommunitySection["Videos"] = 4] = "Videos";
    ECommunitySection[ECommunitySection["Goods"] = 5] = "Goods";
})(ECommunitySection = exports.ECommunitySection || (exports.ECommunitySection = {}));
var ECommunityMemberStatus;
(function (ECommunityMemberStatus) {
    ECommunityMemberStatus[ECommunityMemberStatus["NotMember"] = 0] = "NotMember";
    ECommunityMemberStatus[ECommunityMemberStatus["IsMember"] = 1] = "IsMember";
    ECommunityMemberStatus[ECommunityMemberStatus["NotSureWillVisit"] = 2] = "NotSureWillVisit";
    ECommunityMemberStatus[ECommunityMemberStatus["DeclinedInvite"] = 3] = "DeclinedInvite";
    ECommunityMemberStatus[ECommunityMemberStatus["RequestSent"] = 4] = "RequestSent";
    ECommunityMemberStatus[ECommunityMemberStatus["Invited"] = 5] = "Invited";
})(ECommunityMemberStatus = exports.ECommunityMemberStatus || (exports.ECommunityMemberStatus = {}));
var ECommunityWallPrivacy;
(function (ECommunityWallPrivacy) {
    ECommunityWallPrivacy[ECommunityWallPrivacy["Disabled"] = 0] = "Disabled";
    ECommunityWallPrivacy[ECommunityWallPrivacy["Open"] = 1] = "Open";
    ECommunityWallPrivacy[ECommunityWallPrivacy["Restricted"] = 2] = "Restricted";
    ECommunityWallPrivacy[ECommunityWallPrivacy["Closed"] = 3] = "Closed";
})(ECommunityWallPrivacy = exports.ECommunityWallPrivacy || (exports.ECommunityWallPrivacy = {}));
