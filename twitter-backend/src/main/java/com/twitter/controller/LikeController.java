package com.twitter.controller;


import com.twitter.dto.LikeDto;
import com.twitter.dto.mapper.LikeDtoMapper;
import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Like;
import com.twitter.model.User;
import com.twitter.service.LikeService;
import com.twitter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {
    @Autowired
    private UserService userService;

    @Autowired
    private LikeService likeService;

    @PostMapping("/{twitId}/like")
    public ResponseEntity<LikeDto> likeTwit(
            @PathVariable Long twitId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeTwit(twitId, user);
        LikeDto likeDto = LikeDtoMapper.toLikeDto(like, user);

        return ResponseEntity.status(HttpStatus.CREATED).body(likeDto);
    }

    @GetMapping("/twit/{twitId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(
            @PathVariable Long twitId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        List<Like> likes = likeService.getAllLikes(twitId);
        List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(likes, user);

        return ResponseEntity.ok(likeDtos);
    }


}
