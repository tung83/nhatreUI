import { Link } from 'gatsby';
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { black_500, menu_height, primary_color } from '../../styled/_design';
import FullNavMenuMega from './FullNavMenuMega';
import { MenuData, NavNode } from '../../shared/interfaces';
import { renderPlaceholder } from '../../shared/utils';
import LazyImage from '../Shared/LazyImage';

interface Props {
    data: MenuData;
}

const itemSpacing = '18px';

const MenuContainer = styled.div`
    height: ${menu_height}px;
    display: flex;
    justify-content: space-between;
`;

const MenuSection = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    align-items: center;
`;

const MenuItem = styled.div`
    padding: 0 ${itemSpacing};
    a {
        font-weight: 700;
        &:not(.btn) {
            color: ${black_500};
            text-decoration: none;
            &.active,
            &:hover {
                color: ${primary_color};
            }
        }
    }

    &.is-button {
        display: flex;
        padding: 0 ${itemSpacing};
        align-items: center;
        height: 100%;
    }
    .logo {
        display: block;
        margin-top: -5px;
    }
    .item-link {
        cursor: pointer;
    }
`;

const renderLinkInner = (node: NavNode) => {
    const { item } = node;
    return (
        <span id={node.name}>
            {item.svg ? (
                <span
                    dangerouslySetInnerHTML={{
                        __html: item.svg,
                    }}
                ></span>
            ) : (
                item.icon && <LazyImage src={item.icon} variant="fixed" />
            )}
            {renderPlaceholder(item.title)}
        </span>
    );
};

const FullNavMenu: React.FC<Props> = ({ data }) => {
    if (!data) {
        return null;
    }
    const megaMenuLeftOffsetRef = useRef(0);

    const [showMega, setShowMega] = useState<boolean>(false);
    const [activeNode, setActiveNode] = useState({
        name: '',
        node: undefined,
    });
    const { left, right } = data;

    const renderMenuItem = (node: NavNode) => {
        const { item } = node;
        let itemClass = node.is_button
            ? 'btn btn-primary item-link'
            : 'item-link';
        itemClass =
            activeNode.name === node.name ? 'active item-link' : 'item-link';

        const handleHoverMenuItem = (evt: any) => {
            let selectedTarget = evt.target;
            let currentNodeTarget = evt.target;
            for (let i = 0; i < 10; i++) {
                if (currentNodeTarget.className?.indexOf('menu-item') >= 0) {
                    selectedTarget = currentNodeTarget;
                    break;
                }
                if (currentNodeTarget.parentNode) {
                    currentNodeTarget = currentNodeTarget.parentNode;
                }
            }
            if (node.children && node.children.length > 0) {
                megaMenuLeftOffsetRef.current = selectedTarget.offsetLeft;
                setShowMega(true);
                setActiveNode({
                    name: selectedTarget.id,
                    node: node as any,
                });
            } else {
                setShowMega(false);
                setActiveNode({ name: '', node: undefined });
            }
        };

        return (
            item &&
            item.enabled && (
                <MenuItem
                    onMouseEnter={handleHoverMenuItem}
                    id={node.name}
                    key={node.name}
                    className={
                        node.is_button ? 'is-button menu-item ' : 'menu-item'
                    }
                >
                    {/* Gatsby <Link /> does not want absolute URL */}
                    {item.link ? (
                        item.link.indexOf('http') === 0 ? (
                            <a
                                className={
                                    node.is_button ? 'btn btn-primary' : ''
                                }
                                href={item.link}
                            >
                                {renderLinkInner(node)}
                            </a>
                        ) : (
                            <Link className={itemClass} to={item.link}>
                                {renderLinkInner(node)}
                            </Link>
                        )
                    ) : (
                        <a className={itemClass}>{renderLinkInner(node)}</a>
                    )}
                </MenuItem>
            )
        );
    };
    const onMouseLeave = () => {
        setShowMega(false);
        setActiveNode({ name: '', node: undefined });
    };

    return (
        <div onMouseLeave={() => onMouseLeave()}>
            <MenuContainer>
                <MenuSection>{left && left.map(renderMenuItem)}</MenuSection>
                <MenuSection>{right && right.map(renderMenuItem)}</MenuSection>
            </MenuContainer>
            <FullNavMenuMega
                show={showMega}
                node={activeNode.node}
                columns={3}
                offsetLeft={megaMenuLeftOffsetRef.current}
                iconSize={60}
            />
        </div>
    );
};

export default FullNavMenu;
