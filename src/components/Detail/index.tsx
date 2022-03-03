/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
import { AddList, 
  Background, 
  Container, 
  ContentMeta, 
  Controls, 
  Description, 
  GroupWatch, 
  ImageTitle, 
  Player, 
  SubTitle, 
  Trailer } 
  from "./styles";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import { collection, query, getDocs } from "firebase/firestore";

interface Data {
  id: string;
  title: string;
  backgroundImg: string;
}

export function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<any>();

  const movieData = async () => {
    const q = query(collection(db, "moviess"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => {
    const {id, title, backgroundImg} = doc.data();
      return {
        id,
        title,
        backgroundImg
      }
    })
    console.log(id);
    const saveDetail = data.find((data) => data.id == id)
    console.log(saveDetail)
    setDetail(saveDetail);
  }; 

  useEffect(() => { 
    movieData();
  },[id]);

  return (
  <Container>
      <Background>
          <img src={detail?.backgroundImg} alt={detail?.title}/>
      </Background>
 </Container>
  );
}