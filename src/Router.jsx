import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
import Contacts from '@/pages/Contacts';
import NotFound from '@/pages/NotFound';
import Project from '@/components/Project';
import Layout from '@/components/Layout/component';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />}>
            <Route path=":projectId" element={<Project />} />
            <Route index element={<div>Select a project</div>} />
          </Route>
          <Route path="experience" element={<Experience />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
