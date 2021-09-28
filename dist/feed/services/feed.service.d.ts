import { FeedPost } from '../models/post.interface';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { Observable } from 'rxjs';
export declare class FeedService {
    private readonly feedPostRepository;
    constructor(feedPostRepository: Repository<FeedPostEntity>);
    createPost(post: FeedPost): Observable<FeedPost>;
    findAllPosts(): Observable<FeedPost[]>;
    updatePost(id: string, feedPost: FeedPost): Observable<UpdateResult>;
    deletePost(id: string): Observable<DeleteResult>;
}
