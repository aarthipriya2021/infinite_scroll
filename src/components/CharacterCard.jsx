
import { Avatar, Card, CardHeader } from "@mui/material";
import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  return (
    <Card 
      sx={{
        maxWidth:500,
        background: "black",
        color: "white",
        margin: "10px",
        borderRadius: "10px"
      }}
    >
      <CardHeader
        title= {character?.name}
        subheader={`Status: ${character?.status}`}
        avatar={<Avatar src={character?.image} aria-label="img" />}
      ></CardHeader>
    </Card>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.any,
}
export default CharacterCard