import icons from '@/assets/icons-navbar/icons-navbar';
import { Bars3Icon, XMarkIcon, StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import { ImageLogoContainer, NavBarContainer, NavBarHeader } from './style';
import SearchBar from '../SearchBar/SearchBar';
import { ShoppingCartStore } from '@/App/store/useShoppingCart';
import { useAuthStore } from '@/App/store/useAuthStore';



export default function Navbar() {

  const {cartQuantity} = ShoppingCartStore();
  const {token, clearToken} = useAuthStore();
  console.log('token',token.length)

function handleClick(){
  return clearToken()
}


  return (
    <>
    {token.length <= 0 ? (

    <NavBarHeader>
      <NavBarContainer>
        {/* Nav Bar Logo */}
        <ImageLogoContainer>
          <Link to='/'>
            <img
              src={icons.Logo}
              alt="Jm-zon"
              className="cursor-pointer w-[150px] h-[40px] object-contain"
            />
          </Link>
        </ImageLogoContainer>

        {/* Custom search Element */}
        <SearchBar/>
        <div className="flex items-center text-white  text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            className="cursor-pointer link"
          >
            <Link to='/login'>
            <button className="font-extrabold md: text-sm">
              Login
            </button>
            </Link>
            <br/>
            <Link to='/register'>
              <button className="font-extrabold md: text-sm">Register</button>
            </Link>
          </div>

          <button >

          <div className=" relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              {cartQuantity}
            </span>
            <Link to={'/shoppingCart'}>
            <ShoppingCartIcon className="h-10" />
            </Link>
            <p className="hidden md:inline font-extrabold md: text-sm mt-2">
              Basket
            </p>
          </div>
          </button>

        </div>
      </NavBarContainer>
      {/* Botton Nav */}
      <div className="flex items-center bg-gray-500 text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1 cursor-pointer" />
          All
        </p>

        <p className="link">Most</p>
        <p className="link">Products</p>
        <p className="link">Customer Service</p>
        <Link to='/formCreateProduct'>
          <p className="link hidden lg:inline-flex hover:underline">Registry</p>
        </Link>
      </div>
    </NavBarHeader>
    ):

    <NavBarHeader>
    <NavBarContainer>
      {/* Nav Bar Logo */}
      <ImageLogoContainer>
        <Link to='/'>
          <img
            src={icons.Logo}
            alt="Jm-zon"
            className="cursor-pointer w-[150px] h-[40px] object-contain"
          />
        </Link>
      </ImageLogoContainer>

      {/* Custom search Element */}
      <SearchBar/>
      <div className="flex items-center text-white  text-xs space-x-6 mx-6 whitespace-nowrap">
        <div
          className="cursor-pointer link"
        >
        
          <button className="font-extrabold md: text-sm">My Acount</button>
          <br/>
          <button className="font-extrabold md: text-sm" onClick={()=>handleClick()}>Log Out</button>
        </div>



        <button >

        <div className=" relative link flex items-center"
        >
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
            {cartQuantity}
          </span>
          <Link to={'/shoppingCart'}>
          <ShoppingCartIcon className="h-10" />
          </Link>
          <p className="hidden md:inline font-extrabold md: text-sm mt-2">
            Basket
          </p>
        </div>
        </button>

      </div>
    </NavBarContainer>
    {/* Botton Nav */}
    <div className="flex items-center bg-gray-500 text-white text-sm space-x-3 p-2 pl-6">
      <p className="link flex items-center">
        <Bars3Icon className="h-6 mr-1 cursor-pointer" />
        All
      </p>

      <p className="link">Most</p>
      <p className="link">Products</p>
      <p className="link">Customer Service</p>
      <Link to='/formCreateProduct'>
        <p className="link hidden lg:inline-flex hover:underline">Registry</p>
      </Link>
    </div>
  </NavBarHeader>

  }
    </>
  );
}
