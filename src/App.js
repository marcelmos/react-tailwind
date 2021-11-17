import './App.css';
import Block from './components/Block';
import Navigation from './components/Navigation/Navigation';

function App() {

  const tmpData = {
    flowers: [
      {name: 'Strelicja Królewska', waterIn: 2, waterCycle: 7, image: 'strelicja_krolewska.webp'},
      {name: 'Storczyk', waterIn: -5, waterCycle: 15, image: 'storczyk.jpg'},
      {name: 'Wrzos', waterIn: 2, waterCycle: 5, image: 'wrzosy.jpg'},
      {name: 'Paproć "Macho"', waterIn: 2, waterCycle: 6, image: 'paproc-macho.jpg'},
    ],
  };

  return (
    <main className='bg-gray-200 min-h-screen'>
      <div className='h-full py-3 text-center shadow-md'>
        <h1 className='text-xl text-blue-500 font-extrabold'>Water<span className='text-green-700 italic'>Me</span></h1>
      </div>

      <div className='py-5 px-3 bg-gray-100 min-h-full grid grid-cols-2 gap-3'>
        {tmpData.flowers.map((itemData) => {
          return <Block data={itemData} />
        })}
      </div>

      <Navigation />
    </main>
  );

}
export default App;