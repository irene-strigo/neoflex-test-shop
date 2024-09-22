import styled, { css } from 'styled-components';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { spin } from './animations';

interface FAIconProps extends FontAwesomeIconProps {
  $animated?: boolean;
}

export const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          animation: ${spin} 4s infinite linear;
        `
      : css`
          animation: none;
        `}
`;
