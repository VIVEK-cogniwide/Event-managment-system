package com.EMS.Event.Service;


import com.EMS.Event.Model.Event;
import com.EMS.Event.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventrepository;

    public List<Event> getAllEvents() {
        return eventrepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventrepository.findById(id);
    }

    public Event saveEvent(Event event) {
        return eventrepository.save(event);

    }

    public void deleteEvent(Long id) {
        eventrepository.deleteById(id);
    }
}
