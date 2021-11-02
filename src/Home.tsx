import React, { SyntheticEvent, useState } from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Events from './Events';
import Products from './Products';

const Home: React.FC = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '25%' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Events" value="1" />
              <Tab label="Products" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Events></Events>
          </TabPanel>
          <TabPanel value="2">
            <Products></Products>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Home;
