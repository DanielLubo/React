import { useState } from "react";
import type { Props } from "../Interface";
import './ItemCounter.css';

export const ItemCounter = ({ name, units = 1 }: Props) => {

    const [count, setCount] = useState(units);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if (count === 1) return;
        setCount(count - 1);
    }

    return (
        <section className="item-row">

            <span className="item-text" style={{ color: count === 1 ? 'red' : 'black' }}> {name} </span>

            <button onClick={handleAdd}> +1 </button>
            <span> {count} </span>
            <button onClick={handleSubtract}> -1 </button>

        </section >
    )
}



// onMouseEnter = {() => {
//     console.log(`Mouse Enter ${name}`);
// }}