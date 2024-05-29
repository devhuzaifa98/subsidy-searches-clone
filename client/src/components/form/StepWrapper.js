import { FaCheckCircle } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const StepWrapper = ({
    title,
    key,
    rounded = true,
    dependent,
    removable,
    onRemove,
    children,
    borderBottom = true,
}) => {
    return (
        <div
            key={key}
            className={`mb-8 mt-4 overflow-hidden ${rounded ? 'rounded-lg' : ''} border border-light bg-white ${dependent ? 'p-4' : ''}`}
        >
            <div className="flex items-center justify-between bg-primary p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
                {removable ? (
                    <ImCross
                        onClick={onRemove}
                        color="white"
                        className="hover:cursor-pointer"
                    />
                ) : (
                    <FaCheckCircle color="white" size={25} />
                )}
            </div>
            <div
                className={`p-6 ${borderBottom ? 'border-b-8 border-primary' : ''}`}
            >
                {children}
            </div>
        </div>
    )
}

export default StepWrapper
