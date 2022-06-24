import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Fragment } from 'react';
import { SplitButton } from '../SplitButton';

import { IDetailBarProps, IButtonProps } from './interfaces';

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

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const buttons: IButtonProps[] = [
    {
      label: 'Save',
      iconName: 'save',
      variant: 'contained',
      onClick: onClickSave,
      show: showSaveButton,
      loading: loadingSaveButton,
      width: 110,
      height: 60,
    },
    {
      label: 'Save and Close',
      iconName: 'save',
      variant: 'outlined',
      onClick: onClickSaveClose,
      show: showSaveCloseButton,
      loading: loadingSaveCloseButton,
      width: 180,
      height: 60,
    },
    {
      label: 'Delete',
      iconName: 'delete',
      variant: 'outlined',
      onClick: onClickDelete,
      show: showDeleteButton,
      loading: loadingDeleteButton,
      width: 110,
      height: 60,
    },
    {
      label: 'New',
      iconName: 'add',
      variant: 'outlined',
      onClick: onClickNew,
      show: showNewButton,
      loading: loadingNewButton,
      width: 110,
      height: 60,
    },
    {
      label: 'Back',
      iconName: 'arrow_back',
      variant: 'outlined',
      onClick: onClickBack,
      show: showBackButton,
      loading: loadingBackButton,
      width: 120,
      height: 60,
      divider: true,
    },
  ];

  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      elevation={0}
      gap={1}
      height={theme.spacing(5)}
      padding={1}
      paddingX={2}>
      {smDown ? (
        <SplitButton
          options={buttons
            .filter(button => button.show && !button.loading)
            .map(button => ({
              label: button.label,
              onClick: () => button.onClick?.(),
              iconName: button.iconName,
            }))}
        />
      ) : (
        buttons &&
        buttons.map(
          ({
            label,
            iconName,
            variant,
            onClick,
            show,
            loading,
            width,
            height,
            divider,
          }: IButtonProps) => {
            return (
              show &&
              (loading ? (
                <Skeleton key={label} width={width} height={height} />
              ) : (
                <Fragment key={label}>
                  {divider && (
                    <Divider variant="middle" orientation="vertical" />
                  )}
                  <Button
                    color="primary"
                    disableElevation
                    variant={variant}
                    startIcon={<Icon>{iconName}</Icon>}
                    onClick={() => onClick?.()}>
                    <Typography
                      variant="button"
                      whiteSpace="nowrap"
                      textOverflow="ellipsis"
                      overflow="hidden">
                      {label}
                    </Typography>
                  </Button>
                </Fragment>
              ))
            );
          },
        )
      )}
    </Box>
  );
};
