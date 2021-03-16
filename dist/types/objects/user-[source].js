"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESex = exports.ESchoolType = exports.ERelationsStatus = exports.EAlcohol = exports.ESmoking = exports.ELifeMain = exports.EPeopleMain = exports.EPolitical = exports.EPlatform = exports.EFriendStatus = void 0;
var EFriendStatus;
(function (EFriendStatus) {
    EFriendStatus[EFriendStatus["NotFriend"] = 0] = "NotFriend";
    EFriendStatus[EFriendStatus["RequestSent"] = 1] = "RequestSent";
    EFriendStatus[EFriendStatus["IsSubscribed"] = 2] = "IsSubscribed";
    EFriendStatus[EFriendStatus["IsFriend"] = 3] = "IsFriend";
})(EFriendStatus = exports.EFriendStatus || (exports.EFriendStatus = {}));
var EPlatform;
(function (EPlatform) {
    EPlatform[EPlatform["Mobile"] = 1] = "Mobile";
    EPlatform[EPlatform["IPhone"] = 2] = "IPhone";
    EPlatform[EPlatform["IPad"] = 3] = "IPad";
    EPlatform[EPlatform["Android"] = 4] = "Android";
    EPlatform[EPlatform["WindowsPhone"] = 5] = "WindowsPhone";
    EPlatform[EPlatform["Windows10"] = 6] = "Windows10";
    EPlatform[EPlatform["Desktop"] = 7] = "Desktop";
})(EPlatform = exports.EPlatform || (exports.EPlatform = {}));
var EPolitical;
(function (EPolitical) {
    EPolitical[EPolitical["Communist"] = 1] = "Communist";
    EPolitical[EPolitical["Socialist"] = 2] = "Socialist";
    EPolitical[EPolitical["Moderate"] = 3] = "Moderate";
    EPolitical[EPolitical["Liberal"] = 4] = "Liberal";
    EPolitical[EPolitical["Conservative"] = 5] = "Conservative";
    EPolitical[EPolitical["Monarchical"] = 6] = "Monarchical";
    EPolitical[EPolitical["Ultraconservative"] = 7] = "Ultraconservative";
    EPolitical[EPolitical["Indifferent"] = 8] = "Indifferent";
    EPolitical[EPolitical["Libertarian"] = 9] = "Libertarian";
})(EPolitical = exports.EPolitical || (exports.EPolitical = {}));
var EPeopleMain;
(function (EPeopleMain) {
    EPeopleMain[EPeopleMain["SmartAndCreative"] = 1] = "SmartAndCreative";
    EPeopleMain[EPeopleMain["KindnessAndHonesty"] = 2] = "KindnessAndHonesty";
    EPeopleMain[EPeopleMain["BeautyAndHealth"] = 3] = "BeautyAndHealth";
    EPeopleMain[EPeopleMain["PowerAndWealth"] = 4] = "PowerAndWealth";
    EPeopleMain[EPeopleMain["CourageAndPerseverance"] = 5] = "CourageAndPerseverance";
    EPeopleMain[EPeopleMain["HumorAndLoveForLife"] = 6] = "HumorAndLoveForLife";
})(EPeopleMain = exports.EPeopleMain || (exports.EPeopleMain = {}));
var ELifeMain;
(function (ELifeMain) {
    ELifeMain[ELifeMain["FamilyAndChildren"] = 1] = "FamilyAndChildren";
    ELifeMain[ELifeMain["CareerAndMoney"] = 2] = "CareerAndMoney";
    ELifeMain[ELifeMain["EntertainmentAndRecreation"] = 3] = "EntertainmentAndRecreation";
    ELifeMain[ELifeMain["ScienceAndResearch"] = 4] = "ScienceAndResearch";
    ELifeMain[ELifeMain["ImprovingTheWorld"] = 5] = "ImprovingTheWorld";
    ELifeMain[ELifeMain["SelfDevelopment"] = 6] = "SelfDevelopment";
    ELifeMain[ELifeMain["BeautyAndArt"] = 7] = "BeautyAndArt";
    ELifeMain[ELifeMain["FameAndInfluence"] = 8] = "FameAndInfluence";
})(ELifeMain = exports.ELifeMain || (exports.ELifeMain = {}));
var ESmoking;
(function (ESmoking) {
    ESmoking[ESmoking["SharplyNegative"] = 1] = "SharplyNegative";
    ESmoking[ESmoking["Negative"] = 2] = "Negative";
    ESmoking[ESmoking["Compromise"] = 3] = "Compromise";
    ESmoking[ESmoking["Neutral"] = 4] = "Neutral";
    ESmoking[ESmoking["Positive"] = 5] = "Positive";
})(ESmoking = exports.ESmoking || (exports.ESmoking = {}));
var EAlcohol;
(function (EAlcohol) {
    EAlcohol[EAlcohol["SharplyNegative"] = 1] = "SharplyNegative";
    EAlcohol[EAlcohol["Negative"] = 2] = "Negative";
    EAlcohol[EAlcohol["Compromise"] = 3] = "Compromise";
    EAlcohol[EAlcohol["Neutral"] = 4] = "Neutral";
    EAlcohol[EAlcohol["Positive"] = 5] = "Positive";
})(EAlcohol = exports.EAlcohol || (exports.EAlcohol = {}));
var ERelationsStatus;
(function (ERelationsStatus) {
    ERelationsStatus[ERelationsStatus["Unknown"] = 0] = "Unknown";
    ERelationsStatus[ERelationsStatus["NotMarried"] = 1] = "NotMarried";
    ERelationsStatus[ERelationsStatus["HasFriend"] = 2] = "HasFriend";
    ERelationsStatus[ERelationsStatus["Betrothed"] = 3] = "Betrothed";
    ERelationsStatus[ERelationsStatus["Married"] = 4] = "Married";
    ERelationsStatus[ERelationsStatus["Complicated"] = 5] = "Complicated";
    ERelationsStatus[ERelationsStatus["ActiveSearch"] = 6] = "ActiveSearch";
    ERelationsStatus[ERelationsStatus["InLove"] = 7] = "InLove";
    ERelationsStatus[ERelationsStatus["CivilMarried"] = 8] = "CivilMarried";
})(ERelationsStatus = exports.ERelationsStatus || (exports.ERelationsStatus = {}));
var ESchoolType;
(function (ESchoolType) {
    ESchoolType[ESchoolType["School"] = 0] = "School";
    ESchoolType[ESchoolType["Gymnasium"] = 1] = "Gymnasium";
    ESchoolType[ESchoolType["Lyceum"] = 2] = "Lyceum";
    ESchoolType[ESchoolType["BoardingSchool"] = 3] = "BoardingSchool";
    ESchoolType[ESchoolType["EveningSchool"] = 4] = "EveningSchool";
    ESchoolType[ESchoolType["MusicSchool"] = 5] = "MusicSchool";
    ESchoolType[ESchoolType["SportsSchool"] = 6] = "SportsSchool";
    ESchoolType[ESchoolType["ArtSchool"] = 7] = "ArtSchool";
    ESchoolType[ESchoolType["College"] = 8] = "College";
    ESchoolType[ESchoolType["ProfessionalLyceum"] = 9] = "ProfessionalLyceum";
    ESchoolType[ESchoolType["TechnicalSchool"] = 10] = "TechnicalSchool";
    ESchoolType[ESchoolType["PTU"] = 11] = "PTU";
    ESchoolType[ESchoolType["Institute"] = 12] = "Institute";
    ESchoolType[ESchoolType["ArtisticSchool"] = 12] = "ArtisticSchool";
})(ESchoolType = exports.ESchoolType || (exports.ESchoolType = {}));
var ESex;
(function (ESex) {
    ESex[ESex["Unknown"] = 0] = "Unknown";
    ESex[ESex["Female"] = 1] = "Female";
    ESex[ESex["Male"] = 2] = "Male";
})(ESex = exports.ESex || (exports.ESex = {}));
