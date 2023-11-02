// data model for attachmentMeta object inside attachments
interface LMAttachmentMetaUI {
    entityId?: string;
    format?: string;
    name?: string;
    ogTags: LMOGTagsUI;
    size?: number;
    duration?: number;
    pageCount?: number;
    url?: string;
}