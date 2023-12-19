import './HeaderStyle.css'

const Header = ({text}) => {
    return (
        <h1 id='header' className="p-5 display-3 text-center">{text}</h1>
    )
}
export default Header