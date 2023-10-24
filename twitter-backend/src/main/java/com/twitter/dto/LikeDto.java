package com.twitter.dto;

import lombok.Data;

@Data
public class LikeDto {
    private long id;
    private UserDto user;
    private TwitDto twit;
}
