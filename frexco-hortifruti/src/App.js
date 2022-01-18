/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/jsx-filename-extension
// eslint-disable-next-line react/jsx-filename-extension

import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
