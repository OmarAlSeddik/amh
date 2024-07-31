type EnMessages = typeof import("./messages/en.json");
type ArMessages = typeof import("./messages/ar.json");

declare type IntlMessages = EnMessages | ArMessages;
