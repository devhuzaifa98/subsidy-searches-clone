import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ApplySticky = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/form')} className="md:hidden py-3 font-bold text-xl w-full bottom-0 bg-primary fixed z-10 flex justify-center gap-x-2 items-center">
            <h1>Apply Now</h1>
            <IoIosArrowDropright size={25} />
        </div>
    )
}

export default ApplySticky