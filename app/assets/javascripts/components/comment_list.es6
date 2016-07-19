import Comment from '/components/comment'

class CommentList extends React.Component{
  static get contextTypes() {
    return {
      store: React.PropTypes.object.isRequired
    }
  }
  componentDidMount() {
    this.context.store.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    this.context.store.removeChangeListener(this._onChange.bind(this))
  }

  render() {
    // For each element in the list, map/transform into the structure in the return statement
    // return (<Comment key={comment.id} rank=={comment.rank} body={comment.body} author={ comment.author} />);
    console.log('commentlist render')
    return (
      <div>
        {this.context.store.comments().map((comment, i) => {
          return (<Comment key={i} {... comment} />)
        })}
      </div>
    )
  }

  _onChange() {
    this.forceUpdate()
  }

}

export default CommentList