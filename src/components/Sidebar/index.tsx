import { DRAWER_WIDTH, DRAWER_WIDTH_PAPER } from '../../theme/constants';
import { navList } from '../../utils/navList';
import { Box, Drawer, List, ListItem } from '@mui/material';
import { NavButton } from '../Button/NavButton';

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH_PAPER,
          boxSizing: 'border-box',
          backgroundColor: '#d4d4d4'
        }
      }}
      anchor='left'
      variant='permanent'
      PaperProps={{ component: 'aside' }}
    >
      {/* Sidebar content */}
      <Box component='nav' pt='1rem'>
        <List sx={{ paddingBottom: '2px' }}>
          {navList.map((item, index) => {
            return (
              <ListItem key={index} disableGutters sx={{ paddingBottom: '2px' }}>
                <NavButton title={item.title} path={item.path} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
