const Wave = ({ height, width, className }) => {
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 1440 320"
        className={className}
    >
        <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,160L80,133.3C160,107,320,53,480,48C640,43,800,85,960,85.3C1120,85,1280,43,1360,21.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
    </svg>;
};

export default Wave;
