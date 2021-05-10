/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player/lazy';
import { size, white_500 } from '../../../styled/_design';
import Modal from 'react-bootstrap/Modal';
const url = '/Tradewindow_BrandVideo.mp4';
import VideoPlayButtonSvg from './VideoPlayButton.inline.svg';

const Wrapper = styled.div`
    position: relative;
    padding-top: 100vh;
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
        video {
            -o-object-fit: cover;
            font-family: 'object-fit:cover';
            object-fit: cover;
            -webkit-transition: opacity 50ms linear;
            transition: opacity 50ms linear;
            -webkit-transition-delay: 275ms;
            transition-delay: 275ms;
            vertical-align: middle;
        }
    }
`;
const TextContent = styled.h2`
    display: none;
    position: absolute;
    top: 150px;
    left: 200px;
    z-index: 1000;
    max-width: 933px;
    color: ${white_500};
    @media (min-width: ${size.sm}) {
        display: block;
    }
`;
const PlayButton = styled.div`
    z-index: 1000;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
    svg {
        width: 90px;
    }
`;
const ModalTag = styled(Modal)`
    .custom-modal,
    .modal-content {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border-radius: 0;
        max-width: 100%;
        border: none;
    }
    .custom-modal {
        height: 100%;
    }
    .modal-header {
        padding: 10px 20px;
    }
`;

interface MobileMenuProps {}
const MobileMenuList: React.FC<MobileMenuProps> = () => {
    return (
        <>
            <Modal.Header closeButton>
                <ReactPlayer
                    className="react-player"
                    url={url}
                    width="100%"
                    height="calc(100vh - 50px)"
                    playing
                />
            </Modal.Header>
        </>
    );
};
interface Props {}
const HomePageVideo: React.FC<Props> = () => {
    const [show, setShow] = useState(false);
    const refScrollPosition = useRef(0);
    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            window.scrollTo(0, refScrollPosition.current);
        }, 300);
    };
    const openModal = () => {
        setShow(true);
        refScrollPosition.current = window.pageYOffset;
    };
    return (
        <Wrapper>
            <PlayButton>
                <VideoPlayButtonSvg onClick={() => openModal()} />
            </PlayButton>
            <TextContent>
                TradeWindow is an innovation company that builds and operates
                trade technology
            </TextContent>
            <ReactPlayer
                className="react-player"
                url={url}
                width="100%"
                height="100%"
                muted
                playing
            />
            <ModalTag
                onHide={handleClose}
                show={show}
                dialogClassName="custom-modal"
            >
                <MobileMenuList />
            </ModalTag>
        </Wrapper>
    );
};

export default HomePageVideo;
