import { IconEye, IconStarFilled, IconThumbUp } from '@tabler/icons-react';
import clsx from 'clsx';

import ImageBox from '@/shared/ui/ImageBox';
import Text from '@/shared/ui/Text';
import { formatDateTime } from '@/shared/utils/formatDate';
import { getImageUrl } from '@/shared/utils/getImageUrl';

import type { NewsDto } from '../../types/newsType';
import Badge from '../../ui/Badge';
import MetaItem from '../../ui/MetaItem';

import s from './NewsCard.module.scss';

type NewsCardProps = {
  variant: 'news' | 'business';
  hideCoverOnMobile?: boolean;
  hideCover?: boolean;
  news: NewsDto;
  isTop?: boolean;
};

const NewsCard = ({
  variant,
  hideCoverOnMobile,
  hideCover,
  isTop,
  news: { title, cover, publishedAt, likeCount, viewCount, rubrics, directions = [] },
}: NewsCardProps) => {
  const isBusiness = variant === 'business';

  const NewsCardClass = clsx(s.newsCard, isBusiness && s.newsCard_business);

  const imageClass = clsx(s.newsCard__image, hideCoverOnMobile && s.newsCard__image_hideMobile);

  return (
    <div className={NewsCardClass}>
      {!hideCover && cover.images[0] && (
        <ImageBox
          src={getImageUrl(cover.images[0].m)}
          alt={title}
          className={imageClass}
          srcSet={`${getImageUrl(cover.images[0].s)} 400w,${getImageUrl(cover.images[0].m)} 800w,${getImageUrl(cover.images[0].l)} 1200w,${getImageUrl(cover.images[0].hd)} 1920w`}
          sizes={isBusiness ? '(max-width: 589px) 100vw, calc(100vw - 42px)' : '(max-width: 589px) 100vw, 500px'}
        />
      )}
      <div className={s.newsCard__content}>
        <div className={s.newsCard__header}>
          {isBusiness && isTop && (
            <Badge
              color="yellow"
              icon={<IconStarFilled size={12.25} />}
              borderRadius={100}
              className={s.newsCard__topBadge}
            >
              Топ новость
            </Badge>
          )}

          {!isBusiness && (
            <Text font="secondary" view="p14" color="secondary" tag="span">
              {formatDateTime(publishedAt)}
            </Text>
          )}

          <Text font="secondary" view="p15.75" tag="h3">
            {title}
          </Text>
        </div>

        {isBusiness ? (
          <div className={s.newsCard__meta}>
            <div className={s.newsCard__metaBadges}>
              {directions.map((d) => (
                <MetaItem key={d.id}>#{d.name}</MetaItem>
              ))}
              {rubrics.map((r) => (
                <MetaItem key={r.id}>#{r.name}</MetaItem>
              ))}
            </div>
            <MetaItem>{formatDateTime(publishedAt)}</MetaItem>
            <div className={s.newsCard__stats}>
              <MetaItem icon={<IconThumbUp />} iconSize="small">
                {likeCount}
              </MetaItem>
              <MetaItem icon={<IconEye />} iconSize="small">
                {viewCount}
              </MetaItem>
            </div>
          </div>
        ) : (
          <div className={s.newsCard__meta}>
            <div className={s.newsCard__metaBadges}>
              {directions.map((d) => (
                <Badge key={d.id} color="gray">
                  {d.name}
                </Badge>
              ))}

              {rubrics.map((r) => (
                <Badge key={r.id} color={r.slug === 'top' ? 'yellow' : 'blue'}>
                  {r.name}
                </Badge>
              ))}
            </div>
            <div className={s.newsCard__stats}>
              <MetaItem icon={<IconThumbUp />} iconSize="medium">
                {likeCount}
              </MetaItem>
              <MetaItem icon={<IconEye />} iconSize="medium">
                {viewCount}
              </MetaItem>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
