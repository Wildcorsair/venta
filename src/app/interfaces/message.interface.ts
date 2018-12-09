export interface Message {
  id: number;
  contactId: number;
  isIncoming: boolean;
  content: string;
  createdAt: string;
}
