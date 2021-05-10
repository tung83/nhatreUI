import React from 'react';
import styled from '@emotion/styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    menu_height,
    black_500,
    primary_color,
    menu_shadow,
    text_light_grey_color,
    white_500,
} from '../../styled/_design';
import { useWindowSize } from '../../hooks';
import { NavNode } from '../../shared/interfaces';

interface Props {
    node?: NavNode;
    show?: boolean;
    columns?: number;
    offsetLeft?: number;
    iconSize?: number;
}

interface ContainerProps {
    screenWidth: number;
    offsetLeft: number;
}

interface IconProps {
    size: number;
}

const MenuContainer = styled.div<ContainerProps>`
    background: ${white_500};
    position: absolute;
    border-radius: 5px;
    top: ${menu_height - 2}px;
    left: ${({ offsetLeft }) => `${offsetLeft}px`};
    padding: 30px 0;
    box-shadow: ${menu_shadow};
`;

const CustomCol = styled(Col)`
    padding: 0 30px;
`;

const MenuNode = styled.a`
    display: flex;
    color: ${black_500};
    height: 80px;
    &.no-icon {
        height: 40px;
    }
`;

const MenuIcon = styled.div<IconProps>`
    margin-right: 20px;
    color: ${primary_color};
    svg {
        width: ${({ size }) => `${size}px`};
        fill: ${primary_color};
    }
`;

const MenuBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        color: ${text_light_grey_color};
    }
`;

const FullNavMenuMega: React.FC<Props> = ({
    node,
    columns,
    offsetLeft,
    show,
    iconSize,
}) => {
    const { width: screenWidth } = useWindowSize();

    // Default values
    const megaWidth = offsetLeft || 1024;
    const megaIconSize = iconSize || 36;
    const activeChildren =
        (node && node?.children && node.children.filter(x => x.enabled)) || [];
    const hasIcon = activeChildren.some(x => x.svg);
    const colCount = hasIcon
        ? Math.min(activeChildren.length, columns || 3)
        : 1;
    const nodesPerCol = Math.ceil(activeChildren.length / colCount || 0);

    const renderNodes = (colIdx: number, iconSize: number) => {
        const nodes = [];
        const startIdx = colIdx * nodesPerCol;
        for (let n = startIdx; n < startIdx + nodesPerCol; n++) {
            const child = activeChildren[n];
            if (child) {
                nodes.push(
                    <MenuNode
                        key={n}
                        href={child.link}
                        className={hasIcon ? 'has-icon' : 'no-icon'}
                    >
                        {hasIcon && (
                            <MenuIcon
                                size={iconSize}
                                dangerouslySetInnerHTML={{
                                    __html: child.svg || '',
                                }}
                            ></MenuIcon>
                        )}
                        <MenuBody>
                            <strong className="body-16">{child.title}</strong>
                            {child.subTitle && child.subTitle.length > 0 && (
                                <p>{child.subTitle}</p>
                            )}
                        </MenuBody>
                    </MenuNode>,
                );
            }
        }
        return nodes;
    };

    const renderColumns = (iconSize: number) => {
        const cols = [];
        for (let c = 0; c < colCount; c++) {
            cols.push(
                <CustomCol key={c} className={c === colCount - 1 ? 'last' : ''}>
                    {/* Pass the column index in */}
                    {renderNodes(c, iconSize)}
                </CustomCol>,
            );
        }
        return cols;
    };

    return show && activeChildren.length > 0 ? (
        <MenuContainer
            className="menu-mega"
            screenWidth={screenWidth}
            offsetLeft={megaWidth}
        >
            <Container>
                <Row>{renderColumns(megaIconSize)}</Row>
            </Container>
        </MenuContainer>
    ) : (
        <></>
    );
};

export default FullNavMenuMega;
