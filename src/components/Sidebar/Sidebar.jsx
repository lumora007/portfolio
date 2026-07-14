import { motion } from 'framer-motion';
import { StyledSidebarContainer } from '../../styles/Sidebar/StyledSidebarContainer';
import { StyledSocialList } from '../../styles/Sidebar/StyledSocialList';
import { StyledSocialLink } from '../../styles/Sidebar/StyledSocialLink';
import GithubSVG from '/src/assets/icons/github.svg';
import MailSVG from '/src/assets/icons/mail.svg';
import MapPinSVG from '/src/assets/icons/map-pin.svg';
import { socialIconVariants, socialListVariants } from '../../utils/animations';
import { useReducedMotion } from 'framer-motion';
import { useGlobalContext } from '../../Context/Context';

const Sidebar = () => {
  const { atBottom } = useGlobalContext();

  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSidebarContainer
      atBottom={atBottom}
      initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
      animate='visible'
      variants={socialListVariants}
    >
      <StyledSocialList>
        <StyledSocialLink atBottom={atBottom}>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='https://github.com/pokemon918'
            aria-label='Github'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubSVG />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink atBottom={atBottom}>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='mailto:cozmo8110@gmail.com'
            aria-label='Gmail'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MailSVG />
          </motion.a>
        </StyledSocialLink>
        <StyledSocialLink atBottom={atBottom}>
          <motion.a
            initial='hidden'
            whileHover='visible'
            animate='hidden'
            variants={socialIconVariants}
            href='https://www.google.com/maps/search/?api=1&query=Edogawa%202-32-31%2C%20Edogawa%2C%20Tokyo%20132-0013'
            aria-label='Location on Google Maps'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MapPinSVG />
          </motion.a>
        </StyledSocialLink>
      </StyledSocialList>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
