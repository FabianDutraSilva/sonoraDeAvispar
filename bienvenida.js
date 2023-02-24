class Bienvenida extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <>
                <p>Dime tu nombre</p>
                <input type="text" placeholder="Enter your name"></input>
            </>
        );
    }
}