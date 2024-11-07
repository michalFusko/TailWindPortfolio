import navLinks from "../constants"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Nav = () => (
    <div>
        <nav className="m-auto py-1 max-w-5xl font-montserrat text-lg xl:text-xl font-normal max-xl:max-w-2xl max-md:hidden">
            <ul className="px-20 flex justify-between border-b border-b-stone-950">
                {navLinks.map((item) => (
                    <li key={item.label} className="hover:drop-shadow-[1px_1px_3px_rgb(132,204,22)">
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
        <nav className="text-right">
            <FontAwesomeIcon icon={faBars} className="md:hidden text-4xl p-4"/>
        </nav>
    </div>
)

export default Nav