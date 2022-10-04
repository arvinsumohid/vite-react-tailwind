import LandingPage from './container/LandingPage';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import './App.css'

function App() {

  return (
    <>
      <Header />
        <div className="App">
          <LandingPage />
        </div>
      <Footer />
    </>
  )
}

export default App
