import {
  StyledPostSkeleton,
  StyledSkeletonBlock,
  StyledSkeletonImage,
  StyledSkeletonTags,
} from '../../styles/Posts/StyledPosts';
import { picturesTextVariants } from '../../utils/animations';

// Placeholder for an unwritten post. It carries no content, so it is hidden
// from assistive tech rather than announced as an empty article.
const PostSkeleton = ({ shouldReduceMotion }) => {
  return (
    <StyledPostSkeleton
      aria-hidden='true'
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={picturesTextVariants}
    >
      <StyledSkeletonImage />
      <StyledSkeletonBlock $width='45%' $height='1.3rem' />
      <StyledSkeletonBlock $width='90%' $height='2.1rem' />
      <StyledSkeletonBlock $width='65%' $height='2.1rem' />
      <StyledSkeletonBlock $width='100%' />
      <StyledSkeletonBlock $width='100%' />
      <StyledSkeletonBlock $width='80%' />
      <StyledSkeletonTags>
        <StyledSkeletonBlock $width='8rem' $height='2.9rem' />
        <StyledSkeletonBlock $width='11rem' $height='2.9rem' />
      </StyledSkeletonTags>
    </StyledPostSkeleton>
  );
};

export default PostSkeleton;
