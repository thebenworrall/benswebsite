import Header from "./Header"




const Lay = (props) => {

    return (
       <div>
        <Header />
            <main>{props.children}</main>
        </div>
    )

}

export default Lay