
import { Link } from "react-router-dom"


export const LinkButton = (props) => {
    return <Link to={props.page}>
        <span className={`px-4   ${props.className}  inline-block font-bold`}>{props.children}</span>
    </Link>
}