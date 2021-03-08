export class ToggleDto {
    displayName?: string;
    technicalName: string;
    expiresOn?: Date;
    description?: string;
    isInverted: boolean;
    customerIds: string[];
}