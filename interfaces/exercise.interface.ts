export interface IExercise {
    name: string;
    sets: IExerciseSet[];
}

export interface IExerciseSet {
    trophy?: boolean;
    weight: number;
    reps: number;
}
