/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// STYLES

import { 
  DropDown,
  Login, 
  Logo, 
  LogoDisney, 
  Nav, 
  NavMenu, 
  SignOut, 
  UserImg} from "./styles";

  // IMAGES
import LogoSvg from "../../assets/image/logo.svg"
import HomeSvg from "../../assets/image/home-icon.svg"
import SearchSvg from "../../assets/image/search-icon.svg"
import WatchSvg from "../../assets/image/watchlist-icon.svg"
import OriginalSvg from "../../assets/image/original-icon.svg"
import MoviesSvg from "../../assets/image/movie-icon.svg"
import SerieSvg from "../../assets/image/series-icon.svg"

// SERVICES
import { auth } from "../../services/firebase";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../../features/User/userSlice";

export function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if(user) {
        setUser(user);
        navigate('/home')
      };
    });
  }, [userName]);


   const setUser = (user: any) => {
     dispatch(
       setUserLoginDetails({
       name: user.displayName,
       email: user.email,
       photo: user.photoURL,
     })
    );
   };

   const handleAuth = () => {
     if (!userName) {
    const provider = new GoogleAuthProvider();
   signInWithPopup(auth, provider)
   .then((res) => {
     setUser(res.user);
   })
   .catch((err) => {
     console.log(err);
   });
 } else if (userName) {
   auth.signOut()
   .then(() => {
     dispatch(setSignOutState())
     navigate('/')
   }).catch((error) => alert(error.message))
  }
 }

  return (
    <Nav>
      <LogoDisney>
        <Logo src={LogoSvg} />
      </LogoDisney>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src={HomeSvg} alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src={SearchSvg} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={WatchSvg} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src={OriginalSvg} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src={MoviesSvg} alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src={SerieSvg} alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sair</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav> 
  );
 }



