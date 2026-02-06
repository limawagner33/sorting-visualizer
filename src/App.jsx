// Componente container principal da aplicação
import SortingVisualizer from './SortingVisualizer';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <SortingVisualizer />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;