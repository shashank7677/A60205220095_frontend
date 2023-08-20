

import React, { useEffect, useState } from 'react';


const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const trainData = await fetch("http://20.244.56.144/train/trains/2344");
        setTrains(trainData);
      } catch (error) {
        // Handle error
      }
    };

    fetchTrainData()
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            <span>{train.name}</span>
            <span>Departure Time: {train.departureTime}</span>
            <span>{train.Hours}</span>
            <span>{train.Minutes}</span>
            <span>{train.Minutes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;

