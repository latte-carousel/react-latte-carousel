import * as React from "react";

/**
 * Wrapper of LatteItem
 *
 * @export
 * @class LatteItem
 * @extends {React.Component<ILatteItemProps>}
 */
export class LatteItem extends React.Component<ILatteItemProps> {
    /**
     * Renders a `latte-item` element.
     *
     * @returns {React.ReactNode} React node element.
     * @memberof LatteItem
     */
    public render(): React.ReactNode {
        return <div className="latte-item">{this.props.children}</div>;
    }
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
