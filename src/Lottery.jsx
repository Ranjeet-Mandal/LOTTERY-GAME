import {useState} from 'react';
import './Lottery.css';
import { genTicket , sum } from './helper';

const Lottery = ()=>{
    let [ticket ,setTicket] = useState(genTicket(3));
    let isWinning  =  sum(ticket) === 15;

    const buyTicket = ()=>{
        setTicket(genTicket(3));
    }
    return <div>
        <h1>Lottery Game!</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br />
        <button className='btn ' onClick={buyTicket}>Buy New Ticket</button>
        <h2 >{isWinning && "Congratulations, You Won"}</h2>
    </div>
}
export default Lottery;