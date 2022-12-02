import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper/component';
import classes from './styles.module.scss';
import ContactsList from '../../ContactsList/component';

const Footer = () => {
  const { t } = useTranslation('translation');
  return (
    <footer>
      <Wrapper>
        <div className={classes.content}>
          <ContactsList iconsOnly layout="row" iconSize="m" />
          <span className={classes.copy}>
            &copy; 2022 {t('about.firstName')} {t('about.lastName')}
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
