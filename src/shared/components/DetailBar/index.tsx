import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

import { IDetailBarProps } from './interfaces';

export const DetailBar: React.FC<IDetailBarProps> = ({
  showBackButton = true,
  showDeleteButton = true,
  showNewButton = true,
  showSaveButton = true,
  showSaveCloseButton = false,
  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveClose,
}) => {
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
      paddingX={2}>
      {showSaveButton && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          startIcon={<Icon>save</Icon>}
          onClick={() => onClickSave?.()}>
          Save
        </Button>
      )}
      {showSaveCloseButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>save</Icon>}
          onClick={() => onClickSaveClose?.()}>
          Save and Close
        </Button>
      )}
      {showDeleteButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>delete</Icon>}
          onClick={() => onClickDelete?.()}>
          Delete
        </Button>
      )}
      {showNewButton && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          startIcon={<Icon>add</Icon>}
          onClick={() => onClickNew?.()}>
          New
        </Button>
      )}
      {showBackButton && (
        <>
          <Divider variant="middle" orientation="vertical" />
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Icon>arrow_back</Icon>}
            onClick={() => onClickBack?.()}>
            Back
          </Button>
        </>
      )}
    </Box>
  );
};
