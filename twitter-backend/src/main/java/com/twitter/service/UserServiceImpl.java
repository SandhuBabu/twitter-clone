package com.twitter.service;

import com.twitter.config.JwtProvider;
import com.twitter.exception.UserException;
import com.twitter.model.User;
import com.twitter.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JwtProvider jwtProvider;


    @Override
    public User findUserById(Long userId) throws UserException {
        return userRepo.findById(userId).orElseThrow(() -> new UserException("No user found with given id"));
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        String email = jwtProvider.getEmailFromToken(jwt);
        User user = userRepo.findByEmail(email);
        if(user == null) {
            throw new UserException("No user found with given email");
        }
        return user;
    }

    @Override
    public User updateUser(Long userId, User req) throws UserException {
        User user = findUserById(userId);
        if(req.getFullName() != null) {
            user.setFullName(req.getFullName());
        }

        if(req.getImage() != null) {
            user.setImage(req.getImage());
        }

        if(req.getBackgroundImage() != null) {
            user.setBackgroundImage(req.getBackgroundImage());
        }

        if(req.getBirthDate() != null) {
            user.setBirthDate(req.getBirthDate());
        }

        if(req.getLocation() != null) {
            user.setLocation(req.getLocation());
        }

        if(req.getBio() != null) {
            user.setBio(req.getBio());
        }

        if(req.getWebsite() != null) {
            user.setWebsite(req.getWebsite());
        }

        return userRepo.save(user);
    }

    @Override
    public User followUser(Long userId, User user) throws UserException {

        User followToUser = findUserById(userId);
        if(user.getFollowing().contains(followToUser) && followToUser.getFollowers().contains(user)) {
            user.getFollowing().remove(followToUser);
            followToUser.getFollowers().remove(user);
        } else {
            user.getFollowing().add(followToUser);
            followToUser.getFollowers().add(user);
        }

        userRepo.save(followToUser);
        userRepo.save(user);
        return followToUser;
    }

    @Override
    public List<User> searchUser(String query) {
        return userRepo.searchUser(query);
    }
}
