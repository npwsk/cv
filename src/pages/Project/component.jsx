import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import ProjectDetails from '@/components/ProjectDetails';
import { getProjectById } from '@/utils/content';
// import classes from './styles.module.scss';

const Project = () => {
  const params = useParams();
  const project = getProjectById(params.projectId);
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  return (
    <Wrapper>
      <NavLink to="/projects">{t('toProjects')}</NavLink>

      <ProjectDetails
        {...project}
        id={params.projectId}
        name={t(`${project.id}.name`)}
        description={t(`${project.id}.description`)}
        features={project.features.map((feat) => t(`${project.id}.features.${feat}`))}
      />
    </Wrapper>
  );
};

export default Project;
