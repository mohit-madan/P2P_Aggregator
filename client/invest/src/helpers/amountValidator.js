export function amountValidator(props, number){
    if (!number) return "Amount can't be empty";
    if(props.action==='withdraw'){
        if(number>0 && number<=props.current){
            return "";
        }
        else{
            return `Amount should be between 0 and ${props.current}`;
        }
    }
    else if(props.action==='invest'){
        if(number>0){
            return "";
        }
        else{
            return `Amount should be greater than 0`;
        }
    }
    else{
        return "Invalid Type";
    }
}