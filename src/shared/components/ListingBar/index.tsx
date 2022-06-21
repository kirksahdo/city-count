import {
  Box,
  Button,
  Icon,
  InputAdornment,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';

import { Enviroment } from '../../environment';
import { IAppBarProps } from './interfaces';

export const ListingBar: React.FC<IAppBarProps> = ({
  searchText = '',
  showInputSearch = false,
  onChangeSearchText,
  onClickAdd,
}) => {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      elevation={0}
      gap={1}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}>
      {showInputSearch && (
        <TextField
          type="search"
          label={Enviroment.SEARCH_INPUT}
          size="small"
          value={searchText}
          onChange={e => onChangeSearchText?.(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Icon>add</Icon>}
        onClick={onClickAdd}>
        New
      </Button>
    </Box>
  );
};
