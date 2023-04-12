const DashboardSection = ({id, heading, subheading, children }) => {
    return (
        <>
            <h1 id={id} className=" m-1 pt-24 font-bold text-xl relative text-oirBrown after:content-[''] after:absolute after:w-12 after:-bottom-0 after:left-0 after:h-[2px] after:bg-oirYellow mb-1">
                {heading}
            </h1>
            <div className="flex flex-row justify-between items-center ">
                <p className="text-base text-gray-600">{subheading}</p>
                <div className="p-2 border rounded-full text-sm hover:bg-gray-200 cursor-pointer">View All</div>
            </div>
            <div className="flex snap-x overflow-x-scroll custom-scrollbar py-3 w-[90vw] lg:w-[70vw]">
                {/* cards */}
                {children}
            </div>
        </>
    );
}

export default DashboardSection;