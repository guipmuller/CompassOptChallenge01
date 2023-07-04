import './App.css';

function App() {
  
  const url = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=69078e247ecd227eac08756c439b4ade";

  return (
    <>
      <div>
        <section>
          navbar
        </section>
        <section>
          <p>
            Cidade, País
          </p>
          <p>
            Data
          </p>
        </section>
        <section>
          Clima
        </section>
        <section>
          <p>
            Chuva
          </p>
          <p>
            Vento
          </p>
          <p>
            Umidade
          </p>
        </section>
      </div>
    </>
  )
}

export default App
