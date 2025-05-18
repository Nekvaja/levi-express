import { SeatRow } from "../SeatRow/SeatRow";
import "./SeatPicker.css";


export const SeatPicker = ({seats, selectedSeat}) => {
    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                <div className="seats">

                {seats.map((seat, index) => (
                <SeatRow key={index} row={seat} rowSelectedSeat={selectedSeat}/>
                    ))}
                </div>
            </div>

        </>
    )
}