import React, { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [blockHeight, setBlockHeight] = useState<string>("");

  useEffect(() => {
    const updateLatestBlockNumber = async () => {
      try {
        const res = await fetch("https://api.blockcypher.com/v1/eth/main")
        const result = await res.json();
        setBlockHeight(result.height);
      } catch (err) {
        console.error(err)
      }
    }
    updateLatestBlockNumber()
    const interval = setInterval(updateLatestBlockNumber, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{blockHeight}</p>
    </div>
  );
};

export default Clock;
