import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [blobData, setBlobData] = useState(null);

  const crearBlob = () => {
    const contenido = "Prueba de Blobs con Header y Footer en React.";
    setBlobData(new Blob([contenido], { type: 'text/plain' }));
    alert("Blob creado.");
  };

  const descargarFichero = () => {
    if (!blobData) return alert("Cree el Blob primero.");
    const url = URL.createObjectURL(blobData);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo_tp6.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const usarSlice = () => {
    if (!blobData) return alert("Cree el Blob primero.");
    const sliceBlob = blobData.slice(0, 15, 'text/plain');
    const reader = new FileReader();
    reader.onload = (e) => alert("Slice: " + e.target.result);
    reader.readAsText(sliceBlob);
  };

  return (
    <div className="page-layout">
      <Header />
      <main className="main-content">
        <h2>Ejemplo de uso de Blobs</h2>
        <div className="button-group">
          <button onClick={crearBlob} className="btn">Crear Blob de texto</button>
          <button onClick= {descargarFichero} className="btn">Descargar Fichero</button>
          <button onClick={usarSlice} className="btn">Usar slice()</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;