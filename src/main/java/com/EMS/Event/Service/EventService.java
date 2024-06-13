package com.EMS.Event.Service;

import com.EMS.Event.Model.Event;
import com.EMS.Event.Model.User;
import com.EMS.Event.Repository.EventRepository;
import com.EMS.Event.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class EventService {

    @Autowired
    private EventRepository eventrepository;
    @Autowired
    private UserRepository userRepository;

    public Event saveEvent(Event event) {

        return eventrepository.save(event);
    }

    public List<Event> getAllEvents() {

        return eventrepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventrepository.findById(id).orElse(null);
    }



    public void deleteEvent(Long id) {
        eventrepository.deleteById(id);
    }


    public Event registerUserForEvent(Long eventId, Long userId) {

        Event event = getEventById(eventId);
        User user = userRepository.findById(userId).orElse(null);
        if (event != null && user != null) {
            event.getRegisteredUsers().add(user);
            return eventrepository.save(event);
        }
        return null;
    }
    }



