import './App.css';
import AgendaForm from './components/AgendaForm';
import AgendaList from './components/AgendaList';

function App() {
  return (
    <div className='App'>
      <div className='headline'>
          Welcome to your Weekly Agenda
      </div>
      <div className='credit'>
        Made By&nbsp;
        <a className='link' href='https://github.com/Ma-Raymond' target='_blank' rel='noreferrer'>
        Raymond Ma
        </a>
        </div>
      
      <div className='days-of-week'>
        {['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map((item) =>(
            
            <div className='rows-hopefully'>
                <div className='days'>
                <div key={(`link-${item}`)}>
                    {item}
                </div>
              </div>
              <div className='Hi'>
                <AgendaList/>
              </div>
            </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
