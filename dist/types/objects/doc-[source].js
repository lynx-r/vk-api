/**
 * List of doc types.
 * @see https://vk.com/dev/objects/doc
 */
export var EDocType;
(function (EDocType) {
    EDocType[EDocType["Text"] = 1] = "Text";
    EDocType[EDocType["Archive"] = 2] = "Archive";
    EDocType[EDocType["Gif"] = 3] = "Gif";
    EDocType[EDocType["Image"] = 4] = "Image";
    EDocType[EDocType["Audio"] = 5] = "Audio";
    EDocType[EDocType["Video"] = 6] = "Video";
    EDocType[EDocType["EBook"] = 7] = "EBook";
    EDocType[EDocType["Unknown"] = 8] = "Unknown";
})(EDocType || (EDocType = {}));
