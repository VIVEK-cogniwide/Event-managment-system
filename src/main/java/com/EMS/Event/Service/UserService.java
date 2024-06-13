package com.EMS.Event.Service;
import com.EMS.Event.Model.User;
import com.EMS.Event.Model.Event;
import com.EMS.Event.Repository.EventRepository;
import com.EMS.Event.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventRepository eventrepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Set<Event> getEventsForUser(Long userId) {
        User user = getUserById(userId);
        return user != null ? user.getEvents() : null;
    }


    public boolean authenticateUser(String email, String password) {
        User user = getUserByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    public User registerUserForEvent(Long eventId, Long userId, String password) {
        Event event = eventrepository.findById(eventId).orElse(null);
        User user = userRepository.findById(userId).orElse(null);

        if (event != null && user != null && user.getPassword().equals(password)) {
            event.getRegisteredUsers().add(user);
            eventrepository.save(event);
            return user;
        }
        throw new RuntimeException("Invalid event ID, user ID, or password");
    }


    public Event getEventById(Long eventId) {
        return eventrepository.findById(eventId).orElse(null);
    }
}