import { css } from '@emotion/react';
import { black_500, indigo_400, white_500 } from '../_design';

export default css`
    .btn {
        padding: 15px 30px;
        border-radius: 10px;
        height: 64px;
        border-width: 2px;
    }

    .btn-light {
        font-size: 1rem;
        color: ${white_500};
        background-color: transparent;
        border-color: ${white_500};
        &:hover,
        &:active,
        &:focus {
            background-color: ${white_500};
            border-color: ${black_500};
            color: ${black_500};
            box-shadow: none;
        }
    }

    .btn-primary {
        font-size: 1rem;
        font-weight: 500;
        background: ${white_500};
        border-color: ${indigo_400};
        color: ${indigo_400};
        border-radius: 5px;
        height: 44px;
        padding: 5px 20px;
        &:hover,
        &:active,
        &:focus {
            background: ${indigo_400};
            color: ${white_500};
            border-color: ${indigo_400};
            box-shadow: none;
        }
    }
`;
