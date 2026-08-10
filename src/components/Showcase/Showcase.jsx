import { AnimatePresence, useReducedMotion } from 'framer-motion';
import { showcaseData } from '../../data/showcaseData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import { StyledProjectButton } from '../../styles/UI/StyledProjectsButton';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from '../Projects/Project';
import { buttonVariant } from '../../utils/animations';
import { useGlobalContext } from '../../Context/Context';
import { CONSTANTS } from '../../constants';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Showcase = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  const { showMoreProjects, toggleMoreProjects } = useGlobalContext();

  const featured = showcaseData.slice(
    CONSTANTS.FEATURED_PROJECT_START,
    CONSTANTS.FEATURED_PROJECT_CUTOFF
  );
  const hasMoreProjects =
    showcaseData.length > CONSTANTS.FEATURED_PROJECT_CUTOFF;

  return (
    <StyledProjectsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='projects'> {t('projects-heading')}</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {featured.map((project, index) => {
          return (
            <Project
              key={project.id}
              project={project}
              description={t(`projects.${index}.description`)}
              alternate={index % 2 !== 0}
            />
          );
        })}
      </StyledProjectsList>
      <AnimatePresence>
        {hasMoreProjects && !showMoreProjects && (
          <StyledProjectButton
            variants={buttonVariant}
            initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
            animate='visible'
            exit={shouldReduceMotion ? 'noMotion' : 'exit'}
            aria-expanded={showMoreProjects}
            onClick={() => toggleMoreProjects()}
          >
            {t('show-more-btn')}
          </StyledProjectButton>
        )}
      </AnimatePresence>
    </StyledProjectsSection>
  );
};

export default Showcase;
