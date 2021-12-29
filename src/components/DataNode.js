import { DotsVerticalIcon, TrashIcon, PencilAltIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function DataNode(props){
    const isVisible = props.isNodeVisible;
    const { name, waterIn, waterCycle, image } = props.dataDB;
    const notification = <div className="w-6 h-6 bg-red-500 rounded-full absolute top-0 -left-7 text-white text-center font-extrabold animate-pulse">!</div>; 

    const [settingsVisible, setSettingsVisible] = useState(false);

    const onPress = () =>{
        props.nodeCallback();
        setTimeout(()=>{
            const el = document.querySelector('.data-node__hidden-anim');

            el.classList.add('data-node__hidden');
            el.classList.remove('data-node__hidden-anim');
        }, 301)
    };

    const removePlant = (plantIndex) => {

    };

    const updatePlantStatus = (plantIndex) =>{
        const data = {plantId: plantIndex, isWatered: true};
        console.log(props.plantIndex);
        props.updatePlant(data);
    };

    const nodeSettings = () => {
        setSettingsVisible((settingsVisible ? false : true));
        
        setTimeout(()=>{
            const el = document.querySelector('.setting-node__hidden-anim');

            if(el !== null){
                el.classList.add('setting-node__hidden');
                el.classList.remove('setting-node__hidden-anim');
            }
        }, 301)
    };

    return(
        <div className={isVisible ? 'data-node__visible' : 'data-node__hidden-anim'} >
            <div className={`fixed bottom-0 top-40 md:top-0 left-0 md:left-1/2 right-0 px-4 py-8 md:flex md:flex-col md:justify-center rounded-2xl bg-gray-200 shadow-lg z-10 ${isVisible ? 'animate-slideIn md:animate-slideInRight' : 'animate-slideOut md:animate-slideOutRight'}`}>
                <div className="flex flex-row md:flex-col mb-10">
                    <img src={'/images/'+image} alt={name} className="w-40 h-50 md:w-80 md:h-96 md:self-center md:mb-8 object-cover rounded-xl shadow-lg"/>
                    <div className="ml-5">
                        <h2 className="text-xl mb-8 md:text-3xl md:text-center">{name}</h2>
                        <p className={`md:text-xl md:mb-2 items-end relative ${(waterIn<0) ? 'text-red-500 font-bold animate-pulse ml-6' : ''}`}>Water in: {waterIn} days {(waterIn<0) ? notification : ''}</p>
                        <p className="md:text-xl">Water cycle: every {waterCycle} days</p>
                    </div>
                </div>
                <p className="flex justify-between">
                    <button onClick={()=>updatePlantStatus()} className="w-10/12 rounded-l-lg text-2xl bg-blue-400 node-btn">Water Me</button>
                    <button onClick={()=>nodeSettings()} className="w-2/12 rounded-r-lg bg-gray-500 node-btn flex justify-center"><DotsVerticalIcon className="h-8" /></button>
                </p>
            </div>
            <div className={`data-node__back ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`} onClick={()=>onPress()}></div>


            <div className={`z-20 relative ${settingsVisible ? 'setting-node__visible' : 'setting-node__hidden-anim'}`} >
                <div className={`fixed bottom-0 top-3/4 md:top-3/4 left-0 md:left-1/2 right-0 px-4 py-8 rounded-2xl bg-gray-200 shadow-inner flex flex-col justify-around z-10 ${settingsVisible ? 'animate-slideIn md:animate-slideInRight' : 'animate-slideOut md:animate-slideOutRight'}`}>
                    <button className="rounded-lg bg-blue-500 hover:bg-blue-700 hover:shadow-md text-white w-full flex justify-center relative py-2 text-xl"><PencilAltIcon className="w-8 ml-2 absolute left-0"/> <span>Edit plant</span></button>
                    <button onClick={()=>removePlant()} className="rounded-lg bg-red-500 hover:bg-red-700 hover:shadow-md text-white w-full flex justify-center relative py-2 text-xl"><TrashIcon className="w-8 ml-2 absolute left-0"/> <span>Remove plant</span></button>
                </div>
                <div className={`z-10 data-node__back ${settingsVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`} onClick={()=>nodeSettings()}></div>
            </div>
        </div>
    );
}

export default DataNode;