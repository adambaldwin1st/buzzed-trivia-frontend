export enum QuestionType {
    FreeResponse = "FreeResponse",
    Binary = "Binary",
    List = "List"
}

export enum QuestionDifficulty {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}

export type Question = {
    text: string,
    type: QuestionType,
    pictures?: File[],
    correctAnswer: string,
    difficulty: QuestionDifficulty
};
