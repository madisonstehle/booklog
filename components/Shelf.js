import Card from './Card.js';
import data from '../public/data/books.json';

export default function Shelf() {
    const current = data.books.current;
    const toRead = data.books.current;
    const read = data.books.current;

    let currentArr = [];
  
    current.forEach((obj, idx) => {
      currentArr.push(
      <Card item={obj} key={idx} />
      )
    })

    return (
        <section className="flex flex-col min-h-screen">
            <h3 className='m-5 font-serif text-xl'>Currently Reading</h3>
            <div className="flex flex-wrap justify-evenly">
                {currentArr}
            </div>
        </section>
    )
}