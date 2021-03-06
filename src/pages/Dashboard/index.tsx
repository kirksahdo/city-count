import { BasePageLayout } from '../../shared/layouts';
import { DetailBar } from '../../shared/components';

export const Dashboard: React.FC = () => {
  return (
    <BasePageLayout
      title="Dashboard"
      toolBar={<DetailBar showSaveCloseButton />}>
      Test
    </BasePageLayout>
  );
};
