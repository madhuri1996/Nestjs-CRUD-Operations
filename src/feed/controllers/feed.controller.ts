import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('feed')
export class FeedController {

    constructor(private feedService:FeedService) {}

    @Post()
    create(@Body() post:FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post);
    }

    @Get()
    getAllPosts(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts();
    }

    @Put(':id')
    updatePost(
        @Param('id') id:string,
        @Body() feedPost: FeedPost
    ): Observable<UpdateResult> {
        return this.feedService.updatePost(id,feedPost);
    }

    @Delete(':id')
    deletePost(
        @Param('id') id:string
    ): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }
}
