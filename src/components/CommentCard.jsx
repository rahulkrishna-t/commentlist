import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material';

function CommentCard() {
  return (
    <>
       <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2 }}>
        <CardContent>
          <Typography 
            variant="subtitle2" 
            color="text.secondary" 
            gutterBottom 
            sx={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '0.75rem' }}
          >
            {comment.email}
          </Typography>
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
    </>
  )
}

export default CommentCard
