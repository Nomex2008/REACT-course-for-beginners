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

//lesson2
const title2 = {
    fontFamily: 'Nunito',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20%',  //60px 

    margin: '80px 0 0 0',
}
const title3 = {
    fontFamily: 'Nunito',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20%',  //60px 

    margin: '20px 0 0 0',
}

let someLayout = 'JSX syntax'

let someLayout2 = (<h2 style={title3}>JSX syntax 2</h2>)
console.log(someLayout2)

let someSum = 2 * 1000

function returnSum(a,b) {
     return a + b
}

const someArr = [
    'Private',
    'Comunickation',
    'Enaglish',
]

//commit3
function Ifclick() {
    console.log('Click!')
}
function alertMasege() {
    alert("Hello world!")
}

//react DOM
ReactDOM.createRoot(rootElement).render(

    <div onClick={Ifclick} style={wrapperStyle}>

        <h1 style={Title}>My projectin in React2</h1>

        <div style={text}>
            <p>
                JSX for beginners. Using JSX syntax in React, practical examples, clear explanation
            </p>
        </div>

        <a className="btns" style={btn} target='_blank' href="https://github.com/Nomex2008">
            My GitHub)
        </a>

        <h2 style={title2}>
            {someLayout}
        </h2>

        {someLayout2}

        <p style={text}>
            Salary React-developra {someSum}$
        </p>

        <p style={text}>
            Salary JS-developra {returnSum(500,500)}$
        </p>

        {Boolean(someArr.length) &&
            <>
            <h2 style={title2}>
                Requirements:
            </h2>

            <ul style={text}>
                {
                    someArr.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            </>
        }
        <div onClick={alertMasege} style={{color:'red',fontSize:'20px',fontFamily: 'Nunito',margin:'20px 0 0 0',}}>
            Red
        </div>

    </div>

);