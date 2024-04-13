import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Checkbox, Grid } from '@mui/material';
import { useState } from 'react';

const filterBooks = [
  { id: 0, label: 'Todos os Livros' },
  { id: 1, label: 'Disponiveis' }
];

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
    <Box mx={2} height={'100vh'} sx={{ boxSizing: 'border-box' }}>
      <h1>Seja Bem Vindo A Livraria da IBHJ</h1>
      <p>Site Home Page</p>
      <br />
      <br />
      <hr />
      <Box sx={{ display: 'flex', justifyItems: 'center', gap: 3 }}>
        <Grid sx={{ height: 400, width: 200, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}>
          <List sx={{ maxWidth: 360, bgcolor: 'background.paper', margin: 0 }}>
            {filterBooks.map(({ id, label }: any) => {
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
        </Grid>
      </Box>
    </Box>
  );
}
