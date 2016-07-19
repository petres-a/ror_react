class CommentForm extends React.Component {
  static get contextTypes() {
    return {
      actions: React.PropTypes.func.isRequired
    }
  }
 
  constructor(props) {
    super()
    this.defaultState = {body: '', author: ''}
    this.state = this.defaultState
  }

  submitComment(event) {
    event.preventDefault()
    console.log(this.props)
    // I DONT NEED merge parent id!!!
    this.context.actions.addComment(_.merge(this.state, {parent_id: this.props.parent_id}))
    this.setState(this.defaultState)
  }

  onFieldChange(event) {
    let prop = {}
    prop[event.target.name] = event.target.value
    this.setState(prop)
  }

  render() {
    return (
      <form>
        <label htmlFor="">Author</label>
        <input type="text" name="author" onChange={this.onFieldChange.bind(this)} value={this.state.author} />
        <label htmlFor="">Comment</label>
        <textarea name="body" onChange={this.onFieldChange.bind(this)} value={this.state.body} cols="30" rows="10"></textarea>
        <button onClick={this.submitComment.bind(this)} type="submit">Submit</button>
      </form>
    )
  }
}

export default CommentForm
