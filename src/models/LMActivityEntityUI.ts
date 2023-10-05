interface LMActivityEntityUI {
    id: string,
    text: string,
    deleteReason?: string,
    deletedBy?: string,
    heading?: string,
    attachments?: Array<LMAttachmentUI>,
    communityId: number,
    isEdited: boolean,
    isPinned?: boolean,
    userId: string,
    user: LMUserUI,
    replies?: Array<LMCommentUI>,
    level?: number,
    createdAt: number,
    updatedAt: number,
    uuid: string,
    deletedByUUID?: string
}