package com.twitter.utils;

import com.twitter.model.Like;
import com.twitter.model.Twit;
import com.twitter.model.User;

public class TwitUtils {

    public static boolean isLikedByReqUser(User reqUser, Twit twit) {
        for(Like like: twit.getLikes()) {
            if(like.getUser().getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }

    public static boolean isRetwitedByReqUser(User reqUser, Twit twit) {
        for (User user: twit.getRetwitUser()) {
            if (user.getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }
}
