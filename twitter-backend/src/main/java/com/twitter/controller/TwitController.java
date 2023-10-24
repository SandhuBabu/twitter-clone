package com.twitter.controller;


import com.twitter.dto.TwitDto;
import com.twitter.dto.mapper.TwitDtoMapper;
import com.twitter.exception.TwitException;
import com.twitter.exception.UserException;
import com.twitter.model.Twit;
import com.twitter.model.User;
import com.twitter.request.TwitReplyRequest;
import com.twitter.response.ApiResponse;
import com.twitter.service.TwitService;
import com.twitter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/twits")
public class TwitController {

    @Autowired
    private TwitService twitService;

    @Autowired
    private UserService userService;


    @PostMapping("/create")
    public ResponseEntity<TwitDto> createTwit(
            @RequestBody Twit req,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.createTwit(req, user);
        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);

        return ResponseEntity.status(HttpStatus.CREATED).body(twitDto);
    }

    @PostMapping("/reply")
    public ResponseEntity<TwitDto> replyTwit(
            @RequestBody TwitReplyRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.createReply(req, user);
        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);

        return ResponseEntity.status(HttpStatus.CREATED).body(twitDto);
    }

    @PutMapping("/{twitId}/retwit")
    public ResponseEntity<TwitDto> retwit(
            @PathVariable Long twitId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.retwit(twitId, user);
        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);

        return ResponseEntity.ok(twitDto);
    }

    @GetMapping("/{twitId}")
    public ResponseEntity<TwitDto> findTwitById(
            @PathVariable Long twitId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.findById(twitId);
        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);

        return ResponseEntity.ok(twitDto);
    }


    @DeleteMapping("/{twitId}")
    public ResponseEntity<ApiResponse> deleteTwitById(
            @PathVariable Long twitId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        twitService.deleteTwitById(twitId, user.getId());
        ApiResponse res = new ApiResponse("Twit deleted successfully", true);
        return ResponseEntity.ok(res);
    }

    @GetMapping
    public ResponseEntity<List<TwitDto>> getAllTwits(@RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        List<Twit> twits = twitService.findAllTwit();
        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits, user);

        return ResponseEntity.ok(twitDtos);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TwitDto>> getAllTwitsByUser(
            @PathVariable Long userId,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        List<Twit> twits = twitService.getUserTwit(user);
        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits, user);

        return ResponseEntity.ok(twitDtos);
    }

    @GetMapping("/user/{userId}/likes")
    public ResponseEntity<List<TwitDto>> findTwitByLikesContainsUser(@RequestHeader("Authorization") String jwt) throws UserException, TwitException {

        User user = userService.findUserProfileByJwt(jwt);
        List<Twit> twits = twitService.findByLikesContainsUser(user);
        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits, user);

        return ResponseEntity.ok(twitDtos);
    }

}
