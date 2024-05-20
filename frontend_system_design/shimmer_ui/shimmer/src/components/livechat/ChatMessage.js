const ChatMessage = ({ name, avatar, message }) => {
  return (
    <div className="flex p-2">
      <img className="h-8 w-8 m-2 rounded-full" alt={name} src={avatar}></img>
      <p className="p-2">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </p>
    </div>
  );
};
export default ChatMessage;
