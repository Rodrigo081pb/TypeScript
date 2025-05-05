export const soma = (num: number): number => {
    return num + 1
}

export const multi = (num: number, multi: number): number | string => {
    if(multi === 2 || multi === 3){
        return num * multi
    }

    return 'Erro'
}

