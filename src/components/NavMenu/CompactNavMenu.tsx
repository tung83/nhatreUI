import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { MenuData, NavNode } from '../../shared/interfaces';
import Modal from 'react-bootstrap/Modal';
import { NavItem } from '../../shared/interfaces/nav.interface';
import SwitchTransition from 'react-transition-group/SwitchTransition';
import CSSTransition from 'react-transition-group/CSSTransition';
import Button from 'react-bootstrap/Button';
import {
    black_500,
    primary_color,
    text_light_grey_color,
} from '../../styled/_design';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MenuContainer = styled.div`
    height: 48px;
    display: flex;
`;
const NavTag = styled.nav`
    width: 100%;
    .navbar-toggler {
        padding-right: 0;
    }
    &.navbar-dark .navbar-toggler .icon-bar {
        background-color: ${black_500};
    }
`;
const SubMenuWrapper = styled.div`
    .sub-menu-list {
        padding-left: 38px;
    }
    .sub-menu-item-text {
        text-decoration: none;
        font-size: 16px;
        display: flex;
        flex: 1 1 auto;
        color: #1f1f1f;
        margin: 10px 0;
    }
`;

const SubMenuHeader = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 16px;
    .sub-header-tittle {
        font-size: 16px;
        color: #000;
        margin: 0;
    }
`;
const ButtonBack = styled(Button)`
    color: #1f1f1f;
    padding: 10px;
    width: 34px;
    height: 34px;
    margin-right: 2px;
    border: 0;
    &:active,
    &:hover {
        text-decoration: none;
        color: #1f1f1f;
        background-color: rgba(0, 0, 0, 0.08);
    }
    &:focus {
        outline: 0;
        box-shadow: none;
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
    }
    .modal-header {
        border-bottom: none;
        .close {
            opacity: 1;
        }
        padding: 12px 20px 0 20px;
    }
    .svg-icon {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 1rem;
        transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        flex-shrink: 0;
        user-select: none;
    }
    .menu-item-button {
        padding: 0px;
        color: #000;
        font-size: 16px;
        width: 100%;
        display: flex;
        position: relative;
        box-sizing: border-box;
        outline: none;
        text-align: left;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .menu-top-item-level {
        width: 100%;
        padding: 20px 0px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        outline: none;
    }
    .menu-item-text {
        text-decoration: none;
        margin: 0px;
        font-size: 16px;
        font-weight: bold;
        flex: 1 1 auto;
        color: #000;
    }
    .transition {
        margin: 35px 35px 10px 35px;
    }
    .menu-list {
        padding: 0;
    }

    .fade-enter .transition {
        opacity: 0.5;
        transform: translateX(100%);
    }
    .fade-enter-active .transition {
        opacity: 1;
        transform: translateX(0%);
    }
    .fade-exit .transition {
        opacity: 1;
        transform: translateX(0%);
    }
    .fade-exit-active .transition {
        opacity: 0.5;
        transform: translateX(-100%);
    }
    .fade-enter-active .transition,
    .fade-exit-active .transition {
        transition: opacity 100ms, transform 150ms;
    }

    .sub-menu.fade-enter .transition {
        opacity: 0.5;
        transform: translateX(-100%);
    }
    .sub-menu.fade-enter-active .transition {
        opacity: 1;
        transform: translateX(0%);
    }
    .sub-menu.fade-exit .transition {
        opacity: 1;
        transform: translateX(0%);
    }
    .sub-menu.fade-exit-active .transition {
        opacity: 0.5;
        transform: translateX(100%);
    }
`;

const SubMenuCol2 = styled(Col)`
    .sub-menu-item-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .menu-icon {
            margin: 0;
        }
    }
`;
const arrowSvg = 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z';
const backBtnSvg =
    // eslint-disable-next-line max-len
    'M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65686 0.928931L0.292893 7.29289ZM17 7L1 7L1 9L17 9L17 7Z';

const renderLogo = (node: NavNode) => {
    const { item } = node;
    return (
        <Link to={item.link}>
            <span id={node.name}>
                {item.svg && (
                    <span
                        dangerouslySetInnerHTML={{
                            __html: item.svg,
                        }}
                    ></span>
                )}
            </span>
        </Link>
    );
};
const renderTopMenuItems = (
    items: NavNode[],
    goToChildren: (menu: NavNode) => void,
) => (
    <ul className="menu-list">
        {items.map((menu: NavNode, index: number) => {
            return index === 0 || !menu.item?.enabled ? null : (
                <li
                    key={menu.id}
                    className="menu-item-button"
                    tabIndex={menu.children == null ? -1 : 0}
                    role="button"
                    onClick={() => goToChildren(menu)}
                >
                    <div className="menu-top-item-level">
                        {menu.children && menu.children.length > 0 ? (
                            <>
                                <div className="menu-item-text">
                                    {menu.item.title}
                                </div>
                                <svg
                                    className="svg-icon"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d={arrowSvg}></path>
                                </svg>
                            </>
                        ) : (
                            <Link
                                className="menu-item-text"
                                to={menu.item.link}
                            >
                                {menu.item.title}
                            </Link>
                        )}
                    </div>
                    <span className="menu-touch-ripple"></span>
                </li>
            );
        })}
    </ul>
);
interface IconProps {
    size: number;
}
const MenuIcon = styled.div<IconProps>`
    margin-right: 20px;
    color: ${primary_color};
    svg {
        width: ${({ size }) => `${size}px`};
        fill: ${primary_color};
    }
