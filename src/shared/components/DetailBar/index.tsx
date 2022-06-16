import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from '@mui/material';

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
  loadingBackButton = false,
  loadingDeleteButton = false,
  loadingNewButton = false,
  loadingSaveButton = false,
  loadingSaveCloseButton = false,
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
      {showSaveButton &&
        (loadingSaveButton ? (
          <Skeleton width={110} height={60} />
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="contained"
            startIcon={<Icon>save</Icon>}
            onClick={() => onClickSave?.()}>
            Save
          </Button>
        ))}

      {showSaveCloseButton &&
        (loadingSaveCloseButton ? (
          <Skeleton width={180} height={60} />
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Icon>save</Icon>}
            onClick={() => onClickSaveClose?.()}>
            Save and Close
          </Button>
        ))}

      {showDeleteButton &&
        (loadingDeleteButton ? (
          <Skeleton width={110} height={60} />
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Icon>delete</Icon>}
            onClick={() => onClickDelete?.()}>
            Delete
          </Button>
        ))}

      {showNewButton &&
        (loadingNewButton ? (
          <Skeleton width={110} height={60} />
        ) : (
          <Button
            color="primary"
            disableElevation
            variant="outlined"
            startIcon={<Icon>add</Icon>}
            onClick={() => onClickNew?.()}>
            New
          </Button>
        ))}

      {showBackButton &&
        (loadingBackButton ? (
          <Skeleton width={120} height={60} />
        ) : (
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
        ))}
    </Box>
  );
};
