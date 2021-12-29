function Navigation(props){

    const callback = () => {
        props.nodeCallback();
    };

    return(
        <nav className='w-full h-10 text-center bg-white flex justify-center items-center fixed bottom-0 z-50'>
            <div className="mb-11 shadow-xl rounded-full relative">
                <button onClick={()=>callback()} className='rounded-full bg-blue-500 w-16 h-16 text-4xl transform transition-transform text-white text-center'>+</button>
            </div>
        </nav>
    );
}

export default Navigation;

