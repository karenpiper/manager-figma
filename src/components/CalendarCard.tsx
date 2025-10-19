import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CalendarCard() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = ["22", "23", "24", "25", "26", "27"];
  
  const timeSlots = [
    "8:00 am",
    "9:00 am",
    "10:00 am",
    "11:00 am",
  ];

  const events = [
    {
      day: "Tue",
      time: "9:00 am",
      title: "Weekly Team Sync",
      subtitle: "Discuss progress on projects",
      attendees: 3,
      color: "#2d2d2d",
      textColor: "white",
    },
    {
      day: "Wed",
      time: "10:00 am",
      title: "Onboarding Session",
      subtitle: "Introduction for new hires",
      attendees: 2,
      color: "white",
      textColor: "black",
    },
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-black/5">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-1 hover:bg-black/5 rounded transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-6">
          <span className="text-[13px] text-black/50">August</span>
          <span className="text-[13px]">September 2024</span>
          <span className="text-[13px] text-black/50">October</span>
        </div>
        <button className="p-1 hover:bg-black/5 rounded transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        {weekDays.map((day, index) => (
          <div key={day} className="text-center">
            <div className="text-[11px] text-black/50 mb-1">{day}</div>
            <div className="text-[13px]">{dates[index]}</div>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="space-y-3">
        {timeSlots.map((time) => (
          <div key={time} className="grid grid-cols-[80px_1fr] gap-4">
            <div className="text-[12px] text-black/50">{time}</div>
            <div className="grid grid-cols-6 gap-4 relative">
              {/* Event cards */}
              {events
                .filter((event) => event.time === time)
                .map((event, eventIndex) => {
                  const dayIndex = weekDays.indexOf(event.day);
                  return (
                    <div
                      key={eventIndex}
                      className="col-span-2 rounded-xl p-3 border border-black/10"
                      style={{
                        backgroundColor: event.color,
                        gridColumnStart: dayIndex + 1,
                        gridColumnEnd: dayIndex + 3,
                        color: event.textColor,
                      }}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex-1">
                          <h4 className="text-[12px] mb-0.5">{event.title}</h4>
                          <p className="text-[10px] opacity-60">{event.subtitle}</p>
                        </div>
                        <div className="flex -space-x-2">
                          {Array.from({ length: event.attendees }).map((_, i) => (
                            <Avatar key={i} className="w-5 h-5 border-2 border-white">
                              <AvatarFallback className="text-[8px] bg-gray-300">
                                {i === 0 ? "JD" : i === 1 ? "SK" : "MP"}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}