import Button from './Button'

export default {
    component: Button,
    title: 'My Button',
    tags: ['autodocs']
}

export const Active = {
    args: {
        text: 'active',
        type: 'active',
        size: 'md',
        brandColor: 'primary'
    }
}
export const Outline = {
    args: {
        text: 'outline',
        type: 'outline',
        size: 'md',
        brandColor: 'secondary'
    }
}
export const LargeButton = {
    args: {
        text: 'large',
        type: 'primary',
        size: 'lg',
        brandColor: 'accent'
    }
}
export const Link = {
    args: {
        text: 'link',
        type: 'primary',
        size: 'md',
        brandColor: 'link'
    }
}
