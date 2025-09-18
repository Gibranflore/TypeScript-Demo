
export interface ScrambleState {
    currentWord:    string
    errorCounter:   number
    guess:          string
    isGameOver:     boolean
    maxAllowErrors: number
    maxSkips:       number
    points:         number
    scrambledWord:  string
    skipCounter:    number
    totalWord:      number
    words:          string[]
}

export type ScrableReducer = {
    type: 'hola_mundo'
}

const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
    ];

     // Esta función mezcla el arreglo para que siempre sea aleatorio
    const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
    };

    // Esta función mezcla las letras de la palabra
    const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
    };

    export const getInitialState = ():ScrambleState => {
        
        const shuffleWord = shuffleArray([...GAME_WORDS])
        
        return {
            currentWord:   shuffleWord[0],    
            errorCounter:   0,   
            guess:         '',          
            isGameOver:     false,
            maxAllowErrors: 3, 
            maxSkips:       3,       
            points:         0,
            scrambledWord: scrambleWord(shuffleWord[0]),  
            skipCounter:    0,    
            totalWord:      shuffleWord.length,        
            words:          shuffleWord
        }
    }

export type ScrambleAction = 
| {type: 'SET_GUESS', payload: string}
| {type: 'CHECK_ANSWER'}
| {type: 'SKIP_WORD'}
| {type: 'START_NEW_GAME', payload: ScrambleState}

export const ScrambleWordReducer = (state: ScrambleState, action:ScrambleAction):ScrambleState => {

    switch (action.type) {

        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase()
            }
        case 'CHECK_ANSWER': {
        const newWord = state.words.slice(1)
            if (state.currentWord === state.guess) {
                return {
                    ...state,
                    words: newWord,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWord[0],
                    scrambledWord: scrambleWord(newWord[0])
                }
            }
            return {
                ...state,
                guess: '',
                errorCounter: state.errorCounter + 1,
                isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
            }
        }

        case 'SKIP_WORD': {
            if (state.skipCounter >= state.maxSkips) return state;
            
            const upadateWords = state.words.slice(1)
        
            return {
                ...state,
                scrambledWord: scrambleWord(upadateWords[0]),
                currentWord: upadateWords[0],
                skipCounter: state.skipCounter + 1,
                words: upadateWords,
                guess: ''

            }
            
        }
        
        case 'START_NEW_GAME': {
            return action.payload

    }
    
    default:
        return state;
    }
    
}
