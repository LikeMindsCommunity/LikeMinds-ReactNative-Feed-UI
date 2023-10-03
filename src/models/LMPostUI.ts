// data model for post UI
interface LMPostUI {
    id: string;
    attachments: Array<LMAttachmentUI>
    commentsCount: number;
    communityId: string;
    createdAt: number;
    heading: string;
    isEdited: boolean;
    isLiked: boolean;
    isPinned: boolean;
    isSaved: boolean;
    likesCount: number;
    menuItems: Array<LMMenuItemsUI>;
    tempId: null;
    text: string;
    topics: null;
    updatedAt: number;
    userId: string;
    uuid: string;
    user: LMUserUI
}