import { firebaseDb } from './firebaseModules';

/* class Firebase handles relationship with Firebase DB.
 * by intializing, set default action which might 
 *
 */

export default class Firebase {
  constructor(actions, reducer, path){
  	this._actions = actions
  	this._reducer = reducer
  	this._path    = path
    this._subscribing = false
  }

  // set path of firebase
  set path(value) {
  	this._path = value;
  }

 /* firebaseDb.ref().push
  * Generates a new child location using a unique key and returns its Reference.
  *
  * firebaseDb.ref().push(value, onComplete);
  */

  push(value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(this._path)
        .push(value, error => error ? reject(error) : resolve());
    });
  }

  //
  remove(key) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this._path}/${key}`)
        .remove(error => error ? reject(error) : resolve());
    });
  }

 /* firebaseDb.ref([path]).set
  * Writes data to this Database location.
  *
  * firebaseDb.ref([path]).set([value], [onComplete]);
  */
  // Writes data to this Database location.

  set(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this._path}/${key}`)
        .set(value, error => error ? reject(error) : resolve());
    });
  }

  update(key, value) {
    return new Promise((resolve, reject) => {
      firebaseDb.ref(`${this._path}/${key}`)
        .update(value, error => error ? reject(error) : resolve());
    });
  }

  subscribe(dispatch) {
    let ref = firebaseDb.ref(this.path)
    let initialized = false
    let list = []

    console.log(ref)
    console.log(this._path)
    console.log(this._actions)
    this._subscribing = true

    ref.once('value', snapshot => {
      initialized = true;
      console.log(this._actions)
      dispatch(this._actions.onLoad(list));
    });

    ref.on('child_added', snapshot => {
      console.log('child_added')
      if (initialized) {
        dispatch(this._actions.onAdd(this.unwrapSnapshot(snapshot)));
      } else {
        list.push(this.unwrapSnapshot(snapshot));
      }
    });

    ref.on('child_changed', snapshot => {
      dispatch(this._actions.onChange(this.unwrapSnapshot(snapshot)));
    });

    ref.on('child_removed', snapshot => {
      dispatch(this._actions.onRemove(this.unwrapSnapshot(snapshot)));
    });

    this._unsubscribe = () => ref.off();
  }

  unsubscribe() {
    this._unsubscribe();
  }

  unwrapSnapshot(snapshot) {
    return snapshot.val();
  }
}







