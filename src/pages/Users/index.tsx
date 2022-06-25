import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ListingBar } from '../../shared/components';
import { BasePageLayout } from '../../shared/layouts';

export const Users: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (searchText: string) => {
    const params = {
      search: searchText,
    };
    setSearchParams(params);
  };

  const searchText = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

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
