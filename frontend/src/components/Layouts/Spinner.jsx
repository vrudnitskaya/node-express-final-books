const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <g transform="translate(80,50)">
                <g transform="rotate(0)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-100">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.875s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.875s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(71.21320343559643,71.21320343559643)">
                <g transform="rotate(45)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-90">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.75s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.75s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(50,80)">
                <g transform="rotate(90)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-75">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.625s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.625s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(28.786796564403577,71.21320343559643)">
                <g transform="rotate(135)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-62">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.5s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.5s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(20,50.00000000000001)">
                <g transform="rotate(180)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-50">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.375s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.375s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(28.78679656440357,28.786796564403577)">
                <g transform="rotate(225)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-38">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.25s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.25s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(49.99999999999999,20)">
                <g transform="rotate(270)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-25">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.125s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.125s"
                        />
                    </circle>
                </g>
            </g>
            <g transform="translate(71.21320343559643,28.78679656440357)">
                <g transform="rotate(315)">
                    <circle cx="0" cy="0" r="7" className="fill-[#ea917c] opacity-12">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="0s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="0s"
                        />
                    </circle>
                </g>
            </g>
        </svg>
    );
};

export default Spinner;  