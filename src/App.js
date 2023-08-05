import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Api from "./components/function/Api";
import ClassApi from "./components/class/ClassApi";
import ProductApi from "./components/class/ProductApi";
import UserApi from "./components/class/UserApi";
import FetchApi from "./components/class/FetchApi";

function App() {
  return (
    <div>
      {/* <Api /> */}
      {/* <ClassApi /> */}
      {/* <ProductApi /> */}
      {/* <UserApi /> */}
      <FetchApi />
    </div>
  );
}

export default App;
