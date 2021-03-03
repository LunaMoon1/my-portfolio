import "tailwindcss/tailwind.css";

import Layout from '../components/layout';
import MainContent from '../components/main-content';
import Resume from './resume/[section]';

export default function Home() {
  return (
    <Layout>
      <Resume />
    </Layout>
  )
}