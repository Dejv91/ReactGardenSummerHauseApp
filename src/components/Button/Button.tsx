

interface Props {
    toggleClassSelectAllCallback:any;
}


export const Button = (props:Props) => {




    return(<>
    
    <button onClick={props.toggleClassSelectAllCallback}>Wybierz wszystkie</button>
    
    </>)
}