import theme from '../../theme/themes';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavButtonProps {
  title: string;
  icon?: React.ReactNode;
  path: string;
  countList?: number;
}

const StyledButton = styled(Button)``;

export function NavButton({ title, icon, path, countList }: NavButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;
  const countText = countList ? ' (' + countList + ')' : '';

  const handleClick = () => {
    navigate(path);
  };

  return (
    <StyledButton
      variant='text'
      onClick={handleClick}
      fullWidth
      sx={{
        color: isActive ? theme.palette.primary.main : theme.neutrals['grey-300'],
        textTransform: 'capitalize',
        fontSize: '1.25rem',
        fontWeight: '700',
        lineHeight: '2rem'
      }}
    >
      {icon}
      {title}
      {countText}
    </StyledButton>
  );
}
