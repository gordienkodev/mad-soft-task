
export interface AnswerData {
    id: string;
    type: 'single-choice' | 'multiple-choice' | 'short-answer' | 'long-answer';
    answer: string;
}

const LOCAL_STORAGE_KEY = 'quizAnswers';

export const loadAnswersFromStorage = (): AnswerData[] => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
};

export const saveAnswerToStorage = (answerData: AnswerData) => {
    const storedData = loadAnswersFromStorage();
    const updatedData = storedData.filter(data => data.id !== answerData.id);
    updatedData.push(answerData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
};

export const loadAnswerById = (id: string): AnswerData | undefined => {
    const storedData = loadAnswersFromStorage();
    return storedData.find(data => data.id === id);
};
