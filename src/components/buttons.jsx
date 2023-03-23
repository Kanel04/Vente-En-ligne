import { Link } from "react-router-dom"

export const Button = (props) => {
    return <button {...props} className="px-4 py-3 bg-slate-600 bg-three  shadow-2xl rounded-full w-[340px] mt-5 mb-16 cursor-pointer  text-primary font-bold ">{props.children}</button>
}

export const Input = (props) => {
    return <input {...props} className="  shadow-2xl mt-5  w-[340px] h-9 text-center rounded-full" />
}

export const LinkButton = (props) => {
    return <Link to={props.page}>
        <span className={`px-4   ${props.className} font-bold inline-block hover:bg-[#eab308] hover:text-primary`}>{props.children}</span>
    </Link>
}
