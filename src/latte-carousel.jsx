import React from "react";
import { Carousel } from "latte-carousel";

/**
 * Wrapper of LatteCarousel.
 *
 * @export
 * @class LatteCarousel
 * @extends {React.Component}
 */
export class LatteCarousel extends React.Component {
    /**
     * React's componentDidMount event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    componentDidMount() {
        this.create();
    }

    /**
     * React's componentWillReceiveProps event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    componentWillReceiveProps() {
        this.destroy();
    }

    /**
     * React's componentDidUpdate event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    componentDidUpdate() {
        this.create();
    }

    /**
     * React's componentWillUnmount event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    componentWillUnmount() {
        this.destroy();
    }

    /**
     * Creates the carousel using prop options.
     *
     * @memberof LatteCarousel
     */
    create() {
        this.carousel = new Carousel(this.refs.carousel, this.props.options);
    }

    /**
     * Destroy the carousel.
     *
     * @memberof LatteCarousel
     */
    destroy() {
        this.carousel.remove();
        this.carousel = undefined;
    }

    /**
     * Renders a wrapped `latte-carousel` element.
     *
     * @returns React node element.
     * @memberof LatteItem
     */
    render() {
        return (
            <div className="react-latte-carousel">
                <div className="latte-carousel" ref="carousel">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 * Wrapper of LatteItem
 *
 * @export
 * @class LatteItem
 * @extends {React.Component}
 */
export class LatteItem extends React.Component {
    /**
     * Renders a `latte-item` element.
     *
     * @returns React node element.
     * @memberof LatteItem
     */
    render() {
        return <div className="latte-item">{this.props.children}</div>;
    }
}
