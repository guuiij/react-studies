import React from 'react';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Luffy, Rei dos piratas</h1>
      <Comentario nome="Zoro" email="zoro@gmail.com" date={new Date(2024, 3, 19)}>
        Onde estou ?
      </Comentario>
      <Comentario nome="Nami" email="nami@gmail.com" date={new Date(2018, 9, 18)}>
        Vou ficar rica !
      </Comentario >
    </div>
  );
}

export default App;
