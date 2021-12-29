function Block(props){
    const { name, waterIn, image } = props.data;

    const notification = <div className="w-6 h-6 bg-red-500 rounded-full absolute right-0 top-0 text-white text-center font-extrabold animate-pulse">!</div>;

    const onPress = (data) => {
        props.blockCallback(data);
    };

    return(
        <button onClick={()=>onPress()} className="bg-white w-full sm:w-44 md:w-52 xl:w-60 h-32 sm:h-full rounded-xl shadow-md flex p-2 flex-row sm:flex-col relative justify-start sm:justify-between items-center">
            {(waterIn<0) ? notification : ''}
            <img src={'/images/'+image} alt="plant" className="w-28 sm:min-w-full h-44 object-cover bg-gray-400 rounded-xl"/>
            <div className="flex flex-col h-full sm:justify-between py-2 px-3 sm:mt-3">
                <p className="text-lg font-bold text-left sm:text-center">{name}</p>
                <p className={`items-end ${(waterIn<0) ? 'text-red-500' : ''}`}>Water in: {waterIn} days</p>
            </div>
        </button>
    );
}

export default Block;