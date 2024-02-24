import Sidebar from './Sidebar';
import './Style.css' 
import WorkArea from './WorkArea';
function MainContainer() {
    return (
        <div className='mainContainer flex '>
            <Sidebar />
            <WorkArea />
        </div>
    );
}

export default MainContainer;