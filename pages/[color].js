// import the colors array
import colors from '../data/colors.json'

export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  }

export async function getServerSideProps({ params }) {
    // find the info for just one color
//    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format.
    let color = params.color 
    return { props: { color } }
  }

//export async function getStaticPaths() {
  // loop through the colors array
  //const paths = colors.map(color => ({
    // return an object with params.color set to the color's name
    //params: { color: color.name }
  //}))

  // Paths will look like this:
  // [
  //   { params: { color: 'Marsala' } },
  //   { params: { color: 'Illuminating'} }
  //   ...
  // ]
  //return { paths, fallback: false }
//}