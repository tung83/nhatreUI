import { css } from '@emotion/react';
import {
    base_font_size,
    indigo_400,
    mobile_base_font_size,
    primary_color,
    size,
    text_black_color,
    text_grey_color,
} from './_design';
// eslint-disable-next-line max-len
// https://www.templatemonsterpreview.com/demo/86052.html?utm_campaign=buttonmonsterone&utm_source=colorlib&utm_medium=referral&aff=colorlib
// https://hookagency.com/blog/website-color-schemes/
export default css`
    // Reset HTML editor content
    p {
        margin: 0;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: ${mobile_base_font_size};
        color: ${text_black_color};
        background: #fff;
        height: 100%;
        @media (min-width: ${size.md}) {
            font-size: ${base_font_size};
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
        font-weight: 700;
    }
    a {
        color: ${text_grey_color};
        &.active,
        &:hover,
        &:active {
            text-decoration: none;
            color: ${primary_color};
        }
    }
    .lazy-image-wrapper .gatsby-image-wrapper {
        border-radius: 5px;
    }
    .nav-tabs .nav-item.active {
        text-decoration: none;
        color: ${primary_color};
    }
    .animate-bottom-parent {
        overflow: hidden;
        line-height: inherit;
        display: block;
        text-align: start;
        width: 100%;
    }
    .animate-bottom {
        transform: translateY(100%);
        animation-name: animatebottomToTop;
        animation-duration: 0.6s;
        animation-delay: 0.2s;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
    }
    @-webkit-keyframes animatebottomToTop {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }
    @keyframes animatebottomToTop {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }
    /* remove navbar button stying */
    .navbar-toggler {
        background: none;
        border: none;

        /* remove the blue outline when active or focused */
        &:active,
        &:focus {
            outline: 0;
        }

        /* basic styles for each icon bar */
        .icon-bar {
            display: block;
            width: 22px;
            height: 2px;
            border-radius: 1px;
            margin: 4px 0 4px 0;
            transition: all 0.2s;

            /* custom .navbar-dark .icon-bar background */
            .navbar-dark & {
                background: #ffffff;
            }

            /* .navbar open top .icon-bar rotated down 45° */
            &:nth-of-type(1) {
                transform: rotate(45deg);
                transform-origin: 10% 10%;
            }

            /* .navbar open middle .icon-bar invisible */
            &:nth-of-type(2) {
                opacity: 0;
                filter: alpha(opacity=0);
            }

            /* .navbar open bottom .icon-bar rotated up 45° */
            &:nth-of-type(3) {
                transform: rotate(-45deg);
                transform-origin: 10% 90%;
            }
        }

        /* styles for when .navbar is closed */
        &.collapsed {
            .icon-bar {
                /* .navbar closed top .icon-bar no rotation - straight */
                &:nth-of-type(1) {
                    transform: rotate(0);
                }

                /* .navbar open middle .icon-bar visible */
                &:nth-of-type(2) {
                    opacity: 1;
                    filter: alpha(opacity=100);
                }

                /* .navbar open bottom .icon-bar no rotation - straight */
                &:nth-of-type(3) {
                    transform: rotate(0);
                }
            }
        }
    }
    .text-highlight {
        color: ${indigo_400} !important;
    }
    .label-12 {
        font-size: 0.75rem;
        @media (min-width: ${size.md}) {
            font-size: 0.6rem;
        }
    }
    // body 16 in desktop; body 12 in mobile
    .body-16 {
        font-size: 0.75rem;
        @media (min-width: ${size.md}) {
            font-size: 0.8rem;
        }
    }
    // body 16 in both
    .body-16-all {
        font-size: 1rem;
        @media (min-width: ${size.md}) {
            font-size: 0.8rem;
        }
    }
    // body 20 in desktop; body 16 in mobile
    .body-20 {
        font-size: 1rem;
        @media (min-width: ${size.md}) {
            font-size: 1rem;
        }
    }
    // body 24 in desktop; body 16 in mobile
    .body-24 {
        font-size: 1rem;
        @media (min-width: ${size.md}) {
            font-size: 1.2rem;
        }
    }
    // body 32 in desktop; body 16 in mobile
    .body-32 {
        font-size: 1rem;
        @media (min-width: ${size.md}) {
            font-size: 1.6rem;
        }
    }
    // heading 1 in desktop; heading 3 in mobile
    .heading-1-m24 {
        font-size: 2.5rem;
        @media (min-width: ${size.md}) {
            font-size: 3.6rem;
        }
    }
    // heading 1 in desktop; heading 3 in mobile
    .heading-1 {
        font-size: 2rem;
        @media (min-width: ${size.md}) {
            font-size: 3.6rem;
        }
    }
    // heading 2 in desktop; heading 3 in mobile
    .heading-2 {
        font-family: 'Lobster', 'Poppins', Arial, Helvetica, sans-serif;
        color: #00996d;
        font-size: 2.5rem;
        @media (min-width: ${size.md}) {
            font-size: 2.4rem;
        }
    }
    // heading 3 in desktop; heading 5 in mobile
    .heading-3 {
        font-family: 'Lobster', 'Poppins', Arial, Helvetica, sans-serif;
        color: #00996d;
        font-size: 2rem;
        @media (min-width: ${size.md}) {
            font-size: 1.6rem;
        }
    }
    // heading 4 in desktop; body 16 in mobile
    .heading-4 {
        font-size: 1.5rem;
    }
    .heading-5 {
        font-size: 0.75rem;
        @media (min-width: ${size.md}) {
            font-size: 1rem;
        }
    }
    // heading 4 in both
    .heading-4-all {
        font-size: 1.25rem;
        @media (min-width: ${size.md}) {
            font-size: 1rem;
        }
    }
`;
