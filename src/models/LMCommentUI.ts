// data model for comment
interface LMCommentUI {
    id?: string;
    postId?: string
    isEdited?: boolean;
    isLiked?: boolean;
    text?: string;
    userId?: string;
    level?: number
    likesCount?: number;
    repliesCount?: number
    user?: LMUserUI
    updatedAt?: number;
    createdAt?: number;
    menuItems?: Array<LMMenuItemsUI>;
    replies?: Array<LMCommentUI>
    parentComment?: LMCommentUI,
    parentId?: string,
    alreadySeenFullContent?: boolean,
    fromCommentLiked?: boolean,
    fromCommentEdited?: boolean,
    uuid?: string,
    tempId?: string
}
