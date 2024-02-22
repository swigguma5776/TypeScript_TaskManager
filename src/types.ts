export type Category = 'personal' | 'work' | 'health' | 'home' | 'finance' | 'other'

export interface Managing<T> {
    addTask(arg: T):void
    removeTask(arg: T):void
}