import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import '../styles.css'
import img from "../assets/images/dress1.jpeg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const users = props.users

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const owner = users.find(user => user._id == props.owner_id)

  return (
    <>
     <Grid item xs={2} sm={4} md={4} key={props._id}>
      <Card sx={{ maxWidth: 650 }} className="itemCard">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label={"Mai"}>
              {owner.first_name[0]}
            </Avatar>
          }
          title={<h6>{props.product_name}</h6>}
          subheader={props.brand}
        />
        <CardMedia
          component="img"
          height="600"
          image={`data:image/png;base64,${props.image}`}
          alt="Photo"
        />
        <CardContent>
          <p>{props.description}</p>
        </CardContent>
        <CardActions disableSpacing>
          <h6 id="rentPriceHeading">Rent from £{props.rental_price} </h6>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>

        </CardActions>
        <h6 id="rrpHeading">RRP £{props.rental_price} </h6>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <h6>Item details:</h6>
            <ul>
              <li> Size: {props.size} </li>
              <li> Brand: {props.brand} </li>
              <li> Owner: <b>{owner.user_name}</b> </li>
            </ul>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon /> 100 
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon /> 
            Share
          </IconButton>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
    </>
  );
}