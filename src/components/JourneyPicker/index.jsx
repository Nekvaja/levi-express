import React, { useEffect, useState } from 'react';
import './style.css';



export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([])
  const [dates, setDates] = useState([])

    useEffect(() => {
      const fetchCity = async () => {
        const responseCity = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
        const jsonCity = await responseCity.json();
        setCities(jsonCity.results);
      };

      const fetchDate = async () => {
        const responseDate = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
        const jsonDate = await responseDate.json();
        setDates(jsonDate.results)
      };



  fetchCity();
  fetchDate();

    }, [])
  


  const handleSubmit = async (event) => {
  event.preventDefault();

    const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
    const json = await response.json();
    const results = json.results;

    console.log(onJourneyChange(results));
  }


  return (
    <>
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form 
      className="journey-picker__form"
      onSubmit={handleSubmit}
      >
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select 
          value={fromCity}
          onChange={(event) => setFromCity(event.target.value)
          }
          >
            
            <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select
          value={toCity}
          onChange={(event) => setToCity(event.target.value)}
          >
            
            <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select
          value={date}
          onChange={(event) => setDate(event.target.value)}
          >
            
          <DatesOptions dates={dates}/>

          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            disabled={!fromCity || !toCity || !date}
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src="/map.svg" />
    </div>
  </div>
  </>
  )
};


const CityOptions = ({cities}) => {
    return (
    <>
      <option value="">Vyberte</option>

      {cities.map((city) => (
      <option 
      key={city.code}
      value={city.code}>{city.name}</option>
           ))}
    </>
  )
  
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>

    {dates.map((date) => (
    <option 
    key={date.dateBasic}
    value={date.dateBasic}
    >{date.dateCs}</option>
    ))}
     
    </>
  )
};