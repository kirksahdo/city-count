import { useState, useCallback } from 'react';

import { BasePageLayout } from '../../shared/layouts';
import { ListingBar } from '../../shared/components';

export const Dashboard: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch =  useCallback((newText: string) => {
    setSearchText(newText);
  }, []);

  const handleAdd = useCallback(() => {
    console.log('Add');
  }, []);

  return (
    <BasePageLayout
      title="Dashboard"
      toolBar={
        <ListingBar
          searchText={searchText}
          onChangeSearchText={handleSearch}
          onClickAdd={handleAdd}
          showInputSearch
        />
      }>
      Test
    </BasePageLayout>
  );
};
