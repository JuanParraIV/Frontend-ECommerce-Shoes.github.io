import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import FormCreateProduct from './Components/Form/FormCreateProduct';
import CreateFormPage from './Pages/Form/CreateFormPage';
import SneakerPage from './Pages/Sneaker/SneakerPage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import CartContainer from './Containers/Cart/CartConteiner';
import ProfileUser from './Components/ProfileForm/ProfileForm';
import Profile from './Components/Profile/Profile'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/product/:id' element={<SneakerPage />} />
        <Route path='/formCreateProduct' element={<CreateFormPage />} />
        <Route path='/shoppingCart' element={<CartContainer/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/editprofile' element={<ProfileUser name={''} userName={''} firstName={''} lastName={''} contactNumber={0n} buyerAddress={''} email={''} password={''} dni={0n}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
