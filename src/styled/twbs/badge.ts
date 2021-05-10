import { css } from '@emotion/react';
import { primary_color, primary_color_light, white_500 } from '../_design';

export default css`
    .badge-primary {
        background: ${primary_color};
        border-color: ${primary_color_light};
        color: ${white_500};
    }
`;
