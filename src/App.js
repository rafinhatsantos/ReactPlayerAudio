import './App.css';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import audioFile from './AudioPlayer/teste.mp3';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Garante que ocupe a altura da janela inteira
      }}
    >
      <div
        style={{
          backgroundColor: 'darkblue',
          width: '100vw',
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h1>Header</h1>
      </div>

      {/* Faz o AudioPlayer ocupar o espaço restante */}
      <div style={{ flex: 1, backgroundColor: '#2e2e2e'}}>
      
        <AudioPlayer audioUrl={audioFile} 
        />
      </div>

      {/* Footer fixo no rodapé */}
      <Footer />
    </div>
  );
}

export default App;
