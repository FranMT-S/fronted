export interface MailResponse {
    _id: string
    Message_ID: string
    Date: Date
    From: string
    To: string
    Subject: string
    Cc: string
    Mime_Version: string
    Content_Type: string
    Content_Transfer_Encoding: string
    Bcc: string
    X_From: string
    X_To: string
    X_cc: string
    X_bcc: string
    X_Folder: string
    X_Origin: string
    X_FileName: string
    Content: string
}

export type MailReceivedResponse = Pick<MailResponse, "_id" | "Date" | "From" | "Subject">