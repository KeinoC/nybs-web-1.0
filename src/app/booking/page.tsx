import Calendar from "../_components/Calendar";

export default function Booking() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* <div className="flex flex-col items-center justify-center w-full h-full">
        Part 2
      </div> */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col items-center text-4xl lg:text-9xl py-12 font-bold justify-center w-full h-full">
          Booking
        </div>
        <Calendar />
      </div>
    </div>
  );
}