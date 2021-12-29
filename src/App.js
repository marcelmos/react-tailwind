import React, { useState } from 'react';
import Block from './components/Block';
import DataNode from './components/DataNode';
// import Navigation from './components/Navigation/Navigation';
import AddPlantForm from './components/AddPlantForm';

function App() {
  const initData = [
      {name: 'Strelicja Królewska', waterIn: 2, waterCycle: 7, image: 'strelicja_krolewska.webp'},
      {name: 'Storczyk', waterIn: -5, waterCycle: 15, image: 'storczyk.jpg'},
      {name: 'Wrzos', waterIn: 2, waterCycle: 5, image: 'wrzosy.jpg'},
      {name: 'Paproć "Macho"', waterIn: 2, waterCycle: 6, image: 'paproc-macho.jpg'},
    ];

  const [ dataInfo, setDataInfo ] = useState(0);
  const [ displayNode, setDisplayNode ] = useState(false);
  const [ addForm, setAddForm ] = useState(false);
  const [ dataArray, setDataArray ] = useState(initData);

  const passData = (data) => {
    setDataInfo(data);
    setDisplayNode(true)
  };

  const switchNodeStatus = (node) => {

    switch(node){
      case 'dataNode':
        setDisplayNode(false);
        break;

      case 'addFormNode':
        if(addForm === true){
          setAddForm(false);
        }else{
          setAddForm(true);
        }
        break;

      default:
        console.error(`[App/function: switchNodeStatus]: Node "${node}" not found.`);
        break;
    }
  };

  const updatePlant = (plantData) => {
    console.log(plantData);
  };

  const addPlant = (data) => {
    console.log(data);
    setDataArray([...dataArray, data]);
  }

  return (
    <main className='bg-gray-200 min-h-screen'>
      <div className='h-full py-3 text-center shadow-md'>
        <h1 className='text-xl text-blue-500 font-extrabold'>Water<span className='text-green-700 italic'>Me</span></h1>
      </div>

      <div className='py-5 px-3 bg-gray-100 min-h-full grid grid-row-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center'>
        {dataArray.map((itemData, index) => {
          return <Block key={index} blockCallback={()=>passData(index)} data={itemData} />
        })}

        <button onClick={()=>switchNodeStatus('addFormNode')} className="bg-white w-full sm:w-44 md:w-52 xl:w-60 h-32 sm:h-full rounded-xl shadow-md flex p-2 flex-row sm:flex-col relative justify-start sm:justify-between items-center">
            <div className="w-28 sm:min-w-full max-h-50 h-full bg-gray-200 rounded-xl text-8xl text-center self-center text-white">+</div>
            <div className="flex flex-col h-full sm:justify-between py-2 px-3 sm:mt-3">
                <p className="text-lg font-bold text-left sm:text-center">Add new plant</p>
            </div>
        </button>

      </div>
        <DataNode 
          dataDB={dataArray[dataInfo]} 
          plantIndex={dataInfo} 
          isNodeVisible={displayNode} 
          updatePlant={()=>updatePlant(dataInfo)} 
          nodeCallback={()=>switchNodeStatus('dataNode')} />
        <AddPlantForm
          isFormVisible={addForm}
          nodeCallback={()=>switchNodeStatus('addFormNode')}
          addNewPlant={(e) => addPlant(e)} />

      {/* <Navigation
        nodeCallback={()=>switchNodeStatus('addFormNode')} /> */}
    </main>
  );

}
export default App;