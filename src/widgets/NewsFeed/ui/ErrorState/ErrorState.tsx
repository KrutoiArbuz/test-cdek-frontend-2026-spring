import Text from '@/shared/ui/Text/Text';

import s from './ErrorState.module.scss';

const ErrorState = () => {
  return (
    <div className={s.errorState}>
      <Text font="primary" view="p15.75" weight="demiBold" tag="h3">
        Новости не загрузились. Попробуйте обновить страницу.
      </Text>
    </div>
  );
};

export default ErrorState;
