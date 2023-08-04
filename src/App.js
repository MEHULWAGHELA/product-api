import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Api from './components/function/Api';
import ClassApi from './components/class/ClassApi';
import ProductApi from './components/class/ProductApi';
import UserApi from './components/class/UserApi';

function App() {
  return (
    <div>
      {/* <Api /> */}
      {/* <ClassApi /> */}
      {/* <ProductApi /> */}
      <UserApi />
    </div>
  );
}

export default App;
