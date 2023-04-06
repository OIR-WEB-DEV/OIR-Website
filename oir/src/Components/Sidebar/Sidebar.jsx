import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const SidebarItem = ({title,link}) => {
    return (
        <a
            className="flex items-center px-3 py-1 text-gray-700/80 transition-colors duration-300 transform rounded-lg hover:bg-gray-400/25"
            href={`#${link}`}
        >
            <span className="mx-1 text-sm font-medium">{title}</span>
        </a>
    );
}

export const SidebarItemPhone = ({title,link}) => {
    return (
        <NavLink to={link}
            className="flex items-center px-3 py-1 text-gray-700/80 transition-colors duration-300 transform rounded-lg hover:bg-gray-400/25"
            >
            <span className="mx-1 text-sm font-medium">{title}</span>
        </NavLink>
    );
}


export const Sidebar = ({ image, name, email,children }) => {
    return (
        <aside className="rounded-l-xl shadow-xl lg:shadow-none lg:rounded-none lg:flex fixed flex-col w-64 h-[calc(100vh-5rem)] px-5 justify-between py-4 overflow-y-auto border-2 lg:border-l border-r bg-[#F3F3F3]">
            <div className="">
                <a href="#">
                    <div className="bg-white rounded-lg shadow-sm flex p-2">
                        <img className="object-cover w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="avatar" />
                        <div className="ml-2">
                            <h1 className="font-bold text-base text-gray-900" >{name}</h1>
                            <p className="text-xs font-normal text-gray-900">{email}</p>
                        </div>
                    </div>
                </a>
                <div className="flex flex-col mt-6">
                    <nav className="flex-1 -mx-3 space-y-3">
                        <div className="">
                            {children}
                        </div>

                    </nav>

                </div>
            </div>
            <div className="flex items-center -mt-20 py-1 pr-2 text-lg text-gray-700/95  hover:bg-gray-400/25 justify-between mr-6 cursor-pointer rounded-lg">
                <span className="mx-1 px-3 text-sm font-semibold">Log out</span>
                <MdOutlineLogout />

            </div>
        </aside>
    );
}
