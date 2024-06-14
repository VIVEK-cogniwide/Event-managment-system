package com.EMS.Event.Model;

import jakarta.persistence.*;

import lombok.Getter;

import lombok.Setter;

import org.jetbrains.annotations.NotNull;

import java.util.Date;

import java.util.HashSet;

import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "event")
public class Event {

    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;
    @NotNull

    private String eventName;

    private Date eventDate;

    private String location;

    private String description;

    @OneToMany(mappedBy = "events")

    private Set<User> registeredUsers = new HashSet<>();


}

