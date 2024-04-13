import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid
} from '@mui/material';
import { useState } from 'react';

const books = [
  {
    id: 0,
    title: 'Livro 1',
    description: 'Descrição do Livro 1',
    url: 'https://images.unsplash.com/photo-1608592077365-c6399182e63c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    title: 'Livro 2',
    description: 'Descrição do Livro 2',
    url: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Livro 3',
    description: 'Descrição do Livro 3',
    url: 'https://plus.unsplash.com/premium_photo-1661938236023-49bb3a6d9072?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Livro 4',
    description: 'Descrição do Livro 4',
    url: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    title: 'Livro 5',
    description: 'Descrição do Livro 5',
    url: 'https://images.unsplash.com/photo-1608592077365-c6399182e63c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 10,
    title: 'Livro 1',
    description: 'Descrição do Livro 1',
    url: 'https://images.unsplash.com/photo-1608592077365-c6399182e63c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 11,
    title: 'Livro 2',
    description: 'Descrição do Livro 2',
    url: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 12,
    title: 'Livro 3',
    description: 'Descrição do Livro 3',
    url: 'https://plus.unsplash.com/premium_photo-1661938236023-49bb3a6d9072?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 13,
    title: 'Livro 4',
    description: 'Descrição do Livro 4',
    url: 'https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 14,
    title: 'Livro 5',
    description: 'Descrição do Livro 5',
    url: 'https://images.unsplash.com/photo-1608592077365-c6399182e63c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

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
        <Grid>
          <List
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: 'repeat(5, minmax(210px, 1fr))'
            }}
          >
            {/* array of book */}
            {books.map(({ id, title, description, url }: any) => (
              <ListItem key={id} disablePadding sx={{ marginBottom: 1 }}>
                <Card sx={{ width: 210 }}>
                  <CardMedia sx={{ height: 250 }} image={url} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Box>
    </Box>
  );
}
