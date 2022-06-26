import {
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Enviroment } from '../../environment';

import { IUsersTableProps } from './interfaces';

export const UsersTable: React.FC<IUsersTableProps> = ({
  data: { data, totalCount },
  page = 1,
  onPreviousPage,
  onNextPage,
}) => {
  const columns = [
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: 'Email',
      field: 'email',
    },
    {
      headerName: 'Complete name',
      field: 'completeName',
    },
    {
      headerName: 'City',
      field: 'cityId',
    },
  ];

  const totalPagesCount =
    Math.trunc(totalCount / Enviroment.LINES_LIMIT) +
    (totalCount % Enviroment.LINES_LIMIT == 0 ? 0 : 1);

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead component={Paper}>
            <TableRow>
              {columns &&
                columns.map(row => (
                  <TableCell key={row.field}>{row.headerName}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map(user => (
                <TableRow key={user.id}>
                  {columns &&
                    columns.map(row => (
                      <TableCell key={row.field}>
                        {user[row.field as keyof typeof user]}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <IconButton disabled={page == 1} onClick={onPreviousPage}>
          <Icon>navigate_before</Icon>
        </IconButton>
        <Typography fontSize={16}> {`${page} - ${totalPagesCount}`}</Typography>
        <IconButton disabled={page == totalPagesCount} onClick={onNextPage}>
          <Icon>navigate_next</Icon>
        </IconButton>
      </Box>
    </>
  );
};
