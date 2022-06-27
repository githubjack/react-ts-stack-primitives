import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { Center } from '@bedrock-layout/center';
import styled from 'styled-components';

import '@bedrock-layout/css-reset/lib/reset.css';
import Subscribe from './Stack';


const BaseStyles = styled(Center)`
  input {
    border: 1px solid black;
    background: white;
  }

  button {
    color: white;
    background: black;
    border: none;
  }

  hr {
    margin: 0;
  }
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BaseStyles maxWidth="640px">
      <Subscribe />
    </BaseStyles>
  </StrictMode>
);
