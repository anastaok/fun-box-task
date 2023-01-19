import Card from "../Card";
import "./HomeStyles.css";

const Home = ({ catFood }) => {
  return (
    <ul className="home">
      {catFood.map((catFood) => (
        <Card catFood={catFood} key={catFood.id} />
      ))}
    </ul>
  );
};

export default Home;
