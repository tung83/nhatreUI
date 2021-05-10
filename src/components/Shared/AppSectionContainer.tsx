import styled from '@emotion/styled';
import React from 'react';
import { AppContainer, Section } from './PageCommons';

interface Props {
    paddingStyle?: string;
    backFill?: string;
}

interface SectionProps {
    backFill?: string;
}
const SectionContainer = styled(Section)<SectionProps>`
    background: ${({ backFill }) => backFill};
`;
const AppSectionContainer: React.FC<Props> = ({
    backFill,
    paddingStyle,
    children,
}) => {
    return (
        <SectionContainer backFill={backFill}>
            <AppContainer
                style={{
                    padding: paddingStyle ? paddingStyle : '0',
                }}
                className="app-container"
            >
                {children}
            </AppContainer>
        </SectionContainer>
    );
};

export default AppSectionContainer;
