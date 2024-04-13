import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox
} from '@mui/material';
import { useState } from 'react';

export default function LibraryHomePage() {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <h1>Seja Bem Vindo A Livraria da IBHJ</h1>
      <p>Site Home Page</p>
      <br />
      <br />
      <hr />
      <Container sx={{ display: 'flex' }}>
        <Box display='flex' sx={{}}>
          {
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 0 }}>
              {[
                { id: 0, label: 'Todos os Livros' },
                { id: 1, label: 'Disponiveis' }
              ].map(({ id, label }: any) => {
                const labelId = `checkbox-list-label-${id}`;

                return (
                  <ListItem key={id} disablePadding sx={{ bgcolor: 'background.paper' }}>
                    <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                      <ListItemIcon sx={{ minWidth: 0 }}>
                        <Checkbox
                          edge='start'
                          checked={checked.indexOf(id) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`${label}`} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          }
        </Box>
        {/* <Box my={4} p={2} sx={{ bgcolor: 'blue' }}>
          <Typography variant='h4'>Listra de livros</Typography>
        </Box> */}
      </Container>
    </div>
  );
}
