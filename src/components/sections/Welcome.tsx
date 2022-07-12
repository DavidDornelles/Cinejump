import React from "react";
import { Button, Paragraph, Title } from "components/globals";
import { StyledWelcome } from "components/styled/StyledWelcome";
import * as DS from '../../css/variables';

const Welcome = (props: { pageName:string }) => {
  const { pageName } = props;
  const WELCOME =  {
    title: pageName === 'login' ? 'Olá, Visitante!' : 'Bem-vindo, Jumper!',
    text: pageName === 'login' ? 'Cadastre-se e conheça as vantagens do Cinejump.' : 'Para se manter conectado, faça login com suas credenciais',
  }

  return (
    <StyledWelcome>
      <Title hierarchy={'h2'} size={'32px'} line={'38.54px'} style={{ marginBottom: '32px' }}>{WELCOME.title}</Title>
      <Paragraph line={['', '48px']} size={['', '30px']} style={{ marginBottom: '32px'}}>{WELCOME.text}</Paragraph>
      <Button type="button" style={{ border: `3px solid ${DS.COLOR_LIGHT}`, borderRadius: '45px', padding: '24px', textTransform: 'uppercase' }} action={() => console.log('login button')}>{'Button Text'}</Button>
    </StyledWelcome>
  );
};

export default Welcome;