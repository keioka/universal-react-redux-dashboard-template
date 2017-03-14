export const errorMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}