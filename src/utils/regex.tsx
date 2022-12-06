export const validateToDoInput = (toDoContent : string)  => {
  return toDoContent.replace(/ /g, "").length >= 1;
}
