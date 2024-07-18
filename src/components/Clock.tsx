import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeZone = "Asia/Hong_Kong";
      const zonedDate = formatInTimeZone(now, timeZone, "hh:mm a");
      setTime(zonedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{time} HKT</p>
    </div>
  );
};

export default Clock;
