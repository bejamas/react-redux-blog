export interface IPost {
    id: number,
    title: string,
    content: string,
    voteCount:number,
    isFavorite: boolean,
}
export interface INavigationState {
    currentComponent:
      | "AllPostsComponent"
      | "AddNewPostComponent"
      | "FavoriteComponent"
      | "EditPostComponent"
      | "ViewPostComponent";
  }