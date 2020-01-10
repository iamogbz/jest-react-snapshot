import React, { ReactElement } from "react";
import styled from "styled-components";

export const UglyButton = styled.button`
    color: red;
    background-color: blue;
    text-align: center;
    display: flex;
    justify-items: center;
`;

export const UglyButtonA = ({
    height = 40,
    width = 80,
    className,
}: {
    height?: number;
    width?: number;
    className?: string;
}): ReactElement => {
    const style = {
        height: `${height}px`,
        width: `${width}px`,
    };
    return <UglyButton style={style} className={className}></UglyButton>;
};

export const UglyButtonB = styled(UglyButtonA)`
    width: 120px;
    background-color: black;
    border-radius: 40px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-inbetween;
`;

export const UglyButtons = (): ReactElement => (
    <ButtonGroup>
        <UglyButtonA />
        <UglyButtonB />
    </ButtonGroup>
);
