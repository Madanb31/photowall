import React,{Component} from "react";
import Title from './Title';
import Photowall from "./Photowall";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved){
        console.log(postRemoved)
        this.setState((state)=>({
            posts: state.posts.filter(post=>post!==postRemoved)
        }))
    }

    render() {
        return <div>
            <Title title={'Photowall'}/>
            <Photowall posts={this.state.posts} onremovePhoto={this.removePhoto}/>
        </div>
    }
}

export default Main