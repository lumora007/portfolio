import { useTranslation } from 'react-i18next';
import {
  StyledPostCard,
  StyledPostImage,
  StyledPostMeta,
  StyledPostTags,
  StyledPostLink,
} from '../../styles/Posts/StyledPosts';
import { picturesTextVariants } from '../../utils/animations';

const PostCard = ({
  post,
  title,
  excerpt,
  imageAlt,
  lang,
  shouldReduceMotion,
}) => {
  const { t } = useTranslation();
  const formattedDate = new Intl.DateTimeFormat(
    lang === 'ja' ? 'ja-JP' : 'en-US',
    { year: 'numeric', month: 'short', day: 'numeric' }
  ).format(new Date(post.date));

  return (
    <StyledPostCard
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={picturesTextVariants}
    >
      {post.imageUrl && (
        <StyledPostImage>
          <img
            src={post.imageUrl}
            alt={imageAlt}
            width={post.imageWidth}
            height={post.imageHeight}
            loading='lazy'
          />
        </StyledPostImage>
      )}
      <StyledPostMeta>
        <time dateTime={post.date}>{formattedDate}</time>
        <span aria-hidden='true'>&middot;</span>
        <span>{t('reading-time', { minutes: post.readingTime })}</span>
      </StyledPostMeta>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <StyledPostTags>
        {post.tags.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </StyledPostTags>
      <StyledPostLink href={`#/posts/${post.slug}`} lang={lang}>
        {t('read-post')}
      </StyledPostLink>
    </StyledPostCard>
  );
};

export default PostCard;
