import { Carousel, Options } from "latte-carousel";
import * as React from "react";

/**
 * Wrapper of LatteCarousel.
 *
 * @export
 * @class LatteCarousel
 * @extends {React.Component<ILatteCarouselProps>}
 */
export class LatteCarousel extends React.Component<ILatteCarouselProps> {
    private carousel: Carousel;

    /**
     * Moves to next item.
     *
     * @memberof LatteCarousel
     */
    public next() {
        this.carousel.trigger("next");
    }

    /**
     * Moves to previous item.
     *
     * @memberof LatteCarousel
     */
    public previous() {
        this.carousel.trigger("next");
    }

    /**
     * Moves to exact item.
     *
     * @param {number} item Item number to move.
     * @memberof LatteCarousel
     */
    public goTo(item: number) {
        this.carousel.trigger("goto", item);
    }

    /**
     * Renders a wrapped `latte-carousel` element.
     *
     * @returns {React.ReactNode} React node element.
     * @memberof LatteCarousel
     */
    public render(): React.ReactNode {
        return (
            <div className="react-latte-carousel">
                <div className="latte-carousel" ref="carousel">
                    {this.props.children}
                </div>
            </div>
        );
    }

    /**
     * React's componentDidMount event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    public componentDidMount() {
        this.create();
    }

    /**
     * React's componentWillReceiveProps event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    public componentWillReceiveProps() {
        this.destroy();
    }

    /**
     * React's componentDidUpdate event. Creates the carousel.
     *
     * @memberof LatteCarousel
     */
    public componentDidUpdate() {
        this.create();
    }

    /**
     * React's componentWillUnmount event. Destroys the carousel.
     *
     * @memberof LatteCarousel
     */
    public componentWillUnmount() {
        this.destroy();
    }

    /**
     * Creates the carousel using prop options.
     *
     * @private
     * @memberof LatteCarousel
     */
    private create() {
        this.carousel = new Carousel(this.refs.carousel as HTMLElement, this.props.options);
    }

    /**
     * Destroy the carousel.
     *
     * @private
     * @memberof LatteCarousel
     */
    private destroy() {
        this.carousel.remove();
        this.carousel = undefined;
    }
}

/**
 * LatteCarousel props.
 *
 * @export
 * @interface ILatteCarouselProps
 */
export interface ILatteCarouselProps {
    children: React.ReactNode[];
    options: Options;
}
