package com.EMS.Event.Repository;
import com.EMS.Event.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
    Event getEventByEventId(Long id);
}
