import {useState} from "react";
import {Content, PublishButton, Title} from "./index"

const Article = (props) => {
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  console.log(isPublished)
  return (
    <div>
      <Title title={props.title} />
      <Content title={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  );
};

export default Article