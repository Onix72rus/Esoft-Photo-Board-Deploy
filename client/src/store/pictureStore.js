import { makeAutoObservable } from 'mobx';

export default class PictureStore {
   constructor() {
      this._types = [];
      this._pictures = [];
      //this._comment = [];
      this._selectedType = {};
      //this._selectedComment = {};

      makeAutoObservable(this);
   }

   setTypes(types) {
      this._types = types;
   }

   setSelectedType(type) {
      this._selectedType = type;
   }

   setPictures(pictures) {
      this._pictures = pictures;
   }

   //setComment(comment) {
   //   this._comment = comment;
   //}

   //setSelectedComment(comment) {
   //   this._selectedComment = comment;
   //}

   //get comment() {
   //   return this._comment;
   //}

   get types() {
      return this._types;
   }

   get selectedType() {
      return this._selectedType;
   }

   get pictures() {
      return this._pictures;
   }
}
