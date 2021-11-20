import './Button.scss';

const Button = ({children}) => {
    return (
        <button className="neumorphic-btn neumorphic-btn_fab">
            {children}
        </button>
    )
}

export default Button
