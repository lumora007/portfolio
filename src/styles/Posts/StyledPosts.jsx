import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledPostsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6rem;
  padding: 8rem 0 12rem 0;
  margin: 0 auto;
  max-width: 90rem;
  position: relative;

  @media ${props => props.theme.bp.desktopS} {
    margin: 0 12rem;
  }
  @media ${props => props.theme.bp.desktopXS} {
    padding-top: 6rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    margin: 0 4rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    margin: 0 2rem;
  }
`;

/* three posts per row, dropping to two then one as the viewport narrows */
export const StyledPostsList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.bp.tabletL} {
    grid-template-columns: 1fr;
  }
`;

export const StyledPostCard = styled(motion.li)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  padding: 2.4rem 2.6rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  box-shadow: 0 0.3rem 0.9rem -0.4rem rgb(0 0 0 / 25%);
  border-top: 0.3rem solid ${props => props.theme.tertiary.projectBorder};
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 0.8rem 1.6rem -0.5rem rgb(0 0 0 / 30%);
  }

  & h3 {
    margin: 0;
    font-weight: 500;
    font-size: 2.1rem;
    line-height: 1.35;

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.9rem;
    }
  }

  & p {
    font-size: 1.5rem;
    font-weight: 500;
    /* keeps cards in a row about the same height whatever the excerpt length */
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.4rem;
    }
  }
`;

/* Empty slot for a post that has not been written yet: same shell as a real
   card so the row keeps its rhythm, but with neutral blocks instead of text. */
export const StyledPostSkeleton = styled(motion.li)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  padding: 2.4rem 2.6rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  box-shadow: 0 0.3rem 0.9rem -0.4rem rgb(0 0 0 / 25%);
  border-top: 0.3rem solid ${props => props.theme.neutrals.imageBorder};
  opacity: 0.55;
`;

/* currentColor tints the blocks from the card's own text colour, so a single
   definition reads correctly against both the light and dark themes */
export const StyledSkeletonBlock = styled.div`
  background-color: currentColor;
  opacity: 0.12;
  border-radius: 0.3rem;
  width: ${props => props.$width ?? '100%'};
  height: ${props => props.$height ?? '1.4rem'};
  flex-shrink: 0;
`;

export const StyledSkeletonImage = styled(StyledSkeletonBlock)`
  margin: -2.4rem -2.6rem 0.6rem -2.6rem;
  width: auto;
  height: auto;
  aspect-ratio: 1024 / 558;
  border-radius: 0;
`;

export const StyledSkeletonTags = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.8rem;
`;

export const StyledPostsButton = styled(motion.button)`
  justify-self: center;
  border: 0.12rem solid ${props => props.theme.tertiary.linkBorder};
  background-color: transparent;
  padding: 1.45rem 2.45rem;
`;

/* negative margins let the image bleed to the card edges through its padding */
export const StyledPostImage = styled.div`
  margin: -2.4rem -2.6rem 0.6rem -2.6rem;
  overflow: hidden;
  border-bottom: 0.1rem solid ${props => props.theme.neutrals.imageBorder};

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const StyledPostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  color: ${props => props.theme.primary.h3};

  & span[aria-hidden='true'] {
    opacity: 0.6;
  }

  @media ${props => props.theme.bp.mobileL} {
    font-size: 1.2rem;
  }
`;

export const StyledPostTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
  padding-top: 0.8rem;

  & li {
    padding: 0.7rem 1.3rem;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.primary.skillLiBg};
    color: ${props => props.theme.primary.skillLiText};
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    font-size: 1.3rem;
    box-shadow: 0 0.2rem 0.3rem 0 rgb(0 0 0 / 12%);

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.2rem;
      padding: 0.6rem 1.1rem;
    }
  }
`;

export const StyledPostLink = styled.a`
  align-self: flex-start;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  border-bottom: 0.1rem solid ${props => props.theme.tertiary.linkBorder};

  &::after {
    content: '\\2192';
    margin-left: 0.6rem;
  }
`;
