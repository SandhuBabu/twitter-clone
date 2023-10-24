package com.twitter.service;

import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Like;
import com.twitter.model.User;

import java.util.List;

public interface LikeService {

    public Like likeTwit(Long twitId, User user) throws UserException, TwitException;
    public List<Like> getAllLikes(Long twitId) throws TwitException;


}
