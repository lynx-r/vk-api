/**
 * List of market availability statuses
 * @see https://vk.com/dev/objects/market_item
 */
export var EMarketItemAvailability;
(function (EMarketItemAvailability) {
    EMarketItemAvailability[EMarketItemAvailability["Available"] = 0] = "Available";
    EMarketItemAvailability[EMarketItemAvailability["Deleted"] = 1] = "Deleted";
    EMarketItemAvailability[EMarketItemAvailability["Unavailable"] = 2] = "Unavailable";
})(EMarketItemAvailability || (EMarketItemAvailability = {}));
