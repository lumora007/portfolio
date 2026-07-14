import styled from 'styled-components';

export const StyledShowcaseSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 6rem;
  padding: 8rem 0 0 0;
  margin: 0 auto;
  max-width: 107rem;
  position: relative;

  @media ${props => props.theme.bp.desktopS} {
    margin: 0 12rem;
  }

  @media ${props => props.theme.bp.desktopXS} {
    padding-top: 6rem;
  }

  @media ${props => props.theme.bp.tabletL} {
    margin: 0;
  }
`;
