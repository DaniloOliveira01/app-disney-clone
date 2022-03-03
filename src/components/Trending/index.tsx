import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./styles";
import { useSelector } from "react-redux";
import { selectTrending } from "../../features/Movie/movieSlice";

export function Trending() {
  const moviess = useSelector(selectTrending);

  return (
    <Container>
      <h3>Populares</h3>
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
  )
}