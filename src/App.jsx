import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CircularProgress, Box } from '@mui/material';
import Header from './components/Header';
import CommentCard from './components/CommentCard';



function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://typicode.com')
      .then((response) => response.json())
      .then((data) => {
       
        setComments(data.slice(0, 100)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
     
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Comments Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

     
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : (
         
          <Grid container spacing={3}>
            {comments.map((comment) => (
              <Grid item xs={12} sm={6} md={4} key={comment.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                    ></Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      gutterBottom
                      sx={{
                        fontSize: '1.1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {comment.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {comment.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  )
}

export default App
