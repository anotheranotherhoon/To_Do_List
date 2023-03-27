export const validateTodoInput = (todoContent : string)  => {
  return todoContent.replace(/ /g, "").length >= 1;
}
