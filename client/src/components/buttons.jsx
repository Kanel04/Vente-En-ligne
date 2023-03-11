import { Link } from "react-router-dom"

export const Button = (props) => {
    return <button {...props} className="px-4 py-3 bg-slate-600  shadow-2xl rounded-full w-96 mt-5 mb-16 cursor-pointer  text-white ml-8">{props.children}</button>
}

export const Input = (props) => {
    return <input {...props} className="border  shadow-2xl mt-5  w-96 h-10 text-center rounded-full" />
}

export const LinkButton = (props) => {
    return <Link to={props.page}>
        <span className={`px-4   ${props.className} font-bold inline-block hover:bg-[#eab308] hover:text-primary`}>{props.children}</span>
    </Link>
}