`;
const MenuBody = styled.div`
    p {
        color: ${text_light_grey_color};
    }
`;
const renderSubMenuItem = (item: NavItem) => {
    return (
        item.enabled && (
            <Link className="sub-menu-item-text" to={item.link}>
                {item.svg && (
                    <MenuIcon
                        size={36}
                        dangerouslySetInnerHTML={{
                            __html: item.svg || '',
                        }}
                    ></MenuIcon>
                )}
                <MenuBody>
                    <strong>{item.title}</strong>
                    <p>{item.subTitle}</p>
                </MenuBody>
            </Link>
        )
    );
};
const renderSubMenuItems = (items: NavItem[] | undefined) => {
    if (!items) return null;
    if (
        items.every(x => x.subTitle && x.subTitle.length > 0) ||
        !items.some(x => x.svg)
    ) {
        return (
            <ul className="sub-menu-list">
                {items.map(
                    (menu: NavItem) =>
                        menu.enabled && (
                            <li
                                key={menu.id}
                                className="menu-item-button"
                                tabIndex={-1}
                                role="button"
                                aria-disabled="false"
                            >
                                {renderSubMenuItem(menu)}
                                <span className="menu-touch-ripple"></span>
                            </li>
                        ),
                )}
            </ul>
        );
    }
    return (
        <Row>
            {items.map((menu: NavItem, index: number) => (
                <SubMenuCol2 xs={6} key={index}>
                    <Link className="sub-menu-item-2" to={menu.link}>
                        {menu.svg && (
                            <MenuIcon
                                className="menu-icon"
                                size={36}
                                dangerouslySetInnerHTML={{
                                    __html: menu.svg || '',
                                }}
                            ></MenuIcon>
                        )}
                        <MenuBody>
                            <strong>{menu.title}</strong>
                        </MenuBody>
                    </Link>
                </SubMenuCol2>
            ))}
        </Row>
    );
};
const renderChildMenuItems = (
    selectedTopMenu: NavNode,
    goToTop: () => void,
) => (
    <SubMenuWrapper>
        <SubMenuHeader onClick={goToTop}>
            <ButtonBack className="back-btn" variant="link" tabIndex={0}>
                <span className="menu-item-button">
                    <svg
                        className="svg-icon"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d={backBtnSvg}></path>
                    </svg>
                </span>
                <span className="menu-touch-ripple"></span>
            </ButtonBack>
            <h2 className="sub-header-tittle">{selectedTopMenu.item.title}</h2>
        </SubMenuHeader>
        <div className="sub-devider"></div>
        {renderSubMenuItems(selectedTopMenu.children)}
    </SubMenuWrapper>
);
interface MobileMenuProps {
    show: boolean;
    items: NavNode[];
}
const MobileMenuList: React.FC<MobileMenuProps> = ({ show, items }) => {
    const [showSub, setShowSub] = useState<any>(false);
    const [buttonContainerClass, setButtonContainerClass] = useState<string>(
        'button-container',
    );

    const [selectedTopMenu, setSelectedTopMenu] = useState<NavNode | undefined>(
        undefined,
    );
    let menuMotion = {
        zIndex: 1,
        opacity: 1,
        transform: 'none',
    };
    if (show)
        menuMotion = {
            zIndex: 1,
            opacity: 1,
            transform: 'none',
        };
    const goToTop = () => {
        setShowSub(false);
    };
    const goToChildren = (menu: NavNode) => {
        setSelectedTopMenu(menu);
        setShowSub(true);
    };
    useEffect(() => {
        setShowSub(selectedTopMenu != null);
    }, [selectedTopMenu]);
    const setButtonContainerClassValue = () => {
        setButtonContainerClass(
            showSub ? 'sub-menu button-container' : 'button-container',
        );
    };
    return (
        <>
            <Modal.Header closeButton>{renderLogo(items[0])}</Modal.Header>
            <div className="mobile-menu-dialog">
                <div className="mobile-menu-motion" style={menuMotion}>
                    <div className="menu-box">
                        <SwitchTransition>
                            <CSSTransition
                                key={showSub}
                                addEndListener={(node, done) => {
                                    node.addEventListener(
                                        'transitionend',
                                        () => {
                                            done();
                                            setButtonContainerClassValue();
                                        },
                                        false,
                                    );
                                }}
                                classNames="fade"
                            >
                                <div className={buttonContainerClass}>
                                    {showSub ? (
                                        <div className="transition">
                                            {selectedTopMenu &&
                                                renderChildMenuItems(
                                                    selectedTopMenu,
                                                    goToTop,
                                                )}
                                        </div>
                                    ) : (
                                        <div className="transition">
                                            {renderTopMenuItems(
                                                items,
                                                goToChildren,
                                            )}
                                        </div>
                                    )}
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </div>
            </div>
        </>
    );
};

interface Props {
    data: MenuData;
}
const CompactNavMenu: React.FC<Props> = ({ data, children }) => {
    if (!data) {
        return null;
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    return (
        <MenuContainer>
            <NavTag className="navbar navbar-dark menu-item">
                {renderLogo(data.left[0])}
                {children}
                <button
                    onClick={() => setShow(!show)}
                    className="navbar-toggler collapsed"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <ModalTag
                    onHide={handleClose}
                    show={show}
                    dialogClassName="custom-modal"
                >
                    <MobileMenuList
                        show={show}
                        items={[...data.left, ...data.right]}
                    />
                </ModalTag>
            </NavTag>
        </MenuContainer>
    );
};

export default CompactNavMenu;
