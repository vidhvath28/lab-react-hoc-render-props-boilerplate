export default function LikePost(props) {

  return (
    <div>
      <button onClick={props.handlePostCount}>Like Post {props.LikePostCounter}</button>
    </div>
  )
}