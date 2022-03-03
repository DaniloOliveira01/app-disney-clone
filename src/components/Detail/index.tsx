/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
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

// IMAGES 
import PlayBlack from '../../assets/image/play-icon-black.png'
import PlayWhite from '../../assets/image/play-icon-white.png'
import GroupIcon from '../../assets/image/group-icon.png'


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../services/firebase";
import { collection, getDocs, query } from "firebase/firestore";


export function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<any>({});

    useEffect(() => {
      const moviesData = async () => {
        const q = query(collection(db, "moviess"));
    
        const querySnaphost = await (await getDocs(q))
        querySnaphost.docs.forEach((doc) => {
          const details = doc.data()
          if (doc.exists() && details.id === id) {
            setDetail(doc.data());
          } else {
            console.log("nenhum documento desse tipo no firebase");
          }
        });
      };
      moviesData();
    }, [id]);

  return (
  <Container>
      <Background>
          <img src={detail.backgroundImg} alt={detail.title} />
      </Background>

      <ImageTitle>
        <img alt={detail.title} src={detail.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src={PlayBlack} alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src={PlayWhite} alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src={GroupIcon} alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detail.subTitle}</SubTitle>
        <Description>{detail.description}</Description>
      </ContentMeta>
 </Container>
  );
}