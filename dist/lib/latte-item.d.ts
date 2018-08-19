import * as React from "react";
/**
 * Wrapper of LatteItem
 *
 * @export
 * @class LatteItem
 * @extends {React.Component<ILatteItemProps>}
 */
export declare class LatteItem extends React.Component<ILatteItemProps> {
    /**
     * Renders a `latte-item` element.
     *
     * @returns {React.ReactNode} React node element.
     * @memberof LatteItem
     */
    render(): React.ReactNode;
}
/**
 * LatteItem props.
 *
 * @export
 * @interface ILatteItemProps
 */
export interface ILatteItemProps {
    children: React.ReactNode;
}
