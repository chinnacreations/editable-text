import {Component} from 'react'
import {
  MainContainer,
  Container,
  Heading,
  Input,
  Button,
  BlockCon,
  InlineText,
} from './styledComponents'

class EditableText extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  getText = event => {
    this.setState({text: event.target.value})
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <BlockCon>
            {isEditable ? (
              <Input value={text} type="text" onChange={this.getText} />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.changeStatus}>Save</Button>
            ) : (
              <Button onClick={this.changeStatus}>Edit</Button>
            )}
          </BlockCon>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableText
