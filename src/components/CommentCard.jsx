import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CommentCard({ comment }) {
  if (!comment) return null;

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
      <Card 
        sx={{ 
          width: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          boxShadow: '0px 4px 12px rgba(0,0,0,0.05)', // Clean, soft shadow matching the image
          borderRadius: '8px',
          border: '1px solid #f0f0f0'
        }}
      >
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {/* 1. Bold Title on top */}
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontSize: '1rem', 
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.3,
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: 1, 
              WebkitBoxOrient: 'vertical' 
            }}
          >
            {comment.name}
          </Typography>

          {/* 2. Light Subtitle / Email second */}
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: '#8c8c8c', 
              fontSize: '0.8rem',
              fontWeight: 400,
              mb: 1.5
            }}
          >
            {comment.email}
          </Typography>

          {/* 3. Comment Description Body */}
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#595959',
              fontSize: '0.875rem',
              lineHeight: 1.5,
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
  );
}

export default CommentCard

