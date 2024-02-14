import './style.css'
export function Button(props){
    return(
        <button className={props.alt ? "btn_alt" : ""}>{props.children}</button>
    )
}