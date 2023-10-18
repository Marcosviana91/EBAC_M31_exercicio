import StyleHeader from './style'

type Props = {
  title: string
}

const Header = (props: Props) => (
  <StyleHeader>
    <h1>{props.title}</h1>
  </StyleHeader>
)

export default Header
