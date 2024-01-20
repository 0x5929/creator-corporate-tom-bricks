import { types } from 'react-bricks/frontend'
import layout from './layout'
import HeroUnit from './HeroUnit'
import features from './features'
import Pokemon from './Pokemon'
import MyButton from './ui/Button'

const bricks: types.Brick[] = [
    HeroUnit,
    ...layout,
    ...features,
    Pokemon,
    MyButton
]

export default bricks
