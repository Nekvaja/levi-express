import { Seat } from "../Seat/Seat";
import "./SeatPicker.css";


export const SeatPicker = () => {
    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                <div className="seats">

<Seat number={1}/>
<Seat number={5}/>
<Seat number={8}/>
<Seat number={11}/>



                </div>
            </div>

        </>
    )
}