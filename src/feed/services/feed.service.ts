import { Injectable } from '@nestjs/common';
import { FeedPost } from '../models/post.interface';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPostEntity } from '../models/post.entity';
import {from, Observable} from 'rxjs';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository:Repository<FeedPostEntity>
    ) {
    }

    createPost(post:FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(post));
    }

    findAllPosts(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }

    updatePost(id:string,feedPost:FeedPost): Observable<UpdateResult> {
        return from(this.feedPostRepository.update(id,feedPost));
    }

    deletePost(id:string): Observable<DeleteResult> {
        return from(this.feedPostRepository.delete(id));
    }

}
