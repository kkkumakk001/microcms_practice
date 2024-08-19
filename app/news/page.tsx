import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import SearchField from "../_components/SearchField";

export const revalidate = 0;

export default async function Page() {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
        </>
    );
}
