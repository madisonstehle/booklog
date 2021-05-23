export default function Hamburger(props) {
    const { menuStatus, closeMenu } = props;

    const closeIcon = 'absolute right-8 top-4 h-9 w-0.5 bg-yellow-800';

    return (
        <div 
            onClick={closeMenu} 
            className='menu' 
            className={`bg-gray-300 w-screen sm:w-64 absolute h-screen overflow-auto transition-all z-50 duration-500 border-r shadow-2xl left-full inset-y-0 py-4
            transform ${
                menuStatus
                    ? "-translate-x-full ease-in transition-medium"
                    : "translate-x-0 ease-out transition-medium"
                }`}>

            { menuStatus ? props.children : null }

            <button
                onClick={closeMenu}
                className='absolute right-2 top-2 rounded-xl h-16 w-16'>
                    <div 
                        className={`${closeIcon} transform rotate-45`} 
                    ></div>
                    <div 
                        className={`${closeIcon} transform -rotate-45`} 
                    ></div>
            </button>
        </div>
    )
}