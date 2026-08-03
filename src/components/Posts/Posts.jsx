import { useState } from 'react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { postData } from '../../data/postData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledPostsSection,
  StyledPostsList,
  StyledPostsButton,
} from '../../styles/Posts/StyledPosts';
import PostCard from './PostCard';
import PostSkeleton from './PostSkeleton';
import {
  extraPostsVariants,
  picturesTextVariants,
} from '../../utils/animations';
import { CONSTANTS } from '../../constants';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Posts = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  const [showAllPosts, setShowAllPosts] = useState(false);

  const cutoff = CONSTANTS.FEATURED_POST_CUTOFF;
  const hasMorePosts = postData.length > cutoff;

  const renderPost = (post, index) => {
    if (post.placeholder) {
      return (
        <PostSkeleton key={post.id} shouldReduceMotion={shouldReduceMotion} />
      );
    }
    return (
      <PostCard
        key={post.id}
        post={post}
        title={t(`posts.${index}.title`)}
        excerpt={t(`posts.${index}.excerpt`)}
        imageAlt={t(`posts.${index}.imageAlt`)}
        lang={lang}
        shouldReduceMotion={shouldReduceMotion}
      />
    );
  };

  return (
    <StyledPostsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='posts'> {t('posts-heading')}</h2>
      </StyledSectionHeading>
      <StyledPostsList>
        {postData.slice(0, cutoff).map(renderPost)}
      </StyledPostsList>
      <AnimatePresence>
        {showAllPosts && (
          <StyledPostsList
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            animate='visible'
            exit='exit'
            variants={extraPostsVariants}
          >
            {postData
              .slice(cutoff)
              // the offset keeps locale lookups aligned with postData indexes
              .map((post, index) => renderPost(post, index + cutoff))}
          </StyledPostsList>
        )}
      </AnimatePresence>
      {hasMorePosts && (
        <StyledPostsButton
          variants={picturesTextVariants}
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true }}
          aria-expanded={showAllPosts}
          onClick={() => setShowAllPosts(!showAllPosts)}
        >
          {showAllPosts ? t('show-less-btn') : t('show-more-btn')}
        </StyledPostsButton>
      )}
    </StyledPostsSection>
  );
};

export default Posts;
