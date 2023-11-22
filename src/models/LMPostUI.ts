// data model for post UI
interface LMPostUI {
    id: string;
    attachments?: Array<LMAttachmentUI>;
    commentsCount: number;
    communityId: number;
    createdAt: number;
    isEdited: boolean;
    isLiked: boolean;
    isPinned: boolean;
    isSaved: boolean;
    likesCount: number;
    menuItems: Array<LMMenuItemsUI>;
    replies?: Array<LMCommentUI>;
    text: string;
    updatedAt: number;
    userId: string;
    uuid: string;
    user: LMUserUI;
  }