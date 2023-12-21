import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
// import Accordion from './accordion/Accordion';

// import './index.css';
// import AddIcon from '@mui/icons-material/Add';

ReactDOM.render(
  <>

  <BrowserRouter>
        <App/>
      </BrowserRouter>
 
  </>
  ,document.getElementById('root')
);