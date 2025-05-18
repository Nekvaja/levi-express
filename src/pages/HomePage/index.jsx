import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { useNavigate } from 'react-router-dom';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';

export const HomePage = () => {
    const navigate = useNavigate();

    const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData)
  }


  const HandleBuy = async () => {

  const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    action: 'create',
    seat: journey.autoSeat,
    journeyId: journey.journeyId,
  }),
});

  console.log(journey)

 const data = await response.json();
  const reservation = data.results

navigate(`/reservation/${reservation.reservationId}`);

  }


  return (
    <>
    <main>
      <JourneyPicker 
      value = {journey}
      onJourneyChange={handleJourneyChange}/>

    {journey && <JourneyDetail journey={journey.stops}/> }
    </main>

    {journey && <SeatPicker seats={journey.seats}/>}

    <div className="controls container">
      <button 
      className="btn btn--big" 
      type="button"
      onClick={HandleBuy}
      >Rezervovat</button>
    </div>

   


    </>
  );
};
