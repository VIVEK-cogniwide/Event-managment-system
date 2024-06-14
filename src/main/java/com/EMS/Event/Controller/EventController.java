package com.EMS.Event.Controller;
import com.EMS.Event.Model.Event;
import com.EMS.Event.Service.EventService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.lang.String;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {


    @Autowired
    private EventService eventService;

    @GetMapping(value = "/events-get")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventByEventId(@PathVariable Long id) {
        Event event = eventService.getEventByEventId(id);
        return ResponseEntity.ok(event);
    }


    @PostMapping(value = "/events-register")
    public ResponseEntity<Event> createEvent(@RequestBody Event event)
    {
        Event createdEvent = eventService.saveEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event event = eventService.getEventByEventId(id);
        if (event != null) {
            event.setEventName(eventDetails.getEventName());
            event.setEventDate(eventDetails.getEventDate());
            event.setLocation(eventDetails.getLocation());
            event.setDescription(eventDetails.getDescription());
            Event updatedEvent = eventService.saveEvent(event);
            return ResponseEntity.ok(updatedEvent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/register")
    public ResponseEntity<Event> registerUserForEvent(@RequestBody RegistrationRequest request) {

        try {
            Event updatedEvent = eventService.registerUserForEvent(request.getEventId(), request.getUserId());
            return ResponseEntity.ok(updatedEvent);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @Setter
    @Getter
    public static class RegistrationRequest {
        // Getters and setters
        private Long eventId;
        private Long userId;
        private String password;


    }

}
