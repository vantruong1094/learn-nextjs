
import style from "../../styles/ImagePostStyle.module.scss";

const ImagePost = (props) => {
    
    return (
        <div>
            <img src={props.src} alt="Post image" className={style.centerCroped}/>
        </div>
        
    )
}

export default ImagePost;