const Heading = ({ text }) => {
    return (
        <h1 className=" m-1 font-bold text-4xl relative text-oirBrown after:content-[''] after:absolute after:w-24 after:-bottom-2 after:left-0 after:h-[2px] after:bg-oirYellow font-Montserrat ">
            {text}
        </h1>
    );
}
export const SmallHeading = ({heading,id}) => {
    return (
        <h1 id={id} className=" m-1 pt-10 md:pt-24 font-bold text-xl relative text-oirBrown after:content-[''] after:absolute after:w-12 after:-bottom-0 after:left-0 after:h-[2px] after:bg-oirYellow mb-1">
            {heading}
        </h1>
    );
}

export default Heading;