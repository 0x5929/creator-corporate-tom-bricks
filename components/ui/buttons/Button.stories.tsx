import Button from './Button'

export default {
    component: Button,
    title: 'My Button',
    tags: ['autodocs']
}

export const Large = {
    args: {
        size: 'lg',
        children: 'Big Button'
    }
}
export const Small = {
    args: {
        size: 'sm',
        children: 'Big Button'
    }
}
