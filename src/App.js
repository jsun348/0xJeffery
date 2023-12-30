import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/main';
import NotesGlobalEnergyTransition from './Components/SubPages/Notes_GlobalEnergyTransition';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="%PUBLIC_URL%/" element={<MainPage />} />
        <Route path="%PUBLIC_URL%/notes-globalEnergyTransition" element={<NotesGlobalEnergyTransition />} />
      </Routes>
    </Router>
  );
};

export default App;
