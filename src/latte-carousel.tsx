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
        if (this.carousel == null) {
            return;
        }

        this.carousel.trigger("next");
    }

    /**
     * Moves to previous item.
     *
     * @memberof LatteCarousel
     */
    public previous() {
        if (this.carousel == null) {
            return;
        }

        this.carousel.trigger("next");
    }

    /**
     * Moves to exact item.
     *
     * @param {number} item Item number to move.
     * @memberof LatteCarousel
     */
    public goTo(item: number) {
        if (this.carousel == null) {
            return;
        }

        this.carousel.trigger("goto", item);
    }

    /**
     * Triggers a carousel event.
     *
     * @param {string} event Event type.
     * @param {*} [data] Event data.
     * @memberof LatteCarousel
     */
    public trigger(event: string, data?: any) {
        if (this.carousel == null) {
            return;
        }

        this.carousel.trigger(event, data);
    }

    /**
     * Renders a wrapped `latte-carousel` element.
     *
     * @returns {React.ReactNode} React node element.
     * @memberof LatteCarousel
     */
    public render(): React.ReactNode {
        if (typeof window === "undefined") {
            return <div className="react-latte-carousel" />;
        }

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
        if (this.refs.carousel == null) {
            return;
        }

        this.carousel = new Carousel(this.refs.carousel as HTMLElement, this.props.options);
    }

    /**
     * Destroy the carousel.
     *
     * @private
     * @memberof LatteCarousel
     */
    private destroy() {
        if (this.carousel == null) {
            return;
        }

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
