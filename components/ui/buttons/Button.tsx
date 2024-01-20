import classnames from 'classnames'

type ButtonProps = {
    children: React.ReactNode
    size: 'sm' | 'lg'
}
const Button: React.FC<ButtonProps> = ({ children, size }: ButtonProps) => {
    return (
        <button
            className={classnames('btn', 'btn-primary', 'btn-outline', {
                'btn-lg': size === 'lg',
                'btn-sm': size === 'sm'
            })}
        >
            {children}
        </button>
    )
}

export default Button
