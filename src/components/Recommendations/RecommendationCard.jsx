import { useTranslation } from 'react-i18next';
import {
  StyledRecommendationCard,
  StyledCompanyBadge,
  StyledRecommendationQuote,
  StyledQuoteMark,
  StyledRecommendationAuthor,
  StyledRecommendationAvatar,
  StyledRecommendationCredentials,
  StyledProfileLink,
} from '../../styles/Recommendations/StyledRecommendations';
import {
  childRecommendationVariants,
  recommendationDetailVariants,
  quoteMarkVariants,
} from '../../utils/animations';
import ExternalLinkSVG from '/src/assets/icons/external-link.svg';
import LinkedinSVG from '/src/assets/icons/linkedin.svg';
import ZoomInfoSVG from '/src/assets/icons/zoominfo.svg';

// The profile icon follows whichever network the link points at, so adding a
// recommendation only ever means setting `profileUrl`.
const PROFILE_NETWORKS = [
  { host: 'linkedin.com', label: 'LinkedIn', Icon: LinkedinSVG },
  { host: 'zoominfo.com', label: 'ZoomInfo', Icon: ZoomInfoSVG },
];

const resolveNetwork = url => {
  const match = PROFILE_NETWORKS.find(network => url.includes(network.host));
  return match ?? { label: 'website', Icon: ExternalLinkSVG };
};

const RecommendationCard = ({ recommendation, lang }) => {
  const { t } = useTranslation();
  const {
    name,
    initials,
    role,
    profileUrl,
    avatarUrl,
    company,
    companyUrl,
    logoUrl,
    logoBg,
    quote,
    quoteLang,
  } = recommendation;
  const { label, Icon } = resolveNetwork(profileUrl);

  return (
    <StyledRecommendationCard
      variants={childRecommendationVariants}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <StyledCompanyBadge
        href={companyUrl}
        target='_blank'
        rel='noreferrer noopener'
        aria-label={`${company} website`}
        $logoBg={logoUrl ? logoBg : undefined}
        variants={recommendationDetailVariants}
        whileHover={{ y: -2, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {logoUrl ? (
          <img src={logoUrl} alt={company} />
        ) : (
          <>
            {company}
            <ExternalLinkSVG aria-hidden='true' />
          </>
        )}
      </StyledCompanyBadge>
      <StyledRecommendationQuote lang={quoteLang} cite={profileUrl}>
        <StyledQuoteMark aria-hidden='true' variants={quoteMarkVariants}>
          &ldquo;
        </StyledQuoteMark>
        <p lang={quoteLang}>{quote}</p>
      </StyledRecommendationQuote>
      <StyledRecommendationAuthor variants={recommendationDetailVariants}>
        <StyledRecommendationAvatar
          aria-hidden='true'
          whileHover={{ scale: 1.08, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 320, damping: 18 }}
        >
          {avatarUrl ? <img src={avatarUrl} alt='' /> : initials}
        </StyledRecommendationAvatar>
        <StyledRecommendationCredentials>
          <h4>{name}</h4>
          {/* company is already named in the badge above, so it is not repeated */}
          <span>{role}</span>
        </StyledRecommendationCredentials>
        <StyledProfileLink
          href={profileUrl}
          target='_blank'
          rel='noreferrer noopener'
          aria-label={`${t('view-profile')}: ${name} (${label})`}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 340, damping: 16 }}
        >
          <Icon aria-hidden='true' />
        </StyledProfileLink>
      </StyledRecommendationAuthor>
    </StyledRecommendationCard>
  );
};

export default RecommendationCard;
