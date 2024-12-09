import { useState } from "react";
import { PiCloverFill } from "react-icons/pi";

const Container = (props) => {
  const [sentenceVisible, setSentenceVisible] = useState(false);

  const toggleSentence = () => {
    setSentenceVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="book">
        <img
          src={`/${props.book.image}.jpg`}
          alt={`${props.book.title}`}
          className="book-image"
          onClick={toggleSentence}
        />
          <div className="book-info">
          <div className="book-number">{props.book.no}</div>
          <a
            href={`https://search.kyobobook.co.kr/search?keyword=${props.book.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="book-title"
           >
             {props.book.title}
          </a>
          <div className="book-author">저자 : {props.book.author}</div>
          <div className="book-publisher">출판사 : {props.book.publisher}</div>
          <div className="book-rating">
            {[...Array(props.book.rating)].map((_, index) => (
              <PiCloverFill key={index} />
            ))}
          </div>
          <div className="book-introduction">{props.book.Introduction}</div>
        </div>
      </div>
      {sentenceVisible && (
        <div
        className="book-sentence"
        dangerouslySetInnerHTML={{ __html: props.book.sentence }}
      ></div>
      )}
      <div className="separator"></div>
    </>
  );
};

export default Container;
