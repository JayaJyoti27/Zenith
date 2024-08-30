import React, { useState } from "react";
import Header from "./Header";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MdDeleteForever } from "react-icons/md";
const localizer = momentLocalizer(moment);

const Calender = () => {
  const [calenderTasks, setCalenderTasks] = useState(() => {
    const savedCalender = localStorage.getItem("calenderTasks");
    return savedCalender ? JSON.parse(savedCalender) : [];
  });
  const [newEvent, setNewEvent] = useState({
    title: "",
    details: "",
    start: new Date(),
    end: new Date(),
  });

  const addNewEvent = (slotInfo) => {
    const newEvent = {
      title: prompt("Event Title"),
      details: prompt("add details"),
      start: slotInfo.start,
      end: slotInfo.end,
      id: Date.now(),
    };
    const updatedEvent = [...calenderTasks, newEvent];
    setCalenderTasks(updatedEvent);
    localStorage.setItem("calenderTasks", JSON.stringify(updatedEvent));
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const eventSelected = (event) => {
    setSelectedDate((prevSelectedDate) =>
      prevSelectedDate && prevSelectedDate.id === event.id ? null : event
    );
  };
  const deleteDate = (eventId) => {
    const savedCalender = JSON.parse(localStorage.getItem("calenderTasks"));
    const updated = savedCalender.filter((task) => task.id !== eventId);
    localStorage.setItem("calenderTasks", JSON.stringify(updated));
    setCalenderTasks(updated);
  };

  return (
    <div className="grid grid-cols-9">
      <div className="col-span-2 h-[100vh] border border-1 bg-5">
        <Header />
      </div>
      <div className="col-span-7 h-[100vh] border bg-3 text-6">
        <div className="p-5 border text-xl">
          <Calendar
            localizer={localizer}
            events={calenderTasks}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectSlot={addNewEvent}
            onSelectEvent={eventSelected}
            views={["month", "week", "day"]}
          />
        </div>

        {selectedDate && (
          <div className="p-2 m-2 ">
            <h2 className="text-6 text-xl font-bold flex">
              Event Details{" "}
              <MdDeleteForever
                className="absolute right-4 bottom-0 text-4xl cursor-pointer"
                onClick={() => deleteDate(selectedDate.id)}
              />{" "}
            </h2>
            <p>
              {" "}
              <span className="text-black font-bold ">Title :</span>
              {selectedDate.title}
            </p>
            <p>
              <span className="text-black font-bold ">Details :</span>
              {selectedDate.details}
            </p>
            <p>
              <span className="text-black font-bold ">Start :</span>
              {selectedDate.start.toString()}
            </p>
            <p>
              <span className="text-black font-bold ">End :</span>
              {selectedDate.end.toString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calender;
