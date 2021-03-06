import React, { Fragment, useEffect, useState, useRef } from 'react';
import NavBar from '../components/navBar';
import { Button, Form } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { fetchOnePost, fetchComment } from '../http/postApi';
import jwt_decode from 'jwt-decode';
import { createComment } from '../http/postApi';

const CommentPage = observer(() => {
   const [picture, setPictures] = useState([]);
   const [commentPicture, setCommentPicture] = useState('');
   const [commentList, setCommentList] = useState([]);
   const messageRef = useRef();
   const { id } = useParams();

   useEffect(() => {
      fetchOnePost(id).then((data) => setPictures(data));
      fetchComment().then((response) => {
         setCommentList(response);
      });
   }, []);

   useEffect(() => {
      if (messageRef.current) {
         messageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
         });
      }
   });

   const addComment = () => {
      const userId = localStorage.getItem('token');
      const parseUser = jwt_decode(userId);
      const formData = new FormData();
      formData.append('comment', commentPicture);
      formData.append('author', parseUser.name);
      formData.append('userId', parseUser.id);
      formData.append('pictureId', id);
      createComment(formData);
      window.location.reload();
   };

   const filterComment = commentList.filter((post) => post.pictureId == id);

   return (
      <>
         <div style={{ height: 120 }}></div>

         <NavBar />
         <div className="comment__card">
            <div className="comment__card--img">
               <a href={"/" + picture.img}>
                  <img
                     className="comment__card--photo"
                     src={"/" + picture.img}
                     alt=""
                  />
               </a>
            </div>
            <div className="card__name">{picture.name}</div>
            <div className="card__description">
               ???????????????? : {picture.description}
            </div>
            <div className="card__author">
               ?????????? : <span>{picture.author}</span>
            </div>

            <div className="comment__list">
               {filterComment.map((post) => (
                  <ul ref={messageRef} key={post.id}>
                     <li>
                        <span>{post.author}</span> : {post.comment}
                     </li>
                  </ul>
               ))}
            </div>

            <Form.Control
               size="sm"
               className="mt-3"
               type="text"
               placeholder="?????????????? ?????????????????????? ?? ??????????????????????"
               value={commentPicture}
               onChange={(event) => setCommentPicture(event.target.value)}
            />

            <br />

            <div className="button">
               <button type="submit" onClick={addComment}>
                  ??????????????????
               </button>
            </div>
         </div>
      </>
   );
});

export default CommentPage;
