/* eslint-disable no-unreachable */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */

// STYLES
import { BgHome, Container } from "./styles";

// IMAGES
import BgHomePng from '../../assets/image/home-background.png' 

// COMPONENTS
import { Sliders } from "../../components/Sliders";
import { View } from "../../components/View";
import { Recommends } from "../../components/Recommends";
import { NewDisney } from "../../components/NewDisney";
import { Originals } from "../../components/Originals";
import { Trending } from "../../components/Trending";

// SERVICES DB
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from "../../features/Movie/movieSlice";
import { selectUserName } from "../../features/User/userSlice";
import db from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

// HOOKS

import { useEffect } from "react";



export function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)
  let recommends: { id: string; }[] = [];
  let newDisney: { id: string; }[] = [];
  let originals: { id: string; }[] = [];
  let trending: { id: string; }[] = [];

  useEffect(() => {
    onSnapshot(collection(db, 'moviess'), (snapshot) => {
      snapshot.docs.map(doc => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName])


  return (
    <Container>
    <BgHome src={BgHomePng} />
    <Sliders />
    <View />
    <Recommends />
    <NewDisney />
    <Originals />
    <Trending />
  </Container>
  );
}