import * as React from "react";
import styled from "styled-components";

export const UglyButton = styled.button`
    color: red;
    background-color: blue;
    text-align: center;
    display: inline-flex;
    justify-items: center;
`;

export const UglyButtonA = ({
    height = 40,
    width = 80,
    className,
    children,
}: {
    height?: number;
    width?: number;
    className?: string;
    children?: React.ReactNode;
}): React.ReactElement => {
    const style = {
        height: `${height}px`,
        width: `${width}px`,
    };
    return (
        <UglyButton style={style} className={className}>
            {children}
        </UglyButton>
    );
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

export const UglyButtons = (): React.ReactElement => (
    <ButtonGroup>
        <UglyButtonA>Button A</UglyButtonA>
        <UglyButtonB>Button B</UglyButtonB>
    </ButtonGroup>
);
