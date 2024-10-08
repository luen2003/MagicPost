import mongoose from "mongoose";

const ChatMessageSchema = mongoose.Schema(
  {
    chatRoomId: String,
    sender: String,
    message: String,
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ChatMessage = mongoose.model("ChatMessage", ChatMessageSchema);

export default ChatMessage;
