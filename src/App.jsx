import {createRoot} from 'react-dom/client';

import NavBar from './NavBar';

const App = () =>{
    return(
        <div>
            <NavBar></NavBar>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);