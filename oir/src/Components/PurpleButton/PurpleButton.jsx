const PurpleButton = ({text}) => {
        return (
            <div className=' cursor-pointer flex items-center py-3 px-8 rounded-full border-black text-white justify-center bg-oirPurple hover:bg-purple-900 transition duration-100 ease-in-out'>
              <button className=' text-white font-bold'>
                {text}
              </button>
            </div>
     );
}
 
export default PurpleButton;