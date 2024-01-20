import { types, Text } from 'react-bricks/frontend'
import Button from '../../../components/ui/buttons/Button'

type MyButtonProps = {
    size: 'sm' | 'lg'
}
const MyButton: types.Brick = ({ size }: MyButtonProps) => {
    return (
        <Button size={size}>
            <Text
                propName="text"
                placeholder="test button"
                renderBlock={({ children }) => <span>{children}</span>}
            />
        </Button>
    )
}

MyButton.schema = {
    name: 'button',
    label: 'Button',
    getDefaultProps: () => ({
        text: 'test button!',
        size: 'sm'
    }),
    sideEditProps: [
        {
            name: 'size',
            label: 'Button size',
            type: types.SideEditPropType.Select,
            selectOptions: {
                display: types.OptionsDisplay.Radio,
                options: [
                    {
                        label: 'Large',
                        value: 'lg'
                    },
                    {
                        label: 'Small',
                        value: 'sm'
                    }
                ]
            }
        }
    ]
}

export default MyButton
