package com.twitter.utils;

import com.twitter.model.User;

public class UserUtils {
    public static boolean iseqUser(User reqUser, User user2) {
        return  reqUser.getId().equals(user2.getId());
    }

    public static boolean isFollowedByReqUser(User reqUser, User user2) {
        return reqUser.getFollowing().contains(user2);
    }
}
