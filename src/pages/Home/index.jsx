import Header from "../../components/Header";

import Body from '../../components/Body'
import Footer from "../../components/Footer";

function Home({mode=1}) {
  console.log(`mode = ${mode}`)
  return (
    <div>
        <Header mode={mode}/>
        <Body />
        <Footer />
    </div>
  );
}

export default Home;