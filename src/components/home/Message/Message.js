import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import images from '../../../assets/images/coe.png';
import '../../../assets/css/golobal.css';
import styles from '../../../assets/css/Message.module.css';

const Message = () => {
  return (
    <Box sx={{padding:'50px 0'}}>
      <Container>
        <Box className={styles.grid}>
          <Box className={styles.item1}>
            <Box className={styles.img}>
              <img src={images} alt="COE Picture" />
            </Box>
          </Box>
          <Box className={styles.item2}>
            <Typography variant="h2" component="h2" className={styles.title}>
              Representative message
            </Typography>
            <Box className={styles.allMessages}>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                We strive every day to research with the motto "We will spare no effort to be second to none!"
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                It is also the word of a Japanese manager I respect.
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                I will do my best with this word.
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                I longed for Japan and came from Bangladesh. Naturalization as a Japanese in just 6 years
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                We have launched our company.
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                The wonder and joy of working in Japan, which can only be understood by being a foreigner, is given to competent foreigners.
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                It can be conveyed. And I believe that my experience in visa and employment in Japan will be useful.
              </Typography>
              <Typography variant="body1" gutterBottom className={styles.singleMessage}>
                Luminous Co., Ltd. Representative Director Noman Aritomi
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Message;