
export const Links = (props) => {
    return <a href={props.href} {...props} className={` font-bold mt-5 ${props.className}`}>{props.children}</a>
}

