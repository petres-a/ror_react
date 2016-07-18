var CommentList = React.createClass({
  componentDidMount: function() {
    commentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    commentStore.removeChangeListener(this._onChange);
  },

  render: function() {
    // For each element in the list, map/transform into the structure in the return statement
    console.log('commentlist render');
    return (
      <div>
        {commentStore.comments().map(function(comment){
          return (<Comment key={comment.id} {... comment} />);
        })}
      </div>
    );
    // return (<Comment key={comment.id} rank=={comment.rank} body={comment.body} author={ comment.author} />);
  },

  _onChange: function() {
    this.forceUpdate();
  }

});