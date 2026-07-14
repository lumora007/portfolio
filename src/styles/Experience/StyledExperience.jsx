import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledExperienceSection = styled.section`
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

export const StyledExperienceList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-left: 3.5rem;

  /* vertical timeline rail */
  &::before {
    content: '';
    position: absolute;
    top: 0.6rem;
    bottom: 0.6rem;
    left: 0.4rem;
    width: 0.2rem;
    background: linear-gradient(
      to bottom,
      ${props => props.theme.tertiary.projectBorder},
      transparent
    );
  }

  @media ${props => props.theme.bp.mobileL} {
    padding-left: 2.6rem;
  }
`;

export const StyledExperienceItem = styled(motion.li)`
  position: relative;

  /* timeline node */
  &::before {
    content: '';
    position: absolute;
    left: -3.5rem;
    top: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.primary.body};
    border: 0.3rem solid ${props => props.theme.tertiary.projectBorder};

    @media ${props => props.theme.bp.mobileL} {
      left: -2.6rem;
    }
  }

  & h3 {
    margin: 0.4rem 0 1.4rem 0;
    font-weight: 500;
    @media ${props => props.theme.bp.mobileL} {
      font-size: 2rem;
    }
  }
`;

export const StyledExperiencePeriod = styled.span`
  display: inline-block;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  color: ${props => props.theme.primary.h3};

  @media ${props => props.theme.bp.mobileL} {
    font-size: 1.3rem;
  }
`;

export const StyledExperienceDescription = styled.div`
  padding: 2.4rem 2.6rem;
  border-radius: 0.4rem;
  background-color: ${props => props.theme.primary.projectDescBg};
  box-shadow: 0 0.3rem 0.9rem -0.4rem rgb(0 0 0 / 25%);
  border-left: 0.3rem solid ${props => props.theme.tertiary.projectBorder};

  & p {
    font-size: 1.5rem;
    font-weight: 500;
    @media ${props => props.theme.bp.mobileL} {
      font-size: 1.4rem;
    }
  }
`;

export const StyledExperienceTech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.6rem;

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
