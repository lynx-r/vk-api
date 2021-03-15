import { IRepositories } from '../types';
import { AuthRepository, DatabaseRepository, DonutRepository, LikesRepository, StorageRepository, SpecialsRepository, MessagesRepository, NotificationsRepository, StatEventsRepository, StatsRepository, StreamingRepository, UsersRepository, UtilsRepository, WidgetsRepository, GiftsRepository, DownloadedGamesRepository, AccountRepository, StatusRepository, Repository, WallRepository } from '../repositories';
import { TSendRequest } from '../types';
export declare abstract class Core implements IRepositories {
    account: AccountRepository;
    auth: AuthRepository;
    database: DatabaseRepository;
    donut: DonutRepository;
    downloadedGames: DownloadedGamesRepository;
    gifts: GiftsRepository;
    likes: LikesRepository;
    messages: MessagesRepository;
    notifications: NotificationsRepository;
    specials: SpecialsRepository;
    statEvents: StatEventsRepository;
    stats: StatsRepository;
    status: StatusRepository;
    storage: StorageRepository;
    streaming: StreamingRepository;
    users: UsersRepository;
    wall: WallRepository;
    utils: UtilsRepository;
    widgets: WidgetsRepository;
    protected init(addRequestToQueue: TSendRequest): void;
    /**
     * Adds new repository if it is not implemented.
     * @param {N extends keyof this ? never : N} name
     * @param {{new(sendRequest: TSendRequest): R, prototype: R}} Repo
     * @param {TSendRequest} addRequestToQueue
     * @returns {this & Record<N, R>}
     */
    addRepository<N extends string, R extends Repository>(name: N extends keyof this ? never : N, Repo: {
        new (sendRequest: TSendRequest): R;
        prototype: R;
    }, addRequestToQueue: TSendRequest): this & Record<N, R>;
}
