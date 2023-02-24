const Heading = ({text}) => {
    return ( 
        <h1 className=" m-1 font-bold text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow">
            {text}
        </h1>
     );
}
 
export default Heading;