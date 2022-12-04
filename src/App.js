import './css/index.css';
import HeaderUiController from './components/header/header'
import IndexUiController from './components/index'
import userdetails from './userData/data'

const App = () => {

  return (
    <div className="project-main-container">
      <HeaderUiController userdetails={userdetails} />
      <IndexUiController userdetails={userdetails} />
    </div>
  );
}

export default App;
