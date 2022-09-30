import style from "../../styles/ImagePostStyle.module.scss";
import React from "react";
import { Image } from "@chakra-ui/react";

type Props = {
  urlImage: string;
};

const ImagePost: React.FC<Props> = ({ urlImage }) => {
  return (
    <div>
      <Image src={urlImage} alt="" className={style.centerCroped} />
    </div>
  );
};

export default ImagePost;
