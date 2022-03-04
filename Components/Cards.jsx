import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({description,img,title,live,repo}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="sm:w-60 h-full">
      <CardMedia
        component="img"
        alt="green iguana"
        image={img}
        className="cards_img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={live} target="_blank"><Button size="small">Live</Button></a>
        <a href={repo} target="_blank"><Button size="small">github repo</Button></a>
      </CardActions>
    </Card>
  )
}

export default Cards