import { showcaseData } from '../../data/showcaseData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledProjectsSection,
  StyledProjectsList,
} from '../../styles/Projects/ProjectsLayout/StyledProjectsSection';
import Project from '../Projects/Project';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Showcase = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <StyledProjectsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='projects'> {t('projects-heading')}</h2>
      </StyledSectionHeading>
      <StyledProjectsList>
        {showcaseData.map((project, index) => {
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
    </StyledProjectsSection>
  );
};

export default Showcase;
