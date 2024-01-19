import { ParticlesComponent } from './components/shared/background/Background';
import { Home } from './components/home-page/Home';

function App() {
  return (
    <>
      <Home />
      <ParticlesComponent id='tsparticles' />
    </>
  );
}

export default App;
