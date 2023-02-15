import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';


export default function StandardImageList(props) {
  const [imageData, setImageData] = React.useState(null);
  React.useEffect(() => {
    setImageData(props.imageArray);
  }, [props]);
  return (<>
    <Container sx={{ my: 5, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      {imageData ? (
        <Grid container spacing={6}>
          {imageData.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box sx={{ height: '100%' }}>
              <Tooltip title={item.description || item.alt_description} placement="top-start">
              <a href={item.urls.full} target='_blank'>
                <img
                  src={item.urls.small}
                  alt={item.description ? item.description : item.alt_description}
                  loading="lazy"
                  style={{borderRadius:'10px',width:'100%',height:'100%'}}
                  className="image"
                />
                </a>
                </Tooltip>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Container>
    </>
  );
}
