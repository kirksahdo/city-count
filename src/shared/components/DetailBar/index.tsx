import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

export const DetailBar: React.FC = () => {

  const theme = useTheme();

  return ( 
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      elevation={0}
      gap={1}
      height={theme.spacing(5)}
      padding={1}
      paddingX={2}
    >
      <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<Icon>save</Icon>}
      >
        Save
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>save</Icon>}
      >
        Save and Close
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>delete</Icon>}
      >
        Delete
      </Button>
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>add</Icon>}
      >
        New
      </Button>
      <Divider variant='middle' orientation="vertical" />
      <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<Icon>arrow_back</Icon>}
      >
        Back
      </Button>
    </Box>
  );
};
