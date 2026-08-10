import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import {
  StyledArticleSection,
  StyledBackLink,
  StyledArticleMeta,
  StyledArticleTags,
  StyledArticleFigure,
  StyledArticleBody,
  StyledArticleLead,
  StyledArticleList,
  StyledArticleDialogue,
  StyledArticleAside,
  StyledArticleEnd,
} from '../../styles/Posts/StyledPostArticle';

const ArticleBlock = ({ block, lang, figures }) => {
  switch (block.type) {
    case 'lead':
      return <StyledArticleLead>{block.text}</StyledArticleLead>;
    case 'figure': {
      const figure = figures?.[block.index];
      if (!figure) return null;
      return (
        <StyledArticleFigure>
          <img
            src={figure.src}
            alt={block.alt}
            width={figure.width}
            height={figure.height}
            loading='lazy'
          />
        </StyledArticleFigure>
      );
    }
    case 'list':
      return (
        <StyledArticleList>
          {block.items.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </StyledArticleList>
      );
    case 'dialogue':
      return (
        <StyledArticleDialogue lang={lang}>
          <strong>{block.speaker}:</strong> &ldquo;{block.text}&rdquo;
        </StyledArticleDialogue>
      );
    case 'aside':
      return <StyledArticleAside lang={lang}>{block.text}</StyledArticleAside>;
    case 'end':
      return <StyledArticleEnd>{block.text}</StyledArticleEnd>;
    default:
      return <p>{block.text}</p>;
  }
};

const PostArticle = ({ post, index }) => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const formattedDate = new Intl.DateTimeFormat(
    lang === 'ja' ? 'ja-JP' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  ).format(new Date(post.date));
  const body = t(`posts.${index}.body`, { returnObjects: true });

  return (
    <StyledArticleSection lang={lang}>
      <StyledBackLink href='#posts' lang={lang}>
        {t('back-to-posts')}
      </StyledBackLink>
      <StyledArticleMeta>
        <time dateTime={post.date}>{formattedDate}</time>
        <span aria-hidden='true'>&middot;</span>
        <span>{t('reading-time', { minutes: post.readingTime })}</span>
      </StyledArticleMeta>
      <h1>{t(`posts.${index}.title`)}</h1>
      <StyledArticleTags>
        {post.tags.map(tag => {
          return <li key={tag}>{tag}</li>;
        })}
      </StyledArticleTags>
      {post.imageUrl && (
        <StyledArticleFigure>
          <img
            src={post.imageUrl}
            alt={t(`posts.${index}.imageAlt`)}
            width={post.imageWidth}
            height={post.imageHeight}
          />
        </StyledArticleFigure>
      )}
      <StyledArticleBody>
        {Array.isArray(body) &&
          body.map((block, blockIndex) => {
            return (
              <ArticleBlock
                key={`${block.type}-${blockIndex}`}
                block={block}
                lang={lang}
                figures={post.figures}
              />
            );
          })}
      </StyledArticleBody>
    </StyledArticleSection>
  );
};

export default PostArticle;
