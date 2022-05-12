import {useMemo} from "react";

const useSortedPosts = (posts, sort) => {
    const getSortedPosts = () => {
        console.log("Sorted post function called")
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }
    const sortedPosts = useMemo(getSortedPosts, [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const searchedAndSortedPosts = useMemo(() => {
        if (sortedPosts) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(query));
        } else {
            return sortedPosts;
        }
    }, [query, sortedPosts])
    return searchedAndSortedPosts;
}