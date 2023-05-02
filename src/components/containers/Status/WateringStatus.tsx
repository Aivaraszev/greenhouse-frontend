import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import RectIcon from "src/components/UI/RectIcon";
import { DateTime } from "luxon";
import durationToString from "src/utils/durationToString";

interface WateringStatusProps {
  isOnline: boolean;
  nextWatering: DateTime;
}

export default function WateringStatus({
  isOnline,
  nextWatering,
}: WateringStatusProps) {
  const status = isOnline ? "ON" : "OFF";
  const timeToWatering = durationToString(nextWatering.diff(DateTime.now()));

  return (
    <Link to="/watering">
      <div className="p-3 rounded-lg hover:bg-slate-700 duration-150 cursor-pointer bg-[#202329]">
        <div>
          <RectIcon
            bgColor={"white"}
            icon={<AiOutlineCalendar className="w-full h-full" />}
          />
        </div>
        <div className="mt-3 flex text-white flex-col justify-between ">
          <div className="font-bold">Water System: {status}</div>
          <div className="text-xs mt-2">
            Next watering in:
            <span className="font-bold whitespace-nowrap">
              {" "}
              {timeToWatering}
            </span>{" "}
          </div>
        </div>
      </div>
    </Link>
  );
}
