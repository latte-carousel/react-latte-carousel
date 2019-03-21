import { IOptions } from "latte-carousel";
import * as React from "react";
/**
 * Wrapper of LatteCarousel.
 *
 * @export
 * @class LatteCarousel
 * @extends {React.Component<ILatteCarouselProps>}
 */
export declare class LatteCarousel extends React.Component<ILatteCarouselProps> {
    private carousel;
    /**
     * Moves to next item.
     *
     * @memberof LatteCarousel
     */
    next(): void;
    /**
     * Moves to previous item.
     *
     * @memberof LatteCarousel
     */
    previous(): void;
    /**
     * Moves to exact item.
     *
     * @param {number} item Item number to move.
     * @memberof LatteCarousel
     */
    goTo(item: number): void;
    /**
     * Triggers a carousel event.
     *
     * @param {string} event Event type.
     * @param {*} [data] Event data.
     * @memberof LatteCarousel
     */
    trigger(event: string, data?: any): void;
    /**
     * Renders a wrapped `latte-carousel` element.
     *
     * @returns {React.ReactNode} React node element.
     * @memberof LatteCarousel
     */
    render(): React.ReactNode;
    /**
     * React's componentDidMount event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    componentDidMount(): void;
    /**
     * React's componentWillReceiveProps event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    componentWillReceiveProps(): void;
    /**
     * React's componentDidUpdate event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    componentDidUpdate(): void;
    /**
     * React's componentWillUnmount event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    componentWillUnmount(): void;
    /**
     * Creates the carousel using prop options.
     *
     * @private
     * @memberof LatteCarousel
     */
    private create;
    /**
     * Destroy the carousel.
     *
     * @private
     * @memberof LatteCarousel
     */
    private destroy;
}
/**
 * LatteCarousel props.
 *
 * @export
 * @interface ILatteCarouselProps
 */
export interface ILatteCarouselProps {
    children: React.ReactNode[];
    options: IOptions;
}
