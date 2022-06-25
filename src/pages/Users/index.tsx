import { useMemo, useEffect, useCallback, useState} from 'react';
import { useSearchParams } from 'react-router-dom';

import { ListingBar } from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';
import { TUserWithTotalCount } from '../../shared/services/api/users/interfaces';
import { userService } from '../../shared/services/api/users/UsersService';

export const Users: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState<TUserWithTotalCount>({} as TUserWithTotalCount);

  const handleSearch = useCallback((searchText: string) => {
    const params = {
      search: searchText,
    };
    setSearchParams(params);
  }, []);

  const searchText = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    userService.getAll(1, searchText).then(result => {
      if (result instanceof Error) {
        return alert(result.message);
      }
      setUsers(result);
    });
  }, [searchText]);

  return (
    <BasePageLayout
      title="Users"
      toolBar={
        <ListingBar
          searchText={searchText}
          onChangeSearchText={handleSearch}
          showInputSearch
        />
      }>
      <></>
    </BasePageLayout>
  );
};
