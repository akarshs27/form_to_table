import './Button.scss';

const Button = ({children}) => {
    return (
        <button className="btn neumorphic-btn">
            {children}
        </button>
    )
}

export default Button
