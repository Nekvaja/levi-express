import { useEffect, useState } from "react";
import "./ReservationPage.css";
import { json, useParams } from "react-router-dom";

export const ReservationPage = () => {
    const {id} = useParams()
    const [reservation, setReservation] = useState(null)
    console.log(id)

    useEffect(() => {
        const fetchReservation = async () => {
            const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
            const json = await response.json();
            const reservationData = json.results;
            setReservation(reservationData)
            console.log(json.results.date)
        };

        fetchReservation();
        console.log(reservation)
       

    }, [])

    if (reservation) { 
    return <>
    <div className="reservation container">
    <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
    <div className="reservation__body">
      <div className="reservation__headings">
        <p>Datum cesty:</p>
        <p>Odjezd:</p>
        <p>Příjezd:</p>
        <p>Sedadlo:</p>
      </div>
      <div className="reservation__info">
        <p>{reservation.date}</p>
        <p>Bratislava, {reservation.fromCity.time}</p>
        <p>Budapest, {reservation.toCity.time}</p>
        <p>{reservation.seatNumber}</p>
      </div>
    </div>
  </div>
    </>
    }
    
}