import ImageBox from '@/shared/ui/ImageBox';
import Text from '@/shared/ui/Text';

import emptyStateImg from '../../assets/empty-state.png';

import s from './EmptyState.module.scss';

const EmptyState = () => {
  return (
    <div className={s.emptyState}>
      <ImageBox src={emptyStateImg} alt="Empty state" width={160} />
      <Text font="primary" view="p15.75" weight="demiBold" tag="h3">
        Новых новостей нет
      </Text>
    </div>
  );
};

export default EmptyState;
