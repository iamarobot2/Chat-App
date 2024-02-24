import ChatArea from './ChatArea';
import Sidebar from './Sidebar';
import './Style.css' 
function MainContainer() {
    return (
        <div className='mainContainer flex '>
            <Sidebar />
            <ChatArea />
        </div>
    );
}

export default MainContainer;