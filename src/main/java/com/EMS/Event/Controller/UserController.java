package com.EMS.Event.Controller;

import com.EMS.Event.Model.Event;
import com.EMS.Event.Model.User;
import com.EMS.Event.Security.Security;
import com.EMS.Event.Service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/register-user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        String hashedPassword = Security.hashPassword(user.getPassword());
        user.setPassword(hashedPassword);
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
    @GetMapping(value = "/register-get")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }



    @GetMapping("/user-login")
    public ResponseEntity<Set<Event>> loginUserAndGetEvents(@RequestBody String email, @RequestBody String password) {
        String hashedPassword = Security.hashPassword(password);
        if (userService.authenticateUser(email, hashedPassword)) {
            User user = userService.getUserByEmail(email);
            Set<Event> events = userService.getEventsForUser(user.getId());
            return ResponseEntity.ok(events);
        }
        return ResponseEntity.status(401).build();
    }

    @PostMapping("/login-user")
    public ResponseEntity<User> loginUser(@RequestBody @NotNull UserLoginRequest loginRequest) {
        String hashedPassword = Security.hashPassword(loginRequest.getPassword());
        boolean authenticated = userService.authenticateUser(loginRequest.getEmail(),hashedPassword);
        if (authenticated) {
            User user = userService.getUserByEmail(loginRequest.getEmail());
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).build();
        }
    }

    @Setter
    @Getter
    static class UserLoginRequest {
        // Getters and Setters
        private String email;
        private String password;

    }

    @GetMapping("/{userId}/events")
    public ResponseEntity<Set<Event>> getUserEvents(@PathVariable Long userId) {
        Set<Event> events = userService.getEventsForUser(userId);
        return events != null ? ResponseEntity.ok(events) : ResponseEntity.notFound().build();
    }

    @PostMapping("/registering-event")
    public ResponseEntity<Event> registerUserForEvent(@RequestParam Long eventId, @RequestParam Long userId, @RequestParam String password) {
        User user = userService.getUserById(userId);
        try {
            User registeruser = userService.registerUserForEvent(eventId, userId, password);
            Event event = userService.getEventById(eventId);
            return ResponseEntity.ok(event);
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(null);
        }
    }


}
