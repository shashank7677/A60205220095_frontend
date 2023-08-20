import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainList from '.src/components/TrainList'; 

const API_BASE_URL = 'http://20.244.56.144';

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      
      const authResponse = await axios.post(`{http://20.244.56.144}/train/auth`, {
        
      });
      const authToken = authResponse.data.access_token;

      
      const response = await axios.get(`${API_BASE_URL}/train/trains`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setTrains(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <div>
        {trains.map(train => (
          <TrainCard key={train.trainNumber} train={train} />
        ))}
      </div>
    </div>
  );
};

const TrainCard = ({ train }) => {
  const { trainName, trainNumber, departureTime, seatsAvailable, price, delayedBy } = train;

  return (
    <div className="train-card">
      <h2>{trainName}</h2>
      <p>Train Number: {trainNumber}</p>
      <p>Departure Time: {departureTime.Hours}:{departureTime.Minutes}</p>
      <p>Seats Available: Sleeper - {seatsAvailable.sleeper}, AC - {seatsAvailable.AC}</p>
      <p>Price: Sleeper - {price.sleeper}, AC - {price.AC}</p>
      <p>Delayed By: {delayedBy} minutes</p>
    </div>
  );
};
<TrainList  /> 
export default App;