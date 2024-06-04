const Wave = ({ height, width, className }) => (
    <svg
        id="wave"
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(183, 74, 6, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 207, 86, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path
            style={{ transform: 'translate(0, 0px)', opacity: '1' }}
            fill="url(#sw-gradient-0)"
            d="M0,441L120,416.5C240,392,480,343,720,277.7C960,212,1200,131,1440,155.2C1680,180,1920,310,2160,351.2C2400,392,2640,343,2880,343C3120,343,3360,392,3600,416.5C3840,441,4080,441,4320,416.5C4560,392,4800,343,5040,343C5280,343,5520,392,5760,383.8C6000,376,6240,310,6480,261.3C6720,212,6960,180,7200,196C7440,212,7680,278,7920,310.3C8160,343,8400,343,8640,310.3C8880,278,9120,212,9360,155.2C9600,98,9840,49,10080,24.5C10320,0,10560,0,10800,65.3C11040,131,11280,261,11520,318.5C11760,376,12000,359,12240,359.3C12480,359,12720,376,12960,318.5C13200,261,13440,131,13680,65.3C13920,0,14160,0,14400,65.3C14640,131,14880,261,15120,269.5C15360,278,15600,163,15840,98C16080,33,16320,16,16560,16.3C16800,16,17040,33,17160,40.8L17280,49L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
        ></path>
        <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(221, 108, 2, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 207, 86, 1)" offset="100%"></stop>
            </linearGradient>
        </defs>
        <path
            style={{ transform: 'translate(0, 50px)', opacity: '0.9' }}
            fill="url(#sw-gradient-1)"
            d="M0,147L120,163.3C240,180,480,212,720,204.2C960,196,1200,147,1440,155.2C1680,163,1920,229,2160,228.7C2400,229,2640,163,2880,163.3C3120,163,3360,229,3600,261.3C3840,294,4080,294,4320,277.7C4560,261,4800,229,5040,253.2C5280,278,5520,359,5760,351.2C6000,343,6240,245,6480,212.3C6720,180,6960,212,7200,187.8C7440,163,7680,82,7920,98C8160,114,8400,229,8640,302.2C8880,376,9120,408,9360,367.5C9600,327,9840,212,10080,187.8C10320,163,10560,229,10800,236.8C11040,245,11280,196,11520,187.8C11760,180,12000,212,12240,204.2C12480,196,12720,147,12960,155.2C13200,163,13440,229,13680,277.7C13920,327,14160,359,14400,351.2C14640,343,14880,294,15120,261.3C15360,229,15600,212,15840,245C16080,278,16320,359,16560,343C16800,327,17040,212,17160,155.2L17280,98L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
        ></path>
    </svg>
);

export default Wave;
