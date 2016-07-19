import CommentStore from '/stores/comment_store'
import Actions from '/actions'
import CommentList from '/components/comment_list'
import CommentForm from '/components/comment_form'

class CommentSection extends React.Component {
  constructor(props) {
    super()
    this.store = new CommentStore()
    this.actions = Actions
    this.actions.setComments(JSON.parse(props.comments))
  }


  // for the children context
  static get childContextTypes() {
    return {
      store: React.PropTypes.object.isRequired,
      actions: React.PropTypes.func.isRequired
    }
  }

  // for the children context
  getChildContext() {
    return {
      store: this.store,
      actions: this.actions
    }
  }

  render() {
    return (
      <div>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}

window.CommentSection = CommentSection
export default CommentSection