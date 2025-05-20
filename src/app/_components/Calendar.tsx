'use client'
import { useState } from "react";

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const timeslots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<number[]>([]);


  const bookedTimeslots = [
    {
      date: "2025-05-19",
      from: "8:00 AM",
      to: "11:00 AM"
    },
    {
      date: "2025-05-20",
      from: "10:00 AM",
      to: "11:00 AM"
    },
    {
      date: "2025-05-21",
      from: "10:00 AM",
      to: "1:00 PM"
    },
    {
      date: "2025-05-22",
      from: "10:00 AM",
      to: "2:00 PM"
    }
  ]

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDay(null);
    setSelectedSlots([]);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDay(null);
    setSelectedSlots([]);
  };

  // Helper to get date string in YYYY-MM-DD
  const getDateString = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  // Helper to get index of a timeslot string
  const getTimeslotIndex = (slot: string) => timeslots.findIndex(t => t === slot);

  // For the selected day, get indices of booked slots
  const bookedIndices: number[] = [];
  if (selectedDay) {
    const dateStr = getDateString(currentYear, currentMonth, selectedDay);
    bookedTimeslots.forEach(b => {
      if (b.date === dateStr) {
        const fromIdx = getTimeslotIndex(b.from);
        const toIdx = getTimeslotIndex(b.to);
        if (fromIdx !== -1 && toIdx !== -1) {
          for (let i = fromIdx; i <= toIdx; i++) bookedIndices.push(i);
        }
      }
    });
  }

  return (
    <div className="w-fit min-w-1/2 mx-auto p-4 rounded-lg shadow-lg bg-light text-charcoal dark:bg-charcoal dark:text-light">
      <div className="flex justify-between gap-6 w-fit justify-self-center items-center mb-4">
        <button onClick={handlePrevMonth} className="px-2 py-1 rounded bg-accent text-charcoal dark:bg-beauty dark:text-light font-semibold">Prev</button>
        <h2 className="text-xl font-bold">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </h2>
        <button onClick={handleNextMonth} className="px-2 py-1 rounded bg-accent text-charcoal dark:bg-beauty dark:text-light font-semibold">Next</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="font-semibold">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array(firstDayOfWeek).fill(null).map((_, i) => (
          <div key={"empty-" + i}></div>
        ))}
        {Array(daysInMonth).fill(null).map((_, i) => {
          const day = i + 1;
          const isSelected = selectedDay === day;
          return (
            <button
              key={day}
              className={`py-2 rounded-full transition-all font-semibold
                ${isSelected ? 'bg-[#C47DD9] text-light dark:bg-accent dark:text-charcoal' :
                  'bg-light text-charcoal dark:bg-charcoal dark:text-light hover:bg-beauty hover:text-light dark:hover:bg-accent dark:hover:text-charcoal border border-beauty dark:border-accent'}
              `}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          );
        })}
      </div>
      {selectedDay && (
        <div className="mt-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2">Available Timeslots for {selectedDay}/{currentMonth + 1}/{currentYear}</h3>
          <div className="flex flex-wrap gap-2 select-none">
            {timeslots.map((slot, idx) => {
              const isSelected = selectedSlots.includes(idx);
              const isBooked = bookedIndices.includes(idx);
              const lastSelected = (selectedSlots.length > 0 && typeof selectedSlots[selectedSlots.length - 1] === 'number') ? selectedSlots[selectedSlots.length - 1]! : idx;
              return (
                <button
                  key={slot}
                  className={`px-4 py-2 no-wrap border rounded-full transition-all font-semibold
                    ${isBooked ? 'bg-gray-400 text-gray-700 border-gray-500 cursor-not-allowed' :
                      isSelected ? 'bg-blue-600 text-white border-blue-700' :
                        'bg-zinc-100 text-zinc-900 border-zinc-300 hover:bg-blue-200 hover:text-blue-900'}
                  `}
                  disabled={isBooked}
                  onClick={() => {
                    if (isBooked) return;
                    if (isSelected) {
                      const min = Math.min(...selectedSlots);
                      const max = Math.max(...selectedSlots);
                      if (idx === min) {
                        // Deselect all before (shouldn't happen, min is first)
                        setSelectedSlots([idx]);
                      } else if (idx === max) {
                        // Deselect all after (shouldn't happen, max is last)
                        setSelectedSlots([idx]);
                      } else {
                        // Deselect all after the clicked slot (keep from min to idx)
                        setSelectedSlots(selectedSlots.filter(i => i <= idx));
                      }
                    } else if (selectedSlots.length === 0) {
                      setSelectedSlots([idx]);
                    } else {
                      // Select all slots between lastSelected and idx (inclusive), skipping booked
                      const min = Math.min(lastSelected, idx);
                      const max = Math.max(lastSelected, idx);
                      const range = [];
                      for (let i = min; i <= max; i++) {
                        if (!bookedIndices.includes(i)) range.push(i);
                      }
                      setSelectedSlots(range);
                    }
                  }}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <div className="mt-6 flex flex-col items-center justify-center">
        <button onClick={() => console.log(selectedSlots)} disabled={selectedSlots.length === 0} className="px-4 cursor-pointer py-2 bg-beauty text-light rounded-full hover:bg-accent hover:text-charcoal dark:bg-accent dark:text-charcoal dark:hover:bg-beauty dark:hover:text-light font-semibold">Book</button>
      </div>
    </div>
  );
}