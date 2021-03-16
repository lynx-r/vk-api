"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
var repositories_1 = require("../repositories");
var notImplemented = function () {
    throw new Error('Unable to call repository method due to Core was not initialized');
};
var Core = /** @class */ (function () {
    function Core() {
        this.account = new repositories_1.AccountRepository(notImplemented);
        this.auth = new repositories_1.AuthRepository(notImplemented);
        this.database = new repositories_1.DatabaseRepository(notImplemented);
        this.donut = new repositories_1.DonutRepository(notImplemented);
        this.downloadedGames = new repositories_1.DownloadedGamesRepository(notImplemented);
        this.gifts = new repositories_1.GiftsRepository(notImplemented);
        this.likes = new repositories_1.LikesRepository(notImplemented);
        this.messages = new repositories_1.MessagesRepository(notImplemented);
        this.notifications = new repositories_1.NotificationsRepository(notImplemented);
        this.specials = new repositories_1.SpecialsRepository(notImplemented);
        this.statEvents = new repositories_1.StatEventsRepository(notImplemented);
        this.stats = new repositories_1.StatsRepository(notImplemented);
        this.status = new repositories_1.StatusRepository(notImplemented);
        this.storage = new repositories_1.StorageRepository(notImplemented);
        this.streaming = new repositories_1.StreamingRepository(notImplemented);
        this.users = new repositories_1.UsersRepository(notImplemented);
        this.wall = new repositories_1.WallRepository(notImplemented);
        this.utils = new repositories_1.UtilsRepository(notImplemented);
        this.widgets = new repositories_1.WidgetsRepository(notImplemented);
    }
    Core.prototype.init = function (addRequestToQueue) {
        this.account = new repositories_1.AccountRepository(addRequestToQueue);
        this.auth = new repositories_1.AuthRepository(addRequestToQueue);
        this.database = new repositories_1.DatabaseRepository(addRequestToQueue);
        this.donut = new repositories_1.DonutRepository(addRequestToQueue);
        this.downloadedGames = new repositories_1.DownloadedGamesRepository(addRequestToQueue);
        this.gifts = new repositories_1.GiftsRepository(addRequestToQueue);
        this.likes = new repositories_1.LikesRepository(addRequestToQueue);
        this.messages = new repositories_1.MessagesRepository(addRequestToQueue);
        this.notifications = new repositories_1.NotificationsRepository(addRequestToQueue);
        this.specials = new repositories_1.SpecialsRepository(addRequestToQueue);
        this.statEvents = new repositories_1.StatEventsRepository(addRequestToQueue);
        this.stats = new repositories_1.StatsRepository(addRequestToQueue);
        this.status = new repositories_1.StatusRepository(addRequestToQueue);
        this.storage = new repositories_1.StorageRepository(addRequestToQueue);
        this.streaming = new repositories_1.StreamingRepository(addRequestToQueue);
        this.users = new repositories_1.UsersRepository(addRequestToQueue);
        this.wall = new repositories_1.WallRepository(addRequestToQueue);
        this.utils = new repositories_1.UtilsRepository(addRequestToQueue);
        this.widgets = new repositories_1.WidgetsRepository(addRequestToQueue);
    };
    /**
     * Adds new repository if it is not implemented.
     * @param {N extends keyof this ? never : N} name
     * @param {{new(sendRequest: TSendRequest): R, prototype: R}} Repo
     * @param {TSendRequest} addRequestToQueue
     * @returns {this & Record<N, R>}
     */
    Core.prototype.addRepository = function (name, Repo, addRequestToQueue) {
        Object.defineProperty(this, name, { value: new Repo(addRequestToQueue) });
        return this;
    };
    return Core;
}());
exports.Core = Core;
