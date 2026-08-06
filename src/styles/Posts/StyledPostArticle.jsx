import styled from 'styled-components';

export const StyledArticleSection = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 10rem 0 12rem 0;
  margin: 0 auto;
  max-width: ${props => (props.$wide ? '124rem' : '76rem')};

  @media ${props => props.theme.bp.desktopS} {
    margin: 0 12rem;
  }
  @media ${props => props.theme.bp.tabletL} {
    margin: 0 4rem;
  }
  @media ${props => props.theme.bp.mobileL} {
    margin: 0 2rem;
    padding-top: 8rem;
  }

  & h1 {
    font-family: ${props =>
      props.lang === 'en'
        ? props.theme.fonts.secondary
        : props.theme.fonts.tertiary};
    font-size: 4.6rem;
    line-height: 1.2;
    font-weight: 400;
    color: ${props => props.theme.primary.h2};

    @media ${props => props.theme.bp.mobileL} {
      font-size: 3.4rem;
    }
  }
`;

export const StyledBackLink = styled.a`
  /* Doubled selector to outrank the global a:link inline-block rule */
  && {
    display: inline-flex;
    align-items: center;
  }
  align-self: flex-start;
  gap: 0.7rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  border-bottom: 0.1rem solid ${props => props.theme.tertiary.linkBorder};

  &::before {
    content: '\\2190';
    font-size: 1.6rem;
    line-height: 1;
  }
`;

export const StyledArticleMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  color: ${props => props.theme.primary.h3};

  & span[aria-hidden='true'] {
    opacity: 0.6;
  }
`;

export const StyledArticleTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & li {
    padding: 0.7rem 1.3rem;
    border-radius: 0.4rem;
    background-color: ${props => props.theme.primary.skillLiBg};
    color: ${props => props.theme.primary.skillLiText};
    font-family: ${props => props.theme.fonts.primary};
    font-weight: 600;
    font-size: 1.3rem;
    box-shadow: 0 0.2rem 0.3rem 0 rgb(0 0 0 / 12%);
  }
`;

export const StyledArticleFigure = styled.figure`
  margin: 1rem 0;

  & img {
    width: 100%;
    height: auto;
    border-radius: 0.4rem;
    border: 0.1rem solid ${props => props.theme.neutrals.imageBorder};
    box-shadow: 0 0.4rem 1.2rem -0.5rem rgb(0 0 0 / 30%);
  }
`;

/* Pairs a page-tall screenshot with the text instead of burying the article
   under it. Collapses back to one column once the columns get too narrow. */
export const StyledArticleSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 4rem;

  @media ${props => props.theme.bp.desktopXS} {
    grid-template-columns: 1fr;
    gap: 2.4rem;

    /* stacked, the screenshot would otherwise push the article off the screen */
    & figure {
      max-height: 60vh;
      overflow-y: auto;
    }
  }
`;

export const StyledArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & p {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.8;

    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.6rem;
    }
  }
`;

export const StyledArticleLead = styled.p`
  font-size: 2rem !important;
  font-weight: 600 !important;
`;

export const StyledArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2.4rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  border-left: 0.3rem solid ${props => props.theme.tertiary.projectBorder};

  & li {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.05rem;
  }
`;

export const StyledArticleDialogue = styled.p`
  padding-left: 1.8rem;
  border-left: 0.3rem solid ${props => props.theme.tertiary.projectBorder};
  font-style: ${props => (props.lang === 'ja' ? 'normal' : 'italic')};

  & strong {
    font-style: normal;
    color: ${props => props.theme.primary.h3};
  }
`;

export const StyledArticleAside = styled.p`
  align-self: center;
  text-align: center;
  font-family: ${props =>
    props.lang === 'en'
      ? props.theme.fonts.secondary
      : props.theme.fonts.tertiary};
  font-size: 2.8rem !important;
  color: ${props => props.theme.primary.h2};
`;

export const StyledArticleEnd = styled.p`
  align-self: center;
  margin-top: 2rem;
  letter-spacing: 0.3rem !important;
  color: ${props => props.theme.primary.h3} !important;
`;
