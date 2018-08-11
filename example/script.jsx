const LatteCarousel = ReactLatte.LatteCarousel;
const LatteItem = ReactLatte.LatteItem;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { enabled: true };
    }

    handleToggle() {
        this.setState({ enabled: !this.state.enabled });
    }

    getOptions() {
        return {
            count: 3,
            touch: true,
            buttons: true,
            dots: true,
            rewind: true,
            autoplay: 0,
            responsive: {
                "0": { count: 1.5, touch: true, buttons: false },
                "480": { count: 2.5, touch: true, buttons: false },
                "768": { count: 3, touch: false, dots: false },
                "1440": { count: 4, touch: false, dots: false },
            },
        };
    }

    renderCarousel() {
        const options = this.getOptions();

        if (!this.state.enabled) {
            options.responsive = undefined;
        }

        return (
            <LatteCarousel options={options}>
                <LatteItem>
                    <div>1</div>
                </LatteItem>
                <LatteItem>
                    <div>2</div>
                </LatteItem>
                <LatteItem>
                    <div>3</div>
                </LatteItem>
                <LatteItem>
                    <div>4</div>
                </LatteItem>
                <LatteItem>
                    <div>5</div>
                </LatteItem>
                <LatteItem>
                    <div>6</div>
                </LatteItem>
            </LatteCarousel>
        );
    }

    render() {
        return (
            <div>
                <button className="toggle" onClick={() => this.handleToggle()}>
                    Toggle
                </button>

                {this.renderCarousel()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
