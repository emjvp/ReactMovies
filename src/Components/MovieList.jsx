import * as React from 'react';

import { styled } from '@mui/material/styles';


import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';


import Grid from '@mui/material/Grid';

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


const MovieList = ({ category, movies }) => {  
   
    
    const [expanded, setExpanded] = React.useState(false);    
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (             
        <Container>                        
                {category && <h1>{category}</h1>}
                <Grid container spacing={2}>              
                
                    {movies && movies.map((movie) =>
                    (                        
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>            
                            <CardMedia
                                component="img"
                                height="345"
                                image={movie.cover_image}
                                alt={movie.title}
                            />
                            <CardContent>
                                <Typography variant="h5" color="text.secondary">
                                {movie.title}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>                
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>

                                <Typography paragraph>Rate:</Typography>
                                <Typography paragraph>
                                    Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.
                                </Typography>               
                                </CardContent>
                            </Collapse> */}
                            </Card>
                        </Grid>        

                    )
                )}
                
                
                </Grid>
        </Container>      
        
           
    );
}
 
export default MovieList;