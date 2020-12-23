import React from 'react';
import { Container, Sidebar, Category } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <Category>NORMAL</Category>
      </Sidebar>
    </Container>
  );
};

export default Dashboard;
