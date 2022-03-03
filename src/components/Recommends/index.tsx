/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./styles";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/Movie/movieSlice";

export function Recommends() {
  const moviess = useSelector(selectRecommend);

  return (
    <Container>
      <h3>Recomendado para você</h3>
      <Content>
      {moviess &&
          moviess.map((movie: any, key: any) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}