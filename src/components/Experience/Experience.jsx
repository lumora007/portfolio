import { useReducedMotion } from 'framer-motion';
import { projectData } from '../../data/projectData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledExperienceSection,
  StyledExperienceList,
  StyledExperienceItem,
  StyledExperiencePeriod,
  StyledExperienceDescription,
  StyledExperienceTech,
} from '../../styles/Experience/StyledExperience';
import { picturesTextVariants } from '../../utils/animations';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Experience = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledExperienceSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='experience'> {t('experience-heading')}</h2>
      </StyledSectionHeading>
      <StyledExperienceList>
        {projectData.map((job, index) => {
          return (
            <StyledExperienceItem
              key={job.id}
              initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={picturesTextVariants}
            >
              <StyledExperiencePeriod>{job.period}</StyledExperiencePeriod>
              <h3>{job.title}</h3>
              <StyledExperienceDescription>
                <p>{t(`experience.${index}.description`)}</p>
              </StyledExperienceDescription>
              <StyledExperienceTech>
                {job.technologies.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </StyledExperienceTech>
            </StyledExperienceItem>
          );
        })}
      </StyledExperienceList>
    </StyledExperienceSection>
  );
};

export default Experience;
