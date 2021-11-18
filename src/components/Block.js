function Block(props, {setDataInfo}){
    const { name, waterIn, image } = props.data;

    const notification = <div className="w-6 h-6 bg-red-500 rounded-full absolute right-0 top-0 text-white text-center font-extrabold animate-pulse">!</div>;

    const passData = (data) => {
        setDataInfo(data);
        console.log(data);
    };

    return(
        <button onClick={()=>passData(props.data)} className="bg-white w-44 min-h-full rounded-xl shadow-md flex p-2 flex-col relative justify-between items-center">
            {(waterIn<0) ? notification : ''}
            <img src={'/images/'+image} alt="flower" className="min-w-full max-h-40 object-cover bg-gray-400 rounded-xl"/>
            <div className="flex flex-col h-full justify-between mt-3">
                <p className="text-lg font-bold text-center">{name}</p>
                <p className={(waterIn<0) ? 'text-red-500 items-end' : 'items-end'}>Water in: {waterIn} days</p>
            </div>
        </button>
    );
}

export default Block;