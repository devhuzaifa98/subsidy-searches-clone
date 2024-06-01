import CarrierOne from '../../assets/images/carrier_1.png';
import CarrierTwo from '../../assets/images/carrier_2.png';
import CarrierThree from '../../assets/images/carrier_3.png';
import CarrierFour from '../../assets/images/carrier_4.webp';
import CarrierFive from '../../assets/images/carrier_5.webp';
import CarrierSix from '../../assets/images/carrier_6.webp';
import CarrierSeven from '../../assets/images/carrier_7.webp';

const Carriers = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-16 bg-gray-100 px-10 py-20 text-center text-5xl font-bold">
            <h1>Carriers We Represent</h1>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-7">
                <StyledImage src={CarrierOne} alt="carrier one" />
                <StyledImage src={CarrierTwo} alt="carrier two" />
                <StyledImage src={CarrierThree} alt="carrier three" />
                <StyledImage src={CarrierFour} alt="carrier four" />
                <StyledImage src={CarrierFive} alt="carrier five" />
                <StyledImage src={CarrierSix} alt="carrier six" />
                <StyledImage src={CarrierSeven} alt="carrier seven" />
            </div>
            <h1 className="text-2xl">...And Many More!</h1>
        </div>
    );
};

const StyledImage = ({ src, alt }) => (
    <div className="flex h-48 w-auto max-w-40 items-center justify-center bg-white px-5 py-10">
        <img src={src} alt={alt} />
    </div>
);

export default Carriers;
