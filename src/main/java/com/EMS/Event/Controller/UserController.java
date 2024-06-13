package com.EMS.Event.Controller;

import com.EMS.Event.Model.Event;
import com.EMS.Event.Model.User;
import com.EMS.Event.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/register-user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody User user) {

        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping(value="/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/login")
    public ResponseEntity<Set<Event>> loginUserAndGetEvents(@RequestBody String email, @RequestBody String password) {
        if (userService.authenticateUser(email, password)) {
            User user = userService.getUserByEmail(email);
            Set<Event> events = userService.getEventsForUser(user.getId());
            return ResponseEntity.ok(events);
        }
        return ResponseEntity.status(401).build();
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody UserLoginRequest loginRequest) {
        boolean authenticated = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (authenticated) {
            User user = userService.getUserByEmail(loginRequest.getEmail());
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).build();
        }
    }

    static class UserLoginRequest {
        private String email;
        private String password;

        // Getters and Setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    @GetMapping("/{userId}/events")
    public ResponseEntity<Set<Event>> getUserEvents(@PathVariable Long userId) {
        Set<Event> events = userService.getEventsForUser(userId);
        return events != null ? ResponseEntity.ok(events) : ResponseEntity.notFound().build();
    }

    @PostMapping("/register-event")
    public ResponseEntity<Event> registerUserForEvent(@RequestParam Long eventId, @RequestParam Long userId, @RequestParam String password) {
        try {
            User user = userService.registerUserForEvent(eventId, userId, password);
            Event event = userService.getEventById(eventId);
            return ResponseEntity.ok(event);
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(null);
        }
    }


}
