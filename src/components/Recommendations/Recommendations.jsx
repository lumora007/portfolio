import { useReducedMotion } from 'framer-motion';
import { recommendationData } from '../../data/recommendationData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import {
  StyledRecommendationsSection,
  StyledRecommendationsList,
} from '../../styles/Recommendations/StyledRecommendations';
import RecommendationCard from './RecommendationCard';
import { parentRecommendationVariants } from '../../utils/animations';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Recommendations = () => {
  const { t } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledRecommendationsSection>
      <StyledSectionHeading lang={lang}>
        <h2 id='recommendations'> {t('recommendations-heading')}</h2>
      </StyledSectionHeading>
      <StyledRecommendationsList
        initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={parentRecommendationVariants}
      >
        {recommendationData.map(recommendation => {
          return (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              lang={lang}
            />
          );
        })}
      </StyledRecommendationsList>
    </StyledRecommendationsSection>
  );
};

export default Recommendations;
