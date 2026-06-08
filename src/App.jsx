import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import CommentCard from './components/CommentCard';

function App() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
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
      <Header />
      <Container maxWidth="lg" sx={{ mb: 6, mt: 2 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3} alignItems="stretch">
            {comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App


