import Styles from "./Card.module.css";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const CardItem = ({ data }) => {
  return (
    <div className={Styles.cardContainer}>
      {data.map((album) => (
        <Card
          key={album.id}
          className={Styles.card}
          sx={{ width: 250, height: 200 }}
        >
          <CardMedia
            component="img"
            height="100"
            image={album.image}
            alt={album.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {album.title}
            </Typography>
            <Chip color="neutral" onClick={function () {}} variant="plain">
              {album.follows} follows
            </Chip>

            <Typography></Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
CardItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      follows: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardItem;
