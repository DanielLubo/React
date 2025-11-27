import './style.css';
import './bases/11-async-await';
import { getHeroesByOwner } from './tarea/02-return-array';
import { Owner } from './data/heroes';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`


console.log(getHeroesByOwner(Owner.Marvel));