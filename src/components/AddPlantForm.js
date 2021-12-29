import { useState } from "react";

function AddPlantForm(props){
    const [imageData, setImageData] = useState(null);
    const [plantName, setPlantName] = useState('');
    const [waterCycle, setWaterCycle] = useState('');
    const isVisible = props.isFormVisible;
    
    const cancelForm = () => {
        props.nodeCallback();
        setTimeout(()=>{
            const el = document.querySelector('.form-node__hidden-anim');

            if(el){
                el.classList.add('form-node__hidden');
                el.classList.remove('form-node__hidden-anim');
            }
        }, 301);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlant = {name: plantName, waterIn: waterCycle, waterCycle: waterCycle, image: imageData};
        props.addNewPlant(newPlant);
        setImageData(null);
        setPlantName('');
        setWaterCycle('');
    }

    return(
        <div className={`${isVisible ? 'form-node__visible' : 'form-node__hidden-anim'}`} >
            <div className={`fixed bottom-0 top-40 md:top-0 left-0 md:left-1/2 right-0 px-4 py-8 rounded-2xl md:flex md:flex-col md:justify-center bg-gray-200 shadow-lg z-10 ${isVisible ? 'animate-slideIn md:animate-slideInRight' : 'animate-slideOut md:animate-slideOutRight'}`}>
                <form onSubmit={handleSubmit}>
                    <p className="flex flex-row justify-between">
                        <div>
                            <input 
                                className="w-40 h-52 opacity-0 absolute"
                                id="add-plant__camera-module"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImageData(URL.createObjectURL(e.target.files[0]))}
                                capture="camera" 
                            />
                            <img className="w-40 h-52 object-cover rounded-lg shadow-md text-center text-9xl bg-gray-300 text-white flex self-center" src={imageData} alt="+" />
                        </div>
                        <span className="w-1/2 h-full opacity-40 pl-3 border-l-2 border-black border-opacity-10 self-center">Take picture of your plant or pick them from gallery.<br/> And input name of plant and amount of days for water cycle.</span>
                    </p>
                    <p className="my-4">
                        <input 
                            type="text"
                            className="w-full py-2 px-3 rounded-lg hover:shadow-md focus:shadow-md" 
                            required placeholder="Plant name" 
                            onChange={(e) => setPlantName(e.target.value)}
                        />
                    </p>
                    <p className="my-4">
                        <input 
                            type="number" 
                            className="w-full py-2 px-3 rounded-lg hover:shadow-md focus:shadow-md" 
                            required 
                            placeholder="How often to water... (days)" 
                            onChange={(e) => setWaterCycle(e.target.value)}
                        />
                    </p>
                    <p className="my-4">
                        <button className="w-full py-4 px-3 text-white text-center font-bold text-xl rounded-lg bg-blue-500" type="submit">+ Add Plant</button>
                    </p>
                </form>
            </div>
            <div className={`data-node__back ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'}`} onClick={()=>cancelForm()}></div>
        </div>
    );
}

export default AddPlantForm;