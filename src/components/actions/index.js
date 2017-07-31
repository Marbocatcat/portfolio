

export const SUBMIT_BLOG = "SUBMIT_BLOG";

export function submitBlog(blog) {
  return {
    type: SUBMIT_BLOG,
    payload: blog,
  }
}
