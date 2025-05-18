import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat/SelectedSeat';
import { useNavigate } from 'react-router-dom';

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
 
 const data = await response.json();
  const reservation = data.results
  console.log(reservation)
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

    {journey && <SelectedSeat number={journey.autoSeat}/> }

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
