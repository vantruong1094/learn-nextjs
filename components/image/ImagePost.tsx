
import style from "../../styles/ImagePostStyle.module.scss";
import React from "react";

type Props = {
    urlImage: string
}

const ImagePost: React.FC<Props> = ({ urlImage }) => {
    return (
        <div>
            <img src={urlImage} alt="Post image" className={style.centerCroped}/>
        </div>
        
    )
}

export default ImagePost;