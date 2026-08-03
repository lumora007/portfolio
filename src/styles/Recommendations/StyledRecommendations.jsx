import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledRecommendationsSection = styled.section`
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

export const StyledRecommendationsList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media ${props => props.theme.bp.tabletL} {
    grid-template-columns: 1fr;
  }
`;

export const StyledRecommendationCard = styled(motion.li)`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  height: 100%;
  padding: 2.4rem 2.6rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  box-shadow: 0 0.3rem 0.9rem -0.4rem rgb(0 0 0 / 25%);
  border-left: 0.3rem solid ${props => props.theme.tertiary.projectBorder};
`;

/* Company badge: logo image when provided, otherwise a text chip.
   Doubled selector to outrank the global a:link inline-block rule */
export const StyledCompanyBadge = styled(motion.a)`
  && {
    display: inline-flex;
    align-items: center;
  }
  align-self: flex-start;
  gap: 0.8rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0.4rem;
  /* Logos are fixed-colour artwork, so the plate behind them stays constant
     across light and dark themes; text-only badges follow the theme. */
  background-color: ${props =>
    props.$logoBg ? props.$logoBg : props.theme.primary.skillLiBg};
  color: ${props => props.theme.primary.skillLiText};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.06rem;
  box-shadow: 0 0.2rem 0.3rem 0 rgb(0 0 0 / 12%);

  & img {
    height: 2.2rem;
    width: auto;
    max-width: 16rem;
    object-fit: contain;
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    stroke: currentColor;
    opacity: 0.7;
  }
`;

export const StyledRecommendationQuote = styled.blockquote`
  position: relative;
  margin: 0;
  padding-top: 1.6rem;

  & p {
    position: relative;
    font-size: 1.5rem;
    font-weight: 500;
    font-style: ${props => (props.lang === 'ja' ? 'normal' : 'italic')};

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.4rem;
    }
  }
`;

export const StyledQuoteMark = styled(motion.span)`
  position: absolute;
  top: -1.4rem;
  left: -0.4rem;
  transform-origin: left center;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 6rem;
  line-height: 1;
  color: ${props => props.theme.tertiary.projectBorder};
`;

export const StyledRecommendationAuthor = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-top: auto;
  padding-top: 0.4rem;
`;

export const StyledRecommendationAvatar = styled(motion.div)`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.theme.primary.skillLiBg};
  color: ${props => props.theme.primary.skillLiText};
  border: 0.2rem solid ${props => props.theme.tertiary.projectBorder};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledRecommendationCredentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & h4 {
    font-size: 1.7rem;
  }

  & span {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.06rem;
    color: ${props => props.theme.primary.p};
    opacity: 0.85;

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.2rem;
    }
  }
`;

/* Icon-only link to the recommender's profile; the label is screen-reader only */
export const StyledProfileLink = styled(motion.a)`
  && {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  flex-shrink: 0;
  margin-left: auto;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: ${props => props.theme.primary.skillLiBg};
  color: ${props => props.theme.primary.skillLiText};
  border: 0.1rem solid ${props => props.theme.tertiary.linkBorder};
  box-shadow: 0 0.2rem 0.3rem 0 rgb(0 0 0 / 12%);

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    stroke: currentColor;
  }
`;
