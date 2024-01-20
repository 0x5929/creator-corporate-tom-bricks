type ButtonProps = {
    text: string
    type: 'active' | 'outline'
    size: 'xs' | 'sm' | 'md' | 'lg'
    brandColor:
        | 'neutral'
        | 'primary'
        | 'secondary'
        | 'accent'
        | 'ghost'
        | 'link'
}
function Button({ text, type, size, brandColor }: ButtonProps): JSX.Element {
    const buttonStyles: string[] = [
        'btn',
        `btn-${brandColor}`,
        `btn-${type}`,
        `btn-${size}`
    ]

    return <button className={buttonStyles.join(' ')}>{text}</button>
}

export default Button
