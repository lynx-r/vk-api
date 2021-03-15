import { AuthRepository, DatabaseRepository, DonutRepository, LikesRepository, StorageRepository, SpecialsRepository, MessagesRepository, NotificationsRepository, StatEventsRepository, StatsRepository, StreamingRepository, UsersRepository, UtilsRepository, WidgetsRepository, GiftsRepository, DownloadedGamesRepository, AccountRepository, StatusRepository, WallRepository, } from '../repositories';
const notImplemented = () => {
    throw new Error('Unable to call repository method due to Core was not initialized');
};
export class Core {
    constructor() {
        this.account = new AccountRepository(notImplemented);
        this.auth = new AuthRepository(notImplemented);
        this.database = new DatabaseRepository(notImplemented);
        this.donut = new DonutRepository(notImplemented);
        this.downloadedGames = new DownloadedGamesRepository(notImplemented);
        this.gifts = new GiftsRepository(notImplemented);
        this.likes = new LikesRepository(notImplemented);
        this.messages = new MessagesRepository(notImplemented);
        this.notifications = new NotificationsRepository(notImplemented);
        this.specials = new SpecialsRepository(notImplemented);
        this.statEvents = new StatEventsRepository(notImplemented);
        this.stats = new StatsRepository(notImplemented);
        this.status = new StatusRepository(notImplemented);
        this.storage = new StorageRepository(notImplemented);
        this.streaming = new StreamingRepository(notImplemented);
        this.users = new UsersRepository(notImplemented);
        this.wall = new WallRepository(notImplemented);
        this.utils = new UtilsRepository(notImplemented);
        this.widgets = new WidgetsRepository(notImplemented);
    }
    init(addRequestToQueue) {
        this.account = new AccountRepository(addRequestToQueue);
        this.auth = new AuthRepository(addRequestToQueue);
        this.database = new DatabaseRepository(addRequestToQueue);
        this.donut = new DonutRepository(addRequestToQueue);
        this.downloadedGames = new DownloadedGamesRepository(addRequestToQueue);
        this.gifts = new GiftsRepository(addRequestToQueue);
        this.likes = new LikesRepository(addRequestToQueue);
        this.messages = new MessagesRepository(addRequestToQueue);
        this.notifications = new NotificationsRepository(addRequestToQueue);
        this.specials = new SpecialsRepository(addRequestToQueue);
        this.statEvents = new StatEventsRepository(addRequestToQueue);
        this.stats = new StatsRepository(addRequestToQueue);
        this.status = new StatusRepository(addRequestToQueue);
        this.storage = new StorageRepository(addRequestToQueue);
        this.streaming = new StreamingRepository(addRequestToQueue);
        this.users = new UsersRepository(addRequestToQueue);
        this.wall = new WallRepository(addRequestToQueue);
        this.utils = new UtilsRepository(addRequestToQueue);
        this.widgets = new WidgetsRepository(addRequestToQueue);
    }
    /**
     * Adds new repository if it is not implemented.
     * @param {N extends keyof this ? never : N} name
     * @param {{new(sendRequest: TSendRequest): R, prototype: R}} Repo
     * @param {TSendRequest} addRequestToQueue
     * @returns {this & Record<N, R>}
     */
    addRepository(name, Repo, addRequestToQueue) {
        Object.defineProperty(this, name, { value: new Repo(addRequestToQueue) });
        return this;
    }
}
