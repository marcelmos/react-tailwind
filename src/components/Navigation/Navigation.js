import { CameraIcon, PhotographIcon } from '@heroicons/react/outline'

function Navigation(){
    return(
        <nav className='w-full h-10 text-center bg-white flex justify-center items-center fixed bottom-0'>
            <div className="mb-11 shadow-xl rounded-full relative">
                <div id="nav-left-btn" className="nav-btn left-3 top-3" >
                    <input className="absolute left-0 top-1 w-10 opacity-0" type="file" accept="image/*" capture="camera" />
                    <CameraIcon className="h-7 w-7"/>
                </div>
                <div id="nav-right-btn" className="nav-btn right-3 top-3"  >
                    <input className="absolute left-0 top-1 w-10 opacity-0" type="file" accept="image/*" />
                    <PhotographIcon className="h-7 w-7"/>
                </div>
                
                <button onClick={openMenu} className='rounded-full bg-blue-500 w-16 h-16 text-4xl transform transition-transform text-white text-center' aria-hidden="true" >+</button>
            </div>
        </nav>
    );
}

function openMenu(event){
    const navBtn = event.target;
    const parentNode = navBtn.parentNode;
    const leftBtn = parentNode.querySelector('#nav-left-btn');
    const rightBtn = parentNode.querySelector('#nav-right-btn');
    

    if(navBtn.getAttribute('aria-hidden') === 'true'){
        navBtn.classList.add('rotate-405');
        leftBtn.classList.add('show-left');
        rightBtn.classList.add('show-right');
        navBtn.setAttribute('aria-hidden', false);
    }else{
        navBtn.classList.remove('rotate-405');
        leftBtn.classList.remove('show-left');
        rightBtn.classList.remove('show-right');
        navBtn.setAttribute('aria-hidden', true);
    }
}

export default Navigation;

