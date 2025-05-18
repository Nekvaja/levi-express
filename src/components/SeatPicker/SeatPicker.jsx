import { SeatRow } from "../SeatRow/SeatRow";
import "./SeatPicker.css";

const testRow = [
  {
    number: 33,
    isOccupied: false,
  },
  {
    number: 29,
    isOccupied: true,
  },
  {
    number: 25,
    isOccupied: false,
  },
];


export const SeatPicker = ({seats}) => {
    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                <div className="seats">

                {seats.map((seat, index) => (
                <SeatRow key={index} row={seat}/>
                    ))}
                </div>
            </div>

        </>
    )
}