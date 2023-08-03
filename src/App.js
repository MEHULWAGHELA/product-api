import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Api from './components/function/Api';
import ClassApi from './components/class/ClassApi';
import ProductApi from './components/class/ProductApi';

function App() {
  return (
    <div>
      {/* <Api /> */}
      {/* <ClassApi /> */}
      <ProductApi />
    </div>
  );
}

export default App;
