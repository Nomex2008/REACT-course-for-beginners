const rootElement = document.getElementById('root');

console.log(rootElement);

//Main style
const wrapperStyle = {
    color: 'white',
    background:'#000',
    textAlign: 'center',
    padding: '20px 0 0 0',
    height:'100vh',
}

//style for objects
//title
const Title = {
    fontFamily: 'Nunito',
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '120%',  //60px 
}
//text
const text = {
    fontFamily: 'Nunito',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '120%', // 48px //

    padding:'40px 0 0 0',

    maxWidth: '1000px',
    margin: '0 auto',
}
const btn = {
    color:'#fff',
    background: 'blue',

    padding:'10px 20px',
    borderRadius: '8px',
    display: 'inline-block',

    margin: '20px auto 0',
}

//console style
console.log(wrapperStyle,Title,text);

//react DOM
ReactDOM.createRoot(rootElement).render(

    <div style={wrapperStyle}>

        <h1 style={Title}>My projectin in React2</h1>

        <div style={text}>
            <p>
            JSX for beginners. Using JSX syntax in React, practical examples, clear explanation
            </p>
        </div>

        <a className="btns" style={btn} target='_blank' href="https://github.com/Nomex2008">
            My GitHub)
        </a>

    </div>

);