import Divider from '@/shared/ui/Divider';
import NewsFeed from '@/widgets/NewsFeed/NewsFeed';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.grid}>
        <div className={`${s.column} ${s.column_desktop}`}>
          <span className={s.label}>Desktop</span>
          <NewsFeed variant="news" />
          <Divider className={s.rowDivider} />
          <NewsFeed variant="business" />
          <Divider className={s.rowDivider} />
          <NewsFeed variant="news" empty />
        </div>

        <div className={`${s.column} ${s.column_mobile}`}>
          <span className={s.label}>Mobile</span>
          <NewsFeed variant="news" />
          <Divider className={s.rowDivider} />
          <NewsFeed variant="business" />
          <Divider className={s.rowDivider} />
          <NewsFeed variant="news" empty />
        </div>
      </div>
    </div>
  );
};

export default App;
