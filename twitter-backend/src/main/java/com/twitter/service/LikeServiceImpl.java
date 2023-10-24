package com.twitter.service;


import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Like;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.repo.LikeRepo;
import com.twitter.repo.TwitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    private LikeRepo likeRepo;

    @Autowired
    private TwitService twitService;

    @Autowired
    private TwitRepo twitRepo;

    @Override
    public Like likeTwit(Long twitId, User user) throws UserException, TwitException {
        Like isExists = likeRepo.isLikeExist(user.getId(), twitId);
        if(isExists != null) {
            likeRepo.deleteById(isExists.getId());
            return isExists;
        }

        Twit twit = twitService.findById(twitId);
        Like like = new Like();
        like.setTwit(twit);
        like.setUser(user);

        Like savedLike = likeRepo.save(like);
        twit.getLikes().add(savedLike);
        twitRepo.save(twit);
        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long twitId) throws TwitException {
        Twit twit = twitService.findById(twitId);
        return likeRepo.findByTwitId(twitId);
    }
}
