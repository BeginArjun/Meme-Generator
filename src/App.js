import Header from './Components/Header'
import Meme from './Components/Meme'
function App() {
  document.title="Meme Generator"
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
